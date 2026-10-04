/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutStudio } from './components/AboutStudio.tsx';
import { FeatureFilmSpotlight } from './components/FeatureFilmSpotlight.tsx';
import { ProducersLeadership } from './components/ProducersLeadership.tsx';
import { DevelopmentSlate } from './components/DevelopmentSlate.tsx';
import { Footer } from './components/Footer.tsx';
import { CinemaModal } from './components/CinemaModal.tsx';

export default function App() {
  const [cinemaModalOpen, setCinemaModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 selection:bg-amber-400 selection:text-black">
      {/* Fixed Top Bar */}
      <Header />

      <main>
        {/* Kinetic Hero Section with Hyperframes 3D Motion */}
        <Hero
          onOpenCinemaModal={() => setCinemaModalOpen(true)}
        />

        {/* Studio Ethos & Vision */}
        <AboutStudio />

        {/* Debut Feature Spotlight: IIT Krishnamurthy */}
        <FeatureFilmSpotlight
          onOpenCinemaModal={() => setCinemaModalOpen(true)}
        />

        {/* The Producers & Director Leadership */}
        <ProducersLeadership />

        {/* Multi-Genre Development Slate */}
        <DevelopmentSlate />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive 4K Cinema Player Modal */}
      <CinemaModal
        isOpen={cinemaModalOpen}
        onClose={() => setCinemaModalOpen(false)}
      />
    </div>
  );
}
