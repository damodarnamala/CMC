import React from 'react';
import { Globe, MapPin, Radio, ShieldCheck } from 'lucide-react';

export const GlobalOutlookMap: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 relative z-10 border-t border-white/5 bg-[#090b10] overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-amber-400" />
            <span>GLOBAL DISTRIBUTION & FOOTPRINT</span>
            <span className="w-5 h-px bg-amber-400" />
          </div>

          <div className="jitter-perspective mb-4">
            <h2 className="tilted-text-item font-cinzel text-3xl sm:text-5xl font-extrabold text-white tracking-wide">
              INDIAN STORIES. <span className="gold-luxury-text">GLOBAL AUDIENCES.</span>
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Headquartered in Hyderabad, Crystolyte Media crafts narrative-driven properties calibrated for worldwide digital syndication. Through tier-one platforms—including Amazon Prime Video, regional giant Aha, and global YouTube 4K—our debut feature reaches viewers in over 200 countries and territories.
          </p>
        </div>

        {/* Elegant Abstract World Map Visualization */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 relative overflow-hidden mb-12">
          
          {/* World Vector Blueprint Graphic */}
          <div className="relative w-full aspect-[2/1] min-h-[300px] max-h-[500px] flex items-center justify-center">
            
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full opacity-35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Abstract Longitude & Latitude Grid */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.75" />
                </pattern>
                <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              <rect width="1000" height="500" fill="url(#grid)" />

              {/* Simplified Geometric Continental Outlines */}
              {/* North America */}
              <path
                d="M 120 100 L 220 80 L 290 120 L 260 210 L 200 240 L 150 200 L 110 150 Z"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.2"
              />
              {/* South America */}
              <path
                d="M 240 260 L 300 270 L 320 350 L 270 430 L 230 360 L 220 290 Z"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.2"
              />
              {/* Europe & UK */}
              <path
                d="M 440 90 L 520 80 L 540 140 L 480 180 L 430 140 Z"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.2"
              />
              {/* Africa */}
              <path
                d="M 460 200 L 560 200 L 580 290 L 540 390 L 470 330 L 440 230 Z"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.2"
              />
              {/* Asia & India */}
              <path
                d="M 560 90 L 780 70 L 840 160 L 760 240 L 680 230 L 660 300 L 630 250 L 580 190 Z"
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.2"
              />
              {/* Australia */}
              <path
                d="M 770 330 L 870 320 L 880 390 L 810 420 L 750 380 Z"
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1.2"
              />

              {/* Arcs of Global Distribution radiating from Hyderabad (x=660, y=245) */}
              <path d="M 660 245 Q 450 120 240 140" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 660 245 Q 560 120 480 130" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 660 245 Q 730 180 810 160" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 660 245 Q 740 300 810 360" stroke="url(#streamGrad)" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            {/* Glowing Hub: Hyderabad Studio Headquarters */}
            <div className="absolute left-[66%] top-[49%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-5 w-5 bg-amber-500 border-2 border-white shadow-[0_0_15px_#f59e0b]" />
              </span>
              <div className="mt-2 text-center bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/40 shadow-xl">
                <p className="font-cinzel text-xs font-bold text-white tracking-wider">HYDERABAD</p>
                <p className="text-[10px] text-amber-400 font-mono tracking-tight uppercase">Global Studio HQ</p>
              </div>
            </div>

            {/* Regional Hub: Mumbai Distribution & Cinema */}
            <div className="absolute left-[63%] top-[48%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
              <span className="text-[9px] text-slate-400 font-medium mt-1">Mumbai</span>
            </div>

            {/* Global Distribution Node: North America */}
            <div className="absolute left-[24%] top-[28%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-sky-400 border border-white/50 shadow-[0_0_10px_#38bdf8]" />
              <div className="mt-1 text-center bg-black/70 px-2 py-0.5 rounded border border-white/10">
                <p className="text-[10px] text-slate-200 font-medium">North America</p>
                <p className="text-[8px] text-sky-400">Prime Video / YouTube</p>
              </div>
            </div>

            {/* Global Distribution Node: UK & Europe */}
            <div className="absolute left-[48%] top-[26%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-sky-400 border border-white/50 shadow-[0_0_10px_#38bdf8]" />
              <div className="mt-1 text-center bg-black/70 px-2 py-0.5 rounded border border-white/10">
                <p className="text-[10px] text-slate-200 font-medium">Europe & UK</p>
                <p className="text-[8px] text-sky-400">Global OTT Streaming</p>
              </div>
            </div>

            {/* Global Distribution Node: Asia-Pacific */}
            <div className="absolute left-[81%] top-[32%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-sky-400 border border-white/50 shadow-[0_0_10px_#38bdf8]" />
              <div className="mt-1 text-center bg-black/70 px-2 py-0.5 rounded border border-white/10">
                <p className="text-[10px] text-slate-200 font-medium">Asia-Pacific</p>
                <p className="text-[8px] text-sky-400">Digital Syndication</p>
              </div>
            </div>

          </div>

          {/* Operational Facts Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 mt-4 border-t border-white/10 text-center">
            <div>
              <p className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">200+</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Countries & Territories</p>
            </div>
            <div>
              <p className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-400">3</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Global Streaming Platforms</p>
            </div>
            <div>
              <p className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">4K UHD</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Master Delivery Standards</p>
            </div>
            <div>
              <p className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-400">100%</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Core IP Retention</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
