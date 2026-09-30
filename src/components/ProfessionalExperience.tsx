import React from 'react';
import { Briefcase, Building, Sun, Shield, HardHat, CheckCircle2, MapPin } from 'lucide-react';
import { PROFESSIONAL_EXPERIENCE } from '../data/portfolioData';
import { Language } from '../types';

interface ExperienceProps {
  lang: Language;
}

export const ProfessionalExperience: React.FC<ExperienceProps> = ({ lang }) => {
  const getExperienceIcon = (id: string) => {
    switch (id) {
      case 'raghav-foundation-enterprise':
      case 'sai-vikking':
        return Sun;
      case 'ss-engineers':
        return Shield;
      case 'raghav-foundation':
        return Building;
      case 'govt-contractor-social':
      default:
        return HardHat;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'व्यावसायिक पृष्ठभूमि' : 'Career & Industry Experience'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'व्यावसायिक अनुभव एवं उद्यम' : 'Professional Experience'}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {lang === 'hi'
              ? 'सौर ऊर्जा उपकरण, अग्निशामक संयंत्र प्रशासन, अवसंरचना विपणन और शासकीय निर्माण कार्यों में सुदीर्घ व्यावहारिक अनुभव।'
              : 'A documented career spanning clean renewable energy, safety engineering administration, civil project marketing, and government development execution.'}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-6 md:ml-8 pl-6 sm:pl-10 space-y-12">
          {PROFESSIONAL_EXPERIENCE.map((item, idx) => {
            const IconComp = getExperienceIcon(item.id);
            return (
              <div key={item.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-blue-900 flex items-center justify-center text-blue-900 shadow-xs group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Card Container */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-amber-700 tracking-wide uppercase">
                        {lang === 'hi' ? item.roleHi : item.roleEn}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                        {lang === 'hi' ? item.companyHi : item.companyEn}
                      </h3>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="inline-block text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                        {item.period}
                      </span>
                      <div className="flex items-center sm:justify-end gap-1 text-[11px] text-slate-400 mt-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{lang === 'hi' ? item.locationHi : item.locationEn}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lang === 'hi' ? item.descHi : item.descEn}
                  </p>

                  {/* Bulleted Highlights */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      {lang === 'hi' ? 'प्रमुख कार्यक्षेत्र एवं उपलब्धियां:' : 'Key Operational Scope & Responsibilities:'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(lang === 'hi' ? item.highlightsHi : item.highlightsEn).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
