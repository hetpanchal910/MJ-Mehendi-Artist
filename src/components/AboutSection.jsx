import React from 'react';
import { Sparkles, Leaf, ShieldCheck, Heart, Award, Droplets } from 'lucide-react';
import { BRAND_PILLARS, WHATSAPP_CHAT_SCREENSHOTS } from '../data/catalog';
import { MehendiStrokeBanner, MehendiPaisley } from './MehendiSvgMotifs';

export default function AboutSection({ onOpenAppointment }) {
  const iconMap = {
    leaf: Leaf,
    sparkles: Sparkles,
    heart: Heart,
    shield: ShieldCheck
  };

  return (
    <section id="about-us" className="relative py-20 overflow-hidden bg-pista-50">
      
      {/* Background Decorative Paisleys */}
      <div className="absolute hidden pointer-events-none top-10 right-4 text-pista-300 opacity-20 lg:block">
        <MehendiPaisley className="w-40 h-40" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pista-200 text-pista-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-pista-600 fill-current" />
            <span>OUR STORY & CRAFT</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-pista-900">
            About <span className="italic text-pista-600">MJ MEHENDI ARTIST</span>
          </h2>
          <p className="mt-3 text-base text-pista-800">
            Bringing neat, graceful mehendi designs to your everyday celebrations and supplying pure henna essentials.
          </p>
          <MehendiStrokeBanner />
        </div>

        {/* Story Grid (Image & Narrative) */}
        <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-12">
          
          {/* Visual Collage Column */}
          <div className="relative lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-modal border-2 border-pista-300 bg-pista-200">
                <img
                  src="https://res.cloudinary.com/dfc4o4wok/image/upload/v1795253506/WhatsApp_Image_2026-11-21_at_3.01.04_PM.jpg"
                  alt="Henna artist creating bridal design"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-cardBg rounded-2xl p-4 shadow-modal border border-pista-200 max-w-[220px]">
                <div className="flex items-center space-x-2 text-pista-600">
                  <Award className="w-5 h-5 text-accentGoldDark" />
                  <span className="text-sm font-bold text-pista-900">2+ Years</span>
                </div>
                <p className="mt-1 text-xs text-pista-700">
                  For Everyday Mehendi Art & Pure

                  Henna Supplies
                </p>
              </div>

              {/* Floating Stain Guarantee Badge */}
              <div className="absolute flex items-center gap-2 p-3 text-white -top-4 -left-4 sm:-left-6 bg-pista-600 rounded-2xl shadow-modal">
                <Droplets className="w-5 h-5 text-pista-200" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-pista-200">PURE & FRESH</p>
                  <p className="font-serif text-xs font-bold">100% Natural Henna</p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="space-y-5 lg:col-span-7">
            <h3 className="font-serif text-2xl font-bold leading-snug sm:text-3xl text-pista-900">
              Every celebration deserves neat art, and every artist needs reliable tools.
            </h3>

            <p className="text-base leading-relaxed text-pista-800">
              Founded by <strong>MJ</strong>, our studio was built on a simple love for clean, effortless mehendi and honest, natural ingredients. Whether it is a festival, family gathering, or casual occasion, we focus on graceful designs without heavy bridal packages.
            </p>

            <p className="text-base leading-relaxed text-pista-800">
              Alongside personal bookings, we supply everything needed to mix, roll, and apply fresh henna at home or in your studio. From finely sifted mehndi powder, blend oils, and aftercare balms to cellophane sheets, cutters, scales, and practice props, every product is chosen for smooth flow and reliable results.
            </p>

            {/* Seamless Hair & Makeup Fusion */}
            <div className="p-4 border rounded-2xl bg-pista-150 border-pista-300/70">
              <h4 className="flex items-center gap-2 font-serif text-base font-bold text-pista-900">
                <Sparkles className="w-4 h-4 text-pista-600" />
                <span>Complete Mehendi & Supply Store</span>
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-pista-800">
                Beyond applying festive and everyday mehendi, we stock all essential cone-making tools, aftercare oils, and practice accessories—ready for beginners, enthusiasts, and fellow artists.
              </p>
            </div>

            {/* Direct Action */}
            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all rounded-full bg-pista-600 hover:bg-pista-700 shadow-soft"
              >
                <span>Book a Bridal Consultation</span>
                <Sparkles className="w-4 h-4 text-accentGold" />
              </button>
            </div>

          </div>

        </div>

        {/* 4 Brand Pillars / Quality Assurances */}
        <div className="grid grid-cols-1 gap-6 mb-20 md:grid-cols-2 lg:grid-cols-4">
          {BRAND_PILLARS.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="p-6 transition-all border bg-cardBg rounded-2xl border-pista-200 shadow-soft hover:shadow-soft-hover"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-pista-150 text-pista-700">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="mb-2 font-serif text-base font-bold text-pista-900">
                  {pillar.title}
                </h4>
                <p className="text-xs leading-relaxed sm:text-sm text-pista-700">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Love & Testimonials */}
        <div className="p-6 border bg-cardBg rounded-3xl sm:p-10 border-pista-200/90 shadow-soft">
          <div className="max-w-2xl mx-auto mb-8 text-center">
            <h3 className="font-serif text-2xl font-bold sm:text-3xl text-pista-900">
              Loved by Brides & Clients
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-pista-600">
              Conversations from brides and clients on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHATSAPP_CHAT_SCREENSHOTS.map((chat) => (
              <figure
                key={chat.id}
                className="overflow-hidden border rounded-2xl bg-pista-50/70 border-pista-200 shadow-soft"
              >
                <img
                  src={chat.src}
                  alt={chat.alt}
                  className="object-cover w-full h-auto"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
