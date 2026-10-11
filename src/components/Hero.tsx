import React, { useEffect, useState, useRef } from 'react';
import { Film, Play, Handshake, ArrowRight } from 'lucide-react';
import { STUDIO_INFO, FEATURE_FILM } from '../data/studioData.ts';
import { CMCLogo } from './CMCLogo.tsx';
import { AppRoute } from '../types.ts';

interface HeroProps {
  onOpenCinemaModal: (videoId?: string) => void;
  onNavigate?: (route: AppRoute) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCinemaModal, onNavigate }) => {
  const [scrambleText, setScrambleText] = useState("STORIES BORN IN INDIA. BUILT FOR THE WORLD.");
  const targetTagline = "STORIES BORN IN INDIA. BUILT FOR THE WORLD.";
  const scrambleRef = useRef<boolean>(false);

  // Refined Cinematic Text Scrambler
  useEffect(() => {
    if (scrambleRef.current) return;
    scrambleRef.current = true;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·.";
    let frame = 0;
    const totalFrames = 28;
    const queue = targetTagline.split('').map((char) => ({
      from: '',
      to: char,
      start: Math.floor(Math.random() * 6),
      end: 10 + Math.floor(Math.random() * 14)
    }));

    const timer = setInterval(() => {
      let output = '';
      let completed = 0;

      for (let i = 0; i < queue.length; i++) {
        const item = queue[i];
        if (frame >= item.end) {
          completed++;
          output += item.to;
        } else if (frame >= item.start) {
          const randomChar = chars[Math.floor(Math.random() * chars.length)];
          output += randomChar;
        } else {
          output += item.from || ' ';
        }
      }

      setScrambleText(output);
      frame++;

      if (completed === queue.length || frame > totalFrames) {
        clearInterval(timer);
        setScrambleText(targetTagline);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 md:px-10 overflow-hidden">
      
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none ambient-radial-glow opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
        
        {/* Official 3D Metallic Golden CMC Logo Showcase with Animated Gold Border (Vertically Aligned on Top) */}
        <div className="mb-6 sm:mb-8 transition-transform duration-700 hover:scale-[1.03]">
          <div className="gold-animated-border-frame">
            <div className="gold-animated-border-content px-6 py-4 sm:px-8 sm:py-5">
              <CMCLogo size="md" showSubtitle={true} className="filter drop-shadow-[0_15px_35px_rgba(212,175,55,0.4)]" />
            </div>
          </div>
        </div>

        {/* Hyperframes Theatrical Title in Cinzel (Vertically Aligned Below Logo, Centered) */}
        <div className="jitter-perspective mb-3 sm:mb-4 block max-w-4xl mx-auto text-center">
          <h1 className="tilted-text-item font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.16em] sm:tracking-[0.24em] leading-[1.2] uppercase transition-transform duration-500 hover:scale-[1.01]">
            CRYSTOLYTE <br />
            <span className="gold-luxury-text tracking-[0.18em] sm:tracking-[0.26em]">MEDIA CREATIONS</span>
          </h1>
        </div>

        {/* Master Headline: STORIES BORN IN INDIA. BUILT FOR THE WORLD. */}
        <div className="my-3 sm:my-5 min-h-[36px] sm:min-h-[44px] flex items-center justify-center px-2">
          <h2 className="text-base sm:text-xl md:text-3xl font-extrabold tracking-wider text-amber-400 font-cinzel uppercase drop-shadow-md">
            {scrambleText}
          </h2>
        </div>

        {/* Subcopy: Exact Brand Blueprint Specification */}
        <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-8 sm:mb-10 px-2">
          An independent entertainment company developing, producing, and owning premium film, television, music, and original intellectual property.
        </p>

        {/* Primary CTA & Secondary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto w-full px-2 mb-10">
          <button
            onClick={() => onNavigate ? onNavigate('productions') : window.location.assign('#productions')}
            className="btn-gold-luxury w-full sm:w-1/2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
          >
            <Film className="w-4 h-4" />
            <span>View Our Productions</span>
          </button>

          <button
            onClick={() => onNavigate ? onNavigate('partnerships') : window.location.assign('#partnerships')}
            className="btn-launch-yt w-full sm:w-1/2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
          >
            <Handshake className="w-4 h-4 text-amber-400" />
            <span>Partner With CMC</span>
          </button>
        </div>

        {/* Quick Trailer Trigger */}
        <div className="mb-10">
          <button
            onClick={() => onOpenCinemaModal('ez6iLxDgdBU')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-colors">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </span>
            <span>Watch IIT Krishnamurthy Trailer (Official 4K)</span>
          </button>
        </div>

        {/* Ecosystem Footer Strip: FILM • SERIES • MUSIC • IP • GLOBAL PARTNERSHIPS */}
        <div className="w-full pt-8 sm:pt-10 border-t border-white/10 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            <span className="text-slate-200">FILM</span>
            <span className="text-amber-400/60">·</span>
            <span className="text-slate-200">SERIES</span>
            <span className="text-amber-400/60">·</span>
            <span className="text-slate-200">MUSIC</span>
            <span className="text-amber-400/60">·</span>
            <span className="text-slate-200">IP & RIGHTS</span>
            <span className="text-amber-400/60">·</span>
            <span className="text-slate-200">GLOBAL PARTNERSHIPS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
