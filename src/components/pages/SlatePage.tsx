import React from 'react';
import { DevelopmentSlate } from '../DevelopmentSlate.tsx';
import { AppRoute } from '../../types.ts';
import { ArrowLeft } from 'lucide-react';

interface SlatePageProps {
  onNavigate: (route: AppRoute) => void;
}

export const SlatePage: React.FC<SlatePageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-200 hover:text-amber-400 transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Studio Overview</span>
        </button>

        <DevelopmentSlate onNavigate={onNavigate} isStandalone={true} />
      </div>
    </div>
  );
};
