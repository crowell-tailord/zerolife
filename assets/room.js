// The room: what comes after the landing, on the same page (index.html). Hand-written.
//
// Everything on the page is drawn into one full-screen "content" picture, and that picture goes through
// the Ø's own effects (js/room-fx.js: RGB split, dots, jitter, band glitch), at the landing's sizes.
// Under it: the landing's background noise (js/pixel-noise.js) on the #0C0C0C Solid. Over everything:
// the one glow, then the CRT look and echoes (js/crt.js). Same canvas size rules as the landing, so all
// the dot grids sit in the same place.
//
// No hover: everything is clean between glitch hits, and the hits (with their RGB split) come on their own
// at random, over the whole screen. First, the enter video (from the old site) plays once through the effects
// (Oct 10 2026, user's test); then the room as before. FOR TESTING: the 3D tee (js/room-tee.js) with its swing physics, and a
// flat picture you can drag around (switched off below).
;(function () {
  'use strict'

  // ---- Settings ------------------------------------------------------------------------------
  const SHOW_VIDEO = true // the enter video, once, through the effects, before the tee
  const VIDEO_SPEED = 1.2 // how fast it plays (1 = as made, 1.2 = 20% faster)
  const SHOW_TEE = true // the 3D models, chosen with the buttons after the video (drag to move, drag the empty space to turn)
  const SHOW_TEST_IMAGE = false // the flat test picture (drag it around)
  const TEST_IMAGE_WIDTH = 500 // how wide the test picture is drawn, in px
  const HIT_GAP_MIN = 2.0 // hover glitch timing, same as the landing
  const HIT_GAP_MAX = 6.0
  const HIT_LEN_MIN = 0.1
  const HIT_LEN_MAX = 0.4
  const BACKGROUND = '#0C0C0C' // the bottom Solid layer, as on the landing
  // ---------------------------------------------------------------------------------------------

  const FX = window.ZL_ROOM_FX

  // Canvas size: exactly the landing's rule (covers the window, multiples of 10 px, never under 1000 x 1080,
  // at most 2560 x 1440, centred), so the dot grids land in the same place.
  const MIN_W = 1000,
    MIN_H = 1080,
    MAX_W = 2560,
    MAX_H = 1440
  let W = MIN_W,
    H = MIN_H
  function size() {
    W = Math.min(Math.max(Math.ceil(window.innerWidth / 10) * 10, MIN_W), MAX_W)
    H = Math.min(
      Math.max(Math.ceil(window.innerHeight / 10) * 10, MIN_H),
      MAX_H,
    )
  }

  // ---- Hover glitch timing (random gap and length, as on the landing) ----
  const HIT = { start: 0, len: 0, hard: 0, scheduled: false }
  function rand(a, b) {
    return a + Math.random() * (b - a)
  }
  function nextHit(from) {
    HIT.start = from + rand(HIT_GAP_MIN, HIT_GAP_MAX)
    HIT.len = rand(HIT_LEN_MIN, HIT_LEN_MAX)
    HIT.hard = Math.random()
  }

  // ---- The content picture: everything the effects are laid over ----
  const content = document.createElement('canvas')
  const ctx = content.getContext('2d')
  const pic = { img: null, x: 0, y: 0, w: 0, h: 0, placed: false }
  let contentDirty = true

  // The enter video. Black in it becomes see-through (brightness = how solid), so the noise shows behind
  // it, the way the old site laid it over the page (screen blend). Fills the window, like the old site.
  const vid = { el: null, on: false, lastT: -1, frame: null, fctx: null }
  // Unpacked and loaded as soon as the page opens, so it can start the instant the room does.
  if (SHOW_VIDEO && window.ZL_ENTER_VIDEO) {
    const bytes = atob(window.ZL_ENTER_VIDEO),
      u8 = new Uint8Array(bytes.length)
    for (let k = 0; k < bytes.length; k++) u8[k] = bytes.charCodeAt(k)
    vid.el = document.createElement('video')
    vid.el.muted = true // silent, as on the old site
    vid.el.playsInline = true
    vid.el.preload = 'auto'
    vid.el.defaultPlaybackRate = VIDEO_SPEED
    vid.el.src = URL.createObjectURL(new Blob([u8], { type: 'video/webm' }))
    vid.el.load()
  }
  function videoFrame() {
    const v = vid.el
    if (!vid.frame) {
      vid.frame = document.createElement('canvas')
      vid.fctx = vid.frame.getContext('2d', { willReadFrequently: true })
    }
    if (
      vid.frame.width !== v.videoWidth ||
      vid.frame.height !== v.videoHeight
    ) {
      vid.frame.width = v.videoWidth
      vid.frame.height = v.videoHeight
    }
    vid.fctx.drawImage(v, 0, 0)
    const img = vid.fctx.getImageData(0, 0, vid.frame.width, vid.frame.height),
      d = img.data
    for (let k = 0; k < d.length; k += 4) {
      const m = Math.max(d[k], d[k + 1], d[k + 2])
      if (m > 0) {
        const f = 255 / m
        d[k] *= f
        d[k + 1] *= f
        d[k + 2] *= f
      }
      d[k + 3] = m
    }
    vid.fctx.putImageData(img, 0, 0)
  }

  function drawContent() {
    if (content.width !== W || content.height !== H) {
      content.width = W
      content.height = H
    }
    ctx.clearRect(0, 0, W, H)
    if (vid.on && vid.frame) {
      const s = Math.max(
        window.innerWidth / vid.frame.width,
        window.innerHeight / vid.frame.height,
      )
      const dw = vid.frame.width * s,
        dh = vid.frame.height * s
      ctx.drawImage(vid.frame, (W - dw) / 2, (H - dh) / 2, dw, dh)
    }
    if (pic.img) ctx.drawImage(pic.img, pic.x, pic.y, pic.w, pic.h)
  }

  // ---- The mannequins' files (Nov 4 2026) -------------------------------------------------------
  // NOT on the page at the start any more (they were ~73 MB, all downloaded before the room could even start, and every
  // new mannequin made that longer). Fetched here one after another once the page has loaded, while the landing shows,
  // each unpacked before the next comes (js/room-tee.js), in this order. A new mannequin = its two lines here (+ COLLECTION
  // below). The phone does the same with its own lighter copies (js/mobile.js). (tools/build-phone-share.mjs and
  // tools/build-site-release.mjs find these names here and copy the files along.)
  const MODEL_FILES = {
    catwalk: 'assets/catwalk-glb.js',
    catwalk_fall: 'assets/catwalk-fall-glb.js',
    hoodie: 'assets/hoodie-glb.js',
    hoodie_fall: 'assets/hoodie-fall-glb.js',
  }
  const fileState = {} // name -> 'loading' | 'here' | 'failed'
  function fileHere(name) {
    return !!(window.ZL_ROOM_TEE && window.ZL_ROOM_TEE.has(name))
  }
  function fetchNextFile() {
    const name = Object.keys(MODEL_FILES).find(function (n) {
      return !fileState[n]
    })
    if (!name || !window.ZL_ROOM_TEE) return
    if (window.ZL_VIDEO_PLAYING) {
      setTimeout(fetchNextFile, 500)
      return
    } // (never while the enter video plays)
    const arrived = function () {
      fileState[name] = 'here'
      window.ZL_ROOM_TEE.unpack(name).then(fetchNextFile)
    }
    if (fileHere(name)) {
      arrived()
      return
    } // (already on the page: the one-file share packs them in)
    fileState[name] = 'loading'
    const tag = document.createElement('script')
    tag.src = MODEL_FILES[name]
    tag.onload = arrived
    tag.onerror = function () {
      fileState[name] = 'failed'
      console.error('The ' + name + ' file could not be downloaded.')
      fetchNextFile()
    }
    document.body.appendChild(tag)
  }
  // (1.5 s after the page has loaded, as the files used to start unpacking: the landing gets going first)
  function fetchFilesSoon() {
    setTimeout(fetchNextFile, 1500)
  }
  if (document.readyState === 'complete') fetchFilesSoon()
  else window.addEventListener('load', fetchFilesSoon)
  // A mannequin can be set up once its file is here, and its fall's too (or the fall is missing / failed: then it has none).
  function modelReady(which) {
    if (!fileHere(which)) return false
    const fall = which + '_fall'
    return !MODEL_FILES[fall] || fileState[fall] === 'failed' || fileHere(fall)
  }

  let canvas = null

  function init() {
    canvas = document.getElementById('gl-canvas')
    size()
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: false,
      alpha: true,
    })

    renderer.setClearColor(0x000000, 0.0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setSize(W, H)

    drawContent()
    const contentTexture = new THREE.CanvasTexture(content)
    contentTexture.minFilter = THREE.LinearFilter
    contentTexture.magFilter = THREE.LinearFilter
    contentTexture.generateMipmaps = false

    // The Ø's effects, over the whole canvas.
    const material = new THREE.ShaderMaterial({
      vertexShader: FX.vertexShader,
      fragmentShader: FX.fragmentShader,
      uniforms: {
        tSource: { value: contentTexture },
        uResolution: { value: new THREE.Vector2(W, H) },
        uTime: { value: 0.0 },
        uOffset: { value: new THREE.Vector2(0, 0) },
        uScale: { value: new THREE.Vector2(1, 1) },
        uAspect: { value: new THREE.Vector2(1, 1) },
        uRotation: { value: 0.0 },
        uTint: { value: new THREE.Color('#ffffff') },
        uMouse: { value: new THREE.Vector3(0.5, 0.5, 0.0) },
        uMousePath: {
          value: Array.from(
            { length: 24 },
            () => new THREE.Vector3(0.5, 0.5, 99.0),
          ),
        },
        uHitCenter: { value: -100.0 },
        uHitHalf: { value: 0.1 },
        uHitHard: { value: 1.0 },
      },
      extensions: { derivatives: true },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    })
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1)
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material))

    const opts = {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
    }
    const layerTarget = new THREE.WebGLRenderTarget(W, H, opts)

    // Stack, as the app does: Solid, then the noise, then the content layer (Normal, 100%).
    const stackTarget = new THREE.WebGLRenderTarget(W, H, opts)
    const noise = window.ZL_NOISE
      ? window.ZL_NOISE.create(renderer, W, H)
      : null
    const stackMat = new THREE.ShaderMaterial({
      vertexShader:
        'varying vec2 vUv;\nvoid main() { vUv = uv; gl_Position = vec4(position, 1.0); }',
      fragmentShader: [
        'uniform sampler2D tNoise;',
        'uniform sampler2D tLayer;',
        'uniform float uHasNoise;',
        'uniform vec3 uBack;',
        'varying vec2 vUv;',
        'vec4 over(vec4 base, vec4 layer) {',
        '  return vec4(mix(base.rgb, layer.rgb, layer.a), clamp(base.a + layer.a * (1.0 - base.a), 0.0, 1.0));',
        '}',
        // The item panel (js/room-panel.js) goes in HERE, after the Ø's effects: through their 3 px dots no text was
        // readable (Oct 12 2026). It still gets the glow and the CRT look (next steps), and on the room's glitch hits
        // its rows jump sideways with a red / cyan split. uPanelRect = where, in 0..1 of the picture.
        'uniform sampler2D tPanel;',
        'uniform vec4 uPanelRect;',
        'uniform float uPanelOn;',
        'uniform float uHit;', // 1 during a glitch hit
        // A BURST (Oct 12 2026, user: the text "violently glitching in", never the red line): how far rows jump and the
        // colours split (x the normal hit), and how much of it drops out (rows, bands, the whole panel blinking).
        'uniform float uPanelAmp;',
        'uniform float uPanelDrop;',
        'uniform float uTime;',
        'uniform vec2 uRes;',
        'float zlHash(float n) { return fract(sin(n) * 43758.5453123); }',
        'vec4 panelAt(vec2 uv) {',
        '  vec2 q = (uv - uPanelRect.xy) / uPanelRect.zw;',
        '  if (q.x < 0.0 || q.x > 1.0 || q.y < 0.0 || q.y > 1.0) return vec4(0.0);',
        '  return texture2D(tPanel, q);',
        '}',
        'void main() {',
        '  vec4 acc = vec4(uBack, 1.0);',
        '  if (uHasNoise > 0.5) acc = over(acc, texture2D(tNoise, vUv));',
        '  acc = over(acc, texture2D(tLayer, vUv));',
        '  if (uPanelOn > 0.5) {',
        '    vec2 uv = vUv;',
        '    float t = floor(uTime * mix(20.0, 40.0, uPanelDrop));',
        '    float band = mix(6.0, 6.0 + 30.0 * zlHash(t * 0.37), uPanelDrop);', // in a burst: rows of random height
        '    float row = floor(uv.y * uRes.y / band);',
        '    uv.x += uHit * step(0.7 - 0.5 * uPanelDrop, zlHash(row * 1.7 + t)) * (zlHash(row + t * 3.1) - 0.5) * 0.03 * uPanelAmp;',
        '    vec2 sp = vec2(uHit * 4.0 * uPanelAmp / uRes.x, 0.0);',
        '    vec4 c = panelAt(uv), r = panelAt(uv + sp), b = panelAt(uv - sp);',
        '    float keep = (1.0 - step(zlHash(row * 5.3 + t * 1.9), uPanelDrop * 0.6)) * (1.0 - step(zlHash(t * 2.7 + 0.5), uPanelDrop * 0.35));',
        '    acc = over(acc, vec4(r.r, c.g, b.b, max(c.a, max(r.a, b.a)) * keep));',
        '  }',
        '  gl_FragColor = acc;',
        '}',
      ].join('\n'),
      uniforms: {
        tNoise: { value: null },
        tLayer: { value: null },
        uHasNoise: { value: noise ? 1.0 : 0.0 },
        uBack: { value: new THREE.Color(BACKGROUND) }, // converted the way the app converts a Solid's colour
        tPanel: { value: null },
        uPanelRect: { value: new THREE.Vector4(0, 0, 1, 1) },
        uPanelOn: { value: 0 },
        uHit: { value: 0 },
        uPanelAmp: { value: 1 },
        uPanelDrop: { value: 0 },
        uTime: { value: 0 },
        uRes: { value: new THREE.Vector2(W, H) },
      },
      depthTest: false,
      depthWrite: false,
    })
    const stackScene = new THREE.Scene()
    stackScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), stackMat))

    // The collection's two pictures (each mannequin centred in its own), shifted sideways and faded, laid into one
    // picture, which then goes through the Ø's effects like a single model's does.
    const collTarget = new THREE.WebGLRenderTarget(W, H, opts)
    const collMat = new THREE.ShaderMaterial({
      vertexShader:
        'varying vec2 vUv;\nvoid main() { vUv = uv; gl_Position = vec4(position, 1.0); }',
      fragmentShader: [
        'uniform sampler2D tA;',
        'uniform sampler2D tB;',
        'uniform vec2 uOff;', // sideways shift of each, in 0..1 of the picture
        'uniform vec2 uAlpha;', // how solid each is
        // how hard each is glitching (a pile's cleanup, js/room-tee.js): rows torn sideways in bands of random height,
        // a wide red / cyan split, rows dropping out
        'uniform vec2 uGlitch;',
        'uniform float uTime;',
        'uniform vec2 uRes;',
        'varying vec2 vUv;',
        'float zlHash(float n) { return fract(sin(n) * 43758.5453123); }',
        'vec4 at(sampler2D t, float off, float al, float g) {',
        '  vec2 uv = vUv - vec2(off, 0.0);',
        '  float tt = floor(uTime * 40.0), row = floor(uv.y * uRes.y / (4.0 + 30.0 * zlHash(tt * 0.37)));',
        '  if (g > 0.0) uv.x += step(1.0 - 0.7 * g, zlHash(row * 1.7 + tt)) * (zlHash(row + tt * 3.1) - 0.5) * 0.12 * g;',
        '  if (uv.x < 0.0 || uv.x > 1.0 || al <= 0.0) return vec4(0.0);',
        '  vec4 c = texture2D(t, uv);',
        '  if (g > 0.0) {',
        '    vec2 sp = vec2(14.0 * g / uRes.x, 0.0);',
        '    vec4 r = texture2D(t, uv + sp), b = texture2D(t, uv - sp);',
        '    c = vec4(r.r, c.g, b.b, max(c.a, max(r.a, b.a)));',
        '    c.a *= 1.0 - step(zlHash(row * 5.3 + tt * 1.9), g * 0.6);',
        '  }',
        '  c.a *= al; return c;',
        '}',
        'void main() {',
        '  vec4 a = at(tA, uOff.x, uAlpha.x, uGlitch.x), b = at(tB, uOff.y, uAlpha.y, uGlitch.y);',
        '  float o = b.a + a.a * (1.0 - b.a);',
        '  gl_FragColor = o > 0.0001 ? vec4((b.rgb * b.a + a.rgb * a.a * (1.0 - b.a)) / o, o) : vec4(0.0);',
        '}',
      ].join('\n'),
      uniforms: {
        tA: { value: null },
        tB: { value: null },
        uOff: { value: new THREE.Vector2() },
        uAlpha: { value: new THREE.Vector2() },
        uGlitch: { value: new THREE.Vector2() },
        uTime: { value: 0 },
        uRes: { value: new THREE.Vector2(W, H) },
      },
      depthTest: false,
      depthWrite: false,
    })
    const collScene = new THREE.Scene()
    collScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), collMat))

    let bloom = FX.createBloomChain(renderer, W, H)
    const crt = window.ZL_CRT
      ? window.ZL_CRT.create(renderer, W, H, W / 2, H / 2)
      : null
    // The 3D models: each drawn into its own picture, which then goes through the effects instead of the flat one.
    // TEMPORARY buttons (#models in index.html), shown when the video ends: TEE, and COLLECTION (Oct 12 2026, user's
    // order): the catwalk and hoodie mannequins standing side by side, DORMANT (grey, still). Click one: it glides to the
    // middle while the other glides away, then it downloads in (grey to live, top to bottom), plays, and its item panel
    // appears. Escape: back to both dormant; Escape again: back to the buttons. Each model is set up once and kept (the
    // files are unpacked in the background during the landing, see js/room-tee.js).
    const COLLECTION = ['catwalk', 'hoodie'] // left to right
    const SLIDE_SECONDS = 0.55 // the glide to (and back from) the middle (0.7 too slow, 0.4 too fast: user)
    const COLLECTION_GAP = 30 // space between the two, in px
    const models = {}
    let tee = null // the model on screen and picked, or null
    const picker = document.getElementById('models')
    // the collection: each picture's sideways shift (px) and how solid it is; anim = a glide in progress
    // front = the one drawn on top (the picked one); busy = a beam-out is running (no clicks)
    // hover = the one under the mouse that a click would pick / swap to; lit = how lit up each is (eases to hover)
    const coll = {
      on: false,
      off: {},
      alpha: {},
      anim: null,
      front: null,
      busy: false,
      hover: null,
      lit: {},
    }
    const HOVER_LIFT = 0.35,
      HOVER_GLITCH = 0.07 // a hovered one: this much more solid, and a faint interference
    // While one is open, the others wait at the right, dimmed (Oct 12 2026, user): click one to jump to it. The open one
    // is beamed out (js/room-tee.js beamOut: its clothes fall and stay as a grey pile if it has a fall), then the two
    // swap places: it goes to wait at the right, the clicked one glides to the middle and downloads in.
    const SLOT_ALPHA = 0.55 // how solid the waiting ones are (they read as further back)
    const SLOT_MARGIN = 24 // space between a waiting one and the window's right edge, in px
    function slotOffset(id) {
      const m = models[id]
      if (!m) return 0
      const half = m.edgeX(1) - W / 2
      return Math.max(
        half * 2,
        Math.min(W, window.innerWidth) / 2 - half - SLOT_MARGIN,
      )
    }
    function modelFor(which) {
      if (!models[which] && window.ZL_ROOM_TEE && modelReady(which)) {
        models[which] = window.ZL_ROOM_TEE.create(renderer, canvas, W, H, which)
        models[which].setActive(false)
      }
      return models[which]
    }
    function restingLayout() {
      // the two side by side around the middle, as far apart as the wider one needs
      let half = 0
      COLLECTION.forEach(function (id) {
        if (models[id]) half = Math.max(half, models[id].edgeX(1) - W / 2)
      })
      const out = {}
      COLLECTION.forEach(function (id, i) {
        out[id] = (i === 0 ? -1 : 1) * (half + COLLECTION_GAP / 2)
      })
      return out
    }
    function glide(off, alpha, done) {
      coll.anim = {
        t0: performance.now(),
        fromOff: Object.assign({}, coll.off),
        fromA: Object.assign({}, coll.alpha),
        off: off,
        alpha: alpha,
        done: done,
      }
    }
    function openModel(which) {
      if (!window.ZL_ROOM_TEE) return
      if (picker) picker.hidden = true
      if (which === 'root') {
        if (!pages || !pages.open('root')) return
        pagesOn = true
        startBurst(PAGES_IN, 'in', null, null)
        return
      }
      if (which === 'collection') {
        coll.on = true
        coll.anim = null
        coll.front = null
        coll.busy = false
        COLLECTION.forEach(function (id) {
          const m = modelFor(id)
          if (m) {
            m.setActive(false)
            m.setDormant()
          }
          coll.alpha[id] = 1
        })
        coll.off = restingLayout()
        return
      }
      tee = modelFor(which)
      if (!tee) return
      tee.setActive(true)
      queuePanel(which, tee)
    }
    // Everything starts on the click (Oct 12 2026, user: "too slow to happen"): the picked one starts coming alive (a pile
    // rises, the body downloads) while it glides to the middle, and its panel glitches in at once.
    function focusModel(id) {
      // collection: the picked one to the middle, the other to wait at the right
      const off = {},
        alpha = {}
      COLLECTION.forEach(function (k) {
        off[k] = k === id ? 0 : slotOffset(k)
        alpha[k] = k === id ? 1 : SLOT_ALPHA
      })
      coll.front = id
      tee = models[id]
      tee.setActive(true) // (a pile rises back up first)
      queuePanel(id, tee)
      glide(off, alpha, null)
    }
    function swapTo(id) {
      // the open one is beamed out (from the click), then the two swap places
      const old = tee,
        oldId = COLLECTION.find(function (k) {
          return models[k] === old
        })
      if (!old || !old.beamOut || !models[id]) return
      coll.busy = true
      closePanel() // the panel glitches out; it builds back up as the new body loads (queuePanel)
      pendingPanel = null
      old.beamOut(function () {
        // its clothes are falling: the clicked one comes alive while it glides in
        tee = models[id]
        tee.setActive(true)
        queuePanel(id, tee)
        coll.front = id
        const off = Object.assign({}, coll.off),
          alpha = Object.assign({}, coll.alpha)
        off[id] = 0
        alpha[id] = 1
        off[oldId] = slotOffset(oldId)
        alpha[oldId] = SLOT_ALPHA
        glide(off, alpha, function () {
          coll.busy = false
        })
      })
    }
    function unfocus() {
      // collection: back to both dormant, side by side
      tee.setActive(false)
      tee.setDormant()
      tee = null
      closePanel()
      pendingPanel = null
      coll.front = null
      const alpha = {}
      COLLECTION.forEach(function (k) {
        alpha[k] = 1
      })
      glide(restingLayout(), alpha, null)
    }
    // page text open over the room (a photo shown big, js/room-panel.js; the queue, js/cart.js): the room ignores clicks
    function overlayOpen() {
      return !!((window.ZL_PHOTO_OPEN && window.ZL_PHOTO_OPEN()) || queueOn)
    }
    // Only on the mannequin itself (Nov 1 2026, user, twice: a "massive space" beside it picked it): its own picture is
    // read back under the mouse (js/room-tee.js coverAt), HOVER_REACH px round, so it is wherever it is actually drawn,
    // its pile of clothes on the floor too. Moving the mouse, it is checked at most every HOVER_EVERY ms.
    const HOVER_REACH = 6,
      HOVER_EVERY = 50
    const hoverCache = { t: 0, id: null }
    function collectionAt(e, fresh) {
      // a dormant / waiting mannequin under the mouse, if any (never the open one)
      if (!coll.on || coll.anim || coll.busy || (tee && tee.busy)) return null // (not while the open one is still rising)
      if (overlayOpen() || e.target !== canvas) return null // (not through the page's own text and buttons: the queue's bar)
      const now = performance.now()
      if (!fresh && now - hoverCache.t < HOVER_EVERY) return hoverCache.id
      const c = toCanvas(e)
      let found = null
      for (const id of COLLECTION) {
        const m = models[id]
        if (
          m &&
          m !== tee &&
          m.coverAt &&
          m.coverAt(c.x - (coll.off[id] || 0), c.y, HOVER_REACH) > 0.2
        ) {
          found = id
          break
        }
      }
      hoverCache.t = now
      hoverCache.id = found
      return found
    }
    // A swap / pick is a CLICK (press and let go without moving): a drag that starts over the waiting one still turns
    // the open one. Hovering one lights it up (coll.hover, drawn in the frame loop) so you see what a click will do.
    const SWAP_MOVE = 6 // px the mouse may move between press and release and still count as a click
    let swapPress = null
    window.addEventListener(
      'pointerdown',
      function (e) {
        const id = collectionAt(e, true)
        swapPress = id ? { id: id, x: e.clientX, y: e.clientY } : null
        if (id && !tee) {
          e.stopPropagation()
          e.preventDefault()
        } // (nothing open to turn: the press is only the pick)
      },
      true,
    )
    window.addEventListener(
      'pointerup',
      function (e) {
        const p = swapPress
        swapPress = null
        if (
          !p ||
          Math.hypot(e.clientX - p.x, e.clientY - p.y) > SWAP_MOVE ||
          collectionAt(e, true) !== p.id
        )
          return
        if (tee) swapTo(p.id)
        else focusModel(p.id)
      },
      true,
    )
    window.addEventListener('pointermove', function (e) {
      if (!coll.on || !canvas) return
      coll.hover = e.buttons ? null : collectionAt(e) // (not while dragging)
      if (coll.hover) canvas.style.cursor = 'pointer'
      else if (!tee) canvas.style.cursor = ''
    })
    // MAKESHIFT item panel (js/room-panel.js, words in js/product-info.js): drawn into the model's picture, so it goes
    // through the effects; downloads in with the model; sits beside the model and moves out as you zoom in.
    const panel = window.ZL_PANEL ? window.ZL_PANEL.create() : null
    // TEMPORARY site pages (Oct 25 2026, js/room-pages.js, words js/site-pages.js): the machine's file directory, from the
    // [ 03 // ROOT ] button. Laid in exactly where the panel goes (only one of them shows at a time), centred.
    const pages = window.ZL_PAGES ? window.ZL_PAGES.create() : null
    // The cart page: the RECOVERY QUEUE (Nov 1 2026, js/room-queue.js), drawn like the pages, laid centred in their place
    // and over everything else (the panel, the pages, the menu): its own screen, the mannequins hidden while it shows.
    // Opened from its status bar (bottom right) or the panel's QUEUE line; ESC / CLOSE goes back to where you were.
    const queue = window.ZL_QUEUE_SHEET ? window.ZL_QUEUE_SHEET.create() : null
    window.ZL_DESK_QUEUE = queue // (the item panel's ADD TO CART adds to it)
    let queueOn = false,
      queueAt = null,
      queueFromMenu = false
    function openQueue() {
      if (!queue || queueOn || burst.t0 >= 0) return
      queueOn = true
      queueFromMenu = !!picker && !picker.hidden
      if (picker) picker.hidden = true
      queue.open()
      queue.setBar(false)
      startBurst(PAGES_IN, 'in', null, null)
    }
    function closeQueue() {
      if (!queueOn || burst.t0 >= 0) return
      startBurst(PANEL_OUT, 'out', null, function () {
        queueOn = false
        queueAt = null
        queue.setBar(true)
        if (queueFromMenu) showPicker()
        else if (panelOn || pagesOn) startBurst(PANEL_IN, 'in', null, null) // (the panel / page you were on glitches back in)
      })
    }
    function queueHit(e) {
      // the queue's button under the mouse, once it has settled
      if (!queueOn || !queueAt || burst.t0 >= 0) return null
      const c = toCanvas(e),
        a = queueAt
      return queue.hit((c.x - a.x) / a.s, (c.y - a.y) / a.s)
    }
    if (queue) {
      window.ZL_ROOM.openQueue = openQueue
      queue.setBar(true)
      // while it shows it has the mouse and the wheel to itself (caught first, so nothing under it moves)
      window.addEventListener(
        'pointerdown',
        function (e) {
          if (!queueOn || (window.ZL_PHOTO_OPEN && window.ZL_PHOTO_OPEN()))
            return
          e.stopImmediatePropagation()
          e.preventDefault()
          const r = queue.press(queueHit(e))
          if (!r) return
          if (r.close) closeQueue()
          else if (r.kick) startBurst(PAGES_SWAP, 'swap', null, null)
          else if (r.run === 'collection') {
            queueFromMenu = false
            startBurst(PANEL_OUT, 'out', null, function () {
              queueOn = false
              queueAt = null
              queue.setBar(true)
              if (pagesOn) {
                pagesOn = false
                panelAt = null
              }
              if (!coll.on && !tee) openModel('collection')
              else if (panelOn) startBurst(PANEL_IN, 'in', null, null)
            })
          }
        },
        true,
      )
      ;['pointerup', 'pointermove'].forEach(function (t) {
        window.addEventListener(
          t,
          function (e) {
            if (!queueOn || (window.ZL_PHOTO_OPEN && window.ZL_PHOTO_OPEN()))
              return
            e.stopImmediatePropagation()
            if (t === 'pointermove') {
              const id = queueHit(e)
              queue.setHover(id)
              if (canvas) canvas.style.cursor = id ? 'pointer' : ''
            }
          },
          true,
        )
      })
      window.addEventListener(
        'wheel',
        function (e) {
          if (!queueOn) return
          e.stopImmediatePropagation()
          e.preventDefault()
          queue.scrollBy(
            e.deltaMode === 1
              ? e.deltaY * 16
              : e.deltaMode === 2
                ? e.deltaY * 400
                : e.deltaY,
          )
        },
        { capture: true, passive: false },
      )
    }
    let pagesOn = false
    const PAGES_IN = 0.6,
      PAGES_SWAP = 0.4 // its glitch in, and from one file to another (seconds)
    const PAGES_HIT_RATE = 0.25 // its random glitch hits: this share of the item panel's (0.25 = a quarter as often)
    const QUEUE_HIT_RATE = 0.12,
      QUEUE_GLITCH = 0.4 // the queue's: rarer still, and every glitch on it this strong (Nov 1 2026, user: calmer)
    function pagePress(id) {
      // a click in the directory / a page: open a file, go back, or run the collection
      const r = pages.press(id)
      if (!r) return
      if (r.page)
        startBurst(
          PAGES_SWAP,
          'swap',
          function () {
            pages.open(r.page)
          },
          null,
        )
      else if (r.run === 'collection')
        startBurst(PANEL_OUT, 'out', null, function () {
          pagesOn = false
          panelAt = null
          openModel('collection')
        })
    }
    window.addEventListener(
      'wheel',
      function (e) {
        // scrolls a page (no model is open meanwhile)
        if (!pagesOn) return
        pages.scrollBy(
          e.deltaMode === 1
            ? e.deltaY * 16
            : e.deltaMode === 2
              ? e.deltaY * 400
              : e.deltaY,
        )
        e.preventDefault()
      },
      { passive: false },
    )
    const PANEL_GAP = 24 // space between the garment's outline and the panel, in px (was 48 from the whole figure's widest reach)
    const PANEL_PX =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--px'),
      ) || 3 // the CRT's dot grid
    let panelOn = false,
      panelAt = null // panelAt: where it was last laid, in canvas pixels (+ its scale)
    let panelModel = null // the model it sits beside
    const PANEL_HIT = { start: -1, len: 0 } // the panel's own glitch-hit timing (same gaps and lengths as the room's)
    // Its BURSTS (Oct 12 2026, user: no red line on the text, ever; gone while a swap happens, then a slower glitchy
    // "build up" as the new body loads): rows jump far, colours split wide, rows / bands / all of it drop out, settling
    // over the burst (coming in) or getting worse (going out). mid / end: called halfway / at the end.
    const PANEL_IN = 1.1,
      PANEL_SWAP = 0.35,
      PANEL_OUT = 0.3 // how long each burst lasts, in seconds (IN = the body's download)
    const PANEL_AMP = 6 // how much harder than a normal hit it starts
    // shape: 'in' (worst at once, calming), 'swap' (worst at the halfway switch), 'out' (worsening to the end)
    const burst = { t0: -1, dur: 0, shape: 'in', mid: null, end: null }
    function startBurst(dur, shape, mid, end) {
      burst.t0 = performance.now()
      burst.dur = dur
      burst.shape = shape
      burst.mid = mid
      burst.end = end
    }
    function openPanel(id, model) {
      if (!panel || !panel.open(id)) return
      panelOn = true
      panelModel = model
      panel.update(1) // drawn whole at once: the burst is the arrival
      startBurst(PANEL_IN, 'in', null, null)
    }
    // The panel waits for its model's body to start loading in (after a pile has risen), then builds up with it.
    let pendingPanel = null
    function queuePanel(id, model) {
      pendingPanel = { id: id, model: model }
    }
    function closePanel() {
      if (!panelOn) return
      startBurst(PANEL_OUT, 'out', null, function () {
        panelOn = false
        panelAt = null
        panelModel = null
      })
    }
    function panelButton(e) {
      // (toCanvas: below, shared with the test picture's dragging)   // the panel button under the mouse, once it has settled
      if (
        (!panelOn && !pagesOn) ||
        !panelAt ||
        burst.t0 >= 0 ||
        overlayOpen() ||
        e.target !== canvas
      )
        return null
      const c = toCanvas(e),
        a = panelAt
      return (pagesOn ? pages : panel).hit((c.x - a.x) / a.s, (c.y - a.y) / a.s)
    }
    // Caught before the model's own mouse handling, so pressing a button doesn't also turn the model.
    window.addEventListener(
      'pointerdown',
      function (e) {
        const id = panelButton(e)
        if (!id) return
        if (pagesOn) pagePress(id)
        else panel.press(id)
        e.stopPropagation()
        e.preventDefault()
      },
      true,
    )
    window.addEventListener('pointermove', function (e) {
      if (!panelOn && !pagesOn) return
      const id = panelButton(e)
      ;(pagesOn ? pages : panel).setHover(id)
      if (canvas && !collectionAt(e)) canvas.style.cursor = id ? 'pointer' : ''
    })
    function closeModel() {
      if (pagesOn) {
        // a page: back to the directory; the directory: glitches out, back to the buttons
        if (burst.t0 >= 0) return
        if (!pages.atRoot) {
          startBurst(
            PAGES_SWAP,
            'swap',
            function () {
              pages.open('root')
            },
            null,
          )
          return
        }
        startBurst(PANEL_OUT, 'out', null, function () {
          pagesOn = false
          panelAt = null
          contentDirty = true
          showPicker()
        })
        return
      }
      if (coll.on) {
        if (coll.anim || coll.busy) return
        if (tee) {
          unfocus()
          return
        }
        coll.on = false
        contentDirty = true
        showPicker()
        return
      }
      if (!tee) return
      tee.setActive(false)
      tee = null
      panelOn = false
      panelAt = null
      panelModel = null
      burst.t0 = -1
      pendingPanel = null
      contentDirty = true
      showPicker()
    }
    function hasModel(which) {
      if (which === 'root') return !!pages && !!window.ZL_SITE
      if (which === 'collection') return COLLECTION.some(hasModel)
      return (
        (!!MODEL_FILES[which] && fileState[which] !== 'failed') ||
        fileHere(which)
      ) // (still on its way counts)
    }
    let wantModels = false // the menu has shown: mannequins are set up from now on (late ones as their files arrive)
    function showPicker() {
      if (!SHOW_TEE || !picker) return
      wantModels = true
      picker.querySelectorAll('[data-model]').forEach(function (b) {
        const which = b.dataset.model
        b.hidden = !hasModel(which)
        // Get every model ready in the background while the buttons show, so opening one doesn't freeze the page
        // (js/room-tee.js prepares a little each frame: see warm() below in the frame loop).
        if (!b.hidden && which !== 'root')
          (which === 'collection' ? COLLECTION : [which]).forEach(modelFor)
      })
      picker.hidden = false
      if (window.ZL_ROOM_MENU) window.ZL_ROOM_MENU.show() // the menu terminal (js/room-menu.js) types / lays itself out
    }
    // the menu (js/room-menu.js) opens a model once it has typed "> OPENING ..."
    window.ZL_ROOM.open = openModel
    window.addEventListener('keydown', function (e) {
      if (
        e.key !== 'Escape' ||
        (window.ZL_PHOTO_OPEN && window.ZL_PHOTO_OPEN())
      )
        return
      if (queueOn) closeQueue()
      else closeModel()
    })
    function makeTee() {
      showPicker()
    }

    // ---- The enter video: plays once, straight away, then the room carries on as before ----
    if (vid.el) {
      const v = vid.el
      vid.on = true
      window.ZL_VIDEO_PLAYING = true // js/room-tee.js holds back unpacking the model files until it has finished
      const stop = function () {
        if (!vid.on) return
        vid.on = false
        window.ZL_VIDEO_PLAYING = false
        contentDirty = true
        makeTee()
      }
      v.addEventListener('ended', stop)
      v.addEventListener('error', function () {
        console.error('The enter video could not be played.')
        stop()
      })
      setTimeout(function () {
        if (vid.on && v.currentTime === 0) stop()
      }, 4000) // never got going: skip it
      v.playbackRate = VIDEO_SPEED
      const p = v.play()
      if (p && p.catch)
        p.catch(function (err) {
          console.error('The enter video could not start:', err)
          stop()
        })
    } else {
      makeTee()
    }

    // ---- Cursor (eases in and out like the landing's) ----
    const mouse = { x: 0.5, y: 0.5, p: 0, inside: false }
    let mouseLast = 0
    window.addEventListener(
      'pointermove',
      function (e) {
        const r = canvas.getBoundingClientRect()
        const nx = (e.clientX - r.left) / r.width
        const ny = (e.clientY - r.top) / r.height
        mouse.inside = nx >= 0 && nx <= 1 && ny >= 0 && ny <= 1
        if (mouse.inside) {
          mouse.x = nx
          mouse.y = 1 - ny
        }
      },
      { passive: true },
    )
    window.addEventListener('blur', function () {
      mouse.inside = false
    })
    window.addEventListener('pointerout', function (e) {
      if (!e.relatedTarget) mouse.inside = false
    }) // left the window

    // ---- Dragging the test picture ----
    const drag = { on: false, dx: 0, dy: 0, id: null }
    function toCanvas(e) {
      const r = canvas.getBoundingClientRect()
      return {
        x: (e.clientX - r.left) * (W / r.width),
        y: (e.clientY - r.top) * (H / r.height),
      }
    }
    function overPic(p) {
      return (
        pic.img &&
        p.x >= pic.x &&
        p.x <= pic.x + pic.w &&
        p.y >= pic.y &&
        p.y <= pic.y + pic.h
      )
    }
    canvas.addEventListener('pointerdown', function (e) {
      const p = toCanvas(e)
      if (!overPic(p)) return
      drag.on = true
      drag.id = e.pointerId
      drag.dx = p.x - pic.x
      drag.dy = p.y - pic.y
      canvas.setPointerCapture(e.pointerId)
      canvas.style.cursor = 'grabbing'
      e.preventDefault()
    })
    canvas.addEventListener('pointermove', function (e) {
      const p = toCanvas(e)
      if (drag.on && e.pointerId === drag.id) {
        pic.x = Math.round(p.x - drag.dx)
        pic.y = Math.round(p.y - drag.dy)
        contentDirty = true
      } else {
        if (pic.img) canvas.style.cursor = overPic(p) ? 'grab' : 'default'
      }
    })
    function endDrag(e) {
      if (!drag.on || e.pointerId !== drag.id) return
      drag.on = false
      canvas.style.cursor = overPic(toCanvas(e)) ? 'grab' : 'default'
    }
    canvas.addEventListener('pointerup', endDrag)
    canvas.addEventListener('pointercancel', endDrag)

    // ---- Load the test picture, put it in the middle of the window ----
    if (SHOW_TEST_IMAGE && window.ZL_TEST_IMAGE) {
      const img = new Image()
      img.onload = function () {
        pic.img = img
        pic.w = TEST_IMAGE_WIDTH
        pic.h = Math.round(
          (TEST_IMAGE_WIDTH * img.naturalHeight) / img.naturalWidth,
        )
        pic.x = Math.round((W - pic.w) / 2)
        pic.y = Math.round((H - pic.h) / 2)
        contentDirty = true
      }
      img.src = window.ZL_TEST_IMAGE
    }

    // ---- Resize (once the resizing has settled), same as the landing ----
    let resizeTimer = null
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(function () {
        const oldW = W,
          oldH = H
        size()
        if (W === oldW && H === oldH) return
        // Keep the picture where it was relative to the middle (the canvas stays centred on the window).
        pic.x += Math.round((W - oldW) / 2)
        pic.y += Math.round((H - oldH) / 2)
        renderer.setSize(W, H)
        layerTarget.setSize(W, H)
        stackTarget.setSize(W, H)
        collTarget.setSize(W, H)
        if (noise) noise.resize(W, H)
        bloom.targets.forEach(function (t) {
          t.dispose()
        })
        bloom = FX.createBloomChain(renderer, W, H)
        if (crt) crt.resize(W, H, W / 2, H / 2)
        Object.keys(models).forEach(function (k) {
          models[k].resize(W, H)
        })
        material.uniforms.uResolution.value.set(W, H)
        // A canvas texture cannot change size in place: make a fresh one.
        contentTexture.dispose()
        contentDirty = true
      }, 300)
    })

    // ---- Frame loop ----
    const startTime = performance.now()
    function animate(timestamp) {
      requestAnimationFrame(animate)
      if (document.hidden) return
      const elapsed = (timestamp - startTime) / 1000

      const now = performance.now()
      const dt = mouseLast ? Math.min((now - mouseLast) / 1000, 0.1) : 0
      mouseLast = now
      mouse.p += ((mouse.inside ? 1 : 0) - mouse.p) * Math.min(1, dt * 10)

      if (
        vid.on &&
        vid.el.readyState >= 2 &&
        vid.el.currentTime !== vid.lastT
      ) {
        vid.lastT = vid.el.currentTime // a new video picture: redo the content
        videoFrame()
        contentDirty = true
      }
      if (contentDirty) {
        contentDirty = false
        drawContent()
        contentTexture.needsUpdate = true
      }

      const u = material.uniforms
      u.uTime.value = elapsed
      if (!HIT.scheduled) {
        HIT.scheduled = true
        nextHit(0)
      }
      while (elapsed > HIT.start + HIT.len) nextHit(HIT.start)
      u.uHitCenter.value = HIT.start + HIT.len / 2
      u.uHitHalf.value = HIT.len / 2
      u.uHitHard.value = HIT.hard
      u.uMouse.value.set(mouse.x, mouse.y, mouse.p)
      for (let k = 0; k < 24; k++)
        u.uMousePath.value[k].set(mouse.x, mouse.y, k === 0 ? 0 : 99)

      // A mannequin whose file arrived late (a slow connection): set up now, and, if the collection is showing, it joins
      // it the way the others are (grey; waiting at the right if one is open). Not in the middle of a glide or a swap.
      if (wantModels && !(coll.on && (coll.anim || coll.busy))) {
        COLLECTION.forEach(function (id) {
          if (models[id] || !modelReady(id)) return
          const m = modelFor(id)
          if (!m || !coll.on) return
          m.setDormant()
          coll.alpha[id] = tee ? SLOT_ALPHA : 1
          coll.off[id] = tee ? slotOffset(id) : restingLayout()[id] || 0
        })
      }
      // Models not on screen: one small preparing step a frame, for one of them (see showPicker).
      for (const k in models) {
        if (models[k] !== tee && models[k].warm()) break
      }

      if (
        pendingPanel &&
        pendingPanel.model.revealed > 0 &&
        !(burst.t0 >= 0 && burst.shape === 'out')
      ) {
        openPanel(pendingPanel.id, pendingPanel.model)
        pendingPanel = null
      }
      if (panelOn && panelModel) {
        // The item panel: laid just left of its model's garment reach (so it moves out as you zoom in), never past the
        // window's edge, centred up and down, shrunk to fit a short window. (It arrives with a burst, see openPanel.)
        const tee = panelModel // (the model it belongs to: during a swap, already the incoming one)
        panel.update(1)
        const visL = Math.max(0, (W - window.innerWidth) / 2),
          visH = Math.min(H, window.innerHeight)
        const s = Math.min(
          1,
          Math.floor(((visH - 48) / panel.used) * 100) / 100,
        ) // in 1% steps (each change redraws it)
        panel.setScale(s)
        // snapped to the CRT's 3 px grid (it starts at the canvas middle), so its scanlines cut every line the same way
        const snap = (v, o) => o + Math.round((v - o) / PANEL_PX) * PANEL_PX
        const x = snap(
          Math.max(
            visL + 24,
            tee.garmentEdgeX(-1) - PANEL_GAP - panel.width * s,
          ),
          W / 2,
        )
        const y = snap(H / 2 - (panel.used * s) / 2, H / 2)
        panelAt = { x: x, y: y, s: s }
      }

      if (queueOn) {
        // the queue: like the pages (centred, from near the top, as wide as fits, scrolling inside)
        const visW = Math.min(W, window.innerWidth),
          visH = Math.min(H, window.innerHeight)
        const s = Math.min(
          1,
          Math.floor(((visW - 48) / queue.width) * 100) / 100,
        )
        queue.setScale(s)
        queue.setView((visH - 96) / s)
        queue.update()
        const snap = (v, o) => o + Math.round((v - o) / PANEL_PX) * PANEL_PX
        queueAt = {
          x: snap(W / 2 - (queue.width * s) / 2, W / 2),
          y: snap((H - visH) / 2 + 48, H / 2),
          s: s,
        }
      }
      if (pagesOn && pages) {
        // the pages: centred, from near the top, as wide as fits, scrolling inside
        const visW = Math.min(W, window.innerWidth),
          visH = Math.min(H, window.innerHeight)
        const s = Math.min(
          1,
          Math.floor(((visW - 48) / pages.width) * 100) / 100,
        )
        pages.setScale(s)
        pages.setView((visH - 96) / s)
        pages.update()
        const snap = (v, o) => o + Math.round((v - o) / PANEL_PX) * PANEL_PX // on the CRT's grid, like the panel
        panelAt = {
          x: snap(W / 2 - (pages.width * s) / 2, W / 2),
          y: snap((H - visH) / 2 + 48, H / 2),
          s: s,
        }
      }

      // The collection: both pictures laid together. Before one is picked: side by side. Once one is open: it in the
      // middle (on top), the other waiting at the right, dimmed. Also while they glide or swap.
      if (coll.on && !queueOn) {
        // (not drawn under the queue)
        if (coll.anim) {
          const a = coll.anim,
            k = Math.min(1, (performance.now() - a.t0) / 1000 / SLIDE_SECONDS),
            ease = k * k * (3 - 2 * k)
          COLLECTION.forEach(function (id) {
            coll.off[id] = a.fromOff[id] + (a.off[id] - a.fromOff[id]) * ease
            coll.alpha[id] = a.fromA[id] + (a.alpha[id] - a.fromA[id]) * ease
          })
          if (k >= 1) {
            coll.anim = null
            if (a.done) a.done()
          }
        } else if (!tee && !coll.busy) {
          coll.off = restingLayout() // (follows the models' real size once they are unpacked, and the window's)
        } else if (!coll.busy) {
          COLLECTION.forEach(function (id) {
            if (models[id] && models[id] !== tee) coll.off[id] = slotOffset(id)
          }) // (follows the window)
        }
        // back first, the picked one on top
        const order = coll.front
          ? COLLECTION.filter(function (k) {
              return k !== coll.front
            }).concat([coll.front])
          : COLLECTION
        const A = models[order[0]],
          B = models[order[1]],
          cu = collMat.uniforms
        if (A && coll.alpha[order[0]] > 0) A.render()
        if (B && coll.alpha[order[1]] > 0) B.render()
        cu.tA.value = A ? A.texture : null
        cu.tB.value = B ? B.texture : null
        cu.uOff.value.set(
          (coll.off[order[0]] || 0) / W,
          (coll.off[order[1]] || 0) / W,
        )
        // the hovered one lights up (more solid, a faint interference); eased in and out
        if (coll.hover && (coll.anim || coll.busy || coll.hover === coll.front))
          coll.hover = null
        COLLECTION.forEach(function (id) {
          coll.lit[id] =
            (coll.lit[id] || 0) +
            ((coll.hover === id ? 1 : 0) - (coll.lit[id] || 0)) *
              Math.min(1, dt * 12)
        })
        const lit = function (id) {
          return coll.lit[id] || 0
        }
        cu.uAlpha.value.set(
          A
            ? Math.min(1, coll.alpha[order[0]] + HOVER_LIFT * lit(order[0]))
            : 0,
          B
            ? Math.min(1, coll.alpha[order[1]] + HOVER_LIFT * lit(order[1]))
            : 0,
        )
        cu.uGlitch.value.set(
          A ? Math.max(A.glitch, HOVER_GLITCH * lit(order[0])) : 0,
          B ? Math.max(B.glitch, HOVER_GLITCH * lit(order[1])) : 0,
        )
        cu.uTime.value = elapsed
        cu.uRes.value.set(W, H)
        renderer.setRenderTarget(collTarget)
        renderer.setClearColor(0x000000, 0)
        renderer.clear()
        renderer.render(collScene, camera)
      }
      // The content, through the Ø's effects...
      if (queueOn) {
        u.tSource.value = contentTexture // (the queue is its own screen: no mannequins drawn under it)
      } else if (coll.on) {
        u.tSource.value = collTarget.texture
      } else if (tee && !vid.on) {
        tee.render()
        u.tSource.value = tee.texture
      } else {
        u.tSource.value = contentTexture
      }
      renderer.setRenderTarget(layerTarget)
      renderer.clear()
      renderer.render(scene, camera)
      // ...laid over the noise and the Solid...
      if (noise) noise.render(elapsed, 0, 1, 1)
      stackMat.uniforms.tNoise.value = noise ? noise.target.texture : null
      stackMat.uniforms.tLayer.value = layerTarget.texture
      const su = stackMat.uniforms // the item panel, laid in after the effects (see the stack shader)
      su.uPanelOn.value =
        (queueOn && queueAt) || ((panelOn || pagesOn) && panelAt) ? 1 : 0
      const sheet = queueOn ? queue : pagesOn ? pages : panel // (one of them at a time: the queue over the others)
      if (su.uPanelOn.value) {
        // the panel is drawn at its final size already (a.s is inside its picture), so it's laid 1:1, never stretched
        const a = queueOn ? queueAt : panelAt,
          pw = sheet.width,
          ph = sheet.height
        su.tPanel.value = sheet.texture
        su.uPanelRect.value.set(a.x / W, 1 - (a.y + ph) / H, pw / W, ph / H)
        su.uRes.value.set(W, H)
        su.uTime.value = elapsed
        // the panel's glitch hits come on their OWN random clock, not the room's (user: not everything at once)
        // on the ROOT pages they come at PAGES_HIT_RATE of the usual rate (Oct 25 2026, user: the tearing made them hard to read)
        const gapK = queueOn
          ? 1 / QUEUE_HIT_RATE
          : pagesOn
            ? 1 / PAGES_HIT_RATE
            : 1
        if (PANEL_HIT.start < 0) {
          PANEL_HIT.start = elapsed + rand(HIT_GAP_MIN, HIT_GAP_MAX) * gapK
          PANEL_HIT.len = rand(HIT_LEN_MIN, HIT_LEN_MAX)
        }
        while (elapsed > PANEL_HIT.start + PANEL_HIT.len) {
          PANEL_HIT.start +=
            PANEL_HIT.len + rand(HIT_GAP_MIN, HIT_GAP_MAX) * gapK
          PANEL_HIT.len = rand(HIT_LEN_MIN, HIT_LEN_MAX)
        }
        su.uHit.value = elapsed >= PANEL_HIT.start ? 1 : 0
        su.uPanelAmp.value = queueOn ? QUEUE_GLITCH : 1
        su.uPanelDrop.value = 0
        if (burst.t0 >= 0) {
          // a burst: hit all the way, much harder, calming (coming in) or worsening (going out)
          const k = Math.min(
              1,
              (performance.now() - burst.t0) / 1000 / burst.dur,
            ),
            w =
              burst.shape === 'out'
                ? k
                : burst.shape === 'swap'
                  ? 1 - Math.abs(2 * k - 1)
                  : 1 - k * k // ('in': broken for longer, then it resolves)
          su.uHit.value = 1
          su.uPanelAmp.value = 1 + (PANEL_AMP - 1) * w
          su.uPanelDrop.value = w
          if (burst.mid && k >= 0.5) {
            const f = burst.mid
            burst.mid = null
            f()
          }
          if (queueOn) {
            su.uPanelAmp.value = 1 + (su.uPanelAmp.value - 1) * QUEUE_GLITCH
            su.uPanelDrop.value *= QUEUE_GLITCH
          }
          if (k >= 1) {
            const f = burst.end
            burst.t0 = -1
            burst.end = null
            if (f) f()
          }
        }
      }
      renderer.setRenderTarget(stackTarget)
      renderer.clear()
      renderer.render(stackScene, camera)
      // ...one glow over all of it, then the CRT look and echoes onto the screen.
      const bloomTexture = bloom.renderBloom(
        stackTarget.texture,
        FX.BLOOM_CONFIG.threshold,
        FX.BLOOM_CONFIG.intensity,
        FX.BLOOM_CONFIG.radius,
      )
      bloom.composite(
        stackTarget.texture,
        bloomTexture,
        FX.BLOOM_CONFIG.intensity,
        crt ? crt.target : null,
      )
      // The panel keeps the CRT's scanlines but skips its 3 px blocks (they kept 1 pixel in 9: letters came out uneven)
      if (crt)
        crt.setSharp(
          su.uPanelOn.value ? sheet.texture : null,
          su.uPanelRect.value,
        )
      if (crt) crt.render()
    }
    requestAnimationFrame(animate)
  }

  // Started by index.html once the landing's Ø has broken apart (one page: no reload in between).
  window.ZL_ROOM = { start: init }
})()
