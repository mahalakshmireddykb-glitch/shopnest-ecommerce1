# ShopNest — Multi-Category E-Commerce Website

A demo online store built with React, React Router, Tailwind CSS and
localStorage. No backend or database is required — it's designed as a
beginner-friendly college project / portfolio piece.

## 1. Install Node.js

Download and install Node.js (LTS version) from https://nodejs.org
Then confirm it's installed by running in a terminal:

    node -v
    npm -v

Both should print a version number.

## 2. Install project dependencies

Open this folder in VS Code, open a terminal inside VS Code
(Terminal → New Terminal), and run:

    npm install

This downloads React, React Router, Tailwind CSS and the other
packages listed in package.json into a `node_modules` folder.

## 3. Run the website

    npm run dev

Vite will print a local address, usually `http://localhost:5173`.
Open that in your browser — the site will hot-reload as you edit files.

## 4. Build for deployment

    npm run build

This creates a `dist/` folder with the production-ready static site.
You can deploy that folder for free on Vercel, Netlify, or GitHub Pages
(drag-and-drop `dist/` onto Netlify's dashboard is the fastest option).

## Project structure

    src/
      components/   Reusable UI pieces (Navbar, Footer, ProductCard...)
      pages/         One file per route (Home, Cart, Checkout...)
      context/       Global state: Cart, Wishlist, Auth, Toast
      data/          products.js — the product catalog (32 items, 8 categories)
      App.jsx         Route definitions
      main.jsx        App entry point, wraps App in all providers

## How data is stored

There is no backend/database. Three things live in the browser's
`localStorage`, so they survive a page refresh but are specific to
one browser on one device:

- `shopnest_cart` — items currently in the cart
- `shopnest_wishlist` — saved wishlist items
- `shopnest_users` / `shopnest_session` — demo accounts and the logged-in user
- `shopnest_orders` — placed orders, used by the Orders/tracking page

## Swapping in your own product images

Product images currently come from `picsum.photos` (a free placeholder
image service) so they never break. To use your own photos:

1. Put image files in `src/assets/` (create the folder).
2. In `src/data/products.js`, import the image and use it in the
   `image` / `images` fields instead of the picsum.photos URL.

## Known limitations (be upfront about these in a viva/demo)

- Login/Register is for demonstration only: passwords are stored in
  plain text in localStorage. Do not reuse this pattern for a real app.
- Payment methods are UI only — no real payment gateway is connected.
- All data resets if the user clears their browser's localStorage.
- Product stock/reviews are generated numbers, not real inventory data.
