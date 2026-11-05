/* The CLO tee for the room page, with its swing/turn physics. Hand-written; the garment, light and physics
   are js/garment-test.js's, moved here so the tee is drawn INTO the room's picture and goes through the
   room's effects (dots, glitch hits, glow, CRT) like everything else.

   - The garment is the CLO export packed into js/garment-tee-glb.js by tools/build-garment-glb.mjs.
   - Drag the tee: it follows and swings like a pendulum from the shoulders. Drag the empty space: it turns,
     the hem lags and catches up. Let go: it stays where you left it (Oct 7 2026, user's order: no going back).
   - Mouse wheel / trackpad pinch: zoom in towards the cursor, so the print can be seen past the dots.
     Double-click: back to the normal view.
   - THE WALKING TEE (Oct 10 2026, user's test): if js/garment-tee-walk-glb.js is loaded, that tee is used instead. It
     carries a skeleton and a Mixamo walk (tools/blender-walking-tee.py) and walks on the spot, empty, like a phantom.
     Drag, turn and zoom work the same; the shader swing is off for it (the walk moves the cloth instead).
   - js/room.js asks for it with ZL_ROOM_TEE.create(renderer, canvas, W, H) and calls render() each frame.
*/
;(function () {
  'use strict'

  // ------------------------------------------------------------------ settings (as js/garment-test.js)
  const DT = 1 / 120
  const FOLLOW_K = 300,
    FOLLOW_C = 2 * Math.sqrt(300)
  const SWING_ZETA = 0.45,
    SWING_MAX = 0.14
  const TWIST_K = 20,
    TWIST_ZETA = 0.5,
    TWIST_GAIN = 0.6,
    TWIST_MAX = 0.6
  const FLARE_GAIN = 0.002,
    FLARE_MAX = 0.08
  const MOVE_LIMIT_X = 0.8,
    MOVE_LIMIT_Y = 0.45
  const ZOOM_MAX = 4 // closest zoom, x the normal view
  const ZOOM_SPEED = 0.0015 // how much one wheel notch zooms
  const ZOOM_EASE = 12 // how quickly the view glides to the new zoom (higher = snappier)
  const PRINT_BRIGHTNESS = 0.145 // CLO tee: prints drawn at this share of their full brightness (ink on fabric, not paper-white; user set 14-15%)
  // The catwalk mannequin's skin (same as catwalk-viewer.html): liquid chrome with a thin-film rainbow.
  const CHROME_COLOUR = '#d9dde0',
    CHROME_ROUGHNESS = 0.06,
    SHEEN_STRENGTH = 1.0,
    SHEEN_THICKNESS = [180, 620]
  // The hoodie mannequin's skin (Oct 11 2026, user: "a red cyberpunk virus... almost like a digital ghost"; then: the
  // flickering scraps "give it to the rest of the body, just make it a bit stronger on the face and hands"):
  // - All of him is a ghost made of scraps of the virus that flicker in and out; on his face and hands (read from which
  //   bones move each point of his skin: head, neck, hands) the scraps are more solid and come more often.
  // - The virus: dark red skin, small blocks stuck to the skin that light up on their own clocks, fine glowing dust,
  //   a bright band sweeping up him, fine lines. On a glitch hit (DAEMON_FLICKERS_PER_S) rows of the pattern jump
  //   sideways, some rows flash cyan (the brand's glitch colour) and the glow drops out or surges.
  // - His body itself is never moved: moving rows of it pushed skin through the hoodie (Oct 11 2026).
  // Each mannequin's colours: skin = the skin under the glow; virus = four colours the blocks, dust and band glow in
  // (the first one also tints the whole skin's faint glow); edge = its download line.
  // catwalk (Oct 12 2026, user: like his but not red, "the palette from the graphics on her tshirt"): measured from
  // print-test 20pc.png and logo halftoned.png (k-means of their coloured pixels).
  const DAEMON_SKINS = {
    hoodie: {
      skin: '#3a0404',
      virus: ['#ff1e1e', '#ff1e1e', '#ff1e1e', '#ff1e1e'],
      edge: '#ff1e1e',
      solid: 0,
    },
    // solid: how much of the body always shows under the flickering scraps (0 = a ghost, like him). Hers as a ghost
    // was "hard to see most of the time" (user, Oct 12 2026): she is a solid glowing body with the virus over it.
    catwalk: {
      skin: '#032220',
      virus: ['#02f8f4', '#09f48f', '#f4bfa6', '#d1781c'],
      edge: '#02f8f4',
      solid: 0.9,
    },
  }
  const DAEMON_GLOW_STRENGTH = 1.2 // how bright the virus glows (0 = none). The room's glow picks this up.
  const DAEMON_FLICKERS_PER_S = 1.5 // how often, on average, a glitch hit comes
  const DAEMON_RESIDUE = 0.35 // how solid the scraps are on his body (0 = none, 1 = solid)
  const DAEMON_RESIDUE_FACE = 0.7 // ...and on his face and hands
  const DAEMON_SHIFT = 0.15 // how far rows of the pattern jump sideways on a glitch hit, in metres
  const DAEMON_VERT = {
    common: [
      'attribute float zlVis;',
      'attribute float zlHide;',
      'uniform vec3 uZlMin;',
      'uniform float uZlScale;',
      'varying float vZlVis;',
      'varying vec3 vZlQ;',
      'varying float vZlH;',
      'varying float vZlY;',
      'varying float vZlHide;',
    ].join('\n'),
    afterSkinning: [
      'vZlVis = zlVis;',
      'vZlHide = zlHide;',
      'vZlQ = (position - uZlMin) * uZlScale;', // where on his skin, in metres, stuck to the skin as he moves
      // (NOT his height, it turned out on Oct 25 2026: the bodies are stored turned and scaled 100x, so this is a tiny
      // front-to-back number, nearly the same all over him. Kept: his rows, sweep and lines were judged on it, e.g. her
      // "blue glow every 2 seconds" is the sweep lighting all of her at once.)
      'vZlH = transformed.y;',
      'vZlY = (modelMatrix * vec4(transformed, 1.0)).y;', // his real height, in metres (the travelling lines)
    ].join('\n'),
  }
  const DAEMON_FRAG = {
    common: [
      'uniform float uZlTime;',
      'uniform float uZlGlitch;',
      'uniform vec3 uZlPal[4];',
      'uniform float uZlGlow;',
      'uniform float uZlResidue;',
      'uniform float uZlResidueFace;',
      'uniform float uZlShift;',
      'uniform float uZlSolid;',
      'uniform vec2 uZlCut;',
      'uniform float uZlBands;', // 1 = travelling lines instead of the blocks and dust (the phone's girl)
      'uniform vec2 uZlRange;', // the lines: from the feet to the top of the head (real height, m)
      'uniform float uZlLegTop;', // the top of the legs (her hips, real height, m): zlPresence's gradient
      'uniform float uZlHideTop;', // skin under the clothes is only dropped below this height (see early)
      'uniform float uZlLit;', // how much of the lamps' light the skin takes (1 = all; see afterLights)
      'varying float vZlY;',
      'varying float vZlHide;',
      'varying float vZlVis;',
      'varying vec3 vZlQ;',
      'varying float vZlH;',
      'float zlHash(float n) { return fract(sin(n) * 43758.5453123); }',
      'float zlHash3(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453123); }',
      'vec3 zlPalAt(float h) { float i = floor(h * 3.999); return i < 0.5 ? uZlPal[0] : i < 1.5 ? uZlPal[1] : i < 2.5 ? uZlPal[2] : uZlPal[3]; }',
      'vec3 zlCol;', // the virus's colour here (set by zlVirus)
      // Travelling lines (uZlBands, Oct 25 2026, user: "horizontal lines travelling across her body from top to bottom
      // and vice versa randomly. Blinking in and out"; not solid, not "snow"): 14 thin lines (~1-1.5 cm, about
      // one 3 px dot on a phone), each crossing her whole height (0-1.8 m) once a trip, 1.2-3 s a trip, up or down
      // at random each trip; about a quarter of the trips don't show; while it travels a line blinks (12 times a
      // second, on about two thirds of the time) and fades in and out at the ends of the trip.
      'float zlBandsAt(float h) {',
      '  float s = 0.0, t = uZlTime;',
      '  for (int i = 0; i < 14; i++) {',
      '    float fi = float(i);',
      '    float tt = t / (1.2 + 1.8 * zlHash(fi * 3.7 + 0.5)) + zlHash(fi * 9.1 + 0.3);',
      '    float k = floor(tt), f = fract(tt);',
      '    float up = step(0.5, zlHash(k * 1.7 + fi * 13.3));',
      '    float y = mix(uZlRange.y + 0.03, uZlRange.x - 0.03, mix(f, 1.0 - f, up));',
      '    float d = (h - y) / mix(0.005, 0.0075, zlHash(k * 5.1 + fi * 1.3));',
      '    float show = step(0.25, zlHash(k * 3.1 + fi * 0.7)) * step(0.35, zlHash(floor(t * 12.0) + fi * 7.3 + k));',
      '    s += exp(-d * d) * show * smoothstep(0.0, 0.08, f) * smoothstep(1.0, 0.92, f);',
      '  }',
      '  return clamp(s, 0.0, 1.0);',
      '}',
      // ...and on her face, neck, hands and lower torso ("face" in zlVis: user, "almost always with lines... some
      // variation and movement"), a denser set: a thin line (~0.6 cm) every 2.5 cm, the set drifting up and down on a
      // wandering path, each line blinking on its own clock (6 times a second), on about 80% of the time.
      'float zlDense(float h) {',
      '  float t = uZlTime;',
      '  float x = (h + 0.06 * sin(t * 0.9 + 0.7) + 0.03 * sin(t * 2.3) + 0.012 * sin(t * 5.7)) * 40.0;',
      '  float r = floor(x), d = (fract(x) - 0.5) / 40.0 / 0.003;',
      '  return exp(-d * d) * step(0.2, zlHash(r * 1.31 + floor(t * 6.0 + zlHash(r * 0.37) * 4.0) * 3.7));',
      '}',
      // ...and for 'gaps', away from her face, neck, hands and lower torso her skin is patchy (user, Oct 25 2026), in thin
      // rows (~1.25 cm, like the lines; ~8 cm rows were "super fat"), each switching about 3 times a second. How much
      // shows follows a gradient up her legs (user: "the closer to the toes the less often... close to the top... you
      // can still see her more than not"): ~5% at her soles, ~75% from the top of her legs (her hips) up.
      // Then (user, Oct 26 2026: hard edges, e.g. at her neck; "a gradient on all edges... the gradient decides the
      // intensity and frequency of the bands appearing / disappearing"): zlPresence is ONE smooth share (0..1) over
      // her whole body: ~1 on her face, neck, hands, lower torso (blended out over their joints' full reach), the
      // toes-to-hips gradient elsewhere, fading to 0 into the skin under her tee. zlRows: thin rows, each on at that
      // share of the time (and its strength follows it too, in zlVirus).
      'float zlPresence(float h) {',
      '  float p = mix(mix(0.05, 0.75, smoothstep(uZlRange.x, uZlLegTop, h)), 1.0, smoothstep(0.0, 1.0, vZlVis));',
      '  return p * (1.0 - smoothstep(0.3, 0.9, vZlHide) * smoothstep(uZlHideTop + 0.05, uZlHideTop - 0.05, h));',
      '}',
      'float zlRows(float h, float p) {',
      '  float t = uZlTime;',
      '  float r = floor((h + 0.02 * sin(t * 0.6 + 2.0)) * 80.0);',
      '  return step(1.0 - p, zlHash(r * 2.7 + floor(t * 3.0 + zlHash(r * 0.9) * 5.0) * 1.9));',
      '}',
      'float zlVirus() {',
      '  vec3 q = vZlQ;',
      '  float r = floor(vZlH * 40.0), t = floor(uZlTime * 18.0);', // glitch hit: rows of the pattern jump
      '  q.x += (zlHash(r + t * 1.31) - 0.5) * 2.0 * uZlShift * step(0.75, zlHash(r * 3.17 + t)) * uZlGlitch;',
      '  vec3 c = floor(q * 30.0);', // ~3 cm blocks
      '  float n = zlHash3(c);',
      '  float p = fract(n * 13.0 + uZlTime * (0.4 + n));', // each block on its own clock
      '  float blocks = step(0.7, n) * (1.0 - smoothstep(0.0, 0.35, p));',
      '  float dust = step(0.93, zlHash3(floor(q * 120.0) + floor(uZlTime * 6.0)));',
      '  float d = fract(vZlH * 0.6 - uZlTime * 0.35) - 0.5;',
      '  float scan = exp(-d * d * 400.0);', // the band sweeping up
      '  float lines = step(0.5, fract(vZlH * 90.0));',
      '  float bands = 0.0;',
      '  if (uZlBands > 0.5) {', // (in her first colour, on her real height)
      '    blocks = 0.0; dust = 0.0; bands = max(zlBandsAt(vZlY), smoothstep(0.15, 0.6, vZlVis) * zlDense(vZlY));',
      // uZlBands 2 (user, Oct 25 2026: "make the bands... take away from her skin instead of adding. That way she's more
      // visible than not"): her skin shows, the lines are the gaps
      '    if (uZlBands > 1.5) { float pr = zlPresence(vZlY); bands = (1.0 - bands) * zlRows(vZlY, pr) * mix(0.5, 1.0, pr); }',
      '  }',
      '  float sum = blocks + 0.5 * dust + scan + bands;', // each part in its own colour from the palette
      '  zlCol = sum > 0.001 ? (zlPalAt(n) * blocks + zlPalAt(fract(n * 7.3)) * 0.5 * dust + uZlPal[0] * (scan + bands)) / sum : uZlPal[0];',
      '  return clamp(sum, 0.0, 1.0) * (0.75 + 0.25 * lines);',
      '}',
    ].join('\n'),
    // Skin under the clothes (zlHide, the phone's girl: user, "anything the t-shirt covers shouldn't even get any texture,
    // that way we save fps"): not drawn at all, dropped before any of its light is worked out.
    // Only below the top of the garment (uZlHideTop): her chest joints also move the skin of her traps, above the
    // neckline, and a cut by joint alone showed as a hard edge there (user, Oct 26 2026).
    // (Then only where the fade into it has reached nothing: deep under the garment, see zlPresence.)
    early: 'if (vZlHide > 0.9 && vZlY < uZlHideTop - 0.05) discard;',
    // The skin takes only uZlLit of the lamps' light (the phone's girl, under its overhead light; user, Oct 26 2026); its
    // own glow is untouched. 1 = as before.
    afterLights:
      'reflectedLight.directDiffuse *= uZlLit; reflectedLight.directSpecular *= uZlLit;',
    afterEmissive: [
      'float zlV = zlVirus();',
      'totalEmissiveRadiance = uZlGlow * (uZlPal[0] * 0.25 + zlCol * 1.6 * zlV);',
    ].join('\n'),
    afterOpaque: [
      '{ float r = floor(vZlH * 60.0);',
      '  float hit = step(0.8, zlHash(r + floor(uZlTime * 20.0))) * uZlGlitch;',
      '  gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.0, 1.8, 2.0), hit * 0.6);',
      '  float face = smoothstep(0.15, 0.6, vZlVis);', // 1 on his face and hands
      '  float on = step(mix(uZlCut.x, uZlCut.y, face), zlHash(floor(uZlTime * 3.0) * 7.1 + floor(vZlH * 8.0)));',
      '  float a = max(max(uZlSolid, zlV * mix(uZlResidue, uZlResidueFace, face) * on), zlBand);', // (zlBand: the download line, addReveal)
      '  if (a < 0.01) discard;',
      '  gl_FragColor.a *= a; }',
    ].join('\n'),
  }
  function daemonSkin(mesh, uniforms, colours) {
    // Which points of his skin to show: the share of each point moved by his head, neck or hands (0..1).
    const g = mesh.geometry,
      si = g.attributes.skinIndex,
      sw = g.attributes.skinWeight
    const bright = colours.bright || /Head|Neck|Hand/i // (the phone's girl adds her lower torso: js/mobile.js)
    const keep = mesh.skeleton.bones.map((b) => (bright.test(b.name) ? 1 : 0))
    const vis = new Float32Array(si.count)
    for (let i = 0; i < si.count; i++) {
      vis[i] =
        sw.getX(i) * keep[si.getX(i)] +
        sw.getY(i) * keep[si.getY(i)] +
        sw.getZ(i) * keep[si.getZ(i)] +
        sw.getW(i) * keep[si.getW(i)]
    }
    g.setAttribute('zlVis', new window.THREE.BufferAttribute(vis, 1))
    // ...and which are under the clothes (colours.hide: the phone's girl), the same way; none on the desktop
    const hide = new Float32Array(si.count)
    if (colours.hide) {
      const under = mesh.skeleton.bones.map((b) =>
        colours.hide.test(b.name) ? 1 : 0,
      )
      for (let i = 0; i < si.count; i++) {
        hide[i] =
          sw.getX(i) * under[si.getX(i)] +
          sw.getY(i) * under[si.getY(i)] +
          sw.getZ(i) * under[si.getZ(i)] +
          sw.getW(i) * under[si.getW(i)]
      }
    }
    g.setAttribute('zlHide', new window.THREE.BufferAttribute(hide, 1))
    // His stored skin is in its own tiny units: scale it to metres (about 1.8 m tall) for the pattern.
    g.computeBoundingBox()
    const size = g.boundingBox.getSize(new window.THREE.Vector3())
    uniforms.uZlMin.value.copy(g.boundingBox.min)
    uniforms.uZlScale.value = 1.8 / Math.max(size.x, size.y, size.z)
    uniforms.uZlPal.value = colours.virus.map((c) => new window.THREE.Color(c))
    uniforms.uZlSolid.value = colours.solid || 0
    const mat = new window.THREE.MeshPhysicalMaterial({
      color: colours.skin,
      roughness: 0.35,
      metalness: 0.3,
      sheen: 1,
      sheenColor: colours.virus[0],
      sheenRoughness: 0.35,
      transparent: true,
    })
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, uniforms)
      sh.vertexShader = sh.vertexShader
        .replace(
          '#include <common>',
          '#include <common>\n' + DAEMON_VERT.common,
        )
        .replace(
          '#include <skinning_vertex>',
          '#include <skinning_vertex>\n' + DAEMON_VERT.afterSkinning,
        )
      sh.fragmentShader = sh.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\n' + DAEMON_FRAG.common,
        )
        .replace(
          '#include <clipping_planes_fragment>',
          '#include <clipping_planes_fragment>\n' + DAEMON_FRAG.early,
        )
        .replace(
          '#include <lights_fragment_end>',
          '#include <lights_fragment_end>\n' + DAEMON_FRAG.afterLights,
        )
        .replace(
          '#include <emissivemap_fragment>',
          '#include <emissivemap_fragment>\n' + DAEMON_FRAG.afterEmissive,
        )
        .replace(
          '#include <opaque_fragment>',
          '#include <opaque_fragment>\n' + DAEMON_FRAG.afterOpaque,
        )
    }
    mesh.renderOrder = -1 // before the hoodie's prints, so they lie over his skin
    return mat
  }
  function skinFor(which) {
    return new window.THREE.MeshPhysicalMaterial({
      color: CHROME_COLOUR,
      metalness: 1,
      roughness: CHROME_ROUGHNESS,
      iridescence: SHEEN_STRENGTH,
      iridescenceIOR: 1.6,
      iridescenceThicknessRange: SHEEN_THICKNESS,
    })
  }

  // The model always in the middle of the window (Oct 11 2026, user): dragging anywhere turns it (it is never moved),
  // and the wheel zooms into the middle rather than towards the cursor. false = the old controls (drag the model to
  // move it, zoom towards the cursor). (Replaced a filming mode with an auto-orbiting camera and a panel: too fiddly.)
  const KEEP_CENTRED = true

  // THE DOWNLOAD (Oct 11 2026, user: "download into the scene, like a hologram loading from the top to bottom"): when a
  // model opens, it is drawn only above a line that sweeps from its head to its feet, with a glowing edge and hologram
  // lines just above it. Added to every material of the model (addReveal), on top of whatever else it does.
  const REVEAL_SECONDS = 1.1 // how long the download takes, top to bottom (1.8 too slow, 0.8 too fast: user)
  const REVEAL_EDGE = '#ff1e1e' // the edge's glow colour (user: red)
  const REVEAL_LINES = 0.12 // how tall the band of hologram lines above the edge is, in metres
  // THE BEAM-OUT (Oct 12 2026, user: the one you stop viewing gets "beamed out", its clothes fall to the floor and stay
  // there greyed out; then: start the moment you click, body gone top to bottom, fast, the clothes half a second after;
  // the line on the BODY only). The download's line runs top to bottom the other way round (what is below it stays),
  // on the body only. Meanwhile the walk hurries to the fall's first pose (tools/build-clo-fall.mjs measures where that
  // is: the walk's start or its end), so the clothes drop from exactly there, in colour; they go grey as the swap
  // starts and stay as a grey pile. Picked again, the pile plays the fall backwards (the clothes rise back up), then
  // the body downloads in.
  // (user, Oct 12 2026: the first try was too slow, 0.5 s too fast: "visible but faster than the first")
  const VANISH_SECONDS = 0.9 // the body vanishing, top to bottom (the clothes start falling right after)
  const FALL_SPEED = 1.3 // the fall plays this much faster than CLO recorded it
  const FALL_HANDOFF = 0.35 // seconds into the fall before the room starts the swap (and the clothes go grey)
  const RISE_SPEED = 2.5 // the fall played backwards, this much faster than CLO recorded it
  // CLEANUP (Oct 12 2026, user: "almost like the machine doing cleanup"): a pile left on the floor is hit by a hard
  // glitch after a few seconds and, at its peak, is back standing where the fall began (grey, still), ready again.
  // The glitch itself is drawn by js/room.js on the model's picture (the glitch getter says how strong).
  const CLEANUP_MIN = 3,
    CLEANUP_MAX = 5 // seconds on the floor before the cleanup (random in between)
  const CLEANUP_GLITCH = 0.5 // how long the cleanup glitch lasts, in seconds (the swap is at its peak)
  // The grey (dormant) clothes' darkest grey, before the studio tone curve (linear light). 0.014 comes out about 13/255
  // on screen, just above the room's own dark grey, so a dark garment reads as a faint grey ghost, not a black hole.
  const DORMANT_FLOOR = 0.014
  // isSkin: the mannequin's body. While dormant it is not shown at all, only the clothes in grey (user, Oct 12 2026).
  function addReveal(mat, u, isSkin) {
    const prev = mat.onBeforeCompile,
      key = mat.customProgramCacheKey()
    mat.onBeforeCompile = function (sh, r) {
      prev.call(this, sh, r)
      Object.assign(sh.uniforms, u)
      sh.vertexShader = sh.vertexShader
        .replace(
          '#include <common>',
          '#include <common>\nvarying float vZlWorldY;',
        )
        .replace(
          '#include <project_vertex>',
          '#include <project_vertex>\nvZlWorldY = (modelMatrix * vec4(transformed, 1.0)).y;',
        )
      // uZlDormant = 1 (the collection's mannequins, Oct 12 2026): below the line the model is not missing but
      // DORMANT: grey and dim. Before it is picked, the whole model is below the line.
      sh.fragmentShader = sh.fragmentShader
        .replace(
          '#include <common>',
          '#include <common>\nvarying float vZlWorldY;\nuniform float uZlReveal;\nuniform float uZlRevealOn;\nuniform float uZlDormant;\nuniform vec3 uZlEdgeCol;\nuniform float uZlFlip;',
        )
        .replace(
          '#include <clipping_planes_fragment>',
          '#include <clipping_planes_fragment>\n' +
            // uZlFlip -1 (the beam-out): what is BELOW the line is the part still there
            'float zlAbove = (vZlWorldY - uZlReveal) * uZlFlip;\n' +
            // just past the line (5 cm): the body is solid there, so even a ghost shows the line going over it
            'float zlBand = uZlRevealOn * step(-0.001, zlAbove) * (1.0 - smoothstep(0.0, 0.05, zlAbove));\n' +
            'if (uZlRevealOn > 0.5) {\n' +
            '  if (zlAbove < 0.0 && (uZlDormant < 0.5 || ' +
            (isSkin ? 'true' : 'false') +
            ')) discard;\n' +
            '  if (zlAbove >= 0.0 && zlAbove < ' +
            REVEAL_LINES.toFixed(3) +
            ' && fract(vZlWorldY * 120.0) < 0.45) discard;\n' +
            '}',
        )
        .replace(
          '#include <opaque_fragment>',
          '#include <opaque_fragment>\n' +
            'gl_FragColor.rgb += uZlEdgeCol * 3.0 * exp(-max(zlAbove, 0.0) * 40.0) * uZlRevealOn * step(-0.001, zlAbove);',
        )
        .replace(
          '#include <dithering_fragment>',
          '#include <dithering_fragment>\n' +
            // (never darker than DORMANT_FLOOR: the studio tone curve crushes near-black to pure black, and the
            // girl's dark tee lying flat on the floor showed as a black "aura" below the room's dark grey)
            'if (uZlRevealOn > 0.5 && uZlDormant > 0.5 && zlAbove < 0.0) gl_FragColor.rgb = max(vec3(dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722))) * 0.5, vec3(' +
            DORMANT_FLOOR.toFixed(4) +
            '));',
        )
    }
    mat.customProgramCacheKey = function () {
      return key + '|zl-reveal' + (isSkin ? '-skin' : '')
    }
    mat.needsUpdate = true
  }

  // The soft studio room the models reflect: made once and shared by all of them (it costs a moment to make).
  let roomEnvTex = null
  function roomEnv(renderer) {
    if (!roomEnvTex) {
      const pmrem = new window.THREE.PMREMGenerator(renderer)
      roomEnvTex = pmrem.fromScene(
        new window.THREE.RoomEnvironment(renderer),
        0.04,
      ).texture
      pmrem.dispose()
    }
    return roomEnvTex
  }

  function buffer(b64) {
    const s = atob(b64)
    const u = new Uint8Array(s.length)
    for (let k = 0; k < s.length; k++) u[k] = s.charCodeAt(k)
    return u.buffer
  }

  function plainGeometry(g) {
    const out = new window.THREE.BufferGeometry()
    for (const name of Object.keys(g.attributes)) {
      const a = g.attributes[name],
        n = a.itemSize,
        f = new Float32Array(a.count * n)
      for (let k = 0; k < a.count; k++) {
        f[k * n] = a.getX(k)
        if (n > 1) f[k * n + 1] = a.getY(k)
        if (n > 2) f[k * n + 2] = a.getZ(k)
        if (n > 3) f[k * n + 3] = a.getW(k)
      }
      out.setAttribute(name, new window.THREE.BufferAttribute(f, n))
    }
    if (g.index) out.setIndex(g.index.clone())
    return out
  }

  // window.three.js only turns its colours into screen colours when drawing straight to the screen. The tee is
  // drawn off-screen (so the effects can be laid over it), so this does that last step itself, giving the
  // same colours as the garment test page. Edges come out pre-multiplied; this undoes that too.
  const ENCODE_FRAG = [
    'uniform sampler2D tTee;',
    'uniform float uTone;', // 1 = filmic tone mapping (as window.three.js ACES), for the CLO tee's studio lighting
    'uniform float uExposure;',
    'varying vec2 vUv;',
    'vec3 rrtOdt(vec3 v) { vec3 a = v * (v + 0.0245786) - 0.000090537; vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081; return a / b; }',
    'vec3 aces(vec3 c) {',
    '  const mat3 inM = mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777));',
    '  const mat3 outM = mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602));',
    '  c *= uExposure / 0.6; c = inM * c; c = rrtOdt(c); c = outM * c; return clamp(c, 0.0, 1.0);',
    '}',
    'vec3 toSrgb(vec3 c) {',
    '  c = clamp(c, 0.0, 1.0);',
    '  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));',
    '}',
    'void main() {',
    '  vec4 c = texture2D(tTee, vUv);',
    '  vec3 rgb = c.a > 0.0001 ? c.rgb / c.a : vec3(0.0);',
    '  if (uTone > 0.5) rgb = aces(rgb);',
    '  gl_FragColor = c.a > 0.0001 ? vec4(toSrgb(rgb), c.a) : vec4(0.0);',
    '}',
  ].join('\n')

  // The tee file, unpacked once. It is big (the CLO walk is 17 MB of text), and unpacking it while the enter video played
  // froze the video's last frame for about a second (Oct 11 2026), so this starts in the background during the landing.
  // Its pictures are decoded straight from the file's own data, so the page works by double-click.
  // which: 'tee' (the CLO tee alone), or a mannequin wearing a garment (tools/build-clo-catwalk.mjs, Oct 11 2026):
  // 'catwalk' (js/catwalk-glb.js, chrome) or 'hoodie' (js/hoodie-glb.js, reversed walk, daemon red).
  // Unpacking OFF the page's main thread (Oct 11 2026: unpacking the hoodie stopped the skull video for 1-2 s): the
  // text is turned back into bytes by the browser itself (a data: fetch, not a loop here), and the points and motion
  // are unpacked by background workers (meshopt's useWorkers). If the browser refuses either, it falls back to doing
  // it here, as before.
  if (window.THREE.MeshoptDecoder && window.THREE.MeshoptDecoder.useWorkers) {
    try {
      window.THREE.MeshoptDecoder.useWorkers(2)
    } catch (e) {
      console.warn('Unpacking in the background is not available here:', e)
    }
  }
  function bytesOf(b64) {
    if (typeof fetch !== 'function') return Promise.resolve(buffer(b64))
    return fetch('data:application/octet-stream;base64,' + b64)
      .then((r) => r.arrayBuffer())
      .catch(() => buffer(b64))
  }
  // The pictures inside the files: the loader hands them over as blob links, which a double-clicked page can't open the
  // normal way, so every blob is noted here (one shared list, so two files unpacking at once can't trip each other up).
  const blobs = new Map()
  const makeURL = URL.createObjectURL
  URL.createObjectURL = function (obj) {
    const u = makeURL.call(URL, obj)
    if (obj instanceof Blob) blobs.set(u, obj)
    return u
  }

  const teePromises = {}
  function teeGltf(which) {
    which = which || 'tee'
    if (teePromises[which]) return teePromises[which]
    const data =
      which !== 'tee'
        ? window[which.toUpperCase() + '_GLB']
        : window.TEE_CLO_WALK_GLB ||
          window.GARMENT_TEE_WALK_GLB ||
          window.GARMENT_TEE_GLB
    if (!data)
      return (teePromises[which] = Promise.reject(
        new Error('No ' + which + ' file loaded on this page.'),
      ))
    teePromises[which] = bytesOf(data).then(
      (bytes) =>
        new Promise((resolve, reject) => {
          // The mannequins' text is not needed again once turned back into bytes (Nov 4 2026): dropped, which gives the
          // browser back its memory (20 MB or so a file). onPage() still knows the file was here. (The lone tee keeps
          // its own: other checks still look for it.)
          if (which !== 'tee') window[which.toUpperCase() + '_GLB'] = null
          const loader = new window.THREE.GLTFLoader()
          if (
            (which !== 'tee' || window.TEE_CLO_WALK_GLB) &&
            window.THREE.MeshoptDecoder
          )
            loader.setMeshoptDecoder(window.THREE.MeshoptDecoder)
          if (typeof createImageBitmap === 'function') {
            loader.register((parser) => {
              parser.textureLoader = {
                isImageBitmapLoader: true,
                setCrossOrigin() {
                  return this
                },
                setRequestHeader() {
                  return this
                },
                load(url, onLoad, onProgress, onError) {
                  const blob = blobs.get(url)
                  if (!blob) {
                    if (onError)
                      onError(
                        new Error(
                          'Picture not found in the ' + which + ' file: ' + url,
                        ),
                      )
                    return
                  }
                  blobs.delete(url)
                  createImageBitmap(blob, {
                    premultiplyAlpha: 'none',
                    colorSpaceConversion: 'none',
                  }).then(onLoad, onError)
                },
              }
              return { name: 'ZL_embedded_pictures' }
            })
          }
          loader.parse(bytes, '', resolve, reject)
        }),
    )
    return teePromises[which]
  }
  // Is this file on the page (or already unpacked from it)? 'tee', 'catwalk', 'hoodie', 'catwalk_fall' ...
  function onPage(which) {
    if (teePromises[which]) return true
    return which !== 'tee'
      ? !!window[which.toUpperCase() + '_GLB']
      : !!(
          window.TEE_CLO_WALK_GLB ||
          window.GARMENT_TEE_WALK_GLB ||
          window.GARMENT_TEE_GLB
        )
  }
  // Start unpacking a file once the page is quiet: never while the enter video plays (js/room.js sets ZL_VIDEO_PLAYING).
  function unpackWhenQuiet(which) {
    if (window.ZL_VIDEO_PLAYING) {
      setTimeout(() => unpackWhenQuiet(which), 500)
      return
    }
    teeGltf(which).catch((e) =>
      console.error('The ' + which + ' file could not be unpacked:', e),
    )
  }

  // The models' smooth-edged picture (full screen, fine colour steps, 4x edge smoothing: ~120 MB of graphics memory at
  // 1920 x 1080), made ONCE per page and shared by all of them (Nov 4 2026; each model used to make its own). A model
  // draws into it and at once copies the result into its own small picture (outTarget), so nothing else needs it after.
  const smoothPics = new WeakMap() // renderer -> its shared picture
  function smoothPic(renderer, W, H, samples) {
    let t = smoothPics.get(renderer)
    if (!t) {
      t = new window.THREE.WebGLRenderTarget(W, H, {
        minFilter: window.THREE.LinearFilter,
        magFilter: window.THREE.LinearFilter,
        format: window.THREE.RGBAFormat,
        type: window.THREE.HalfFloatType,
        samples: samples,
      })
      smoothPics.set(renderer, t)
    } else if (t.samples !== samples) {
      t.samples = samples
      t.dispose()
    }
    return t
  }

  const FIGURE_FRAME = { len: 0 } // the tallest mannequin's height (m): all of them are framed to it

  window.ZL_ROOM_TEE = {
    // Is this model's file here (js/room.js fetches the desktop's one by one, Nov 4 2026)?
    has: onPage,
    // Unpack a file that has just arrived, once the page is quiet (not during the enter video). Resolves when done,
    // or when it failed (the error is logged), so the next file can follow.
    unpack: function (which) {
      return new Promise((done) => {
        ;(function go() {
          if (window.ZL_VIDEO_PLAYING) {
            setTimeout(go, 500)
            return
          }
          teeGltf(which).then(
            () => done(),
            (e) => {
              console.error('The ' + which + ' file could not be unpacked:', e)
              done()
            },
          )
        })()
      })
    },
    // which: 'tee', 'catwalk' or 'hoodie'. Each model gets its own create(); only the active one takes input (setActive).
    // opts.samples (the phone page, js/mobile.js): edge smoothing of the 3D picture (4 = as the desktop, 0 = none).
    create: function (renderer, canvas, W0, H0, which, opts) {
      which = which || 'tee'
      const figure = which !== 'tee'
      let skinMat = null
      const flicker = { until: 0, level: 1 }
      const revealU = {
        uZlReveal: { value: 99 },
        uZlRevealOn: { value: 1 },
        uZlDormant: { value: figure ? 1 : 0 }, // the mannequins wait grey ("dormant") until picked
        uZlEdgeCol: {
          value: new window.THREE.Color(
            DAEMON_SKINS[which] ? DAEMON_SKINS[which].edge : REVEAL_EDGE,
          ),
        },
        uZlFlip: { value: 1 },
      }
      // A mannequin's CLOTHES have their own (Oct 12 2026, user: the line runs on the body only): never a line on
      // them, just live, or grey (dormant: the whole of them "below the line").
      const garmentU = {
        uZlReveal: { value: 99 },
        uZlRevealOn: { value: 1 },
        uZlDormant: { value: 1 },
        uZlEdgeCol: { value: new window.THREE.Color(0, 0, 0) },
        uZlFlip: { value: 1 },
      }
      function clothes(live) {
        garmentU.uZlRevealOn.value = live ? 0 : 1
        garmentU.uZlReveal.value = 99
      }
      let revealT = 0 // seconds into the download; -1 = done; -2 = dormant (waiting to be picked)
      let stillDrawn = false // dormant and already drawn: its picture is kept, nothing redrawn
      const daemonU = {
        // a mannequin's virus (see daemonSkin)
        uZlTime: { value: 0 },
        uZlGlitch: { value: 0 },
        uZlMin: { value: new window.THREE.Vector3() },
        uZlScale: { value: 1 },
        uZlShift: { value: DAEMON_SHIFT },
        uZlPal: { value: [] },
        uZlGlow: { value: DAEMON_GLOW_STRENGTH },
        uZlResidue: { value: DAEMON_RESIDUE },
        uZlResidueFace: { value: DAEMON_RESIDUE_FACE },
        uZlSolid: { value: 0 },
        uZlCut: { value: new window.THREE.Vector2(0.6, 0.3) }, // rows of scraps: shown above this (body, face + hands): 0.6 = 40% on
        uZlBands: { value: 0 }, // 1 = travelling lines instead of blocks and dust (zlBandsAt)
        uZlRange: { value: new window.THREE.Vector2(0, 1.8) }, // the lines' travel: feet to head top, real height (set on load)
        uZlLegTop: { value: 1.0 }, // the top of the legs (her hips), real height (set on load)
        uZlHideTop: { value: 0 }, // skin under the clothes dropped only below this (set on load)
        uZlLit: { value: 1 }, // share of the lamps' light the skin takes (opts.skin.lit)
      }
      // opts.skin (the phone page, js/mobile.js): this mannequin's skin settings instead of the desktop's:
      // { solid, residue, residueFace, cut: [body, face], bands, bright, hide, virus, lit } (see DAEMON_SKINS,
      // DAEMON_RESIDUE, uZlCut, uZlBands; bright = which bones count as "face" (stronger), instead of head, neck and
      // hands; virus = its four glow colours; lit = how much of the lamps' light the skin takes, 1 = all)
      const skinOpts = (opts && opts.skin) || {}
      if (skinOpts.residue != null) daemonU.uZlResidue.value = skinOpts.residue
      if (skinOpts.residueFace != null)
        daemonU.uZlResidueFace.value = skinOpts.residueFace
      if (skinOpts.cut)
        daemonU.uZlCut.value.set(skinOpts.cut[0], skinOpts.cut[1])
      if (skinOpts.bands)
        daemonU.uZlBands.value = skinOpts.bands === 'gaps' ? 2 : 1 // 'gaps': the lines cut her skin
      if (skinOpts.lit != null) daemonU.uZlLit.value = skinOpts.lit
      let active = true
      let W = W0,
        H = H0
      let TOP = 1.62,
        BOTTOM = 0.8,
        LEN = TOP - BOTTOM
      let REACH = 0.35 // how far the model reaches out from its middle, any way it turns (m): for edgeX
      // The GARMENT alone (no body), in the model's own space, over its whole animation (Oct 12 2026, user): the
      // wheel zooms in on its middle, and the item panel sits beside its outline as it faces now.
      let GARMENT = null // window.THREE.Box3, or null until loaded
      // Where zooming in heads (height, m): between the neck and the chest (user, Oct 12 2026: not the belly).
      let FOCUS_Y = null
      let SWING_K = 9.8 / ((LEN * 2) / 3),
        SWING_C = 2 * SWING_ZETA * Math.sqrt(SWING_K)
      const TWIST_C = 2 * TWIST_ZETA * Math.sqrt(TWIST_K)

      const SWAY = {
        uSwing: { value: new window.THREE.Vector2() },
        uTwist: { value: 0 },
        uFlare: { value: 0 },
        uTop: { value: TOP },
        uLen: { value: LEN },
      }
      const SWAY_GLSL = `
                uniform vec2 uSwing;
                uniform float uTwist;
                uniform float uFlare;
                uniform float uTop;
                uniform float uLen;
                float swayW(float y) { float t = clamp((uTop - y) / uLen, 0.0, 1.0); return t * t * (2.0 - t); }
                mat2 swayRot(float y) { float a = uTwist * swayW(y); float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
                vec3 swayPos(vec3 p) {
                    float w = swayW(p.y);
                    p.xz = swayRot(p.y) * p.xz;
                    p.xz *= 1.0 + uFlare * w;
                    p.xz += uSwing * w;
                    p.y += w * dot(uSwing, uSwing) / (2.0 * uLen);
                    return p;
                }`
      function withSway(mat) {
        mat.onBeforeCompile = (sh) => {
          Object.assign(sh.uniforms, SWAY)
          sh.vertexShader = sh.vertexShader
            .replace('#include <common>', '#include <common>\n' + SWAY_GLSL)
            .replace(
              '#include <beginnormal_vertex>',
              '#include <beginnormal_vertex>\nobjectNormal.xz = swayRot(position.y) * objectNormal.xz;',
            )
            .replace(
              '#include <begin_vertex>',
              '#include <begin_vertex>\ntransformed = swayPos(transformed);',
            )
        }
        mat.needsUpdate = true
        return mat
      }

      // ---- scene (same light as the garment test page) ----
      const scene = new window.THREE.Scene()
      const camera = new window.THREE.PerspectiveCamera(28, 1, 0.1, 20)
      const oldLights = [
        new window.THREE.HemisphereLight(0xffffff, 0x1c1c1c, 0.7),
      ]
      scene.add(oldLights[0])
      const lights = [
        [0xffffff, 2.6, [-1.2, 1.6, 2.2]],
        [0xe4e6e8, 0.8, [1.8, 0.3, 1.5]],
        [0xbfc3c6, 2.2, [0.8, 1.2, -2.0]],
        [0xbfc3c6, 1.4, [-1.6, 0.4, -1.4]],
      ]
      for (const [colour, strength, at] of lights) {
        const l = new window.THREE.DirectionalLight(colour, strength)
        l.position.set(at[0], at[1], at[2])
        scene.add(l)
        oldLights.push(l)
      }
      const tee = new window.THREE.Group()
      scene.add(tee)

      // ---- off-screen pictures: the tee (smooth edges, fine colour steps), then in screen colours ----
      // The smooth-edged picture is SHARED by every model on the page (smoothPic, Nov 4 2026): each is drawn into it
      // and straight away copied into its own outTarget, which is the one that is kept.
      const linearTarget = smoothPic(
        renderer,
        W,
        H,
        opts && opts.samples != null ? opts.samples : 4,
      )
      const outTarget = new window.THREE.WebGLRenderTarget(W, H, {
        minFilter: window.THREE.LinearFilter,
        magFilter: window.THREE.LinearFilter,
        format: window.THREE.RGBAFormat,
        type: window.THREE.UnsignedByteType,
        depthBuffer: false,
      })
      let coverBuf = null // (coverAt's read-back)
      const encodeMat = new window.THREE.ShaderMaterial({
        vertexShader:
          'varying vec2 vUv;\nvoid main() { vUv = uv; gl_Position = vec4(position, 1.0); }',
        fragmentShader: ENCODE_FRAG,
        uniforms: {
          tTee: { value: linearTarget.texture },
          uTone: { value: 0 },
          uExposure: { value: 1 },
        },
        depthTest: false,
        depthWrite: false,
        blending: window.THREE.NoBlending,
      })
      const encodeScene = new window.THREE.Scene()
      encodeScene.add(
        new window.THREE.Mesh(new window.THREE.PlaneGeometry(2, 2), encodeMat),
      )
      const encodeCam = new window.THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

      // Frame the whole tee in the part of the canvas you can actually see (the canvas can be bigger
      // than the window), with room to swing.
      // The zoom: the normal view (base), how close we are (z = 1 normal .. ZOOM_MAX), and where the view's
      // centre is, as an offset from the normal view's centre. t* = where it is gliding to.
      const halfTan = Math.tan(((camera.fov / 2) * Math.PI) / 180)
      const view = {
        dist: 1,
        mid: 0,
        visX: 1,
        visY: 1,
        z: 1,
        x: 0,
        y: 0,
        tz: 1,
        tx: 0,
        ty: 0,
      }
      let framedLen = 0
      function frame() {
        camera.aspect = W / H
        view.visY = Math.min(1, window.innerHeight / H)
        view.visX = Math.min(1, window.innerWidth / W)
        // The mannequins share one framing (the tallest of them, feet on the same floor), so they show at the same
        // size side by side (she looked bigger and nearer, framed to her own smaller height: user, Oct 12 2026).
        const L = figure ? Math.max(LEN, FIGURE_FRAME.len) : LEN
        framedLen = L
        view.mid = figure ? BOTTOM + L / 2 : (TOP + BOTTOM) / 2
        view.dist = Math.max(
          (L * 0.5 + 0.12) / (halfTan * view.visY),
          0.55 / (halfTan * camera.aspect * view.visX),
        )
        camera.updateProjectionMatrix()
        keepInView()
        place()
      }
      // Zoomed in, the view can only wander inside what the normal view shows; zoomed out, it is centred.
      function keepInView() {
        // Kept in the middle: never off to the side; up and down only as far as his head or feet.
        if (KEEP_CENTRED) {
          view.tx = 0
          view.ty = Math.max(-LEN * 0.5, Math.min(LEN * 0.5, view.ty))
          return
        }
        const hh = view.dist * halfTan * view.visY,
          hw = view.dist * halfTan * camera.aspect * view.visX
        const k = 1 - 1 / view.tz
        view.tx = Math.max(-hw * k, Math.min(hw * k, view.tx))
        view.ty = Math.max(-hh * k, Math.min(hh * k, view.ty))
      }
      function place() {
        // Zooming in heads for the upper chest (FOCUS_Y), not the figure's middle: that point stays put on screen
        // while everything grows around it, so the closer you get the more it fills the middle. The normal view
        // (z = 1) is unchanged.
        const focus = FOCUS_Y != null ? FOCUS_Y : view.mid
        const cy = focus + (view.mid - focus) / view.z + view.y
        camera.position.set(view.x, cy, view.dist / view.z)
        camera.lookAt(view.x, cy, 0)
        camera.updateMatrixWorld()
      }
      function glideView(dt) {
        const e = 1 - Math.exp(-ZOOM_EASE * dt)
        view.z += (view.tz - view.z) * e
        view.x += (view.tx - view.x) * e
        view.y += (view.ty - view.y) * e
        place()
      }
      frame()

      // ---- physics ----
      // tx, ty, tr = where you put it. It always heads there and stays (nothing pulls it back to the middle).
      const holder = {
        x: 0,
        y: 0,
        r: 0,
        vx: 0,
        vy: 0,
        vr: 0,
        tx: 0,
        ty: 0,
        tr: 0,
      }
      const sway = { s: 0, sv: 0, t: 0, tv: 0, f: 0 }

      function step() {
        const h = holder
        const ovx = h.vx,
          ovr = h.vr
        h.vr += (FOLLOW_K * (h.tr - h.r) - FOLLOW_C * h.vr) * DT
        h.vx += (FOLLOW_K * (h.tx - h.x) - FOLLOW_C * h.vx) * DT
        h.vy += (FOLLOW_K * (h.ty - h.y) - FOLLOW_C * h.vy) * DT
        h.r += h.vr * DT
        h.x += h.vx * DT
        h.y += h.vy * DT
        const ax = (h.vx - ovx) / DT,
          ar = (h.vr - ovr) / DT
        sway.sv += (-SWING_K * sway.s - SWING_C * sway.sv - ax) * DT
        sway.s += sway.sv * DT
        sway.tv +=
          (-TWIST_K * sway.t - TWIST_C * sway.tv - ar * TWIST_GAIN) * DT
        sway.t += sway.tv * DT
        sway.f +=
          (Math.min(FLARE_MAX, FLARE_GAIN * h.vr * h.vr) - sway.f) * 0.08
      }
      const soft = (v, max) => max * Math.tanh(v / max)
      function pose() {
        const h = holder
        tee.position.set(h.x, h.y, 0)
        tee.rotation.y = h.r
        const s = soft(sway.s, SWING_MAX)
        SWAY.uSwing.value.set(s * Math.cos(h.r), s * Math.sin(h.r))
        SWAY.uTwist.value = soft(sway.t, TWIST_MAX)
        SWAY.uFlare.value = sway.f
      }

      // ---- input: drag the tee to move it, drag the empty space to turn it ----
      const raycaster = new window.THREE.Raycaster()
      const ndc = new window.THREE.Vector2()
      const tmp = new window.THREE.Vector3()
      function rayFrom(e) {
        const r = canvas.getBoundingClientRect()
        ndc.set(
          ((e.clientX - r.left) / r.width) * 2 - 1,
          -((e.clientY - r.top) / r.height) * 2 + 1,
        )
        raycaster.setFromCamera(ndc, camera)
      }
      function pick(e) {
        rayFrom(e)
        tee.updateMatrixWorld()
        const hits = raycaster.intersectObject(tee, true)
        return hits.length ? hits[0] : null
      }
      let ready = false
      let drag = null
      // OBSERVED (Nov 1 2026, user: stop the animation in place while exploring, no pause button): the moment the
      // model is held, turned or zoomed, its walk slows to a standstill, like time stopping for whoever looks.
      // It stays stopped while held or zoomed in, and walks on again (easing back up to speed) once let go, at the
      // normal view, for HOLD_AFTER seconds.
      const HOLD_AFTER = 2.0,
        HOLD_EASE = 5 // seconds before it walks on; how quickly it stops / restarts (per s)
      let heldUntil = 0,
        playSpeed = 1
      const observe = () => {
        heldUntil = performance.now() + HOLD_AFTER * 1000
      }
      canvas.addEventListener('pointerdown', (e) => {
        if (!ready || !active) return
        observe()
        canvas.setPointerCapture(e.pointerId)
        if (KEEP_CENTRED) {
          // left drag turns him; right drag (user) moves the view up and down his height
          drag =
            e.button === 2
              ? { mode: 'lift', y: e.clientY }
              : { mode: 'turn', x: e.clientX }
          return
        }
        const hit = pick(e)
        if (hit) {
          const normal = camera.getWorldDirection(new window.THREE.Vector3())
          drag = {
            mode: 'move',
            plane: new window.THREE.Plane().setFromNormalAndCoplanarPoint(
              normal,
              hit.point,
            ),
            offX: holder.x - hit.point.x,
            offY: holder.y - hit.point.y,
          }
          canvas.style.cursor = 'grabbing'
        } else {
          drag = { mode: 'turn', x: e.clientX }
        }
      })
      let lastPickT = 0
      canvas.addEventListener('pointermove', (e) => {
        if (!ready || !active) return
        if (drag) observe()
        if (drag && drag.mode === 'lift') {
          // grab-and-drag feel: the picture follows the mouse
          const r = canvas.getBoundingClientRect()
          view.ty +=
            ((e.clientY - drag.y) * ((2 * view.dist * halfTan) / view.z)) /
            r.height
          drag.y = e.clientY
          keepInView()
          return
        }
        if (drag && drag.mode === 'move') {
          rayFrom(e)
          if (raycaster.ray.intersectPlane(drag.plane, tmp)) {
            holder.tx = Math.max(
              -MOVE_LIMIT_X,
              Math.min(MOVE_LIMIT_X, tmp.x + drag.offX),
            )
            holder.ty = Math.max(
              -MOVE_LIMIT_Y,
              Math.min(MOVE_LIMIT_Y, tmp.y + drag.offY),
            )
          }
          return
        }
        if (drag && drag.mode === 'turn') {
          holder.tr += (e.clientX - drag.x) * 0.009
          drag.x = e.clientX
          return
        }
        if (KEEP_CENTRED) return // (no grab hand: the model can't be picked up)
        const now = performance.now()
        if (now - lastPickT < 100) return
        lastPickT = now
        canvas.style.cursor = pick(e) ? 'grab' : ''
      })
      function endDrag() {
        if (!drag) return
        if (drag.mode === 'move') canvas.style.cursor = 'grab'
        drag = null
      }
      canvas.addEventListener('pointerup', endDrag)
      canvas.addEventListener('pointercancel', endDrag)

      // ---- zoom: wheel (or trackpad pinch) towards the cursor, double-click for the normal view ----
      canvas.addEventListener(
        'wheel',
        (e) => {
          e.preventDefault() // also stops the browser zooming the whole page on a trackpad pinch
          if (!ready || !active) return
          observe()
          const r = canvas.getBoundingClientRect()
          const nx = ((e.clientX - r.left) / r.width) * 2 - 1
          const ny = -(((e.clientY - r.top) / r.height) * 2 - 1)
          const notch =
            e.deltaMode === 1
              ? e.deltaY * 16
              : e.deltaMode === 2
                ? e.deltaY * 400
                : e.deltaY
          const z = Math.max(
            1,
            Math.min(ZOOM_MAX, view.tz * Math.exp(-notch * ZOOM_SPEED)),
          )
          if (KEEP_CENTRED) {
            view.tz = z
            keepInView()
            return
          }
          // Keep the spot under the cursor under the cursor.
          const hh = view.dist * halfTan,
            hw = hh * camera.aspect
          const px = view.tx + (nx * hw) / view.tz,
            py = view.ty + (ny * hh) / view.tz
          view.tz = z
          view.tx = px - (nx * hw) / z
          view.ty = py - (ny * hh) / z
          keepInView()
        },
        { passive: false },
      )
      canvas.addEventListener('contextmenu', (e) => {
        if (active) e.preventDefault()
      }) // right drag, no menu
      canvas.addEventListener('dblclick', () => {
        if (!active) return
        view.tz = 1
        view.tx = 0
        view.ty = 0
      })

      // ---- the tee: unpacked in the background while the landing shows (see teeGltf above), placed here ----
      const restoreURL = () => {}
      // the user's CLO animation (tools/build-clo-walk.mjs, or the catwalk: tools/build-clo-catwalk.mjs): used first
      const cloWalk = figure || !!window.TEE_CLO_WALK_GLB
      const walking = !cloWalk && !!window.GARMENT_TEE_WALK_GLB
      let mixer = null
      // the beam-out / fall / rise (see VANISH_SECONDS). mode: 'still' (dormant, a walk frame), 'live', 'beam',
      // 'fall', 'pile' (the fall's last frame, still), 'rise' (the fall backwards)
      let mode = 'still',
        walkAction = null,
        walkRoot = null,
        fall = null
      const beam = { t: 0, dur: 1, t0: 0, done: null, doneAt: 0 }
      let cleanupAt = 0 // when the pile's cleanup glitch starts (performance.now ms), 0 = none
      // the walk's time that shows the fall's first pose
      const fallPoseT = () =>
        fall.at === 1 ? walkAction.getClip().duration - 1e-4 : 0
      const fallName =
        figure && onPage(which + '_fall') ? which + '_fall' : null
      Promise.all([
        teeGltf(which),
        fallName
          ? teeGltf(fallName).catch((e) => {
              console.error('The ' + which + ' fall could not be unpacked:', e)
              return null
            })
          : null,
      ]).then(
        ([gltf, fallGltf]) => {
          restoreURL()
          if (cloWalk) {
            // The CLO tee as exported (full detail, both prints), looping its recorded walk.
            const root = gltf.scene
            const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy())
            // Each material is set up ONCE: pieces share them (the hoodie's rim and both cuffs are one fabric), and
            // doing it per piece dimmed the cream rib, then took it for dark fabric and turned it grey (Oct 11 2026).
            const doneMats = new Set()
            root.traverse((o) => {
              if (!o.isMesh) return
              o.frustumCulled = false // (her body's stored size is tiny: CLO scaled her up through the skeleton)
              if (o.isSkinnedMesh) {
                // The mannequin's skin (see skinFor). Not pickable (testing 100k moving points per hover is slow):
                // she is moved by dragging the garment, turned by dragging the empty space.
                o.material = skinMat = DAEMON_SKINS[which]
                  ? daemonSkin(
                      o,
                      daemonU,
                      Object.assign(
                        {},
                        DAEMON_SKINS[which],
                        skinOpts.solid != null ? { solid: skinOpts.solid } : {},
                        skinOpts.bright ? { bright: skinOpts.bright } : {},
                        skinOpts.hide ? { hide: skinOpts.hide } : {},
                        skinOpts.virus
                          ? { virus: skinOpts.virus, edge: skinOpts.virus[0] }
                          : {},
                      ),
                    )
                  : skinFor(which)
                o.raycast = () => {}
                return
              }
              for (const mat of Array.isArray(o.material)
                ? o.material
                : [o.material]) {
                if (doneMats.has(mat)) continue
                doneMats.add(mat)
                mat.side = window.THREE.DoubleSide
                // The fabric (not the prints) shown neutral: CLO's black is a dark warm olive, which read green
                // under the light and the room's filters (Oct 11 2026). The brand is monochrome.
                // Dark fabric only: a light one (the hoodie's bone rib) keeps its colour.
                const lum = mat.color
                  ? 0.2126 * mat.color.r +
                    0.7152 * mat.color.g +
                    0.0722 * mat.color.b
                  : 0
                if (/Cut_Sew|Knit|Rib/i.test(mat.name) && lum < 0.2) {
                  mat.onBeforeCompile = (sh) => {
                    sh.fragmentShader = sh.fragmentShader.replace(
                      '#include <map_fragment>',
                      '#include <map_fragment>\n diffuseColor.rgb = vec3(dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722)));',
                    )
                  }
                  mat.needsUpdate = true
                } else if (
                  /print|logo/i.test(mat.name) ||
                  mat.transparent ||
                  /Cut_Sew|Knit|Rib/i.test(mat.name)
                ) {
                  // (Light fabric too, like the hoodie's cream rib: the room's light and glow are set for black
                  // fabric and blew it to white, Oct 11 2026. Same brightness share as the prints the user approved.)
                  // The prints, treated like screen-print ink: CLO exports them at full paper-white with a semi-gloss,
                  // hundreds of times brighter than the near-black fabric, so the room's glow blew them to white
                  // (Oct 11 2026). Ink on a black tee is matte and darker.
                  mat.color.multiplyScalar(PRINT_BRIGHTNESS)
                  mat.roughness = 0.9
                  mat.envMapIntensity = 0.2
                  if ('specularIntensity' in mat) mat.specularIntensity *= 0.3
                }
                for (const key of [
                  'map',
                  'normalMap',
                  'roughnessMap',
                  'metalnessMap',
                ])
                  if (mat[key]) mat[key].anisotropy = aniso
              }
            })
            // The download (top to bottom) on every material, skin and garment alike.
            const revealed = new Set()
            root.traverse((o) => {
              if (!o.isMesh) return
              for (const m of Array.isArray(o.material)
                ? o.material
                : [o.material]) {
                if (!revealed.has(m)) {
                  revealed.add(m)
                  addReveal(
                    m,
                    figure && !o.isSkinnedMesh ? garmentU : revealU,
                    !!o.isSkinnedMesh,
                  )
                }
              }
            })
            if (gltf.animations.length) {
              const clip = gltf.animations[0]
              let t0 = Infinity
              clip.tracks.forEach((t) => {
                t0 = Math.min(t0, t.times[0])
              })
              const shifted = new Set() // the pieces share one list of times: shift each list once
              clip.tracks.forEach((t) => {
                if (shifted.has(t.times)) return
                shifted.add(t.times)
                for (let k = 0; k < t.times.length; k++) t.times[k] -= t0
              })
              clip.resetDuration()
              mixer = new window.THREE.AnimationMixer(root)
              walkAction = mixer.clipAction(clip)
              walkAction.play()
              mixer.update(0)
            }
            walkRoot = root
            root.updateMatrixWorld(true)
            const box = new window.THREE.Box3(),
              gbox = new window.THREE.Box3()
            if (figure) {
              // Her size from her bones (her stored body can't be measured, see above), feet on the floor.
              // The garment = every piece that isn't the body (its box covers all its animation frames).
              root.traverse((o) => {
                if (o.isSkinnedMesh)
                  o.skeleton.bones.forEach((b) =>
                    box.expandByPoint(
                      b.getWorldPosition(new window.THREE.Vector3()),
                    ),
                  )
                else if (o.isMesh) {
                  box.expandByObject(o)
                  gbox.expandByObject(o)
                }
              })
              daemonU.uZlRange.value.set(box.min.y - 0.08, box.max.y) // the travelling lines: soles to head top
              root.traverse((o) => {
                if (o.isBone && /hips$/i.test(o.name))
                  daemonU.uZlLegTop.value = o.getWorldPosition(
                    new window.THREE.Vector3(),
                  ).y
              })
              box.min.y = Math.min(box.min.y, 0)
            } else {
              box.setFromObject(root)
              gbox.copy(box)
            }
            const dx = (box.min.x + box.max.x) / 2,
              dz = (box.min.z + box.max.z) / 2
            root.position.x -= dx
            root.position.z -= dz
            if (!gbox.isEmpty()) daemonU.uZlHideTop.value = gbox.max.y - 0.06 // 6 cm under the garment's top (see early)
            if (!gbox.isEmpty())
              GARMENT = gbox.translate(new window.THREE.Vector3(-dx, 0, -dz))
            // the zoom's aim: halfway between his neck and chest joints (Mixamo: Neck, Spine2); the tee alone
            // has no body, so just under its neckline
            let neck = null,
              chest = null
            root.traverse((o) => {
              if (o.isBone && /neck$/i.test(o.name)) neck = o
              if (o.isBone && /spine2$/i.test(o.name)) chest = o
            })
            if (neck && chest)
              FOCUS_Y =
                (neck.getWorldPosition(new window.THREE.Vector3()).y +
                  chest.getWorldPosition(new window.THREE.Vector3()).y) /
                2
            else if (GARMENT)
              FOCUS_Y = GARMENT.max.y - 0.18 * (GARMENT.max.y - GARMENT.min.y)
            // Its fall, if it has one: the same pieces (by name) in the walk's own materials, so it looks the same and
            // the download / grey look reach it too; same place as the walk. Played once by hand (fall.t).
            if (fallGltf && fallGltf.animations.length && walkAction) {
              const froot = fallGltf.scene,
                mats = new Map()
              // (a Thick walk stores each piece as several layers, under the piece's name one level up: the girl's,
              // Oct 12 2026, whose fabric then found no match and was hidden, leaving only her prints showing)
              root.traverse((o) => {
                if (!o.isMesh || o.isSkinnedMesh) return
                if (!mats.has(o.name)) mats.set(o.name, o.material)
                if (o.parent && o.parent !== root && !mats.has(o.parent.name))
                  mats.set(o.parent.name, o.material)
              })
              let missing = 0
              froot.traverse((o) => {
                if (!o.isMesh) return
                o.frustumCulled = false
                const m = mats.get(o.name)
                if (m) o.material = m
                else {
                  missing++
                  o.visible = false
                }
              })
              if (missing)
                console.warn(
                  'The ' +
                    which +
                    ' fall: ' +
                    missing +
                    ' pieces have no match in the walk (hidden).',
                )
              froot.position.copy(root.position)
              tee.add(froot) // shown while it gets ready (so its shaders are prepared too), then hidden
              const fclip = fallGltf.animations[0]
              let f0 = Infinity
              fclip.tracks.forEach((t) => {
                f0 = Math.min(f0, t.times[0])
              })
              const fshift = new Set()
              fclip.tracks.forEach((t) => {
                if (fshift.has(t.times)) return
                fshift.add(t.times)
                for (let k = 0; k < t.times.length; k++) t.times[k] -= f0
              })
              fclip.resetDuration()
              const fmixer = new window.THREE.AnimationMixer(froot),
                faction = fmixer.clipAction(fclip)
              faction.setLoop(window.THREE.LoopOnce, 1)
              faction.clampWhenFinished = true
              faction.play()
              faction.paused = true
              faction.time = 0
              fmixer.update(0)
              // at: where the site walk shows the fall's first pose (measured by the build): 0 its start, 1 its end
              const at =
                window[(which + '_fall').toUpperCase() + '_GLB_AT'] === 1
                  ? 1
                  : 0
              fall = {
                root: froot,
                mixer: fmixer,
                action: faction,
                dur: fclip.duration,
                t: 0,
                at: at,
              }
            }
            tee.add(root)
            // opts.matte (the phone page's hoodie; user, Oct 26 2026: "I don't want the glossiness"): his fabric and
            // prints fully rough, ignoring the shine map CLO exported, and less specular; weave (normal map) and
            // colours kept. Not his skin.
            if (opts && opts.matte) {
              root.traverse((o) => {
                if (!o.isMesh || o.isSkinnedMesh) return
                for (const m of Array.isArray(o.material)
                  ? o.material
                  : [o.material]) {
                  m.roughnessMap = null
                  m.roughness = 1
                  if ('specularIntensity' in m) m.specularIntensity = 0.3
                  m.envMapIntensity = 0.6 // (fully rough, the studio room's light read "a tad too bright and gray": user)
                  m.needsUpdate = true
                }
              })
            }
            TOP = box.max.y
            BOTTOM = box.min.y
            LEN = TOP - BOTTOM
            REACH = Math.hypot(box.max.x - box.min.x, box.max.z - box.min.z) / 2
            if (figure) FIGURE_FRAME.len = Math.max(FIGURE_FRAME.len, LEN)
            // The viewer's lighting (tee-clo-viewer.html): soft studio room reflected in the fabric, key, rim and
            // side lights, a raking spotlight from the front, filmic tone mapping. Replaces the older tee's lights.
            oldLights.forEach((l) => scene.remove(l))
            if (window.THREE.RoomEnvironment)
              scene.environment = roomEnv(renderer)
            for (const [i, at] of [
              [2.0, [1.5, 2.5, 2.5]],
              [1.8, [-2, 1.5, -2.5]],
              [1.0, [-2.5, 0.5, 1.5]],
            ]) {
              // softer (user: too strong, detail blurred)
              const l = new window.THREE.DirectionalLight(0xffffff, i)
              l.position.set(at[0], at[1], at[2])
              scene.add(l)
            }
            const mid = (TOP + BOTTOM) / 2
            const spot = new window.THREE.SpotLight(
              0xffffff,
              20,
              0,
              Math.PI / 7,
              0.5,
              2,
            ) // was 60: washed the detail out and set off the glow
            spot.position.set(LEN * 0.6, mid + LEN * 1.6, LEN * 1.8)
            spot.target.position.set(0, mid, 0)
            scene.add(spot)
            scene.add(spot.target)
            // opts.topLight (the phone page, js/mobile.js; user, Oct 26 2026: "a spotlight pointing straight down into
            // the mannequins... not super strong, just a bit of ambience"): soft-edged, from ~1.2 m over the head
            if (opts && opts.topLight) {
              const top = new window.THREE.SpotLight(
                opts.topLightColour || 0xffffff,
                opts.topLight,
                0,
                Math.PI / 5,
                0.8,
                2,
              )
              // opts.topLightFront (m): moved towards the viewer, so it also reaches the front of the clothes
              top.position.set(0, TOP + 1.2, opts.topLightFront || 0)
              top.target.position.set(0, mid, 0)
              scene.add(top)
              scene.add(top.target)
            }
            encodeMat.uniforms.uTone.value = 1
            encodeMat.uniforms.uExposure.value = 1.0 // was 1.35
            frame()
            prepare() // ready once its shaders are compiled and each piece has been drawn once (see prepare)
            return
          }
          if (walking) {
            // Keep the tee as it comes (skeleton and all) and play its walk on a loop.
            const root = gltf.scene
            const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy())
            root.traverse((o) => {
              if (!o.isMesh) return
              o.frustumCulled = false
              for (const mat of Array.isArray(o.material)
                ? o.material
                : [o.material]) {
                for (const key of [
                  'map',
                  'normalMap',
                  'roughnessMap',
                  'metalnessMap',
                ]) {
                  if (mat[key]) mat[key].anisotropy = aniso
                }
              }
            })
            mixer = new window.THREE.AnimationMixer(root)
            if (gltf.animations.length)
              mixer.clipAction(gltf.animations[0]).play()
            mixer.update(0)
            root.updateMatrixWorld(true)
            const box = new window.THREE.Box3().setFromObject(root)
            root.position.x -= (box.min.x + box.max.x) / 2
            root.position.z -= (box.min.z + box.max.z) / 2
            tee.add(root)
            TOP = box.max.y
            BOTTOM = box.min.y
            LEN = TOP - BOTTOM
            frame()
            ready = true
            return
          }
          gltf.scene.updateMatrixWorld(true)
          const parts = []
          gltf.scene.traverse((o) => {
            if (o.isMesh) parts.push(o)
          })
          const box = new window.THREE.Box3()
          const geos = parts.map((m) => {
            const g = plainGeometry(m.geometry)
            g.applyMatrix4(m.matrixWorld)
            g.computeBoundingBox()
            box.union(g.boundingBox)
            return g
          })
          const cx = (box.min.x + box.max.x) / 2,
            cz = (box.min.z + box.max.z) / 2
          const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy())
          const done = new Set()
          parts.forEach((m, k) => {
            geos[k].translate(-cx, 0, -cz)
            const mats = Array.isArray(m.material) ? m.material : [m.material]
            for (const mat of mats) {
              if (done.has(mat)) continue
              done.add(mat)
              for (const key of [
                'map',
                'normalMap',
                'roughnessMap',
                'metalnessMap',
              ]) {
                if (mat[key]) mat[key].anisotropy = aniso
              }
              withSway(mat)
            }
            const piece = new window.THREE.Mesh(geos[k], m.material)
            piece.frustumCulled = false
            piece.renderOrder = m.renderOrder
            tee.add(piece)
          })
          TOP = box.max.y
          BOTTOM = box.min.y
          LEN = TOP - BOTTOM
          SWING_K = 9.8 / ((LEN * 2) / 3)
          SWING_C = 2 * SWING_ZETA * Math.sqrt(SWING_K)
          SWAY.uTop.value = TOP
          SWAY.uLen.value = LEN
          frame()
          ready = true
        },
        (err) => {
          restoreURL()
          console.error('The tee could not be loaded:', err)
        },
      )

      // ---- getting it ready without stopping the page ----
      // Opening a model froze everything for ~2 s (Oct 11 2026): the browser compiled its shaders and packed every
      // animation frame into the graphics card all at once, on the first draw. Now: the shaders are compiled in the
      // background (compileAsync: in parallel where the browser allows), then each piece is drawn once, off screen,
      // ONE PIECE PER FRAME (which packs its frames), so the page keeps moving. js/room.js prepares every model this
      // way while the buttons show; a model opened before it is done finishes preparing first, then downloads in.
      const warmTarget = new window.THREE.WebGLRenderTarget(16, 16, {
        type: window.THREE.HalfFloatType,
      })
      let warmQueue = null // pieces still to draw once; null = shaders still compiling
      function prepare() {
        if (mixer) mixer.update(0)
        const prevT = renderer.getRenderTarget()
        renderer.setRenderTarget(linearTarget) // compiled for the kind of picture it is really drawn into
        const p = renderer.compileAsync
          ? renderer.compileAsync(scene, camera)
          : Promise.resolve()
        renderer.setRenderTarget(prevT)
        p.then(
          () => {
            warmQueue = []
            scene.traverse((o) => {
              if (o.isMesh) warmQueue.push(o)
            })
          },
          (err) => {
            console.error('Shader compile:', err)
            warmQueue = []
          },
        )
      }
      function warmStep() {
        if (!warmQueue) return false
        if (!warmQueue.length) {
          ready = true
          return false
        }
        const piece = warmQueue.shift()
        const shown = []
        scene.traverse((o) => {
          if (o.isMesh) {
            shown.push([o, o.visible])
            o.visible = o === piece
          }
        })
        const prevT = renderer.getRenderTarget()
        renderer.setRenderTarget(warmTarget)
        renderer.render(scene, camera)
        renderer.setRenderTarget(prevT)
        shown.forEach(([o, v]) => {
          o.visible = v
        })
        if (!warmQueue.length) {
          ready = true
          if (fall) fall.root.visible = false
        } // the fall waits hidden
        return true
      }

      // ---- the beam-out's handover to the fall, and the rise back (see VANISH_SECONDS) ----
      function startFall(now) {
        walkAction.time = fallPoseT()
        mixer.update(0) // exactly the fall's first pose
        walkRoot.visible = false
        fall.root.visible = true
        fall.t = 0
        fall.action.time = 0
        fall.mixer.update(0)
        mode = 'fall'
        beam.doneAt = now + FALL_HANDOFF * 1000 // (still in colour; grey once the swap starts)
      }
      function endRise() {
        fall.root.visible = false
        walkRoot.visible = true
        walkAction.time = fallPoseT()
        mixer.update(0) // the pose the fall began from
        mode = 'live'
        revealT = 0 // then the body downloads in
        revealU.uZlFlip.value = 1
        revealU.uZlRevealOn.value = 1
        revealU.uZlReveal.value = 99
      }

      // ---- per frame ----
      let last = 0,
        acc = 0
      return {
        get texture() {
          return outTarget.texture
        },
        // How solid this model's own picture is around (x, y), canvas pixels from the top left (0..1): read back
        // from the picture (a small block, r px round), so the room can tell when the mouse is on the model
        // itself, not just near it (Nov 1 2026, user: the collection picked from a "massive space" beside it).
        coverAt: function (x, y, r) {
          const x0 = Math.max(0, Math.round(x - r)),
            x1 = Math.min(W, Math.round(x + r + 1))
          const y0 = Math.max(0, Math.round(H - 1 - y - r)),
            y1 = Math.min(H, Math.round(H - y + r))
          const w = x1 - x0,
            h = y1 - y0
          if (w <= 0 || h <= 0) return 0
          if (!coverBuf || coverBuf.length < w * h * 4)
            coverBuf = new Uint8Array(w * h * 4)
          renderer.readRenderTargetPixels(outTarget, x0, y0, w, h, coverBuf)
          let a = 0
          for (let i = 3; i < w * h * 4; i += 4)
            if (coverBuf[i] > a) a = coverBuf[i]
          return a / 255
        },
        // How far the download has got, 0..1 on the same curve as the model's line (for the item panel, js/room.js).
        // Beaming out it runs back down to 0 (the panel goes with it); rising from the pile it is 0.
        get revealed() {
          if (!ready) return 0
          if (mode === 'beam') {
            const f = Math.min(1, beam.t / beam.dur)
            return 1 - f * f * (3 - 2 * f)
          }
          if (mode === 'rise') return 0
          if (revealT < 0) return 1
          const f = Math.min(1, revealT / REVEAL_SECONDS)
          return f * f * (3 - 2 * f)
        },
        // One preparing step (called each frame by js/room.js for models not on screen). True if it did work.
        warm: function () {
          return !ready && warmStep()
        },
        // instant (the phone page's swipe, js/mobile.js): no download, the body is simply there.
        setActive: function (on, instant) {
          active = on
          drag = null
          last = 0
          canvas.style.cursor = ''
          if (!on) return
          clothes(true) // the clothes come alive at once (no line on them)
          revealU.uZlFlip.value = 1
          revealU.uZlRevealOn.value = 1
          revealU.uZlReveal.value = 99
          // a pile first rises back up (the fall backwards), then the body downloads in (endRise)
          cleanupAt = 0
          if (mode === 'pile' && fall) {
            mode = 'rise'
            revealT = -3
            return
          }
          mode = 'live'
          revealT = 0 // the body downloads in
          if (instant) {
            revealT = -1
            revealU.uZlRevealOn.value = 0
          }
        },
        // The beam-out (js/room.js, when another phantom is picked), from the click: the body goes, top to bottom,
        // in VANISH_SECONDS while the walk hurries to the fall's first pose; then the clothes drop (in colour).
        // done() is called FALL_HANDOFF into the fall: the room starts the swap, and the clothes go grey.
        beamOut: function (done) {
          active = false
          drag = null
          canvas.style.cursor = ''
          view.tz = 1
          view.tx = 0
          view.ty = 0 // glides back to the normal view meanwhile
          mode = 'beam'
          beam.t = 0
          beam.dur = VANISH_SECONDS
          beam.done = done
          beam.doneAt = 0
          beam.t0 = walkAction ? walkAction.time : 0
          revealT = -3
          revealU.uZlFlip.value = -1
          revealU.uZlRevealOn.value = 1
          revealU.uZlReveal.value = holder.y + TOP + 0.05
        },
        get busy() {
          return mode === 'beam' || mode === 'fall' || mode === 'rise'
        },
        // the cleanup glitch's strength now (0..1, strongest at its middle, where the pile is swapped out)
        get glitch() {
          if (!cleanupAt) return 0
          const k = (performance.now() - cleanupAt) / (CLEANUP_GLITCH * 1000)
          return k < 0 || k > 1 ? 0 : 1 - Math.abs(2 * k - 1)
        },
        // Back to waiting, grey and still, at the normal view (the collection, when another is picked or none).
        setDormant: function () {
          flicker.until = 0
          flicker.level = 1
          daemonU.uZlGlitch.value = 0
          daemonU.uZlGlow.value = DAEMON_GLOW_STRENGTH
          revealT = -2
          revealU.uZlRevealOn.value = 1
          revealU.uZlReveal.value = 99
          view.tz = view.z = 1
          view.tx = view.x = 0
          view.ty = view.y = 0
          place()
          if (mode === 'rise' && fall) {
            fall.t = fall.dur
            fall.action.time = fall.t
            fall.mixer.update(0)
            mode = 'pile'
          } // left mid-rise: back to the pile
          if (mode !== 'pile') mode = 'still' // a pile stays a pile
          clothes(false)
          revealU.uZlFlip.value = 1 // grey clothes, no body
          stillDrawn = false
        },
        render: function () {
          const now = performance.now()
          const dt = last ? Math.min((now - last) / 1000, 0.1) : 0
          last = now
          if (!ready) warmStep()
          // Not picked (the collection's dormant mannequins): nothing moves, and once drawn its picture is kept.
          if (
            figure &&
            ready &&
            framedLen !== Math.max(LEN, FIGURE_FRAME.len)
          ) {
            frame()
            stillDrawn = false
          } // the other one got taller
          // the room can bring the other one in (after the beam-out, or into the fall)
          if (beam.done && beam.doneAt && now >= beam.doneAt) {
            const d = beam.done
            beam.done = null
            beam.doneAt = 0
            clothes(false)
            stillDrawn = false // the clothes go grey as it goes to wait
            d()
          }
          // the cleanup: at the glitch's peak the pile is gone and it stands where the fall began, grey and still
          if (cleanupAt && now >= cleanupAt + CLEANUP_GLITCH * 500) {
            if (mode === 'pile' && fall) {
              fall.root.visible = false
              walkRoot.visible = true
              walkAction.time = fallPoseT()
              mixer.update(0)
              mode = 'still'
              stillDrawn = false
            }
            if (now >= cleanupAt + CLEANUP_GLITCH * 1000) cleanupAt = 0
          }
          const busy = mode === 'beam' || mode === 'fall' || mode === 'rise' // moving even when not picked
          if (ready && !active && !busy && stillDrawn) return
          if (ready && (active || busy)) {
            // Fixed physics steps whatever the screen's refresh rate.
            acc += dt
            if (revealT >= 0) {
              // the download: the line sweeps from just over the head to just under the feet
              revealT += dt
              const f = Math.min(1, revealT / REVEAL_SECONDS),
                e = f * f * (3 - 2 * f)
              revealU.uZlReveal.value = holder.y + TOP + 0.05 - e * (LEN + 0.1)
              if (f >= 1) {
                revealT = -1
                revealU.uZlRevealOn.value = 0
              }
            }
            let beamF = 0
            if (mode === 'beam') {
              // the beam-out: the body goes from the head down (what's below the line stays)
              beam.t += dt
              beamF = Math.min(1, beam.t / beam.dur)
              const e = beamF * (2 - beamF) // fast at once, easing into the feet
              revealU.uZlReveal.value = holder.y + TOP + 0.05 - e * (LEN + 0.1)
            }
            if (KEEP_CENTRED) {
              holder.tx = 0
              holder.ty = 0
            } // always back in the middle
            while (acc >= DT) {
              step()
              acc -= DT
            }
            pose()
            glideView(dt)
            // held / turned / zoomed in: the walk eases to a standstill, then back up to speed (see observe)
            const held = !!drag || view.tz > 1.02 || now < heldUntil
            playSpeed +=
              ((held ? 0 : 1) - playSpeed) * Math.min(1, dt * HOLD_EASE)
            if (playSpeed < 0.01 && held) playSpeed = 0
            if (mixer && mode === 'live') mixer.update(dt * playSpeed)
            if (mode === 'beam') {
              if (fall && walkAction) {
                // the walk hurries to the fall's first pose, arriving as the body is gone (to the walk's
                // end: onwards; to its start: back, a quick rewind, never through the loop's jump)
                const target = fallPoseT()
                walkAction.time = beam.t0 + (target - beam.t0) * beamF
                mixer.update(0)
                if (beamF >= 1) startFall(now)
              } else {
                // no fall: it walks on while the body goes, then stays grey where it stood
                if (mixer) mixer.update(dt)
                if (beamF >= 1) {
                  mode = 'still'
                  revealT = -2
                  revealU.uZlFlip.value = 1
                  revealU.uZlReveal.value = 99
                  beam.doneAt = now
                }
              }
            }
            if (mode === 'fall') {
              // played once, by hand; its last frame stays (the pile)
              fall.t = Math.min(fall.dur, fall.t + dt * FALL_SPEED)
              fall.action.time = fall.t
              fall.mixer.update(0)
              if (fall.t >= fall.dur) {
                mode = 'pile'
                stillDrawn = false
                cleanupAt =
                  now +
                  (CLEANUP_MIN + Math.random() * (CLEANUP_MAX - CLEANUP_MIN)) *
                    1000
              }
            } else if (mode === 'rise') {
              // backwards, back up onto the body
              fall.t = Math.max(0, fall.t - dt * RISE_SPEED)
              fall.action.time = fall.t
              fall.mixer.update(0)
              if (fall.t <= 0) endRise()
            }
            if (DAEMON_SKINS[which] && skinMat) {
              // Glitch hits: now and then, for a moment, the glow drops out or surges and rows jump / flash.
              if (now > flicker.until) {
                flicker.level = 1
                if (Math.random() < dt * DAEMON_FLICKERS_PER_S) {
                  flicker.until = now + 40 + Math.random() * 140
                  flicker.level =
                    Math.random() < 0.6
                      ? 0.05 + Math.random() * 0.3
                      : 2 + Math.random()
                }
              }
              daemonU.uZlTime.value = (now / 1000) % 1000
              daemonU.uZlGlow.value = DAEMON_GLOW_STRENGTH * flicker.level
              daemonU.uZlGlitch.value = flicker.level === 1 ? 0 : 1
            }
          }
          if (linearTarget.width !== W || linearTarget.height !== H)
            linearTarget.setSize(W, H) // (shared: kept at this page's size)
          renderer.setRenderTarget(linearTarget)
          renderer.setClearColor(0x000000, 0)
          renderer.clear()
          if (ready) renderer.render(scene, camera)
          renderer.setRenderTarget(outTarget)
          renderer.clear()
          renderer.render(encodeScene, encodeCam)
          if (ready && !active) stillDrawn = true
        },
        // For the item panel only (Oct 12 2026, user: start it closer to the piece, but never move when it's
        // turned): like edgeX, but the reach is the GARMENT's (any way it turns), not the whole figure's.
        garmentEdgeX: function (side) {
          if (!GARMENT) return this.edgeX(side)
          const g = GARMENT,
            reach = Math.max(
              Math.hypot(g.min.x, g.min.z),
              Math.hypot(g.min.x, g.max.z),
              Math.hypot(g.max.x, g.min.z),
              Math.hypot(g.max.x, g.max.z),
            )
          const d = view.dist / view.z
          return (
            (W / 2) *
            (1 + (side * reach - view.x) / (d * halfTan * camera.aspect))
          )
        },
        // Where this model's outer edge is on screen (canvas pixels from the left), on the given side (-1 left,
        // +1 right), at the current zoom: it grows as you zoom in. Uses the model's widest reach (it turns).
        edgeX: function (side) {
          const d = view.dist / view.z
          const ndc = (side * REACH - view.x) / (d * halfTan * camera.aspect)
          return (W / 2) * (1 + ndc)
        },
        // Touch controls for the phone page's inspect view (js/mobile.js), which handles the fingers itself: the
        // same moves as the mouse's (turn as a left drag, up / down as the right drag, zoom as the wheel).
        turnBy: function (px) {
          observe()
          holder.tr += px * 0.009
        },
        panBy: function (py) {
          observe()
          const r = canvas.getBoundingClientRect()
          view.ty += (py * ((2 * view.dist * halfTan) / view.z)) / r.height
          keepInView()
        },
        zoomBy: function (k) {
          observe()
          view.tz = Math.max(1, Math.min(ZOOM_MAX, view.tz * k))
          keepInView()
        },
        resetView: function () {
          view.tz = 1
          view.tx = 0
          view.ty = 0
        },
        // edge smoothing, changed live (the phone page's speed test): rebuilt with the new setting when next drawn
        setSamples: function (n) {
          stillDrawn = false
          if (linearTarget.samples === n) return
          linearTarget.samples = n
          linearTarget.dispose()
        }, // (shared: the first model's call changes it for all)
        get zoom() {
          return view.tz
        },
        resize: function (w, h) {
          W = w
          H = h
          linearTarget.setSize(W, H)
          outTarget.setSize(W, H)
          frame()
          stillDrawn = false
        },
      }
    },
  }

  // Start unpacking the tee while the landing is showing, once the page has had a moment to start.
  // The catwalk a little later, so the two don't unpack at the same moment.
  if (
    window.TEE_CLO_WALK_GLB ||
    window.GARMENT_TEE_WALK_GLB ||
    window.GARMENT_TEE_GLB
  ) {
    window.addEventListener('load', () =>
      setTimeout(() => unpackWhenQuiet('tee'), 1500),
    )
  }
  if (window.CATWALK_GLB) {
    window.addEventListener('load', () =>
      setTimeout(() => unpackWhenQuiet('catwalk'), 4000),
    )
  }
  if (window.HOODIE_GLB) {
    window.addEventListener('load', () =>
      setTimeout(() => unpackWhenQuiet('hoodie'), 7000),
    )
  }
  // the clothes' falls (the beam-out), after the rest
  if (window.CATWALK_FALL_GLB) {
    window.addEventListener('load', () =>
      setTimeout(() => unpackWhenQuiet('catwalk_fall'), 9000),
    )
  }
  if (window.HOODIE_FALL_GLB) {
    window.addEventListener('load', () =>
      setTimeout(() => unpackWhenQuiet('hoodie_fall'), 11000),
    )
  }
})()
