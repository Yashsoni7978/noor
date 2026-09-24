import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function MenuModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('SMALL PLATES');

  if (!isOpen) return null;

  const menuData = {
    'SMALL PLATES': [
      {
        name: 'KESAR PANEER TIKKA',
        price: '₹ 750',
        desc: 'Charcoal grilled artisan paneer, Kashmiri saffron marinade, smoked yogurt emulsion, garden mint microgreens.',
        diet: 'VEG',
        special: true,
      },
      {
        name: 'AVOCADO & MATHRI CHAAT',
        price: '₹ 680',
        desc: 'Crisp Mathri tartlets, Hass avocado mousse, tamarind gel, pomegranate pearls, nylon sev.',
        diet: 'VEG',
      },
      {
        name: 'TRUFFLE KACHORI BITES',
        price: '₹ 820',
        desc: 'Mini lentil kachoris filled with black truffle paste, spiced green pea mash, hung curd reduction.',
        diet: 'VEG',
        special: true,
      },
      {
        name: 'RAJASTHANI LAMB GALOUTI',
        price: '₹ 950',
        desc: 'Melt-in-mouth smoked lamb patties, Mathania chili oil, saffron varqi paratha, pickled shallots.',
        diet: 'NON-VEG',
      },
    ],
    'TANDOOR': [
      {
        name: 'DUM GOSHT RAVIOLI',
        price: '₹ 1,150',
        desc: 'Handmade pasta stuffed with slow-cooked spiced mutton bhuna, marrow jus, truffle oil float.',
        diet: 'NON-VEG',
        special: true,
      },
      {
        name: 'MURGH ANGAARA TIKKA',
        price: '₹ 890',
        desc: 'Free-range chicken morsels steeped in degi mirch & hung yogurt, charred over sal wood coal.',
        diet: 'NON-VEG',
      },
      {
        name: 'SMOKED BROCCOLI MALAI',
        price: '₹ 720',
        desc: 'Tandoor roasted florets, yellow cheddar reduction, crushed cardamom, roasted pumpkin seeds.',
        diet: 'VEG',
      },
      {
        name: 'CHARRED TIGER PRAWNS',
        price: '₹ 1,450',
        desc: 'Jumbo prawns marinated in crushed curry leaves, raw mango reduction, burnt lemon butter.',
        diet: 'NON-VEG',
        special: true,
      },
    ],
    'MAINS': [
      {
        name: 'NOOR LAAL MAAS',
        price: '₹ 1,250',
        desc: 'Traditional Mathania red chili lamb curry, slow simmering, smoked charcoal dunghar finish.',
        diet: 'NON-VEG',
        special: true,
      },
      {
        name: 'PANEER KOFTA VELVET',
        price: '₹ 850',
        desc: 'Pistachio stuffed chenna dumplings, velvety cashew & roasted tomato gravy, edible gold leaf.',
        diet: 'VEG',
      },
      {
        name: 'DAL NOOR SIGNATURE',
        price: '₹ 750',
        desc: 'Black lentils slow cooked for 36 hours over wood fire, churned white butter, kasuri methi cream.',
        diet: 'VEG',
      },
      {
        name: 'KASHMIRI GUCHHI BIRYANI',
        price: '₹ 1,350',
        desc: 'Long-grain basmati dum biryani with rare Himalayan Morel mushrooms, saffron essence, burani raita.',
        diet: 'VEG',
        special: true,
      },
    ],
    'DESSERTS': [
      {
        name: 'GULAB DECONSTRUCTED',
        price: '₹ 650',
        desc: 'Rose petal gel, pistachio sponge, cardamom mousse, nitrogen frozen rabri pearls.',
        diet: 'VEG',
        special: true,
      },
      {
        name: 'GHEVAR MILLE-FEUILLE',
        price: '₹ 680',
        desc: 'Crisp honey honeycomb disc, saffron malai cream, caramelized almonds, gold leaf.',
        diet: 'VEG',
      },
      {
        name: 'SMOKED CHOCOLATE KULFI',
        price: '₹ 580',
        desc: 'Dark Valrhona chocolate infused with cloves, candied orange peel, hazelnut crumble.',
        diet: 'VEG',
      },
    ],
    'BEVERAGES': [
      {
        name: 'JAIPUR ROSE ELIXIR',
        price: '₹ 550',
        desc: 'Organic damask rose extract, sparkling tonic, cardamom bitters, edible rose dust.',
        diet: 'VEG',
      },
      {
        name: 'SMOKED SAFFRON SOUR',
        price: '₹ 650',
        desc: 'Kashmiri saffron syrup, fresh lime juice, vegan egg white foam, oak smoke dome.',
        diet: 'VEG',
        special: true,
      },
      {
        name: 'MASALA CHAI HIGHBALL',
        price: '₹ 480',
        desc: 'Cold brewed spiced CTC tea concentrate, ginger elixir, club soda, star anise.',
        diet: 'VEG',
      },
    ],
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#17110E]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#211611] border border-[#D9A45B]/30 p-6 md:p-12 shadow-2xl rounded-sm my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#F5EBDD]/70 hover:text-[#D9A45B] bg-transparent border-none cursor-pointer p-1"
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-10">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#D9A45B] block mb-1">
            CULINARY SELECTIONS
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-[0.15em] text-[#F5EBDD] uppercase">
            THE NOOR MENU
          </h2>
          <div className="ornament-divider my-3 opacity-60">
            <div className="ornament-line w-12" />
            <div className="ornament-diamond" />
            <div className="ornament-line w-12" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10 border-b border-[#D9A45B]/15 pb-4">
          {Object.keys(menuData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 border-none cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#B7653D] text-[#F5EBDD]'
                  : 'bg-transparent text-[#F5EBDD]/70 hover:text-[#D9A45B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dishes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[60vh] overflow-y-auto pr-2">
          {menuData[activeTab].map((item, idx) => (
            <div key={idx} className="border-b border-[#D9A45B]/10 pb-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.diet === 'VEG' ? 'bg-emerald-500' : 'bg-red-500'
                      }`}
                      title={item.diet}
                    />
                    <h4 className="font-serif text-xl tracking-[0.1em] text-[#F5EBDD] uppercase">
                      {item.name}
                    </h4>
                    {item.special && (
                      <span className="flex items-center gap-1 text-[0.55rem] tracking-[0.15em] uppercase text-[#D9A45B] bg-[#D9A45B]/10 border border-[#D9A45B]/30 px-1.5 py-0.5 rounded-xs">
                        <Sparkles size={10} />
                        CHEF CHOICE
                      </span>
                    )}
                  </div>
                  <span className="font-serif text-lg text-[#D9A45B] font-light">
                    {item.price}
                  </span>
                </div>

                <p className="text-xs text-[#C8BBB0] font-light leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note at bottom */}
        <div className="mt-8 pt-4 border-t border-[#D9A45B]/15 text-center text-[0.65rem] tracking-[0.2em] text-[#C8BBB0]/60 uppercase">
          Taxes extra as applicable • Please inform your server of any dietary allergies
        </div>

      </div>
    </div>
  );
}
