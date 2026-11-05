/**
 * ZERØLIFE Shopify Shop Bridge:
 * Connects the in-engine RECOVERY QUEUE to Shopify's AJAX Cart API (/cart.js, /cart/add.js, /cart/update.js)
 * and secure Checkout, with offline localStorage fallback for local development.
 */

const STORE_KEY = 'zl-queue-2';
const FREE_SHIPPING_THRESHOLD = 150;
const MAX_QTY = 9;
const EXTRACT_STEPS = ['> PACKING {n}', '> SEVERING CONNECTION', '> HANDING OVER TO SHOPIFY'];

export const ShopifyShopBridge = {
  isShopifyEnvironment: typeof window !== 'undefined' && window.Shopify && window.Shopify.routes,

  // Load cart lines: fetches live cart from Shopify or falls back to localStorage
  load: async function () {
    try {
      if (this.isShopifyEnvironment) {
        const res = await fetch(`${window.Shopify.routes.root}cart.js`);
        if (res.ok) {
          const cart = await res.json();
          return cart.items.map(item => ({
            key: `${item.product_id}/${item.variant_title}`,
            id: item.properties?._model_key || item.handle,
            variantId: item.variant_id,
            size: item.variant_title,
            qty: item.quantity,
            img: item.featured_image?.url || null
          }));
        }
      }
      return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
    } catch (e) {
      console.warn('[ZERØLIFE] Using fallback local storage for cart:', e);
      try {
        return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
      } catch {
        return [];
      }
    }
  },

  // Save changes (updates quantities or deletes items)
  save: async function (lines) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(lines));
    } catch {}

    if (this.isShopifyEnvironment) {
      try {
        const updates = {};
        lines.forEach(line => {
          if (line.variantId) {
            updates[line.variantId] = line.qty;
          }
        });
        await fetch(`${window.Shopify.routes.root}cart/update.js`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ updates })
        });
      } catch (err) {
        console.error('[ZERØLIFE] Failed to update Shopify cart:', err);
      }
    }
  },

  // Add an item to the cart
  add: async function (modelKey, size, qty = 1, img = null) {
    const product = window.ZL_PRODUCTS && window.ZL_PRODUCTS[modelKey];
    if (!product) return;

    const variant = product.variants && product.variants[size];
    const variantId = variant?.id;

    if (this.isShopifyEnvironment && variantId && typeof variantId === 'number') {
      try {
        await fetch(`${window.Shopify.routes.root}cart/add.js`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: variantId,
            quantity: qty,
            properties: { _model_key: modelKey }
          })
        });
      } catch (err) {
        console.error('[ZERØLIFE] Failed to add item to Shopify cart:', err);
      }
    }

    // Local mirror
    const lines = await this.load();
    const key = `${modelKey}/${size}`;
    const existing = lines.find(x => x.key === key);
    if (existing) {
      existing.qty = Math.min(MAX_QTY, existing.qty + qty);
      if (img && !existing.img) existing.img = img;
    } else {
      lines.push({
        key,
        id: modelKey,
        variantId: variantId || null,
        size,
        qty: Math.min(MAX_QTY, qty),
        img: img || product.photo || null
      });
    }
    await this.save(lines);
    return lines;
  },

  // Checkout execution (Shopify /checkout handover)
  checkout: function (lines) {
    if (this.isShopifyEnvironment) {
      window.location.href = '/checkout';
      return true;
    }
    // In local dev without live store, simulate checkout redirection
    console.log('[ZERØLIFE] Handing over to Shopify checkout with lines:', lines);
    window.location.href = '/checkout';
    return true;
  }
};

// Helpers
const two = n => (n < 10 ? '0' : '') + n;
const money = n => '$ ' + Number(n).toFixed(2);
const product = id => window.ZL_PRODUCTS && window.ZL_PRODUCTS[id];
const priceOf = id => {
  const p = product(id);
  if (!p) return 0;
  if (p.price_numeric) return p.price_numeric;
  return parseFloat(String(p.price).replace(/[^0-9.]/g, '')) || 0;
};
const fileOf = p => {
  const m = /FILE ([A-Z0-9-]+)/.exec(p?.file || '');
  return m ? m[1] : 'ZL-000';
};
const subjectOf = p => String(p?.subject || 'SUBJECT').split(' // ')[0];

// Expose global queue data interface matching mock specifications
if (typeof window !== 'undefined') {
  window.ZL_QUEUE_DATA = {
    FREE_SHIPPING: FREE_SHIPPING_THRESHOLD,
    MAX_QTY,
    EXTRACT: EXTRACT_STEPS,
    load: () => {
      try {
        const raw = JSON.parse(localStorage.getItem(STORE_KEY)) || [];
        return raw.filter(l => product(l.id) && l.qty > 0);
      } catch {
        return [];
      }
    },
    save: lines => ShopifyShopBridge.save(lines),
    checkout: lines => ShopifyShopBridge.checkout(lines),
    product,
    priceOf,
    fileOf,
    subjectOf,
    money,
    two
  };
}
