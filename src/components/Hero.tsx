import React from 'react';
import { ArrowRight, Heart, Users, GraduationCap, HeartPulse, TreePine, MapPin, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';
import { PortraitArtwork } from './PortraitArtwork';

interface HeroProps {
  lang: Language;
  onOpenVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const pillars = [
    {
      titleEn: 'Empowering People',
      titleHi: 'जन सशक्तिकरण',
      icon: Heart,
    },
    {
      titleEn: 'Education for All',
      titleHi: 'सर्वशिक्षा',
      icon: GraduationCap,
    },
    {
      titleEn: 'Community Development',
      titleHi: 'सामुदायिक विकास',
      icon: Users,
    },
    {
      titleEn: 'Healthcare Support',
      titleHi: 'स्वास्थ्य सेवा',
      icon: HeartPulse,
    },
    {
      titleEn: 'Environment Care',
      titleHi: 'पर्यावरण संरक्षण',
      icon: TreePine,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white pt-12 pb-16 lg:py-20 border-b border-slate-800">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headlines & Presentation */}
          <div className="lg:col-span-7 space-y-6">
            {/* Location & Trust Marker */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3.5 py-1.5 rounded-full shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>
                  {lang === 'hi'
                    ? '100 - कासगंज विधानसभा क्षेत्र | विधायक 2027 जनसेवा संकल्प'
                    : '100 - Kasganj Vidhan Sabha | Mission MLA 2027'}
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>
                  {lang === 'hi'
                    ? 'कार्यालय: गंजडुंडवारा (कासगंज) 207242'
                    : 'Office: Ganjdundwara (Kasganj) 207242'}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white text-balance leading-tight">
                {lang === 'hi' ? PERSONAL_INFO.nameHindi : PERSONAL_INFO.name}
              </h1>
              <p className="mt-3 text-base sm:text-lg lg:text-xl font-medium text-amber-400/95 tracking-wide">
                {lang === 'hi' ? PERSONAL_INFO.subheadlineHi : PERSONAL_INFO.subheadlineEn}
              </p>
            </div>

            {/* Additional line & Mission statement */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {lang === 'hi' ? PERSONAL_INFO.additionalLineHi : PERSONAL_INFO.additionalLineEn}
            </p>

            {/* Humble Request & Village Outreach Banner with MY BIG AIM */}
            <div className="bg-gradient-to-r from-amber-500/15 via-blue-900/30 to-slate-900/80 p-3.5 sm:p-4 rounded-xl border border-amber-500/30 text-xs sm:text-sm text-slate-200 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-400 uppercase tracking-wider text-[11px]">
                  <Heart className="w-3.5 h-3.5 fill-current text-rose-400" />
                  <span>
                    {lang === 'hi'
                      ? 'मेरा मुख्य संकल्प (MY BIG AIM): पलायन मुक्त कासगंज'
                      : 'MY BIG AIM: Local Jobs & Halting Youth Migration'}
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {lang === 'hi' ? 'कासगंज (100)' : 'Kasganj 100'}
                </span>
              </div>
              <p className="text-slate-100 font-medium leading-relaxed">
                {lang === 'hi'
                  ? '“मैं कासगंज विधानसभा क्षेत्र (100) के युवाओं को स्थानीय स्तर पर रोजगार उपलब्ध कराऊँगा ताकि युवाओं का पलायन रोका जा सके और वे अपने घर में माता-पिता के साथ जीवन जी सकें।”'
                  : '“I will provide local employment to the youth of Kasganj (100) so that out-migration can be stopped and they can live at home with their parents.”'}
              </p>
              <p className="text-[11px] text-slate-300 border-t border-white/10 pt-1.5">
                {lang === 'hi'
                  ? 'गाँव-गाँव चौपाल, जनसमस्या निवारण एवं एक सुशिक्षित (M.Sc. गणित) पारदर्शी नेतृत्व द्वारा कासगंज की सेवा का संकल्प।'
                  : 'Regular village tours, solving civic grievances, and dedicated public representation for Kasganj Vidhan Sabha 2027.'}
              </p>
            </div>

            {/* Cultural Tagline */}
            <div className="pt-1 border-l-2 border-amber-500/70 pl-4">
              <p className="text-sm font-semibold tracking-wide text-slate-200">
                {lang === 'hi' ? PERSONAL_INFO.taglineHindi : PERSONAL_INFO.taglineEnglish}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'hi'
                  ? 'सत्य, निष्ठा, पारदर्शिता और निस्वार्थ जनसेवा का मार्ग।'
                  : 'Committed to positive change, grassroots dignity, and dedicated community service.'}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md hover:shadow-amber-400/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'hi' ? 'प्रवीण जी का परिचय' : 'About Praveen'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#vision-kasganj"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-blue-700/80 hover:bg-blue-600/90 border border-blue-500/40 rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-xs"
              >
                <span>{lang === 'hi' ? '100-कासगंज विजन 2027' : 'Kasganj Vision 2027'}</span>
              </a>

              <a
                href="#social-work"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'hi' ? 'समाज सेवा कार्य' : 'Social Work'}</span>
              </a>

              <a
                href="#contribute"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-white bg-purple-900/80 hover:bg-purple-800/90 border border-purple-500/40 rounded-lg transition-all cursor-pointer whitespace-nowrap shadow-xs"
              >
                <span>{lang === 'hi' ? 'चुनावी जनसहयोग (UPI)' : 'Support Campaign'}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-blue-200 hover:text-white bg-blue-900/40 hover:bg-blue-900/70 border border-blue-700/40 rounded-lg transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{lang === 'hi' ? 'कार्यालय / संपर्क' : 'Connect'}</span>
              </a>
            </div>

            {/* Factual Highlights strip */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'hi' ? 'एम.एससी. गणित (2011)' : 'M.Sc. Mathematics (2011)'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'hi' ? 'राघव फाउंडेशन प्रोजेक्ट्स' : 'Raghav Foundation Projects'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'hi' ? 'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट' : 'Dr. Ambedkar Gramin Vikas Trust'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Portrait Artwork & Dignified Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-gradient-to-b from-slate-800/90 to-slate-900/95 p-3 rounded-2xl border border-amber-500/30 shadow-2xl relative">
              {/* Gold decorative accent lines */}
              <div className="absolute top-2 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

              <PortraitArtwork
                type="hero"
                className="w-full h-80 sm:h-96 rounded-xl"
                alt="Praveen Kumar Mishra - Social Worker & Public Leader"
              />

              {/* Dignified Quote underneath */}
              <div className="mt-3 px-3 py-2.5 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                <p className="text-xs italic text-amber-200/90 font-serif">
                  "The best way to find yourself is to lose yourself in the service of others."
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  {lang === 'hi'
                    ? 'कासगंज की जनसेवा एवं ग्रामीण विकास को समर्पित'
                    : 'Dedicated to community empowerment in Kasganj, Uttar Pradesh'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Five Pillars Banner matching owner's authentic banner */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <p className="text-center text-xs uppercase tracking-widest text-slate-400 mb-6 font-semibold">
            {lang === 'hi' ? 'सामुदायिक विकास के मुख्य स्तंभ' : 'Five Core Pillars of Community Service'}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-2">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    {lang === 'hi' ? pillar.titleHi : pillar.titleEn}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
