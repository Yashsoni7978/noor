import React from 'react';

export default function ExperiencesSection({ onSelectExperience }) {
  const experiences = [
    {
      title: 'DINING',
      desc: 'Full a la carte & seasonal tasting menu in our main hall.',
      image: '/assets/dining-exp.jpg',
      tag: 'DAILY DINNER',
    },
    {
      title: 'PRIVATE DINING',
      desc: 'Secluded opulent sanctuary for intimate private gatherings.',
      image: '/assets/private-dining.jpg',
      tag: 'BY RESERVATION',
    },
    {
      title: 'CELEBRATIONS',
      desc: 'Bespoke menus, floral art & personalized hospitality for milestones.',
      image: '/assets/story.jpg',
      tag: 'EVENTS & FEASTS',
    },
    {
      title: 'CURATED EXPERIENCES',
      desc: 'Chef table tasting sessions, Rajasthani spice masterclasses & wine pairings.',
      image: '/assets/philosophy.jpg',
      tag: 'SPECIAL SESSIONS',
    },
  ];

  return (
    <section className="section-dark py-24 md:py-36 border-t border-[#D9A45B]/10">
      <div className="container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="label-subtitle">EXPERIENCES</span>
          <h2 className="headline-large text-[#F5EBDD]">
            MORE WAYS <br />
            TO <span className="highlight text-[#B7653D]">EXPERIENCE NOOR.</span>
          </h2>
        </div>

        {/* 4 Image-led Editorial Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onClick={() => onSelectExperience(exp)}
              className="group cursor-pointer bg-[#211611] border border-[#D9A45B]/15 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#D9A45B]/40 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#17110E]/80 backdrop-blur-sm text-[0.55rem] tracking-[0.2em] uppercase text-[#D9A45B] px-2.5 py-1 border border-[#D9A45B]/20">
                    {exp.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl tracking-[0.15em] text-[#F5EBDD] uppercase mb-2 group-hover:text-[#D9A45B] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-[#C8BBB0] font-light">
                    {exp.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#D9A45B]/10 text-xs tracking-[0.15em] uppercase text-[#D9A45B]">
                <span>EXPLORE</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
