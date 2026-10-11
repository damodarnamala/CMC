import React from 'react';
import { Lightbulb, Film, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { STUDIO_INFO, PRODUCERS } from '../data/studioData.ts';
import { AppRoute } from '../types.ts';

interface AboutStudioProps {
  onNavigate?: (route: AppRoute) => void;
}

export const AboutStudio: React.FC<AboutStudioProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 sm:py-24 relative z-10 border-t border-white/5 bg-[#0e1117]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Company Introduction Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-5 h-px bg-amber-400" />
              <span>COMPANY INTRODUCTION</span>
            </div>

            <div className="jitter-perspective mb-5">
              <h2 className="tilted-text-item font-cinzel text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                BUILDING AN ENTERTAINMENT COMPANY <br />
                <span className="gold-luxury-text">FOR THE NEXT GENERATION</span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
              Founded in Hyderabad by producers <strong className="text-white font-medium">Prasad Nekuri</strong> and{' '}
              <strong className="text-white font-medium">Praneeth Nekuri</strong>, Crystolyte Media is focused on the long-term vision to develop distinctive stories, build valuable intellectual property, and cross languages and borders.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed mb-8">
              Rather than transient packaging, we treat storytelling as an institutional discipline: developing screenplays with narrative precision, exercising strict production governance, and retaining master rights across streaming, theatrical, music, and territorial syndication.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Founded 2020 · Hyderabad
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                100% Core IP Retention
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Global Streaming Reach
              </span>
            </div>
          </div>

          {/* Right Panel: Approach & Governance */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 relative">
              <h3 className="font-cinzel text-xl font-bold text-white mb-3">Our Core Mandate</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                {STUDIO_INFO.vision}
              </p>
              
              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Legal Entity</span>
                  <span className="font-medium text-white">{STUDIO_INFO.legalName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Headquarters</span>
                  <span className="font-medium text-white">{STUDIO_INFO.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Capital Structure</span>
                  <span className="font-medium text-amber-400">Independent Slate Equity</span>
                </div>
              </div>

              {onNavigate && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    onClick={() => onNavigate('studio')}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <span>Read Full Studio Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3 Operational Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card rounded-2xl p-7 sm:p-8 border border-white/10 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h4 className="font-cinzel text-base sm:text-lg font-bold text-white mb-2">Original Storytelling</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Cultivating authorial voices and intricate screenplays that balance regional specificity with global narrative momentum.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-7 sm:p-8 border border-white/10 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
              <Film className="w-5 h-5" />
            </div>
            <h4 className="font-cinzel text-base sm:text-lg font-bold text-white mb-2">Production Discipline</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Enforcing transparent financial budgeting and tier-one technical execution across 4K UHD color science, sound design, and master delivery.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-7 sm:p-8 border border-white/10 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-cinzel text-base sm:text-lg font-bold text-white mb-2">IP & Rights Ownership</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Structuring long-term enterprise value by owning core intellectual property, remake rights, episodic adaptations, and music publishing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
