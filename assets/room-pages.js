/* TEMPORARY site pages (Oct 25 2026, user): every page a clothing line needs, as the machine's FILE DIRECTORY
   (ZERØLIFE://ROOT): folders of files, each file a page, opened as a document. Until each one moves to its object in
   the 3D room. Hand-written. Words: js/site-pages.js.
   Drawn like the item panel (js/room-panel.js): on a canvas laid into the room's picture by js/room.js, so it goes
   through the glow and the CRT and glitches in / out with the panel's bursts. Same type, sizes in multiples of 3 px
   (the CRT's scanline grid), Orator's slashed zero drawn by hand (a drawn picture can't switch font options on).
   A header bar stays put; what is under it scrolls with the wheel (a thin bar on the right shows where you are).
*/
;(function () {
  'use strict'

  const WIDTH = 762,
    HEIGHT = 1002 // drawing size in screen pixels (only the top `view` px are used)
  const PAD = 30,
    HEAD = 84 // margins; the fixed header bar's height

  const css = getComputedStyle(document.documentElement)
  const v = (name, fallback) =>
    (css.getPropertyValue(name) || '').trim() || fallback
  const C = {
    bone: v('--bone', '#E4DFD3'),
    darkBone: v('--dark-bone', '#C6C1B6'),
    talk: v('--machine-talk', '#BFC3C6'),
    ash: v('--ash', '#8B9094'),
    notes: v('--machine-annotations', '#63676A'),
    red: '#ff1e1e',
  }
  const MACHINE = v('--font-machine', "'Courier New', monospace"),
    HUMAN = v('--font-human', 'Georgia, serif')

  window.ZL_PAGES = {
    create: function () {
      const canvas = document.createElement('canvas')
      canvas.width = WIDTH
      canvas.height = HEIGHT
      const ctx = canvas.getContext('2d')
      const texture = new window.THREE.CanvasTexture(canvas)
      texture.minFilter = window.THREE.LinearFilter
      texture.magFilter = window.THREE.LinearFilter
      texture.generateMipmaps = false

      let cur = 'root',
        scroll = 0,
        contentH = 0,
        view = HEIGHT,
        scale = 1,
        hover = null,
        dirty = true
      let hits = [] // what can be clicked, as drawn: { id, x, y, w, h }

      if (document.fonts && document.fonts.load) {
        Promise.all([
          document.fonts.load('15px ' + MACHINE),
          document.fonts.load('300 42px ' + HUMAN),
          document.fonts.load('italic 21px ' + HUMAN),
        ]).then(
          () => {
            oratorOn = null
            dirty = true
          },
          () => {},
        )
      }

      // Orator's SLASHED zero (as js/room-panel.js: the line measured from its zero.slash, drawn over the plain 0)
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
      function wrap(text, maxW) {
        const words = String(text).split(' '),
          lines = []
        let line = ''
        for (const w of words) {
          const t = line ? line + ' ' + w : w
          if (ctx.measureText(t).width > maxW && line) {
            lines.push(line)
            line = w
          } else line = t
        }
        if (line) lines.push(line)
        return lines
      }
      function rule(y) {
        ctx.fillStyle = C.notes
        ctx.fillRect(PAD, y, WIDTH - PAD * 2, 1)
      }
      // a clickable row: a faint wash and a ">" when the mouse is over it (never a white fill: the glow eats it)
      function hot(id, x, y, w, h) {
        hits.push({ id, x, y, w, h })
        if (hover !== id) return false
        ctx.fillStyle = 'rgba(228, 223, 211, 0.08)'
        ctx.fillRect(x, y, w, h)
        ctx.strokeStyle = C.bone
        ctx.lineWidth = 1
        ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1)
        return true
      }

      // ---- the directory ----
      function drawRoot(y0) {
        const R = window.ZL_SITE.root,
          inner = WIDTH - PAD * 2
        let y = y0
        for (const f of R.folders) {
          machine(15, C.talk)
          ctx.fillText('▸ ' + f.name, PAD, y + 15)
          machine(12, C.notes)
          ctx.textAlign = 'right'
          ctx.fillText(f.what, WIDTH - PAD, y + 15)
          ctx.textAlign = 'left'
          y += 30
          for (const e of f.files) {
            const id = e.locked ? null : 'file:' + e.n
            const on = id && hot(id, PAD, y - 3, inner, 30)
            const col = e.locked ? C.notes : on ? C.bone : C.talk
            machine(15, e.locked ? C.notes : C.ash)
            ctx.fillText(e.n, PAD + 18, y + 18)
            machine(15, col)
            ctx.fillText((on ? '> ' : '') + e.file, PAD + 66, y + 18)
            machine(12, e.locked ? C.notes : C.ash)
            ctx.fillText(e.label, PAD + 330, y + 18)
            machine(12, C.notes)
            ctx.fillText(e.size, PAD + 525, y + 18)
            machine(12, e.locked ? C.notes : col)
            ctx.textAlign = 'right'
            ctx.fillText(
              e.locked ? 'LOCKED' : e.run ? '[ RUN ]' : '[ OPEN ]',
              WIDTH - PAD - 9,
              y + 18,
            )
            ctx.textAlign = 'left'
            y += 30
            if (e.locked) {
              machine(12, C.notes)
              ctx.fillText('// ' + e.locked, PAD + 66, y + 9)
              y += 21
            }
          }
          y += 18
        }
        machine(12, C.notes)
        ctx.fillText(
          'CART // HANDLED BY SHOPIFY AT CHECKOUT (LATER)',
          PAD,
          y + 9,
        )
        y += 24
        return y
      }

      // ---- a page ----
      function drawPage(y0, P) {
        const inner = WIDTH - PAD * 2
        let y = y0
        if (P.human) {
          human('300 42px', C.bone)
          ctx.fillText(P.title, PAD, y + 39)
          y += 66
        } else {
          machine(27, C.bone, 3)
          ctx.fillText(P.title, PAD, y + 27)
          y += 51
        }
        for (const b of P.blocks) {
          if (b.note) {
            machine(12, C.notes)
            wrap(b.note, inner).forEach((ln) => {
              ctx.fillText(ln, PAD, y + 12)
              y += 18
            })
            y += 12
          } else if (b.h) {
            y += 6
            machine(15, C.talk)
            ctx.fillText(b.h, PAD, y + 15)
            y += 24
            rule(y)
            y += 15
          } else if (b.p) {
            machine(15, C.talk, 1.5)
            wrap(b.p, inner).forEach((ln) => {
              ctx.fillText(ln, PAD, y + 15)
              y += 24
            })
            y += 12
          } else if (b.s) {
            human('italic 21px', C.darkBone)
            wrap(b.s, inner).forEach((ln) => {
              ctx.fillText(ln, PAD, y + 21)
              y += 33
            })
            y += 15
          } else if (b.kv) {
            const lw = 180
            for (const [label, value] of b.kv) {
              machine(12, C.notes)
              ctx.fillText(label, PAD, y + 15)
              machine(15, C.talk, 1.5)
              const lines = wrap(value, inner - lw)
              lines.forEach((ln, i) =>
                ctx.fillText(ln, PAD + lw, y + 15 + i * 24),
              )
              y += 24 * lines.length + 9
            }
            y += 6
          } else if (b.qa) {
            for (const [q, a] of b.qa) {
              machine(15, C.bone)
              wrap('> ' + q, inner).forEach((ln) => {
                ctx.fillText(ln, PAD, y + 15)
                y += 24
              })
              machine(15, C.talk, 1.5)
              wrap(a, inner - 30).forEach((ln) => {
                ctx.fillText(ln, PAD + 30, y + 15)
                y += 24
              })
              y += 15
            }
          } else if (b.table) {
            const cw = inner / b.table[0].length
            b.table.forEach((row, r) => {
              row.forEach((cell, c) => {
                machine(r ? 15 : 12, r ? C.talk : C.notes, r ? 1.5 : null)
                ctx.fillText(cell, PAD + c * cw, y + 15)
              })
              y += 27
              if (!r) {
                rule(y - 6)
              }
            })
            y += 12
          }
        }
        return y + 12
      }

      function find(n) {
        // a directory entry by its number
        for (const f of window.ZL_SITE.root.folders)
          for (const e of f.files) if (e.n === n) return e
        return null
      }

      function redraw() {
        dirty = false
        hits = []
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.clearRect(0, 0, WIDTH, HEIGHT)
        if (!window.ZL_SITE) {
          texture.needsUpdate = true
          return
        }
        ctx.setTransform(scale, 0, 0, scale, 0, 0)
        const R = window.ZL_SITE.root,
          P = cur === 'root' ? null : window.ZL_SITE.pages[cur]
        // a faint frame: the window the machine prints into
        ctx.fillStyle = 'rgba(12, 12, 12, 0.55)'
        ctx.fillRect(0, 0, WIDTH, view)
        ctx.strokeStyle = C.notes
        ctx.lineWidth = 1
        ctx.strokeRect(0.5, 0.5, WIDTH - 1, view - 1)
        // what scrolls: drawn shifted, clipped under the header (the hits it makes are where they are drawn)
        ctx.save()
        ctx.beginPath()
        ctx.rect(0, HEAD, WIDTH, view - HEAD - 1)
        ctx.clip()
        const top = HEAD + 18 - scroll
        const end = P ? drawPage(top, P) : drawRoot(top)
        ctx.restore()
        hits = hits.filter((h) => h.y + h.h > HEAD && h.y < view) // (rows scrolled out of sight can't be clicked)
        contentH = end + scroll - HEAD
        // the fixed header
        machine(18, C.bone)
        ctx.fillText(P ? cur.toUpperCase() : R.title, PAD, 33)
        machine(12, C.notes)
        ctx.fillText(P ? P.file : R.status, PAD, 57)
        if (P) {
          const on = hot('back', WIDTH - PAD - 150, 15, 150, 27)
          machine(12, on ? C.bone : C.talk)
          ctx.textAlign = 'right'
          ctx.fillText('[ < ROOT ]', WIDTH - PAD - 9, 33)
          ctx.textAlign = 'left'
        } else {
          machine(12, C.notes)
          ctx.textAlign = 'right'
          ctx.fillText('[ ESC // DISCONNECT ]', WIDTH - PAD, 33)
          ctx.textAlign = 'left'
        }
        rule(HEAD - 6)
        // where you are, if it scrolls
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

      return {
        texture,
        width: WIDTH,
        height: HEIGHT,
        get used() {
          return view
        },
        get atRoot() {
          return cur === 'root'
        },
        open: function (id) {
          cur =
            id === 'root' || (window.ZL_SITE && window.ZL_SITE.pages[id])
              ? id
              : 'root'
          scroll = 0
          hover = null
          dirty = true
          return !!window.ZL_SITE
        },
        // js/room.js: the scale it is laid at (drawn at that size, never stretched) and how tall it may be (px, unscaled)
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
        // What a click asks for (js/room.js does it, with a glitch): { page: id } | { run: 'collection' } | null
        press: function (id) {
          if (id === 'back') return { page: 'root' }
          if (id && id.startsWith('file:')) {
            const e = find(id.slice(5))
            if (e && e.run) return { run: e.run }
            if (e && e.page) return { page: e.page }
          }
          return null
        },
      }
    },
  }
})()
