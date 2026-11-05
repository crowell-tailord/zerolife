// The desktop's main menu after the enter video (Nov 1 2026, user: it "does not match the mobile site ... time to start
// making it match"). Hand-written. The phone's menu (js/mobile-menu.js), as page text over the room: a machine terminal
// that types itself out ("> SIGNAL ACQUIRED ... > SELECT A DIRECTORY"), then the directories glitch in one by one.
// SUBJECTS/ = the collection, ROOT/ = the file directory, ARCHIVE/ = locked. (The single walking tee's test entry was
// taken out Nov 4 2026.) A click types "> OPENING ..." and goes (window.ZL_ROOM.open, js/room.js). Typed the first
// time only; after that the lines are just there. Styles: css/desktop-overlays.css.
;(function () {
  'use strict'

  // ---- Settings ------------------------------------------------------------------------------
  const TYPE_MS = 18 // the terminal's typing: ms per letter
  const ROW_GAP_MS = 140 // the directories glitch in this far apart
  const GO_DELAY_MS = 260 // after "> OPENING ...", before it goes
  // ---------------------------------------------------------------------------------------------

  function el(tag, cls, text) {
    const e = document.createElement(tag)
    if (cls) e.className = cls
    if (text != null) e.textContent = text
    return e
  }

  const box = document.getElementById('models')
  if (!box) return
  const site = window.ZL_SITE
  const subjects = 2 // the collection's mannequins (js/room.js COLLECTION)
  const fileCount = site
    ? site.root.folders.reduce(function (s, f) {
        return s + f.files.length
      }, 0)
    : 0
  const choices = [
    {
      n: '01',
      name: 'SUBJECTS/',
      size: String(subjects).padStart(2, '0') + ' SUBJ',
      what: 'the collection. pick one to wake it.',
      model: 'collection',
    },
    {
      n: '02',
      name: 'ROOT/',
      size: String(fileCount).padStart(2, '0') + ' FILES',
      what: 'sizes, shipping, returns, contact. everything else.',
      model: 'root',
    },
    {
      n: '03',
      name: 'LIST/',
      size: '454'.padStart(4, '0') + ' ITMES',
      what: 'all the things',
      link: '/collections/all',
    },
    {
      n: '04',
      name: 'ARCHIVE/',
      size: 'LOCKED',
      what: 'past drops.',
      locked: 'NOTHING HAS BEEN LOST YET',
    },
    // (04 TEST/TEE, the tee on its own, removed Nov 4 2026 with its 18 MB file: the catwalk mannequin wears the same tee.
    // To bring it back: { n: '04', name: 'TEST/TEE', size: '01 SUBJ', what: 'the tee on its own. a test.', model: 'tee' }
    // here, and js/tee-clo-walk-glb.js back on index.html before js/room-tee.js.)
  ]

  box.textContent = ''
  const term = el('div', 'term')
  term.appendChild(el('p', 'cap dim term-head', 'ZERØLIFE://ARCHIVE-09.22'))
  const lines = el('div', 'term-lines')
  term.appendChild(lines)
  const dir = el('ul', 'dir')
  term.appendChild(dir)
  box.appendChild(term)
  const rows = choices.map(function (c) {
    const li = el('li')
    const b = el('button', 'dir-row' + (c.locked ? ' locked' : ''))
    b.type = 'button'
    if (c.model) b.dataset.model = c.model // (js/room.js hides the ones whose model isn't on the page)
    b.appendChild(el('span', 'n', c.n))
    b.appendChild(el('span', 'name', c.name))
    b.appendChild(el('span', 'size', c.size))
    b.appendChild(el('span', 'what', c.what))
    b.addEventListener('click', function () {
      pick(c, b)
    })
    li.appendChild(b)
    li.hidden = true
    dir.appendChild(li)
    return li
  })

  let typing = null,
    queue = [],
    timer = 0,
    busy = false
  function tick() {
    if (!typing) {
      const next = queue.shift()
      if (!next) {
        timer = 0
        return
      }
      if (next.fn) {
        next.fn()
        timer = setTimeout(tick, next.wait || 0)
        return
      }
      const p = el('p', 'term-line')
      lines.appendChild(p)
      lines.querySelectorAll('.cursor').forEach(function (c) {
        c.classList.remove('cursor')
      })
      p.classList.add('cursor')
      typing = { el: p, text: next.text, i: 0, done: next.done }
    }
    typing.i++
    typing.el.textContent = typing.text.slice(0, typing.i)
    if (typing.i >= typing.text.length) {
      const d = typing.done
      typing = null
      if (d) d()
    }
    timer = setTimeout(tick, TYPE_MS)
  }
  function type(text, done) {
    queue.push({ text: text, done: done })
    if (!timer) tick()
  }
  function after(wait, fn) {
    queue.push({ fn: fn, wait: wait })
    if (!timer) tick()
  }
  function line(text) {
    lines.querySelectorAll('.cursor').forEach(function (c) {
      c.classList.remove('cursor')
    })
    lines.appendChild(el('p', 'term-line cursor', text))
  }
  const boot = [
    '> SIGNAL ACQUIRED',
    '> ' +
      String(subjects).padStart(2, '0') +
      ' SUBJECTS RECOVERED // STATE: LONELY',
    '> SELECT A DIRECTORY',
  ]
  let booted = false
  function show() {
    clearTimeout(timer)
    timer = 0
    queue = []
    typing = null
    busy = false
    lines.textContent = ''
    rows.forEach(function (li) {
      li.hidden = true
      li.firstChild.classList.remove('picked', 'denied', 'glitch-in')
    })
    if (!booted) {
      booted = true
      boot.forEach(function (t) {
        type(t)
      })
    } else boot.forEach(line)
    rows.forEach(function (li, i) {
      after(i ? ROW_GAP_MS : 120, function () {
        const b = li.firstChild
        if (b.hidden) return // (its model isn't on the page)
        li.hidden = false
        b.classList.remove('glitch-in')
        void b.offsetWidth
        b.classList.add('glitch-in')
      })
    })
  }
  function pick(c, b) {
    if (busy) return
    if (c.locked) {
      b.classList.remove('denied')
      void b.offsetWidth
      b.classList.add('denied')
      type('> ACCESS DENIED // ' + c.locked)
      return
    }
    busy = true
    b.classList.add('picked')
    type('> OPENING ' + c.name, function () {
      if (c.link) window.location.href = c.link
      else {
        setTimeout(function () {
          if (window.ZL_ROOM && window.ZL_ROOM.open)
            window.ZL_ROOM.open(c.model)
        }, GO_DELAY_MS)
      }
    })
  }

  window.ZL_ROOM_MENU = { show: show }
})()
