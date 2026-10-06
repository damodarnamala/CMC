import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Play, Film, Music, Sparkles } from 'lucide-react';
import { FEATURE_FILM } from '../data/studioData.ts';

interface CinemaModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideoId?: string;
}

export const CinemaModal: React.FC<CinemaModalProps> = ({
  isOpen,
  onClose,
  initialVideoId
}) => {
  const [activeVideoId, setActiveVideoId] = useState<string>(
    initialVideoId || FEATURE_FILM.videos[0].youtubeId
  );

  useEffect(() => {
    if (initialVideoId) {
      setActiveVideoId(initialVideoId);
    }
  }, [initialVideoId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentVideo = FEATURE_FILM.videos.find((v) => v.youtubeId === activeVideoId) || FEATURE_FILM.videos[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 md:p-8 animate-in fade-in duration-200 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#0e1117] rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-auto">
        
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 bg-[#08090d] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <div>
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-slate-100 tracking-wider">
                IIT KRISHNAMURTHY MEDIA VAULT
              </h4>
              <span className="text-[10px] text-amber-400/90 font-mono tracking-wide block">
                {currentVideo.category}: {currentVideo.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={FEATURE_FILM.releasePlatforms.primeVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#38bdf8] hover:underline hidden sm:inline-flex items-center gap-1.5"
            >
              <i className="fa-brands fa-amazon" /> Prime Video
            </a>
            <a
              href={currentVideo.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:underline hidden sm:inline-flex items-center gap-1.5"
            >
              YouTube <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Close Cinema Stream"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 16:9 Cinema Player */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            key={activeVideoId}
            className="w-full h-full border-0"
            src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&rel=0`}
            title={`IIT Krishnamurthy - ${currentVideo.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Video Selector Tabs Bar (Trailer, Teaser, Song, Full Movie) */}
        <div className="bg-[#08090d] border-t border-white/10 p-3 sm:p-4">
          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2.5 px-1">
            Official Media Releases:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {FEATURE_FILM.videos.map((vid) => {
              const isActive = vid.youtubeId === activeVideoId;
              return (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideoId(vid.youtubeId)}
                  className={`text-left p-2.5 rounded-xl border transition-all flex flex-col justify-between ${
                    isActive
                      ? 'bg-amber-500/15 border-amber-500/60 text-white shadow-md'
                      : 'bg-[#121620] border-white/5 text-slate-300 hover:bg-[#181e2b] hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded ${
                        isActive
                          ? 'bg-amber-400 text-black'
                          : 'bg-white/10 text-slate-400'
                      }`}
                    >
                      {vid.category}
                    </span>
                    <Play className={`w-3 h-3 ${isActive ? 'text-amber-400 fill-amber-400' : 'text-slate-500'}`} />
                  </div>
                  <span className="text-xs font-semibold truncate block leading-tight">
                    {vid.title}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono mt-1">
                    {vid.duration || 'Watch'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Film Details Ribbon */}
        <div className="px-5 sm:px-7 py-3 bg-[#06080b] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            Directed by <strong className="text-white">{FEATURE_FILM.director}</strong> • Produced by{' '}
            <strong className="text-amber-400">{FEATURE_FILM.producers.join(' & ')}</strong>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Crystolyte Media Creations</span>
            <span>•</span>
            <span className="text-amber-400">CMC Creative Works</span>
          </div>
        </div>

      </div>
    </div>
  );
};
