import React from 'react';

export default function JaipurSection() {
  return (
    <section id="jaipur" className="section-ivory-sand py-24 md:py-36 relative overflow-hidden border-t border-[#17110E]/10">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-5">
            <span className="label-subtitle text-[#8E3F27]">JAIPUR</span>
            
            <h2 className="headline-large text-[#17110E] mb-6">
              FROM JAIPUR, <br />
              <span className="highlight text-[#8E3F27]">WITH LOVE.</span>
            </h2>

            <div className="w-16 h-px bg-[#8E3F27] my-6 opacity-40" />

            <p className="text-[#655B54] text-base md:text-lg leading-relaxed mb-8 font-light">
              Inspired by the city's heritage, colours and culture, Noor brings a piece of Jaipur to every table — from handcrafted brassware to traditional earthenware and royal spices.
            </p>

            <div className="flex items-center gap-4 text-xs tracking-[0.25em] text-[#8E3F27] font-medium uppercase">
              <span className="w-2 h-2 rotate-45 bg-[#8E3F27]" />
              <span>THE PINK CITY HERITAGE</span>
            </div>
          </div>

          {/* Right Side Large Jaipur Fort/Palace Photography */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-t-[140px] rounded-b-md shadow-2xl border border-[#17110E]/15">
              <img
                src="/assets/jaipur.jpg"
                alt="Jaipur Royal Architecture Sunset"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17110E]/40 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
