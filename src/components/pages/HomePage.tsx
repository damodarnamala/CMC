import React from 'react';
import { Hero } from '../Hero.tsx';
import { AboutStudio } from '../AboutStudio.tsx';
import { FeatureFilmSpotlight } from '../FeatureFilmSpotlight.tsx';
import { BusinessCapabilities } from '../BusinessCapabilities.tsx';
import { CompanyVision } from '../CompanyVision.tsx';
import { GlobalOutlookMap } from '../GlobalOutlookMap.tsx';
import { DevelopmentSlate } from '../DevelopmentSlate.tsx';
import { ProducersLeadership } from '../ProducersLeadership.tsx';
import { AppRoute } from '../../types.ts';
import { Handshake, ArrowRight, Film, ShieldCheck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: AppRoute) => void;
  onOpenCinemaModal: (videoId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenCinemaModal }) => {
  return (
    <div>
      {/* 1. Hero Section: Refined Motion, Vertical Brand Stack, Exact Blueprint Tagline & CTAs */}
      <Hero
        variant="wallpaper"
        onOpenCinemaModal={onOpenCinemaModal}
        onNavigate={onNavigate}
      />

      <Hero
        variant="intro"
        onOpenCinemaModal={onOpenCinemaModal}
        onNavigate={onNavigate}
      />

      {/* Leadership & collaborators follows the tagline block */}
      <ProducersLeadership
        onNavigate={onNavigate}
      />

      {/* 2. Company Introduction: BUILDING AN ENTERTAINMENT COMPANY FOR THE NEXT GENERATION */}
      <AboutStudio
        onNavigate={onNavigate}
      />

      {/* 3. Featured Production (Proof of Execution): IIT Krishnamurthy with verified facts & 3 platforms */}
      <FeatureFilmSpotlight
        onOpenCinemaModal={onOpenCinemaModal}
        onNavigate={onNavigate}
      />

      {/* 4. Business Model / Capabilities: Original Development, Production, Rights, Global Partnerships */}
      <BusinessCapabilities
        onNavigate={onNavigate}
      />

      {/* 5. Company Vision: FROM STORIES TO FRANCHISES */}
      <CompanyVision
        onNavigate={onNavigate}
      />

      {/* 6. Global Outlook: INDIAN STORIES. GLOBAL AUDIENCES (Abstract World Map) */}
      <GlobalOutlookMap />

      {/* 7. Active Development Slate: Untitled CMC Feature */}
      <DevelopmentSlate
        onNavigate={onNavigate}
      />


      {/* 9. Partnership CTA Section: "Build With Us" */}
      <section className="py-20 sm:py-24 relative z-10 cmc-rule-top bg-[#080a0e] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 cmc-eyebrow mb-4">
            <span className="w-5 h-px bg-amber-400" />
            <span>PARTNERSHIP INVITATION</span>
            <span className="w-5 h-px bg-amber-400" />
          </div>

          <div className="jitter-perspective mb-6">
            <h2 className="cmc-title tilted-text-item text-white leading-tight">
              BUILD WITH <span className="cmc-gold-text">CRYSTOLYTE MEDIA</span>
            </h2>
          </div>

          <p className="max-w-2xl mx-auto text-slate-200 text-lg md:text-xl md:text-lg font-normal leading-relaxed mb-10">
            We invite aligned financial institutions, co-producers, global streaming networks, and creative partners to collaborate on our active development slate and transmedia intellectual properties.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onNavigate('partnerships')}
              className="cmc-btn cmc-btn-primary w-full sm:w-auto px-8 py-4 rounded-xl text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-2xl cursor-pointer"
            >
              <Handshake className="w-4 h-4" />
              <span>Partner With CMC</span>
            </button>
            <button
              onClick={() => onNavigate('slate')}
              className="cmc-btn cmc-btn-secondary whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
            >
              <Film className="w-4 h-4 text-amber-400" />
              <span>Explore Development Slate</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
