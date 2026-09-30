import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  HeartPulse,
  Building,
  Briefcase,
  Sparkles,
  TreePine,
  Users,
  FileCheck,
  ClipboardList,
  Heart,
  ArrowRight,
  X,
  CheckCircle2,
} from 'lucide-react';
import { TRUST_DETAILS } from '../data/portfolioData';
import { Language } from '../types';

interface TrustSectionProps {
  lang: Language;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ lang }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const icons = [
    BookOpen,
    HeartPulse,
    Building,
    Briefcase,
    Sparkles,
    TreePine,
    Users,
    FileCheck,
    ClipboardList,
    Heart,
  ];

  return (
    <section id="trust" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-amber-500/20 shadow-xl relative overflow-hidden">
          {/* Subtle background ornamentation */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Header Lockup */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'सामाजिक विकास संस्था' : 'Social Development Initiative'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              {lang === 'hi' ? TRUST_DETAILS.nameHindi : TRUST_DETAILS.name}
            </h2>

            <p className="mt-2 text-sm sm:text-base text-amber-300/90 font-medium">
              {lang === 'hi' ? TRUST_DETAILS.taglineHi : TRUST_DETAILS.taglineEn}
            </p>

            <p className="mt-5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
              {lang === 'hi' ? TRUST_DETAILS.descriptionHi : TRUST_DETAILS.descriptionEn}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                <span>{lang === 'hi' ? 'ट्रस्ट के बारे में जानें' : 'Learn More About Trust'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
              >
                <span>{lang === 'hi' ? 'ट्रस्ट कार्य से जुड़ें' : 'Collaborate With Us'}</span>
              </a>
            </div>
          </div>

          {/* 10 Focus Areas Grid */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-6 font-semibold">
              {lang === 'hi' ? 'ट्रस्ट के 10 प्रमुख कार्यक्षेत्र' : '10 Comprehensive Action Pillars'}
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {TRUST_DETAILS.corePillars.map((pillar, idx) => {
                const IconComp = icons[idx % icons.length];
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <IconComp className="w-5 h-5 text-amber-400 mb-2" />
                    <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {lang === 'hi' ? pillar.titleHi : pillar.titleEn}
                    </h5>
                    <p className="text-[11px] text-slate-300 mt-1 line-clamp-2">
                      {lang === 'hi' ? pillar.descHi : pillar.descEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed Modal on Learn More */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 mb-1">
                <Award className="w-4 h-4" />
                <span>{lang === 'hi' ? 'विस्तृत विवरण' : 'Detailed Charter'}</span>
              </div>

              <h3 className="text-2xl font-bold font-display text-slate-900">
                {lang === 'hi' ? TRUST_DETAILS.nameHindi : TRUST_DETAILS.name}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {lang === 'hi'
                  ? 'संबद्धता: प्रवीण कुमार मिश्र | कार्यक्षेत्र: कासगंज एवं पश्चिमी उत्तर प्रदेश'
                  : 'Associated with Praveen Kumar Mishra | Operational Region: Kasganj & Western UP'}
              </p>

              <div className="mt-5 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  {lang === 'hi'
                    ? 'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट का गठन समाज के वंचित, ग्रामीण एवं निर्धन परिवारों के चहुंमुखी विकास हेतु एक पारदर्शी मंच के रूप में किया गया है। ट्रस्ट का मानना है कि वास्तविक विकास तभी संभव है जब शिक्षा और स्वास्थ्य हर बच्चे और माता तक बिना किसी रुकावट के पहुंचे।'
                    : 'Dr. Ambedkar Gramin Vikas Trust was established as an accountable, transparent social instrument to support underserved families across rural Kasganj. Guided by the values of education, unity, and self-respect, the Trust bridges rural households with public welfare institutions.'}
                </p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
                    {lang === 'hi' ? 'ट्रस्ट के मुख्य संकल्प:' : 'Core Commitments:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lang === 'hi' ? 'बालिका शिक्षा एवं छात्रवृत्ति सहयोग' : 'Girl-child literacy & education support'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lang === 'hi' ? 'निःशुल्क स्वास्थ्य व नेत्र परीक्षण शिविर' : 'Free healthcare & vision testing camps'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lang === 'hi' ? 'महिला स्वरोजगार एवं सिलाई प्रशिक्षण' : 'Women vocational tailoring training'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lang === 'hi' ? 'तालाब जीर्णोद्धार एवं वृक्षारोपण' : 'Pond conservation & native saplings'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lang === 'hi' ? 'सरकारी योजनाओं में निःशुल्क मार्गदर्शन' : 'Unbiased guidance for welfare schemes'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{lang === 'hi' ? 'पारदर्शी जनसमस्या सर्वेक्षण' : 'Empirical village grievance surveys'}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors"
                >
                  {lang === 'hi' ? 'ट्रस्ट से संपर्क करें' : 'Contact the Trust'}
                </a>
                <button
                  onClick={() => setModalOpen(false)}
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
