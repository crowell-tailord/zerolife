/* MAKESHIFT item panel (Oct 12 2026, user): a shop-style case file beside the open model. Hand-written.
   It is DRAWN (not page text), and js/room-tee.js lays it into the model's picture, so it goes through the room's
   effects like the model does: dots, glitch hits, RGB split, glow, CRT ("the text looked outside the monitor").
   It downloads in with the model (top to bottom, red edge, hologram lines at the Ø's dot size). The buttons are
   placeholders: sizes and quantity can be picked; ADD TO CART queues it in the RECOVERY QUEUE (js/room-queue.js, Nov 1 2026),
   SAVE only answers with a message. Words: js/product-info.js.
   Photos (Nov 1 2026): a row of small squares under the price (the copies in js/product-thumbs.js: a drawn picture with an
   image FILE in it can't go to the 3D page when the site is opened by double-click); a click shows the full photo big,
   as plain page HTML over everything (arrow keys step, ESC or a click closes it, and only it).
   js/room.js places it (beside the model, moving out as you zoom in) and passes the mouse in.
*/
;(function () {
  'use strict'

  const WIDTH = 480,
    HEIGHT = 1000 // drawing size in screen pixels (the panel is drawn from the top; the rest is clear)
  const PAD = 24
  // the HUMAN words' red / cyan edge split: how far apart (px), how long a burst lasts and the wait between (s)
  const SPLIT = {
    min: 1,
    max: 2.5,
    lenMin: 0.12,
    lenMax: 0.5,
    gapMin: 1.5,
    gapMax: 5,
  }

  const css = getComputedStyle(document.documentElement)
  const v = (name, fallback) =>
    (css.getPropertyValue(name) || '').trim() || fallback
  const C = {
    bone: v('--bone', '#E4DFD3'),
    darkBone: v('--dark-bone', '#C6C1B6'),
    talk: v('--machine-talk', '#BFC3C6'),
    notes: v('--machine-annotations', '#63676A'),
    voidc: v('--void', '#0C0C0C'),
    red: '#ff1e1e',
  }
  const MACHINE = v('--font-machine', "'Courier New', monospace"),
    HUMAN = v('--font-human', 'Georgia, serif')
  const PX = parseFloat(v('--px', '3')) || 3 // the Ø's dot: the hologram lines use it (the user wants pixels to match)

  // A photo, big, over the whole page: plain page HTML (so it is the real photo, not through the room's effects).
  // While it shows, the room hears nothing: its window listeners swallow the keys, the wheel and the pointer, and
  // js/room.js asks window.ZL_PHOTO_OPEN() before its own (earlier) collection click (Nov 1 2026, user: a click in it
  // still swapped the mannequin). Arrows sit at the photo's sides; arrow keys step; ESC, CLOSE or the dark around it
  // closes it, and only it. Each control lights up under the mouse.
  function photoView() {
    const st = document.createElement('style')
    st.textContent =
      '#zl-photo{position:fixed;inset:0;z-index:1000;display:none;place-items:center;align-content:center;gap:15px;background:rgba(12,12,12,0.94);}' +
      '#zl-photo .stage{position:relative;}' +
      '#zl-photo img{display:block;width:min(78vh,78vw);height:min(78vh,78vw);object-fit:cover;border:1px solid ' +
      C.notes +
      ';}' +
      '#zl-photo .bar{display:flex;justify-content:space-between;align-items:center;width:min(78vh,78vw);}' +
      '#zl-photo .t{margin:0;font:12px ' +
      MACHINE +
      ';letter-spacing:0.18em;color:' +
      C.notes +
      ';background:none;border:0;padding:6px 0;}' +
      '#zl-photo .arrow{position:absolute;top:50%;transform:translateY(-50%);font:28px ' +
      MACHINE +
      ';color:' +
      C.notes +
      ';background:none;' +
      'border:1px solid transparent;width:48px;height:72px;cursor:pointer;}' +
      '#zl-photo .prev{right:calc(100% + 18px);} #zl-photo .next{left:calc(100% + 18px);}' +
      '#zl-photo button{cursor:pointer;transition:color .12s,border-color .12s,text-shadow .12s;}' +
      '#zl-photo button:hover{color:' +
      C.bone +
      ';text-shadow:0 0 6px rgba(228,223,211,0.55);}' +
      '#zl-photo .arrow:hover{border-color:' +
      C.notes +
      ';}'
    document.head.appendChild(st)
    const box = document.createElement('div')
    box.id = 'zl-photo'
    box.innerHTML =
      '<div class="stage"><button type="button" class="arrow prev" aria-label="Previous photo">&lt;</button>' +
      '<img alt=""><button type="button" class="arrow next" aria-label="Next photo">&gt;</button></div>' +
      '<div class="bar"><p class="t count"></p><button type="button" class="t close">[ ESC // CLOSE ]</button></div>'
    document.body.appendChild(box)
    const img = box.querySelector('img'),
      count = box.querySelector('.count')
    let list = [],
      at = 0
    const two = (n) => (n < 10 ? '0' : '') + n
    function go(i) {
      at = (i + list.length) % list.length
      const path = list[at][0]
      img.onerror = function () {
        img.onerror = null
        img.src = (window.ZL_THUMBS && window.ZL_THUMBS[path]) || ''
      } // (one-file share: no photo files)
      img.src = path
      img.alt = list[at][1]
      count.textContent = '[ ' + two(at + 1) + ' / ' + two(list.length) + ' ]'
      box.querySelectorAll('.arrow').forEach((b) => {
        b.style.visibility = list.length > 1 ? '' : 'hidden'
      })
    }
    const open = () => box.style.display === 'grid'
    window.ZL_PHOTO_OPEN = open
    function hide() {
      box.style.display = 'none'
    }
    const swallow = (e) => {
      e.stopImmediatePropagation()
    }
    window.addEventListener(
      'keydown',
      function (e) {
        if (!open()) return
        if (e.key === 'Escape') hide()
        else if (e.key === 'ArrowRight') go(at + 1)
        else if (e.key === 'ArrowLeft') go(at - 1)
        swallow(e)
        e.preventDefault()
      },
      true,
    )
    ;['pointerdown', 'pointermove', 'pointerup', 'wheel'].forEach((t) =>
      window.addEventListener(
        t,
        function (e) {
          if (open()) swallow(e)
        },
        true,
      ),
    )
    box.addEventListener('click', function (e) {
      if (e.target.closest('.prev')) go(at - 1)
      else if (e.target.closest('.next')) go(at + 1)
      else if (e.target === img)
        return // a click on the photo itself does nothing
      else hide()
    })
    return {
      show: function (photos, i) {
        list = photos
        go(i)
        box.style.display = 'grid'
      },
    }
  }

  window.ZL_PANEL = {
    create: function () {
      const canvas = document.createElement('canvas')
      canvas.width = WIDTH
      canvas.height = HEIGHT
      const ctx = canvas.getContext('2d')
      const texture = new window.THREE.CanvasTexture(canvas)
      texture.minFilter = window.THREE.LinearFilter
      texture.magFilter = window.THREE.LinearFilter
      texture.generateMipmaps = false

      let data = null,
        p = 0,
        hover = null,
        dirty = true,
        used = HEIGHT,
        scale = 1
      let split = 0,
        splitNext = performance.now() + 2000,
        splitEnd = 0,
        splitTick = 0 // the human words' split
      const state = { size: null, qty: 1, saved: false, msg: '', msgUntil: 0 }
      let cart = 0 // how many are in the queue (js/cart.js), across all items
      let which = null // the open item's id (js/product-info.js)
      let hits = [] // the buttons, as drawn: { id, x, y, w, h }

      // the photos: the small copies, loaded once each, redrawn when they arrive
      const thumbs = {}
      function thumb(path) {
        if (!thumbs[path]) {
          const src = window.ZL_THUMBS && window.ZL_THUMBS[path]
          if (!src) return null
          thumbs[path] = new Image()
          thumbs[path].onload = function () {
            dirty = true
          }
          thumbs[path].src = src
        }
        return thumbs[path].complete && thumbs[path].naturalWidth
          ? thumbs[path]
          : null
      }
      const view = photoView()

      // fonts drawn into a picture must be loaded first: redraw once they are
      if (document.fonts && document.fonts.load) {
        Promise.all([
          document.fonts.load('300 44px ' + HUMAN),
          document.fonts.load('italic 20px ' + HUMAN),
          document.fonts.load('15px ' + MACHINE),
        ]).then(
          () => {
            fontLine = null
            oratorOn = null
            dirty = true
          },
          () => {},
        )
      }

      function machine(size, colour, spacing) {
        ctx.font = size + 'px ' + MACHINE
        ctx.fillStyle = colour
        if ('letterSpacing' in ctx)
          ctx.letterSpacing = (spacing == null ? 0.18 * size : spacing) + 'px'
      }
      function human(style, colour) {
        ctx.font = style + ' ' + HUMAN
        ctx.fillStyle = colour
        if ('letterSpacing' in ctx) ctx.letterSpacing = '0px'
      }
      // The HUMAN words (serif) get a red / cyan split on their edges now and then (user, Oct 12 2026): drawn as a
      // red copy and a cyan copy pulled apart, added together (where they overlap it is the colour again).
      // Every 0 is Orator's SLASHED zero (user, Oct 12 2026: "the 0 that has a line across its inside", never Ø).
      // Orator has it (glyph zero.slash, OpenType "zero"), but a drawn picture can't switch font options on, so
      // its slash is drawn over the plain 0: same line, measured from Orator's zero.slash (in 1/1000 of the size,
      // from the glyph's origin on the baseline). Only with Orator itself (on another font it wouldn't line up).
      const ZERO_SLASH = { x1: 170, y1: 94, x2: 414, y2: 542, weight: 56 }
      let oratorOn = null
      const rawFill = ctx.fillText.bind(ctx)
      ctx.fillText = function (t, x, y) {
        t = String(t)
        rawFill(t, x, y)
        if (t.indexOf('0') < 0 || /Averia/.test(ctx.font)) return // machine words only
        if (oratorOn === null) oratorOn = fontCheck().found
        if (!oratorOn) return
        ctx.save()
        const align = ctx.textAlign
        ctx.textAlign = 'left'
        const full = ctx.measureText(t).width,
          z = ctx.measureText('0')
        const x0 =
          align === 'center'
            ? x - full / 2
            : align === 'right' || align === 'end'
              ? x - full
              : x
        const k =
          parseFloat((ctx.font.match(/([\d.]+)px/) || [0, 15])[1]) / 1000
        const base = y + z.actualBoundingBoxDescent - 9 * k // the glyph's bottom is 9/1000 below the baseline
        ctx.strokeStyle = ctx.fillStyle
        ctx.lineWidth = ZERO_SLASH.weight * k
        ctx.lineCap = 'butt'
        for (let i = 0; i < t.length; i++) {
          if (t[i] !== '0') continue
          const ox = x0 + (i ? ctx.measureText(t.slice(0, i)).width : 0)
          ctx.beginPath()
          ctx.moveTo(ox + ZERO_SLASH.x1 * k, base - ZERO_SLASH.y1 * k)
          ctx.lineTo(ox + ZERO_SLASH.x2 * k, base - ZERO_SLASH.y2 * k)
          ctx.stroke()
        }
        ctx.restore()
      }

      function humanText(text, x, y, colour) {
        if (!split) {
          ctx.fillText(text, x, y)
          return
        }
        const h = colour.replace('#', ''),
          r = parseInt(h.slice(0, 2), 16),
          g = parseInt(h.slice(2, 4), 16),
          b = parseInt(h.slice(4, 6), 16)
        ctx.save()
        ctx.globalCompositeOperation = 'lighter'
        ctx.fillStyle = 'rgb(' + r + ',0,0)'
        ctx.fillText(text, x - split, y)
        ctx.fillStyle = 'rgb(0,' + g + ',' + b + ')'
        ctx.fillText(text, x + split, y)
        ctx.restore()
      }
      function wrap(text, maxW) {
        // split into lines that fit
        const words = String(text).split(' '),
          lines = []
        let cur = ''
        for (const w of words) {
          const t = cur ? cur + ' ' + w : w
          if (ctx.measureText(t).width > maxW && cur) {
            lines.push(cur)
            cur = w
          } else cur = t
        }
        if (cur) lines.push(cur)
        return lines
      }
      function box(id, x, y, w, h, label, opts) {
        // a button: outline; lit when hovered or picked
        const on = opts && opts.on,
          hot = hover === id
        ctx.lineWidth = 1
        // Hovered or picked: never a white fill (the room's glow blew it out and the words vanished, Oct 12 2026):
        // a faint wash (a little stronger when picked), a double outline and bright words.
        if (on || hot) {
          ctx.fillStyle = on
            ? 'rgba(228, 223, 211, 0.14)'
            : 'rgba(228, 223, 211, 0.08)'
          ctx.fillRect(x, y, w, h)
          ctx.strokeStyle = C.bone
          ctx.strokeRect(x + 3.5, y + 3.5, w - 7, h - 7)
        }
        ctx.strokeStyle = on || hot ? C.bone : C.notes
        ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1)
        machine((opts && opts.size) || 15, on || hot ? C.bone : C.talk)
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(
          label,
          x +
            w / 2 +
            (ctx.letterSpacing ? parseFloat(ctx.letterSpacing) / 2 : 0),
          y + h / 2 + 1,
        )
        ctx.textAlign = 'left'
        ctx.textBaseline = 'alphabetic'
        hits.push({ id, x, y, w, h })
      }

      // TEMPORARY (Oct 12 2026, user asked): is Orator Std really showing? Text drawn in a picture can't be
      // inspected, so the panel says it. Found = it changes the width of a test line against plain fallbacks.
      let fontLine = null
      function fontCheck() {
        const c = document.createElement('canvas').getContext('2d'),
          t = 'WMQ0OIl1 // ORATOR'
        const w = (f) => {
          c.font = '30px ' + f
          return c.measureText(t).width
        }
        // 'orator-std' = the name Adobe Fonts' web project gives it; 'Orator Std' = the computer's copy
        const has = (n) =>
          w(n + ', monospace') !== w('monospace') ||
          w(n + ', serif') !== w('serif')
        const found = has("'orator-std'") || has("'Orator Std'")
        return found
          ? { found, text: 'FONT: ORATOR_STD // OK', colour: C.notes }
          : {
              found,
              text: 'FONT: FALLBACK // ORATOR STD NOT FOUND',
              colour: C.red,
            }
      }

      // Sizes and steps are multiples of 3 px (the CRT's scanline grid, Oct 12 2026), so every line is cut the
      // same way; smallest machine text 15 px (the footnote and USD stay 12) (user: hard to read).
      function drawContent() {
        hits = []
        const d = data,
          inner = WIDTH - PAD * 2
        let y = PAD
        machine(15, C.notes)
        ctx.fillText(d.subject, PAD, y + 12)
        y += 30
        human('300 45px', C.bone)
        humanText(d.name, PAD, y + 39, C.bone)
        y += 54
        machine(15, C.notes)
        ctx.fillText(d.file, PAD, y + 12)
        y += 27
        human('italic 21px', C.darkBone)
        humanText(d.line, PAD, y + 18, C.darkBone)
        y += 39
        machine(30, C.bone, 3)
        ctx.fillText(d.price, PAD, y + 27)
        machine(12, C.notes)
        ctx.fillText('USD // TAX INCL.', PAD + 192, y + 24)
        y += 45

        if (d.photos && d.photos.length) {
          // one row of squares across the panel, 18 px apart (five = 72 px)
          const n = d.photos.length,
            gap = 18,
            w = Math.floor((inner - gap * (n - 1)) / n / 3) * 3
          d.photos.forEach((ph, i) => {
            const x = PAD + i * (w + gap),
              im = thumb(ph[0]),
              hot = hover === 'photo:' + i
            if (im) ctx.drawImage(im, x, y, w, w)
            ctx.lineWidth = 1
            ctx.strokeStyle = hot ? C.bone : C.notes
            ctx.strokeRect(x + 0.5, y + 0.5, w - 1, w - 1)
            if (hot) ctx.strokeRect(x + 3.5, y + 3.5, w - 7, w - 7)
            hits.push({ id: 'photo:' + i, x, y, w, h: w })
          })
          y += w + 18
        }

        machine(15, C.notes)
        ctx.fillText('SIZE', PAD, y + 12)
        y += 21
        d.sizes.forEach((s, i) =>
          box('size:' + s, PAD + i * 63, y, 54, 39, s, {
            on: state.size === s,
          }),
        )
        y += 54
        machine(15, C.notes)
        ctx.fillText('QTY', PAD, y + 27)
        box('qty:-', PAD + 72, y, 39, 39, '-')
        machine(18, C.bone)
        ctx.textAlign = 'center'
        ctx.fillText(String(state.qty), PAD + 141, y + 27)
        ctx.textAlign = 'left'
        box('qty:+', PAD + 171, y, 39, 39, '+')
        y += 54
        box(
          'cart',
          PAD,
          y,
          inner,
          51,
          hover === 'cart' ? '> [ ADD TO CART ] <' : '[ ADD TO CART ]',
          { size: 18 },
        )
        y += 60
        box(
          'save',
          PAD,
          y,
          inner,
          36,
          state.saved ? '[ SAVED TO ARCHIVE ]' : '[ + SAVE TO ARCHIVE ]',
          { size: 15, on: state.saved },
        )
        y += 45
        if (state.msgUntil > performance.now()) {
          machine(15, /SIZE/.test(state.msg) ? C.red : C.bone)
          ctx.fillText(state.msg, PAD, y + 12)
        } else {
          // the queue's count, and a way to it (js/room-queue.js) once anything is in it
          const go = cart > 0 && window.ZL_DESK_QUEUE
          if (go) hits.push({ id: 'queue', x: PAD, y: y - 6, w: inner, h: 27 })
          machine(15, go && hover === 'queue' ? C.bone : go ? C.talk : C.notes)
          ctx.fillText(
            (go && hover === 'queue' ? '> ' : '') +
              'QUEUE (' +
              cart +
              ')' +
              (go ? '  // [ OPEN ]' : ''),
            PAD,
            y + 12,
          )
        }
        y += 30

        ctx.fillStyle = C.notes
        ctx.fillRect(PAD, y, inner, 1)
        y += 15
        const labelW = 99
        for (const [label, value] of d.rows) {
          machine(15, C.notes, 1.5)
          ctx.fillText(label, PAD, y + 12)
          machine(15, C.talk, 1.5)
          const lines = wrap(value.toUpperCase(), inner - labelW)
          lines.forEach((ln, k) =>
            ctx.fillText(ln, PAD + labelW, y + 12 + k * 21),
          )
          y += 21 * lines.length + 6
        }
        ctx.fillStyle = C.notes
        ctx.fillRect(PAD, y + 3, inner, 1)
        y += 15
        machine(12, C.notes)
        ctx.fillText('* MEASURED ON THE 3D MODEL, APPROX.', PAD, y + 9)
        y += 18
        ctx.fillText('[ ESC // CLOSE ]', PAD, y + 9)
        y += 18
        if (!fontLine) fontLine = fontCheck()
        machine(12, fontLine.colour)
        ctx.fillText(fontLine.text, PAD, y + 9)
        y += 18
        used = y + PAD
      }

      function redraw() {
        dirty = false
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.clearRect(0, 0, WIDTH, HEIGHT)
        ctx.setTransform(scale, 0, 0, scale, 0, 0) // short window: drawn smaller here, not stretched later (blur)
        if (!data || p <= 0) {
          texture.needsUpdate = true
          return
        }
        if (used === HEIGHT) {
          drawContent()
          ctx.clearRect(0, 0, WIDTH, HEIGHT)
        } // first time: measure its height
        // the download: drawn only down to the line
        const edge = p >= 1 ? HEIGHT : p * used
        ctx.save()
        ctx.beginPath()
        ctx.rect(0, 0, WIDTH, edge)
        ctx.clip()
        drawContent()
        ctx.restore()
        if (p < 1) {
          ctx.save()
          ctx.globalCompositeOperation = 'destination-out' // hologram lines above the edge
          for (let ly = edge - 40; ly < edge; ly += PX * 2)
            ctx.fillRect(0, ly, WIDTH, PX)
          ctx.restore()
          ctx.save()
          ctx.fillStyle = C.red
          ctx.shadowColor = C.red
          ctx.shadowBlur = 12
          ctx.fillRect(0, edge - 1, WIDTH, 2)
          ctx.restore()
        }
        texture.needsUpdate = true
      }

      return {
        texture,
        width: WIDTH,
        height: HEIGHT,
        get used() {
          return used
        }, // how tall the drawn panel is (for centring it)
        open: function (id) {
          which = id
          if (window.ZL_DESK_QUEUE) cart = window.ZL_DESK_QUEUE.count // (the queue's count, shown under the buttons)
          data = (window.ZL_PRODUCTS && window.ZL_PRODUCTS[which]) || null
          state.size = null
          state.qty = 1
          state.saved = false
          state.msgUntil = 0
          p = 0
          hover = null
          used = HEIGHT
          dirty = true
          if (data) {
            drawContent()
            ctx.clearRect(0, 0, WIDTH, HEIGHT)
          } // measure its height now (no jump later)
          return !!data
        },
        // each frame: how far the model's download has got (0..1). Redraws only when something changed.
        update: function (progress) {
          if (progress !== p) {
            p = progress
            dirty = true
          }
          // the human words' split: short random bursts, its own clock; the split jitters inside a burst
          const now = performance.now(),
            rnd = (a, b) => a + Math.random() * (b - a)
          if (now >= splitNext && !splitEnd) {
            splitEnd = now + rnd(SPLIT.lenMin, SPLIT.lenMax) * 1000
            splitTick = 0
          }
          if (splitEnd && now > splitEnd) {
            splitEnd = 0
            split = 0
            dirty = true
            splitNext = now + rnd(SPLIT.gapMin, SPLIT.gapMax) * 1000
          } else if (splitEnd && now >= splitTick) {
            split = rnd(SPLIT.min, SPLIT.max) * (Math.random() < 0.5 ? -1 : 1)
            splitTick = now + 60
            dirty = true
          }
          if (state.msgUntil && performance.now() > state.msgUntil) {
            state.msgUntil = 0
            dirty = true
          }
          if (dirty) redraw()
        },
        hit: function (x, y) {
          // which button is at (x, y), in panel pixels
          for (const h of hits)
            if (x >= h.x && x <= h.x + h.w && y >= h.y && y <= h.y + h.h)
              return h.id
          return null
        },
        setHover: function (id) {
          if (id !== hover) {
            hover = id
            dirty = true
          }
        },
        setScale: function (s) {
          if (s !== scale) {
            scale = s
            dirty = true
          }
        }, // js/room.js: fit a short window
        press: function (id) {
          if (!id || !data) return
          const say = (m) => {
            state.msg = m
            state.msgUntil = performance.now() + 2200
          }
          if (id.startsWith('photo:')) {
            view.show(data.photos, +id.slice(6))
            return
          }
          if (id === 'queue') {
            if (window.ZL_ROOM && window.ZL_ROOM.openQueue)
              window.ZL_ROOM.openQueue()
            return
          }
          if (id.startsWith('size:')) state.size = id.slice(5)
          else if (id === 'qty:-') state.qty = Math.max(1, state.qty - 1)
          else if (id === 'qty:+') state.qty = Math.min(9, state.qty + 1)
          else if (id === 'cart') {
            if (!state.size) say('> PICK A SIZE FIRST')
            else if (window.ZL_DESK_QUEUE) {
              // the real queue (js/cart.js, index.html), as on the phone
              window.ZL_DESK_QUEUE.add(which, state.size, null, state.qty)
              cart = window.ZL_DESK_QUEUE.count
              say(
                '> QUEUED ' +
                  state.qty +
                  ' x ' +
                  state.size +
                  ' // QUEUE (' +
                  cart +
                  ')',
              )
            } else {
              cart += state.qty
              say(
                '> ADDED ' +
                  state.qty +
                  ' x ' +
                  state.size +
                  ' // CART (' +
                  cart +
                  ')',
              )
            }
          } else if (id === 'save') {
            state.saved = !state.saved
            say(state.saved ? '> SAVED TO ARCHIVE' : '> REMOVED FROM ARCHIVE')
          }
          dirty = true
        },
      }
    },
  }
})()
