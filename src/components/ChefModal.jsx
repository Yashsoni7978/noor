import React from 'react';
import { X } from 'lucide-react';

export default function ChefModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#17110E]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#EDE0CE] text-[#17110E] border border-[#17110E]/20 p-8 md:p-12 shadow-2xl rounded-sm my-8">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#17110E]/70 hover:text-[#8E3F27] bg-transparent border-none cursor-pointer p-1"
          aria-label="Close Chef Profile"
        >
          <X size={28} />
        </button>

        <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#8E3F27] block mb-2 font-medium">
          CULINARY ARCHITECT
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl tracking-[0.15em] text-[#17110E] uppercase mb-4">
          THE HAND <br />
          <span className="italic text-[#8E3F27]">BEHIND THE PLATE.</span>
        </h2>

        <div className="w-16 h-px bg-[#8E3F27] my-4 opacity-40" />

        <div className="space-y-4 text-sm text-[#655B54] font-light leading-relaxed my-6 max-h-[50vh] overflow-y-auto pr-2">
          <p>
            Guided by a profound respect for Indian culinary traditions and an obsessive dedication to flavor precision, our culinary team approaches every dish as a canvas.
          </p>
          <p>
            "We do not alter the soul of traditional recipes; we refine their structure, lighten the textures, and highlight the natural brilliance of hand-selected spices."
          </p>
          <p>
            From rare Himalayan Morels to single-estate Kashmiri saffron, every ingredient is sourced ethically and directly from farm partners across the country.
          </p>
        </div>

        <div className="pt-4 border-t border-[#17110E]/15 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#8E3F27] hover:bg-[#17110E] text-[#F5EBDD] text-xs tracking-[0.2em] uppercase transition-colors border-none cursor-pointer"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
}
