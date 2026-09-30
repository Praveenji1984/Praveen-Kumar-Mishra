import React, { useState } from 'react';
import {
  HeartHandshake,
  GraduationCap,
  Users,
  Briefcase,
  Building,
  HeartPulse,
  Sparkles,
  Droplets,
  FileCheck,
  ClipboardList,
  MessageSquare,
  ChevronRight,
  X,
  CheckCircle,
} from 'lucide-react';
import { SOCIAL_WORK_CARDS } from '../data/portfolioData';
import { Language, SocialWorkCard } from '../types';

interface SocialWorkProps {
  lang: Language;
}

export const SocialWork: React.FC<SocialWorkProps> = ({ lang }) => {
  const [selectedCard, setSelectedCard] = useState<SocialWorkCard | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Map icon name to Lucide icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return GraduationCap;
      case 'Users':
        return Users;
      case 'Briefcase':
        return Briefcase;
      case 'Building':
        return Building;
      case 'HeartPulse':
        return HeartPulse;
      case 'Sparkles':
        return Sparkles;
      case 'Droplets':
        return Droplets;
      case 'FileCheck':
        return FileCheck;
      case 'ClipboardList':
        return ClipboardList;
      case 'MessageSquare':
      default:
        return MessageSquare;
    }
  };

  const categories = [
    { id: 'all', labelEn: 'All 10 Areas', labelHi: 'सभी 10 क्षेत्र' },
    { id: 'Education', labelEn: 'Education', labelHi: 'शिक्षा' },
    { id: 'Youth', labelEn: 'Youth & Skills', labelHi: 'युवा व कौशल' },
    { id: 'Development', labelEn: 'Rural & Infra', labelHi: 'ग्रामीण विकास' },
    { id: 'Healthcare', labelEn: 'Health & Welfare', labelHi: 'स्वास्थ्य' },
    { id: 'Civic', labelEn: 'Civic & Surveys', labelHi: 'जनसमस्या व सर्वेक्षण' },
  ];

  const filteredCards = SOCIAL_WORK_CARDS.filter((card) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'Education') return card.category === 'Education';
    if (activeFilter === 'Youth') return card.category === 'Youth' || card.category === 'Livelihood';
    if (activeFilter === 'Development')
      return card.category === 'Development' || card.category === 'Environment';
    if (activeFilter === 'Healthcare')
      return card.category === 'Healthcare' || card.category === 'Empowerment';
    if (activeFilter === 'Civic')
      return card.category === 'Civic' || card.category === 'Welfare' || card.category === 'Outreach';
    return true;
  });

  return (
    <section id="social-work" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'जनसरोकार एवं सेवा' : 'Grassroots Dedication'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'समाज सेवा एवं सामुदायिक विकास' : 'Social Work & Community Development'}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {lang === 'hi'
              ? 'कासगंज एवं आसपास के ग्रामीण क्षेत्रों में जमीनी स्तर पर संचालित 10 प्रमुख सामाजिक सरोकार एवं विकास कार्य।'
              : 'Ten factual pillars of grassroots social action, public advocacy, and community upliftment across Kasganj.'}
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl max-w-fit mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'hi' ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* 10 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card, idx) => {
            const IconComponent = getIcon(card.iconName);
            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-900/40 transition-all flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-amber-700">{card.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-500">{card.stats}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {lang === 'hi' ? card.titleHi : card.titleEn}
                  </h3>

                  {/* Card Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {lang === 'hi' ? card.descHi : card.descEn}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900 group-hover:text-amber-600 transition-colors">
                  <span>{lang === 'hi' ? 'विस्तार से जानें' : 'Explore Field Details'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Card Expansion */}
        {selectedCard && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-amber-700 font-semibold mb-2">
                <span>{selectedCard.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedCard.stats}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                {lang === 'hi' ? selectedCard.titleHi : selectedCard.titleEn}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {lang === 'hi' ? selectedCard.descHi : selectedCard.descEn}
              </p>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {lang === 'hi' ? 'प्रमुख गतिविधियां एवं परिणाम:' : 'Key Initiatives & Ground Outcomes:'}
                </h4>
                <ul className="space-y-2.5">
                  {(lang === 'hi' ? selectedCard.keyPointsHi : selectedCard.keyPointsEn).map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
                <button
                  onClick={() => setSelectedCard(null)}
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
