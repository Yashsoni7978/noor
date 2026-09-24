import React from 'react';

export default function RestaurantMoments() {
  const moments = [
    {
      src: '/assets/philosophy.jpg',
      caption: 'SEASONAL CULINARY PERSPECTIVE',
    },
    {
      src: '/assets/dining-exp.jpg',
      caption: 'EVENING DINING AMBIENCE',
    },
    {
      src: '/assets/story.jpg',
      caption: 'ARCHITECTURAL CANDLELIGHT',
    },
  ];

  return (
    <section className="section-dark py-20 border-t border-[#D9A45B]/10 bg-[#1F1713]">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="label-subtitle text-[#D9A45B]">RESTAURANT MOMENTS</span>
          <h3 className="font-serif text-3xl md:text-4xl text-[#F5EBDD] font-light tracking-[0.1em] uppercase">
            GOOD FOOD. GOOD COMPANY. <br />
            <span className="italic text-[#B7653D]">A REASON TO RETURN.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moments.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] overflow-hidden border border-[#D9A45B]/15 mb-4 group">
                <img
                  src={m.src}
                  alt={m.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-90"
                />
              </div>
              <span className="text-[0.6rem] tracking-[0.25em] text-[#C8BBB0] font-light uppercase">
                {m.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
