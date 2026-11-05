/**
 * ZERØLIFE Responsive RECOVERY QUEUE Controller:
 * Handles the single, unified cart experience across desktop (manifest data table)
 * and mobile (terminal card list), synchronized with ShopifyShopBridge.
 */
import { ShopifyShopBridge } from './shopify-shop-bridge.js';

export class RecoveryQueueController {
  constructor() {
    this.queueModal = document.getElementById('recovery-queue');
    this.statusBar = document.getElementById('queue-bar');
    this.itemsTarget = document.getElementById('queue-items-target');
    this.receiptTarget = document.getElementById('queue-receipt-target');
    this.extractBtn = document.getElementById('queue-extract-btn');
    this.closeBtn = document.getElementById('queue-close');
    this.logElement = document.getElementById('queue-console-log');

    this.isOpen = false;
    this.isBusy = false;
    this.typeTimer = null;

    this.init();
  }

  async init() {
    if (!this.queueModal) return;

    // Listen for add-to-cart events
    window.addEventListener('zerolife:cart-add', async (e) => {
      const { modelKey, size, qty } = e.detail;
      await ShopifyShopBridge.add(modelKey, size, qty);
      this.updateBar(true);
      if (this.isOpen) this.render();
    });

    // Close button & ESC key
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    if (this.statusBar) {
      this.statusBar.addEventListener('click', () => this.open());
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });

    // Extract button
    if (this.extractBtn) {
      this.extractBtn.addEventListener('click', () => this.startExtraction());
    }

