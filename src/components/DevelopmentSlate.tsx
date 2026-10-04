import React from 'react';
import { Film, Clapperboard, Sparkles, ArrowRight, Music, Calendar } from 'lucide-react';
import { SLATE_PROJECTS } from '../data/studioData.ts';

export const DevelopmentSlate: React.FC = () => {
  const project = SLATE_PROJECTS[0];

  return (
    <section id="slate" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-amber-400" />
            <span>UPCOMING CMC VENTURE</span>
          </div>

          <div className="jitter-perspective mb-3">
            <h2 className="tilted-text-item font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
              PROJECTS IN DEVELOPMENT
            </h2>
          </div>

          <p className="text-slate-400 text-sm font-light leading-relaxed">
            Following its acclaimed debut feature IIT Krishnamurthy, Crystolyte Media Creations is currently in active pre-production for its second feature film venture.
          </p>
        </div>

        {/* Single Movie Spotlight: Production-2 Drama */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border-amber-500/30 relative overflow-hidden group">
            
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-black">
                    Production-2
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-300">
                    Genre: Drama
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  In Active Pre-Production
                </span>
              </div>

              <div className="mb-6">
                <h3 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white mb-2">
                  Production-2 <span className="text-amber-400 font-light">| Drama</span>
                </h3>
                <span className="text-xs uppercase tracking-widest text-slate-400 block font-medium">
                  Crystolyte Media Creations • Second Feature Presentation
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-3xl">
                {project.synopsis}
              </p>

              {/* Movie Matrix Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-[#08090d]/80 border border-white/5 text-xs text-slate-300 mb-8">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    Genre
                  </span>
                  <span className="font-semibold text-white text-sm">
                    Drama
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    Current Stage
                  </span>
                  <span className="font-semibold text-amber-400 text-sm">
                    Screenplay & Pre-Production
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                    Theatrical Scope
                  </span>
                  <span className="font-semibold text-white text-sm">
                    Theatrical & Global OTT
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-400 gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-amber-400" />
                  <span>Producers: <strong className="text-white">Prasad Nekuri & Praneeth Nekuri</strong></span>
                </div>
                <div className="text-amber-400 font-semibold font-mono tracking-wider">
                  CMC Slate • Production-2
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
