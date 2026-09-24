import React from 'react';

export default function SignatureDishes({ onOpenMenu }) {
  const dishes = [
    {
      name: 'KESAR PANEER TIKKA',
      desc: 'Saffron | Smoked Yogurt | Herbs',
      image: '/assets/dish-kesar.jpg',
      tag: 'TANDOOR',
    },
    {
      name: 'DUM GOSHT RAVIOLI',
      desc: 'Slow Cooked | Spices | Truffle',
      image: '/assets/dish-dum.jpg',
      tag: 'SIGNATURE MAINS',
    },
    {
      name: 'GULAB DECONSTRUCTED',
      desc: 'Rose | Pistachio | Cardamom',
      image: '/assets/dish-gulab.jpg',
      tag: 'DESSERT',
    },
  ];

  return (
    <section className="section-dark py-24 md:py-36 border-t border-[#D9A45B]/10">
      <div className="container">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="label-subtitle">SIGNATURE DISHES</span>
            <h2 className="headline-large text-[#F5EBDD]">
              FLAVOURS <br />
              THAT <span className="highlight text-[#B7653D]">STAY WITH YOU.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-[#C8BBB0] text-sm md:text-base font-light max-w-sm ml-auto mb-6">
              A menu that honours tradition, reimagined with creativity and the finest ingredients.
            </p>
            <button
              onClick={onOpenMenu}
              className="link-editorial bg-transparent border-none cursor-pointer p-0"
            >
              <span>EXPLORE MENU</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Dish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-[#211611]/80 border border-[#D9A45B]/15 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#D9A45B]/40"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-[#17110E]/80 backdrop-blur-sm text-[0.6rem] tracking-[0.2em] uppercase text-[#D9A45B] px-2.5 py-1 border border-[#D9A45B]/20">
                  {dish.tag}
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="font-serif text-xl tracking-[0.15em] text-[#F5EBDD] mb-2 uppercase">
                  {dish.name}
                </h3>
                <p className="text-xs tracking-[0.15em] text-[#C8BBB0] font-light uppercase">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
