// The phone page's menu and ROOT directory (mobile.html; Oct 25 2026, user: "some sort of menu for after the intro
// animation ... add the root button there too. Be creative"). Hand-written. Page text only (readable), laid over the
// effects canvas, which keeps showing the static behind it. js/mobile.js decides when each shows (go / show).
//
// MENU: a machine terminal that types itself out ("> SIGNAL ACQUIRED ... > SELECT A DIRECTORY"), then the choices
// glitch in, one by one, as directories: SUBJECTS/ (the wardrobe), ROOT/ (every other page), ARCHIVE/ (locked).
// Each has a plain line in the HUMAN register (serif) saying what it is. A tap types "> OPENING ..." and goes;
// the locked one types why not. Shown again later (the MENU button), it doesn't type: the lines are just there.
// ROOT: the machine's file directory from js/site-pages.js (the same words as the desktop's [ 03 // ROOT ]), as a list
// of folders and files; a file opens its page in the same place, "‹ ROOT" goes back.
// hit(on): the effects' own glitch hits (js/mobile.js) jolt the headings with a red / cyan split, in step.
(function () {
'use strict';

// ---- Settings ------------------------------------------------------------------------------
const TYPE_MS = 18;        // the terminal's typing: ms per letter
const ROW_GAP_MS = 140;    // the directories glitch in this far apart
const GO_DELAY_MS = 260;   // after "> OPENING ...", before it goes
const SENTENCE_CASE = true;   // an open ROOT file's body text in sentence case (false = all capitals, as written)
// ---------------------------------------------------------------------------------------------

const two = function (n) { return (n < 10 ? '0' : '') + n; };
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

window.ZL_PHONE_MENU = {
  // o.count: how many subjects; o.go(where): 'subjects' | 'root' | 'menu' (js/mobile.js switches, with a hard hit);
  // o.kick(): a hard hit only (a page opening inside ROOT).
  create: function (o) {
    const menu = document.getElementById('menu'), root = document.getElementById('root');
    const site = window.ZL_SITE;

    // ---- MENU ----
    const term = el('div', 'term');
    term.appendChild(el('p', 'cap dim term-head', 'ZERØLIFE://ARCHIVE-09.22'));
    const lines = el('div', 'term-lines');
    term.appendChild(lines);
    const dir = el('ul', 'dir');
    term.appendChild(dir);
    menu.appendChild(term);
    const fileCount = site ? site.root.folders.reduce(function (s, f) { return s + f.files.length; }, 0) : 0;
    const choices = [
      { n: '01', name: 'SUBJECTS/', size: two(o.count) + ' SUBJ', what: 'the collection. swipe through what they wore.', go: 'subjects' },
      { n: '02', name: 'ROOT/', size: two(fileCount) + ' FILES', what: 'sizes, shipping, returns, contact. everything else.', go: site ? 'root' : null },
      { n: '03', name: 'ARCHIVE/', size: 'LOCKED', what: 'past drops.', locked: 'NOTHING HAS BEEN LOST YET' }
    ];
    const rows = choices.map(function (c) {
      const li = el('li');
      const b = el('button', 'dir-row' + (c.locked || !c.go ? ' locked' : ''));
      b.type = 'button';
      b.appendChild(el('span', 'n', c.n));
      b.appendChild(el('span', 'name', c.name));
      b.appendChild(el('span', 'size', c.size));
      b.appendChild(el('span', 'what', c.what));
      b.addEventListener('click', function () { pick(c, b); });
      li.appendChild(b);
      li.hidden = true;
      dir.appendChild(li);
      return li;
    });

    let typing = null;   // the line being typed: { el, text, i, done }
    let queue = [];
    let timer = 0;
    let busy = false;    // going somewhere: no more taps
    function tick() {
      if (!typing) {
        const next = queue.shift();
        if (!next) { timer = 0; return; }
        if (next.fn) { next.fn(); timer = setTimeout(tick, next.wait || 0); return; }
        const p = el('p', 'term-line');
        lines.appendChild(p);
        lines.querySelectorAll('.cursor').forEach(function (c) { c.classList.remove('cursor'); });
        p.classList.add('cursor');
        typing = { el: p, text: next.text, i: 0, done: next.done };
      }
      typing.i++;
      typing.el.textContent = typing.text.slice(0, typing.i);
      if (typing.i >= typing.text.length) { const d = typing.done; typing = null; if (d) d(); }
      timer = setTimeout(tick, TYPE_MS);
    }
    function type(text, done) { queue.push({ text: text, done: done }); if (!timer) tick(); }
    function after(wait, fn) { queue.push({ fn: fn, wait: wait }); if (!timer) tick(); }
    function line(text) {   // no typing: just there
      lines.querySelectorAll('.cursor').forEach(function (c) { c.classList.remove('cursor'); });
      const p = el('p', 'term-line cursor', text);
      lines.appendChild(p);
    }
    function rowsIn() {
      rows.forEach(function (li, i) {
        after(i ? ROW_GAP_MS : 120, function () {
          li.hidden = false;
          const b = li.firstChild;
          b.classList.remove('glitch-in'); void b.offsetWidth; b.classList.add('glitch-in');
        });
      });
    }
    const boot = ['> SIGNAL ACQUIRED', '> ' + two(o.count) + ' SUBJECTS RECOVERED // STATE: LONELY', '> SELECT A DIRECTORY'];
    let booted = false;
    function showMenu() {
      clearTimeout(timer); timer = 0; queue = []; typing = null; busy = false;
      lines.textContent = '';
      rows.forEach(function (li) { li.hidden = true; li.firstChild.classList.remove('picked', 'denied'); });
      if (!booted) { booted = true; boot.forEach(function (t) { type(t); }); }
      else boot.forEach(line);
      rowsIn();
    }
    function pick(c, b) {
      if (busy) return;
      if (c.locked || !c.go) {
        b.classList.remove('denied'); void b.offsetWidth; b.classList.add('denied');
        type('> ACCESS DENIED // ' + (c.locked || 'NOT AVAILABLE'));
        return;
      }
      busy = true;
      b.classList.add('picked');
      type('> OPENING ' + c.name, function () { setTimeout(function () { o.go(c.go); }, GO_DELAY_MS); });
    }

    // ---- ROOT ----
    const inner = el('div', 'root-inner');
    root.appendChild(inner);
    function bar(backText, back, title) {
      const b = el('div', 'root-bar');
      const btn = el('button', 'cap back', backText);
      btn.type = 'button';
      btn.addEventListener('click', back);
      b.appendChild(btn);
      b.appendChild(el('span', 'cap dim', title));
      return b;
    }
    function showDirectory() {
      inner.textContent = '';
      root.scrollTop = 0;
      inner.appendChild(bar('‹ MENU', function () { o.go('menu'); }, 'ROOT/'));
      const head = el('div', 'root-head');
      head.appendChild(el('h2', 'root-title', site.root.title));
      head.appendChild(el('p', 'cap dim', site.root.status));
      inner.appendChild(head);
      site.root.folders.forEach(function (f) {
        const sec = el('section', 'folder');
        // the folder's description beside its name, like the menu's (not inside the heading: its glow went on twice)
        const h = el('div', 'folder-head');
        h.appendChild(el('h3', 'cap folder-name', f.name));
        h.appendChild(el('span', 'what', f.what));
        sec.appendChild(h);
        const ul = el('ul', 'files');
        f.files.forEach(function (file) {
          const li = el('li');
          const b = el('button', 'file-row' + (file.locked ? ' locked' : ''));
          b.type = 'button';
          b.appendChild(el('span', 'n', file.n));
          b.appendChild(el('span', 'file', file.file));
          b.appendChild(el('span', 'size', file.locked ? 'LOCKED' : file.size));
          b.appendChild(el('span', 'label', file.label));
          li.appendChild(b);
          let why = null;
          b.addEventListener('click', function () {
            if (file.locked) {
              if (!why) { why = el('p', 'cap why', '> ACCESS DENIED // ' + file.locked); li.appendChild(why); }
              b.classList.remove('denied'); void b.offsetWidth; b.classList.add('denied');
              return;
            }
            if (file.run === 'collection') { o.go('subjects'); return; }
            if (file.page && site.pages[file.page]) { o.kick(); showPage(file.page); }
          });
          ul.appendChild(li);
        });
        sec.appendChild(ul);
        inner.appendChild(sec);
      });
    }
    // ---- An open file, made to read on a phone (DRAFT, Oct 29 2026, user: keep the folder look, but an open file was
    // hard to digest). The file line split into its parts (integrity as a bar); sections numbered, a line between;
    // label / value pairs stacked; questions folded (tap to open); body text in sentence case, with [ TBC ] marks and
    // file names kept as they are (a file name opens that file); the previous / next file at the end.
    const openable = [];   // every file with a page, in directory order
    if (site) site.root.folders.forEach(function (f) {
      f.files.forEach(function (file) { if (file.page && site.pages[file.page]) openable.push({ folder: f.name, file: file }); });
    });
    function sentenceCase(t, st) {
      const low = t.toLowerCase();
      let out = '';
      for (let i = 0; i < low.length; i++) {
        let c = low[i];
        if (st.start && /[a-z0-9ø]/.test(c)) { c = c.toUpperCase(); st.start = false; }
        out += c;
        if (/[.!?]/.test(c) && (i + 1 === low.length || low[i + 1] === ' ') && !/\b(e\.g|i\.e)$/.test(low.slice(0, i))) st.start = true;
      }
      return out.replace(/\bshopify\b/g, 'Shopify').replace(/zerølife/g, 'ZERØLIFE');
    }
    const MARK = /(\[[^\]]*\]|\b[A-Z]+\/(?:[A-Z0-9_]+\.[A-Z]{3})?)/;   // [ TBC ] marks, FOLDER/FILE.EXT names
    function rich(into, text) {
      const st = { start: true };
      text.split(MARK).forEach(function (bit, i) {
        if (!bit) return;
        if (i % 2 === 0) { into.appendChild(document.createTextNode(SENTENCE_CASE ? sentenceCase(bit, st) : bit)); return; }
        st.start = false;
        if (bit[0] === '[') { into.appendChild(el('span', 'tbc', bit.replace(/\[\s*(.*?)\s*\]/, '[$1]'))); return; }
        const to = openable.find(function (e) { return e.folder + e.file.file === bit; });
        if (!to) { into.appendChild(el('span', 'ref', bit)); return; }
        const b = el('button', 'ref');
        b.type = 'button';
        b.appendChild(el('span', null, bit));
        b.addEventListener('click', function () { o.kick(); showPage(to.file.page); });
        into.appendChild(b);
      });
      return into;
    }
    function step(e, prev) {
      const b = el('button', 'pg-step' + (prev ? '' : ' next'));
      b.type = 'button';
      if (!e) { b.disabled = true; b.style.visibility = 'hidden'; return b; }
      b.appendChild(el('span', 'cap dim', prev ? '‹ PREV' : 'NEXT ›'));
      b.appendChild(el('span', 'cap', e.file.n + ' ' + e.file.file));
      b.appendChild(el('span', 'lbl', e.file.label));
      b.addEventListener('click', function () { o.kick(); showPage(e.file.page); });
      return b;
    }
    function showPage(id) {
      const p = site.pages[id];
      const at = openable.findIndex(function (e) { return e.file.page === id; });
      inner.textContent = '';
      root.scrollTop = 0;
      inner.appendChild(bar('‹ ROOT', function () { o.kick(); showDirectory(); }, 'ROOT/' + (at >= 0 ? openable[at].folder : '')));
      // 'FILE 06 // SHIPPING.TXT // INTEGRITY 88%': the number and name above the title, its states below
      const parts = p.file.split(' // ');
      const head = el('div', 'root-head pg-head');
      head.appendChild(el('p', 'cap dim', parts.slice(0, 2).join('  ·  ')));
      head.appendChild(el('h2', p.human ? 'pg-title human' : 'pg-title', p.title));
      const states = el('div', 'pg-states');
      parts.slice(2).forEach(function (s) {
        const m = /^INTEGRITY (\d+)%$/.exec(s);
        if (!m) { states.appendChild(el('span', 'cap dim', s)); return; }
        const d = el('div', 'integrity');
        d.appendChild(el('span', 'cap dim', 'INTEGRITY'));
        const meter = el('i', 'meter'), fill = el('b');
        fill.style.width = m[1] + '%';
        meter.appendChild(fill);
        d.appendChild(meter);
        d.appendChild(el('span', 'cap', m[1] + '%'));
        states.appendChild(d);
      });
      if (states.firstChild) head.appendChild(states);
      inner.appendChild(head);

      const body = el('div', 'pg');
      let sec = el('section', 'pg-sec'), secN = 0;
      body.appendChild(sec);
      p.blocks.forEach(function (b) {
        if (b.h) {
          sec = el('section', 'pg-sec headed');
          body.appendChild(sec);
          const h = el('h3', 'cap pg-h');
          h.appendChild(el('span', 'dim', two(++secN)));
          h.appendChild(el('span', null, b.h));
          sec.appendChild(h);
        } else if (b.p && b.p.split(' // ').length >= 3) {   // a list written on one line
          const ul = el('ul', 'pg-list');
          b.p.split(' // ').forEach(function (t) { const li = el('li'); li.appendChild(el('span', null, t)); ul.appendChild(li); });
          sec.appendChild(ul);
        } else if (b.p) sec.appendChild(rich(el('p', 'pg-p'), b.p));
        else if (b.s) sec.appendChild(el('p', 'pg-s', b.s));
        else if (b.note && b.note[0] === '[') {   // a note to whoever fills the site in, set apart
          const d = el('div', 'pg-admin');
          d.appendChild(el('p', 'cap', 'SYS NOTE // ' + b.note.replace(/^\[\s*|\s*\]$/g, '')));
          sec.appendChild(d);
        } else if (b.note) sec.appendChild(el('p', 'cap dim pg-lore', b.note));
        else if (b.kv) {
          const dl = el('dl', 'pg-kv');
          b.kv.forEach(function (r) {
            const d = el('div', 'kv');
            d.appendChild(el('dt', 'cap', r[0]));
            d.appendChild(rich(el('dd'), r[1]));
            dl.appendChild(d);
          });
          sec.appendChild(dl);
        } else if (b.qa) {
          const faq = el('div', 'pg-faq');
          b.qa.forEach(function (r) {
            const d = el('details', 'qa'), s = el('summary');
            s.appendChild(rich(el('span', 'q'), r[0]));
            s.appendChild(el('span', 'plus'));
            d.appendChild(s);
            d.appendChild(rich(el('p', 'a'), r[1]));
            faq.appendChild(d);
          });
          sec.appendChild(faq);
        } else if (b.table) {
          // a unit every value shares ('-- CM') moves up into its column's heading
          const rows = b.table.map(function (r) { return r.slice(); });
          rows[0].forEach(function (_, j) {
            const unit = / ([A-Z]+)$/.exec(rows[1] ? rows[1][j] : '');
            if (!j || !unit || !rows.slice(1).every(function (r) { return r[j].endsWith(' ' + unit[1]); })) return;
            rows.forEach(function (r, i) { r[j] = i ? r[j].slice(0, -unit[0].length) : r[j] + ' (' + unit[1] + ')'; });
          });
          const wrap = el('div', 'pg-table'), t = el('table');
          rows.forEach(function (r, i) {
            const tr = el('tr');
            r.forEach(function (c) { tr.appendChild(el(i ? 'td' : 'th', null, c)); });
            t.appendChild(tr);
          });
          wrap.appendChild(t);
          sec.appendChild(wrap);
        }
      });
      if (!body.firstChild.firstChild) body.removeChild(body.firstChild);
      inner.appendChild(body);

      inner.appendChild(el('p', 'cap dim eof', 'END OF FILE'));
      const nav = el('div', 'pg-nav');
      nav.appendChild(step(openable[at - 1], true));
      nav.appendChild(step(openable[at + 1], false));
      inner.appendChild(nav);
    }

    let hitOn = false;
    return {
      // where: 'menu' | 'root' | anything else (both hidden)
      show: function (where) {
        menu.hidden = where !== 'menu';
        root.hidden = where !== 'root';
        if (where === 'menu') showMenu();
        else { clearTimeout(timer); timer = 0; queue = []; typing = null; }
        if (where === 'root' && site) showDirectory();
      },
      hit: function (on) {
        if (on === hitOn) return;
        hitOn = on;
        menu.classList.toggle('hit', on);
        root.classList.toggle('hit', on);
      }
    };
  }
};
})();
