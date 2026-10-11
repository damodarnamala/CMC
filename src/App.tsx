/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { CinemaModal } from './components/CinemaModal.tsx';
import { HomePage } from './components/pages/HomePage.tsx';
import { StudioPage } from './components/pages/StudioPage.tsx';
import { ProductionsPage } from './components/pages/ProductionsPage.tsx';
import { TitleDetailPage } from './components/pages/TitleDetailPage.tsx';
import { SlatePage } from './components/pages/SlatePage.tsx';
import { MusicPage } from './components/pages/MusicPage.tsx';
import { IpRightsPage } from './components/pages/IpRightsPage.tsx';
import { LeadershipPage } from './components/pages/LeadershipPage.tsx';
import { NewsroomPage } from './components/pages/NewsroomPage.tsx';
import { PartnershipsPage } from './components/pages/PartnershipsPage.tsx';
import { ContactPage } from './components/pages/ContactPage.tsx';
import { AppRoute } from './types.ts';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>('home');
  const [cinemaModalOpen, setCinemaModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string>('ez6iLxDgdBU');

  // Parse route from URL pathname or hash
  const parseRoute = (): AppRoute => {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    const hash = window.location.hash.replace(/^#\/?/, '');
    const target = path || hash;

    if (target === 'studio') return 'studio';
    if (target === 'productions/iit-krishnamurthy' || target === 'iit-krishnamurthy') return 'productions/iit-krishnamurthy';
    if (target === 'productions') return 'productions';
    if (target === 'slate') return 'slate';
    if (target === 'music') return 'music';
    if (target === 'ip-rights') return 'ip-rights';
    if (target === 'leadership') return 'leadership';
    if (target === 'newsroom') return 'newsroom';
    if (target === 'partnerships') return 'partnerships';
    if (target === 'contact') return 'contact';

    return 'home';
  };

  useEffect(() => {
    setCurrentRoute(parseRoute());

    const handlePopState = () => {
      setCurrentRoute(parseRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: AppRoute) => {
    setCurrentRoute(route);
    const newPath = route === 'home' ? '/' : `/${route}`;
    try {
      window.history.pushState({}, '', newPath);
    } catch {
      // Fallback for sandboxed frames if pushState is restricted
      window.location.hash = `#${route}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCinema = (videoId: string = 'ez6iLxDgdBU') => {
    setActiveVideoId(videoId);
    setCinemaModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 selection:bg-amber-400 selection:text-black flex flex-col justify-between">
      {/* 10-Item Primary Navigation Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenCinemaModal={handleOpenCinema}
          />
        )}

        {currentRoute === 'studio' && (
          <StudioPage
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'productions' && (
          <ProductionsPage
            onNavigate={handleNavigate}
            onOpenCinemaModal={handleOpenCinema}
          />
        )}

        {currentRoute === 'productions/iit-krishnamurthy' && (
          <TitleDetailPage
            onNavigate={handleNavigate}
            onOpenCinemaModal={handleOpenCinema}
          />
        )}

        {currentRoute === 'slate' && (
          <SlatePage
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'music' && (
          <MusicPage
            onNavigate={handleNavigate}
            onOpenCinemaModal={handleOpenCinema}
          />
        )}

        {currentRoute === 'ip-rights' && (
          <IpRightsPage
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'leadership' && (
          <LeadershipPage
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'newsroom' && (
          <NewsroomPage
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'partnerships' && (
          <PartnershipsPage
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Institutional Studio Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Global 4K Cinema Modal Player */}
      <CinemaModal
        isOpen={cinemaModalOpen}
        initialVideoId={activeVideoId}
        onClose={() => setCinemaModalOpen(false)}
      />
    </div>
  );
}
