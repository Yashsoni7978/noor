import React from 'react';

export default function ChefSection({ onOpenChefModal }) {
  return (
    <section className="section-dark py-24 md:py-36 border-t border-[#D9A45B]/10 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden border border-[#D9A45B]/20 shadow-2xl">
          
          {/* Left: Chef Portrait */}
          <div className="lg:col-span-6 relative min-h-[400px]">
            <img
              src="/assets/chef.jpg"
              alt="NOOR Executive Chef"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#EDE0CE] hidden lg:block opacity-30" />
          </div>

          {/* Right: Ivory Editorial Card Content */}
          <div className="lg:col-span-6 bg-[#EDE0CE] text-[#17110E] p-8 md:p-14 flex flex-col justify-between">
            <div>
              <span className="label-subtitle text-[#8E3F27]">THE CHEF</span>
              
              <h2 className="headline-large text-[#17110E] mb-6">
                THE HAND <br />
                <span className="highlight text-[#8E3F27]">BEHIND THE PLATE.</span>
              </h2>

              <p className="text-[#655B54] text-base leading-relaxed mb-8 font-light">
                Guided by a deep respect for Indian flavours and a passion for innovation, our chef creates dishes that are both nostalgic and new — honoring ancient spice routes while mastering contemporary techniques.
              </p>
            </div>

            {/* Chef Hands Detail Image & CTA */}
            <div className="pt-6 border-t border-[#17110E]/10 flex items-center justify-between">
              <div>
                <button
                  onClick={onOpenChefModal}
                  className="link-editorial text-[#17110E] border-b-[#8E3F27] bg-transparent cursor-pointer p-0"
                >
                  <span>MEET OUR CHEF</span>
                  <span>→</span>
                </button>
              </div>

              {/* Small Detail Photo of Chef Plating */}
              <div className="w-20 h-20 overflow-hidden border border-[#17110E]/15 rounded-sm">
                <img
                  src="/assets/chef-hands.jpg"
                  alt="Chef Precision Plating Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
