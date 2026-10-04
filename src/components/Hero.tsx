import React, { useEffect, useState, useRef } from 'react';
import { Film, Sparkles, Lightbulb, Play, ArrowUpRight } from 'lucide-react';
import { STUDIO_INFO, FEATURE_FILM } from '../data/studioData.ts';

interface HeroProps {
  onOpenCinemaModal: () => void;
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
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-6 sm:px-10 overflow-hidden">
      
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none ambient-radial-glow opacity-80" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Category Label */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 backdrop-blur-md mb-8 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold">
            Indian Feature Film Production House
          </span>
        </div>

        {/* Hyperframes 3D Tilted Snap Title */}
        <div className="jitter-perspective mb-4 block">
          <h1 className="tilted-text-item font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] transition-transform duration-500 hover:scale-[1.01]">
            CRYSTOLYTE <br />
            <span className="gold-luxury-text">MEDIA CREATIONS</span>
          </h1>
        </div>

        {/* Hyperframes Text Scramble Tagline */}
        <div className="my-6 min-h-[36px] flex items-center justify-center">
          <p className="text-base sm:text-xl md:text-2xl font-semibold tracking-wider text-amber-400 font-syne uppercase">
            {scrambleText}
          </p>
        </div>

        {/* Studio Summary Narrative */}
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-10">
          Founded by producers <strong className="text-white font-medium">Prasad Nekuri</strong> and{' '}
          <strong className="text-white font-medium">Praneeth Nekuri</strong>. Dedicated to producing high-quality Telugu feature films with compelling stories, strong emotional depth, and cinematic excellence.
        </p>

        {/* Core Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <a
            href="#slate"
            className="btn-gold-luxury w-full sm:w-1/2 px-7 py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 shadow-xl"
          >
            <Film className="w-4 h-4" />
            <span>Explore Feature Slate</span>
          </a>

          <button
            onClick={onOpenCinemaModal}
            className="btn-launch-yt w-full sm:w-1/2 px-7 py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Watch IIT Krishnamurthy</span>
          </button>
        </div>

        {/* Quick Feature Anchors */}
        <div className="mt-16 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl glass-card">
            <span className="text-[11px] text-amber-400/90 uppercase tracking-wider block mb-0.5">Debut Feature</span>
            <span className="font-cinzel text-base font-bold text-white block">IIT Krishnamurthy</span>
            <span className="text-xs text-slate-400">Dir. S. Sreevardhan</span>
          </div>

          <div className="p-4 rounded-xl glass-card">
            <span className="text-[11px] text-amber-400/90 uppercase tracking-wider block mb-0.5">Global Streaming</span>
            <span className="font-cinzel text-base font-bold text-white block">Dual Platform</span>
            <span className="text-xs text-slate-400">Prime Video & YouTube</span>
          </div>

          <div className="p-4 rounded-xl glass-card">
            <span className="text-[11px] text-amber-400/90 uppercase tracking-wider block mb-0.5">Leadership</span>
            <span className="font-cinzel text-base font-bold text-white block">Prasad & Praneeth</span>
            <span className="text-xs text-slate-400">Producers & Founders</span>
          </div>

          <div className="p-4 rounded-xl glass-card">
            <span className="text-[11px] text-amber-400/90 uppercase tracking-wider block mb-0.5">Expansion</span>
            <span className="font-cinzel text-base font-bold text-white block">Multi-Genre Slate</span>
            <span className="text-xs text-slate-400">Action, Romance, Mass</span>
          </div>
        </div>

      </div>
    </section>
  );
};
