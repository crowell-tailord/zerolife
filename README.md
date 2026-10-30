# Zerolife Shopify Theme

A state-of-the-art custom Shopify storefront built on Online Store 2.0. This project combines a native Shopify Liquid structure with a fast, modern **Vite & Tailwind CSS v4** build system to selectively inject high-fidelity, game-like **React 19 & Three.js** interactive components without bloated global page weights.

---

## ⚡ Tech Stack

- **Build System:** Vite v6+ (running in Watch mode to compile source assets natively)
- **Frameworks:** React v19 + standard Shopify Liquid
- **Styling:** Tailwind CSS v4 (configured via native CSS variables)
- **Animation & 3D:** Three.js + Framer Motion
- **Formatting Standards:** Prettier + EditorConfig

---

## 📁 Key Directories

```text
zerolife/
├── src/
│   ├── entrypoints/
│   │   ├── theme.js             # Core theme script & Tailwind import (loads on all pages)
│   │   └── landing-game.jsx     # High-fidelity React Island entry point (selective load)
│   ├── components/
│   │   └── GameApp.jsx          # Three.js & Framer Motion modular React code
│   └── styles/
│       └── theme.css            # Tailwind v4 directives and theme tokens
├── assets/                      # Production-readycompiled assets from Vite
├── layout/                      # Base theme.liquid layout shell
├── sections/                    # Reusable, customizable Shopify sections
├── templates/                   # Shopify page templates (JSON/Liquid)
└── config/                      # theme customizer metadata (settings_schema.json)
```

---

## 🛠️ Local Development Instructions

### Pre-requisites

Ensure you have the following installed on your machine:

1.  **Node.js** (v18 or higher)
2.  **Shopify CLI** (installed automatically via devDependencies, or global)
3.  **A Shopify Partner Account** with access to a development store

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Run Locally

To work on the theme locally with Hot Module Replacement (HMR) and real-time syncing to your Shopify development store, you must run two commands in parallel (e.g., using two terminal tabs):

#### Terminal Tab 1: Start the Vite Watcher

This monitors your `src/` directory and compiles your JavaScript, React code, and Tailwind CSS styles instantly into the `assets/` directory on save.

```bash
npm run dev
```

#### Terminal Tab 2: Start Shopify CLI Theme Server

This authenticates with your store, boots up a local web server (typically at `http://127.0.0.1:9292`), and syncs all folder assets and theme templates instantly to your development store.

```bash
npm run shopify:dev
```

---

## 🚀 Deployment Instructions

When you are ready to publish your changes or stage them to a live Shopify Theme environment, use our automated build and push script:

### Single Command Deployment

```bash
npm run deploy
```

### What this does behind the scenes:

1.  **Compiles Production Assets:** Runs `vite build` which minifies, tree-shakes, and bundles all React/Three.js assets into high-performance production files in `assets/`.
2.  **Uploads to Shopify:** Connects via the Shopify CLI (`shopify theme push`) and uploads the complete local directory structure to your selected development or production theme slot.

---

## 📐 Formatting & Quality Standards

To maintain clean and cohesive code, we enforce the following guidelines:

- **Formatting:** Enforced via `Prettier` (semi-colons, single quotes, 2-space tab indentations).
- **Mobile-First Responsive Rules:** Ensure all UI containers start as single-column stacks and adapt progressively to wide viewports using Tailwind breakpoint classes (`md:`, `lg:`).
- **Resource Throttling:** Limit 3D canvas rendering loops to standard screen DPI scaling and handle canvas unmounting memory cleanups correctly to prevent performance lag on mobile.

## Notes on Shopify CLI

### Connect

```
shopify theme dev --store={store-url}
```

### Pull theme

```
shopify theme pull --theme <theme name>
```

### Push theme

```
shopify theme push --theme 139963400329
```

### Test a specific theme file

```
use param ?view=<suffix> like so:
/collections/soundpacks/products/l-a-grit?view=lock-load
or
?view= by itself triggers default product.json
```
