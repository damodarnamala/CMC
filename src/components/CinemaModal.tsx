import React, { useEffect } from 'react';
import { X, ExternalLink, Play } from 'lucide-react';
import { FEATURE_FILM } from '../data/studioData.ts';

interface CinemaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CinemaModal: React.FC<CinemaModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl bg-[#0e1117] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Top Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#08090d] border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <h4 className="font-cinzel text-sm sm:text-base font-bold text-slate-100 tracking-wider">
              IIT KRISHNAMURTHY (4K CINEMA STREAM)
            </h4>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={FEATURE_FILM.releasePlatforms.primeVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#38bdf8] hover:underline hidden sm:inline-flex items-center gap-1.5"
            >
              <i className="fa-brands fa-amazon" /> Prime Video
            </a>
            <a
              href={FEATURE_FILM.releasePlatforms.youtubeWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-400 hover:underline hidden sm:inline-flex items-center gap-1.5"
            >
              YouTube <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close Cinema Stream"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* 16:9 Cinema Player */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            className="w-full h-full border-0"
            src={`https://www.youtube.com/embed/${FEATURE_FILM.releasePlatforms.youtubeVideoId}?autoplay=1&rel=0`}
            title="IIT Krishnamurthy Full Movie"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Bottom Film Ribbon */}
        <div className="px-6 py-3.5 bg-[#08090d] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            Directed by <strong className="text-white">{FEATURE_FILM.director}</strong> • Produced by{' '}
            <strong className="text-amber-400">{FEATURE_FILM.producers.join(' & ')}</strong>
          </div>
          <div className="flex items-center gap-4">
            <span>CMC Theatrical Archive</span>
            <span>•</span>
            <span>Telugu with English Subtitles</span>
          </div>
        </div>

      </div>
    </div>
  );
};
