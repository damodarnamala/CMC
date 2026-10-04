import React from 'react';
import { Lightbulb, Film, Users, CheckCircle2 } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData.ts';

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-[#0e1117]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-5 h-px bg-amber-400" />
              <span>ABOUT THE PRODUCTION HOUSE</span>
            </div>

            <div className="jitter-perspective mb-4">
              <h2 className="tilted-text-item font-cinzel text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                CRAFTING STORIES WITH <br />
                <span className="gold-luxury-text">CINEMATIC EXCELLENCE</span>
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
              {STUDIO_INFO.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Headquarters: Hyderabad
              </span>
              <span className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Focus: Telugu & Pan-South Cinema
              </span>
              <span className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                Distribution: Theatrical & Global OTT
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card rounded-2xl p-8 sm:p-10 border-l-4 border-l-amber-500">
              <h3 className="font-cinzel text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                {STUDIO_INFO.vision}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> Narrative Rigor
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> Contemporary Color Science
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> New Directorial Voices
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h4 className="font-cinzel text-lg font-bold text-white mb-2.5">Innovative Storytelling</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Championing smart, original screenplays with high-concept hooks, relatable human motivations, and gripping pacing.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <Film className="w-6 h-6" />
            </div>
            <h4 className="font-cinzel text-lg font-bold text-white mb-2.5">High Production Values</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Deploying premier cinematography, disciplined technical execution, and meticulous sound engineering for maximum fidelity.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="font-cinzel text-lg font-bold text-white mb-2.5">Emerging Talent Platform</h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Actively cultivating a collaborative environment for fresh screenwriters, breakthrough directors, and rising actors.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
