import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenReservation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-dark border-t border-[#D9A45B]/15 pt-20 pb-12 bg-[#17110E]">
      <div className="container">
        
        {/* Top Footer Main Brand Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-[#D9A45B]/10 gap-8">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl tracking-[0.25em] text-[#F5EBDD] font-extralight uppercase">
              NOOR
            </h2>
            <p className="text-xs md:text-sm tracking-[0.4em] text-[#B7653D] uppercase font-light mt-1">
              CONTEMPORARY INDIAN CUISINE
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#D9A45B]">
            <span className="w-2 h-2 rotate-45 bg-[#B7653D]" />
            <span>JAIPUR, RAJASTHAN</span>
          </div>
        </div>

        {/* Links Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-[#D9A45B]/10">
          
          {/* Main Nav */}
          <div className="md:col-span-8 flex flex-wrap gap-x-8 gap-y-4">
            <a href="#hero" className="text-xs tracking-[0.2em] uppercase text-[#F5EBDD]/80 hover:text-[#D9A45B] no-underline">HOME</a>
            <a href="#story" className="text-xs tracking-[0.2em] uppercase text-[#F5EBDD]/80 hover:text-[#D9A45B] no-underline">OUR STORY</a>
            <a href="#menu" className="text-xs tracking-[0.2em] uppercase text-[#F5EBDD]/80 hover:text-[#D9A45B] no-underline">MENU</a>
            <a href="#experiences" className="text-xs tracking-[0.2em] uppercase text-[#F5EBDD]/80 hover:text-[#D9A45B] no-underline">EXPERIENCES</a>
            <a href="#private-dining" className="text-xs tracking-[0.2em] uppercase text-[#F5EBDD]/80 hover:text-[#D9A45B] no-underline">PRIVATE DINING</a>
            <a href="#gallery" className="text-xs tracking-[0.2em] uppercase text-[#F5EBDD]/80 hover:text-[#D9A45B] no-underline">GALLERY</a>
            <a href="#contact" className="text-xs tracking-[0.2em] uppercase text-[#F5EBDD]/80 hover:text-[#D9A45B] no-underline">CONTACT</a>
          </div>

          {/* Secondary Links */}
          <div className="md:col-span-4 flex flex-wrap md:justify-end gap-x-6 gap-y-3">
            <button onClick={onOpenReservation} className="text-xs tracking-[0.2em] uppercase text-[#D9A45B] hover:text-[#F5EBDD] bg-transparent border-none cursor-pointer">
              RESERVATIONS
            </button>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-xs tracking-[0.2em] uppercase text-[#C8BBB0] hover:text-[#D9A45B] no-underline">INSTAGRAM</a>
            <a href="#privacy" className="text-xs tracking-[0.2em] uppercase text-[#C8BBB0] hover:text-[#D9A45B] no-underline">PRIVACY</a>
            <a href="#terms" className="text-xs tracking-[0.2em] uppercase text-[#C8BBB0] hover:text-[#D9A45B] no-underline">TERMS</a>
          </div>

        </div>

        {/* Bottom Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[0.65rem] tracking-[0.2em] uppercase text-[#C8BBB0]/60 gap-4">
          <p>© 2026 NOOR CONTEMPORARY INDIAN CUISINE. ALL RIGHTS RESERVED. [DEMO WEBSITE]</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#D9A45B] hover:text-[#F5EBDD] bg-transparent border-none cursor-pointer transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
