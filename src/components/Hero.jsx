import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#17110E]">
      {/* High-Resolution Luminous Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-bg.jpg"
          alt="NOOR Contemporary Indian Cuisine Jaipur"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-108 saturate-110 transition-all duration-1000 scale-100"
          style={{ imageRendering: 'high-quality' }}
        />
        
        {/* Ambient Gold Radial Glow Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(217,164,91,0.12)_0%,_transparent_70%)] pointer-events-none" />

        {/* Minimal Vignette Overlay (Slight Top/Bottom dark gradient only for navbar/footer integration) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#17110E]/40 via-transparent to-[#17110E]/50 pointer-events-none" />
      </div>

      {/* Accessible H1 for SEO */}
      <h1 className="sr-only">NOOR - Contemporary Indian Cuisine in Jaipur</h1>

      {/* Side Annotations - Left */}
      <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-10 opacity-90">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#D9A45B]/80 to-transparent" />
        <div className="side-annotation text-[0.62rem] tracking-[0.3em] flex flex-col gap-4 text-center text-[#F5EBDD] drop-shadow-md">
          <span>MODERN</span>
          <span>FLAVOURS</span>
          <span>TIMELESS</span>
          <span>HOSPITALITY</span>
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#D9A45B]/80 to-transparent" />
      </div>

      {/* Side Annotations - Right */}
      <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-10 opacity-90">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#D9A45B]/80 to-transparent" />
        <div className="side-annotation text-[0.62rem] tracking-[0.3em] flex flex-col gap-4 text-center text-[#F5EBDD] drop-shadow-md">
          <span>FOOD</span>
          <span>PEOPLE</span>
          <span>CULTURE</span>
          <span>JAIPUR</span>
        </div>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#D9A45B]/80 to-transparent" />
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-80">
        <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#F5EBDD] font-light drop-shadow-md">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#D9A45B] via-[#D9A45B]/80 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
