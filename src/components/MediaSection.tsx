import React, { useState } from 'react';
import { Newspaper, CheckCircle, Calendar, ExternalLink, FileText, Share2 } from 'lucide-react';
import { MEDIA_UPDATES } from '../data/portfolioData';
import { Language } from '../types';

interface MediaSectionProps {
  lang: Language;
}

export const MediaSection: React.FC<MediaSectionProps> = ({ lang }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const types = [
    { id: 'all', labelEn: 'All Updates', labelHi: 'सभी अपडेट' },
    { id: 'News', labelEn: 'News Coverage', labelHi: 'समाचार' },
    { id: 'Statement', labelEn: 'Public Statements', labelHi: 'सार्वजनिक वक्तव्य' },
    { id: 'Interview', labelEn: 'Interviews', labelHi: 'साक्षात्कार' },
  ];

  const filtered =
    activeFilter === 'all'
      ? MEDIA_UPDATES
      : MEDIA_UPDATES.filter((m) => m.type === activeFilter);

  return (
    <section id="media" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
            <Newspaper className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'सत्यापित समाचार व वक्तव्य' : 'Verified Press & Statements'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'मीडिया एवं सार्वजनिक अपडेट' : 'Media & Updates'}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {lang === 'hi'
              ? 'केवल सत्यापित समाचार कवरेज, अधिकृत सार्वजनिक वक्तव्य और सामाजिक गतिविधियों का आधिकारिक संकलन।'
              : 'Only verified press publications, public interest statements, and community engagement updates.'}
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl max-w-fit mb-8">
          {types.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveFilter(t.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === t.id
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'hi' ? t.labelHi : t.labelEn}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {item.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-700">
                      {lang === 'hi' ? item.publicationHi : item.publicationEn}
                    </span>
                  </div>

                  {item.verified && (
                    <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{lang === 'hi' ? 'सत्यापित' : 'Verified'}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {lang === 'hi' ? item.titleHi : item.titleEn}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang === 'hi' ? item.summaryHi : item.summaryEn}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>
                  {lang === 'hi'
                    ? 'कासगंज जनसरोकार संकलन'
                    : 'Kasganj Public Archive'}
                </span>
                <span className="font-semibold text-blue-900">
                  {lang === 'hi' ? 'दस्तावेजीकृत विवरण' : 'Documented Archive'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
