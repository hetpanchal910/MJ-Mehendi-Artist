import React from 'react';
import { Phone, MessageCircle, Heart, Instagram, Mail, MapPin, Sparkles, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export default function Footer({ onOpenAppointment }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-10 border-t bg-pista-900 text-pista-100 border-pista-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 pb-12 border-b md:grid-cols-2 lg:grid-cols-12 border-pista-800/80">
          
          {/* Brand Summary Column */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 font-serif text-lg font-bold text-white border rounded-full bg-pista-600 border-pista-400">
                MJ
              </div>
              <div>
                <span className="block font-serif text-xl font-extrabold tracking-wide text-white">
                  MJ MEHENDI ARTIST
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-pista-400">
                  EVERYDAY MEHENDI & HENNA SUPPLIES
                </span>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-pista-300">
              Everyday mehendi designs for festivals and family events, plus pure henna powders, oils, aftercare, cellophane sheets, cutters, and artist tools for smooth, reliable results.
            </p>

            <div className="flex items-center pt-2 space-x-3">
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
                className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full shadow-sm bg-pista-800 hover:bg-pista-600"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" />
              </a>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full shadow-sm bg-pista-800 hover:bg-pink-600"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3 lg:col-span-3">
            <h4 className="font-serif text-base font-bold tracking-wider text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-pista-300">
              <li>
                <a href="#home" className="transition-colors hover:text-pista-400">
                  Home
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenAppointment}
                  className="text-left transition-colors hover:text-pista-400"
                >
                  Book an Appointment
                </button>
              </li>
              <li>
                <a href="#our-work" className="transition-colors hover:text-pista-400">
                  Designs & Gallery
                </a>
              </li>
              <li>
                <a href="#products" className="transition-colors hover:text-pista-400">
                  All Products & Tools
                </a>
              </li>
              <li>
                <a href="#about-us" className="transition-colors hover:text-pista-400">
                  About MJ Mehendi
                </a>
              </li>
              <li>
                <a href="#contact-us" className="transition-colors hover:text-pista-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-3 lg:col-span-4">
            <h4 className="font-serif text-base font-bold tracking-wider text-white uppercase">
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
                    +91 8866311064
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
                   +91 8866311064 (Instant Reply)
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-pista-400 shrink-0 mt-0.5" />
                <span>Suvas Oram, C/402, Gokul Nagar, Odhav, Opposite Shivdarshan Socity, Near Odhav, Adinath Nagar, Ahmedabad-382415, Gujarat</span>
              </li>

              <li className="pt-1 text-xs text-pista-400">
                Mon - Sun: 9:00 AM - 9:00 PM (By Prior Booking)
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs sm:flex-row text-pista-400">
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
