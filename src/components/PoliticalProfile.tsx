import React from 'react';
import {
  Landmark,
  Shield,
  MapPin,
  User,
  FileText,
  CheckCircle2,
  Heart,
  Vote,
  GraduationCap,
  Users2,
  Building2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Clock,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface PoliticalProfileProps {
  lang: Language;
}

export const PoliticalProfile: React.FC<PoliticalProfileProps> = ({ lang }) => {
  const p = PERSONAL_INFO.politicalAffiliation;
  const m = PERSONAL_INFO.mlaMission2027;

  return (
    <section id="political-profile" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            <Landmark className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {lang === 'hi'
                ? '100 - कासगंज विधानसभा | जनसेवा एवं राजनीतिक दायित्व'
                : '100 - Kasganj Assembly | Public Service & Leadership'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'कासगंज (100) विधानसभा: जनसेवा एवं विधायक 2027 संकल्प' : 'Public Profile & Kasganj (100) MLA 2027 Mission'}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'hi'
              ? 'कासगंज की सम्मानित जनता के आशीर्वाद और सहयोग से एक सुशिक्षित (M.Sc. गणित), कर्मठ और सर्वसुलभ नेतृत्व द्वारा क्षेत्र का चहुंमुखी विकास।'
              : 'Dedicated preparation to represent the esteemed citizens of 100 - Kasganj Vidhan Sabha Kshetra through educated, honest, and accessible leadership in 2027.'}
          </p>
        </div>

        {/* Highlight 1: Humble Request & Heartfelt Appeal to Kasganj Assembly (100) */}
        <div className="mb-12 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-1 shadow-lg text-slate-900">
          <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/70 rounded-[22px] p-6 sm:p-10 border border-amber-200/80">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-amber-200/60">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xs">
                  <Vote className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? m.badgeHi : m.badgeEn}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-950">
                  {lang === 'hi' ? 'कासगंज वासियों से विनम्र करबद्ध प्रार्थना' : 'A Humble Appeal to the People of Kasganj'}
                </h3>
              </div>

              {/* Office Location tag */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/90 border border-amber-300/80 shadow-xs self-start lg:self-auto text-xs sm:text-sm text-slate-800">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <span className="text-[11px] font-bold text-amber-900 uppercase block">
                    {lang === 'hi' ? 'स्थायी जनसंपर्क कार्यालय' : 'Public Contact Office'}
                  </span>
                  <span className="font-semibold">{PERSONAL_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Appeal Text */}
            <div className="mt-6 space-y-4">
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed italic border-l-4 border-amber-500 pl-4 py-1">
                "{lang === 'hi' ? m.humbleAppealHi : m.humbleAppealEn}"
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {lang === 'hi' ? m.leadershipIntroHi : m.leadershipIntroEn}
              </p>
            </div>

            {/* Village Outreach Action Banner */}
            <div className="mt-8 p-5 bg-blue-950 text-white rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {lang === 'hi' ? 'गाँव-गाँव जनसंवाद एवं चौपाल अभियान' : 'Village-to-Village Public Dialogue & Redressal'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    {lang === 'hi'
                      ? 'कासगंज (100) के प्रत्येक गाँव, मजरे और वार्ड में जाकर स्थानीय समस्याओं को सुनना और अधिकारियों से तत्काल समाधान कराना।'
                      : 'Meeting villagers on the ground, assessing unpaved roads, water logging, school needs, and resolving civic grievances.'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
                    lang === 'hi'
                      ? 'प्रणाम प्रवीण जी, हम हमारे गाँव / वार्ड में जनसंवाद चौपाल आयोजित करना चाहते हैं।'
                      : 'Hello Praveen ji, we would like to invite you for a village chaupal/grievance meeting in Kasganj 100.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'गाँव में चौपाल हेतु संपर्क' : 'Request Village Chaupal'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why a Qualified Leader for Kasganj (100) Grid */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase font-bold text-amber-600 tracking-wider">
              {lang === 'hi' ? 'सक्षम एवं योग्य नेतृत्व' : 'Competent & Educated Leadership'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              {lang === 'hi' ? 'कासगंज (100) के लिए प्रवीण कुमार मिश्र क्यों?' : 'Why Praveen Kumar Mishra for Kasganj (100)?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {lang === 'hi'
                ? 'कासगंज की विधानसभा संख्या 100 को चाहिए एक ऐसा प्रतिनिधि जो उच्च शिक्षित हो, जमीनी हकीकत जानता हो और हर नागरिक के लिए चौबीसों घंटे उपलब्ध रहे।'
                : 'Assembly 100 needs a leader who is intellectually qualified, deeply grounded in rural challenges, and permanently accessible.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {m.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  {pillar.id === 'qualified' && <GraduationCap className="w-6 h-6" />}
                  {pillar.id === 'village-outreach' && <Users2 className="w-6 h-6" />}
                  {pillar.id === 'accessible' && <Building2 className="w-6 h-6" />}
                  {pillar.id === 'clean-politics' && <Shield className="w-6 h-6" />}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {lang === 'hi' ? pillar.titleHi : pillar.titleEn}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lang === 'hi' ? pillar.descHi : pillar.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fact Card: Verified Political & Organizational Profile */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  {lang === 'hi' ? 'उत्तर प्रदेश राज्य संगठन' : 'Uttar Pradesh State Executive'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display mt-1 text-white">
                  {lang === 'hi' ? p.partyHi : p.partyEn}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-xs font-medium text-slate-200 self-start sm:self-auto border border-white/10">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>{lang === 'hi' ? 'सत्यापित संगठनात्मक दायित्व' : 'Verified Organizational Role'}</span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  {lang === 'hi' ? 'नाम' : 'Full Name'}
                </span>
                <p className="text-base font-bold text-slate-900">
                  {lang === 'hi' ? PERSONAL_INFO.nameHindi : PERSONAL_INFO.name}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  {lang === 'hi' ? 'राज्य' : 'State'}
                </span>
                <p className="text-base font-bold text-slate-900">
                  {lang === 'hi' ? 'उत्तर प्रदेश, भारत' : 'Uttar Pradesh, India'}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  {lang === 'hi' ? 'विधानसभा क्षेत्र संख्या एवं नाम' : 'Constituency Number & Name'}
                </span>
                <p className="text-base font-bold text-amber-600">
                  {lang === 'hi' ? PERSONAL_INFO.constituencyNameHi : PERSONAL_INFO.constituencyNameEn}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  {lang === 'hi' ? 'संगठन में पदभार' : 'Organization & Position'}
                </span>
                <p className="text-base font-bold text-blue-900">
                  {lang === 'hi' ? p.positionHi : p.positionEn}
                </p>
              </div>

              <div className="space-y-1 md:col-span-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  {lang === 'hi' ? 'स्थायी कार्यालय का पता' : 'Permanent Office Address'}
                </span>
                <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{PERSONAL_INFO.address}</span>
                </p>
              </div>

              <div className="space-y-1 md:col-span-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                  {lang === 'hi' ? 'सार्वजनिक भूमिका' : 'Public Role'}
                </span>
                <p className="text-base font-medium text-slate-800">
                  {lang === 'hi' ? p.roleHi : p.roleEn}
                </p>
              </div>
            </div>

            {/* Transparency Note */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-amber-950 flex items-start gap-3">
              <FileText className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-amber-900 mb-0.5">
                  {lang === 'hi' ? 'पारदर्शिता एवं आचार संहिता नोट:' : 'Transparency & Ethics Note:'}
                </p>
                <p className="text-amber-900/90 leading-relaxed">
                  {lang === 'hi' ? p.transparencyNoteHi : p.transparencyNoteEn}
                </p>
              </div>
            </div>

            {/* Factual Commitments */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'hi' ? 'कासगंज (100) के हर गाँव तक निरंतर पहुँच' : 'Reaching every village across Kasganj (100)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'hi' ? 'किसानों, युवाओं और बुजुर्गों की सीधी सुनवाई' : 'Direct hearing for farmers, youth & seniors'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'hi' ? 'शिक्षा, सड़क, बिजली और स्थानीय उद्योगों पर ठोस कार्य' : 'Tangible work on education, roads, power & local industries'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'hi' ? 'गंजडुंडवारा कार्यालय पर 24x7 जनसुविधा' : '24x7 citizen help at Ganjdundwara office'}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2 p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 font-semibold">
                <Heart className="w-4 h-4 text-rose-600 shrink-0" />
                <span>
                  {lang === 'hi'
                    ? 'मेरा मुख्य संकल्प (MY BIG AIM): कासगंज (100) के युवाओं को स्थानीय रोजगार देकर पलायन रोकना, ताकि वे अपने घर में माता-पिता के साथ रह सकें।'
                    : 'MY BIG AIM: Local jobs in Kasganj 100 to stop youth migration, enabling youth to live with their parents.'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
