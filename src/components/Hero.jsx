import React from 'react';
import { Sparkles, Calendar, ShoppingBag, ArrowRight, Star } from 'lucide-react';
import { MehendiMandala, MehendiPaisley, MehendiStrokeBanner } from './MehendiSvgMotifs';
import { CONTACT_INFO, PRODUCTS, BEST_SELLER_IDS } from '../data/catalog';

export default function Hero({ onOpenAppointment, onScrollToProducts, onContactToBuy }) {
  const bestSellers = PRODUCTS.filter(p => BEST_SELLER_IDS.includes(p.id)).slice(0, 3);
  return (
    <section
      id="home"
      className="relative pb-16 overflow-hidden pt-28 sm:pt-32 sm:pb-24 bg-gradient-to-b from-pista-100 via-pista-50 to-pista-100"
    >
      {/* Decorative Background Mandalas with Rotation & Float */}
      <div className="absolute pointer-events-none top-12 -left-20 sm:-left-12 opacity-35 text-pista-400">
        <MehendiMandala className="w-72 h-72 sm:w-96 sm:h-96" animated={true} />
      </div>

      <div className="absolute pointer-events-none -bottom-16 -right-20 sm:-right-10 opacity-30 text-pista-500">
        <MehendiMandala className="w-80 h-80 sm:w-[440px] sm:h-[440px]" animated={true} />
      </div>

      {/* Floating Henna Paisleys */}
      <div className="absolute hidden pointer-events-none top-1/4 right-8 lg:right-24 md:block text-pista-500 opacity-40 animate-float-slow">
        <MehendiPaisley className="w-20 h-20 rotate-12" />
      </div>
      <div className="absolute hidden pointer-events-none bottom-1/4 left-8 lg:left-20 md:block text-pista-600 opacity-30 animate-float-reverse">
        <MehendiPaisley className="w-16 h-16 -rotate-45" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Headline, Bio & Quick CTAs */}
          <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-pista-300 shadow-sm text-xs sm:text-sm font-semibold text-pista-800">
              <span className="w-2 h-2 rounded-full bg-pista-600 animate-pulse"></span>
              <span className="text-accentGoldDark">★</span>
              <span>100% Organic Henna Cones & Luxury Bridal Artistry</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-pista-900 leading-[1.15] tracking-tight">
              Where Sacred <span className="italic text-pista-600">Traditions</span> Meet Modern <span className="relative inline-block text-pista-700">Artistry<span className="absolute left-0 w-full h-1 rounded-full -bottom-1 bg-pista-400/50"></span></span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-2xl mx-auto text-base font-normal leading-relaxed sm:text-lg text-pista-800/90 lg:mx-0">
              Welcome to <strong className="font-semibold text-pista-950">MJ MEHENDI ARTIST</strong>. We craft bespoke, intricate bridal & festive henna designs paired with luminous makeup looks. Explore our freshly prepared, chemical-free Rajasthani organic henna cones and bridal hampers delivered straight to your doorstep.
            </p>

            {/* Decorative Divider */}
            <div className="hidden sm:block">
              <MehendiStrokeBanner />
            </div>

            {/* Quick Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-pista-600 hover:bg-pista-700 active:scale-95 text-white font-semibold text-base shadow-soft hover:shadow-soft-hover transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5 text-accentGold" />
                <span>Want an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onScrollToProducts}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/90 hover:bg-pista-150 border-2 border-pista-400 text-pista-900 font-semibold text-base shadow-sm hover:border-pista-600 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 text-pista-600" />
                <span>Shop</span>
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="grid max-w-lg grid-cols-3 gap-2 pt-6 mx-auto text-center border-t border-pista-200/80 sm:gap-4 lg:mx-0">
              <div className="p-2 border shadow-xs sm:p-3 rounded-xl bg-white/60 border-pista-200/60">
                <p className="font-serif text-lg font-bold sm:text-2xl text-pista-800">1,200+</p>
                <p className="text-[11px] sm:text-xs text-pista-600 font-medium">Brides Adorned</p>
              </div>

              <div className="p-2 border shadow-xs sm:p-3 rounded-xl bg-white/60 border-pista-200/60">
                <p className="font-serif text-lg font-bold sm:text-2xl text-pista-800">100%</p>
                <p className="text-[11px] sm:text-xs text-pista-600 font-medium">Organic / No PPD</p>
              </div>

              <div className="p-2 border shadow-xs sm:p-3 rounded-xl bg-white/60 border-pista-200/60">
                <p className="font-serif text-lg font-bold sm:text-2xl text-pista-800">4.9 ★</p> 
                <p className="text-[11px] sm:text-xs text-pista-600 font-medium"
                 >Rating</p> 
              </div>
            </div>

            {/* Quick Contact Line — removed per user request */}

          </div>

          {/* Right Column: Best Sellers */}
          <div className="relative lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:max-w-none">

              {/* Subtle glow behind the card */}
              <div className="absolute transform -inset-2 bg-gradient-to-r from-pista-300 to-pista-400 rounded-3xl blur-xl opacity-40 rotate-1"></div>

              {/* Best Sellers Card */}
              <div className="relative p-5 space-y-3 border-2 bg-cardBg rounded-3xl shadow-modal border-pista-200">

                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accentGoldDark" />
                    <span className="text-sm font-bold tracking-widest uppercase text-pista-800">
                      Best Sellers
                    </span>
                  </div>
                  <button
                    onClick={onScrollToProducts}
                    className="text-[11px] font-semibold text-pista-600 hover:text-pista-900 underline underline-offset-2 transition-colors"
                  >
                    View All →
                  </button>
                </div>

                {/* Product Rows */}
                {bestSellers.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3.5 p-3 bg-pista-50 rounded-2xl border border-pista-200 hover:border-pista-400 hover:bg-white transition-all cursor-pointer group"
                    onClick={() => onContactToBuy && onContactToBuy(item)}
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 overflow-hidden shadow-xs rounded-xl shrink-0 bg-pista-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        loading="eager"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      {item.badge && (
                        <span className="text-[10px] font-bold bg-pista-600 text-white px-2 py-0.5 rounded-full inline-block mb-0.5">
                          {item.badge}
                        </span>
                      )}
                      <p className="text-xs font-semibold leading-snug text-pista-900 line-clamp-2">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-serif text-sm font-extrabold text-pista-900">₹{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-[11px] text-pista-400 line-through">₹{item.originalPrice}</span>
                        )}
                        <span className="flex ml-auto text-amber-400">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-current" />)}
                        </span>
                      </div>
                    </div>

                    {/* Buy pill */}
                    <span className="text-[11px] font-bold text-pista-600 bg-pista-150 px-3 py-1.5 rounded-xl shrink-0 group-hover:bg-pista-600 group-hover:text-white transition-all">
                      Buy
                    </span>
                  </div>
                ))}

                {/* Bottom CTA */}
                <button
                  onClick={onScrollToProducts}
                  className="w-full py-2.5 rounded-xl border-2 border-dashed border-pista-300 hover:border-pista-500 text-pista-600 hover:text-pista-900 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Browse Full Product Collection
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
