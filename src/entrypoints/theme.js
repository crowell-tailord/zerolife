/**
 * ZERØLIFE Main Theme Entrypoint:
 * Exports the unified responsive 3D engine, initializes the RECOVERY QUEUE controller,
 * auto-binds 3D stages immediately on load, and attaches global objects to window.
 */
import '../styles/theme.css';
import { ResponsiveRoom3D } from '../engine/responsive-room-3d.js';
import { RecoveryQueueController } from '../engine/recovery-queue-controller.js';
import { ShopifyShopBridge } from '../engine/shopify-shop-bridge.js';

// Expose on window for template integration
window.ResponsiveRoom3D = ResponsiveRoom3D;
window.ShopifyShopBridge = ShopifyShopBridge;
window.RecoveryQueueController = RecoveryQueueController;

export { ResponsiveRoom3D, RecoveryQueueController, ShopifyShopBridge };

// Auto-bind 3D stages across Homepage, PDP, and Collection
export function autoInit3DStages() {
  // 1. Homepage 3D Showroom
  const homeStage = document.getElementById('home-3d-stage');
  const homeCanvas = document.getElementById('home-3d-canvas');
  if (homeStage && homeCanvas && !window.homeRoom) {
    window.homeRoom = new ResponsiveRoom3D(homeStage, homeCanvas, { activeModel: 'tee' });
    console.log('[ZERØLIFE] Homepage 3D Showroom initialized successfully.');

    // Model switcher buttons
    const homeModelBtns = document.querySelectorAll('.home-model-btn');
    homeModelBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        homeModelBtns.forEach(b => b.classList.remove('picked'));
        btn.classList.add('picked');
        const model = btn.getAttribute('data-model');
        if (window.homeRoom) {
          window.homeRoom.loadModel(model);
        }
      });
    });
  }

  // 2. Product Detail Page (PDP) 3D Inspector
  const subjectStage = document.getElementById('subject-stage');
  const subjectCanvas = document.getElementById('subject-canvas');
  if (subjectStage && subjectCanvas && !window.zlRoom) {
    const initialModel = subjectStage.getAttribute('data-initial-model') || 'tee';
    window.zlRoom = new ResponsiveRoom3D(subjectStage, subjectCanvas, { activeModel: initialModel });
    console.log('[ZERØLIFE] PDP 3D Inspector initialized successfully.');

    const pickBtns = document.querySelectorAll('.model-pick-btn');
    pickBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        pickBtns.forEach(b => b.classList.remove('picked'));
        btn.classList.add('picked');
        const model = btn.getAttribute('data-model');
        if (window.zlRoom) {
          window.zlRoom.loadModel(model);
        }
      });
    });
  }
}

// Initialize on DOM load and immediately if already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.zlQueueController = new RecoveryQueueController();
    autoInit3DStages();
  });
} else {
  window.zlQueueController = new RecoveryQueueController();
  autoInit3DStages();
}

window.addEventListener('load', () => {
  autoInit3DStages();
});
