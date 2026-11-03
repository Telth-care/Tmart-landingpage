# T-Mart — React Static Website

A fast, modern, responsive static website built with **React** and **Vite** for **T-Mart** (grocery and daily essentials superstore).

---

## 🚀 Features

- **⚡ Blazing Fast Static Build**: Compiles to 100% pure static HTML, CSS, and JS (`dist/`) in sub-second build times.
- **📱 Fully Responsive**: Optimized for mobile phones, tablets, and desktop displays with smooth interactions.
- **🔍 Live Search & Filter**: Instant search across items and category filtering (Fresh Produce, Dairy & Eggs, Bakery, Pantry).
- **🛒 Interactive Cart & Slide-Over Drawer**: Real-time subtotal, free delivery progress bar, and quantity adjustments with `localStorage` persistence.
- **✨ Quick-View Product Modal**: Nutrition breakdown, origin information, packaging weight, and instant add-to-cart.
- **🎁 Promo Banner & Deals**: Coupon code redemption (`FRESH20`) and alert feedback.
- **🌟 Testimonials & Store Locations**: Customer reviews and physical store directory.
- **🎨 Modern Design System**: Clean typography (Plus Jakarta Sans), custom variables, smooth transitions, and Lucide icons.

---

## 📁 Project Structure

```text
T-mart/
├── dist/                     # Production static build files (ready to deploy)
│   ├── index.html
│   └── assets/
│       ├── index-*.js
│       └── index-*.css
├── public/                   # Static assets & icons
├── src/
│   ├── components/           # Modular React components
│   │   ├── Navbar.jsx        # Navigation, logo, search input, and cart toggle
│   │   ├── Hero.jsx          # Hero showcase, value stats, and CTA
│   │   ├── Features.jsx      # Key value propositions & benefits
│   │   ├── CategoryFilter.jsx# Category pills with dynamic counters
│   │   ├── ProductCard.jsx   # Individual product card with badges and quick view
│   │   ├── ProductModal.jsx  # Detailed quick-view modal with nutrition specs
│   │   ├── CartDrawer.jsx    # Slide-in cart drawer with free shipping tracker
│   │   ├── DealsBanner.jsx   # Promo code discount banner
│   │   ├── Testimonials.jsx  # Customer reviews
│   │   ├── StoreLocator.jsx  # Store locations & operating hours
│   │   └── Footer.jsx        # Sitemap, static site info, and copyright
│   ├── data/
│   │   └── products.js       # Product catalog, categories, reviews, stores data
│   ├── App.jsx               # Main state orchestrator
│   ├── index.css             # Design tokens & responsive styles
│   └── main.jsx              # React DOM root entry
├── index.html                # HTML entry template
├── package.json              # Project scripts and dependencies
└── vite.config.js            # Vite build configuration
```

---

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm run dev`
Starts the local Vite development server with Hot Module Replacement (HMR).
```bash
npm run dev
```

### `npm run build`
Compiles the static website into optimized static assets inside the `dist/` directory.
```bash
npm run build
```

### `npm run preview`
Locally previews the production static build from the `dist/` folder:
```bash
npm run preview
```

---

## 🌐 Deploying as a Static Website

Because this project compiles to static HTML, CSS, and JS in `dist/`, it can be deployed to any static host:

### Option 1: GitHub Pages
1. In `vite.config.js`, add `base: '/<repo-name>/'` (if deploying to a repository subpath) or `base: './'`.
2. Run `npm run build`.
3. Push the `dist/` directory contents to your `gh-pages` branch.

### Option 2: Netlify
1. Connect your repository to Netlify.
2. Set Build command: `npm run build`.
3. Set Publish directory: `dist`.

### Option 3: Vercel
1. Run `npx vercel` or import the repository in the Vercel dashboard.
2. Framework Preset will automatically detect **Vite**.
3. Output Directory: `dist`.

### Option 4: Cloudflare Pages / AWS S3
- Upload the contents of `dist/` directly to your bucket or project root.
