import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Instagram, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';
import { MehendiStrokeBanner, MehendiMandala } from './MehendiSvgMotifs';

export default function ContactSection({ onOpenContactModal }) {
  return (
    <section id="contact-us" className="py-20 bg-pista-100 relative overflow-hidden">
      
      {/* Background Mandala */}
      <div className="absolute -bottom-24 -left-20 pointer-events-none text-pista-300 opacity-25">
        <MehendiMandala className="w-80 h-80" animated={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pista-200 text-pista-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <MessageCircle className="w-3.5 h-3.5 text-pista-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-pista-900 tracking-tight">
            Contact <span className="text-pista-600 italic">MJ MEHENDI ARTIST</span>
          </h2>
          <p className="mt-3 text-base text-pista-800">
            Have questions regarding bridal packages, dates, or bulk organic cones? Connect directly with us on WhatsApp or call us.
          </p>
          <MehendiStrokeBanner />
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Direct Contact Card */}
          <div className="lg:col-span-7 bg-cardBg rounded-3xl p-6 sm:p-10 border-2 border-pista-300 shadow-modal flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-pista-600 text-white flex items-center justify-center font-serif font-bold text-xl shadow-soft">
                  MJ
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl text-pista-900">
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
                    <span className="text-xs text-pista-600 font-semibold uppercase block">Call Us Directly</span>
                    <span className="font-serif font-bold text-lg sm:text-xl text-pista-900 group-hover:text-pista-600 transition-colors">
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
                    <span className="text-xs text-emerald-800 font-semibold uppercase block">Official WhatsApp</span>
                    <span className="font-serif font-bold text-base sm:text-lg text-emerald-950">
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
                    <span className="text-xs text-pista-600 font-semibold uppercase block">Studio & Services</span>
                    <span className="font-medium text-sm text-pista-900">
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
                    <span className="text-xs text-pista-600 font-semibold uppercase block">Studio Hours</span>
                    <span className="font-medium text-sm text-pista-900">
                      {CONTACT_INFO.workingHours}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Modal Trigger CTA */}
            <div className="mt-8 pt-6 border-t border-pista-200 flex flex-col sm:flex-row gap-3">
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
          <div className="lg:col-span-5 bg-gradient-to-br from-pista-600 to-pista-800 rounded-3xl p-6 sm:p-10 text-white shadow-modal flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-pista-100 text-xs font-semibold mb-4 backdrop-blur-xs">
                <Sparkles className="w-3.5 h-3.5 text-accentGold" />
                <span>Bridal Consultation Tips</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                When should you book your bridal mehendi?
              </h3>

              <div className="mt-6 space-y-4 text-pista-100/90 text-sm">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <p className="font-semibold text-white">Ideal Booking Timeline</p>
                  <p className="text-xs text-pista-200 mt-1">
                    Peak wedding dates fill 2-5 months in advance. We recommend locking your date as soon as your wedding venue is finalized.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <p className="font-semibold text-white">Stain Timing Advice</p>
                  <p className="text-xs text-pista-200 mt-1">
                    Apply mehendi 48 hours prior to your wedding day to allow the natural Rajasthani henna stain to mature to its deepest burgundy.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <p className="font-semibold text-white">Fresh Cone Orders</p>
                  <p className="text-xs text-pista-200 mt-1">
                    Cones are prepared fresh on Mondays and Thursdays. Order at least 4-5 days prior to your celebration.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/20">
              <button
                onClick={onOpenContactModal}
                className="w-full py-3 px-5 rounded-xl bg-white text-pista-900 font-bold text-sm hover:bg-pista-100 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4 text-pista-700" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
