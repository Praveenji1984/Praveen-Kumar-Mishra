import React, { useState } from 'react';
import {
  Compass,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  Video,
  X,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { INITIATIVES_DATA } from '../data/portfolioData';
import { Language, InitiativeItem } from '../types';

interface InitiativesProps {
  lang: Language;
  onOpenVideoModal?: (initiativeId?: string) => void;
}

export const Initiatives: React.FC<InitiativesProps> = ({ lang, onOpenVideoModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeInitiative, setActiveInitiative] = useState<InitiativeItem | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Initiatives', labelHi: 'सभी अभियान' },
    { id: 'Jan Samasya Survey', labelEn: 'Jan Samasya Survey', labelHi: 'जनसमस्या सर्वेक्षण' },
    { id: 'Education Awareness', labelEn: 'Education Awareness', labelHi: 'शिक्षा जागरूकता' },
    { id: 'Career Guidance', labelEn: 'Career Guidance', labelHi: 'करियर मार्गदर्शन' },
    { id: 'Water Conservation', labelEn: 'Water Conservation', labelHi: 'जल संचयन' },
    { id: 'Environmental Awareness', labelEn: 'Environment', labelHi: 'पर्यावरण' },
    { id: 'Government Scheme Awareness', labelEn: 'Scheme Awareness', labelHi: 'योजना सहायता' },
  ];

  const filtered =
    selectedCategory === 'all'
      ? INITIATIVES_DATA
      : INITIATIVES_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section id="initiatives" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'जमीनी परियोजनाएं' : 'Field Actions & Portfolio'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'हमारी पहल एवं जमीनी अभियान' : 'Our Initiatives & Field Projects'}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {lang === 'hi'
              ? 'जनसमस्या सर्वेक्षण, शिक्षा प्रसार, करियर मार्गदर्शन और पर्यावरण संरक्षण के क्षेत्र में संचालित सतत कार्य।'
              : 'Documented field programs and ground outreach initiatives in Kasganj and surrounding rural blocks.'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-fit mb-8 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === c.id
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'hi' ? c.labelHi : c.labelEn}
            </button>
          ))}
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Graphic Banner */}
              <div className="relative h-44 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 p-5 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-semibold tracking-wider text-amber-400 uppercase bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {item.category}
                  </span>
                  {item.hasVideo && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                      <Video className="w-3 h-3 text-red-400" />
                      <span>Video</span>
                    </span>
                  )}
                </div>

                <div className="z-10">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(245,158,11,0.15),transparent_70%)]" />
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{lang === 'hi' ? item.locationHi : item.locationEn}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {lang === 'hi' ? item.descHi : item.descEn}
                  </p>
                </div>

                {/* Metrics & Action */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.impactMetrics}</span>
                  </div>

                  <button
                    onClick={() => setActiveInitiative(item)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors cursor-pointer"
                  >
                    <span>{lang === 'hi' ? 'विवरण देखें' : 'View Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full Initiative detail */}
        {activeInitiative && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveInitiative(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs text-amber-700 font-semibold uppercase mb-1 tracking-wider">
                {activeInitiative.category}
              </div>

              <h3 className="text-2xl font-bold font-display text-slate-900">
                {lang === 'hi' ? activeInitiative.titleHi : activeInitiative.titleEn}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2 pb-4 border-b border-slate-100">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{lang === 'hi' ? activeInitiative.locationHi : activeInitiative.locationEn}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{activeInitiative.date}</span>
                </span>
                <span className="flex items-center gap-1 font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{activeInitiative.impactMetrics}</span>
                </span>
              </div>

              <div className="mt-4 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="font-medium text-slate-800">
                  {lang === 'hi' ? activeInitiative.descHi : activeInitiative.descEn}
                </p>
                <p>
                  {lang === 'hi' ? activeInitiative.fullContentHi : activeInitiative.fullContentEn}
                </p>
              </div>

              {activeInitiative.hasVideo && (
                <div className="mt-5 p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-blue-900 font-medium">
                    <Video className="w-4 h-4 text-blue-700" />
                    <span>
                      {lang === 'hi'
                        ? 'इस अभियान का वीडियो भाषण गैलरी में उपलब्ध है।'
                        : 'Field speech recording available in the video gallery.'}
                    </span>
                  </div>
                  <a
                    href="#videos"
                    onClick={() => setActiveInitiative(null)}
                    className="text-xs font-bold text-blue-900 hover:text-amber-700 underline"
                  >
                    {lang === 'hi' ? 'वीडियो देखें' : 'Watch Video'}
                  </a>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  onClick={() => setActiveInitiative(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  {lang === 'hi' ? 'बंद करें' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
