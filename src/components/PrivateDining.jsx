import React from 'react';

export default function PrivateDining({ onOpenReservation }) {
  return (
    <section id="private-dining" className="section-dark py-24 md:py-36 border-t border-[#D9A45B]/10 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="label-subtitle">PRIVATE DINING</span>
            
            <h2 className="headline-large text-[#F5EBDD] mb-6">
              A TABLE <br />
              <span className="highlight text-[#B7653D]">OF YOUR OWN.</span>
            </h2>

            <p className="text-[#C8BBB0] text-base md:text-lg leading-relaxed mb-8 font-light">
              Curated spaces for intimate dinners, celebrations and meaningful gatherings. Enjoy a custom tasting menu surrounded by Jaipur elegance and personalized butler service.
            </p>

            <div className="space-y-4 mb-10 border-l border-[#D9A45B]/30 pl-4 text-xs tracking-[0.15em] text-[#F5EBDD]/80 font-light uppercase">
              <p>• SEATING UP TO 18 GUESTS</p>
              <p>• EXCLUSIVE TASTING MENUS</p>
              <p>• DEDICATED SOMMELIER & HOST</p>
            </div>

            <div>
              <button
                onClick={onOpenReservation}
                className="link-editorial bg-transparent border-none cursor-pointer p-0"
              >
                <span>EXPLORE PRIVATE DINING</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-b-[160px] rounded-t-md shadow-2xl border border-[#D9A45B]/20">
              <img
                src="/assets/private-dining.jpg"
                alt="NOOR Private Dining Room"
                className="w-full h-[420px] md:h-[520px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17110E] via-transparent to-transparent opacity-50" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
