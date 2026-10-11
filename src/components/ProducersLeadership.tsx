import React, { useState, useRef } from 'react';
import { PRODUCERS, DIRECTOR } from '../data/studioData.ts';
import { ExternalLink, Instagram, Linkedin, Facebook, UserCheck, Briefcase, Sparkles, Building2, Camera, Upload, Trash2, Check } from 'lucide-react';
import { AppRoute } from '../types.ts';

interface ProducersLeadershipProps {
  onNavigate?: (route: AppRoute) => void;
  isStandalone?: boolean;
}

export const ProducersLeadership: React.FC<ProducersLeadershipProps> = ({ onNavigate, isStandalone = false }) => {
  const [prasadImgErr, setPrasadImgErr] = useState(false);
  const [praneethImgErr, setPraneethImgErr] = useState(false);
  const [sreevardhanImgErr, setSreevardhanImgErr] = useState(false);
  const [customPhoto, setCustomPhoto] = useState<string>(() => {
    try {
      return localStorage.getItem('sreevardhan_custom_photo') || '';
    } catch {
      return '';
    }
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setCustomPhoto(result);
        try {
          localStorage.setItem('sreevardhan_custom_photo', result);
        } catch (err) {
          console.error('Failed to save to localStorage', err);
        }
        setSreevardhanImgErr(false);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhoto('');
    try {
      localStorage.removeItem('sreevardhan_custom_photo');
    } catch {}
    setSreevardhanImgErr(false);
  };

  const prasad = PRODUCERS[0];
  const praneeth = PRODUCERS[1];

  return (
    <section id="leadership" className={`py-20 sm:py-24 relative z-10 ${!isStandalone ? 'border-t border-white/5 bg-[#0a0d13]/60' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <span className="w-5 h-px bg-amber-400" />
            <span>EXECUTIVE GOVERNANCE & CREATIVE PARTNERS</span>
            <span className="w-5 h-px bg-amber-400" />
          </div>

          <div className="jitter-perspective mb-4">
            <h2 className="tilted-text-item font-cinzel text-3xl sm:text-5xl font-extrabold text-white">
              LEADERSHIP & COLLABORATORS
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            The foundation of an expanding entertainment enterprise. Crystolyte Media combines institutional business governance with an authorial creative community to build sustainable, globally scalable properties.
          </p>
        </div>

        {/* Primary Executive Leadership (Prasad Nekuri & Praneeth Nekuri) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          
          {/* ======================================================== */}
          {/* Executive 1: Prasad Nekuri (Founder & Chairman)          */}
          {/* ======================================================== */}
          <div className="glass-card rounded-3xl p-7 sm:p-9 border border-amber-500/25 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group">
            <div>
              {/* Photo & Identity Header */}
              <div className="flex items-center gap-4 sm:gap-5 mb-6">
                
                {/* Prasad Portrait */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl bg-slate-900 shrink-0 relative group/photo">
                  {!prasadImgErr ? (
                    <img
                      src="./prasad_nekuri.png"
                      alt="Prasad Nekuri - Founder & Chairman"
                      className="w-full h-full object-cover object-top group-hover/photo:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.retried) {
                          target.dataset.retried = 'true';
                          target.src = '/prasad_nekuri.jpg';
                        } else {
                          setPrasadImgErr(true);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-500/20 via-slate-900 to-black flex items-center justify-center font-cinzel font-bold text-2xl text-amber-400">
                      PN
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30 uppercase tracking-wider inline-block">
                      {prasad.role}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide leading-tight truncate">
                    {prasad.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-medium mt-0.5 font-mono">
                    {prasad.designation}
                  </span>
                </div>

              </div>

              {/* Sophisticated Executive Bio */}
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {prasad.bio}
              </p>

              {/* Institutional Focus Points */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#08090d]/80 border border-white/5 space-y-2.5 text-xs text-slate-200 mb-6">
                {prasad.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                    <span className="leading-snug text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Crystolyte Media · Hyderabad</span>
              <span className="text-amber-400/90 font-mono text-[11px] uppercase tracking-wider">Executive Board</span>
            </div>
          </div>

          {/* ======================================================== */}
          {/* Executive 2: Praneeth Nekuri (CEO & Producer)            */}
          {/* ======================================================== */}
          <div className="glass-card rounded-3xl p-7 sm:p-9 border border-amber-500/25 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 group">
            <div>
              {/* Photo & Identity Header */}
              <div className="flex items-center gap-4 sm:gap-5 mb-6">
                
                {/* Praneeth Portrait */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-xl bg-slate-900 shrink-0 relative group/photo">
                  {!praneethImgErr ? (
                    <img
                      src="./praneeth.png"
                      alt="Praneeth Nekuri - CEO & Producer"
                      className="w-full h-full object-cover object-top group-hover/photo:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.retried) {
                          target.dataset.retried = 'true';
                          target.src = '/praneeth.jpg';
                        } else {
                          setPraneethImgErr(true);
                        }
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-500/20 via-slate-900 to-black flex items-center justify-center font-cinzel font-bold text-2xl text-amber-400">
                      PN
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30 uppercase tracking-wider inline-block">
                      {praneeth.role}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide leading-tight truncate">
                    {praneeth.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block font-medium mt-0.5 font-mono">
                    {praneeth.designation}
                  </span>
                </div>

              </div>

              {/* Sophisticated Executive Bio */}
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {praneeth.bio}
              </p>

              {/* Institutional Focus Points */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#08090d]/80 border border-white/5 space-y-2.5 text-xs text-slate-200 mb-6">
                {praneeth.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                    <span className="leading-snug text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social / Direct Connect */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Crystolyte Media & Helping Hands</span>
              <div className="flex items-center gap-3">
                {praneeth.socialLinks?.linkedin && (
                  <a
                    href={praneeth.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {praneeth.socialLinks?.instagram && (
                  <a
                    href={praneeth.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-pink-400 transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {praneeth.socialLinks?.facebook && (
                  <a
                    href={praneeth.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* Creative Collaborator: SreeVardhan (Writer & Director)   */}
        {/* ======================================================== */}
        <div className="max-w-6xl mx-auto glass-card rounded-3xl p-7 sm:p-9 border border-white/10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-2">
                <span className="w-5 h-px bg-amber-400" />
                <span>CREATIVE COLLABORATOR</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mb-1">
                {DIRECTOR.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-amber-400/90 font-mono mb-4">
                {DIRECTOR.role} · Writer & Director of {DIRECTOR.filmTitle}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                {DIRECTOR.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
                {DIRECTOR.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                    <span className="font-medium text-slate-300">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-7 rounded-2xl bg-black/50 border border-amber-500/20 text-center relative group/director">
              {/* Hidden file input for direct photo upload & replacement */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />

              {/* Profile Image with Cinematic Lighting, Click-to-upload & Hover Action */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                title="Click to upload/replace portrait photo"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-amber-400/60 shadow-2xl bg-slate-900 shrink-0 relative mb-4 group-hover/director:border-amber-400 transition-all duration-300 cursor-pointer group/avatar"
              >
                {!sreevardhanImgErr && (customPhoto || DIRECTOR.photo || './sreevardhan.svg') ? (
                  <img
                    src={customPhoto || DIRECTOR.photo || './sreevardhan.svg'}
                    alt="S. Sreevardhan - Writer & Director"
                    className="w-full h-full object-cover object-center group-hover/avatar:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={() => {
                      setSreevardhanImgErr(true);
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-amber-500/25 to-slate-900 flex flex-col items-center justify-center font-cinzel font-bold text-2xl text-amber-400">
                    <span>SS</span>
                    <span className="text-[9px] uppercase tracking-widest font-mono text-amber-300/70 mt-1">DIRECTOR</span>
                  </div>
                )}

                {/* Hover overlay with Camera icon to indicate upload/replace */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-amber-300 backdrop-blur-[2px] p-2">
                  <Camera className="w-6 h-6 mb-1 text-amber-400 animate-pulse" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                    {customPhoto ? 'Change Photo' : 'Upload Photo'}
                  </span>
                </div>

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl" />
              </div>

              {/* Upload confirmation banner */}
              {uploadSuccess && (
                <div className="mb-2.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-medium flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Profile picture replaced!</span>
                </div>
              )}

              <div className="mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30 uppercase tracking-wider inline-block">
                  Creative Collaborator
                </span>
              </div>
              <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white tracking-wide">
                {DIRECTOR.name}
              </h4>
              <p className="text-xs uppercase tracking-wider text-amber-400/90 font-mono font-medium mt-0.5 mb-3">
                {DIRECTOR.expertise || "Genre Filmmaking & Narrative Pacing"}
              </p>

              {/* Action Buttons: Upload Photo & Instagram */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 hover:bg-amber-500/25 hover:border-amber-400 transition-colors cursor-pointer shadow-sm"
                  title="Upload any portrait image file from your device"
                >
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span>{customPhoto ? 'Replace Photo' : 'Upload Picture'}</span>
                </button>

                {customPhoto && (
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="p-1.5 rounded-full text-xs bg-red-500/15 text-red-300 border border-red-500/30 hover:bg-red-500/25 transition-colors cursor-pointer shadow-sm"
                    title="Remove custom photo and restore director crest"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-red-400" />
                  </button>
                )}

                {DIRECTOR.instagram && (
                  <a
                    href={DIRECTOR.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#E1306C]/15 text-pink-300 border border-[#E1306C]/30 flex items-center gap-1.5 hover:bg-[#E1306C]/25 transition-colors shadow-sm"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>@mr.sreevardhan</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* Expanding Executive Architecture (C-Suite Additions)    */}
        {/* ======================================================== */}
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                  Expanding Corporate Organization
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm font-light">
                  Architected to support future executive additions as Crystolyte Media scales slate financing, distribution, and franchise licensing.
                </p>
              </div>
              <span className="text-xs uppercase tracking-wider text-amber-400 font-mono font-semibold">
                Institutional Growth Framework
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="glass-card rounded-2xl p-6 border border-white/5 bg-[#090b10]/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Executive Chair</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-amber-400 border border-white/10">Active Search</span>
                </div>
                <h5 className="font-cinzel text-sm sm:text-base font-bold text-white mb-1">
                  VP, Global Distribution & Licensing
                </h5>
                <p className="text-slate-400 text-xs font-light leading-snug">
                  Overseeing worldwide SVOD/AVOD licensing, international theatrical sales, and airline syndication windows.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-white/5 bg-[#090b10]/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Executive Chair</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">Retained Advisory</span>
                </div>
                <h5 className="font-cinzel text-sm sm:text-base font-bold text-white mb-1">
                  Head of Slate Finance & Legal Affairs
                </h5>
                <p className="text-slate-400 text-xs font-light leading-snug">
                  Structuring institutional capital waterfalls, co-production treaty compliance, and clean chain-of-title governance.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-white/5 bg-[#090b10]/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Executive Chair</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">Operational Division</span>
                </div>
                <h5 className="font-cinzel text-sm sm:text-base font-bold text-white mb-1">
                  Director of Franchise & Brand Partnerships
                </h5>
                <p className="text-slate-400 text-xs font-light leading-snug">
                  Managing transmedia property expansions, music sync publishing, and high-value strategic brand alliances.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
