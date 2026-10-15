import React from 'react';
import { PenTool, Film, Key, Globe2, ArrowRight } from 'lucide-react';
import { AppRoute } from '../types.ts';

interface BusinessCapabilitiesProps {
  onNavigate?: (route: AppRoute) => void;
}

export const BusinessCapabilities: React.FC<BusinessCapabilitiesProps> = ({ onNavigate }) => {
  const capabilities = [
    {
      num: "01",
      title: "Original Development",
      subtitle: "Story Incubation & Screenwriter Labs",
      description: "We cultivate high-concept scripts natively developed from character-driven premises. By championing bold directorial visions and disciplined screenplay iterations, we engineer stories that connect emotionally with contemporary audiences.",
      tag: "Development Pipeline",
      route: 'slate' as AppRoute
    },
    {
      num: "02",
      title: "Production & Financing",
      subtitle: "Disciplined Capital & 4K Technical Master",
      description: "Our production model pairs rigorous financial governance with cinema-grade execution. From sound design to high dynamic range color grading, every asset is mastered to tier-one global streaming and theatrical standards.",
      tag: "Production Integrity",
      route: 'studio' as AppRoute
    },
    {
      num: "03",
      title: "Rights & Distribution",
      subtitle: "100% Core IP Retention",
      description: "Unlike work-for-hire producers, Crystolyte Media builds balance sheet equity through long-term intellectual property retention. We license multi-window rights across worldwide OTT, linear television, and master music publishing.",
      tag: "Rights Portfolio",
      route: 'ip-rights' as AppRoute
    },
    {
      num: "04",
      title: "Global Partnerships",
      subtitle: "Co-Productions & Remake Licensing",
      description: "We actively collaborate with domestic studios, international financiers, and global distributors to scale Indian stories into transmedia formats, episodic adaptations, and multi-language remakes across worldwide territories.",
      tag: "Institutional Alliances",
      route: 'partnerships' as AppRoute
    }
  ];

  return (
    <section className="py-20 sm:py-24 relative z-10 border-t border-white/5 bg-[#0b0e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-14 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 cmc-eyebrow mb-3">
              <span className="w-5 h-px bg-amber-400" />
              <span>BUSINESS MODEL & CAPABILITIES</span>
            </div>

            <div className="jitter-perspective">
              <h2 className="tilted-text-item cmc-title leading-tight">
                AN INTEGRATED <br />
                <span className="cmc-gold-text">ENTERTAINMENT ENGINE</span>
              </h2>
            </div>
          </div>

          <p className="text-slate-300 text-sm max-w-md font-normal leading-relaxed">
            Structuring the infrastructure to incubate original stories, allocate capital with precision, and retain enduring rights that compound in enterprise value.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between group hover:border-amber-400/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans font-semibold text-2xl font-bold text-amber-200 tracking-tight">
                    {cap.num}
                  </span>
                  <span className="cmc-tag px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {cap.tag}
                  </span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-amber-200 transition-colors">
                  {cap.title}
                </h3>
                <p className="cmc-eyebrow mb-4">
                  {cap.subtitle}
                </p>

                <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              {onNavigate && (
                <button
                  onClick={() => onNavigate(cap.route)}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors pt-4 border-t border-white/5 cursor-pointer text-left"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
