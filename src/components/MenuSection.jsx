import React from 'react';

export default function MenuSection({ onOpenFullMenu }) {
  const categories = [
    {
      title: 'SMALL PLATES',
      subtitle: 'Delicate bites & street classics elevated',
      image: '/assets/menu-small-plates.jpg',
      itemCount: '8 SELECTIONS',
    },
    {
      title: 'TANDOOR',
      subtitle: 'Charcoal roasted meats & spiced cottage cheese',
      image: '/assets/menu-tandoor.jpg',
      itemCount: '10 SELECTIONS',
    },
    {
      title: 'DESSERTS',
      subtitle: 'Reimagined traditional sweet endings',
      image: '/assets/menu-desserts.jpg',
      itemCount: '6 SELECTIONS',
    },
  ];

  return (
    <section id="menu" className="section-ivory py-24 md:py-36 relative overflow-hidden">
      <div className="container relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="label-subtitle">OUR MENU</span>
            <h2 className="headline-large text-[#17110E]">
              A CULINARY <br />
              <span className="highlight text-[#8E3F27]">JOURNEY.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-[#655B54] text-sm md:text-base font-light max-w-md ml-auto mb-6">
              From small plates to grand feasts, our menu takes you through diverse flavours of India with a modern, refined touch.
            </p>
            <button
              onClick={onOpenFullMenu}
              className="link-editorial bg-transparent border-none cursor-pointer p-0"
            >
              <span>VIEW FULL MENU</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Visual Category Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={onOpenFullMenu}
              className="group cursor-pointer bg-[#EDE0CE] border border-[#17110E]/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17110E]/90 via-[#17110E]/20 to-transparent" />
                
                <div className="absolute top-4 right-4 bg-[#17110E]/80 backdrop-blur-md px-3 py-1 text-[0.6rem] tracking-[0.2em] uppercase text-[#D9A45B]">
                  {cat.itemCount}
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-serif text-2xl tracking-[0.15em] text-[#F5EBDD] uppercase mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#F5EBDD]/70 font-light">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
