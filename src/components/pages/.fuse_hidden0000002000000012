import React, { useState } from 'react';
import { NEWSROOM_ARTICLES } from '../../data/studioData.ts';
import { NewsArticle, AppRoute } from '../../types.ts';
import { Newspaper, Calendar, Clock, ArrowRight, ExternalLink, X, Mail } from 'lucide-react';

interface NewsroomPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const NewsroomPage: React.FC<NewsroomPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = ['All', 'Company News', 'Productions', 'Distribution', 'Festivals'];

  const filteredArticles = selectedCategory === 'All'
    ? NEWSROOM_ARTICLES
    : NEWSROOM_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 cmc-eyebrow mb-3">
              <span className="w-5 h-px bg-amber-400" />
              <span>OFFICIAL PRESS & ANNOUNCEMENTS</span>
            </div>

            <div className="jitter-perspective mb-4">
              <h1 className="tilted-text-item cmc-title">
                NEWSROOM & ARCHIVES
              </h1>
            </div>

            <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
              The official source for Crystolyte Media press releases, production milestones, distribution partnerships, and festival recognition.
            </p>
          </div>

          {/* Press Contact Pill */}
          <div className="p-4 rounded-2xl glass-card border border-white/10 shrink-0 text-xs text-slate-300">
            <span className="cmc-eyebrow block mb-1">
              Press & Media Inquiries
            </span>
            <a href="mailto:press@crystolytemedia.com" className="text-white hover:text-amber-400 transition-colors font-medium flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>press@crystolytemedia.com</span>
            </a>
          </div>
        </div>

        {/* Category Filters (Segmented Control buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black font-bold shadow-md'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="glass-card rounded-2xl p-7 border border-white/10 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 group cursor-pointer"
              onClick={() => setActiveArticle(article)}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-300 mb-4 pb-3 border-b border-white/10">
                  <span className="cmc-tag px-2.5 py-0.5 rounded-full bg-white/5">
                    {article.category}
                  </span>
                  <span className="font-mono text-xs text-slate-300">{article.date}</span>
                </div>

                <h2 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-200 transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-slate-300 text-sm sm:text-sm font-normal leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5 font-mono text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </span>
                <span className="text-amber-400 group-hover:translate-x-1 transition-transform font-semibold inline-flex items-center gap-1">
                  <span>Read Wire</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Reader for Full Press Article */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/20 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl">
              
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close Announcement"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-300 mb-3 pb-3 border-b border-white/10">
                <span className="cmc-eyebrow ">{activeArticle.category}</span>
                <span>·</span>
                <span className="font-mono">{activeArticle.date}</span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="cmc-title text-white mb-6 leading-tight">
                {activeArticle.title}
              </h2>

              <div className="space-y-4 text-slate-200 text-sm sm:text-base font-normal leading-relaxed mb-8">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                <span className="text-slate-300 font-mono">
                  Source: {activeArticle.verifiedSource || "Crystolyte Media Corporate Press Wire"}
                </span>

                {activeArticle.linkUrl && (
                  <a
                    href={activeArticle.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cmc-btn cmc-btn-primary px-4 py-2 rounded-lg font-bold uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <span>{activeArticle.linkText || "View Reference"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
