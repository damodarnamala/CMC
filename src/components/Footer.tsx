import React from 'react';
import { STUDIO_INFO, PRODUCERS } from '../data/studioData.ts';
import { CMCLogo } from './CMCLogo.tsx';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const praneeth = PRODUCERS[1];

  return (
    <footer className="bg-[#08090d] border-t border-white/5 pt-16 pb-12 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-16">
          
          <div className="md:col-span-5">
            <div className="mb-5">
              <CMCLogo size="sm" showSubtitle={true} className="items-start" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6 font-light">
              Founded by <strong>Prasad Nekuri</strong> and <strong>Praneeth Nekuri</strong>. Producers of the acclaimed Telugu feature film <em>IIT Krishnamurthy</em>. Committed to cinematic excellence and compelling storytelling.
            </p>
            <div className="text-xs text-slate-400 space-y-1.5 font-light">
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-amber-400" />
                <span>{STUDIO_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-amber-400" />
                <span>{STUDIO_INFO.email}</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-wider text-amber-400 mb-4 font-bold">
              Studio Navigation
            </h4>
            <div className="flex flex-col space-y-3 text-xs">
              <a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">
                Studio Ethos
              </a>
              <a href="#feature-film" className="text-slate-300 hover:text-amber-400 transition-colors">
                IIT Krishnamurthy (Poster & Media)
              </a>
              <a href="#slate" className="text-slate-300 hover:text-amber-400 transition-colors">
                Development Slate
              </a>
              <a href="#leadership" className="text-slate-300 hover:text-amber-400 transition-colors">
                Leadership & Producers
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-wider text-amber-400 mb-4 font-bold">
              Team & Leadership Channels
            </h4>
            <p className="text-xs text-slate-400 mb-2 font-light">
              Producer Praneeth Nekuri:
            </p>
            <div className="flex flex-col space-y-2 text-xs mb-4">
              <a
                href={praneeth.socialLinks?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
              >
                <i className="fa-brands fa-linkedin text-[#0077b5]" />
                <span>linkedin.com/in/praneeth-nekuri</span>
              </a>
              <a
                href={praneeth.socialLinks?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
              >
                <i className="fa-brands fa-instagram text-[#E1306C]" />
                <span>instagram.com/praneethnekuri</span>
              </a>
              <a
                href={praneeth.socialLinks?.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
              >
                <i className="fa-brands fa-facebook text-[#1877F2]" />
                <span>facebook.com/praneethnekuri</span>
              </a>
            </div>

            <p className="text-xs text-slate-400 mb-2 font-light">
              Director S. Sreevardhan (IIT Krishnamurthy):
            </p>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href="https://www.instagram.com/mr.sreevardhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2"
              >
                <i className="fa-brands fa-instagram text-[#E1306C]" />
                <span>instagram.com/mr.sreevardhan</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {currentYear} {STUDIO_INFO.name} ({STUDIO_INFO.brandName}). All rights reserved.
          </div>
          <div>
            <a href="#hero" className="hover:text-amber-400 transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
