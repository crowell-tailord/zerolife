// Import global styles so Vite bundles and outputs them to assets/theme.css
import '../styles/theme.css';

console.log('Zerolife Theme initialized successfully.');

// Global e-commerce interactions (e.g., standard menus, basic cart triggers)
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');

  if (menuButton && drawer) {
    menuButton.addEventListener('click', () => {
      drawer.classList.toggle('hidden');
    });
  }
});
