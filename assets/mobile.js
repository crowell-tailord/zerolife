// The phone page (mobile.html), PLAN.md "Phone version". Hand-written. The desktop site does not use this file.
//
// Character select, "browsing files on humans inside the machine": one mannequin alone in a window at the top of the
// page, walking, through the same effects as the room (js/room.js): the Ø's effects (js/room-fx.js), over the background
// noise (js/pixel-noise.js) on the #0C0C0C Solid, then the one glow and the CRT look (js/crt.js). A sideways swipe on the
// window fires a hard glitch hit; at its peak the next mannequin (and its shop text) is there. No fall, nothing waiting
// at the edges. Only the window has effects: the shop text below is plain page text, so it stays readable. The window
// only draws while it is on screen. A small readout in its corner says how many pictures a second the phone manages.
// Phone copies of the mannequins (lighter): tools/build-phone-light.mjs.
// Intro (Oct 25 2026): first the desktop's own Ø landing (js/enter-symbol.js, unchanged: the Ø is ~200 px, only its glow
// margin is 1000 x 1080, so a phone just shows the middle of it), tap the Ø; once it has broken apart, its canvas is
// switched off and this starts: the enter video full screen through the effects (as js/room.js), then a hard glitch hit
// and the window at its normal size, the first mannequin downloading in.
(function () {
'use strict';

// ---- Settings ------------------------------------------------------------------------------
const MODELS = ['catwalk', 'hoodie'];   // in swipe order (js/product-info.js has their words)
const SHOW_VIDEO = true;       // the enter video, once, full screen through the effects, before the first mannequin
const VIDEO_SPEED = 1.2;       // as the desktop (js/room.js)
const INTRO_HIT_SECONDS = 0.45;   // the glitch hit as the video gives way to the window
const WINDOW_SHARE = 0.68;     // how much of the screen's height the mannequin's window takes
const SWAP_SECONDS = 0.45;     // the swipe's glitch hit; the next one is swapped in at its peak
// Edge smoothing of the 3D picture: off on the phone (Oct 25 2026, user's FPS readings: full screen cost a quarter more;
// smoothing draws every pixel 4 times, and the picture is redrawn as 3 px dots anyway). The desktop keeps 4.
// TEMPORARY speed test (Oct 25 2026: readings got worse after this, though it only removes work): tapping the FPS
// readout switches it between 0 and 4 live, so the two can be compared seconds apart. The readout says which is on.
let EDGE_SMOOTHING = 0;
// A soft spotlight straight down on the mannequins (Oct 26 2026, user: the garments were hard to see; "not super strong,
// just a bit of ambience light"). Its strength: the front spotlight they already have is 20 from about twice as far.
// 6 was "not strong enough": x3, in Bone, the HUMAN register's colour (user).
const TOP_LIGHT = 18, TOP_LIGHT_COLOUR = '#E4DFD3';
// Hers only (user: her "clothes not really getting any light difference": straight down misses the front of the shirt):
// 1.2 m towards the viewer (shining down onto the front at ~45 degrees), and stronger. The hoodie gets NO overhead light
// (user: it made him "super bright... made out of plastic"): he is back to exactly as before. (TOP_LIGHT: unused now.)
const TOP_LIGHTS = { catwalk: { strength: 30, front: 1.2 } };
// The mannequins' skins on the phone (Oct 25 2026, user: her skin was "almost always fully covered in colors" while his
// barely is; make hers like his, with 50% more). His (the desktop's, unchanged): no solid base; scraps of the virus on
// 40% of rows at 35% on his body, 70% of rows at 70% on his face + hands. Hers here: no solid base (was 90%), 60% of rows
// at 53% on her body, all rows at full on her face + hands. The desktop keeps her solid. cut = 1 - share of rows on.
// Then (user: not the "snowlike crystal"; four bands were "most of the time empty"; thick blinds came out "fully blue"):
// "horizontal lines travelling across her body from top to bottom and vice versa randomly. Blinking in and out. Higher
// intensity on the visible areas like the hands, lower torso and face": thin travelling lines instead of the blocks and
// dust (zlBandsAt in js/room-tee.js), at 45% on her body and full on her face, hands and lower torso (Mixamo's Hips and
// Spine bones); her blue sweep stays. Still no solid base (her full-body glow was what made her slow). Then (user: face,
// hands, neck, lower torso "almost always with lines"): a denser drifting set of lines on those (zlDense). Then (user:
// "more colored... make the bands that travel actually take away from her skin instead of adding. That way she's more
// visible than not"): bands 'gaps', her skin shows (75% on her body, full on face, neck, hands, lower torso) and the
// lines are the gaps. (Her whole body showing was what made her slow before: watch the FPS; residue lowers it.) Then
// (user: the rest "more patchy... anything the t-shirt covers shouldn't even get any texture, that way we save fps"):
// away from the vital areas she is patchy (zlPatch: thin rows, how many show rising from ~5% at her toes to ~75% at the top
// of her legs); under the tee (chest, upper back, shoulders, upper arms: hide) she isn't drawn at all.
// Then (user, Oct 26 2026: hard edges, "a gradient on all edges"): one smooth share over her body (zlPresence). Her neck
// stayed solid. THEN (user, Oct 26 2026: "just give her the same glitch look that the hoodie guy has... the same blue it
// has now"): ALL of the above dropped. Hers is now exactly his virus (the desktop's: no solid base, scraps on 40% of rows
// at 35% on the body, 70% at 70% on face + hands, the blocks, dust and sweep), in her blue (all four glow colours her
// #02f8f4; her own dark teal skin). And the light change offered earlier, on her only: her skin takes a third of the lamps'
// light (lit), under the overhead light. (The hoodie: untouched; ask the user before changing him.)
const SKINS = { catwalk: { solid: 0, residue: 0.35, residueFace: 0.7, cut: [0.6, 0.3],
  virus: ['#02f8f4', '#02f8f4', '#02f8f4', '#02f8f4'], lit: 0.33 } };
const SWIPE_PX = 40;           // how far a finger must go sideways to count as a swipe
const TAP_PX = 10, TAP_MS = 350;   // a tap (opens inspect): moved less than this, let go sooner than this
const DOUBLE_TAP_MS = 300;     // inspect: two taps this close together = back to the normal view
const HIT_GAP_MIN = 2.0;       // random glitch hit timing, same as the room
const HIT_GAP_MAX = 6.0;
const HIT_LEN_MIN = 0.1;
const HIT_LEN_MAX = 0.4;
const BACKGROUND = '#0C0C0C';  // the bottom Solid layer, as in the room
// the name's red / cyan edge split, as the desktop panel's (js/room-panel.js SPLIT): how far apart (px), how long a
// burst lasts and the wait between (s); inside a burst the split jitters every 60 ms
const SPLIT = { min: 1, max: 2.5, lenMin: 0.12, lenMax: 0.5, gapMin: 1.5, gapMax: 5 };
// The page below the window takes the colour the window's background really comes out as (the Solid through the
// glow and CRT, with the noise): read off the canvas, from a corner (no mannequin there), the middle value of
// every pixel there over BG_FRAMES frames (so the noise's bright specks don't count).
const BG_SAMPLE_PX = 24, BG_FRAMES = 20;
// ---------------------------------------------------------------------------------------------

const FX = window.ZL_ROOM_FX;
const box = document.getElementById('subject-window');
const status = document.getElementById('subject-status');
const readout = document.getElementById('subject-readout');

// Anything that goes wrong is also written in the window, so it can be read off the phone (no console there).
function say(text) { if (status) { status.textContent = text; status.hidden = !text; } }
const consoleError = console.error.bind(console);
let failed = false;
console.error = function () {
  consoleError.apply(null, arguments);
  if (failed) return;
  failed = true;
  say('[ ERROR ] ' + Array.prototype.map.call(arguments, function (a) { return a && a.message ? a.message : String(a); }).join(' ').slice(0, 160));
};
window.addEventListener('error', function (e) { console.error(e.message || 'Script error'); });

// Canvas size: as wide as the screen and WINDOW_SHARE of its height, in whole 10 px (the canvas can be a few px wider
// than the screen; the window crops it, centred). A phone's address bar showing / hiding must not resize it.
// Inspecting, the intro's video, the menu and ROOT (js/mobile-menu.js, over the static): the whole screen (covered,
// cropped, centred).
let W = 0, H = 0;
let inspecting = false, intro = false;
let screen = 'subjects';   // 'menu' | 'root' | 'cart' | 'subjects' (the wardrobe)
function size() {
  W = Math.max(200, Math.ceil(window.innerWidth / 10) * 10);
  if (inspecting || intro || screen !== 'subjects') { H = Math.max(300, Math.ceil(window.innerHeight / 10) * 10); box.style.height = ''; return; }
  H = Math.max(300, Math.round(window.innerHeight * WINDOW_SHARE / 10) * 10);
  box.style.height = H + 'px';
}

const HIT = { start: 0, len: 0, hard: 0 };
function rand(a, b) { return a + Math.random() * (b - a); }
function nextHit(from) {
  HIT.start = from + rand(HIT_GAP_MIN, HIT_GAP_MAX);
  HIT.len = rand(HIT_LEN_MIN, HIT_LEN_MAX);
  HIT.hard = Math.random();
}

// The enter video (as js/room.js): unpacked as soon as the page opens, so it can start the instant the intro does.
// Black in it becomes see-through (brightness = how solid), so the noise shows behind it.
const vid = { el: null, on: false, lastT: -1, frame: null, fctx: null };
if (SHOW_VIDEO && window.ZL_ENTER_VIDEO) {
  const bytes = atob(window.ZL_ENTER_VIDEO), u8 = new Uint8Array(bytes.length);
  for (let k = 0; k < bytes.length; k++) u8[k] = bytes.charCodeAt(k);
  vid.el = document.createElement('video');
  vid.el.muted = true;
  vid.el.playsInline = true;
  vid.el.preload = 'auto';
  vid.el.defaultPlaybackRate = VIDEO_SPEED;
  vid.el.src = URL.createObjectURL(new Blob([u8], { type: 'video/webm' }));
  vid.el.load();
}
function videoFrame() {
  const v = vid.el;
  if (!vid.frame) { vid.frame = document.createElement('canvas'); vid.fctx = vid.frame.getContext('2d', { willReadFrequently: true }); }
  if (vid.frame.width !== v.videoWidth || vid.frame.height !== v.videoHeight) { vid.frame.width = v.videoWidth; vid.frame.height = v.videoHeight; }
  vid.fctx.drawImage(v, 0, 0);
  const img = vid.fctx.getImageData(0, 0, vid.frame.width, vid.frame.height), d = img.data;
  for (let k = 0; k < d.length; k += 4) {
    const m = Math.max(d[k], d[k + 1], d[k + 2]);
    if (m > 0) { const f = 255 / m; d[k] *= f; d[k + 1] *= f; d[k + 2] *= f; }
    d[k + 3] = m;
  }
  vid.fctx.putImageData(img, 0, 0);
}

function init() {
  if (!window.THREE || !FX || !window.ZL_ROOM_TEE) { console.error('A script did not load (three.js, the effects or the mannequins).'); return; }
  const canvas = document.getElementById('subject-canvas');
  intro = !!vid.el;
  const menu = window.ZL_PHONE_MENU ? window.ZL_PHONE_MENU.create({
    count: MODELS.length,
    go: function (where) { pendingGo = where; },
    kick: function () { pendingKick = true; }
  }) : null;
  // the cart: the RECOVERY QUEUE (js/cart.js), one more screen ('cart') over the static
  const queue = window.ZL_CART ? window.ZL_CART.create({
    go: function (where) { pendingGo = where; },
    kick: function () { pendingKick = true; }
  }) : null;
  let pendingGo = null, pendingKick = false;
  let snapFor = null;   // ADD TO CART waiting for a snapshot of the window (see snapshot())
  if (intro || menu) { screen = menu ? 'menu' : 'subjects'; box.classList.add('full'); document.documentElement.classList.add('zl-locked'); }
  size();
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false, alpha: true });
  renderer.setClearColor(0x000000, 0.0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setSize(W, H);

  // The Ø's effects, over the mannequin's picture (as js/room.js).
  const material = new THREE.ShaderMaterial({
    vertexShader: FX.vertexShader,
    fragmentShader: FX.fragmentShader,
    uniforms: {
      tSource: { value: null },
      uResolution: { value: new THREE.Vector2(W, H) },
      uTime: { value: 0.0 },
      uOffset: { value: new THREE.Vector2(0, 0) },
      uScale: { value: new THREE.Vector2(1, 1) },
      uAspect: { value: new THREE.Vector2(1, 1) },
      uRotation: { value: 0.0 },
      uTint: { value: new THREE.Color('#ffffff') },
      uMouse: { value: new THREE.Vector3(0.5, 0.5, 0.0) },
      uMousePath: { value: Array.from({ length: 24 }, () => new THREE.Vector3(0.5, 0.5, 99.0)) },
      uHitCenter: { value: -100.0 },
      uHitHalf: { value: 0.1 },
      uHitHard: { value: 1.0 }
    },
    extensions: { derivatives: true },
    transparent: true,
    depthTest: false,
    depthWrite: false
  });
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

  const opts = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat, type: THREE.UnsignedByteType };
  const layerTarget = new THREE.WebGLRenderTarget(W, H, opts);

  // Stack, as the app does: Solid, then the noise, then the mannequin layer (Normal, 100%).
  const stackTarget = new THREE.WebGLRenderTarget(W, H, opts);
  const noise = window.ZL_NOISE ? window.ZL_NOISE.create(renderer, W, H) : null;
  const stackMat = new THREE.ShaderMaterial({
    vertexShader: 'varying vec2 vUv;\nvoid main() { vUv = uv; gl_Position = vec4(position, 1.0); }',
    fragmentShader: [
      'uniform sampler2D tNoise;',
      'uniform sampler2D tLayer;',
      'uniform float uHasNoise;',
      'uniform vec3 uBack;',
      'varying vec2 vUv;',
      'vec4 over(vec4 base, vec4 layer) {',
      '  return vec4(mix(base.rgb, layer.rgb, layer.a), clamp(base.a + layer.a * (1.0 - base.a), 0.0, 1.0));',
      '}',
      'void main() {',
      '  vec4 acc = vec4(uBack, 1.0);',
      '  if (uHasNoise > 0.5) acc = over(acc, texture2D(tNoise, vUv));',
      '  acc = over(acc, texture2D(tLayer, vUv));',
      '  gl_FragColor = acc;',
      '}'
    ].join('\n'),
    uniforms: {
      tNoise: { value: null },
      tLayer: { value: null },
      uHasNoise: { value: noise ? 1.0 : 0.0 },
      uBack: { value: new THREE.Color(BACKGROUND) }   // converted the way the app converts a Solid's colour
    },
    depthTest: false,
    depthWrite: false
  });
  const stackScene = new THREE.Scene();
  stackScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), stackMat));

  let bloom = FX.createBloomChain(renderer, W, H);
  const crt = window.ZL_CRT ? window.ZL_CRT.create(renderer, W, H, W / 2, H / 2) : null;

  // ---- The mannequins. Their files are NOT on the page at the start (Oct 26 2026: the page used to download both, 20 MB,
  // before the enter video could start). The first one's file is fetched once the video has finished; the others once
  // the first one is there, or when someone swipes to one. Then each is set up a little each frame (as js/room.js).
  const ids = MODELS.slice();
  const models = {};
  const files = {};   // id -> promise of its file being on the page
  function loadFile(id) {
    if (!files[id]) files[id] = window[id.toUpperCase() + '_GLB'] ? Promise.resolve() : new Promise(function (resolve, reject) {
      const s = document.createElement('script');
      s.src = 'js/' + id + '-phone-glb.js';
      s.onload = function () { resolve(); };
      s.onerror = function () { files[id] = null; reject(new Error('The ' + id + ' file could not be downloaded.')); };
      document.body.appendChild(s);
    });
    return files[id];
  }
  function modelFor(id) {   // null until its file is on the page
    if (!models[id] && window[id.toUpperCase() + '_GLB']) {
      models[id] = window.ZL_ROOM_TEE.create(renderer, canvas, W, H, id, { samples: EDGE_SMOOTHING, skin: SKINS[id], topLight: TOP_LIGHTS[id] ? TOP_LIGHTS[id].strength : 0, topLightFront: TOP_LIGHTS[id] ? TOP_LIGHTS[id].front : 0, topLightColour: TOP_LIGHT_COLOUR, matte: true });   // (matte: fabric without shine, both: user)
      models[id].setActive(false);
    }
    return models[id] || null;
  }
  let at = 0;
  let model = null;   // the one on screen (none during the intro's video, or while its file downloads)
  function firstModel() {
    loadFile(ids[0]).then(function () {
      if (model || screen !== 'subjects') { modelFor(ids[0]); return; }   // (left for the menu meanwhile: set up, not shown)
      model = modelFor(ids[0]);
      model.setActive(true);
    }, function (e) { console.error(e); });
  }
  fillShop(ids[0], 0, ids.length);
  let othersAt = 0;   // when to start setting up the others (once the first is there)

  // ---- The intro's video: full screen, through the effects; when it ends, a hard hit and the window ----
  const content = document.createElement('canvas');
  const cctx = content.getContext('2d');
  const contentTexture = new THREE.CanvasTexture(content);
  contentTexture.minFilter = THREE.LinearFilter;
  contentTexture.magFilter = THREE.LinearFilter;
  contentTexture.generateMipmaps = false;
  function drawVideo() {   // fills the screen, like the desktop's
    if (content.width !== W || content.height !== H) { content.width = W; content.height = H; }
    cctx.clearRect(0, 0, W, H);
    const s = Math.max(window.innerWidth / vid.frame.width, window.innerHeight / vid.frame.height);
    const dw = vid.frame.width * s, dh = vid.frame.height * s;
    cctx.drawImage(vid.frame, (W - dw) / 2, (H - dh) / 2, dw, dh);
    contentTexture.needsUpdate = true;
  }
  let introHit = false;   // the hit as the video gives way (fired on the next frame)
  function endIntro() {
    if (!intro) return;
    intro = false; vid.on = false; window.ZL_VIDEO_PLAYING = false;
    cctx.clearRect(0, 0, content.width, content.height); contentTexture.needsUpdate = true;   // (only the static, from now on)
    introHit = true;
    loadFile(ids[0]).catch(function (e) { console.error(e); });   // the first mannequin's file: only now, after the video
    if (menu) { menu.show('menu'); if (queue) queue.where('menu'); return; }   // the menu, over the static
    screen = 'subjects';
    showScreen();
  }
  // ---- Screens: the menu and ROOT full screen over the static; SUBJECTS = the window and the shop under it ----
  function showScreen() {
    if (menu) menu.show(screen);
    if (queue) queue.where(screen);
    if (screen === 'subjects') {
      box.classList.remove('full');
      document.documentElement.classList.remove('zl-locked');
      applySize();
      window.scrollTo(0, 0);
      if (!model) { model = modelFor(ids[at]); if (model) model.setActive(true, !!models[ids[at]].revealed); else firstModel(); }
      else model.setActive(true, true);   // (back from the menu: simply there again)
    } else {
      if (model) model.setActive(false);
      box.classList.add('full');
      document.documentElement.classList.add('zl-locked');
      applySize();
    }
  }
  const toMenu = document.getElementById('to-menu'), toRoot = document.getElementById('to-root');
  if (toMenu) { toMenu.hidden = !menu; toMenu.addEventListener('click', function () { if (!inspecting) pendingGo = 'menu'; }); }
  if (toRoot) { toRoot.hidden = !menu || !window.ZL_SITE; toRoot.addEventListener('click', function () { pendingGo = 'root'; }); }
  // ADD TO CART: the garment on screen, in the picked size, into the queue (no size picked: the size line says so)
  const addBtn = document.getElementById('shop-add'), sizeSay = document.getElementById('shop-size-say');
  if (addBtn && queue) addBtn.addEventListener('click', function () {
    const picked = document.querySelector('#shop-sizes [aria-pressed="true"]');
    if (!picked) {
      if (sizeSay) { sizeSay.textContent = 'SELECT A SIZE FIRST'; sizeSay.classList.remove('denied'); void sizeSay.offsetWidth; sizeSay.classList.add('denied'); }
      return;
    }
    // a snapshot of the window goes with it, as the queue's thumbnail until real photos exist (taken on the next
    // drawn frame; no mannequin on screen yet: none)
    const id = ids[at], size = picked.textContent;
    if (model && model.revealed > 0) snapFor = function (img) { queue.add(id, size, img); };
    else queue.add(id, size);
    addBtn.textContent = '[ QUEUED // SIZE ' + picked.textContent + ' ]';
    clearTimeout(addBtn.zlTimer);
    addBtn.zlTimer = setTimeout(function () { addBtn.textContent = '[ ADD TO CART ]'; }, 1400);
  });
  if (intro) {
    const v = vid.el;
    vid.on = true;
    window.ZL_VIDEO_PLAYING = true;   // js/room-tee.js holds back unpacking the model files until it has finished
    v.addEventListener('ended', endIntro);
    v.addEventListener('error', function () { console.error('The enter video could not be played.'); endIntro(); });
    setTimeout(function () { if (vid.on && v.currentTime === 0) endIntro(); }, 4000);   // never got going: skip it
    v.playbackRate = VIDEO_SPEED;
    const p = v.play();
    if (p && p.catch) p.catch(function (err) { console.error('The enter video could not start:', err); endIntro(); });
  } else if (menu) {
    menu.show('menu');
    if (queue) queue.where('menu');
  } else {
    firstModel();
  }

  // ---- Fingers. All caught before the mannequin's own (mouse) handling, which never sees them.
  // Browsing: sideways on the window = the next / previous file; a tap = inspect. Up and down is the browser's: it
  // scrolls the page. Inspecting (full screen): one finger turns it (and moves up and down it once zoomed in), two
  // fingers pinch to zoom, a double tap goes back to the normal view, CLOSE (or the back of the page) ends it.
  const swipe = { id: null, x: 0, y: 0, t: 0 };
  let waitingFor = null;   // a swipe waiting for that mannequin's file
  const swap = { t0: -1, to: 0, done: false };
  const fingers = new Map();   // inspecting: pointer id -> { x, y, sx, sy, t }
  const pinch = { d: 0 };
  let lastTap = 0;
  const spread = function () { const p = Array.from(fingers.values()); return Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y); };
  window.addEventListener('pointerdown', function (e) {
    if (e.target !== canvas) return;
    e.stopPropagation();
    if (!model) return;   // (the intro)
    if (inspecting) {
      fingers.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now() });
      if (fingers.size === 2) pinch.d = spread();
      return;
    }
    swipe.id = e.pointerId; swipe.x = e.clientX; swipe.y = e.clientY; swipe.t = performance.now();
  }, true);
  window.addEventListener('pointermove', function (e) {
    const f = fingers.get(e.pointerId);
    if (!inspecting || !f) return;
    if (fingers.size === 1) {
      model.turnBy(e.clientX - f.x);
      if (model.zoom > 1.02) model.panBy(e.clientY - f.y);
      f.x = e.clientX; f.y = e.clientY;
    } else {
      f.x = e.clientX; f.y = e.clientY;
      const d = spread();
      if (pinch.d > 0 && d > 0) model.zoomBy(d / pinch.d);
      pinch.d = d;
    }
  }, true);
  function fingerUp(e) {
    const f = fingers.get(e.pointerId);
    if (!f) return;
    fingers.delete(e.pointerId);
    if (fingers.size < 2) pinch.d = 0;
    const now = performance.now();
    if (e.type === 'pointerup' && Math.hypot(e.clientX - f.sx, e.clientY - f.sy) < TAP_PX && now - f.t < TAP_MS) {
      if (now - lastTap < DOUBLE_TAP_MS) { model.resetView(); lastTap = 0; } else lastTap = now;
    }
    if (!fingers.size && model.zoom <= 1.02) model.resetView();   // zoomed all the way out: back in the middle
  }
  window.addEventListener('pointerup', function (e) {
    if (inspecting) { fingerUp(e); return; }
    if (e.pointerId !== swipe.id) return;
    swipe.id = null;
    const dx = e.clientX - swipe.x, dy = e.clientY - swipe.y;
    if (Math.hypot(dx, dy) < TAP_PX && performance.now() - swipe.t < TAP_MS) { if (swap.t0 < 0) openInspect(); return; }
    if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) < Math.abs(dy) * 1.5 || ids.length < 2 || swap.t0 >= 0) return;
    const step = dx < 0 ? 1 : -1;   // finger to the left = the next one
    const to = (at + step + ids.length) % ids.length;
    e.stopPropagation();
    if (waitingFor) return;
    const go = function () { swap.to = to; modelFor(ids[to]); swap.t0 = -2; box.classList.add('glitching'); };   // (on the next frame)
    if (modelFor(ids[to])) { go(); return; }
    waitingFor = ids[to];   // its file isn't here yet: fetched now, the swipe goes ahead once it is
    loadFile(ids[to]).then(function () { waitingFor = null; go(); }, function (err) { waitingFor = null; console.error(err); });
  }, true);
  window.addEventListener('pointercancel', function (e) {
    if (inspecting) fingerUp(e);
    else if (e.pointerId === swipe.id) swipe.id = null;
  }, true);

  // ---- Inspect: the window goes full screen (and back), the page under it stays where it was ----
  const closeBtn = document.getElementById('inspect-close');
  const inspectHint = document.getElementById('inspect-hint');
  let inspectHintShown = false;
  function openInspect() {
    if (inspecting || !model || model.revealed <= 0) return;
    inspecting = true;
    fingers.clear(); pinch.d = 0; lastTap = 0;
    document.documentElement.classList.add('zl-inspecting');
    box.classList.add('inspecting');
    if (closeBtn) closeBtn.hidden = false;
    if (inspectHint && !inspectHintShown) { inspectHintShown = true; inspectHint.hidden = false; }
    applySize();
  }
  function closeInspect() {
    if (!inspecting) return;
    inspecting = false;
    fingers.clear(); pinch.d = 0;
    document.documentElement.classList.remove('zl-inspecting');
    box.classList.remove('inspecting');
    if (closeBtn) closeBtn.hidden = true;
    if (inspectHint) inspectHint.hidden = true;
    Object.keys(models).forEach(function (k) { models[k].resetView(); });
    applySize();
  }
  if (closeBtn) closeBtn.addEventListener('click', closeInspect);
  // its hint goes at the first touch inside inspect
  window.addEventListener('pointerdown', function () {
    if (inspecting && inspectHint && !inspectHint.hidden) inspectHint.classList.add('gone');
  }, { capture: true, passive: true });

  // The "swipe to browse" label: shown once the first mannequin is there, gone at the first touch anywhere.
  const hint = document.getElementById('swipe-hint');
  let hintState = ids.length > 1 ? 'waiting' : 'gone';   // waiting -> shown -> gone
  window.addEventListener('pointerdown', function () {
    if (hintState === 'shown' && hint) hint.classList.add('gone');
    hintState = 'gone';
  }, { capture: true, passive: true });

  // The name's split (see SPLIT): its own random clock.
  const nameEl = document.getElementById('subject-name');
  const split = { next: performance.now() + 2000, end: 0, tick: 0 };

  // The window's real background colour, for the page below (see BG_SAMPLE_PX).
  const gl = renderer.getContext();
  const bg = { frame: 0, r: [], g: [], b: [], px: new Uint8Array(BG_SAMPLE_PX * BG_SAMPLE_PX * 4) };
  const middle = function (a) { a.sort(function (x, y) { return x - y; }); return a[a.length >> 1]; };
  function sampleBackground() {
    renderer.setRenderTarget(null);
    gl.readPixels(4, 4, BG_SAMPLE_PX, BG_SAMPLE_PX, gl.RGBA, gl.UNSIGNED_BYTE, bg.px);   // (bottom-left corner)
    const r = [], g = [], b = [], v = [12, 12, 12];   // see-through parts show the window's own #0C0C0C behind
    for (let i = 0; i < bg.px.length; i += 4) {
      const a = bg.px[i + 3] / 255;   // (the canvas is premultiplied)
      r.push(bg.px[i] + v[0] * (1 - a)); g.push(bg.px[i + 1] + v[1] * (1 - a)); b.push(bg.px[i + 2] + v[2] * (1 - a));
    }
    bg.r.push(middle(r)); bg.g.push(middle(g)); bg.b.push(middle(b));
    if (bg.r.length < BG_FRAMES) return;
    const c = [middle(bg.r), middle(bg.g), middle(bg.b)].map(function (x) { return Math.round(x); });
    document.documentElement.style.setProperty('--page-bg', 'rgb(' + c.join(', ') + ')');
    bg.done = true;
  }

  // Draw only while the window is on screen.
  let onScreen = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) { onScreen = entries[0].isIntersecting; }, { threshold: 0 }).observe(box);
  }

  // A new size for everything (inspect opening / closing, or the phone turned).
  function applySize() {
    const oldW = W, oldH = H;
    size();
    if (W === oldW && H === oldH) return;
    renderer.setSize(W, H);
    layerTarget.setSize(W, H);
    stackTarget.setSize(W, H);
    if (noise) noise.resize(W, H);
    bloom.targets.forEach(function (t) { t.dispose(); });
    bloom = FX.createBloomChain(renderer, W, H);
    if (crt) crt.resize(W, H, W / 2, H / 2);
    Object.keys(models).forEach(function (k) { models[k].resize(W, H); });
    material.uniforms.uResolution.value.set(W, H);
  }
  // Turning the phone: a new width, so a new size (height changes alone are the address bar: ignored, except full screen).
  let resizeTimer = null, lastWidth = window.innerWidth;
  window.addEventListener('resize', function () {
    if (window.innerWidth === lastWidth && !inspecting) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { lastWidth = window.innerWidth; applySize(); }, 300);
  });

  // TEMPORARY speed test (see EDGE_SMOOTHING): tap the readout to switch the edge smoothing, live, for every mannequin.
  if (readout) {
    readout.style.pointerEvents = 'auto';
    readout.style.padding = '12px 0 12px 12px';
    readout.style.margin = '-12px 0 0 0';
    readout.addEventListener('click', function () {
      EDGE_SMOOTHING = EDGE_SMOOTHING ? 0 : 4;
      Object.keys(models).forEach(function (k) { models[k].setSamples(EDGE_SMOOTHING); });
      readout.textContent = '-- FPS // SMOOTH ' + (EDGE_SMOOTHING ? 'ON' : 'OFF');
      fps.frames = 0; fps.t0 = performance.now();
    });
  }

  // ---- Frame loop ----
  const startTime = performance.now();
  const fps = { frames: 0, t0: startTime };
  nextHit(0);
  function animate(timestamp) {
    requestAnimationFrame(animate);
    // (off screen: nothing drawn, unless a snapshot is wanted, or a screen is waiting to open: the queue's status line and
    // OPEN ROOT/ are pressed far down the shop, with the window scrolled away, and only waited before; Oct 31 2026)
    if (document.hidden || (!onScreen && !snapFor && !pendingGo && !pendingKick)) { fps.frames = 0; fps.t0 = performance.now(); return; }
    const elapsed = (timestamp - startTime) / 1000;
    const now = performance.now();

    if (!failed) say(screen !== 'subjects' || intro ? '' : waitingFor || !model ? '[ DOWNLOADING SUBJECT... ]' : model.revealed > 0 ? '' : '[ UNPACKING SUBJECT... ]');
    if (hintState === 'waiting' && model && model.revealed > 0 && hint) { hint.hidden = false; hintState = 'shown'; }
    if (now >= split.next && !split.end) { split.end = now + rand(SPLIT.lenMin, SPLIT.lenMax) * 1000; split.tick = 0; }
    if (split.end && now > split.end) {
      split.end = 0; split.next = now + rand(SPLIT.gapMin, SPLIT.gapMax) * 1000;
      nameEl.classList.remove('split');
    } else if (split.end && now >= split.tick) {
      nameEl.style.setProperty('--split', (rand(SPLIT.min, SPLIT.max) * (Math.random() < 0.5 ? -1 : 1)).toFixed(2) + 'px');
      nameEl.classList.add('split');
      split.tick = now + 60;
    }
    fps.frames++;
    if (now - fps.t0 >= 1000) {
      if (readout) readout.textContent = Math.round(fps.frames * 1000 / (now - fps.t0)) + ' FPS // SMOOTH ' + (EDGE_SMOOTHING ? 'ON' : 'OFF');
      fps.frames = 0; fps.t0 = now;
    }

    // The others: set up once the first one is there, then one small preparing step a frame (as js/room.js).
    if (!othersAt && model && model.revealed > 0) othersAt = now + 1500;
    if (othersAt && now >= othersAt) { othersAt = Infinity; ids.forEach(function (id) { loadFile(id).then(function () { modelFor(id); }, function () {}); }); }
    for (const k in models) { if (models[k] !== model && models[k].warm()) break; }

    const u = material.uniforms;
    u.uTime.value = elapsed;
    // A swipe: a hard hit now, SWAP_SECONDS long; at its peak the next one is simply there (no download).
    if (swap.t0 === -2) { swap.t0 = elapsed; swap.done = false; HIT.start = elapsed; HIT.len = SWAP_SECONDS; HIT.hard = 1; }
    // A hard hit, already at its peak: the video giving way, a new screen, a ROOT page opening.
    if (pendingGo && !intro && swap.t0 < 0) {
      if (pendingGo !== screen) { screen = pendingGo; showScreen(); }
      pendingGo = null; introHit = true;
    }
    if (pendingKick) { pendingKick = false; introHit = true; }
    if (introHit) { introHit = false; HIT.start = elapsed - INTRO_HIT_SECONDS / 2; HIT.len = INTRO_HIT_SECONDS; HIT.hard = 1; }
    if (menu) menu.hit(elapsed >= HIT.start && elapsed <= HIT.start + HIT.len);
    if (queue) queue.hit(elapsed >= HIT.start && elapsed <= HIT.start + HIT.len);
    if (swap.t0 >= 0) {
      if (!swap.done && elapsed >= swap.t0 + SWAP_SECONDS / 2) {
        swap.done = true;
        model.setActive(false);
        at = swap.to;
        model = modelFor(ids[at]);
        model.setActive(true, true);
        fillShop(ids[at], at, ids.length);
      }
      if (elapsed >= swap.t0 + SWAP_SECONDS) { swap.t0 = -1; box.classList.remove('glitching'); }
    }
    while (elapsed > HIT.start + HIT.len) nextHit(HIT.start);
    u.uHitCenter.value = HIT.start + HIT.len / 2;
    u.uHitHalf.value = HIT.len / 2;
    u.uHitHard.value = HIT.hard;

    // The mannequin (or the intro's video), through the Ø's effects...
    if (intro || screen !== 'subjects' || !model) {
      if (intro && vid.el.readyState >= 2 && vid.el.currentTime !== vid.lastT) { vid.lastT = vid.el.currentTime; videoFrame(); drawVideo(); }
      u.tSource.value = contentTexture;
    } else {
      model.render();
      u.tSource.value = model.texture;
    }
    renderer.setRenderTarget(layerTarget);
    renderer.setClearColor(0x000000, 0);
    renderer.clear();
    renderer.render(scene, camera);
    // ...laid over the noise and the Solid...
    if (noise) noise.render(elapsed, 0, 1, 1);
    stackMat.uniforms.tNoise.value = noise ? noise.target.texture : null;
    stackMat.uniforms.tLayer.value = layerTarget.texture;
    renderer.setRenderTarget(stackTarget);
    renderer.clear();
    renderer.render(stackScene, camera);
    // ...one glow over all of it, then the CRT look and echoes onto the screen.
    const bloomTexture = bloom.renderBloom(stackTarget.texture, FX.BLOOM_CONFIG.threshold, FX.BLOOM_CONFIG.intensity, FX.BLOOM_CONFIG.radius);
    bloom.composite(stackTarget.texture, bloomTexture, FX.BLOOM_CONFIG.intensity, crt ? crt.target : null);
    if (crt) crt.render();
    // the background colour: read straight after drawing (the picture is only readable in the same frame), from 1 s on
    if (!bg.done && !intro && screen === 'subjects' && model && model.revealed > 0 && bg.frame++ % 3 === 0) sampleBackground();
    if (snapFor) { const f = snapFor; snapFor = null; f(screen === 'subjects' && model ? snapshot() : null); }
  }
  // The window's picture, as it is right now, cut to a 4:5 frame round the mannequin and made small (the queue's
  // thumbnail). Only readable straight after drawing, in the same frame.
  function snapshot() {
    try {
      const sw = Math.min(canvas.width, canvas.height * 0.8), sh = sw * 1.25;
      const c = document.createElement('canvas');
      c.width = 128; c.height = 160;
      c.getContext('2d').drawImage(canvas, (canvas.width - sw) / 2, (canvas.height - sh) / 2, sw, sh, 0, 0, c.width, c.height);
      return c.toDataURL('image/jpeg', 0.75);
    } catch (e) { return null; }
  }
  requestAnimationFrame(animate);
}

