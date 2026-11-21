import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Instagram, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';
import { MehendiStrokeBanner, MehendiMandala } from './MehendiSvgMotifs';

export default function ContactSection({ onOpenContactModal }) {
  return (
    <section id="contact-us" className="relative py-20 overflow-hidden bg-pista-100">
      
      {/* Background Mandala */}
      <div className="absolute opacity-25 pointer-events-none -bottom-24 -left-20 text-pista-300">
        <MehendiMandala className="w-80 h-80" animated={true} />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pista-200 text-pista-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <MessageCircle className="w-3.5 h-3.5 text-pista-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-pista-900">
            Contact <span className="italic text-pista-600">MJ MEHENDI ARTIST</span>
          </h2>
          <p className="mt-3 text-base text-pista-800">
            Have questions regarding bridal packages, dates, or bulk organic cones? Connect directly with us on WhatsApp or call us.
          </p>
          <MehendiStrokeBanner />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid items-stretch grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Main Direct Contact Card */}
          <div className="flex flex-col justify-between p-6 border-2 lg:col-span-7 bg-cardBg rounded-3xl sm:p-10 border-pista-300 shadow-modal">
            <div>
              <div className="flex items-center mb-6 space-x-3">
                <div className="flex items-center justify-center w-12 h-12 font-serif text-xl font-bold text-white rounded-2xl bg-pista-600 shadow-soft">
                  MJ
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-pista-900">
                    Direct Artist Line
                  </h3>
                  <p className="text-xs text-pista-600">Available on Call & WhatsApp 7 days a week</p>
                </div>
              </div>

              {/* Contact Information List */}
              <div className="space-y-4">
                
                {/* Phone */}
                <a
                  href={`tel:${CONTACT_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                  className="flex items-center p-3.5 rounded-2xl bg-pista-50 hover:bg-pista-150 border border-pista-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pista-200 text-pista-800 flex items-center justify-center shrink-0 mr-3.5 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-pista-700" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-pista-600">Call Us Directly</span>
                    <span className="font-serif text-lg font-bold transition-colors sm:text-xl text-pista-900 group-hover:text-pista-600">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hello%20MJ%20Mehendi%20Artist,%20I%20would%20like%20to%20connect%20with%20you%20regarding%20an%20appointment%20or%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 mr-3.5 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-emerald-800">Official WhatsApp</span>
                    <span className="font-serif text-base font-bold sm:text-lg text-emerald-950">
                      Chat with MJ on WhatsApp (+91 8780404879)
                    </span>
                  </div>
                </a>

                {/* Studio Location */}
                <div className="flex items-center p-3.5 rounded-2xl bg-pista-50 border border-pista-200">
                  <div className="w-10 h-10 rounded-xl bg-pista-200 text-pista-800 flex items-center justify-center shrink-0 mr-3.5">
                    <MapPin className="w-5 h-5 text-pista-700" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-pista-600">Studio & Services</span>
                    <span className="text-sm font-medium text-pista-900">
                      {CONTACT_INFO.city} (Studio & On-Location Wedding Visits)
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center p-3.5 rounded-2xl bg-pista-50 border border-pista-200">
                  <div className="w-10 h-10 rounded-xl bg-pista-200 text-pista-800 flex items-center justify-center shrink-0 mr-3.5">
                    <Clock className="w-5 h-5 text-pista-700" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase text-pista-600">Studio Hours</span>
                    <span className="text-sm font-medium text-pista-900">
                      {CONTACT_INFO.workingHours}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Modal Trigger CTA */}
            <div className="flex flex-col gap-3 pt-6 mt-8 border-t border-pista-200 sm:flex-row">
              <button
                onClick={onOpenContactModal}
                className="flex-1 py-3.5 px-6 rounded-2xl bg-pista-600 hover:bg-pista-700 active:scale-95 text-white font-bold text-sm shadow-soft hover:shadow-soft-hover transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-accentGold" />
                <span>Fill Appointment Form (Pop-up)</span>
              </button>
            </div>
          </div>

          {/* Quick FAQ / Bridal Booking Tips Box */}
          <div className="flex flex-col justify-between p-6 text-white lg:col-span-5 bg-gradient-to-br from-pista-600 to-pista-800 rounded-3xl sm:p-10 shadow-modal">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold rounded-full bg-white/20 text-pista-100 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-accentGold" />
                <span>Mehendi & Order Tip</span>
              </div>

              <h3 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">
                When should you book mehendi or order supplies?
              </h3>

              <div className="mt-6 space-y-4 text-sm text-pista-100/90">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <p className="font-semibold text-white">Ideal Booking Timeline</p>
                  <p className="mt-1 text-xs text-pista-200">
                    Festive and weekend slots fill up quickly. Book a few days ahead for parties and family events, or a week early for busy festival days.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <p className="font-semibold text-white">Stain & Aftercare Timing</p>
                  <p className="mt-1 text-xs text-pista-200">
                    Apply mehendi 24–48 hours before your event and use aftercare balm or oil after removal so the natural stain deepens smoothly.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <p className="font-semibold text-white">Product & Supply Orders</p>
                  <p className="mt-1 text-xs text-pista-200">
                    Order powders, blend oils, cellophane sheets, cutters, and practice tools in advance so your stock is ready when you need it.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/20">
              <button
                onClick={onOpenContactModal}
                className="flex items-center justify-center w-full gap-2 px-5 py-3 text-sm font-bold transition-colors bg-white shadow-sm rounded-xl text-pista-900 hover:bg-pista-100"
              >
                <span>Book Now or Order Items</span>
                <ArrowRight className="w-4 h-4 text-pista-700" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
