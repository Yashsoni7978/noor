import React, { useState } from 'react';
import { ArrowRight, Calendar, Users, Clock } from 'lucide-react';

export default function ReservationsSection({ onOpenReservationWithData }) {
  const [date, setDate] = useState('2026-09-25');
  const [guests, setGuests] = useState('2');
  const [time, setTime] = useState('19:00');

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenReservationWithData({ date, guests, time });
  };

  return (
    <section id="reservations" className="section-dark py-24 md:py-36 border-t border-[#D9A45B]/15 relative overflow-hidden bg-[#17110E]">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline & Copy Left */}
          <div className="lg:col-span-5">
            <span className="label-subtitle">RESERVATIONS</span>
            
            <h2 className="headline-large text-[#F5EBDD] mb-6">
              YOUR TABLE <br />
              <span className="highlight text-[#B7653D]">AWAITS.</span>
            </h2>

            <p className="text-[#C8BBB0] text-base md:text-lg leading-relaxed mb-6 font-light">
              Join us for an unforgettable dining experience in the heart of Jaipur. We recommend booking in advance for dinner service.
            </p>

            <div className="text-xs tracking-[0.2em] uppercase text-[#D9A45B]/80 font-light flex items-center gap-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#B7653D]" />
              <span>VALET PARKING & Butler Hospitality AVAILABLE</span>
            </div>
          </div>

          {/* Reservation Inline Form Right */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#211611] p-6 md:p-8 border border-[#D9A45B]/30 shadow-2xl rounded-sm flex flex-col md:flex-row items-stretch gap-4"
            >
              {/* Date */}
              <div className="flex-1 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#D9A45B]/15 pb-4 md:pb-0 md:pr-4">
                <label className="text-[0.6rem] tracking-[0.25em] text-[#D9A45B] uppercase font-medium mb-1.5 flex items-center gap-2">
                  <Calendar size={12} className="text-[#B7653D]" />
                  <span>DATE</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="bg-transparent text-[#F5EBDD] font-serif text-lg tracking-[0.1em] border-none focus:outline-none cursor-pointer"
                  required
                />
              </div>

              {/* Guests */}
              <div className="flex-1 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#D9A45B]/15 pb-4 md:pb-0 md:pr-4">
                <label className="text-[0.6rem] tracking-[0.25em] text-[#D9A45B] uppercase font-medium mb-1.5 flex items-center gap-2">
                  <Users size={12} className="text-[#B7653D]" />
                  <span>GUESTS</span>
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent text-[#F5EBDD] font-serif text-lg tracking-[0.1em] border-none focus:outline-none cursor-pointer"
                >
                  <option value="1" className="bg-[#211611] text-[#F5EBDD]">1 Guest</option>
                  <option value="2" className="bg-[#211611] text-[#F5EBDD]">2 Guests</option>
                  <option value="3" className="bg-[#211611] text-[#F5EBDD]">3 Guests</option>
                  <option value="4" className="bg-[#211611] text-[#F5EBDD]">4 Guests</option>
                  <option value="6" className="bg-[#211611] text-[#F5EBDD]">6 Guests</option>
                  <option value="8+" className="bg-[#211611] text-[#F5EBDD]">8+ (Private Room)</option>
                </select>
              </div>

              {/* Time */}
              <div className="flex-1 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#D9A45B]/15 pb-4 md:pb-0 md:pr-4">
                <label className="text-[0.6rem] tracking-[0.25em] text-[#D9A45B] uppercase font-medium mb-1.5 flex items-center gap-2">
                  <Clock size={12} className="text-[#B7653D]" />
                  <span>TIME</span>
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="bg-transparent text-[#F5EBDD] font-serif text-lg tracking-[0.1em] border-none focus:outline-none cursor-pointer"
                >
                  <option value="19:00" className="bg-[#211611] text-[#F5EBDD]">7:00 PM</option>
                  <option value="19:30" className="bg-[#211611] text-[#F5EBDD]">7:30 PM</option>
                  <option value="20:00" className="bg-[#211611] text-[#F5EBDD]">8:00 PM</option>
                  <option value="20:30" className="bg-[#211611] text-[#F5EBDD]">8:30 PM</option>
                  <option value="21:00" className="bg-[#211611] text-[#F5EBDD]">9:00 PM</option>
                  <option value="21:30" className="bg-[#211611] text-[#F5EBDD]">9:30 PM</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center pt-2 md:pt-0">
                <button
                  type="submit"
                  className="w-14 h-14 rounded-full border border-[#D9A45B]/40 hover:border-[#D9A45B] bg-[#17110E] text-[#D9A45B] hover:text-[#F5EBDD] hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
                  title="Reserve Table"
                >
                  <ArrowRight size={22} />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
