/* The desktop's cart page: the RECOVERY QUEUE (Nov 1 2026, user: the phone's queue laid over the mannequin page wasn't
   it; "a proper desktop only cart page"). Hand-written. The same queue as the phone's (js/cart.js ZL_QUEUE_DATA: one
   saved list in the browser, the same words), drawn the desktop's way, like the ROOT pages (js/room-pages.js): on a
   canvas laid into the room's picture by js/room.js, so it goes through the glow and the CRT and glitches in / out
   with the room's bursts (calmer here: js/room.js QUEUE_GLITCH). The mannequins are hidden while it shows.
   A MACHINE READOUT (user, Nov 1 2026: the first one, a grey box, "looks lazy and not very machine like"): no fill,
   a thin outline like the ROOT pages (NO corner brackets: user, "we aren't doing a cheap cyberpunk version"); the
   queued garments as a data table under column headings (# / SUBJECT / SIZE /
   QTY / VALUE / ACTION); then the CONSOLE (the queue's terminal: every action logged, the newest typing itself, older
   lines fading) beside the MANIFEST (the receipt with its dotted leaders, a block meter filling towards free
   shipping, BEGIN EXTRACTION). The - and + are drawn as lines, centred in their squares (letters never sat centred).
   The header stays put; the rest scrolls with the wheel. ESC / [ ESC // CLOSE ] goes back.
   Also the status bar at the bottom right (#queue-bar in index.html) while anything is queued: it opens this page.
*/
;(function () {
  'use strict'

  const WIDTH = 1062,
    HEIGHT = 1002 // drawing size in screen pixels (only the top `view` px are used); multiples of 3
  const PAD = 30,
    HEAD = 90 // margins; the fixed header's height
  const ROW = 111,
    THUMB = 81 // one queued garment's row; its photo
  // the table's columns (x, from the left; VALUE and ACTION are right-aligned to theirs)
  const COL = {
    n: PAD,
    subj: PAD + 48,
    size: 600,
    qty: 672,
    value: 885,
    act: WIDTH - PAD,
  }
  const LOG_LINES = 6 // how many console lines show (the newest at the bottom)
  const TYPE_MS = 22 // the console's typing: ms per letter
  const STEP_MS = 320 // extraction: the pause after each of its lines

  const css = getComputedStyle(document.documentElement)
  const v = (name, fallback) =>
    (css.getPropertyValue(name) || '').trim() || fallback
  const C = {
    bone: v('--bone', '#E4DFD3'),
    darkBone: v('--dark-bone', '#C6C1B6'),
    talk: v('--machine-talk', '#BFC3C6'),
    ash: v('--ash', '#8B9094'),
    notes: v('--machine-annotations', '#63676A'),
  }
  const MACHINE = v('--font-machine', "'Courier New', monospace"),
    HUMAN = v('--font-human', 'Georgia, serif')
  const PX = parseFloat(v('--px', '3')) || 3
  const two = (n) => (n < 10 ? '0' : '') + n

  window.ZL_QUEUE_SHEET = {
    create: function () {
      const D = window.ZL_QUEUE_DATA
      if (!D) return null
      const canvas = document.createElement('canvas')
      canvas.width = WIDTH
      canvas.height = HEIGHT
      const ctx = canvas.getContext('2d')
      const texture = new window.THREE.CanvasTexture(canvas)
      texture.minFilter = window.THREE.LinearFilter
      texture.magFilter = window.THREE.LinearFilter
      texture.generateMipmaps = false

      let lines = D.load()
      let scroll = 0,
        contentH = 0,
        view = HEIGHT,
        scale = 1,
        hover = null,
        dirty = true,
        busy = false
      let hits = []
      let log = [],
        typeTimer = 0,
        blinkOn = true,
        blinkAt = 0 // the console: [{ text, shown }]

      if (document.fonts && document.fonts.load) {
        Promise.all([
          document.fonts.load('15px ' + MACHINE),
          document.fonts.load('300 24px ' + HUMAN),
          document.fonts.load('italic 18px ' + HUMAN),
        ]).then(
          () => {
            oratorOn = null
            dirty = true
          },
          () => {},
        )
      }

      // Orator's SLASHED zero (as js/room-pages.js: the line measured from its zero.slash, drawn over the plain 0)
      const ZERO_SLASH = { x1: 170, y1: 94, x2: 414, y2: 542, weight: 56 }
      let oratorOn = null
      function oratorFound() {
        const c = document.createElement('canvas').getContext('2d'),
          t = 'WMQ0OIl1 // ORATOR'
        const w = (f) => {
          c.font = '30px ' + f
          return c.measureText(t).width
        }
        const has = (n) =>
          w(n + ', monospace') !== w('monospace') ||
          w(n + ', serif') !== w('serif')
        return has("'orator-std'") || has("'Orator Std'")
      }
      const rawFill = ctx.fillText.bind(ctx)
      ctx.fillText = function (t, x, y) {
        t = String(t)
        rawFill(t, x, y)
        if (t.indexOf('0') < 0 || /Averia/.test(ctx.font)) return
        if (oratorOn === null) oratorOn = oratorFound()
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
        const base = y + z.actualBoundingBoxDescent - 9 * k
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
      function rule(x, y, w, colour) {
        ctx.fillStyle = colour || C.notes
        ctx.fillRect(x, y, w, 1)
      }
      function text(t, x, y, align) {
        ctx.textAlign = align || 'left'
        ctx.fillText(t, x, y)
        ctx.textAlign = 'left'
      }
      // a thin outline (the site's frames: 1 px)
      function outline(x, y, w, h, colour) {
        ctx.strokeStyle = colour || C.notes
        ctx.lineWidth = 1
        ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1)
      }
      // a clickable thing: registered, and true while the mouse is over it
      function hot(id, x, y, w, h) {
        hits.push({ id, x, y, w, h })
        return hover === id
      }
      // a square button with a drawn - or + (lines, so it sits exactly in the middle); off = can't be pressed
      function stepper(id, x, y, plus, off) {
        const S = 30,
          on = !off && hot(id, x, y, S, S)
        if (on) {
          ctx.fillStyle = 'rgba(228, 223, 211, 0.08)'
          ctx.fillRect(x, y, S, S)
        }
        ctx.strokeStyle = off ? C.notes : on ? C.bone : C.ash
        ctx.lineWidth = 1
        ctx.strokeRect(x + 0.5, y + 0.5, S - 1, S - 1)
        ctx.fillStyle = off ? C.notes : on ? C.bone : C.talk
        ctx.fillRect(x + 9, y + 14, 12, 2)
        if (plus) ctx.fillRect(x + 14, y + 9, 2, 12)
      }
      // a text button in brackets: "[ RELEASE ]"; under the mouse "> [ RELEASE ]", bone
      function action(id, x, y, label, align) {
        machine(12, C.ash)
        const w = ctx.measureText('> ' + label).width + 12,
          bx = align === 'right' ? x - w : x
        const on = hot(id, bx - 6, y - 18, w + 6, 27)
        machine(12, on ? C.bone : C.ash)
        text((on ? '> ' : '') + label, x, y, align)
      }
      // a receipt row: label, dots to the value (the page's dot size), value on the right edge
      function receipt(x, w, y, label, value) {
        machine(12, C.ash)
        text(label, x, y + 12)
        const a = x + ctx.measureText(label).width + 15
        machine(15, C.bone)
        const b = x + w - ctx.measureText(value).width - 15
        text(value, x + w, y + 13, 'right')
        ctx.fillStyle = C.notes
        for (let dx = a; dx + PX <= b; dx += PX * 3)
          ctx.fillRect(dx, y + 6, PX, PX)
      }

      // thumbnails: the product's own photo (the small copies in js/product-thumbs.js: a picture with an image FILE
      // in it can't go to the 3D page when the site is opened by double-click), else the phone's snapshot
      const thumbs = {}
      function thumb(src) {
        if (!src) return null
        if (!thumbs[src]) {
          thumbs[src] = new Image()
          thumbs[src].onload = () => {
            dirty = true
          }
          thumbs[src].src = src
        }
        return thumbs[src].complete && thumbs[src].naturalWidth
          ? thumbs[src]
          : null
      }

      const count = () => lines.reduce((s, l) => s + l.qty, 0)
      const total = () => lines.reduce((s, l) => s + D.priceOf(l.id) * l.qty, 0)
      const subjects = (n) => two(n) + ' SUBJECT' + (n === 1 ? '' : 'S')
      function store() {
        D.save(lines)
        updateBar()
      }

      // the console: a new line types itself at the bottom, the older ones move up and fade
      function say(t, done) {
        clearTimeout(typeTimer)
        log.forEach((l) => {
          l.shown = l.text
        })
        const line = { text: t, shown: '' }
        log.push(line)
        if (log.length > LOG_LINES) log.shift()
        let i = 0
        ;(function tick() {
          line.shown = t.slice(0, ++i)
          dirty = true
          if (i < t.length) typeTimer = setTimeout(tick, TYPE_MS)
          else if (done) typeTimer = setTimeout(done, STEP_MS)
        })()
      }

      // ---- the table of queued garments ----
      function drawTable(y) {
        machine(12, C.notes)
        text('#', COL.n, y + 12)
        text('SUBJECT', COL.subj, y + 12)
        text('SIZE', COL.size, y + 12)
        text('QTY', COL.qty, y + 12)
        text('VALUE', COL.value, y + 12, 'right')
        text('ACTION', COL.act, y + 12, 'right')
        y += 24
        rule(PAD, y, WIDTH - PAD * 2)
        if (!lines.length) {
          y += 18
          machine(12, C.notes)
          text('-- NO SUBJECTS HELD --', COL.subj, y + 15)
          human('italic 21px', C.darkBone)
          text(
            'nothing recovered yet. they’re still waiting.',
            COL.subj,
            y + 51,
          )
          action('browse', COL.subj, y + 93, '[ BROWSE SUBJECTS ]')
          y += 117
          rule(PAD, y, WIDTH - PAD * 2)
          return y + 30
        }
        lines.forEach((l, i) => {
          const p = D.product(l.id),
            ty = y + 15,
            mid = y + ROW / 2
          machine(12, C.ash)
          text(two(i + 1), COL.n, mid + 5)
          const im = thumb(
            (window.ZL_THUMBS && window.ZL_THUMBS[p.photo]) || l.img,
          )
          if (im) ctx.drawImage(im, COL.subj, ty, THUMB, THUMB)
          outline(COL.subj, ty, THUMB, THUMB)
          const tx = COL.subj + THUMB + 21
          human('300 24px', C.bone)
          text(p.name, tx, mid - 6)
          machine(12, C.ash)
          text(D.fileOf(p) + ' // ' + D.subjectOf(p), tx, mid + 18)
          machine(15, C.bone)
          text(l.size, COL.size, mid + 5)
          stepper('dec:' + i, COL.qty, mid - 15, false, l.qty <= 1)
          machine(15, C.bone)
          text(two(l.qty), COL.qty + 54, mid + 5, 'center')
          stepper('inc:' + i, COL.qty + 78, mid - 15, true, l.qty >= D.MAX_QTY)
          machine(15, C.bone)
          text(D.money(D.priceOf(l.id) * l.qty), COL.value, mid + 5, 'right')
          action('rel:' + i, COL.act, mid + 5, '[ RELEASE ]', 'right')
          y += ROW
          rule(PAD, y, WIDTH - PAD * 2)
        })
        return y + 30
      }
      // ---- the console (left) and the manifest (right), lined up with the table: the console from its left edge,
      // the manifest from its SIZE column to its right edge; headings set and ruled like the table's ----
      const MAN_X = COL.size,
        MAN_W = WIDTH - PAD - COL.size,
        CON_W = COL.size - 45 - PAD
      function heading(x, w, y, label, right) {
        machine(12, C.notes)
        text(label, x, y + 12)
        if (right) text(right, x + w, y + 12, 'right')
        rule(x, y + 24, w)
      }
      function drawConsole(y) {
        heading(PAD, CON_W, y, 'CONSOLE')
        log.forEach((l, i) => {
          const age = log.length - 1 - i // 0 = the newest
          machine(12, age === 0 ? C.talk : age < 3 ? C.ash : C.notes, 1.2) // (tighter: the longest line fits)
          text(
            l.shown + (age === 0 && blinkOn ? ' █' : ''),
            PAD,
            y + 54 + (LOG_LINES - log.length + i) * 24,
          )
        })
        return y + 42 + LOG_LINES * 24
      }
      function drawManifest(y) {
        const x = MAN_X,
          w = MAN_W
        heading(x, w, y, 'MANIFEST', subjects(count()))
        let yy = y + 42
        const left = D.FREE_SHIPPING ? D.FREE_SHIPPING - total() : 1
        receipt(x, w, yy, 'SUBTOTAL', D.money(total()))
        yy += 30
        receipt(x, w, yy, 'SHIPPING', left > 0 ? 'AT CHECKOUT' : 'FREE')
        yy += 30
        receipt(x, w, yy, 'TAXES', 'AT CHECKOUT')
        yy += 30
        if (D.FREE_SHIPPING) {
          // a block meter filling towards free shipping (all lit once reached), edge to edge
          const bw = PX * 4,
            step = PX * 5,
            n = Math.floor((w + step - bw) / step),
            k = Math.min(1, total() / D.FREE_SHIPPING)
          machine(12, C.ash)
          text('FREE SHIPPING', x, yy + 12)
          machine(12, left > 0 ? C.ash : C.bone)
          text(
            left > 0 ? D.money(left) + ' AWAY' : 'REACHED',
            x + w,
            yy + 12,
            'right',
          )
          yy += 21
          const x0 = x + w - ((n - 1) * step + bw) // (any spare px on the left, so it ends on the right edge)
          for (let i = 0; i < n; i++) {
            ctx.fillStyle = i < Math.round(k * n) ? C.bone : C.notes
            ctx.fillRect(x0 + i * step, yy, bw, PX * 2)
          }
          yy += 27
        }
        yy += 6
        const bh = 72,
          can = lines.length > 0
        const on = can && (hot('go', x, yy, w, bh) || busy)
        if (on) {
          ctx.fillStyle = 'rgba(228, 223, 211, 0.06)'
          ctx.fillRect(x, yy, w, bh)
        }
        outline(x, yy, w, bh, can ? (on ? C.bone : C.talk) : C.notes)
        if (on) outline(x - 3, yy - 3, w + 6, bh + 6, C.bone)
        machine(15, can ? C.bone : C.notes)
        text(
          (on ? '> ' : '') + '[ BEGIN EXTRACTION ]',
          x + w / 2,
          yy + 30,
          'center',
        )
        human('italic 17px', can ? C.darkBone : C.notes)
        text(
          'secure checkout, handled by Shopify',
          x + w / 2,
          yy + 54,
          'center',
        )
        return yy + bh
      }

      function redraw() {
        dirty = false
        hits = []
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.clearRect(0, 0, WIDTH, HEIGHT)
        ctx.setTransform(scale, 0, 0, scale, 0, 0)
        outline(0, 0, WIDTH, view) // the frame, as the ROOT pages' (no fill: the void shows through)
        // what scrolls, clipped under the header
        ctx.save()
        ctx.beginPath()
        ctx.rect(0, HEAD, WIDTH, view - HEAD - 1)
        ctx.clip()
        let y = HEAD + 21 - scroll
        y = drawTable(y)
        const lower = Math.max(drawConsole(y), drawManifest(y))
        machine(12, C.notes)
        text(
          'END OF QUEUE // ' + subjects(count()) + ' // ' + D.money(total()),
          WIDTH / 2,
          lower + 36,
          'center',
        )
        const end = lower + 54
        ctx.restore()
        hits = hits.filter((h) => h.y + h.h > HEAD && h.y < view)
        contentH = end + scroll - HEAD
        // the fixed header
        machine(12, C.notes)
        text('ZERØLIFE://QUEUE', PAD, 30)
        const on = hot('close', WIDTH - PAD - 177, 12, 177, 27)
        machine(12, on ? C.bone : C.talk)
        text((on ? '> ' : '') + '[ ESC // CLOSE ]', WIDTH - PAD, 30, 'right')
        machine(21, C.bone)
        text('RECOVERY QUEUE', PAD, 63)
        machine(12, C.ash)
        text(
          subjects(count()) + ' HELD // ' + D.money(total()),
          WIDTH - PAD,
          63,
          'right',
        )
        rule(PAD, HEAD - 9, WIDTH - PAD * 2, C.ash)
        const room = view - HEAD - 12
        if (contentH > room) {
          const barH = Math.max(24, (room * room) / contentH),
            barY = HEAD + (room - barH) * (scroll / (contentH - room))
          ctx.fillStyle = C.notes
          ctx.fillRect(WIDTH - 9, HEAD, 1, room)
          ctx.fillStyle = C.talk
          ctx.fillRect(WIDTH - 10, barY, 3, barH)
        }
        texture.needsUpdate = true
      }

      // ---- the status bar at the bottom right (page HTML), while anything is queued ----
      const statusBar = document.getElementById('queue-bar')
      let barWanted = false
      function updateBar(glitch) {
        if (!statusBar) return
        const n = count()
        statusBar.hidden = !barWanted || !n
        statusBar.textContent = ''
        const span = (cls, t) => {
          const s = document.createElement('span')
          s.className = cls
          if (t) s.textContent = t
          statusBar.appendChild(s)
        }
        span('dot')
        span('cap', 'QUEUE ' + two(n))
        span('cap dim', '// ' + D.money(total()))
        span('cap go', 'OPEN ›')
        if (glitch && !statusBar.hidden) {
          statusBar.classList.remove('glitch-in')
          void statusBar.offsetWidth
          statusBar.classList.add('glitch-in')
        }
      }
      if (statusBar)
        statusBar.addEventListener('click', () => {
          if (window.ZL_ROOM && window.ZL_ROOM.openQueue)
            window.ZL_ROOM.openQueue()
        })

      return {
        texture,
        width: WIDTH,
        height: HEIGHT,
        get used() {
          return view
        },
        get count() {
          return count()
        },
        // the garment on screen, in the picked size, n more in the queue (the item panel's ADD TO CART)
        add: function (id, size, img, n) {
          if (!D.product(id)) return
          lines = D.load() // (the phone page may have changed it, same browser)
          n = Math.max(1, n || 1)
          const key = id + '/' + size,
            l = lines.find((x) => x.key === key)
          if (l) l.qty = Math.min(D.MAX_QTY, l.qty + n)
          else
            lines.push({
              key: key,
              id: id,
              size: size,
              qty: Math.min(D.MAX_QTY, n),
              img: img || null,
            })
          store()
          updateBar(true)
        },
        // js/room.js: the status bar shows (when anything is queued) while this is true
        setBar: function (on) {
          barWanted = on
          updateBar(on)
        },
        open: function () {
          lines = D.load()
          scroll = 0
          hover = null
          busy = false
          dirty = true
          log = []
          say('> LINK ESTABLISHED // ZERØLIFE://QUEUE')
          setTimeout(
            () =>
              say(
                lines.length
                  ? '> ' + subjects(count()) + ' HELD // READY'
                  : '> QUEUE EMPTY',
              ),
            520,
          )
        },
        setScale: function (s) {
          if (s !== scale) {
            scale = s
            dirty = true
          }
        },
        setView: function (h) {
          h = Math.max(300, Math.min(HEIGHT, Math.floor(h / 3) * 3))
          if (h !== view) {
            view = h
            dirty = true
          }
        },
        scrollBy: function (dy) {
          const max = Math.max(0, contentH - (view - HEAD - 12))
          const s = Math.max(0, Math.min(max, scroll + dy))
          if (s !== scroll) {
            scroll = s
            dirty = true
          }
        },
        update: function () {
          const now = performance.now()
          if (now >= blinkAt) {
            blinkOn = !blinkOn
            blinkAt = now + 530
            dirty = true
          }
          if (dirty) redraw()
        },
        hit: function (x, y) {
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
        // a click: changes the queue here; what js/room.js should do: { close } | { run: 'collection' } | { kick } | null
        press: function (id) {
          if (!id) return null
          if (id === 'close') return { close: true }
          if (id === 'browse') return { run: 'collection' }
          if (busy) return null
          const m = /^(dec|inc|rel):(\d+)$/.exec(id),
            l = m && lines[+m[2]]
          if (l) {
            const p = D.product(l.id)
            if (m[1] === 'rel') {
              lines.splice(+m[2], 1)
              store()
              say('> ' + D.subjectOf(p) + ' RELEASED BACK INTO THE MACHINE')
              if (!lines.length) scroll = 0
              return { kick: true }
            }
            const q = Math.max(
              1,
              Math.min(D.MAX_QTY, l.qty + (m[1] === 'inc' ? 1 : -1)),
            )
            if (q === l.qty) return null
            l.qty = q
            store()
            say('> ' + D.fileOf(p) + '-' + l.size + ' // QTY ' + two(q))
            return null
          }
          if (id === 'go' && lines.length) {
            busy = true
            dirty = true
            const steps = D.EXTRACT.map((s) =>
              s.replace('{n}', subjects(count())),
            )
            ;(function next(i) {
              if (i < steps.length) {
                say(steps[i], () => next(i + 1))
                return
              }
              if (D.checkout(lines)) return
              busy = false
              dirty = true
              say('> EXTRACTION FAILED // CHECKOUT NOT CONNECTED YET')
            })(0)
          }
          return null
        },
      }
    },
  }
})()
