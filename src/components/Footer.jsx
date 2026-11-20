import React from 'react';
import { Phone, MessageCircle, Heart, Instagram, Mail, MapPin, Sparkles, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export default function Footer({ onOpenAppointment }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-pista-900 text-pista-100 pt-16 pb-10 border-t border-pista-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-pista-800/80">
          
          {/* Brand Summary Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-pista-600 text-white flex items-center justify-center font-serif font-bold text-lg border border-pista-400">
                MJ
              </div>
              <div>
                <span className="font-serif font-extrabold text-xl text-white tracking-wide block">
                  MJ MEHENDI ARTIST
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-pista-400">
                  Bridal Studio & Organic Henna
                </span>
              </div>
            </div>

            <p className="text-sm text-pista-300 leading-relaxed max-w-sm">
              Premier bridal henna and makeup studio dedicated to intricate storytelling, pure Sojat Rajasthani henna, and organic chemical-free cones that deliver royal, deep mahogany stains.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pista-800 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                className="w-10 h-10 rounded-full bg-pista-800 hover:bg-pista-600 text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
              </a>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pista-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-base text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-pista-300">
              <li>
                <a href="#home" className="hover:text-pista-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAppointment}
                  className="hover:text-pista-400 transition-colors text-left"
                >
                  Want an Appointment
                </button>
              </li>
              <li>
                <a href="#our-work" className="hover:text-pista-400 transition-colors">
                  Our Work & Portfolio
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-pista-400 transition-colors">
                  Products & Best Sellers
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-pista-400 transition-colors">
                  About MJ Mehendi
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-pista-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-base text-white uppercase tracking-wider">
              Studio & Contact
            </h4>
            <ul className="space-y-3 text-sm text-pista-300">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-pista-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-pista-400">Direct Contact:</span>
                  <a
                    href={`tel:${CONTACT_INFO.phoneDisplay.replace(/\s+/g, '')}`}
                    className="font-bold text-white hover:text-pista-300"
                  >
                    +91 8780404879
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-pista-400">WhatsApp Inquiries:</span>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    +91 8780404879 (Instant Reply)
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-pista-400 shrink-0 mt-0.5" />
                <span>Ahmedabad, Gujarat & Pan-India Dispatch</span>
              </li>

              <li className="text-xs text-pista-400 pt-1">
                Mon - Sun: 9:00 AM - 9:00 PM (By Prior Booking)
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-pista-400 gap-4">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} <strong>MJ MEHENDI ARTIST</strong>. All Rights Reserved. Crafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-current" /> for brides.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-pista-800 hover:bg-pista-700 text-pista-200 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
