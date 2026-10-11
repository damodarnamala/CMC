import React from 'react';
import { MUSIC_CATALOG } from '../../data/studioData.ts';
import { Music, Play, Disc3, Radio, ArrowRight, ExternalLink } from 'lucide-react';
import { AppRoute } from '../../types.ts';

interface MusicPageProps {
  onNavigate: (route: AppRoute) => void;
  onOpenCinemaModal: (videoId?: string) => void;
}

export const MusicPage: React.FC<MusicPageProps> = ({ onNavigate, onOpenCinemaModal }) => {
  return (
    <div className="pt-28 pb-24 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-amber-400" />
            <span>MUSIC & PUBLISHING DIVISION</span>
          </div>

          <div className="jitter-perspective mb-6">
            <h1 className="tilted-text-item font-cinzel text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              SOUND BEYOND <br />
              <span className="gold-luxury-text">THE SCREEN</span>
            </h1>
          </div>

          <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed">
            Curating original motion picture soundtracks, managing master recording rights, and cultivating independent artist collaborations across South Asian and global soundscapes.
          </p>
        </div>

        {/* Division Positioning: Subtle & Disciplined */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-mono font-semibold block mb-2">
                Operational Scope
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-4">
                Master Rights, Publishing & Sync Architecture
              </h2>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-4">
                Crystolyte Media's music arm operates at the intersection of cinematic immersion and independent sound publishing. In addition to orchestrating atmospheric scores and chart-topping motion picture melodies, the division is selectively expanding into standalone singles and master rights curation.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                Led by CEO Praneeth Nekuri, initiatives such as the <em>Bangaru Bomma</em> independent music project demonstrate the studio's commitment to pairing fresh melodic composers with contemporary visual storytelling.
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-black/50 border border-white/5 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-semibold uppercase tracking-wider pb-2 border-b border-white/10">
                <Disc3 className="w-4 h-4" />
                <span>Publishing Disciplines</span>
              </div>
              <p>· Original Feature Film Scores</p>
              <p>· Standalone Artist Collaboration Singles</p>
              <p>· Master Sync Rights for TV, Ads & Games</p>
              <p>· Digital Streaming Distribution (Spotify, Apple, Saregama)</p>
            </div>
          </div>
        </div>

        {/* Catalog Showcase */}
        <div className="mb-16">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-8">
            Featured Releases & Master Catalogs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {MUSIC_CATALOG.map((track) => (
              <div
                key={track.id}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4 pb-3 border-b border-white/10">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-amber-400 text-[10px] font-semibold uppercase">
                      {track.category}
                    </span>
                    <span className="font-mono text-slate-400">{track.duration}</span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-4">
                    {track.artist} · Composer: {track.composer}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {track.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  {track.youtubeId ? (
                    <button
                      onClick={() => onOpenCinemaModal(track.youtubeId)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Track</span>
                    </button>
                  ) : track.streamingUrl ? (
                    <a
                      href={track.streamingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <span>Explore Release</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 font-mono">Catalog Archive</span>
                  )}
                  <span className="text-[10px] text-slate-400 font-mono">Crystolyte Music</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sync Licensing Inquiry */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-cinzel text-xl font-bold text-white mb-2">
              Sync Licensing & Publishing Inquiries
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light">
              For music supervisors, commercial brands, or gaming studios seeking synchronization licenses for master recordings and publishing catalogs.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="btn-gold-luxury px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold whitespace-nowrap cursor-pointer shadow-lg"
          >
            Inquire Music Sync
          </button>
        </div>

      </div>
    </div>
  );
};
