import React from 'react';

export default function DiningExperience({ onOpenExperienceModal }) {
  return (
    <section id="experiences" className="section-ivory py-24 md:py-36 relative overflow-hidden border-t border-[#17110E]/10">
      
      {/* Delicate Botanical Line Art SVG */}
      <div className="absolute right-6 bottom-8 w-64 h-64 pointer-events-none opacity-20 z-0">
        <svg
          className="w-full h-full text-[#8E3F27]"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M160,40 Q130,110 60,150 Q100,80 160,40 Z" stroke="currentColor" strokeWidth="1.2" />
          <path d="M140,70 Q110,130 40,170" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Side: Large Cinematic Restaurant Interior Photograph */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden rounded-t-[160px] rounded-b-md shadow-2xl border border-[#17110E]/10">
              <img
                src="/assets/dining-exp.jpg"
                alt="NOOR Dining Experience Atmosphere"
                className="w-full h-[450px] md:h-[540px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17110E]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Side: Text & Editorial Content */}
          <div className="lg:col-span-5 flex flex-col justify-center pl-0 lg:pl-6">
            <span className="label-subtitle">THE DINING EXPERIENCE</span>
            
            <h2 className="headline-large text-[#17110E] mb-6">
              MORE THAN <br />
              <span className="highlight text-[#8E3F27]">A MEAL.</span>
            </h2>

            <div className="w-16 h-px bg-[#8E3F27] my-6 opacity-40" />

            <p className="text-[#655B54] text-base md:text-lg leading-relaxed mb-8 font-light">
              Intimate dinners, lively gatherings or special celebrations — Noor offers a setting where great food, warm hospitality and beautiful spaces come together.
            </p>

            <div>
              <button
                onClick={onOpenExperienceModal}
                className="link-editorial bg-transparent border-none cursor-pointer p-0"
              >
                <span>EXPLORE THE EXPERIENCE</span>
                <span>→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