// ---- A photo full screen (tap one in the strip): swipe sideways = next / previous, a tap closes it, pinch zooms ----
const photoView = document.getElementById('photo-view');
let viewList = [], viewAt = 0;
function showPhoto(i) {
  viewAt = (i + viewList.length) % viewList.length;
  const im = photoView.querySelector('img');
  im.src = viewList[viewAt][0]; im.alt = viewList[viewAt][1];
  document.getElementById('photo-count').textContent = '[ ' + two(viewAt + 1) + ' / ' + two(viewList.length) + ' ]';
}
function openPhoto(list, i) {
  if (!photoView) return;
  viewList = list; showPhoto(i);
  photoView.hidden = false;
  document.documentElement.classList.add('zl-viewing');
}
if (photoView) {
  let x0 = null, y0 = 0, fingers = 0;
  photoView.addEventListener('touchstart', function (e) {
    fingers = Math.max(fingers, e.touches.length);
    if (e.touches.length === 1) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }
  }, { passive: true });
  photoView.addEventListener('touchend', function (e) {
    if (e.touches.length) return;   // (still a finger down)
    const t = e.changedTouches[0], dx = x0 === null ? 0 : t.clientX - x0, dy = t.clientY - y0, pinched = fingers > 1;
    x0 = null; fingers = 0;
    if (pinched) return;            // a pinch zooms, never closes
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) showPhoto(viewAt + (dx < 0 ? 1 : -1));
    else if (Math.abs(dx) < 10 && Math.abs(dy) < 10) closePhoto();
    e.preventDefault();             // (no extra click after the touch)
  });
  photoView.addEventListener('click', closePhoto);   // a mouse (the PC's ?phone view)
  window.addEventListener('keydown', function (e) {
    if (photoView.hidden) return;
    if (e.key === 'Escape') closePhoto();
    else if (e.key === 'ArrowRight') showPhoto(viewAt + 1);
    else if (e.key === 'ArrowLeft') showPhoto(viewAt - 1);
  });
}
function closePhoto() {
  photoView.hidden = true;
  document.documentElement.classList.remove('zl-viewing');
}

