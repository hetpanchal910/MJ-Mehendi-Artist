import React, { useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BuyModal from './components/BuyModal';
import AppointmentModal from './components/AppointmentModal';
import { SectionSkeleton } from './components/SkeletonLoader';
import { CONTACT_INFO } from './data/catalog';
import { MessageCircle, Phone } from 'lucide-react';

// Lazy loaded sections for optimal performance & code splitting
const WorkShowcase = lazy(() => import('./components/WorkShowcase'));
const ProductsSection = lazy(() => import('./components/ProductsSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

export default function App() {
  // Modal states
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedProductForBuy, setSelectedProductForBuy] = useState(null);
  const [appointmentServicePreset, setAppointmentServicePreset] = useState('');

  const handleOpenAppointment = (preset = '') => {
    setAppointmentServicePreset(typeof preset === 'string' ? preset : '');
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
    setAppointmentServicePreset('');
  };

  const handleOpenContactModal = () => {
    handleOpenAppointment();
  };

  const handleSelectProductForBuy = (product) => {
    setSelectedProductForBuy(product);
  };

  const handleCloseBuyModal = () => {
    setSelectedProductForBuy(null);
  };

  const scrollToProducts = () => {
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-pista-100 text-pista-900 selection:bg-pista-300 selection:text-pista-950">
      
      {/* 1. Navigation Bar */}
      <Navbar
        onOpenAppointment={() => handleOpenAppointment()}
        onOpenContact={handleOpenContactModal}
      />

      <main className="flex-1">
        {/* 2. Home / Hero Section */}
        <Hero
          onOpenAppointment={() => handleOpenAppointment('Bridal Mehendi Consultation')}
          onScrollToProducts={scrollToProducts}
          onContactToBuy={handleSelectProductForBuy}
        />

        {/* 3. Our Work (Category Showcase) */}
        <Suspense fallback={<SectionSkeleton title="Loading Portfolio Showcase..." />}>
          <WorkShowcase
            onBookDesign={(designTitle) => handleOpenAppointment(`Inquiry for design: ${designTitle}`)}
          />
        </Suspense>

        {/* 4. Photo Gallery & Products Section (Including Best Selling) */}
        <Suspense fallback={<SectionSkeleton title="Loading Organic Products..." />}>
          <ProductsSection
            onContactToBuy={handleSelectProductForBuy}
          />
        </Suspense>

        {/* 5. About Us Section */}
        <Suspense fallback={<SectionSkeleton title="Loading Story..." />}>
          <AboutSection
            onOpenAppointment={() => handleOpenAppointment('Bridal Consultation')}
          />
        </Suspense>

        {/* 6. Contact Us Section */}
        <Suspense fallback={<SectionSkeleton title="Loading Contact..." />}>
          <ContactSection
            onOpenContactModal={handleOpenContactModal}
          />
        </Suspense>
      </main>

      {/* 7. Footer */}
      <Footer
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Product Purchase Flow Modal ("Contact to Buy" -> WhatsApp) */}
      {selectedProductForBuy && (
        <BuyModal
          product={selectedProductForBuy}
          onClose={handleCloseBuyModal}
        />
      )}

      {/* Appointment / Contact Us Pop-up Modal Form -> WhatsApp */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        initialService={appointmentServicePreset}
      />

      {/* Floating Sticky WhatsApp Button (Bottom Right) */}
      <div className="fixed z-40 flex flex-col items-end gap-2 bottom-5 right-5">
        <a
          href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hello%20MJ%20Mehendi%20Artist,%20I%20would%20like%20to%20inquire%20about%20your%20services%20and%20products.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-modal transition-all duration-300"
          title="Direct WhatsApp Chat"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageCircle className="w-6 h-6 fill-current shrink-0" />
          <span className="pl-0 overflow-hidden text-sm font-bold transition-all duration-300 ease-in-out max-w-0 whitespace-nowrap group-hover:max-w-xs group-hover:pl-2">
            WhatsApp MJ 
          </span>
        </a>
      </div>

    </div>
  );
}
