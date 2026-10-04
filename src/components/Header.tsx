import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#08090d]/90 backdrop-blur-2xl border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark */}
        <a href="#hero" className="flex items-center space-x-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-slate-900 to-[#08090d] border border-amber-500/40 flex items-center justify-center shadow-lg group-hover:border-amber-400 group-hover:scale-105 transition-all duration-300">
            <span className="font-cinzel text-base font-black text-amber-400 tracking-wider">CMC</span>
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-lg font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors flex items-center gap-1.5 leading-tight">
              CRYSTOLYTE
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-slate-400 font-medium">
              Media Creations
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-wider font-semibold text-slate-300">
          <a href="#about" className="hover:text-amber-400 transition-colors">Studio</a>
          <a href="#feature-film" className="hover:text-amber-400 transition-colors">Feature Film</a>
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
