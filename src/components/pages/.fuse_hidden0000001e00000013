import React, { useState } from 'react';
import { FEATURE_FILM, SLATE_PROJECTS } from '../../data/studioData.ts';
import { Film, Play, ArrowRight, ExternalLink, Calendar, Award } from 'lucide-react';
import { AppRoute } from '../../types.ts';

interface ProductionsPageProps {
  onNavigate: (route: AppRoute) => void;
  onOpenCinemaModal: (videoId?: string) => void;
}

export const ProductionsPage: React.FC<ProductionsPageProps> = ({ onNavigate, onOpenCinemaModal }) => {
  const [filter, setFilter] = useState<'all' | 'released' | 'upcoming'>('all');

  return (
    <div className="pt-28 pb-24 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 cmc-eyebrow mb-3">
              <span className="w-5 h-px bg-amber-400" />
              <span>STUDIO PORTFOLIO</span>
            </div>

            <div className="jitter-perspective mb-4">
              <h1 className="tilted-text-item cmc-title">
                PRODUCTIONS & RELEASES
              </h1>
            </div>

            <p className="text-slate-200 text-lg md:text-xl font-normal leading-relaxed">
              Our verified portfolio of released feature films, episodic pipelines, and active development properties.
            </p>
          </div>

          {/* Clean Segmented Filter Controls (Buttons with click handlers) */}
          <div className="flex items-center gap-1 p-1 bg-white/5 border border-white/10 rounded-xl shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'all' ? 'bg-amber-400 text-black font-bold shadow-md' : 'text-slate-200 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('released')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'released' ? 'bg-amber-400 text-black font-bold shadow-md' : 'text-slate-200 hover:text-white'
              }`}
            >
              Released
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'upcoming' ? 'bg-amber-400 text-black font-bold shadow-md' : 'text-slate-200 hover:text-white'
              }`}
            >
              Development Pipeline
            </button>
          </div>
        </div>

        {/* Marquee Featured Production: IIT Krishnamurthy */}
        {(filter === 'all' || filter === 'released') && (
          <div className="mb-16">
            <span className="cmc-eyebrow block mb-4">
              Featured Title · Proof of Execution
            </span>

            <div className="glass-card rounded-3xl overflow-hidden border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Poster Imagery */}
                <div className="lg:col-span-5 bg-black/70 p-6 sm:p-10 flex items-center justify-center relative group">
                  <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
                    <img
                      src="./p2.png"
                      alt="IIT Krishnamurthy Theatrical Poster"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <button
                      onClick={() => onOpenCinemaModal('ez6iLxDgdBU')}
                      className="absolute bottom-4 left-4 right-4 py-3 rounded-xl bg-amber-400 text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:bg-amber-300 transition-colors cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-black" />
                      <span>Play Trailer</span>
                    </button>
                  </div>
                </div>

                {/* Film Data */}
                <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200 mb-4">
                      <span className="cmc-eyebrow ">Feature Film</span>
                      <span>·</span>
                      <span>Telugu</span>
                      <span>·</span>
                      <span>2h 08m</span>
                      <span>·</span>
                      <span>4K UHD Master</span>
                      <span>·</span>
                      <span className="text-emerald-400">Released</span>
                    </div>

                    <h2 className="cmc-title text-white mb-2">
                      {FEATURE_FILM.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-200 font-mono mb-4">
                      {FEATURE_FILM.teluguTitle} · {FEATURE_FILM.tagline}
                    </p>

                    <p className="text-slate-200 text-lg md:text-xl font-normal leading-relaxed mb-6">
                      An intelligent student arrives in Hyderabad in search of his missing uncle, only to find himself entangled in a labyrinth of corporate deception and police intrigue where every clue unravels more questions than answers.
                    </p>

                    {/* Honors Box */}
                    <div className="p-4 rounded-xl bg-[#08090d]/80 border border-white/5 space-y-2 mb-6 text-sm text-slate-200">
                      <div className="flex items-center gap-2 text-amber-400 font-semibold">
                        <Award className="w-4 h-4" />
                        <span>Golden Cape Awards 2021: Nail Biting Category Award (Winner)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sky-300 font-semibold">
                        <Award className="w-4 h-4 text-sky-400" />
                        <span>9th SIIMA Awards: Best Debut Actor (Telugu) Nomination (Dandamudi Pruthvi)</span>
                      </div>
                    </div>

                    {/* Global Streaming Availability */}
                    <div className="mb-6">
                      <span className="cmc-label block mb-2">
                        Worldwide Streaming Availability
                      </span>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <a
                          href={FEATURE_FILM.releasePlatforms.primeVideoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-[#00a8e1]/15 text-[#38bdf8] border border-[#00a8e1]/30 hover:bg-[#00a8e1]/25 transition-colors flex items-center gap-1.5"
                        >
                          <i className="fa-brands fa-amazon" /> Prime Video Worldwide
                        </a>
                        <a
                          href={FEATURE_FILM.releasePlatforms.ahaVideoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-[#ff671f]/15 text-[#ff8c42] border border-[#ff671f]/30 hover:bg-[#ff671f]/25 transition-colors flex items-center gap-1.5"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#ff671f]" /> Aha Video
                        </a>
                        <button
                          onClick={() => onOpenCinemaModal('_nKFH-wbwtE')}
                          className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-[#ff0033]/15 text-red-400 border border-[#ff0033]/30 hover:bg-[#ff0033]/25 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <i className="fa-brands fa-youtube" /> YouTube 4K Full Movie
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 cmc-rule-top flex flex-wrap items-center justify-between gap-4">
                    <div className="text-sm text-slate-200">
                      Directed by <strong className="text-white font-medium">S. Sreevardhan</strong> · Produced by <strong className="text-white font-medium">Prasad Nekuri & Praneeth Nekuri</strong>
                    </div>

                    <button
                      onClick={() => onNavigate('productions/iit-krishnamurthy')}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-400 hover:text-amber-200 transition-colors cursor-pointer"
                    >
                      <span>View Title Dossier & Archive</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Development Pipeline Cards */}
        {(filter === 'all' || filter === 'upcoming') && (
          <div>
            <span className="cmc-eyebrow block mb-4">
              Active Development Pipeline
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {SLATE_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between text-sm text-slate-200 mb-4 pb-3 cmc-rule-bottom">
                      <span className="font-sans font-semibold text-amber-200">{proj.internalCode}</span>
                      <span className="cmc-tag px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                        {proj.status}
                      </span>
                    </div>

                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-1">
                      {proj.title}
                    </h3>
                    <p className="cmc-label mb-4">
                      {proj.format} · {proj.genre}
                    </p>

                    <p className="text-slate-200 text-lg md:text-xl font-normal leading-relaxed mb-6">
                      {proj.synopsis}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#08090d]/80 border border-white/5 space-y-1.5 text-sm text-slate-200 mb-6">
                      <div className="flex justify-between">
                        <span className="text-slate-200">Stage</span>
                        <span className="font-medium text-amber-400">{proj.stage}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-200">Scope</span>
                        <span className="font-medium text-slate-200">{proj.scope}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 cmc-rule-top flex items-center justify-between text-sm text-slate-200">
                    <span>Confidential Package</span>
                    <button
                      onClick={() => onNavigate('slate')}
                      className="text-amber-400 hover:text-amber-200 font-semibold cursor-pointer"
                    >
                      View Slate Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
