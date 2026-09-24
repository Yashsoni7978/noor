import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Story from './components/Story';
import SignatureDishes from './components/SignatureDishes';
import MenuSection from './components/MenuSection';
import DiningExperience from './components/DiningExperience';
import PrivateDining from './components/PrivateDining';
import ChefSection from './components/ChefSection';
import JaipurSection from './components/JaipurSection';
import ExperiencesSection from './components/ExperiencesSection';
import GallerySection from './components/GallerySection';
import RestaurantMoments from './components/RestaurantMoments';
import ReservationsSection from './components/ReservationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Modals
import ReservationModal from './components/ReservationModal';
import MenuModal from './components/MenuModal';
import StoryModal from './components/StoryModal';
import ChefModal from './components/ChefModal';
import ExperienceModal from './components/ExperienceModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [reservationData, setReservationData] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isChefOpen, setIsChefOpen] = useState(false);

  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleOpenReservationWithData = (data) => {
    setReservationData(data);
    setIsReservationOpen(true);
  };

  const handleOpenExperience = (exp) => {
    setSelectedExperience(exp);
    setIsExperienceOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#17110E] text-[#F5EBDD] font-sans antialiased selection:bg-[#B7653D] selection:text-[#F5EBDD]">
      {/* Navigation Header */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Page Sections */}
      <main>
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: Philosophy (Warm Ivory) */}
        <Philosophy />

        {/* Section 03: Story (Dark) */}
        <Story onOpenStoryModal={() => setIsStoryOpen(true)} />

        {/* Section 04: Signature Dishes (Dark) */}
        <SignatureDishes onOpenMenu={() => setIsMenuOpen(true)} />

        {/* Section 05: Menu (Warm Ivory) */}
        <MenuSection onOpenFullMenu={() => setIsMenuOpen(true)} />

        {/* Section 06: Dining Experience (Warm Ivory) */}
        <DiningExperience onOpenExperienceModal={() => handleOpenExperience(null)} />

        {/* Section 07: Private Dining (Dark) */}
        <PrivateDining onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Section 08: Chef (Split / Dark / Warm Ivory) */}
        <ChefSection onOpenChefModal={() => setIsChefOpen(true)} />

        {/* Section 09: Jaipur (Warm Sand) */}
        <JaipurSection />

        {/* Section 10: Experiences (Dark) */}
        <ExperiencesSection onSelectExperience={handleOpenExperience} />

        {/* Section 11: Gallery (Dark) */}
        <GallerySection />

        {/* Section 12: Restaurant Moments (Magazine Spread) */}
        <RestaurantMoments />

        {/* Section 13: Reservations (Dark) */}
        <ReservationsSection onOpenReservationWithData={handleOpenReservationWithData} />

        {/* Section 14: Contact / Location (Warm Ivory) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        initialData={reservationData}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      <ChefModal
        isOpen={isChefOpen}
        onClose={() => setIsChefOpen(false)}
      />

      <ExperienceModal
        isOpen={isExperienceOpen}
        onClose={() => setIsExperienceOpen(false)}
        experienceData={selectedExperience}
        onOpenReservation={() => setIsReservationOpen(true)}
      />
    </div>
  );
}
