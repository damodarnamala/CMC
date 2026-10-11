import React from 'react';
import { Film, Clapperboard, Sparkles, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { SLATE_PROJECTS } from '../data/studioData.ts';
import { AppRoute } from '../types.ts';

interface DevelopmentSlateProps {
  onNavigate?: (route: AppRoute) => void;
  isStandalone?: boolean;
}

export const DevelopmentSlate: React.FC<DevelopmentSlateProps> = ({ onNavigate, isStandalone = false }) => {
  return (
    <section id="slate" className={`py-20 sm:py-24 relative z-10 ${!isStandalone ? 'border-t border-white/5 bg-[#090b10]' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-amber-400" />
            <span>DEVELOPMENT SLATE</span>
          </div>

          <div className="jitter-perspective mb-4">
            <h2 className="tilted-text-item font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
              THE NEXT CHAPTER
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Following the release of <strong className="text-white font-medium">IIT Krishnamurthy</strong>, Crystolyte Media is incubating an active pipeline of narrative-driven feature films and episodic series. Each property is developed in-house with disciplined budget structuring and uncompromised intellectual property ownership.
          </p>
        </div>

        {/* Pipeline Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {SLATE_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className={`glass-card rounded-3xl p-6 sm:p-8 border flex flex-col justify-between group transition-all duration-300 ${
                idx === 0 ? 'border-amber-500/35 hover:border-amber-400/60' : 'border-white/10 hover:border-white/25'
              }`}
            >
              <div>
                {/* Status & Code */}
                <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-white/10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/30">
                    {proj.status}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {proj.internalCode}
                  </span>
                </div>

                {/* Title & Format */}
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-4">
                  {proj.format} · {proj.genre}
                </p>

                {/* Synopsis */}
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {proj.synopsis}
                </p>

                {/* Stage Matrix */}
                <div className="p-4 rounded-xl bg-[#08090d]/80 border border-white/5 space-y-2.5 text-xs text-slate-300 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Pipeline Stage</span>
                    <span className="font-semibold text-amber-400 text-right">{proj.stage}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Distribution Scope</span>
                    <span className="font-semibold text-slate-200 text-right">{proj.scope}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Audio / Score</span>
                    <span className="font-semibold text-slate-200 text-right">{proj.musicStyle}</span>
                  </div>
                </div>
              </div>

              {/* Confidential Notice */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Confidential Package</span>
                </span>
                <span className="font-medium text-slate-300">{proj.timeline}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Slate Disclaimer / Co-Production Gateway */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-cinzel text-base sm:text-lg font-bold text-white mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Institutional Slate Governance</span>
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light max-w-2xl">
              Crystolyte Media maintains strict confidentiality regarding casting attachments and detailed screenplays. Script bibles, lookbooks, and financial models are shared exclusively under bilateral non-disclosure agreements with verified co-producers, OTT networks, and institutional capital partners.
            </p>
          </div>

          {onNavigate && (
            <button
              onClick={() => onNavigate('partnerships')}
              className="btn-gold-luxury px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold whitespace-nowrap cursor-pointer shrink-0 shadow-lg"
            >
              Request Slate Prospectus
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
