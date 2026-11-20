# MJ MEHENDI ARTIST 🌿✨
**Responsive, Animated Frontend Website in React**

A luxury, high-conversion web application built for **MJ MEHENDI ARTIST**, showcasing bespoke bridal/event mehendi and makeup artistry alongside an interactive catalog of 100% organic, chemical-free henna cones, bridal hampers, and care essentials.

---

## 🎨 Visual Theme & Palette
- **Pastel Pista Green Theme**:
  - Soft mint/pistachio backgrounds: `#EEF5F0` & `#E3EFE7`
  - Sage/pista accents: `#7A9E86` & `#5C836B`
  - Warm off-white cards: `#FAFDFB`
  - Deep forest/charcoal text: `#1E2D24`
  - Subtle gold henna accents: `#C59A5A`
- **Responsive Layout**: Mobile-first design optimized across smartphones, tablets, and wide desktop displays.
- **Performance & Code-Splitting**: `React.lazy` + `Suspense` section splitting with animated skeleton loaders and image lazy-loading.
- **Accessibility**: Smooth micro-interactions respecting `prefers-reduced-motion`.

---

## 📱 Contact & WhatsApp Integration
- **Owner Phone Number:** `+91 8780404879` (Direct Call & WhatsApp)
- **Centralized Config:** `src/data/catalog.js` (Change phone, WhatsApp number, products, or bestsellers in one single file).

### 1. Product Purchase Flow ("Contact to Buy" -> WhatsApp)
1. Customer clicks **"Contact to Buy"** on any product card or bestseller.
2. A drawer/modal opens with:
   - Live **quantity selector** (`+`, `-`, or direct input $\ge 1$).
   - **Dynamic Total Price** update ($\text{unitPrice} \times \text{quantity}$).
   - Customer name input, city/address, and special note (e.g. pin tip preference).
3. Clicking **"Contact on WhatsApp to Buy"** triggers a celebratory confetti burst and opens WhatsApp (`https://wa.me/918780404879?text=...`) with a structured pre-filled order message:
   ```text
   *Order Inquiry - MJ MEHENDI ARTIST* 🌿

   Hello! I would like to place an order for:
   📦 Item: Signature Organic Bridal Cones (Pack of 5)
   🔢 Quantity: 3
   💰 Total Amount: ₹1,050 (at ₹350/unit)
   👤 My Name: Priya Shah
   📍 City / Address: Ahmedabad, Gujarat
   📝 Special Note: Please pack with extra cold wrap

   Please let me know the availability, payment details, and estimated dispatch time. Thank you!
   ```

### 2. Appointment Booking & Contact Flow
1. Clicking **"Want an Appointment"** or **"Contact Us"** in the navigation bar or CTAs opens a pop-up modal.
2. The user enters their **Name**, **Phone**, **Service** (Bridal Mehendi, Makeup, Arabic, Combo, etc.), **Date of Event**, **Venue/City**, and **Special Requests**.
3. Clicking **"Send Details on WhatsApp"** directly launches WhatsApp with all pre-filled details to `+91 8780404879`.

---

## 📑 Page Section Order (Top to Bottom)
1. **Navigation Bar**:
   - Left: **MJ** brand monogram logo & wordmark ("MJ MEHENDI ARTIST").
   - Choosing links: **Want an Appointment**, **Our Work**, **Products**, **About Us**, **Contact Us**.
   - Direct call button (`+91 8780404879`) & mobile drawer menu.
2. **Home / Hero Section**:
   - Animated mehendi design elements: Rotating multi-layer SVG mandalas, floating paisley (ambi) motifs, animated stroke dividers.
   - Luxury bridal headline, value propositions (1,200+ brides, 100% organic, 4.9★ rating), and instant action CTAs.
3. **Our Work (Category Showcase)**:
   - Filterable portfolio: **All**, **Mehendi Work**, and **Makeup Work** (Bridal Mehendi, Arabic/Festive Henna, HD Bridal Makeup, Reception Glam).
   - Interactive Lightbox preview modal with detailed tags and "Book This Look" button.
