import React from 'react';
import { IP_RIGHTS_PILLARS } from '../../data/studioData.ts';
import { ShieldCheck, Layers, Globe2, Music, Clapperboard, ArrowRight, FileCheck2 } from 'lucide-react';
import { AppRoute } from '../../types.ts';

interface IpRightsPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const IpRightsPage: React.FC<IpRightsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 cmc-eyebrow mb-3">
            <span className="w-5 h-px bg-amber-400" />
            <span>INTELLECTUAL PROPERTY & RIGHTS</span>
          </div>

          <div className="jitter-perspective mb-6">
            <h1 className="cmc-title tilted-text-item text-white leading-tight">
              STORIES ARE ONLY <br />
              <span className="cmc-gold-text">THE BEGINNING.</span>
            </h1>
          </div>

          <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed">
            Positioned as a long-term rights-holding enterprise. We build lasting value by originating, structuring, and retaining comprehensive intellectual property across feature film, episodic television, master soundtracks, and international formats.
          </p>
        </div>

        {/* IP Principles Manifesto */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="cmc-eyebrow block mb-2">
                Core IP Thesis
              </span>
              <h2 className="cmc-title text-white mb-4">
                The Architecture of Intellectual Property Retention
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed mb-4">
                Traditional production cycles in Indian cinema often trade long-term balance sheet equity for immediate production commissions. At Crystolyte Media, our business model operates in reverse: we invest in script incubation, own our master negative rights, and license distribution windows with strict term limits.
              </p>
              <p className="text-slate-300 text-sm sm:text-sm font-normal leading-relaxed">
                This discipline guarantees that our characters, story worlds, musical compositions, and franchise opportunities remain under unified studio control for multi-decade exploitation.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-black/50 border border-white/5 space-y-3 text-xs">
              <div className="cmc-eyebrow flex items-center gap-2 pb-2 border-b border-white/10">
                <FileCheck2 className="w-4 h-4" />
                <span>Rights Governance</span>
              </div>
              <p className="text-slate-300">
                <strong className="text-white">Clean Chain of Title:</strong> All screenplays registered with the Screenwriters Association and copyright authorities.
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Direct Licensing:</strong> Bilateral contracts with platforms (Prime Video, Aha) avoiding third-party syndication leakage.
              </p>
            </div>
          </div>
        </div>

        {/* The 5 Pillars of IP & Rights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {IP_RIGHTS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-card rounded-2xl p-7 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 text-xs text-slate-300 mb-4 pb-3 border-b border-white/10">
                  <span className="cmc-eyebrow min-w-0">{pillar.subtitle}</span>
                  <span className="cmc-tag shrink-0 whitespace-nowrap px-3 py-1 rounded-full border border-white/10 bg-white/5">{pillar.status}</span>
                </div>

                <h3 className="font-cinzel text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-sm font-normal leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="cmc-label block">
                    Key Assets Under Governance:
                  </span>
                  {pillar.keyAssets.map((asset, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span>{asset}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => onNavigate('partnerships')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-200 transition-colors cursor-pointer"
                >
                  <span>Inquire licensing terms</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Rights Licensing Gateway */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-cinzel text-xl font-bold text-white mb-2">
              Corporate Rights & Format Licensing Inquiries
            </h3>
            <p className="text-slate-300 text-sm sm:text-sm font-normal">
              Are you an international distributor, regional film producer, or streaming commissioner seeking adaptation rights or territorial distribution windows? Contact our Rights & Business Affairs division.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="btn-gold-luxury px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold whitespace-nowrap cursor-pointer shadow-lg"
          >
            Submit Rights Inquiry
          </button>
        </div>

      </div>
    </div>
  );
};