    // Initial load
    await this.updateBar(false);
  }

  async open() {
    this.isOpen = true;
    this.queueModal.classList.remove('hidden');
    document.documentElement.classList.add('zl-locked');
    await this.render();
  }

  close() {
    this.isOpen = false;
    this.queueModal.classList.add('hidden');
    document.documentElement.classList.remove('zl-locked');
    clearTimeout(this.typeTimer);
  }

  say(text, done) {
    if (!this.logElement) return;
    clearTimeout(this.typeTimer);
    let i = 0;
    const tick = () => {
      this.logElement.textContent = text.slice(0, ++i);
      if (i < text.length) {
        this.typeTimer = setTimeout(tick, 16);
      } else if (done) {
        this.typeTimer = setTimeout(done, 320);
      }
    };
    tick();
  }

  async updateBar(glitch = false) {
    if (!this.statusBar) return;
    const lines = await ShopifyShopBridge.load();
    const count = lines.reduce((sum, l) => sum + l.qty, 0);
    const total = lines.reduce((sum, l) => {
      const p = window.ZL_PRODUCTS && window.ZL_PRODUCTS[l.id];
      const price = p?.price_numeric || parseFloat(String(p?.price || '0').replace(/[^0-9.]/g, '')) || 0;
      return sum + price * l.qty;
    }, 0);

    if (count === 0) {
      this.statusBar.hidden = true;
      return;
    }

    this.statusBar.hidden = false;
    this.statusBar.innerHTML = `
      <span class="dot"></span>
      <span>QUEUE ${count < 10 ? '0' : ''}${count}</span>
      <span style="color: var(--ash)">// $ ${total.toFixed(2)}</span>
      <span style="color: var(--bone); margin-left: 4px;">OPEN ›</span>
    `;

    if (glitch) {
      this.statusBar.classList.remove('glitching');
      void this.statusBar.offsetWidth;
      this.statusBar.classList.add('glitching');
      setTimeout(() => this.statusBar.classList.remove('glitching'), 350);
    }
  }

  async render() {
    const lines = await ShopifyShopBridge.load();
    const count = lines.reduce((sum, l) => sum + l.qty, 0);

    if (lines.length === 0) {
      this.itemsTarget.innerHTML = `
        <div class="p-12 border border-[#2a2c2e] text-center space-y-4">
          <p class="font-human italic text-lg text-[#C6C1B6]">nothing recovered yet. they’re still waiting.</p>
          <button type="button" class="zl-btn" onclick="document.getElementById('queue-close').click()">
            [ BROWSE SUBJECTS ]
          </button>
        </div>
      `;
      this.receiptTarget.innerHTML = '';
      if (this.extractBtn) this.extractBtn.disabled = true;
      this.say('> QUEUE EMPTY');
      return;
    }

    if (this.extractBtn) this.extractBtn.disabled = false;
    this.say(`> ${count < 10 ? '0' : ''}${count} SUBJECTS HELD // READY`);

    // Render Items: Responsive (Cards on mobile, Table on desktop)
    let itemsHtml = `
      <!-- Desktop Widescreen Manifest Data Table (hidden on mobile) -->
      <div class="hidden lg:block border border-[#2a2c2e] overflow-hidden">
        <table class="w-full text-left font-mono text-xs text-[#E4DFD3]">
          <thead class="border-b border-[#2a2c2e] text-[#63676A] uppercase tracking-wider bg-black/40">
            <tr>
              <th class="p-3 w-12">#</th>
              <th class="p-3">SUBJECT</th>
              <th class="p-3">SIZE</th>
              <th class="p-3 text-center">QTY</th>
              <th class="p-3 text-right">VALUE</th>
              <th class="p-3 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#2a2c2e]">
    `;

    lines.forEach((line, idx) => {
      const p = window.ZL_PRODUCTS && window.ZL_PRODUCTS[line.id];
      const price = p?.price_numeric || parseFloat(String(p?.price || '0').replace(/[^0-9.]/g, '')) || 0;
      const val = price * line.qty;

      itemsHtml += `
        <tr class="hover:bg-white/[0.02]">
          <td class="p-3 text-[#8B9094]">${idx < 9 ? '0' : ''}${idx + 1}</td>
          <td class="p-3 flex items-center gap-3">
            ${line.img ? `<img src="${line.img}" class="w-8 h-8 object-cover border border-[#2a2c2e]" alt="">` : ''}
            <div>
              <div class="font-bold text-[#E4DFD3] uppercase">${p?.name || line.id}</div>
              <div class="text-[10px] text-[#63676A]">${p?.file || ''}</div>
            </div>
          </td>
          <td class="p-3 text-[#BFC3C6]">${line.size}</td>
          <td class="p-3 text-center">
            <span class="inline-flex items-center gap-2 border border-[#2a2c2e] px-2 py-1">
              <button type="button" class="text-[#8B9094] hover:text-[#E4DFD3]" data-act="dec" data-idx="${idx}">−</button>
              <span class="text-[#E4DFD3]">${line.qty}</span>
              <button type="button" class="text-[#8B9094] hover:text-[#E4DFD3]" data-act="inc" data-idx="${idx}">+</button>
            </span>
          </td>
          <td class="p-3 text-right text-[#E4DFD3]">$ ${val.toFixed(2)}</td>
          <td class="p-3 text-right">
            <button type="button" class="text-[#8B9094] hover:text-[#ff3b30] text-[11px] tracking-wider uppercase" data-act="rel" data-idx="${idx}">
              [ RELEASE ]
            </button>
          </td>
        </tr>
      `;
    });

    itemsHtml += `
          </tbody>
        </table>
      </div>

      <!-- Mobile Vertical Stack (hidden on desktop) -->
      <div class="lg:hidden space-y-3">
    `;

    lines.forEach((line, idx) => {
      const p = window.ZL_PRODUCTS && window.ZL_PRODUCTS[line.id];
      const price = p?.price_numeric || parseFloat(String(p?.price || '0').replace(/[^0-9.]/g, '')) || 0;
      const val = price * line.qty;

      itemsHtml += `
        <div class="border border-[#2a2c2e] p-4 flex gap-4 bg-black/40">
          ${line.img ? `<img src="${line.img}" class="w-16 h-20 object-cover border border-[#2a2c2e]" alt="">` : ''}
          <div class="flex-1 font-mono text-xs space-y-2">
            <div class="flex justify-between">
              <span class="text-[#E4DFD3] uppercase font-bold">${p?.name || line.id}</span>
              <span class="text-[#E4DFD3]">$ ${val.toFixed(2)}</span>
            </div>
            <div class="text-[#63676A]">SIZE ${line.size} // ${p?.file || ''}</div>
            <div class="flex justify-between items-center pt-2">
              <div class="flex items-center gap-2 border border-[#2a2c2e] px-2 py-1">
                <button type="button" class="px-1 text-[#8B9094]" data-act="dec" data-idx="${idx}">−</button>
                <span class="text-[#E4DFD3]">${line.qty}</span>
                <button type="button" class="px-1 text-[#8B9094]" data-act="inc" data-idx="${idx}">+</button>
              </div>
              <button type="button" class="text-[#8B9094] hover:text-[#ff3b30]" data-act="rel" data-idx="${idx}">
                RELEASE
              </button>
            </div>
          </div>
        </div>
      `;
    });

    itemsHtml += `</div>`;
    this.itemsTarget.innerHTML = itemsHtml;

    // Bind item action buttons (dec, inc, rel)
    this.itemsTarget.querySelectorAll('[data-act]').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const act = e.currentTarget.getAttribute('data-act');
        const idx = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
        const curLines = await ShopifyShopBridge.load();
        if (!curLines[idx]) return;

        if (act === 'dec') {
          curLines[idx].qty = Math.max(1, curLines[idx].qty - 1);
        } else if (act === 'inc') {
          curLines[idx].qty = Math.min(9, curLines[idx].qty + 1);
        } else if (act === 'rel') {
          curLines.splice(idx, 1);
        }

        await ShopifyShopBridge.save(curLines);
        await this.updateBar(true);
        await this.render();
      });
    });

    // Render Receipt (Dotted Leaders)
    const total = lines.reduce((sum, l) => {
      const p = window.ZL_PRODUCTS && window.ZL_PRODUCTS[l.id];
      const price = p?.price_numeric || parseFloat(String(p?.price || '0').replace(/[^0-9.]/g, '')) || 0;
      return sum + price * l.qty;
    }, 0);

    const freeShippingThreshold = 150;
    const leftForFree = freeShippingThreshold - total;

    this.receiptTarget.innerHTML = `
      <div class="space-y-3 font-mono text-xs">
        <div class="flex justify-between border-b border-[#2a2c2e] pb-2">
          <span class="text-[#8B9094]">SUBTOTAL</span>
          <span class="text-[#E4DFD3] font-bold">$ ${total.toFixed(2)}</span>
        </div>
        <div class="flex justify-between border-b border-[#2a2c2e] pb-2">
          <span class="text-[#8B9094]">SHIPPING</span>
          <span class="text-[#E4DFD3]">${leftForFree <= 0 ? 'FREE' : 'AT CHECKOUT'}</span>
        </div>
        ${leftForFree > 0 ? `
          <div class="flex justify-between text-[11px] text-[#C6C1B6]">
            <span>FREE SHIPPING METER</span>
            <span>$ ${leftForFree.toFixed(2)} AWAY</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  startExtraction() {
    if (this.isBusy) return;
    this.isBusy = true;
    if (this.extractBtn) this.extractBtn.classList.add('picked');

    const steps = [
      '> PACKING RECOVERED SUBJECTS',
      '> SEVERING CONNECTION',
      '> HANDING OVER TO SHOPIFY'
    ];

    let i = 0;
    const runStep = () => {
      if (i < steps.length) {
        this.say(steps[i], () => {
          i++;
          runStep();
        });
      } else {
        ShopifyShopBridge.checkout();
      }
    };
    runStep();
  }
}
