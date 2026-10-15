import React, { useEffect, useState, useRef } from 'react';
import { Film, Play, Handshake, ArrowRight } from 'lucide-react';
import { STUDIO_INFO, FEATURE_FILM } from '../data/studioData.ts';
import { AppRoute } from '../types.ts';

interface HeroProps {
  onOpenCinemaModal: (videoId?: string) => void;
  onNavigate?: (route: AppRoute) => void;
  /** 'wallpaper' = full-screen opener only, 'content' = title/CTAs block, default both */
  variant?: 'wallpaper' | 'title' | 'intro' | 'both';
}

export const Hero: React.FC<HeroProps> = ({ onOpenCinemaModal, onNavigate, variant = 'both' }) => {
  const showWallpaper = variant === 'wallpaper' || variant === 'both';
  const showTitle = variant === 'title' || variant === 'both';
  const showIntro = variant === 'intro' || variant === 'both';
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
    <>
      {/* Screen 1: full-screen wallpaper with a light that runs along the arc into the logo */}
      {showWallpaper && (
      <section id="hero" className="relative h-[100svh] min-h-[520px] w-full overflow-hidden bg-[#08090d]">
        <div
          aria-hidden="true"
          className="cmc-wallpaper absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "url('./wallpaper.jpg')" }}
        >
          {/* Stage matches the wallpaper's cover-scaled box, so the arc and logo stay aligned at any screen size */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: 'max(100%, calc(100svh * 2000 / 1001))', aspectRatio: '2000 / 1001' }}
          >
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 2000 1001" preserveAspectRatio="none">
              <defs>
                <filter id="cmc-light-blur" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="7" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="cmc-flare-blur" x="-200%" y="-200%" width="500%" height="500%">
                  <feGaussianBlur stdDeviation="4" />
                </filter>
              </defs>

              {/* The arc the light travels along (same curve as the wallpaper's gold line) */}
              <path id="cmc-arc" d="M0,740 Q1000,416 2000,740" fill="none" stroke="none" />

              {/* Two lights run in from each end, each with a short fading trail */}
              {[
                { keyPoints: '0;0.5', base: 0.6 },
                { keyPoints: '1;0.5', base: 0.6 },
              ].map((side) =>
                [0, 1, 2].map((i) => {
                  const delay = side.base + i * 0.09;
                  const fade = [1, 0.45, 0.2][i];
                  const size = [7, 5, 4][i];
                  return (
                    <circle key={`${side.keyPoints}-${i}`} r={size} fill="#fff4c9" filter="url(#cmc-light-blur)" opacity="0">
                      <animateMotion dur="2.6s" begin={`${delay}s`} fill="freeze" keyPoints={side.keyPoints} keyTimes="0;1" calcMode="linear">
                        <mpath href="#cmc-arc" />
                      </animateMotion>
                      {/* Brightens as it closes in on the logo, then drops to zero */}
                      <animate
                        attributeName="opacity"
                        values={`0;${0.9 * fade};${fade};${fade};0`}
                        keyTimes="0;0.2;0.8;0.97;1"
                        dur="2.6s"
                        begin={`${delay}s`}
                        fill="freeze"
                      />
                    </circle>
                  );
                })
              )}

              {/* Flare at the logo: swells as the lights arrive, then dies away and leaves the line */}
              <circle cx="1000" cy="578" r="4" fill="#ffe7a3" filter="url(#cmc-flare-blur)" opacity="0">
                <animate attributeName="opacity" values="0;0.8;0.4;0" keyTimes="0;0.35;0.7;1" dur="2.4s" begin="3.2s" fill="freeze" />
                <animate attributeName="r" values="4;12;7;4" keyTimes="0;0.35;0.7;1" dur="2.4s" begin="3.2s" fill="freeze" />
              </circle>
            </svg>

            {/* CMC mark, placed where it sits in the wallpaper */}
            <div className="cmc-zoom-in cmc-hero-mark absolute" style={{ left: "calc(50% - min(19.5%, 32vw))", top: "26%", width: "min(39%, 64vw)" }}>
              <img src="./logo-mark.png" alt="CMC Creative Works" draggable={false} className="block w-full h-auto select-none" />
              <span
                aria-hidden="true"
                className="cmc-logo-sweep absolute inset-0 pointer-events-none"
                style={{ WebkitMaskImage: "url('./logo-mark.png')", maskImage: "url('./logo-mark.png')" }}
              />
            </div>

            {/* Subtitle under the mark */}
            <div
              className="cmc-gold-emboss cmc-zoom-in cmc-hero-sub absolute left-0 right-0 text-center font-cinzel font-semibold uppercase whitespace-nowrap"
              style={{ top: "49.5%", fontSize: "min(calc(100svh * 0.068), 6.2vw)", letterSpacing: '0.24em', lineHeight: 1 }}
            >
              CREATIVE WORKS
            </div>
          </div>
        </div>

        {/* Soft fade into the page below */}
        <div aria-hidden="true" className="cmc-hero-fade absolute inset-x-0 bottom-0 h-1/3 pointer-events-none" />
      </section>
      )}

      {/* Screen 2: title, copy and CTAs move down below the wallpaper */}
      {showTitle && (
      <section id="hero-title" className="relative px-4 sm:px-8 md:px-10 pt-8 sm:pt-12 pb-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
        {/* Hyperframes Theatrical Title in Cinzel (Vertically Aligned Below Logo, Centered) */}
        <div className="cmc-rise jitter-perspective mb-3 sm:mb-4 block max-w-4xl mx-auto text-center" style={{ '--d': '0.9s' } as React.CSSProperties}>
          <h1 className="tilted-text-item font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[0.16em] sm:tracking-[0.24em] leading-[1.2] uppercase transition-transform duration-500 hover:scale-[1.01]">
            CRYSTOLYTE <br />
            <span className="cmc-gold-text tracking-[0.18em] sm:tracking-[0.26em]">MEDIA CREATIONS</span>
          </h1>
        </div>
        </div>
      </section>
      )}

      {showIntro && (
      <section id="hero-content" className="relative min-h-[92vh] flex items-center justify-center pt-16 sm:pt-20 pb-16 sm:pb-20 px-4 sm:px-8 md:px-10 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none ambient-radial-glow opacity-80" />
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_60%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
        {/* Master Headline: STORIES BORN IN INDIA. BUILT FOR THE WORLD. */}
        <div className="cmc-rise my-3 sm:my-5 min-h-[36px] sm:min-h-[44px] flex items-center justify-center px-2" style={{ '--d': '1.2s' } as React.CSSProperties}>
          <h2 className="text-base sm:text-xl md:text-3xl font-extrabold tracking-wider cmc-gold-gradient-text font-cinzel uppercase drop-shadow-md">
            {scrambleText}
          </h2>
        </div>

        {/* Subcopy: Exact Brand Blueprint Specification */}
        <p className="cmc-rise max-w-3xl mx-auto text-slate-100 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 sm:mb-10 px-2">
          An independent entertainment company developing, producing, and owning premium film, television, music, and original intellectual property.
        </p>

        {/* Primary CTA & Secondary CTA */}
        <div className="cmc-rise flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto w-full px-2 mb-10" style={{ '--d': '1.5s' } as React.CSSProperties}>
          <button
            onClick={() => onNavigate ? onNavigate('productions') : window.location.assign('#productions')}
            className="cmc-btn cmc-btn-primary w-full sm:w-1/2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
          >
            <Film className="w-4 h-4" />
            <span>View Our Productions</span>
          </button>

          <button
            onClick={() => onNavigate ? onNavigate('partnerships') : window.location.assign('#partnerships')}
            className="cmc-btn cmc-btn-secondary w-full sm:w-1/2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
          >
            <Handshake className="w-4 h-4 text-amber-400" />
            <span>Partner With CMC</span>
          </button>
        </div>

        {/* Quick Trailer Trigger */}
        <div className="cmc-rise mb-10" style={{ '--d': '1.7s' } as React.CSSProperties}>
          <button
            onClick={() => onOpenCinemaModal('ez6iLxDgdBU')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-colors">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </span>
            <span>Watch IIT Krishnamurthy Trailer (Official 4K)</span>
          </button>
        </div>

        {/* Ecosystem Footer Strip: FILM • SERIES • MUSIC • IP • GLOBAL PARTNERSHIPS */}
        <div className="cmc-rise w-full pt-8 sm:pt-10 border-t border-white/10 max-w-4xl mx-auto" style={{ '--d': '1.9s' } as React.CSSProperties}>
          <div className="cmc-label flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span className="text-slate-200">FILM</span>
            <span className="text-amber-300">·</span>
            <span className="text-slate-200">SERIES</span>
            <span className="text-amber-300">·</span>
            <span className="text-slate-200">MUSIC</span>
            <span className="text-amber-300">·</span>
            <span className="text-slate-200">IP & RIGHTS</span>
            <span className="text-amber-300">·</span>
            <span className="text-slate-200">GLOBAL PARTNERSHIPS</span>
          </div>
        </div>
      </div>
      </section>
      )}
    </>
  );
};
