import React, { useState } from 'react';
import { Play, Sparkles, Film, Music, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { FEATURE_FILM } from '../data/studioData.ts';

interface OfficialMoviePosterProps {
  onPlayTrailer?: () => void;
  onPlayTeaser?: () => void;
  onPlaySong?: () => void;
  onPlayFullMovie?: () => void;
  className?: string;
}

export const OfficialMoviePoster: React.FC<OfficialMoviePosterProps> = ({
  onPlayTrailer,
  onPlayTeaser,
  onPlaySong,
  onPlayFullMovie,
  className = ''
}) => {
  const [selectedPosterIndex, setSelectedPosterIndex] = useState(0);
  const posters = FEATURE_FILM.posters;
  const currentPoster = posters[selectedPosterIndex] || posters[0];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPosterIndex((prev) => (prev + 1) % posters.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPosterIndex((prev) => (prev - 1 + posters.length) % posters.length);
  };

  return (
    <div className={`relative group select-none flex flex-col items-center ${className}`}>
      
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/25 via-teal-500/15 to-transparent rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main Poster Frame */}
      <div className="relative w-full aspect-[2/3] max-w-md rounded-3xl overflow-hidden border border-amber-500/40 shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-[#070b10] flex flex-col justify-between">
        
        {/* Actual High-Resolution Uploaded Poster Image */}
        <img
          key={currentPoster.id}
          src={currentPoster.src}
          alt={currentPoster.alt}
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-[1.02]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.currentTarget;
            if (!img.dataset.retried) {
              img.dataset.retried = 'true';
              img.src = currentPoster.src.replace('./', '/');
            }
          }}
        />

        {/* Top Badges Overlay */}
        <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between w-full bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md text-[10px] uppercase tracking-widest text-amber-400 font-bold shadow-lg">
            <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>{currentPoster.tag}</span>
          </div>

          <div className="text-right">
            <span className="font-cinzel font-black text-amber-400 text-xs sm:text-sm tracking-widest block drop-shadow">
              CMC
            </span>
            <span className="text-[7px] uppercase tracking-[0.2em] text-slate-300 font-sans block">
              Official Release
            </span>
          </div>
        </div>

        {/* Navigation Arrows for Mobile & Quick Browsing */}
        <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 z-15 flex items-center justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-transform hover:scale-110 pointer-events-auto backdrop-blur-md shadow-xl"
            aria-label="Previous Poster"
          >
            <ChevronLeft className="w-5 h-5 text-amber-400" />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-transform hover:scale-110 pointer-events-auto backdrop-blur-md shadow-xl"
            aria-label="Next Poster"
          >
            <ChevronRight className="w-5 h-5 text-amber-400" />
          </button>
        </div>

        {/* Interactive Hover Actions Overlay */}
        <div className="absolute inset-0 z-20 bg-black/85 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/50 flex items-center justify-center text-amber-400 mb-1">
            <Film className="w-6 h-6" />
          </div>

          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wider">
            IIT KRISHNAMURTHY
          </h3>
          <p className="text-xs text-amber-300 font-mono">
            {currentPoster.title}
          </p>
          <p className="text-[11px] text-slate-400 max-w-xs font-light">
            {currentPoster.subtitle}
          </p>

          <div className="flex flex-col w-full max-w-xs space-y-2 pt-2">
            {onPlayTrailer && (
              <button
                onClick={(e) => { e.stopPropagation(); onPlayTrailer(); }}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>Watch Official Trailer</span>
              </button>
            )}

            {onPlayTeaser && (
              <button
                onClick={(e) => { e.stopPropagation(); onPlayTeaser(); }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#141a24] hover:bg-[#1c2432] text-white border border-white/15 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <Play className="w-3.5 h-3.5 text-amber-400" />
                <span>Watch First Look Teaser</span>
              </button>
            )}

            {onPlaySong && (
              <button
                onClick={(e) => { e.stopPropagation(); onPlaySong(); }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#141a24] hover:bg-[#1c2432] text-white border border-white/15 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
              >
                <Music className="w-3.5 h-3.5 text-pink-400" />
                <span>Play "Megham Tho Megham"</span>
              </button>
            )}

            {onPlayFullMovie && (
              <button
                onClick={(e) => { e.stopPropagation(); onPlayFullMovie(); }}
                className="w-full py-2.5 px-4 rounded-xl bg-red-600/90 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.02]"
              >
                <i className="fa-brands fa-youtube text-sm" />
                <span>Full Feature Film (4K)</span>
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Poster Switcher Selector Tabs (P1, P2, P3) */}
      <div className="w-full max-w-md mt-4 grid grid-cols-3 gap-2">
        {posters.map((poster, index) => {
          const isActive = index === selectedPosterIndex;
          return (
            <button
              key={poster.id}
              onClick={() => setSelectedPosterIndex(index)}
              className={`p-2 rounded-xl border text-left transition-all duration-300 flex items-center gap-2.5 ${
                isActive
                  ? 'bg-amber-500/15 border-amber-400 text-white shadow-md'
                  : 'bg-[#0f141c] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <img
                src={poster.src}
                alt={poster.tag}
                className="w-8 h-12 object-cover rounded border border-white/10 flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="min-w-0">
                <span className={`text-[10px] font-bold block uppercase tracking-wider truncate ${isActive ? 'text-amber-400' : 'text-slate-300'}`}>
                  {poster.tag}
                </span>
                <span className="text-[9px] text-slate-500 block truncate">
                  View Image
                </span>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
