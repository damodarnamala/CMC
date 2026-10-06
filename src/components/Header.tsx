import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CMCLogo } from './CMCLogo.tsx';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#08090d]/90 backdrop-blur-2xl border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10 h-20 flex items-center justify-between">
        
        {/* Zone 1: Official CMC Brand Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="py-1">
            <CMCLogo size="sm" showSubtitle={false} className="w-16 sm:w-20 group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col border-l border-white/15 pl-3">
            <span className="font-cinzel text-sm sm:text-base font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors flex items-center gap-1 leading-tight">
              CRYSTOLYTE
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.28em] uppercase text-amber-400/90 font-semibold font-cinzel">
              Creative Works
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-wider font-semibold text-slate-300">
          <a href="#about" className="hover:text-amber-400 transition-colors">Studio</a>
          <a href="#feature-film" className="hover:text-amber-400 transition-colors">IIT Krishnamurthy</a>
          <a href="#leadership" className="hover:text-amber-400 transition-colors">Producers</a>
          <a href="#slate" className="hover:text-amber-400 transition-colors">Projects in Development</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-amber-400 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131824]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 text-sm font-medium">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400"
          >
            Studio Ethos
          </a>
          <a
            href="#feature-film"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400"
          >
            Feature Film (IIT Krishnamurthy)
          </a>
          <a
            href="#leadership"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400"
          >
            Producers & Leadership
          </a>
          <a
            href="#slate"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-amber-400"
          >
            Projects in Development
          </a>
        </div>
      )}
    </header>
  );
};
