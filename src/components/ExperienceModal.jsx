import React from 'react';
import { X, Calendar } from 'lucide-react';

export default function ExperienceModal({ isOpen, onClose, experienceData, onOpenReservation }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#17110E]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#211611] border border-[#D9A45B]/30 p-8 md:p-12 shadow-2xl rounded-sm my-8 text-[#F5EBDD]">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#F5EBDD]/70 hover:text-[#D9A45B] bg-transparent border-none cursor-pointer p-1"
          aria-label="Close Experience"
        >
          <X size={28} />
        </button>

        <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#D9A45B] block mb-2">
          {experienceData?.tag || 'CURATED EXPERIENCES'}
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl tracking-[0.15em] text-[#F5EBDD] uppercase mb-4">
          {experienceData?.title || 'THE DINING EXPERIENCE'}
        </h2>

        <div className="ornament-divider my-4 opacity-60">
          <div className="ornament-line w-12" />
          <div className="ornament-diamond" />
          <div className="ornament-line w-12" />
        </div>

        <p className="text-sm text-[#C8BBB0] font-light leading-relaxed mb-6">
          {experienceData?.desc || 'Intimate dinners, lively gatherings or special celebrations — Noor offers a setting where great food, warm hospitality and beautiful spaces come together.'}
        </p>

        <div className="bg-[#17110E] border border-[#D9A45B]/20 p-6 space-y-3 mb-8 text-xs text-[#C8BBB0]">
          <p><strong className="text-[#D9A45B]">Atmosphere:</strong> Candlelit heritage archways, ambient Indian lounge acoustics.</p>
          <p><strong className="text-[#D9A45B]">Dress Code:</strong> Smart Elegant / Traditional Formal.</p>
          <p><strong className="text-[#D9A45B]">Reservations:</strong> Highly recommended 48 hours prior.</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[#D9A45B]/15">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#D9A45B]/30 text-[#C8BBB0] text-xs tracking-[0.2em] uppercase bg-transparent cursor-pointer"
          >
            CLOSE
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenReservation();
            }}
            className="px-6 py-2.5 bg-[#B7653D] hover:bg-[#8E3F27] text-[#F5EBDD] text-xs tracking-[0.2em] uppercase flex items-center gap-2 cursor-pointer border-none"
          >
            <Calendar size={14} />
            <span>RESERVE FOR THIS EXPERIENCE</span>
          </button>
        </div>

      </div>
    </div>
  );
}
