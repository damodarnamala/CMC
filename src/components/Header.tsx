import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { CMCLogo } from './CMCLogo.tsx';
import { AppRoute } from '../types.ts';

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);

  // Exactly 4 primary core navigation items
  const primaryNavItems: { label: string; route: AppRoute }[] = [
    { label: 'HOME', route: 'home' },
    { label: 'PRODUCTIONS', route: 'productions' },
    { label: 'LEADERSHIP', route: 'leadership' },
    { label: 'CONTACT', route: 'contact' },
  ];

  // Secondary studio sections accessible via subtle "More" dropdown
  const secondaryNavItems: { label: string; route: AppRoute; desc: string }[] = [
    { label: 'STUDIO ETHOS', route: 'studio', desc: 'Institutional vision & philosophy' },
    { label: 'DEVELOPMENT SLATE', route: 'slate', desc: 'Upcoming theatrical & OTT pipeline' },
    { label: 'MUSIC PUBLISHING', route: 'music', desc: 'Independent soundtrack catalog' },
    { label: 'IP & FILM RIGHTS', route: 'ip-rights', desc: 'Enduring library asset ownership' },
    { label: 'NEWSROOM & PRESS', route: 'newsroom', desc: 'Official media announcements' },
    { label: 'INSTITUTIONAL PARTNERS', route: 'partnerships', desc: 'Global co-production alliances' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (route: AppRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSecondaryActive = secondaryNavItems.some((item) => item.route === currentRoute);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#08090d]/90 backdrop-blur-2xl cmc-rule-bottom transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Official CMC Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 group shrink-0 cursor-pointer text-left"
          aria-label="Crystolyte Media Home"
        >
          <div className="py-1">
            <CMCLogo size="sm" showSubtitle={false} className="w-14 sm:w-16 group-hover:scale-105 transition-transform" />
          </div>
        </button>

        {/* Zone 2: Primary Clean Desktop Navigation (Max 4 Core Items + More Dropdown) */}
        <nav className="cmc-label hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-8">
          {primaryNavItems.map((item) => {
            const isActive =
              currentRoute === item.route ||
              (item.route === 'productions' && currentRoute === 'productions/iit-krishnamurthy');
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`py-2 relative transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'text-amber-400 font-bold'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                )}
              </button>
            );
          })}

          {/* Elegant "More" Dropdown Menu */}
          <div className="relative" ref={moreMenuRef}>
            <button
              onClick={() => setMoreMenuOpen(!moreMenuOpen)}
              className={`py-2 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer ${
                isSecondaryActive || moreMenuOpen
                  ? 'text-amber-400 font-bold'
                  : 'text-slate-200 hover:text-white'
              }`}
              aria-expanded={moreMenuOpen}
              aria-haspopup="true"
            >
              <span>MORE</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreMenuOpen ? 'rotate-180 text-amber-400' : ''}`} />
              {isSecondaryActive && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-amber-400 rounded-full" />
              )}
            </button>

            {/* Dropdown Card */}
            {moreMenuOpen && (
              <div className="absolute top-full right-0 mt-3 w-72 rounded-2xl bg-[#0c0f17]/95 border border-white/10 shadow-2xl backdrop-blur-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-2 cmc-rule-bottom mb-1">
                  <span className="cmc-eyebrow ">
                    Studio Ecosystem
                  </span>
                </div>
                <div className="space-y-0.5">
                  {secondaryNavItems.map((sec) => {
                    const isSecActive = currentRoute === sec.route;
                    return (
                      <button
                        key={sec.route}
                        onClick={() => handleNavClick(sec.route)}
                        className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex flex-col group cursor-pointer ${
                          isSecActive
                            ? 'bg-amber-500/15 text-amber-200'
                            : 'hover:bg-white/5 text-slate-200 hover:text-white'
                        }`}
                      >
                        <span className="cmc-eyebrow group-hover:text-amber-400 transition-colors">
                          {sec.label}
                        </span>
                        <span className="text-sm text-slate-200 font-normal tracking-normal mt-0.5">
                          {sec.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>


        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-amber-400 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0f16]/98 backdrop-blur-2xl cmc-rule-bottom px-6 py-6 space-y-4 text-sm font-medium animate-in fade-in duration-200">
          {/* Primary Mobile Items */}
          <div className="space-y-1">
            <span className="cmc-eyebrow px-2 block mb-1">
              Core Navigation
            </span>
            {primaryNavItems.map((item) => {
              const isActive =
                currentRoute === item.route ||
                (item.route === 'productions' && currentRoute === 'productions/iit-krishnamurthy');
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`block w-full text-left px-3 py-2.5 rounded-xl text-sm uppercase tracking-wider font-semibold transition-colors ${
                    isActive ? 'bg-amber-500/15 text-amber-400 font-bold' : 'text-slate-200 hover:bg-white/5 hover:text-amber-200'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Secondary Mobile Items */}
          <div className="pt-3 cmc-rule-top space-y-1">
            <span className="cmc-label px-2 block mb-1">
              More Studio Sections
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {secondaryNavItems.map((sec) => (
                <button
                  key={sec.route}
                  onClick={() => handleNavClick(sec.route)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium tracking-wide uppercase transition-colors ${
                    currentRoute === sec.route
                      ? 'bg-amber-500/10 text-amber-400'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 cmc-rule-top">
            <button
              onClick={() => handleNavClick('partnerships')}
              className="cmc-btn cmc-btn-primary w-full py-3 rounded-xl text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
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
