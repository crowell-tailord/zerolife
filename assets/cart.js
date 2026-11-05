// The phone page's cart: the RECOVERY QUEUE (DRAFT, Oct 31 2026, user: "design a cool cart section that's unique").
// ZERØLIFE doesn't sell outfits, it recovers them (ROOT/MEMORY/LOG_000.TXT): the cart is the queue of subjects picked
// to be pulled out of the machine, and checkout is their extraction. Hand-written; page text over the static, like ROOT.
// - ADD TO CART (js/mobile.js) queues the garment in the picked size. A status line at the bottom of the screen
//   ("QUEUE 02 // $ 110.00 ... OPEN") glitches in and stays while anything is queued; it opens the queue.
// - The queue (full screen): each garment (its name, price, size and file; QTY - 01 +; RELEASE, which tears it out),
//   then the total as a receipt (dotted leaders, all the same length; on FREE SHIPPING the dots fill up as the total
//   nears it), and BEGIN EXTRACTION, which types its steps and then hands over to Shopify's own checkout.
//   Tightened Oct 31 2026 (user: "the machine has too many variations ... much tighter in terms of cohesion"): one
//   machine text size, labels grey and values bone, one left and one right edge; the barcodes are gone.
// - Empty: "nothing recovered yet."
// SHOPIFY: everything that talks to the shop is in SHOP below, the one part to replace (Jesse). Until then the queue
// lives in this browser only, and checkout says it isn't connected.
(function () {
'use strict';

// ---- Settings ------------------------------------------------------------------------------
const FREE_SHIPPING = 150;   // PLACEHOLDER [ TBC ] (ROOT's SHIPPING.TXT: "OVER [ TBC ]"); null = no free-shipping bar
const MAX_QTY = 9;
const TYPE_MS = 16;          // the queue's terminal line: ms per letter
const STEP_MS = 320;         // extraction: the pause after each of its lines
const EXTRACT = ['> PACKING {n}', '> SEVERING CONNECTION', '> HANDING OVER TO SHOPIFY'];
// ---------------------------------------------------------------------------------------------

// ---- SHOP: the one place that talks to the store. Each line: { key, id (js/product-info.js), size, qty }.
// For Shopify: load / save become its cart (e.g. the theme's Ajax cart: /cart.js, /cart/add.js, /cart/change.js; or the
// Storefront API's cart), and checkout goes to its checkout (e.g. location.href = '/checkout', or the cart's
// checkoutUrl) and returns true. A Shopify variant id per size would go in js/product-info.js.
const STORE_KEY = 'zl-queue-2';   // (a new name = every browser's old test queue forgotten; -2: Oct 31 2026, the ones from before thumbnails)
const SHOP = {
  load: function () { try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch (e) { return []; } },
  save: function (lines) { try { localStorage.setItem(STORE_KEY, JSON.stringify(lines)); } catch (e) { /* (private window) */ } },
  checkout: function (lines) { return false; }   // not connected yet
};

const two = function (n) { return (n < 10 ? '0' : '') + n; };
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}
function money(n) { return '$ ' + n.toFixed(2); }
function product(id) { return window.ZL_PRODUCTS && window.ZL_PRODUCTS[id]; }
function priceOf(id) { const p = product(id); return p ? parseFloat(String(p.price).replace(/[^0-9.]/g, '')) || 0 : 0; }
function fileOf(p) { const m = /FILE ([A-Z0-9-]+)/.exec(p.file || ''); return m ? m[1] : 'ZL-000'; }
function subjectOf(p) { return String(p.subject || 'SUBJECT').split(' // ')[0]; }

// The queue itself, for the desktop's own queue page (js/room-queue.js, Nov 1 2026): the same saved list and words as
// the phone's, so the two are one queue in the same browser. The phone's screen (create, below) keeps its own copy.
window.ZL_QUEUE_DATA = {
  FREE_SHIPPING: FREE_SHIPPING, MAX_QTY: MAX_QTY, EXTRACT: EXTRACT,
  load: function () { return SHOP.load().filter(function (l) { return product(l.id) && l.qty > 0; }); },
  save: SHOP.save, checkout: SHOP.checkout,
  product: product, priceOf: priceOf, fileOf: fileOf, subjectOf: subjectOf, money: money
};

window.ZL_CART = {
  // o.go(where): 'cart' | 'subjects' | 'menu' | 'root' (js/mobile.js switches, with a hard hit); o.kick(): a hard hit only.
  create: function (o) {
    const pane = document.getElementById('cart'), statusBar = document.getElementById('queue-bar');
    if (!pane || !statusBar) return null;
    let lines = SHOP.load().filter(function (l) { return product(l.id) && l.qty > 0; });
    let screen = null, from = 'subjects', busy = false;
    const inner = el('div', 'cart-inner');
    pane.appendChild(inner);
    const count = function () { return lines.reduce(function (s, l) { return s + l.qty; }, 0); };
    const total = function () { return lines.reduce(function (s, l) { return s + priceOf(l.id) * l.qty; }, 0); };
    const subjects = function (n) { return two(n) + ' SUBJECT' + (n === 1 ? '' : 'S'); };
    function store() { SHOP.save(lines); }

    // ---- the status line at the bottom ----
    function updateBar(glitch) {
      const n = count();
      statusBar.hidden = !n || !screen || screen === 'cart';
      document.documentElement.classList.toggle('zl-queue', !statusBar.hidden);
      statusBar.textContent = '';
      statusBar.appendChild(el('span', 'dot'));
      statusBar.appendChild(el('span', 'cap', 'QUEUE ' + two(n)));
      statusBar.appendChild(el('span', 'cap dim', '// ' + money(total())));
      statusBar.appendChild(el('span', 'cap go', 'OPEN ›'));
      if (glitch && !statusBar.hidden) { statusBar.classList.remove('glitch-in'); void statusBar.offsetWidth; statusBar.classList.add('glitch-in'); }
    }
    statusBar.addEventListener('click', function () { o.go('cart'); });

    // ---- the queue's own terminal line ----
    let log = null, typeTimer = 0;
    function say(text, done) {
      clearTimeout(typeTimer);
      let i = 0;
      (function tick() {
        if (!log) return;
        log.textContent = text.slice(0, ++i);
        if (i < text.length) typeTimer = setTimeout(tick, TYPE_MS);
        else if (done) typeTimer = setTimeout(done, STEP_MS);
      })();
    }

    function button(cls, text, fn) {
      const b = el('button', cls);
      b.type = 'button';
      b.appendChild(el('span', null, text));
      b.addEventListener('click', fn);
      return b;
    }

    function render(msg) {
      busy = false;
      inner.textContent = '';
      const n = count();
      const bar = el('div', 'root-bar');
      const back = el('button', 'cap back', '‹ BACK');
      back.type = 'button';
      back.addEventListener('click', function () { o.go(from); });
      bar.appendChild(back);
      bar.appendChild(el('span', 'cap dim', 'ZERØLIFE://QUEUE'));
      inner.appendChild(bar);
      // the title and one terminal line under it (the only status: it answers each action)
      const head = el('div', 'root-head');
      head.appendChild(el('h2', 'pg-title', 'RECOVERY QUEUE'));
      log = el('p', 'term-line cursor cart-log');
      head.appendChild(log);
      inner.appendChild(head);

      if (!lines.length) {
        const e = el('div', 'cart-empty');
        e.appendChild(el('p', 'pg-s', 'nothing recovered yet. they’re still waiting.'));
        e.appendChild(button('zl-btn', '[ BROWSE SUBJECTS ]', function () { o.go('subjects'); }));
        inner.appendChild(e);
        say(msg || '> QUEUE EMPTY');
        return;
      }

      const list = el('ul', 'cart-list');
      lines.forEach(function (l) {
        const p = product(l.id);
        const li = el('li', 'cart-item');
        // the thumbnail, beside the item's three lines: the product's own photo once there is one (p.photo, later from
        // Shopify), else the snapshot taken when it was added; neither = no thumbnail (no empty box)
        const pic = p.photo || l.img;
        if (pic) {
          li.classList.add('has-thumb');
          const im = el('img', 'ci-thumb');
          im.src = pic;
          im.alt = '';
          li.appendChild(im);
        }
        const top = el('div', 'ci-row');
        top.appendChild(el('span', 'ci-name', p.name));
        top.appendChild(el('span', 'cap val', money(priceOf(l.id) * l.qty)));
        li.appendChild(top);
        li.appendChild(el('p', 'cap dim', 'SIZE ' + l.size + ' // ' + fileOf(p) + ' // ' + subjectOf(p)));
        const ctl = el('div', 'ci-row');
        const qty = el('div', 'ci-qty');
        const minus = button('cap ci-act', '−', function () { setQty(l, l.qty - 1); });
        const plus = button('cap ci-act', '+', function () { setQty(l, l.qty + 1); });
        minus.setAttribute('aria-label', 'One less');
        plus.setAttribute('aria-label', 'One more');
        minus.disabled = l.qty <= 1;
        plus.disabled = l.qty >= MAX_QTY;
        qty.appendChild(el('span', 'cap dim', 'QTY'));
        qty.appendChild(minus);
        qty.appendChild(el('span', 'cap val', two(l.qty)));
        qty.appendChild(plus);
        ctl.appendChild(qty);
        ctl.appendChild(button('cap ci-act', 'RELEASE', function () {
          if (busy) return;
          busy = true;
          li.classList.add('releasing');
          setTimeout(function () {
            lines.splice(lines.indexOf(l), 1);
            store();
            o.kick();
            render('> ' + subjectOf(p) + ' RELEASED BACK INTO THE MACHINE');
            updateBar();
          }, 360);
        }));
        li.appendChild(ctl);
        list.appendChild(li);
      });
      inner.appendChild(list);

      // the receipt: one grid, so every row's dots start and end in the same place
      const rc = el('div', 'receipt');
      function row(a, b, fill) {
        rc.appendChild(el('span', 'cap dim', a));
        const lead = el('i', 'leader');
        if (fill != null) { const f = el('b'); f.style.width = fill + '%'; lead.appendChild(f); }
        rc.appendChild(lead);
        rc.appendChild(el('span', 'cap val', b));
      }
      // free shipping reached: SHIPPING simply says FREE, and the FREE SHIPPING line goes (user, Oct 31 2026)
      const left = FREE_SHIPPING ? FREE_SHIPPING - total() : 1;
      row('SUBTOTAL', money(total()));
      row('SHIPPING', left > 0 ? 'AT CHECKOUT' : 'FREE');
      row('TAXES', 'AT CHECKOUT');
      if (FREE_SHIPPING && left > 0) row('FREE SHIPPING', money(left) + ' AWAY', total() / FREE_SHIPPING * 100);
      inner.appendChild(rc);

      const go = button('zl-btn cart-go', '[ BEGIN EXTRACTION ]', function () {
        if (busy) return;
        busy = true;
        go.classList.add('picked');
        const steps = EXTRACT.map(function (s) { return s.replace('{n}', subjects(count())); });
        (function next(i) {
          if (i < steps.length) { if (i === steps.length - 1) o.kick(); say(steps[i], function () { next(i + 1); }); return; }
          if (SHOP.checkout(lines)) return;
          busy = false;
          go.classList.remove('picked');
          say('> EXTRACTION FAILED // CHECKOUT NOT CONNECTED YET');
        })(0);
      });
      go.appendChild(el('span', 'sub', 'secure checkout, handled by Shopify'));
      inner.appendChild(go);
      inner.appendChild(el('p', 'cap dim eof', 'END OF QUEUE'));
      say(msg || '> ' + subjects(n) + ' HELD // READY');
    }

    function setQty(l, q) {
      q = Math.max(1, Math.min(MAX_QTY, q));
      if (q === l.qty || busy) return;
      l.qty = q;
      store();
      render('> ' + fileOf(product(l.id)) + '-' + l.size + ' // QTY ' + two(q));
      updateBar();
    }

    return {
      // the garment on screen, in the picked size, one more in the queue
      // (img: a picture for its thumbnail, js/mobile.js's snapshot of the window; optional)
      // (n: how many, default 1; the desktop panel has a QTY)
      add: function (id, size, img, n) {
        if (!product(id)) return;
        n = Math.max(1, n || 1);
        const key = id + '/' + size;
        const l = lines.find(function (x) { return x.key === key; });
        if (l) { l.qty = Math.min(MAX_QTY, l.qty + n); if (img && !l.img) l.img = img; }
        else lines.push({ key: key, id: id, size: size, qty: Math.min(MAX_QTY, n), img: img || null });
        store();
        updateBar(true);
      },
      // the screen now showing (js/mobile.js): 'cart' shows the queue, the others the status line (if anything is queued)
      where: function (s) {
        if (s === 'cart' && screen && screen !== 'cart') from = screen;
        screen = s;
        pane.hidden = s !== 'cart';
        if (s === 'cart') { pane.scrollTop = 0; render(); }
        else { clearTimeout(typeTimer); log = null; }
        updateBar();
      },
      hit: function (on) { pane.classList.toggle('hit', on); },
      get count() { return count(); },          // how many are queued (the desktop panel shows it)
      get open() { return screen === 'cart'; }  // the queue on screen
    };
  }
};
})();
