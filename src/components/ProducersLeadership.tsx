import React from 'react';
import { Clapperboard } from 'lucide-react';
import { PRODUCERS } from '../data/studioData.ts';

export const ProducersLeadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 sm:py-24 relative z-10 border-t border-white/5 bg-[#0e1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-amber-400" />
            <span>LEADERSHIP & PRODUCERS</span>
            <span className="w-5 h-px bg-amber-400" />
          </div>

          <div className="jitter-perspective mb-3">
            <h2 className="tilted-text-item font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
              THE PRODUCERS
            </h2>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm font-light">
            Crystolyte Media Creations is founded and led by Prasad Nekuri and Praneeth Nekuri, who serve as the producers of the company.
          </p>
        </div>

        {/* Clean 2-Column Producer Grid (Mobile Optimized) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          
          {/* Producer 1: Prasad Nekuri */}
          <div className="glass-card rounded-3xl p-6 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 via-slate-900 to-black border border-amber-500/40 flex items-center justify-center font-cinzel font-bold text-2xl text-amber-400 shadow-md shrink-0">
                  PN
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-wider text-right">
                  Producer & Founder
                </span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1">
                Prasad Nekuri
              </h3>
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-5 sm:mb-6 font-medium">
                Crystolyte Media Creations
              </span>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {PRODUCERS[0].bio}
              </p>

              <div className="p-4 rounded-xl bg-[#08090d]/80 border border-white/5 space-y-2.5 text-xs text-slate-300 mb-6">
                {PRODUCERS[0].highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Clapperboard className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 text-xs text-slate-400 font-medium">
              <span>CMC Executive Production Desk • Hyderabad</span>
            </div>
          </div>

          {/* Producer 2: Praneeth Nekuri (With Uploaded Photo & Verified Links) */}
          <div className="glass-card rounded-3xl p-6 sm:p-9 flex flex-col justify-between border-amber-500/35 relative">
            <div className="absolute top-4 right-4 z-20">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                {/* Praneeth Nekuri Portrait Photo */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl bg-slate-900 shrink-0 relative group/photo">
                  <img
                    src="/praneeth.png"
                    alt="Praneeth Nekuri - Producer & Founder"
                    className="w-full h-full object-cover object-top group-hover/photo:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/praneeth.jpg')) {
                        target.src = '/praneeth.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-wider text-right">
                  Producer & Founder
                </span>
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1">
                Praneeth Nekuri
              </h3>
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-5 sm:mb-6 font-medium">
                Crystolyte Media Creations
              </span>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {PRODUCERS[1].bio}
              </p>

              <div className="p-4 rounded-xl bg-[#08090d]/80 border border-white/5 space-y-2.5 text-xs text-slate-300 mb-6">
                {PRODUCERS[1].highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Clapperboard className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Social Channels for Praneeth Nekuri (Touch Friendly) */}
            <div className="pt-6 border-t border-white/5">
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                Connect with Praneeth Nekuri:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <a
                  href={PRODUCERS[1].socialLinks?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-xl bg-[#131824] hover:bg-[#0077b5]/20 border border-white/10 hover:border-[#0077b5]/60 text-xs text-slate-200 hover:text-white transition-all flex items-center justify-center sm:justify-start gap-2 min-h-[42px]"
                >
                  <i className="fa-brands fa-linkedin text-[#0077b5]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={PRODUCERS[1].socialLinks?.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-xl bg-[#131824] hover:bg-[#E1306C]/20 border border-white/10 hover:border-[#E1306C]/60 text-xs text-slate-200 hover:text-white transition-all flex items-center justify-center sm:justify-start gap-2 min-h-[42px]"
                >
                  <i className="fa-brands fa-instagram text-[#E1306C]" />
                  <span>Instagram</span>
                </a>

                <a
                  href={PRODUCERS[1].socialLinks?.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-xl bg-[#131824] hover:bg-[#1877F2]/20 border border-white/10 hover:border-[#1877F2]/60 text-xs text-slate-200 hover:text-white transition-all flex items-center justify-center sm:justify-start gap-2 min-h-[42px]"
                >
                  <i className="fa-brands fa-facebook text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
