import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Sparkles, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export default function Navbar({ onOpenAppointment, onOpenContact }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'our-work', 'products', 'about-us', 'contact-us'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Our Work', href: '#our-work', id: 'our-work' },
    { name: 'Products', href: '#products', id: 'products' },
    { name: 'About Us', href: '#about-us', id: 'about-us' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-pista-100/95 backdrop-blur-md shadow-sm border-b border-pista-300/40 py-2.5'
          : 'bg-pista-100/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 flex-nowrap">
          {/* Brand Logo / Wordmark */}
          <a
            href="#home"
            className="group flex items-center space-x-2.5 focus:outline-none focus:ring-2 focus:ring-pista-500 rounded-lg p-1"
          >
            {/* Artistic Monogram */}
            <div className="flex items-center justify-center w-10 h-10 font-serif text-lg font-bold tracking-wider text-white transition-transform border-2 rounded-full bg-gradient-to-br from-pista-500 to-pista-700 shadow-soft border-white/60 group-hover:scale-105 shrink-0">
              MJ
            </div>
            {/* Full name hidden on mobile, shown on tablet/desktop */}
            <span className="hidden font-serif text-base font-extrabold leading-tight tracking-wide transition-colors sm:inline-block xl:text-xl text-pista-900 group-hover:text-pista-700 whitespace-nowrap">
              MJ MEHENDI ARTIST
            </span>
          </a>

          {/* Desktop Navigation Links + Book Appointment, one line */}
          <nav className="hidden lg:flex items-center flex-nowrap whitespace-nowrap gap-0.5 xl:gap-1.5" aria-label="Main Navigation">
            {/* <button
              onClick={onOpenAppointment}
              className="shrink-0 whitespace-nowrap px-2.5 xl:px-3.5 py-1.5 rounded-full text-[13px] xl:text-sm font-medium text-pista-800 hover:text-pista-950 hover:bg-pista-200/70 transition-all inline-flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4 text-pista-600 shrink-0" />
              <span>Want an Appointment</span>
            </button> */}

            {navLinks.slice(1).map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`shrink-0 whitespace-nowrap px-2.5 xl:px-3.5 py-1.5 rounded-full text-[13px] xl:text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'bg-pista-600 text-white shadow-sm'
                    : 'text-pista-800 hover:text-pista-950 hover:bg-pista-200/60'
                }`}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={onOpenContact}
              className="shrink-0 whitespace-nowrap px-2.5 xl:px-3.5 py-1.5 rounded-full text-[13px] xl:text-sm font-medium text-pista-800 hover:text-pista-950 hover:bg-pista-200/70 transition-all inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-pista-600 shrink-0" />
              <span>Contact Us</span>
            </button>

            <button
              onClick={onOpenAppointment}
              className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 bg-pista-600 hover:bg-pista-700 active:scale-95 text-white px-3 xl:px-4 py-2 rounded-full text-[13px] xl:text-sm font-semibold shadow-soft hover:shadow-soft-hover transition-all ml-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-accentGold shrink-0" />
              <span>Book Appointment</span>
            </button>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* <a
              href={`tel:${CONTACT_INFO.phoneDisplay.replace(/\s+/g, '')}`}
              className="p-2 border rounded-full bg-white/80 border-pista-300 text-pista-700 hover:text-pista-900"
              aria-label="Call Studio"
            >
              <Phone className="w-4 h-4" />
            </a> */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors rounded-xl text-pista-800 hover:text-pista-950 bg-pista-200/80 hover:bg-pista-300 focus:outline-none focus:ring-2 focus:ring-pista-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] border-b border-pista-300/60 bg-cardBg/95 backdrop-blur-md shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-5 pt-3 pb-6 space-y-2">
          {/* Quick appointment highlight in drawer */}
          {/* <button
            onClick={() => {
              setIsOpen(false);
              onOpenAppointment();
            }}
            className="flex items-center justify-between w-full px-4 py-3 mb-2 font-semibold text-left border shadow-sm rounded-xl bg-pista-150 text-pista-900 border-pista-300/70"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-pista-600" />
              Want an Appointment
            </span>
            <span className="text-xs bg-pista-600 text-white px-2 py-0.5 rounded-full">Book</span>
          </button> */}

          <a
            href="#our-work"
            onClick={(e) => handleLinkClick(e, '#our-work')}
            className="block px-4 py-2.5 rounded-lg text-base font-medium text-pista-800 hover:bg-pista-100 hover:text-pista-900"
          >
            Our Work
          </a>

          <a
            href="#products"
            onClick={(e) => handleLinkClick(e, '#products')}
            className="block px-4 py-2.5 rounded-lg text-base font-medium text-pista-800 hover:bg-pista-100 hover:text-pista-900"
          >
            Products & Best Sellers
          </a>

          <a
            href="#about-us"
            onClick={(e) => handleLinkClick(e, '#about-us')}
            className="block px-4 py-2.5 rounded-lg text-base font-medium text-pista-800 hover:bg-pista-100 hover:text-pista-900"
          >
            About Us
          </a>

          {/* Contact Us drawer trigger */}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenContact();
            }}
            className="w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-pista-800 hover:bg-pista-100 hover:text-pista-900 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-pista-600" />
            Contact Us
          </button>

        </div>
      </div>
    </header>
  );
}
