import React from 'react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-ivory py-24 md:py-36 relative overflow-hidden">
      {/* Background Subtle Line Art Motif */}
      <div className="absolute left-6 top-12 w-64 h-64 pointer-events-none opacity-20 z-0">
        <svg
          className="w-full h-full text-[#8E3F27]"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40,160 Q70,90 140,50 Q100,120 40,160 Z" stroke="currentColor" strokeWidth="1.2" />
          <path d="M60,130 Q90,70 160,30" stroke="currentColor" strokeWidth="0.8" />
          <path d="M80,100 Q110,60 170,20" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 pr-0 lg:pr-8">
            <span className="label-subtitle">OUR PHILOSOPHY</span>
            
            <h2 className="headline-large text-[#17110E] mb-6">
              TRADITION <br />
              MEETS <br />
              <span className="highlight text-[#8E3F27]">TOMORROW.</span>
            </h2>

            <div className="w-16 h-px bg-[#8E3F27] my-8 opacity-40" />

            <p className="text-[#655B54] text-base md:text-lg leading-relaxed max-w-lg font-light">
              At Noor, we celebrate India's culinary heritage with a modern perspective — timeless flavours, thoughtful ingredients and immersive experiences that bring people together.
            </p>

            <div className="mt-10 flex items-center gap-3 text-xs tracking-[0.2em] text-[#8E3F27] uppercase font-medium">
              <span className="w-2 h-2 rotate-45 bg-[#8E3F27]" />
              <span>JAIPUR CULINARY PERSPECTIVE</span>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative flex justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Asymmetric Framed Image */}
              <div className="overflow-hidden rounded-t-[140px] rounded-b-md shadow-2xl border border-[#17110E]/10">
                <img
                  src="/assets/philosophy.jpg"
                  alt="Noor Culinary Plating"
                  className="w-full h-[400px] md:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Side Vertical Editorial Badge */}
              <div className="absolute -right-4 md:-right-8 top-12 bg-[#EDE0CE] border border-[#17110E]/10 py-6 px-3 flex flex-col items-center gap-4 text-[0.6rem] tracking-[0.3em] uppercase text-[#8E3F27] font-medium shadow-lg">
                <span>FLAVOURS</span>
                <span className="w-1 h-1 rotate-45 bg-[#8E3F27]" />
                <span>CRAFTED</span>
                <span className="w-1 h-1 rotate-45 bg-[#8E3F27]" />
                <span>WITH</span>
                <span className="w-1 h-1 rotate-45 bg-[#8E3F27]" />
                <span>SOUL</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
