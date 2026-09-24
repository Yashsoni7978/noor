import React from 'react';

export default function Story({ onOpenStoryModal }) {
  return (
    <section id="story" className="section-dark py-24 md:py-36 border-t border-[#D9A45B]/10 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="label-subtitle">OUR STORY</span>
            
            <h2 className="headline-large text-[#F5EBDD] mb-6">
              ROOTED <br />
              IN TRADITION. <br />
              <span className="highlight text-[#B7653D]">INSPIRED</span> <br />
              <span className="highlight text-[#B7653D]">BY TODAY.</span>
            </h2>

            <p className="text-[#C8BBB0] text-base md:text-lg leading-relaxed mb-8 font-light">
              From the royal kitchens of Rajasthan to the evolving tastes of a new generation, Noor is a tribute to India's rich culinary journey.
            </p>

            <div>
              <button
                onClick={onOpenStoryModal}
                className="link-editorial bg-transparent border-none cursor-pointer p-0"
              >
                <span>OUR STORY</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Architectural Interior Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden rounded-t-[180px] rounded-b-md shadow-2xl border border-[#D9A45B]/20">
              <img
                src="/assets/story.jpg"
                alt="NOOR Restaurant Interior Jaipur"
                className="w-full h-[420px] md:h-[540px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17110E] via-transparent to-transparent opacity-60" />
            </div>

            {/* Subtle Overlay Annotation */}
            <div className="absolute bottom-6 left-6 bg-[#211611]/90 backdrop-blur-md px-6 py-4 border border-[#D9A45B]/20 max-w-xs hidden sm:block">
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#D9A45B] block mb-1">ARCHITECTURAL HERITAGE</span>
              <p className="text-xs text-[#F5EBDD]/80 font-light">Arched alcoves, warm candlelights & Rajasthani motifs.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
