import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: resolve(__dirname, 'assets'),
    emptyOutDir: false, // Do not wipe Shopify's native assets folder on rebuild
    watch: {
      exclude: ['assets/**'],
    },
    rollupOptions: {
      input: {
        theme: resolve(__dirname, 'src/entrypoints/theme.js'),
        'landing-game': resolve(__dirname, 'src/entrypoints/landing-game.jsx'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
