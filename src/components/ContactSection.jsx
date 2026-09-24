import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="section-ivory py-24 md:py-36 relative overflow-hidden border-t border-[#17110E]/10">
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="label-subtitle text-[#8E3F27]">FIND NOOR</span>
          <h2 className="headline-large text-[#17110E]">
            LOCATION <br />
            <span className="highlight text-[#8E3F27]">& HOURS.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Details Card Left */}
          <div className="lg:col-span-5 bg-[#EDE0CE] border border-[#17110E]/15 p-8 md:p-10 shadow-xl space-y-8">
            
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-[#8E3F27] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg tracking-[0.15em] text-[#17110E] uppercase mb-1">
                  JAIPUR, RAJASTHAN
                </h4>
                <p className="text-xs text-[#655B54] font-light leading-relaxed">
                  Johari Bazaar Road, Pink City Heritage Quarter<br />
                  Jaipur, Rajasthan 302003, India
                </p>
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#8E3F27] block mt-1">
                  [DEMO ADDRESS]
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-[#17110E]/10" />

            <div className="flex items-start gap-4">
              <Clock size={20} className="text-[#8E3F27] shrink-0 mt-1" />
              <div>
                <h4 className="font-serif text-lg tracking-[0.15em] text-[#17110E] uppercase mb-1">
                  OPENING HOURS
                </h4>
                <p className="text-xs text-[#655B54] font-light leading-relaxed">
                  DINNER SERVICE: 7:00 PM – 11:30 PM<br />
                  TUESDAY THROUGH SUNDAY (CLOSED MONDAYS)
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-[#17110E]/10" />

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#8E3F27]" />
                <span className="text-xs text-[#17110E] font-medium tracking-[0.1em]">+91 141 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#8E3F27]" />
                <span className="text-xs text-[#17110E] font-medium tracking-[0.1em]">concierge@noor.com</span>
              </div>
            </div>

          </div>

          {/* Interactive Stylized Dark Map Placeholder Right */}
          <div className="lg:col-span-7 h-[420px] bg-[#17110E] border border-[#17110E]/20 relative overflow-hidden rounded-sm shadow-2xl flex items-center justify-center text-center p-8">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#D9A45B_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="relative z-10 max-w-sm">
              <div className="w-12 h-12 rounded-full bg-[#B7653D]/20 border border-[#B7653D] flex items-center justify-center mx-auto mb-4 text-[#D9A45B] animate-bounce">
                <MapPin size={24} />
              </div>
              <h3 className="font-serif text-2xl tracking-[0.2em] text-[#F5EBDD] uppercase mb-2">
                NOOR JAIPUR
              </h3>
              <p className="text-xs text-[#C8BBB0] font-light mb-4">
                Located in the heart of Pink City, surrounded by historichavelis & royal heritage.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="link-editorial text-[#D9A45B] border-[#D9A45B] text-xs no-underline inline-flex"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
