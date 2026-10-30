# Project Context: Zerolife Shopify Theme

> **Note to Agents:** Read this file before starting any task to understand the current state. Update your respective sections after completing a task.

## Active Scrying Pools
- **Global Session Focus:** theme-scaffolding
- **theme-scaffolding:** main - 3000 - @warrior, @knight

---

## 1. Strategy & Architecture (Owner: Warrior)
**Goal:** Build a state-of-the-art custom Shopify theme featuring high-fidelity, game-like React/Three.js interactive sections with a fast, modern Vite & Tailwind v4 build system, while preserving native Shopify App Store integration.

### Core Tech Stack
- **Build Tool:** Vite v6+ (Watch Mode compiling to Shopify's native `/assets` folder)
- **Framework:** React 19 (for islands of interactivity), Liquid (for standard templates)
- **Styling:** Tailwind CSS v4 (native CSS-based configuration)
- **Components:** shadcn/ui (Radix Primitives)
- **Animation & 3D:** Framer Motion & Three.js / React Three Fiber (for immersive homepage/landing elements)
- **E-Commerce Backend:** Shopify Storefront AJAX API / Cart API

---

### Baseline Formatting & Code Quality Standards
To ensure perfect code hygiene across all team contributions, we enforce the following baseline formatting configuration right from the start.

#### `.editorconfig`
Standardize end-of-lines, indentation size, and character sets.
```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

#### `.prettierrc`
Consistent formatting rules for JS, JSX, CSS, JSON, and Liquid files.
```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always"
}
```

#### `.prettierignore`
Exclude production assets, node modules, and config metadata from formatting.
```text
node_modules/
dist/
assets/
package.json
package-lock.json
```

---

### Mobile-First Responsive Strategy
Every custom React component and native Liquid template must prioritize mobile viewports, touch interactions, and limited performance environments:
1. **Single-Column by Default:** Grid and flex containers start in a single-column, scroll-friendly stack (e.g., `flex flex-col` or `grid grid-cols-1`).
2. **Desktop Adaptation:** Use tailwind's responsive breakpoints (`md:` for tablets, `lg:` for laptops, and `xl:` for high-res desktops) to introduce complexity (e.g., `md:grid-cols-2 lg:grid-cols-3`).
3. **Immersive WebGL / 3D Canvas Throttling:** Three.js and WebGL container elements must monitor device pixel ratios and throttle frame rates on mobile browsers (targeting mobile Safari / Chrome) to preserve battery life and prevent device overheating.
4. **Touch-First Interactions:** Interactive components must utilize at least `44px x 44px` tap targets and support swipe gestures.

---

### Architectural Battle Plan
The roadmap is split into logical increments to ensure complete stability:

#### Phase 1: Tooling Scaffolding (Pre-requisites)
- Initialize standard project metadata (`package.json`, `.editorconfig`, `.prettierrc`).
- Create Vite config `vite.config.js` targeting independent output compilations (`assets/theme.js` and `assets/landing-game.js`).
- Configure Tailwind CSS v4 in `src/styles/theme.css`.

#### Phase 2: Theme Scaffold (Native Liquid Layouts)
- Create baseline Shopify directories: `layout/`, `templates/`, `sections/`, `snippets/`, `config/`, `locales/`.
- Establish `layout/theme.liquid` injecting compiled assets.
- Configure `config/settings_schema.json` with base shop parameters.

#### Phase 3: React Islands & UI Primitives
- Integrate `react` and `react-dom`.
- Set up a standard shadcn/ui folder structure (`components/ui/`) for functional primitives.
- Create a template interactive homepage/landing section (`sections/landing-game-section.liquid`) hydrated by `src/entrypoints/landing-game.jsx`.

---

## 2. Design Guidelines (Owner: Black Mage)
**Theme:** Stark Dark-Mode Minimalist Grayscale (Swiss Grid / Wireframe Slate)
**Primary Colors:** `#000000` (Pitch Black Background), `#FFFFFF` (Stark White Text), `#A3A3A3` (Neutral Wireframe Gray Accent)

### Design Philosophy
- **Pure Grid Geometry:** Standardized `1px` crisp borders to outline containers, forms, and product cards.
- **Sharp Alignment:** Zero borders or corner curves (`rounded-none`).
- **Tactile Inputs:** Stark default selects, checkboxes, text fields, and list templates.
- **Bare Bones Framework:** Standardized templates (homepage, PLP, PDP, cart) clean of design opinion to enable quick iteration on future designs.

---

## 3. Implementation Log (Owner: Knight)
| Feature | Status | Files Created |
| :--- | :--- | :--- |
| Project Initialization Plan | Complete | `PROJECT_CONTEXT.md`, `.editorconfig`, `.prettierrc`, `.prettierignore`, `README.md` |
| Toolchain & Build Pipeline | Complete | `package.json`, `vite.config.js` |
| Core Theme Scaffolds | Complete | `layout/theme.liquid`, `sections/header.liquid`, `sections/footer.liquid`, `sections/header-group.json`, `sections/footer-group.json`, `config/settings_schema.json`, `locales/en.default.json` |
| React Island & Three.js Core | Complete | `src/styles/theme.css`, `src/entrypoints/theme.js`, `src/entrypoints/landing-game.jsx`, `src/components/GameApp.jsx`, `sections/landing-game-section.liquid` |
| Base Store Templates & Sections | Complete | `sections/main-product.liquid`, `templates/product.json`, `sections/main-collection.liquid`, `templates/collection.json`, `sections/main-cart.liquid`, `templates/cart.json`, `sections/main-page.liquid`, `templates/page.json`, `sections/main-search.liquid`, `templates/search.json`, `sections/main-404.liquid`, `templates/404.json`, `sections/main-blog.liquid`, `templates/blog.json`, `sections/main-article.liquid`, `templates/article.json`, `sections/main-list-collections.liquid`, `templates/list-collections.json`, `sections/featured-collection.liquid` |
| Homepage Content Reorganization | Complete | `sections/hero.liquid`, `templates/index.json` (updated), `templates/page.customizer.json` |


---

## 4. Health & Quality (Owner: White Mage)
- **Accessibility Check:** Pending (Targeting WCAG 2.1 AA guidelines)
- **Linting Status:** Clean

---

## 5. Known Issues / Bugs (Owner: Ninja)
*None reported.*

---

## 6. Discovery & SEO (Owner: Sage)
**Primary Keyword(s):** Custom High-Fidelity E-commerce Store
**Meta Description:** Zerolife - Immersive, custom e-commerce experiences powered by Shopify, React, and Three.js.

### Optimization Tasks
- [ ] Meta tags (Title, OG, Twitter)
- [ ] Schema.org (JSON-LD) implementation
- [ ] Heading hierarchy & alt-text audit
- [ ] SEO-friendly copy enhancement