4. **Photo Gallery & Products Section**:
   - **Best Selling** highlight area: Prominently showcases 2 to 4 configurable bestsellers (`BEST_SELLER_IDS` in `src/data/catalog.js`).
   - Complete product grid with category filters (Organic Cones, Bridal Kits, Aftercare Oils, Practice Hands, Stencils).
   - Displays Image, Item Name, Price in `₹` INR, and **"Contact to Buy"** button.
5. **About Us Section**:
   - Story of MJ MEHENDI ARTIST, Rajasthan Sojat triple-filtered henna purity, skin safety (no PPD/chemicals), and complete bridal harmony.
   - 4 Brand Pillars (Purity, Deep Stain, Bespoke Storytelling, Hygiene) and client testimonials.
6. **Contact Us Section**:
   - Direct studio info (+91 8780404879, studio hours, location, Instagram), bridal consultation timing guide, and pop-up modal trigger.
7. **Footer**:
   - Brand summary, quick links, contact info, WhatsApp direct button, and back-to-top button.
8. **Floating Sticky WhatsApp Button**:
   - Fixed at bottom-right corner for quick, 1-tap ordering and consultation.

---

## 🛠️ Project Structure
```text
mj-mehendi-artist/
├── index.html                   # HTML template with Google Fonts (Playfair Display + Plus Jakarta Sans)
├── package.json                 # React 18, Vite 6, Tailwind CSS, Lucide icons, Canvas Confetti
├── tailwind.config.js           # Custom pastel pista palette and animation keyframes
├── vite.config.js               # Vite bundler configuration
└── src/
    ├── main.jsx                 # Entry point
    ├── App.jsx                  # Main application orchestrator with lazy loading & modals
    ├── index.css                # Global styles, scrollbars, pista background patterns
    ├── data/
    │   └── catalog.js           # Central data: Phone (+91 8780404879), Best Sellers, Products, Portfolio, Reviews
    └── components/
        ├── Navbar.jsx           # Sticky glassmorphic navbar with mobile drawer
        ├── Hero.jsx             # Hero section with animated mehendi SVG motifs
        ├── WorkShowcase.jsx     # Filterable portfolio with detail lightbox
        ├── ProductsSection.jsx  # Best Selling highlight (2-4 items) & photo gallery grid
        ├── BuyModal.jsx         # "Contact to Buy" drawer: qty increment/decrement, dynamic total, WhatsApp
        ├── AboutSection.jsx     # Brand story, Sojat organic quality, 4 pillars, client reviews
        ├── ContactSection.jsx   # Studio contact card, phone, hours, and modal trigger
        ├── AppointmentModal.jsx # Pop-up form for appointments & contact -> WhatsApp
        ├── Footer.jsx           # Footer with links, contact details, copyright
        ├── MehendiSvgMotifs.jsx # Intricate SVGs: Mandalas, Paisleys, and dividers
        └── SkeletonLoader.jsx   # Suspense skeleton placeholders & spinner
```

---

## 🚀 Running the Project Locally

### 1. Start the Vite Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Add / Edit Best Sellers & Products
Open [src/data/catalog.js](file:///d:/projects/mehendi/src/data/catalog.js):
- **To update phone/WhatsApp number:** Edit `CONTACT_INFO.phoneDisplay` and `CONTACT_INFO.whatsappNumber`.
- **To change the 2–4 Best Sellers:** Simply update the array `BEST_SELLER_IDS`:
  ```js
  export const BEST_SELLER_IDS = ["cone-pack-5", "bridal-kit", "henna-oil", "fresh-cones-10"];
  ```
- **To add a new product:** Append a new object into `PRODUCTS` with `id`, `name`, `price`, `image`, and `category`.
- **To add portfolio items:** Append a new item into `PORTFOLIO_ITEMS`.
