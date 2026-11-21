import React, { useState } from 'react';
import { ShoppingBag, Star, Sparkles, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { PRODUCTS, BEST_SELLER_IDS, CONTACT_INFO } from '../data/catalog';
import { MehendiStrokeBanner } from './MehendiSvgMotifs';

export default function ProductsSection({ onContactToBuy }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Configure Best Selling products (2 to 4 items)
  const bestSellers = PRODUCTS.filter((item) => BEST_SELLER_IDS.includes(item.id));

  // Category filter tabs
  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'powders', label: 'Powders' },
    { id: 'kits', label: 'Kits' },
    { id: 'aftercare', label: 'Aftercare , spray & oils' },
    { id: 'accessories', label: 'Cutters, Scales & Props' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="products" className="relative py-20 bg-pista-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* 1. BEST SELLING HIGHLIGHT AREA (2 to 4 featured items)   */}
        {/* ======================================================== */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accentGold/15 text-accentGoldDark border border-accentGold/30 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-accentGoldDark" />
              <span>Customer Favorites</span>
            </div>
            <h2 className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-pista-900">
              Best Selling <span className="italic text-pista-600">Henna Essentials</span>
            </h2>
            <p className="mt-3 text-base text-pista-800">
              Popular blend oils, aftercare balms and sprays, cellophane sheets, cutters, and practice tools made for smooth, reliable use.
            </p>
            <MehendiStrokeBanner />
          </div>

          {/* Best Sellers Grid (2 to 4 items) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((item) => (
              <div
                key={`bestseller-${item.id}`}
                className="relative bg-cardBg rounded-3xl p-5 border-2 border-pista-300/80 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
              >
                {/* Highlight Badge */}
                <div className="absolute top-4 left-4 z-10 bg-pista-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-accentGold" />
                  <span>{item.badge || 'Best Seller'}</span>
                </div>

                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-pista-200 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-106"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-pista-950/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-1.5">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-1 text-xs font-bold text-pista-900">{item.rating}</span>
                    <span className="text-[11px] text-pista-600">({item.reviewCount})</span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-serif text-lg font-bold leading-snug transition-colors text-pista-900 group-hover:text-pista-600">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-pista-700 line-clamp-2">
                    {item.shortDesc}
                  </p>

                  {/* Key feature preview */}
                  <ul className="mt-3 space-y-1">
                    {item.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="text-[11px] text-pista-800 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-pista-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Contact to Buy Button */}
                <div className="pt-4 mt-4 border-t border-pista-200/80">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-xs text-pista-600">Price: </span>
                      <span className="font-serif text-xl font-extrabold text-pista-900">
                        ₹{item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="ml-2 text-xs line-through text-pista-500">
                          ₹{item.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Save ₹{item.originalPrice - item.price}
                    </span>
                  </div>

                  <button
                    onClick={() => onContactToBuy(item)}
                    className="w-full py-2.5 px-4 rounded-xl bg-pista-600 hover:bg-pista-700 active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-soft hover:shadow-soft-hover transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <ShoppingBag className="w-4 h-4 text-accentGold" />
                    <span>Contact to Buy</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. PHOTO GALLERY / FULL PRODUCT CATALOG GRID             */}
        {/* ======================================================== */}
        <div>
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h3 className="font-serif text-2xl font-bold sm:text-3xl text-pista-900">
              Complete Store <span className="italic text-pista-600">Collection</span>
            </h3>
            <p className="mt-1 text-sm text-pista-700">
              Browse henna powders, blend oils, aftercare, cellophane sheets, cutters, scales, stands, and practice tools.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-pista-600 text-white shadow-soft scale-105'
                      : 'bg-white/80 text-pista-800 hover:bg-pista-200 border border-pista-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between p-4 transition-all duration-300 border bg-cardBg rounded-2xl sm:p-5 border-pista-200/90 shadow-soft hover:shadow-soft-hover group"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-pista-200 mb-3.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-106"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-pista-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                      {item.categoryLabel}
                    </span>
                    {item.badge && (
                      <span className="absolute top-2.5 right-2.5 bg-pista-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h4 className="font-serif text-base font-bold transition-colors sm:text-lg text-pista-900 group-hover:text-pista-600">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-xs text-pista-700 line-clamp-2">
                    {item.shortDesc}
                  </p>

                  {/* Bullet features */}
                  <div className="mt-3 space-y-1">
                    {item.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="text-[11px] text-pista-800 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-pista-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Contact to Buy Button */}
                <div className="pt-4 mt-4 border-t border-pista-150">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[11px] text-pista-600 block">Unit Price</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-xl font-extrabold text-pista-900">
                          ₹{item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-xs line-through text-pista-500">
                            ₹{item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-[11px] font-semibold text-pista-700 bg-pista-100 px-2 py-1 rounded-md">
                      Fresh Batch
                    </span>
                  </div>

                  {/* "Contact to Buy" Button opens interactive modal */}
                  <button
                    onClick={() => onContactToBuy(item)}
                    className="w-full py-2.5 px-4 rounded-xl bg-pista-600 hover:bg-pista-700 active:scale-95 text-white font-semibold text-xs sm:text-sm shadow-soft hover:shadow-soft-hover transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4 text-accentGold" />
                    <span>Contact to Buy</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bulk Orders & Wholesale Inquiries Banner */}
          <div className="flex flex-col items-center justify-between gap-4 p-6 mt-12 border bg-cardBg rounded-2xl border-pista-300/80 shadow-soft md:flex-row">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-pista-200 text-pista-800 shrink-0">
                <ShieldCheck className="w-6 h-6 text-pista-600" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold sm:text-lg text-pista-900">
                  Need Bulk Cones for Sangeet or Mehendi Artists?
                </h4>
                <p className="text-xs text-pista-700">
                  We supply freshly rolled cones in bulk (50+ / 100+ units) at wholesale pricing with customized pin sizes.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hello%20MJ%20Mehendi%20Artist,%20I%20am%20interested%20in%20a%20bulk/wholesale%20order%20for%20fresh%20organic%20cones.`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-2.5 rounded-full bg-pista-600 hover:bg-pista-700 text-white text-xs sm:text-sm font-semibold shadow-soft flex items-center gap-2"
            >
              <span>Inquire Wholesale</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
