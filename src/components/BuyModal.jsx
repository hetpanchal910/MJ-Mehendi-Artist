import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, MessageCircle, Sparkles, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO } from '../data/catalog';

export default function BuyModal({ product, onClose }) {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [city, setCity] = useState('');
  const [note, setNote] = useState('');
  const [nameError, setNameError] = useState(false);

  const unitPrice = product.price;
  const totalPrice = unitPrice * quantity;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityInput = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1) {
      setQuantity(val);
    } else if (e.target.value === '') {
      setQuantity(1);
    }
  };

  const handleWhatsAppContact = (e) => {
    e.preventDefault();

    if (!customerName.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#7A9E86', '#5C836B', '#C59A5A', '#FAFDFB']
      });
    } catch (err) {
      // Ignore if confetti fails
    }

    // Build formatted message
    const messageLines = [
      `*Order Inquiry - MJ MEHENDI ARTIST* 🌿`,
      ``,
      `Hello! I would like to place an order for:`,
      `📦 *Item:* ${product.name}`,
      `🔢 *Quantity:* ${quantity}`,
      `💰 *Total Amount:* ₹${totalPrice.toLocaleString('en-IN')} (at ₹${unitPrice}/unit)`,
      `👤 *My Name:* ${customerName.trim()}`,
      city.trim() ? `📍 *City / Address:* ${city.trim()}` : null,
      note.trim() ? `📝 *Special Note:* ${note.trim()}` : null,
      ``,
      `Please let me know the availability, payment details, and estimated dispatch time. Thank you!`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(messageLines)}`;

    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pista-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-cardBg rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-modal border-2 border-pista-300 p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-pista-150 hover:bg-pista-200 text-pista-800 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-2 text-xs font-bold text-pista-700 uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-accentGoldDark" />
          <span>Quick Purchase via WhatsApp</span>
        </div>

        <h3 className="font-serif text-2xl font-bold text-pista-900 pr-8">
          Order {product.name}
        </h3>

        {/* Product Preview Card */}
        <div className="mt-4 p-3.5 bg-pista-50 rounded-2xl border border-pista-200 flex gap-4 items-center">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-pista-200 shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] bg-pista-200 text-pista-800 font-bold px-2 py-0.5 rounded-full">
              {product.categoryLabel}
            </span>
            <p className="font-semibold text-sm text-pista-900 truncate mt-1">
              {product.name}
            </p>
            <p className="text-xs text-pista-700">
              Unit Price: <strong className="text-pista-900">₹{unitPrice}</strong>
            </p>
          </div>
        </div>

        {/* Purchase Form */}
        <form onSubmit={handleWhatsAppContact} className="mt-5 space-y-4">
          
          {/* Quantity Selector & Dynamic Total */}
          <div className="bg-white p-4 rounded-2xl border border-pista-200 shadow-xs">
            <label className="block text-xs font-bold text-pista-800 uppercase tracking-wider mb-2">
              Select Quantity:
            </label>

            <div className="flex items-center justify-between">
              {/* Stepper */}
              <div className="inline-flex items-center border-2 border-pista-300 rounded-xl overflow-hidden bg-pista-50">
                <button
                  type="button"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  className="px-3 py-2 text-pista-800 hover:bg-pista-200 disabled:opacity-40 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityInput}
                  className="w-14 text-center font-bold text-pista-950 bg-transparent text-base focus:outline-none py-1"
                  aria-label="Quantity value"
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="px-3 py-2 text-pista-800 hover:bg-pista-200 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamically Updated Total Price */}
              <div className="text-right">
                <span className="text-xs text-pista-600 block">Total Calculated:</span>
                <span className="font-serif text-2xl font-extrabold text-pista-900">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-xs font-bold text-pista-900 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Priya Shah"
              value={customerName}
              onChange={(e) => {
                setCustomerName(e.target.value);
                if (nameError) setNameError(false);
              }}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 ${
                nameError
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-pista-300 focus:ring-pista-400 focus:border-pista-500'
              }`}
            />
            {nameError && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                Please enter your name to proceed.
              </p>
            )}
          </div>

          {/* Delivery Location / City (Optional) */}
          <div>
            <label className="block text-xs font-bold text-pista-900 mb-1">
              City / Pin Code <span className="text-xs text-pista-500 font-normal">(for delivery estimate)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Ahmedabad, Gujarat"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-pista-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pista-400"
            />
          </div>

          {/* Optional Note */}
          <div>
            <label className="block text-xs font-bold text-pista-900 mb-1">
              Special Instructions / Pin Tip Preference <span className="text-xs text-pista-500 font-normal">(Optional)</span>
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Please pack with extra cold wrap, or specific 0.38mm / 0.45mm pin size"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-pista-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pista-400"
            />
          </div>

          {/* Trust Guarantees */}
          <div className="bg-pista-100/70 p-3 rounded-xl border border-pista-200 space-y-1">
            <div className="text-[11px] text-pista-800 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-pista-600 shrink-0" />
              <span>Prepared fresh in small batches on order confirmation.</span>
            </div>
            <div className="text-[11px] text-pista-800 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-pista-600 shrink-0" />
              <span>Direct WhatsApp contact with MJ (+91 8780404879).</span>
            </div>
          </div>

          {/* WhatsApp Direct Action Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-sm sm:text-base shadow-soft hover:shadow-soft-hover transition-all flex items-center justify-center gap-2 group"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Contact on WhatsApp to Buy (₹{totalPrice.toLocaleString('en-IN')})</span>
          </button>
        </form>

      </div>
    </div>
  );
}
