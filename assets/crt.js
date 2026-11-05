// CRT look + echoes for the landing. Hand-written (no app export behind it). Used by js/enter-symbol.js,
// which hands over its finished picture (noise + Ø + the one glow) and lets this draw it to the screen.
//
// CRT: Timothy Lottes' public-domain CRT shader (libretro glsl-shaders, crt/shaders/crt-lottes.glsl):
// soft gaussian scanlines + slight sideways softness, worked out in linear light. Its "emulated pixels" are
// the Ø's own dots (--px), lined up on the Ø's dot grid, so every scanline sits on a row of dots.
// Left out on purpose: the RGB shadow mask (puts colour everywhere; colour is only for glitches here),
// curvature (the canvas is bigger than the window, so the bend would land differently on each screen),
// and the shader's own bloom (the page already has its one glow).
//
// Echoes: CRT phosphor persistence ("afterglow"). Each dot keeps a fading copy of its brightest recent
// light; new light overrides it (max, not added); it fades by exp(-dt / tau) each frame (MAME BGFX method).
// Still things show nothing extra. Anything that jumps or vanishes leaves a faint, fading copy behind.
;(function () {
  'use strict'

  // ---- Settings ------------------------------------------------------------------------------
  const CRT_AMOUNT = 0.6 // how much CRT is mixed over the clean picture (0 = none, 1 = full CRT)
  const SCAN_HARD = -8.0 // scanline sharpness (Lottes' default -8). Nearer 0 = softer, fatter lines
  const PIX_HARD = -3.0 // sideways softness = the blur (Lottes' default -3). Nearer 0 = blurrier
  const ECHO = 0.3 // how bright an echo starts, as a share of what made it (0 = no echoes)
  const ECHO_SECONDS = 0.4 // how long an echo takes to fade out (to about 5%)
  const PANEL_SOFT = 0.15 // room's item panel only: sideways blur on its words (0 = razor sharp, 0.33 = clearly soft)
  // ---------------------------------------------------------------------------------------------

  function readPx() {
    const v = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--px'),
    )
    return v > 0 ? v : 4
  }

  const VERT =
    'varying vec2 vUv;\nvoid main() { vUv = uv; gl_Position = vec4(position, 1.0); }'

  // One texel per dot: the dot's colour now, or its fading echo, whichever is brighter.
  const ECHO_FRAG = [
    'uniform sampler2D tCur;',
    'uniform sampler2D tPrev;',
    'uniform vec4 uGrid;', // xy: corner of the first dot cell (px), zw: dot cell size (px)
    'uniform vec2 uRes;',
    'uniform float uDecay;',
    'varying vec2 vUv;',
    'void main() {',
    '  vec2 cell = floor(gl_FragCoord.xy);',
    '  vec2 c = (uGrid.xy + (cell + 0.5) * uGrid.zw) / uRes;',
    '  vec3 cur = texture2D(tCur, c).rgb;',
    '  vec3 prev = texture2D(tPrev, vUv).rgb * uDecay;',
    '  gl_FragColor = vec4(max(cur, prev), 1.0);',
    '}',
  ].join('\n')

  const SHOWN_FRAG = [
    'uniform sampler2D tCur;',
    'uniform sampler2D tEcho;',
    'uniform vec4 uGrid;',
    'uniform vec2 uRes;',
    'uniform float uEcho;',
    'varying vec2 vUv;',
    'void main() {',
    '  vec2 cell = floor(gl_FragCoord.xy);',
    '  vec2 c = (uGrid.xy + (cell + 0.5) * uGrid.zw) / uRes;',
    '  vec3 cur = texture2D(tCur, c).rgb;',
    '  vec3 e = texture2D(tEcho, vUv).rgb * uEcho;',
    '  gl_FragColor = vec4(max(cur, e), 1.0);',
    '}',
  ].join('\n')

  // Lottes' Tri(): three rows, each filtered sideways with a gaussian, weighted by gaussian scanlines.
  const CRT_FRAG = [
    'uniform sampler2D tCur;',
    'uniform sampler2D tCells;',
    'uniform vec4 uGrid;',
    'uniform vec2 uCells;',
    'uniform float uAmount;',
    'uniform float uScanHard;',
    'uniform float uPixHard;',
    'uniform sampler2D tSharp;', // room only: the item panel's picture (see setSharp)
    'uniform vec4 uSharpRect;', // where the panel is, in 0..1 of the picture
    'uniform float uSharpOn;',
    'uniform float uSharpSoft;',
    'uniform vec2 uRes;',
    'varying vec2 vUv;',
    'vec3 toLin(vec3 c) {',
    '  c = max(c, vec3(0.0));',
    '  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));',
    '}',
    'vec3 toSrgb(vec3 c) {',
    '  c = max(c, vec3(0.0));',
    '  return mix(c * 12.92, 1.055 * pow(c, vec3(0.41666)) - 0.055, step(vec3(0.0031308), c));',
    '}',
    'float gaus(float pos, float scale) { return exp2(scale * pos * pos); }',
    'vec3 fetch(vec2 cell, vec2 off) { return toLin(texture2D(tCells, (cell + off + 0.5) / uCells).rgb); }',
    'vec3 horz3(vec2 cell, float dx, float row) {',
    '  float wb = gaus(dx - 1.0, uPixHard);',
    '  float wc = gaus(dx, uPixHard);',
    '  float wd = gaus(dx + 1.0, uPixHard);',
    '  return (fetch(cell, vec2(-1.0, row)) * wb + fetch(cell, vec2(0.0, row)) * wc + fetch(cell, vec2(1.0, row)) * wd) / (wb + wc + wd);',
    '}',
    'vec3 horz5(vec2 cell, float dx, float row) {',
    '  float wa = gaus(dx - 2.0, uPixHard);',
    '  float wb = gaus(dx - 1.0, uPixHard);',
    '  float wc = gaus(dx, uPixHard);',
    '  float wd = gaus(dx + 1.0, uPixHard);',
    '  float we = gaus(dx + 2.0, uPixHard);',
    '  return (fetch(cell, vec2(-2.0, row)) * wa + fetch(cell, vec2(-1.0, row)) * wb + fetch(cell, vec2(0.0, row)) * wc',
    '        + fetch(cell, vec2(1.0, row)) * wd + fetch(cell, vec2(2.0, row)) * we) / (wa + wb + wc + wd + we);',
    '}',
    'void main() {',
    '  vec2 p = (gl_FragCoord.xy - uGrid.xy) / uGrid.zw;',
    '  vec2 cell = floor(p);',
    '  vec2 dst = -(p - cell - 0.5);',
    '  vec3 crt = horz3(cell, dst.x, -1.0) * gaus(dst.y - 1.0, uScanHard)',
    '           + horz5(cell, dst.x, 0.0) * gaus(dst.y, uScanHard)',
    '           + horz3(cell, dst.x, 1.0) * gaus(dst.y + 1.0, uScanHard);',
    '  vec3 clean = texture2D(tCur, vUv).rgb;',
    // The item panel's words: same scanlines, but NOT the 3 px blocks (they keep one pixel in nine, so thin letter
    // strokes came out fat or vanished: the user's "uneven letters", Oct 12 2026). Mask = the panel's alpha, 2 px wider.
    '  if (uSharpOn > 0.5) {',
    '    vec2 q = (vUv - uSharpRect.xy) / uSharpRect.zw, d = 2.0 / (uRes * uSharpRect.zw);',
    '    float a = 0.0;',
    '    for (int i = -1; i <= 1; i++) {',
    '      for (int j = -1; j <= 1; j++) {',
    '        vec2 s = q + vec2(float(i), float(j)) * d;',
    '        if (s.x >= 0.0 && s.x <= 1.0 && s.y >= 0.0 && s.y <= 1.0) a = max(a, texture2D(tSharp, s).a);',
    '      }',
    '    }',
    // a hair of sideways softness, like an old console (user: "a tiny tiny bit too sharp")
    '    vec2 px1 = vec2(1.0 / uRes.x, 0.0);',
    '    vec3 soft = clean * (1.0 - 2.0 * uSharpSoft) + (texture2D(tCur, vUv - px1).rgb + texture2D(tCur, vUv + px1).rgb) * uSharpSoft;',
    '    float m = smoothstep(0.0, 0.25, a);',
    '    vec3 sharp = toLin(soft) * (gaus(dst.y - 1.0, uScanHard) + gaus(dst.y, uScanHard) + gaus(dst.y + 1.0, uScanHard));',
    '    crt = mix(crt, sharp, m);',
    '    clean = mix(clean, soft, m);',
    '  }',
    '  gl_FragColor = vec4(mix(clean, toSrgb(crt), uAmount), 1.0);',
    '}',
  ].join('\n')

  window.ZL_CRT = {
    tailMs: ECHO_SECONDS * 1000 + 100, // keep drawing this long after the Ø has gone, so echoes fade out

    // W, H: canvas size. cx, cy: a corner of the Ø's dot grid (the Ø's centre), in px from the canvas's bottom left.
    create: function (renderer, W, H, cx, cy) {
      const px = readPx()
      const grid = new THREE.Vector4()
      const cells = new THREE.Vector2()
      const res = new THREE.Vector2()
      let input = null,
        echoA = null,
        echoB = null,
        shown = null
      let last = 0

      const scene = new THREE.Scene()
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
      const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2))
      scene.add(quad)
      const opts = { depthTest: false, depthWrite: false }

      const echoMat = new THREE.ShaderMaterial(
        Object.assign(
          {
            vertexShader: VERT,
            fragmentShader: ECHO_FRAG,
            uniforms: {
              tCur: { value: null },
              tPrev: { value: null },
              uGrid: { value: grid },
              uRes: { value: res },
              uDecay: { value: 1 },
            },
          },
          opts,
        ),
      )
      const shownMat = new THREE.ShaderMaterial(
        Object.assign(
          {
            vertexShader: VERT,
            fragmentShader: SHOWN_FRAG,
            uniforms: {
              tCur: { value: null },
              tEcho: { value: null },
              uGrid: { value: grid },
              uRes: { value: res },
              uEcho: { value: Math.min(ECHO / Math.max(CRT_AMOUNT, 0.001), 1) },
            },
          },
          opts,
        ),
      )
      const crtMat = new THREE.ShaderMaterial(
        Object.assign(
          {
            vertexShader: VERT,
            fragmentShader: CRT_FRAG,
            uniforms: {
              tCur: { value: null },
              tCells: { value: null },
              uGrid: { value: grid },
              uCells: { value: cells },
              uAmount: { value: CRT_AMOUNT },
              uScanHard: { value: SCAN_HARD },
              uPixHard: { value: PIX_HARD },
              tSharp: { value: null },
              uSharpRect: { value: new THREE.Vector4(0, 0, 1, 1) },
              uSharpOn: { value: 0 },
              uSharpSoft: { value: PANEL_SOFT },
              uRes: { value: res },
            },
          },
          opts,
        ),
      )

      function build(w, h, x, y) {
        ;[input, echoA, echoB, shown].forEach(function (t) {
          if (t) t.dispose()
        })
        const x0 = (((x % px) + px) % px) - px
        const y0 = (((y % px) + px) % px) - px
        const nx = Math.ceil((w - x0) / px)
        const ny = Math.ceil((h - y0) / px)
        grid.set(x0, y0, px, px)
        cells.set(nx, ny)
        res.set(w, h)
        input = new THREE.WebGLRenderTarget(w, h, {
          minFilter: THREE.LinearFilter,
          magFilter: THREE.LinearFilter,
          format: THREE.RGBAFormat,
          type: THREE.UnsignedByteType,
          depthBuffer: false,
        })
        const cellOpts = {
          minFilter: THREE.NearestFilter,
          magFilter: THREE.NearestFilter,
          format: THREE.RGBAFormat,
          type: THREE.HalfFloatType,
          depthBuffer: false,
        }
        echoA = new THREE.WebGLRenderTarget(nx, ny, cellOpts)
        echoB = new THREE.WebGLRenderTarget(nx, ny, cellOpts)
        shown = new THREE.WebGLRenderTarget(nx, ny, cellOpts)
        last = 0
      }
      build(W, H, cx, cy)

      function draw(mat, target) {
        quad.material = mat
        renderer.setRenderTarget(target)
        renderer.clear()
        renderer.render(scene, camera)
      }

      return {
        get target() {
          return input
        }, // enter-symbol.js draws its finished picture into this
        render: function () {
          const now = performance.now()
          const dt = last ? Math.min(Math.max((now - last) / 1000, 0), 0.1) : 0
          last = now
          echoMat.uniforms.tCur.value = input.texture
          echoMat.uniforms.tPrev.value = echoA.texture
          echoMat.uniforms.uDecay.value = Math.exp(-dt / (ECHO_SECONDS / 3))
          draw(echoMat, echoB)
          const t = echoA
          echoA = echoB
          echoB = t // echoA is now the newest
          shownMat.uniforms.tCur.value = input.texture
          shownMat.uniforms.tEcho.value = echoA.texture
          draw(shownMat, shown)
          crtMat.uniforms.tCur.value = input.texture
          crtMat.uniforms.tCells.value = shown.texture
          draw(crtMat, null)
        },
        resize: function (w, h, x, y) {
          build(w, h, x, y)
        },
        // room only: the item panel's picture and where it sits (0..1), or null when there is none
        setSharp: function (texture, rect) {
          const u = crtMat.uniforms
          u.uSharpOn.value = texture ? 1 : 0
          u.tSharp.value = texture
          if (rect) u.uSharpRect.value.copy(rect)
        },
      }
    },
  }
})()
