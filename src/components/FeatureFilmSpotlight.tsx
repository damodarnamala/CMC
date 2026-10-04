import React from 'react';
import { FEATURE_FILM } from '../data/studioData.ts';

interface FeatureFilmSpotlightProps {
  onOpenCinemaModal: () => void;
}

export const FeatureFilmSpotlight: React.FC<FeatureFilmSpotlightProps> = ({ onOpenCinemaModal }) => {
  return (
    <section id="feature-film" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-5 h-px bg-amber-400" />
              <span>DEBUT FEATURE ARCHIVE</span>
            </div>

            <div className="jitter-perspective">
              <h2 className="tilted-text-item font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
                {FEATURE_FILM.title}
              </h2>
            </div>
          </div>

          {/* Badges / Metrics */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={FEATURE_FILM.releasePlatforms.primeVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#00a8e1]/15 text-[#38bdf8] border border-[#00a8e1]/30 flex items-center gap-2 hover:bg-[#00a8e1]/25 transition-colors"
            >
              <i className="fa-brands fa-amazon" /> Prime Video Worldwide
            </a>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#ff0033]/15 text-red-400 border border-[#ff0033]/30 flex items-center gap-2">
              <i className="fa-brands fa-youtube" /> 4K Full Feature
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
              {FEATURE_FILM.genre}
            </span>
          </div>
        </div>

        {/* Feature Presentation Card */}
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Cinematic Image Frame */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-[560px] bg-black overflow-hidden flex flex-col justify-end p-8 group">
              <img
                src="https://img.youtube.com/vi/_nKFH-wbwtE/maxresdefault.jpg"
                alt="IIT Krishnamurthy Official Feature Poster"
                className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/40 to-transparent" />

              {/* Crisp Corner Details */}
              <div className="relative z-10">
                <span className="px-3 py-1 rounded-md bg-amber-400 text-black text-[10px] font-bold uppercase tracking-widest inline-block mb-3">
                  Official Feature Debut
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1">
                  IIT KRISHNAMURTHY
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  Directed by {FEATURE_FILM.director} • Produced by {FEATURE_FILM.producers.join(' & ')}
                </p>
                
                <div className="mt-4 flex items-center gap-3 text-xs font-mono text-slate-300">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    {FEATURE_FILM.duration}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    {FEATURE_FILM.resolution}
                  </span>
                </div>
              </div>
            </div>

            {/* Feature Film Data & Story Context */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block text-[10px]">Production House</span>
                    <span className="font-cinzel text-sm font-bold text-white">Crystolyte Media Creations</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 uppercase tracking-wider block text-[10px]">Release Channels</span>
                    <span className="font-bold text-[#38bdf8]">Prime Video & YouTube</span>
                  </div>
                </div>

                <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-3">Film Synopsis</h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                  {FEATURE_FILM.synopsis}
                </p>

                {/* Cast & Crew Data Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs border-y border-white/10 py-6 mb-8">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Director</span>
                    <span className="text-white font-semibold text-sm">{FEATURE_FILM.director}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Producers</span>
                    <span className="text-amber-400 font-semibold text-sm">{FEATURE_FILM.producers.join(' & ')}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Lead Cast</span>
                    <span className="text-white font-medium">{FEATURE_FILM.cast.hero}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Female Lead</span>
                    <span className="text-white font-medium">{FEATURE_FILM.cast.heroine}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Key Ensemble</span>
                    <span className="text-white font-medium">{FEATURE_FILM.cast.ensemble.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Music Score</span>
                    <span className="text-white font-medium">{FEATURE_FILM.musicDirector}</span>
                  </div>
                </div>
              </div>

              {/* Watch On: YouTube | Prime Buttons Only */}
              <div>
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold block mb-3">
                  Watch on:
                </span>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  {/* YouTube Button */}
                  <button
                    onClick={onOpenCinemaModal}
                    className="btn-launch-yt px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 cursor-pointer shadow-lg"
                  >
                    <i className="fa-brands fa-youtube text-base" />
                    <span>YouTube</span>
                  </button>

                  {/* Prime Video Button */}
                  <a
                    href={FEATURE_FILM.releasePlatforms.primeVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-launch-prime px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2.5 shadow-lg"
                  >
                    <i className="fa-brands fa-amazon text-base" />
                    <span>Prime Video</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
