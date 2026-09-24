import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar({ onOpenReservation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'OUR STORY', href: '#story' },
    { name: 'MENU', href: '#menu' },
    { name: 'EXPERIENCES', href: '#experiences' },
    { name: 'PRIVATE DINING', href: '#private-dining' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#17110E]/95 backdrop-blur-md py-4 border-b border-[#D9A45B]/15 shadow-2xl'
          : 'bg-gradient-to-b from-[#17110E]/80 to-transparent py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Left */}
        <a href="#hero" className="flex flex-col group text-left no-underline">
          <span className="font-serif text-2xl tracking-[0.25em] text-[#F5EBDD] font-light group-hover:text-[#D9A45B] transition-colors">
            NOOR
          </span>
          <span className="text-[0.55rem] tracking-[0.3em] uppercase text-[#B7653D] font-medium -mt-1">
            CONTEMPORARY INDIAN CUISINE
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[0.72rem] tracking-[0.2em] font-medium text-[#F5EBDD]/80 hover:text-[#D9A45B] transition-colors no-underline uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-6">
          <button
            onClick={onOpenReservation}
            className="text-[0.7rem] tracking-[0.18em] uppercase font-medium text-[#D9A45B] hover:text-[#F5EBDD] transition-colors flex items-center gap-2 border-b border-[#D9A45B]/40 pb-0.5 cursor-pointer bg-transparent"
          >
            <Calendar size={12} className="text-[#B7653D]" />
            <span>RESERVE</span>
          </button>
          
          <div className="h-4 w-px bg-[#D9A45B]/20" />
          
          <div className="flex items-center gap-1.5 text-[0.7rem] tracking-[0.25em] text-[#F5EBDD]/90 font-light">
            <span className="inline-block w-1.5 h-1.5 rotate-45 bg-[#B7653D]" />
            <span>JAIPUR</span>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={onOpenReservation}
            className="text-[0.68rem] tracking-[0.15em] uppercase text-[#D9A45B] border border-[#D9A45B]/30 px-3 py-1.5 rounded-sm bg-[#211611]"
          >
            RESERVE
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#F5EBDD] p-2 focus:outline-none bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-[#17110E]/98 backdrop-blur-xl z-40 flex flex-col justify-between p-8 border-t border-[#D9A45B]/20 animate-fadeIn lg:hidden">
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-[0.2em] text-[#F5EBDD] hover:text-[#D9A45B] no-underline border-b border-[#D9A45B]/10 pb-3"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#D9A45B]/20 flex justify-between items-center text-xs tracking-[0.2em] text-[#C8BBB0]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#B7653D]" />
              <span>JAIPUR, INDIA</span>
            </div>
            <span>7:00 PM - 11:30 PM</span>
          </div>
        </div>
      )}
    </header>
  );
}
