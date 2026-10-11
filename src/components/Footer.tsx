import React from 'react';
import { CMCLogo } from './CMCLogo.tsx';
import { STUDIO_INFO } from '../data/studioData.ts';
import { AppRoute } from '../types.ts';
import { Mail, MapPin, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (route: AppRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (route: AppRoute) => {
    if (onNavigate) {
      onNavigate(route);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-slate-400 relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Top Grid: Brand & Institutional Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <CMCLogo size="sm" showSubtitle={false} className="w-16" />
              <div className="flex flex-col border-l border-white/15 pl-3">
                <span className="font-cinzel text-base font-bold text-white tracking-[0.16em] uppercase">
                  CRYSTOLYTE MEDIA
                </span>
                <span className="text-[9px] tracking-[0.24em] uppercase text-amber-400 font-bold font-cinzel">
                  Creations · Hyderabad
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-light leading-relaxed max-w-sm">
              An independent entertainment company developing, producing, and owning premium film, television, music, and original intellectual property.
            </p>

            <p className="text-[11px] text-amber-400/90 font-cinzel font-semibold tracking-wider italic">
              "Stories born in India. Built for the world."
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-2">
              <p>Legal Entity: <strong className="text-slate-300 font-normal">{STUDIO_INFO.legalName}</strong></p>
              <p>Headquarters: <strong className="text-slate-300 font-normal">{STUDIO_INFO.location}</strong></p>
            </div>
          </div>

          {/* Core Navigation Mirror */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-cinzel font-bold text-white uppercase tracking-widest block mb-4">
              Studio & Portfolio
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('studio')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Studio Ethos & Approach
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('productions')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Productions Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('productions/iit-krishnamurthy')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  IIT Krishnamurthy (Feature Film)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('slate')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Development Slate (Untitled CMC Feature)
                </button>
              </li>
            </ul>
          </div>

          {/* Business & Corporate Hubs */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-cinzel font-bold text-white uppercase tracking-widest block mb-4">
              Corporate Hubs
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('ip-rights')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  IP & Rights Ownership
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('music')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Music & Publishing Division
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('leadership')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Executive Leadership
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('newsroom')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Press Newsroom
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('partnerships')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Institutional Partnerships
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Corporate Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-cinzel font-bold text-white uppercase tracking-widest block mb-4">
              Direct Desks
            </span>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[10px] uppercase text-slate-400 block font-mono">Business & Financing:</span>
                <a href="mailto:business@crystolytemedia.com" className="text-white hover:text-amber-400 transition-colors">
                  business@crystolytemedia.com
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase text-slate-400 block font-mono">Press & Media Relations:</span>
                <a href="mailto:press@crystolytemedia.com" className="text-white hover:text-amber-400 transition-colors">
                  press@crystolytemedia.com
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase text-slate-400 block font-mono">Territorial Distribution:</span>
                <a href="mailto:distribution@crystolytemedia.com" className="text-white hover:text-amber-400 transition-colors">
                  distribution@crystolytemedia.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Unsolicited Materials Disclaimer: Mandatory Blueprint Compliance */}
        <div className="py-6 border-b border-white/5 text-[11px] text-slate-400 leading-relaxed font-light">
          <p>
            <strong className="text-slate-300">Unsolicited Materials Legal Notice:</strong> Crystolyte Media (Crystolyte Media Creations) does not accept unsolicited scripts, treatments, concepts, screenplays, or other creative materials unless submitted through an authorized literary representative, talent agent, or licensed attorney. Any unsolicited creative material received will be deleted or returned unread without review.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Ecosystem */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            © {currentYear} {STUDIO_INFO.legalName}. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider text-slate-400">
            <span>FILM</span>
            <span>·</span>
            <span>SERIES</span>
            <span>·</span>
            <span>MUSIC</span>
            <span>·</span>
            <span>IP & RIGHTS</span>
            <span>·</span>
            <span>GLOBAL PARTNERSHIPS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
