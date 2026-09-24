import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Users, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '2026-09-25',
    guests: '2',
    time: '19:00',
    name: '',
    phone: '',
    email: '',
    specialRequest: '',
  });

  if (!isOpen) return null;

  const currentDate = initialData?.date || formData.date;
  const currentGuests = initialData?.guests || formData.guests;
  const currentTime = initialData?.time || formData.time;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#17110E]/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#211611] border border-[#D9A45B]/30 p-8 shadow-2xl rounded-sm my-8">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 text-[#F5EBDD]/70 hover:text-[#D9A45B] bg-transparent border-none cursor-pointer p-1"
          aria-label="Close Reservation"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-8">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#D9A45B] block mb-1">
            RESERVATION FLOW • STEP {step} OF 3
          </span>
          <h3 className="font-serif text-3xl tracking-[0.15em] text-[#F5EBDD] uppercase">
            {step === 1 && 'SELECT DETAILS'}
            {step === 2 && 'GUEST INFORMATION'}
            {step === 3 && 'CONFIRMATION'}
          </h3>
          <div className="ornament-divider my-2 opacity-60">
            <div className="ornament-line w-8" />
            <div className="ornament-diamond" />
            <div className="ornament-line w-8" />
          </div>
        </div>

        {/* STEP 1: Date, Guests, Time */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-6">
            <div>
              <label className="text-[0.65rem] tracking-[0.2em] text-[#D9A45B] uppercase block mb-2 flex items-center gap-2">
                <Calendar size={14} className="text-[#B7653D]" />
                <span>DINING DATE</span>
              </label>
              <input
                type="date"
                value={currentDate}
                onChange={(e) => handleChange('date', e.target.value)}
                className="w-full bg-[#17110E] border border-[#D9A45B]/20 px-4 py-3 text-[#F5EBDD] font-serif tracking-[0.1em] focus:outline-none focus:border-[#D9A45B]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] text-[#D9A45B] uppercase block mb-2 flex items-center gap-2">
                  <Users size={14} className="text-[#B7653D]" />
                  <span>NUMBER OF GUESTS</span>
                </label>
                <select
                  value={currentGuests}
                  onChange={(e) => handleChange('guests', e.target.value)}
                  className="w-full bg-[#17110E] border border-[#D9A45B]/20 px-4 py-3 text-[#F5EBDD] font-serif tracking-[0.1em] focus:outline-none focus:border-[#D9A45B]"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8+">8+ Guests (Private Dining)</option>
                </select>
              </div>

              <div>
                <label className="text-[0.65rem] tracking-[0.2em] text-[#D9A45B] uppercase block mb-2 flex items-center gap-2">
                  <Clock size={14} className="text-[#B7653D]" />
                  <span>SEATING TIME</span>
                </label>
                <select
                  value={currentTime}
                  onChange={(e) => handleChange('time', e.target.value)}
                  className="w-full bg-[#17110E] border border-[#D9A45B]/20 px-4 py-3 text-[#F5EBDD] font-serif tracking-[0.1em] focus:outline-none focus:border-[#D9A45B]"
                >
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#B7653D] hover:bg-[#8E3F27] text-[#F5EBDD] font-serif text-lg tracking-[0.2em] uppercase transition-colors border-none cursor-pointer mt-6"
            >
              CONTINUE TO GUEST DETAILS →
            </button>
          </form>
        )}

        {/* STEP 2: Guest Details */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="text-[0.65rem] tracking-[0.2em] text-[#D9A45B] uppercase block mb-1 flex items-center gap-2">
                <User size={12} className="text-[#B7653D]" />
                <span>FULL NAME</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Vikramaditya Singh"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full bg-[#17110E] border border-[#D9A45B]/20 px-4 py-3 text-[#F5EBDD] text-sm focus:outline-none focus:border-[#D9A45B]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[0.65rem] tracking-[0.2em] text-[#D9A45B] uppercase block mb-1 flex items-center gap-2">
                  <Phone size={12} className="text-[#B7653D]" />
                  <span>PHONE NUMBER</span>
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full bg-[#17110E] border border-[#D9A45B]/20 px-4 py-3 text-[#F5EBDD] text-sm focus:outline-none focus:border-[#D9A45B]"
                  required
                />
              </div>

              <div>
                <label className="text-[0.65rem] tracking-[0.2em] text-[#D9A45B] uppercase block mb-1 flex items-center gap-2">
                  <Mail size={12} className="text-[#B7653D]" />
                  <span>EMAIL ADDRESS</span>
                </label>
                <input
                  type="email"
                  placeholder="vikram@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full bg-[#17110E] border border-[#D9A45B]/20 px-4 py-3 text-[#F5EBDD] text-sm focus:outline-none focus:border-[#D9A45B]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-[0.65rem] tracking-[0.2em] text-[#D9A45B] uppercase block mb-1 flex items-center gap-2">
                <MessageSquare size={12} className="text-[#B7653D]" />
                <span>SPECIAL REQUESTS (DIETARY / SEATING)</span>
              </label>
              <textarea
                rows="3"
                placeholder="Dietary restrictions, anniversary table request, or wine preferences..."
                value={formData.specialRequest}
                onChange={(e) => handleChange('specialRequest', e.target.value)}
                className="w-full bg-[#17110E] border border-[#D9A45B]/20 px-4 py-3 text-[#F5EBDD] text-sm focus:outline-none focus:border-[#D9A45B]"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 border border-[#D9A45B]/30 text-[#F5EBDD] text-xs tracking-[0.2em] uppercase bg-transparent cursor-pointer"
              >
                ← BACK
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 bg-[#B7653D] hover:bg-[#8E3F27] text-[#F5EBDD] font-serif text-base tracking-[0.2em] uppercase transition-colors border-none cursor-pointer"
              >
                CONFIRM RESERVATION
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Confirmation */}
        {step === 3 && (
          <div className="text-center py-4 space-y-6">
            <div className="inline-flex p-3 rounded-full bg-[#B7653D]/20 text-[#D9A45B] mb-2">
              <CheckCircle2 size={48} />
            </div>

            <h4 className="font-serif text-2xl tracking-[0.15em] text-[#F5EBDD] uppercase">
              YOUR TABLE IS RESERVED.
            </h4>

            <p className="text-xs tracking-[0.2em] uppercase text-[#D9A45B]">
              RESERVATION CODE: <span className="text-[#F5EBDD] font-mono">#NOOR-JAIPUR-2026-88</span>
            </p>

            <div className="bg-[#17110E] border border-[#D9A45B]/20 p-4 text-left text-xs space-y-2 text-[#C8BBB0]">
              <p><strong className="text-[#F5EBDD]">Guest:</strong> {formData.name || 'Valued Guest'}</p>
              <p><strong className="text-[#F5EBDD]">Date & Time:</strong> {formData.date} at {formData.time}</p>
              <p><strong className="text-[#F5EBDD]">Party Size:</strong> {formData.guests} Guests</p>
              <p><strong className="text-[#F5EBDD]">Contact:</strong> {formData.phone} | {formData.email}</p>
            </div>

            <div className="p-3 bg-[#8E3F27]/20 border border-[#8E3F27]/40 text-[0.7rem] text-[#F5EBDD]/80">
              * Demo Reservation Request: A confirmation message has been dispatched to your email. We look forward to welcoming you to Noor Jaipur.
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-[#17110E] border border-[#D9A45B]/40 text-[#D9A45B] hover:text-[#F5EBDD] text-xs tracking-[0.25em] uppercase cursor-pointer"
            >
              CLOSE & RETURN
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
