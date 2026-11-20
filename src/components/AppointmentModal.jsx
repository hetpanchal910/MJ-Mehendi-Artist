import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, User, MapPin, MessageSquare, Sparkles, Check, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO, SERVICES_LIST } from '../data/catalog';

export default function AppointmentModal({ isOpen, onClose, initialService = '' }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || SERVICES_LIST[0],
    date: '',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Trigger confetti
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#7A9E86', '#5C836B', '#C59A5A', '#FAFDFB']
      });
    } catch (err) {
      // Ignore
    }

    // Format WhatsApp pre-filled message
    const messageLines = [
      `*Appointment & Service Inquiry - MJ MEHENDI ARTIST* 🌿`,
      ``,
      `Hello MJ! I would like to request an appointment/quote:`,
      `👤 *Name:* ${formData.name.trim()}`,
      `📞 *Phone:* ${formData.phone.trim()}`,
      `✨ *Service Requested:* ${formData.service}`,
      formData.date ? `📅 *Date of Event:* ${formData.date}` : null,
      formData.location.trim() ? `📍 *Location / Venue:* ${formData.location.trim()}` : null,
      formData.message.trim() ? `💬 *Additional Details:* ${formData.message.trim()}` : null,
      ``,
      `Please let me know your availability and packages. Looking forward to hearing from you!`
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(messageLines)}`;

    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pista-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-cardBg rounded-3xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-modal border-2 border-pista-300 p-5 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-pista-150 hover:bg-pista-200 text-pista-800 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-2 text-xs font-bold text-pista-700 uppercase tracking-wider mb-1.5">
          <Calendar className="w-4 h-4 text-accentGoldDark" />
          <span>Appointment & Consultation</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pista-900 pr-8">
          Book Your Date with MJ
        </h3>
        <p className="text-xs sm:text-sm text-pista-700 mt-1">
          Fill in your event details below to redirect directly to MJ's personal WhatsApp (<span className="font-semibold text-pista-900">+91 8780404879</span>).
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-pista-900 mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-pista-600" />
              <span>Full Name <span className="text-red-500">*</span></span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Radhika Sharma"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 ${
                errors.name
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-pista-300 focus:ring-pista-400 focus:border-pista-500'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold text-pista-900 mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-pista-600" />
              <span>Phone / WhatsApp Number <span className="text-red-500">*</span></span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white focus:outline-none focus:ring-2 ${
                errors.phone
                  ? 'border-red-400 focus:ring-red-200'
                  : 'border-pista-300 focus:ring-pista-400 focus:border-pista-500'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Service Needed */}
          <div>
            <label className="block text-xs font-bold text-pista-900 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pista-600" />
              <span>Select Service</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-pista-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pista-400 text-pista-900"
            >
              {SERVICES_LIST.map((srv, idx) => (
                <option key={idx} value={srv}>
                  {srv}
                </option>
              ))}
            </select>
          </div>

          {/* Date of Event */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-pista-900 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-pista-600" />
                <span>Date of Event</span>
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-pista-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pista-400 text-pista-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-pista-900 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-pista-600" />
                <span>Venue / City</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g. Ahmedabad, Studio or Home"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-pista-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pista-400 text-pista-900"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-pista-900 mb-1 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-pista-600" />
              <span>Special Requests / Story / Guest Count</span>
            </label>
            <textarea
              name="message"
              rows={2}
              placeholder="e.g. Want groom portrait & lotus mandala motifs on hands. Need mehendi for 8 bridesmaids as well."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3.5 py-2 rounded-xl border border-pista-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pista-400"
            />
          </div>

          {/* Direct WhatsApp CTA Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] active:scale-98 text-white font-bold text-sm sm:text-base shadow-soft hover:shadow-soft-hover transition-all flex items-center justify-center gap-2 group mt-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping mr-1"></span>
            <span>Send Details on WhatsApp (+91 8780404879)</span>
          </button>
        </form>

      </div>
    </div>
  );
}
