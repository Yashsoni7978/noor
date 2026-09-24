import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryItems = [
    {
      src: '/assets/gallery-1.jpg',
      title: 'Artisanal Plating',
      subtitle: 'Kesar Paneer Tikka with microgreens',
      span: 'col-span-1 md:col-span-2 row-span-1',
      aspect: 'aspect-[4/3]',
    },
    {
      src: '/assets/gallery-2.jpg',
      title: 'Warm Candlelight',
      subtitle: 'Arched dining alcoves in Jaipur evening lighting',
      span: 'col-span-1 md:col-span-2 row-span-1',
      aspect: 'aspect-[4/3]',
    },
    {
      src: '/assets/gallery-3.jpg',
      title: 'Craft Cocktail',
      subtitle: 'Spiced saffron infused botanical cocktail',
      span: 'col-span-1 md:col-span-2 row-span-1',
      aspect: 'aspect-[4/3]',
    },
    {
      src: '/assets/gallery-4.jpg',
      title: 'Intimate Dining Table',
      subtitle: 'Table setting with copper lamps & botanical floral arrangement',
      span: 'col-span-1 md:col-span-3 row-span-1',
      aspect: 'aspect-[16/9]',
    },
    {
      src: '/assets/gallery-5.jpg',
      title: 'Finishing Touches',
      subtitle: 'Chef precision plating with roasted whole spices',
      span: 'col-span-1 md:col-span-3 row-span-1',
      aspect: 'aspect-[16/9]',
    },
  ];

  return (
    <section id="gallery" className="section-dark py-24 md:py-36 border-t border-[#D9A45B]/10">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="label-subtitle">GALLERY</span>
            <h2 className="headline-large text-[#F5EBDD]">
              MOMENTS <br />
              <span className="highlight text-[#B7653D]">AT NOOR.</span>
            </h2>
          </div>
          <div className="text-xs tracking-[0.2em] text-[#C8BBB0] font-light uppercase border-l border-[#D9A45B]/20 pl-4">
            A VISUAL STUDY OF CUISINE, LIGHT & SPACE IN JAIPUR
          </div>
        </div>

        {/* Asymmetric Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`${item.span} relative overflow-hidden group cursor-pointer bg-[#211611] border border-[#D9A45B]/15 ${item.aspect}`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17110E]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[0.6rem] tracking-[0.25em] uppercase text-[#D9A45B] block mb-1">
                  NOOR JAIPUR
                </span>
                <h4 className="font-serif text-lg text-[#F5EBDD] tracking-[0.1em] uppercase">
                  {item.title}
                </h4>
                <p className="text-xs text-[#C8BBB0] font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-[#17110E]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-fadeIn">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 text-[#F5EBDD] hover:text-[#D9A45B] bg-transparent border-none p-2 cursor-pointer z-50"
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>

          <button
            onClick={() =>
              setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1))
            }
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-[#F5EBDD] hover:text-[#D9A45B] bg-[#211611]/80 border border-[#D9A45B]/20 p-3 rounded-full cursor-pointer z-50"
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() =>
              setActiveImageIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0))
            }
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-[#F5EBDD] hover:text-[#D9A45B] bg-[#211611]/80 border border-[#D9A45B]/20 p-3 rounded-full cursor-pointer z-50"
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="max-h-[75vh] overflow-hidden border border-[#D9A45B]/30 shadow-2xl mb-4">
              <img
                src={galleryItems[activeImageIndex].src}
                alt={galleryItems[activeImageIndex].title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="text-center max-w-md">
              <h3 className="font-serif text-2xl text-[#F5EBDD] tracking-[0.15em] uppercase mb-1">
                {galleryItems[activeImageIndex].title}
              </h3>
              <p className="text-xs text-[#D9A45B] tracking-[0.15em] uppercase font-light">
                {galleryItems[activeImageIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
