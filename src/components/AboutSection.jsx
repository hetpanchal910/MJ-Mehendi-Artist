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
    <section id="about-us" className="py-20 bg-pista-50 relative overflow-hidden">
      
      {/* Background Decorative Paisleys */}
      <div className="absolute top-10 right-4 pointer-events-none text-pista-300 opacity-20 hidden lg:block">
        <MehendiPaisley className="w-40 h-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pista-200 text-pista-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 text-pista-600 fill-current" />
            <span>Our Story & Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pista-900 tracking-tight">
            About <span className="text-pista-600 italic">MJ MEHENDI ARTIST</span>
          </h2>
          <p className="mt-3 text-base text-pista-800">
            Crafting indelible wedding memories through soulful henna lines and luminous bridal beauty.
          </p>
          <MehendiStrokeBanner />
        </div>

        {/* Story Grid (Image & Narrative) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Visual Collage Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-modal border-2 border-pista-300 bg-pista-200">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
                  alt="Henna artist creating bridal design"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-cardBg rounded-2xl p-4 shadow-modal border border-pista-200 max-w-[220px]">
                <div className="flex items-center space-x-2 text-pista-600">
                  <Award className="w-5 h-5 text-accentGoldDark" />
                  <span className="font-bold text-sm text-pista-900">8+ Years</span>
                </div>
                <p className="text-xs text-pista-700 mt-1">
                  Of Bridal Artistry & Handcrafted Organic Henna Mastery.
                </p>
              </div>

              {/* Floating Stain Guarantee Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-pista-600 text-white rounded-2xl p-3 shadow-modal flex items-center gap-2">
                <Droplets className="w-5 h-5 text-pista-200" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-pista-200">Stain Promise</p>
                  <p className="font-serif text-xs font-bold">100% Rich Maroon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pista-900 leading-snug">
              Every bride carries a sacred story, and her hands are the canvas.
            </h3>

            <p className="text-base text-pista-800 leading-relaxed">
              Founded by master artist <strong>MJ</strong>, our studio was born from an uncompromising love for authentic Indian festive rituals and botanical purity. In an industry flooded with quick-stain chemical pastes, we chose the artisanal path of patience and natural beauty.
            </p>

            <p className="text-base text-pista-800 leading-relaxed">
              Every single cone we roll starts with <strong>triple-filtered Sojat henna leaves</strong> harvested in Rajasthan. We hand-mix the paste in small, sterile batches with high-grade Australian tea tree, Nilgiri eucalyptus, and organic clove bud oil. The result is an ultra-fine, creamy glide that delivers a breathtaking royal mahogany stain that lasts up to 14 days — naturally.
            </p>

            {/* Seamless Hair & Makeup Fusion */}
            <div className="p-4 rounded-2xl bg-pista-150 border border-pista-300/70">
              <h4 className="font-serif font-bold text-base text-pista-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pista-600" />
                <span>The Complete Bridal Harmony</span>
              </h4>
              <p className="text-xs sm:text-sm text-pista-800 mt-1">
                Beyond mehendi, our team provides high-definition bridal and reception makeup that harmonizes with your jewelry, attire, and henna stain for a picture-perfect, stress-free wedding glow.
              </p>
            </div>

            {/* Direct Action */}
            <div className="pt-2">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3 rounded-full bg-pista-600 hover:bg-pista-700 text-white font-semibold text-sm shadow-soft transition-all inline-flex items-center gap-2"
              >
                <span>Book a Bridal Consultation</span>
                <Sparkles className="w-4 h-4 text-accentGold" />
              </button>
            </div>

          </div>

        </div>

        {/* 4 Brand Pillars / Quality Assurances */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {BRAND_PILLARS.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-cardBg rounded-2xl p-6 border border-pista-200 shadow-soft hover:shadow-soft-hover transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-pista-150 text-pista-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-base text-pista-900 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-pista-700 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Love & Testimonials */}
        <div className="bg-cardBg rounded-3xl p-6 sm:p-10 border border-pista-200/90 shadow-soft">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pista-900">
              Loved by Brides & Clients
            </h3>
            <p className="text-xs sm:text-sm text-pista-600 mt-1">
              Conversations from brides and clients on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHATSAPP_CHAT_SCREENSHOTS.map((chat) => (
              <figure
                key={chat.id}
                className="rounded-2xl bg-pista-50/70 border border-pista-200 overflow-hidden shadow-soft"
              >
                <img
                  src={chat.src}
                  alt={chat.alt}
                  className="w-full h-auto object-cover"
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
