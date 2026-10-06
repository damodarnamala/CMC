import React, { useEffect, useState, useRef } from 'react';
import { Film, Play } from 'lucide-react';
import { STUDIO_INFO, FEATURE_FILM } from '../data/studioData.ts';
import { CMCLogo } from './CMCLogo.tsx';

interface HeroProps {
  onOpenCinemaModal: (videoId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCinemaModal }) => {
  const [scrambleText, setScrambleText] = useState("REDEFINING TELUGU CINEMA WITH EXCELLENCE");
  const targetTagline = "REDEFINING TELUGU CINEMA WITH EXCELLENCE";
  const scrambleRef = useRef<boolean>(false);

  // Hyperframes Clean Text Scrambler
  useEffect(() => {
    if (scrambleRef.current) return;
    scrambleRef.current = true;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#&%";
    let frame = 0;
    const totalFrames = 30;
    const queue = targetTagline.split('').map((char, i) => ({
      from: '',
      to: char,
      start: Math.floor(Math.random() * 8),
      end: 12 + Math.floor(Math.random() * 16)
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
    }, 45);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-8 md:px-10 overflow-hidden">
      
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none ambient-radial-glow opacity-80" />

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
        
        {/* Official 3D Metallic Golden CMC Logo Showcase */}
        <div className="mb-6 sm:mb-8 transition-transform duration-700 hover:scale-[1.03]">
          <CMCLogo size="md" showSubtitle={true} className="filter drop-shadow-[0_15px_35px_rgba(212,175,55,0.3)]" />
        </div>

        {/* Hyperframes Theatrical Title in Cinzel (Matching Writer & Director Sreevardhan font) */}
        <div className="jitter-perspective mb-4 sm:mb-6 block max-w-4xl mx-auto">
          <h1 className="tilted-text-item font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.16em] sm:tracking-[0.24em] leading-[1.25] uppercase transition-transform duration-500 hover:scale-[1.01]">
            CRYSTOLYTE <br />
            <span className="gold-luxury-text tracking-[0.18em] sm:tracking-[0.26em]">MEDIA CREATIONS</span>
          </h1>
        </div>

        {/* Hyperframes Text Scramble Tagline */}
        <div className="my-3 sm:my-5 min-h-[32px] sm:min-h-[36px] flex items-center justify-center px-2">
          <p className="text-sm sm:text-lg md:text-2xl font-semibold tracking-wider text-amber-400 font-syne uppercase">
            {scrambleText}
          </p>
        </div>

        {/* Studio Summary Narrative */}
        <p className="max-w-2xl mx-auto text-slate-300 text-xs sm:text-base md:text-lg font-light leading-relaxed mb-8 sm:mb-10 px-2">
          Founded by producers <strong className="text-white font-medium">Prasad Nekuri</strong> and{' '}
          <strong className="text-white font-medium">Praneeth Nekuri</strong>. Dedicated to producing high-quality Telugu feature films with compelling stories, strong emotional depth, and cinematic excellence.
        </p>

        {/* Core Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto w-full px-2">
          <a
            href="#slate"
            className="btn-gold-luxury w-full sm:w-1/2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 shadow-xl"
          >
            <Film className="w-4 h-4" />
            <span>Explore Feature Slate</span>
          </a>

          <button
            onClick={() => onOpenCinemaModal('ez6iLxDgdBU')}
            className="btn-launch-yt w-full sm:w-1/2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Watch Official Trailer</span>
          </button>
        </div>

        {/* Quick Feature Anchors */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left w-full">
          <div className="p-3.5 sm:p-4 rounded-xl glass-card cursor-pointer hover:border-amber-400/40 transition-colors" onClick={() => onOpenCinemaModal('ez6iLxDgdBU')}>
            <span className="text-[10px] sm:text-[11px] text-amber-400/90 uppercase tracking-wider block mb-0.5">Debut Feature</span>
            <span className="font-cinzel text-sm sm:text-base font-bold text-white block">IIT Krishnamurthy</span>
            <span className="text-[11px] sm:text-xs text-slate-400">Official Trailer & 4K</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl glass-card">
            <span className="text-[10px] sm:text-[11px] text-amber-400/90 uppercase tracking-wider block mb-0.5">Global Streaming</span>
            <span className="font-cinzel text-sm sm:text-base font-bold text-white block">Dual Platform</span>
            <span className="text-[11px] sm:text-xs text-slate-400">Prime Video & YouTube</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl glass-card">
            <span className="text-[10px] sm:text-[11px] text-amber-400/90 uppercase tracking-wider block mb-0.5">Leadership</span>
            <span className="font-cinzel text-sm sm:text-base font-bold text-white block">Prasad & Praneeth</span>
            <span className="text-[11px] sm:text-xs text-slate-400">Producers & Founders</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl glass-card">
            <span className="text-[10px] sm:text-[11px] text-amber-400/90 uppercase tracking-wider block mb-0.5">Expansion</span>
            <span className="font-cinzel text-sm sm:text-base font-bold text-white block">Production-2</span>
            <span className="text-[11px] sm:text-xs text-slate-400">Feature Drama</span>
          </div>
        </div>

      </div>
    </section>
  );
};