// ---- The captions and the shop section under the window: plain page text, from js/product-info.js (placeholder) ----
const two = function (n) { return (n < 10 ? '0' : '') + n; };
function fillShop(id, index, count) {
  const p = window.ZL_PRODUCTS && window.ZL_PRODUCTS[id];
  if (!p) return;
  const set = function (elId, text) { const el = document.getElementById(elId); if (el) el.textContent = text; };
  set('subject-line', p.subject);
  set('subject-count', '[ ' + two(index + 1) + ' / ' + two(count) + ' ]');
  set('subject-file', p.file);
  set('subject-name', p.name);
  const nameEl = document.getElementById('subject-name');
  if (nameEl) nameEl.dataset.text = p.name;   // (the split's red and cyan copies)
  set('subject-tag', p.line);
  set('shop-price', p.price);
  set('shop-size-say', 'SELECT SIZE');

  // The photo strip: the product's photos (Nov 1 2026), else the empty frames the page starts with.
  // Swapping mannequins, the old photos break up into interference and the new ones come in through it (user, Nov 1
  // 2026: not a blink; lighter than the full glitch). CSS only: .tune-out / .tune-in in mobile.html.
  const strip = document.querySelector('.photos');
  if (strip) {
    if (!strip.dataset.empty) strip.dataset.empty = strip.innerHTML;
    const fillPhotos = function () {
      if (p.photos && p.photos.length) {
        strip.textContent = '';
        p.photos.forEach(function (ph, i) {
          const f = document.createElement('button');
          f.type = 'button';
          f.className = 'photo has-img';
          f.setAttribute('aria-label', 'Open photo ' + (i + 1) + ': ' + ph[1]);
          f.addEventListener('click', function () { openPhoto(p.photos, i); });
          const im = document.createElement('img');
          im.src = ph[0]; im.alt = ph[1];
          im.loading = i ? 'lazy' : 'eager'; im.decoding = 'async';
          f.appendChild(im);
          strip.appendChild(f);
        });
      } else strip.innerHTML = strip.dataset.empty;
      strip.scrollLeft = 0;
    };
    const token = (strip.tuneToken = (strip.tuneToken || 0) + 1);   // (a quick second swap cancels the first's steps)
    const calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (calm || !strip.querySelector('.has-img')) { strip.classList.remove('tune-out', 'tune-in'); fillPhotos(); }
    else {
      strip.classList.remove('tune-in'); strip.classList.add('tune-out');
      setTimeout(function () {
        if (strip.tuneToken !== token) return;
        fillPhotos();
        strip.classList.remove('tune-out'); void strip.offsetWidth; strip.classList.add('tune-in');
        setTimeout(function () { if (strip.tuneToken === token) strip.classList.remove('tune-in'); }, 420);
      }, 190);
    }
  }
  const note = document.getElementById('shop-note');
  if (note) note.hidden = true;

  const sizes = document.getElementById('shop-sizes');
  if (sizes) {
    sizes.textContent = '';
    p.sizes.forEach(function (s) {
      const b = document.createElement('button');
      b.type = 'button'; b.textContent = s; b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () {
        sizes.querySelectorAll('button').forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
        set('shop-size-say', 'SIZE ' + s);
      });
      sizes.appendChild(b);
    });
  }

  // The specs, grouped into fold-out sections.
  const groups = [
    ['FABRIC + MAKE', ['FABRIC', 'MADE OF', 'RIB', 'PRINT']],
    ['FIT + SIZE', ['FIT', 'LENGTH', 'WIDTH', 'SLEEVE']],
    ['CARE', ['CARE']],
    ['SHIPPING', ['SHIPS']]
  ];
  const specs = document.getElementById('shop-specs');
  if (!specs) return;
  specs.textContent = '';
  groups.forEach(function (g, i) {
    const rows = p.rows.filter(function (r) { return g[1].indexOf(r[0]) >= 0; });
    if (!rows.length) return;
    const d = document.createElement('details');
    if (i === 0) d.open = true;
    const s = document.createElement('summary');
    s.textContent = g[0];
    d.appendChild(s);
    const dl = document.createElement('dl');
    rows.forEach(function (r) {
      const dt = document.createElement('dt'), dd = document.createElement('dd');
      dt.textContent = r[0]; dd.textContent = r[1];
      dl.appendChild(dt); dl.appendChild(dd);
    });
    d.appendChild(dl);
    if (g[0] === 'FIT + SIZE') {
      const n = document.createElement('p');
      n.className = 'spec-note';
      n.textContent = '* rough, measured on the 3D model. Size chart [ TBC ]';
      d.appendChild(n);
    }
    specs.appendChild(d);
  });
}

