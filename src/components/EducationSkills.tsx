import React from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Calendar,
  Building,
  HeartHandshake,
  Megaphone,
  TreePine,
  Eye,
  FolderKanban,
  Building2,
  TrendingUp,
  Briefcase,
  Smartphone,
  FileSpreadsheet,
  Users,
  Award,
} from 'lucide-react';
import { EDUCATION_LIST, SKILLS_LIST } from '../data/portfolioData';
import { Language } from '../types';

interface EducationSkillsProps {
  lang: Language;
  onOpenCareerAdvisor?: () => void;
}

export const EducationSkills: React.FC<EducationSkillsProps> = ({ lang, onOpenCareerAdvisor }) => {
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Megaphone':
        return Megaphone;
      case 'TreePine':
        return TreePine;
      case 'Eye':
        return Eye;
      case 'FolderKanban':
        return FolderKanban;
      case 'Building2':
        return Building2;
      case 'TrendingUp':
        return TrendingUp;
      case 'Briefcase':
        return Briefcase;
      case 'Smartphone':
        return Smartphone;
      case 'FileSpreadsheet':
        return FileSpreadsheet;
      case 'Users':
        return Users;
      case 'Award':
      default:
        return Award;
    }
  };

  return (
    <section id="education" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Education Subsection */}
        <div className="mb-16">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'hi' ? 'उच्च शैक्षणिक योग्यता' : 'Academic Credentials'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              {lang === 'hi' ? 'शिक्षा एवं शैक्षणिक पृष्ठभूमि' : 'Education'}
            </h2>
            <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              {lang === 'hi'
                ? 'डॉ. भीमराव आंबेडकर विश्वविद्यालय, आगरा से गणित में स्नातकोत्तर (M.Sc.) एवं स्नातक (B.Sc.)।'
                : 'Advanced academic background in pure and applied mathematics providing strong analytical, logical, and structured problem-solving foundation.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between hover:border-blue-900/30 transition-all shadow-xs"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-900/5 rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-md">
                      {edu.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {lang === 'hi' ? edu.degreeHi : edu.degreeEn}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 mt-1 mb-3">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lang === 'hi' ? edu.institutionHi : edu.institutionEn}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lang === 'hi' ? edu.detailsHi : edu.detailsEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] text-slate-400">
                  {lang === 'hi' ? 'सत्यापित शैक्षणिक उपाधि' : 'Verified Academic Degree'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Subsection */}
        <div>
          {/* AI Career Advisor Feature Banner for Youth */}
          <div className="mb-10 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-2xl p-6 sm:p-7 text-white border border-amber-500/30 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'कासगंज युवा विशेष' : 'Kasganj Youth Initiative'}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                {lang === 'hi'
                  ? 'एआई युवा करियर एवं हुनर सलाहकार'
                  : 'AI Youth Career & Vocational Skills Advisor'}
              </h3>
              <p className="text-xs text-slate-300">
                {lang === 'hi'
                  ? 'अपनी शिक्षा व रुचि के अनुसार सौर ऊर्जा, तकनीकी ट्रेड्स, और सरकारी रोजगार हेतु व्यक्तिगत रोडमैप प्राप्त करें।'
                  : 'Get an AI-guided development roadmap tailored to rural & semi-urban employment and technical trades.'}
              </p>
            </div>

            <button
              onClick={onOpenCareerAdvisor}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <span>{lang === 'hi' ? 'करियर रोडमैप बनाएं' : 'Launch Career Advisor'}</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'hi' ? 'दक्षता एवं अनुभव क्षेत्र' : 'Core Competencies'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
              {lang === 'hi' ? 'कौशल एवं अनुभव के प्रमुख क्षेत्र' : 'Skills & Areas of Experience'}
            </h3>
            <div className="w-16 h-1 bg-amber-500 mt-2 rounded-full" />
            <p className="mt-2 text-slate-600 text-sm">
              {lang === 'hi'
                ? 'जनसंवाद, जमीनी सर्वेक्षण, सामाजिक जागरूकता, प्रशासनिक समन्वय और परियोजना प्रबंधन में 12 प्रमुख क्षेत्र।'
                : '12 core domains combining grassroots leadership, public communication, administrative excellence, and technical coordination.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SKILLS_LIST.map((skill, idx) => {
              const IconComp = getSkillIcon(skill.icon);
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-950 text-amber-400 flex items-center justify-center">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {lang === 'hi' ? skill.nameHi : skill.nameEn}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
