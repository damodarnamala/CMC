import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CMCLogo } from './CMCLogo.tsx';
import { AppRoute } from '../types.ts';

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; route: AppRoute }[] = [
    { label: 'HOME', route: 'home' },
    { label: 'STUDIO', route: 'studio' },
    { label: 'PRODUCTIONS', route: 'productions' },
    { label: 'DEVELOPMENT SLATE', route: 'slate' },
    { label: 'MUSIC', route: 'music' },
    { label: 'IP & RIGHTS', route: 'ip-rights' },
    { label: 'LEADERSHIP', route: 'leadership' },
    { label: 'NEWSROOM', route: 'newsroom' },
    { label: 'PARTNERSHIPS', route: 'partnerships' },
    { label: 'CONTACT', route: 'contact' },
  ];

  const handleNavClick = (route: AppRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#08090d]/90 backdrop-blur-2xl border-b border-white/5 transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        
        {/* Zone 1: Official CMC Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 group shrink-0 cursor-pointer text-left"
          aria-label="Crystolyte Media Home"
        >
          <div className="py-1">
            <CMCLogo size="sm" showSubtitle={false} className="w-14 sm:w-16 group-hover:scale-105 transition-transform" />
          </div>
          <div className="flex flex-col border-l border-white/15 pl-3">
            <span className="font-cinzel text-sm sm:text-base font-bold tracking-[0.16em] text-white group-hover:text-amber-400 transition-colors flex items-center gap-1 leading-tight uppercase whitespace-nowrap">
              CRYSTOLYTE MEDIA
            </span>
            <span className="text-[8px] tracking-[0.24em] uppercase text-amber-400/90 font-bold font-cinzel whitespace-nowrap">
              Creations · Corporate HQ
            </span>
          </div>
        </button>

        {/* Zone 2: Primary Desktop Navigation (All 10 required items) */}
        <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-5 text-[11px] font-semibold tracking-wider uppercase text-slate-300 shrink-0">
          {navItems.map((item) => {
            const isActive =
              currentRoute === item.route ||
              (item.route === 'productions' && currentRoute === 'productions/iit-krishnamurthy');
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`py-1 relative transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-amber-400 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-amber-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Compact Navigation for Medium Screens (lg to xl) */}
        <nav className="hidden md:flex xl:hidden items-center space-x-3 text-[11px] font-semibold tracking-wider uppercase text-slate-300">
          {navItems.slice(0, 5).map((item) => (
            <button
              key={item.route}
              onClick={() => handleNavClick(item.route)}
              className={`py-1 transition-colors whitespace-nowrap cursor-pointer ${
                currentRoute === item.route ? 'text-amber-400 font-bold' : 'hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-amber-400 font-medium text-[11px] hover:underline cursor-pointer"
          >
            More ▾
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action (Top Bar Contract Compliant) */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('partnerships')}
            className="btn-gold-luxury px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-bold whitespace-nowrap shadow-lg cursor-pointer flex items-center gap-1.5"
          >
            <span>Partner With CMC</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-amber-400 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0f16]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-3 text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              currentRoute === item.route ||
              (item.route === 'productions' && currentRoute === 'productions/iit-krishnamurthy');
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`block w-full text-left py-2 text-xs uppercase tracking-wider font-semibold transition-colors ${
                  isActive ? 'text-amber-400 font-bold' : 'text-slate-200 hover:text-amber-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => handleNavClick('partnerships')}
              className="btn-gold-luxury w-full py-3 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Partner With CMC</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