const cart = document.getElementById('shop-add'), cartNote = document.getElementById('shop-note');
if (cart && cartNote && !window.ZL_CART) cart.addEventListener('click', function () { cartNote.hidden = false; });   // (no cart script)

// The Ø landing first (as index.html): once the Ø has broken apart, its canvas is switched off (frees its graphics
// memory) and taken away, and the phone page starts. No landing on the page: straight in.
const landing = document.getElementById('landing');
if (landing) {
  document.documentElement.classList.add('zl-locked');
  // (a tap on the Ø can come before this file has loaded: mobile.html notes it in ZL_ENTERED, so it is never missed)
  const enter = function () {
    setTimeout(function () {
      const old = document.getElementById('gl-canvas');
      const gl = old && (old.getContext('webgl2') || old.getContext('webgl'));
      const lose = gl && gl.getExtension('WEBGL_lose_context');
      if (lose) lose.loseContext();
      // #logo-box stays (hidden), as on the desktop: the landing's touch code still looks for it on every touch, and
      // without it each touch threw an error (Oct 25 2026, user's phone)
      const logoBox = document.getElementById('logo-box');
      if (logoBox) { logoBox.hidden = true; document.body.appendChild(logoBox); }
      landing.remove();
      document.documentElement.classList.remove('zl-locked');
      init();
    }, 0);
  };
  if (window.ZL_ENTERED) enter(); else window.addEventListener('zerolife:enter', enter, { once: true });
} else {
  init();
}
})();
