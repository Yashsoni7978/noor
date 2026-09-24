import React from 'react';
import { X } from 'lucide-react';

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#17110E]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#211611] border border-[#D9A45B]/30 p-8 md:p-12 shadow-2xl rounded-sm my-8">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#F5EBDD]/70 hover:text-[#D9A45B] bg-transparent border-none cursor-pointer p-1"
          aria-label="Close Story"
        >
          <X size={28} />
        </button>

        <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#D9A45B] block mb-2">
          THE HERITAGE OF NOOR
        </span>
        
        <h2 className="font-serif text-3xl md:text-5xl tracking-[0.15em] text-[#F5EBDD] uppercase mb-6">
          ROOTED IN TRADITION. <br />
          <span className="italic text-[#B7653D]">INSPIRED BY TODAY.</span>
        </h2>

        <div className="ornament-divider my-4 opacity-60">
          <div className="ornament-line w-12" />
          <div className="ornament-diamond" />
          <div className="ornament-line w-12" />
        </div>

        <div className="space-y-4 text-sm text-[#C8BBB0] font-light leading-relaxed my-6 max-h-[50vh] overflow-y-auto pr-2">
          <p>
            Noor was conceived as a homage to Jaipur’s grand hospitality and the royal culinary legacies of Rajasthan, merged with contemporary culinary artistry.
          </p>
          <p>
            Our master chefs spend months researching royal archives, ancestral home recipes, and ancient spice combinations from across India — bringing back forgotten techniques like dunghar charcoal smoking, earthen pot dum cooking, and saffron infusions.
          </p>
          <p>
            Every detail at Noor — from the hand-carved stone archways and brass candle lanterns to custom stoneware plates crafted by Jaipur artisans — is designed to immerse our guests in intimate, understated luxury.
          </p>
        </div>

        <div className="pt-4 border-t border-[#D9A45B]/15 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#B7653D] hover:bg-[#8E3F27] text-[#F5EBDD] text-xs tracking-[0.2em] uppercase transition-colors border-none cursor-pointer"
          >
            BACK TO STORY
          </button>
        </div>

      </div>
    </div>
  );
}
