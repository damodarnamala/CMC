import React from 'react';
import { Play, Sparkles, Film, Music, ShieldCheck, Clapperboard, ExternalLink, Trophy, Award, Medal } from 'lucide-react';
import { FEATURE_FILM } from '../data/studioData.ts';
import { OfficialMoviePoster } from './OfficialMoviePoster.tsx';

interface FeatureFilmSpotlightProps {
  onOpenCinemaModal: (videoId?: string) => void;
}

export const FeatureFilmSpotlight: React.FC<FeatureFilmSpotlightProps> = ({ onOpenCinemaModal }) => {
  const directorInsta = FEATURE_FILM.directorInstagram || "https://www.instagram.com/mr.sreevardhan/";

  return (
    <section id="feature-film" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-5 h-px bg-amber-400" />
              <span>OFFICIAL DEBUT FEATURE & MEDIA ARCHIVE</span>
            </div>

            <div className="jitter-perspective">
              <h2 className="tilted-text-item font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
                {FEATURE_FILM.title}
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 font-mono tracking-wider">
              {FEATURE_FILM.teluguTitle} • {FEATURE_FILM.tagline}
            </p>
          </div>

          {/* Badges / Metrics */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <a
              href={FEATURE_FILM.releasePlatforms.primeVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#00a8e1]/15 text-[#38bdf8] border border-[#00a8e1]/30 flex items-center gap-1.5 hover:bg-[#00a8e1]/25 transition-colors"
            >
              <i className="fa-brands fa-amazon" /> Prime Video Worldwide
            </a>
            <button
              onClick={() => onOpenCinemaModal('_nKFH-wbwtE')}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#ff0033]/15 text-red-400 border border-[#ff0033]/30 flex items-center gap-1.5 hover:bg-[#ff0033]/25 transition-colors"
            >
              <i className="fa-brands fa-youtube" /> 4K Full Feature
            </button>
            <a
              href={directorInsta}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#E1306C]/15 text-pink-300 border border-[#E1306C]/30 flex items-center gap-1.5 hover:bg-[#E1306C]/25 transition-colors"
              title="Director S. Sreevardhan Instagram"
            >
              <i className="fa-brands fa-instagram text-[#E1306C]" /> Dir. Sreevardhan
            </a>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
              {FEATURE_FILM.genre}
            </span>
          </div>
        </div>

        {/* Feature Presentation Card & Official Poster Showcase */}
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: Authentic Official Poster Display */}
            <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-black/60">
              <OfficialMoviePoster
                className="w-full max-w-md mx-auto"
                onPlayTrailer={() => onOpenCinemaModal('ez6iLxDgdBU')}
                onPlayTeaser={() => onOpenCinemaModal('XfDvmgAZmX4')}
                onPlaySong={() => onOpenCinemaModal('5IAPAGizJ9Y')}
                onPlayFullMovie={() => onOpenCinemaModal('_nKFH-wbwtE')}
              />
            </div>

            {/* Right: Feature Film Data, Story Context & Key Links */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider block text-[10px]">Production House</span>
                    <span className="font-cinzel text-sm font-bold text-white">Crystolyte Media Creations</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 uppercase tracking-wider block text-[10px]">Global Distribution</span>
                    <span className="font-bold text-[#38bdf8]">Prime Video & YouTube (4K)</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="px-3 py-1 rounded-md bg-amber-400 text-black text-[10px] font-bold uppercase tracking-widest inline-block mb-2">
                    Official Feature Debut
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1">
                    IIT KRISHNAMURTHY <span className="text-slate-400 text-lg font-normal">({FEATURE_FILM.teluguTitle})</span>
                  </h3>
                  <p className="text-xs text-amber-400 font-mono">
                    # A 3 D S U C A • A Corporate Crime • Non Recognised Sector
                  </p>
                </div>

                <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-2">Film Synopsis</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {FEATURE_FILM.synopsis}
                </p>

                {/* Cast & Crew Matrix from Official Billing Block */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 text-xs border-y border-white/10 py-5 mb-6">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Writer & Director</span>
                    <a
                      href={directorInsta}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-amber-400 font-semibold text-xs inline-flex items-center gap-1.5 transition-colors group/dir"
                      title="Director S. Sreevardhan on Instagram"
                    >
                      <span>{FEATURE_FILM.director}</span>
                      <i className="fa-brands fa-instagram text-[#E1306C] text-xs group-hover/dir:scale-125 transition-transform" />
                    </a>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Producers</span>
                    <span className="text-amber-400 font-semibold text-xs">{FEATURE_FILM.producers.join(' & ')}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Lead Cast</span>
                    <span className="text-white font-medium text-xs">{FEATURE_FILM.cast.hero}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Female Lead</span>
                    <span className="text-white font-medium text-xs">{FEATURE_FILM.cast.heroine}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Music Director</span>
                    <span className="text-white font-medium text-xs">{FEATURE_FILM.musicDirector}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Cinematography (DOP)</span>
                    <span className="text-white font-medium text-xs">{FEATURE_FILM.crew.dop}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Editor</span>
                    <span className="text-white font-medium text-xs">{FEATURE_FILM.crew.editor}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Publicity Design</span>
                    <span className="text-white font-medium text-xs">{FEATURE_FILM.crew.publicityDesign}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase tracking-wider">Colorist</span>
                    <span className="text-white font-medium text-xs">{FEATURE_FILM.crew.colorist}</span>
                  </div>
                </div>
              </div>

              {/* Primary Direct Actions */}
              <div>
                <span className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold block mb-3">
                  Watch Online:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Trailer Button */}
                  <button
                    onClick={() => onOpenCinemaModal('ez6iLxDgdBU')}
                    className="btn-gold px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg min-h-[46px]"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>Watch Trailer</span>
                  </button>

                  {/* YouTube Full Movie Button */}
                  <button
                    onClick={() => onOpenCinemaModal('_nKFH-wbwtE')}
                    className="btn-launch-yt px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg min-h-[46px]"
                  >
                    <i className="fa-brands fa-youtube text-base" />
                    <span>Full Movie 4K</span>
                  </button>

                  {/* Prime Video Button */}
                  <a
                    href={FEATURE_FILM.releasePlatforms.primeVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-launch-prime px-5 py-3 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-lg min-h-[46px]"
                  >
                    <i className="fa-brands fa-amazon text-base" />
                    <span>Prime Video</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* NEW SECTION: Complete Media Gallery (All 4 Video Links)  */}
        {/* ======================================================== */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-3">
            <div>
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest block mb-1">
                CINEMATIC RELEASES
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Trailers, Teasers & Music
              </h3>
            </div>
            <p className="text-slate-400 text-xs max-w-md font-light">
              Click any release to stream directly inside the high-definition theater modal.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURE_FILM.videos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => onOpenCinemaModal(vid.youtubeId)}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={vid.thumbnailUrl}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-white/10">
                      {vid.badge}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-400/90 group-hover:bg-amber-400 text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-black translate-x-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  {vid.duration && (
                    <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300 border border-white/10">
                      {vid.duration}
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-cinzel text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-1.5 leading-snug">
                      {vid.title}
                    </h4>
                    <p className="text-slate-400 text-xs font-light line-clamp-2 leading-relaxed mb-4">
                      {vid.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-semibold">
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Stream Now</span>
                      <Play className="w-3 h-3 fill-amber-400" />
                    </span>
                    <a
                      href={vid.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-white p-1"
                      title="Open in YouTube"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* NEW SECTION: Official Theatrical Posters Gallery (P1, P2, P3) */}
        {/* ======================================================== */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
            <div>
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest block mb-1">
                OFFICIAL ARTWORK & PUBLICITY
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Theatrical Posters Gallery
              </h3>
            </div>
            <p className="text-slate-400 text-xs max-w-md font-light">
              High-resolution promotional key art and first look posters for IIT Krishnamurthy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {FEATURE_FILM.posters.map((poster) => (
              <div
                key={poster.id}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-500 group flex flex-col justify-between"
              >
                {/* Poster Image Frame */}
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#070b10]">
                  <img
                    src={poster.src}
                    alt={poster.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (!img.dataset.retried) {
                        img.dataset.retried = 'true';
                        img.src = poster.src.replace('./', '/');
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-300 border border-white/15">
                      {poster.tag}
                    </span>
                  </div>
                </div>

                {/* Poster Caption */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 border-t border-white/5">
                  <div>
                    <h4 className="font-cinzel text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-1">
                      {poster.title}
                    </h4>
                    <p className="text-slate-400 text-xs font-light">
                      {poster.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-semibold">
                    <span>Official Cinema Art</span>
                    <a
                      href={poster.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white inline-flex items-center gap-1 text-[11px] hover:underline"
                    >
                      <span>Full Resolution</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* NEW SECTION: Awards, Accolades & SIIMA Nominations       */}
        {/* ======================================================== */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-3">
            <div>
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>ACCOLADES & INDUSTRY RECOGNITION</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Awards & SIIMA Nominations
              </h3>
            </div>
            <p className="text-slate-400 text-xs max-w-md font-light">
              Celebrating premier honors, festival victories, and prestigious nominations for IIT Krishnamurthy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Card 1: Golden Cape Awards 2021 Winner */}
            <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/30 flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 relative group">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 inline-flex items-center gap-1.5 shadow-md">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  Winner
                </span>
              </div>

              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-400/90 block mb-1">
                  Golden Cape Awards 2021
                </span>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  The Nail Biting Category Award
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  <strong className="text-white font-medium">IIT Krishnamurthy</strong> won the prestigious <strong className="text-amber-300 font-semibold">Nail Byting Category Award</strong> at the <strong className="text-white font-medium">Golden Cape Awards 2021 | Telugu Cinema</strong>, honoring the film's gripping tension, intricate suspense, and cinematic storytelling.
                </p>

                {/* Video Card for Award Presentation */}
                <div
                  onClick={() => onOpenCinemaModal('xxfSpP6yxT4')}
                  className="rounded-xl overflow-hidden border border-white/10 hover:border-amber-400/50 bg-[#070b10] group/vid cursor-pointer transition-all mb-4 relative shadow-lg"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <img
                      src="https://img.youtube.com/vi/xxfSpP6yxT4/maxresdefault.jpg"
                      alt="IIT Krishnamurthy Movie Wins The Nail Byting Category Award | Golden Cape Awards 2021 | Telugu Cinema"
                      className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (!img.dataset.retried) {
                          img.dataset.retried = 'true';
                          img.src = 'https://img.youtube.com/vi/xxfSpP6yxT4/hqdefault.jpg';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-300 border border-white/10 flex items-center gap-1.5 shadow">
                        <Play className="w-2.5 h-2.5 fill-amber-300" />
                        Award Feature
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-amber-400/90 group-hover/vid:bg-amber-400 text-black flex items-center justify-center shadow-xl group-hover/vid:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-black translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#0a0e16] border-t border-white/5 flex items-center justify-between">
                    <div className="min-w-0 pr-3">
                      <p className="text-xs font-semibold text-white truncate group-hover/vid:text-amber-400 transition-colors">
                        IIT Krishnamurthy Movie Wins The Nail Byting Category Award | Golden Cape Awards 2021
                      </p>
                      <span className="text-[10px] text-slate-400 font-mono">Telugu Cinema • Watch Video</span>
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=xxfSpP6yxT4"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-white p-1"
                      title="Open on YouTube"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-semibold">
                <button
                  onClick={() => onOpenCinemaModal('xxfSpP6yxT4')}
                  className="flex items-center gap-1.5 hover:underline cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-amber-400" />
                  <span>Stream Award Segment</span>
                </button>
                <span className="text-slate-400 text-[11px]">Golden Cape Awards 2021</span>
              </div>
            </div>

            {/* Card 2: 9th SIIMA Awards Nominee */}
            <div className="lg:col-span-6 glass-card rounded-2xl p-6 sm:p-8 border border-sky-500/30 flex flex-col justify-between hover:border-sky-400/60 transition-all duration-300 relative group">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30 inline-flex items-center gap-1.5 shadow-md">
                  <Medal className="w-3.5 h-3.5 text-sky-400" />
                  SIIMA Nominee
                </span>
              </div>

              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-sky-400/90 block mb-1">
                  9th South Indian International Movie Awards
                </span>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  Best Debut Actor (Telugu)
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  <strong className="text-white font-medium">Dandamudi Pruthvi</strong> was nominated for the <strong className="text-sky-300 font-semibold">Best Debut Actor (Telugu)</strong> award at the <strong className="text-white font-medium">9th South Indian International Movie Awards (SIIMA)</strong> for his role in the 2020 Telugu mystery film <em className="text-slate-200">IIT Krishnamurthy</em>.
                </p>

                {/* Nominee Details Card with Dot Bullet Points */}
                <div className="rounded-xl bg-[#08090d]/90 border border-white/10 p-5 mb-4">
                  <h5 className="font-cinzel text-xs font-bold text-amber-400 uppercase tracking-widest mb-3.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span>Nominee Details</span>
                  </h5>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                      <span className="leading-snug text-slate-200">
                        <strong className="text-white font-semibold">Actor:</strong> Dandamudi Pruthvi (playing Krishnamurthy)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                      <span className="leading-snug text-slate-200">
                        <strong className="text-white font-semibold">Category:</strong> Best Debut Actor (Telugu)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                      <span className="leading-snug text-slate-200">
                        <strong className="text-white font-semibold">Film:</strong> IIT Krishnamurthy (directed by Sreevardhan)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                      <span className="leading-snug text-slate-200">
                        <strong className="text-white font-semibold">Award Event:</strong> 9th SIIMA Awards
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-sky-400 font-semibold">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pan-South Indian Cinema Recognition</span>
                </span>
                <span className="text-slate-400 text-[11px]">9th SIIMA Awards</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
