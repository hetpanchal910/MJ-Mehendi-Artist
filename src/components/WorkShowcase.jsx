import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Eye, X, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/catalog';
import { MehendiStrokeBanner } from './MehendiSvgMotifs';

export default function WorkShowcase({ onBookDesign }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const sliderRef = useRef(null);

  const filterTabs = [
    { id: 'all', label: 'All Designs' },
   
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  const checkScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el.removeEventListener('scroll', checkScroll);
  }, [filteredItems]);

  const scroll = (dir) => {
    const el = sliderRef.current;
    if (!el) return;
    // Scroll by roughly 2 card widths
    el.scrollBy({ left: dir * 520, behavior: 'smooth' });
  };

  return (
    <section id="our-work" className="relative py-16 overflow-hidden bg-pista-100/60">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pista-200 text-pista-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-accentGoldDark" />
            <span>DESIGN SHOWCASE</span>
          </div>
          <h2 className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-pista-900">
            Our Mehendi <span className="italic text-pista-600">Designs</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-3 text-base text-pista-800">
            Browse neat festive motifs, clean Arabic trails, and simple everyday styles for hands and feet.
          </p>
          <MehendiStrokeBanner />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-pista-600 text-white shadow-soft scale-105'
                    : 'bg-white/80 text-pista-800 hover:bg-pista-200/80 border border-pista-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">

          {/* Left Arrow */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-3 sm:-ml-5 w-10 h-10 rounded-full bg-cardBg border border-pista-300 shadow-soft flex items-center justify-center text-pista-800 hover:bg-pista-600 hover:text-white hover:border-pista-600 transition-all duration-200 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-3 sm:-mr-5 w-10 h-10 rounded-full bg-cardBg border border-pista-300 shadow-soft flex items-center justify-center text-pista-800 hover:bg-pista-600 hover:text-white hover:border-pista-600 transition-all duration-200 ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Strip */}
          <div
            ref={sliderRef}
            className="flex gap-4 pb-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="snap-start shrink-0 w-[220px] sm:w-[260px] group bg-cardBg rounded-2xl overflow-hidden border border-pista-200/80 shadow-soft hover:shadow-soft-hover transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image only — no text, no tags */}
                <div className="relative aspect-[3/4] overflow-hidden bg-pista-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle zoom-hint overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center transition-colors duration-300 opacity-0 bg-pista-950/0 group-hover:bg-pista-950/20 group-hover:opacity-100">
                    <span className="bg-white/90 backdrop-blur-sm text-pista-900 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Add-More Placeholder Card */}
            <div className="snap-start shrink-0 w-[220px] sm:w-[260px] rounded-2xl border-2 border-dashed border-pista-300 bg-pista-50 flex flex-col items-center justify-center gap-3 p-6 text-center cursor-default">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pista-200">
                <Sparkles className="w-5 h-5 text-pista-600" />
              </div>
              <p className="text-sm font-semibold text-pista-700">More work coming soon!</p>
              <p className="text-[11px] text-pista-500">Follow us on Instagram for the latest designs.</p>
            </div>
          </div>

          {/* Scroll Fade Edges */}
          <div className="absolute top-0 left-0 w-8 pointer-events-none bottom-4 bg-gradient-to-r from-pista-100/60 to-transparent"></div>
          <div className="absolute top-0 right-0 w-8 pointer-events-none bottom-4 bg-gradient-to-l from-pista-100/60 to-transparent"></div>
        </div>

        {/* Swipe hint on mobile */}
        <p className="text-center text-xs text-pista-500 mt-2 sm:hidden flex items-center justify-center gap-1.5">
          <ChevronLeft className="w-3.5 h-3.5" />
          Swipe to explore more
          <ChevronRight className="w-3.5 h-3.5" />
        </p>

        {/* Bottom CTA */}
        <div className="max-w-3xl p-6 mx-auto mt-10 text-center border bg-cardBg rounded-2xl sm:p-8 border-pista-200/80 shadow-soft">
          <h3 className="font-serif text-xl font-bold sm:text-2xl text-pista-900">
            Have a festive motif or simple reference design in mind?
          </h3>
          <p className="max-w-xl mx-auto mt-2 text-sm text-pista-700">
            Send us your preferred pattern, festival look, or product list and we will help you plan your booking or order.
          </p>
          <button
            onClick={() => onBookDesign && onBookDesign('Custom Bridal Design')}
            className="inline-flex items-center gap-2 py-3 mt-5 text-sm font-semibold text-white transition-all rounded-full px-7 bg-pista-600 hover:bg-pista-700 shadow-soft"
          >
            <Calendar className="w-4 h-4 text-accentGold" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pista-950/60 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-cardBg rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-modal border border-pista-200 p-5 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute z-10 p-2 transition-colors rounded-full top-4 right-4 bg-pista-100 hover:bg-pista-200 text-pista-800"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-pista-200">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    if (onBookDesign) onBookDesign(title);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-pista-600 hover:bg-pista-700 text-white font-semibold text-sm shadow-soft transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 text-accentGold" />
                  <span>Book This Look / Inquire</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
