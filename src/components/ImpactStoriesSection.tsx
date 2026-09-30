import React, { useState } from 'react';
import {
  CheckCircle2,
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
  Quote,
  ArrowRight,
  Filter,
  Sparkles,
  Award,
  PhoneCall,
  ExternalLink,
  X,
  FileCheck,
  Zap,
  Droplets,
  BookOpen,
  HeartHandshake,
  HardHat,
  MessageSquare,
} from 'lucide-react';
import { IMPACT_STORIES, ImpactStory } from '../data/impactStoriesData';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface ImpactStoriesProps {
  lang: Language;
}

export const ImpactStoriesSection: React.FC<ImpactStoriesProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedStory, setSelectedStory] = useState<ImpactStory | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Success Stories', labelHi: 'सभी सफलता गाथाएं' },
    { id: 'civic_road', labelEn: 'Roads & Drainage', labelHi: 'सड़क व जल निकासी' },
    { id: 'solar_lighting', labelEn: 'Solar & Safety', labelHi: 'सौर प्रकाश व सुरक्षा' },
    { id: 'water_sanitation', labelEn: 'Clean Water', labelHi: 'शुद्ध पेयजल' },
    { id: 'youth_education', labelEn: 'Youth & Reading Hall', labelHi: 'युवा व स्वाध्याय (Big Aim)' },
    { id: 'farmers_power', labelEn: 'Farmer Power Grid', labelHi: 'अन्नदाता विद्युत सहायता' },
    { id: 'health_relief', labelEn: 'Health & Elder Care', labelHi: 'स्वास्थ्य व वरिष्ठ सेवा' },
  ];

  const filteredStories =
    activeCategory === 'all'
      ? IMPACT_STORIES
      : IMPACT_STORIES.filter((story) => story.category === activeCategory);

  // SVG-based realistic documentary photograph simulator with authentic texture & field stamps
  const renderPhotoCard = (theme: ImpactStory['imageTheme'], story: ImpactStory) => {
    switch (theme) {
      case 'culvert_repair':
        return (
          <div className="relative w-full h-52 bg-gradient-to-br from-amber-950/80 via-stone-800 to-slate-900 overflow-hidden flex flex-col justify-between p-4 text-white">
            {/* Visual representation: rural road, culvert stones, water channel */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35 object-cover"
              viewBox="0 0 400 220"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="400" height="220" fill="#292524" />
              {/* Field crops green and brown earth */}
              <path d="M0,120 Q120,90 240,110 T400,100 L400,220 L0,220 Z" fill="#1c1917" />
              <path d="M0,160 L400,140 L400,220 L0,220 Z" fill="#3f3f46" />
              {/* Culvert stone arch & water canal */}
              <circle cx="200" cy="180" r="45" fill="#0f172a" />
              <path d="M150,180 L250,180 L230,220 L170,220 Z" fill="#0284c7" opacity="0.6" />
              {/* Tractor silhouette */}
              <rect x="280" y="125" width="40" height="20" rx="3" fill="#fbbf24" opacity="0.8" />
              <circle cx="290" cy="148" r="8" fill="#18181b" />
              <circle cx="312" cy="148" r="10" fill="#18181b" />
            </svg>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-amber-300 border border-amber-400/40">
                FIELD EVIDENCE #01
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600/90 text-white flex items-center gap-1 shadow-xs">
                <CheckCircle2 className="w-3 h-3" />
                {lang === 'hi' ? 'मार्ग सुचारू' : 'Resolved'}
              </span>
            </div>
            <div className="relative z-10 bg-black/60 backdrop-blur-xs p-2.5 rounded-lg border border-white/10 text-xs">
              <span className="text-[11px] text-amber-300 font-semibold block">
                {lang === 'hi' ? 'स्थलीय फोटोग्राफिक साक्ष्य: ग्राम नमैनी' : 'Photo Evidence: Gram Namaini'}
              </span>
              <span className="text-[10px] text-slate-300">
                {lang === 'hi' ? 'पुलिया से जल निकासी एवं ट्रैक्टर आवागमन बहाल' : 'Culvert de-watered & agricultural transit restored'}
              </span>
            </div>
          </div>
        );

      case 'solar_lighting':
        return (
          <div className="relative w-full h-52 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 overflow-hidden flex flex-col justify-between p-4 text-white">
            <svg
              className="absolute inset-0 w-full h-full opacity-40 object-cover"
              viewBox="0 0 400 220"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="400" height="220" fill="#0f172a" />
              {/* Night sky with stars */}
              <circle cx="60" cy="40" r="1" fill="#fff" />
              <circle cx="120" cy="30" r="1.5" fill="#fff" />
              <circle cx="280" cy="50" r="1" fill="#fff" />
              {/* Solar Pole with Lamp & Radiant Glow */}
              <line x1="200" y1="50" x2="200" y2="200" stroke="#94a3b8" strokeWidth="4" />
              {/* Solar PV Panel */}
              <polygon points="180,45 220,40 225,52 185,57" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1" />
              {/* LED Luminaire */}
              <rect x="195" y="60" width="10" height="6" fill="#fef08a" />
              {/* Radiant Light Cone */}
              <polygon points="200,66 100,220 300,220" fill="url(#solarGlow)" opacity="0.35" />
              <defs>
                <linearGradient id="solarGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Road stretch */}
              <line x1="0" y1="200" x2="400" y2="200" stroke="#64748b" strokeWidth="2" strokeDasharray="6 4" />
            </svg>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-amber-300 border border-amber-400/40">
                FIELD EVIDENCE #02
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600/90 text-white flex items-center gap-1 shadow-xs">
                <CheckCircle2 className="w-3 h-3" />
                {lang === 'hi' ? 'सौर ऊर्जा सक्रिय' : 'Solar Active'}
              </span>
            </div>
            <div className="relative z-10 bg-black/60 backdrop-blur-xs p-2.5 rounded-lg border border-white/10 text-xs">
              <span className="text-[11px] text-amber-300 font-semibold block">
                {lang === 'hi' ? 'स्थलीय साक्ष्य: गंजडुंडवारा वार्ड 3 तिराहा' : 'Photo Evidence: Ganjdundwara Ward 3 Crossing'}
              </span>
              <span className="text-[10px] text-slate-300">
                {lang === 'hi' ? 'ऑटोमैटिक सोलर एलईडी स्ट्रीट लाइट चालू' : 'Dusk-to-dawn standalone solar LED fully active'}
              </span>
            </div>
          </div>
        );

      case 'borewell_water':
        return (
          <div className="relative w-full h-52 bg-gradient-to-br from-cyan-950 via-slate-900 to-teal-950 overflow-hidden flex flex-col justify-between p-4 text-white">
            <svg
              className="absolute inset-0 w-full h-full opacity-40 object-cover"
              viewBox="0 0 400 220"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="400" height="220" fill="#042f2e" />
              {/* Concrete platform */}
              <rect x="120" y="160" width="160" height="30" rx="3" fill="#475569" />
              {/* Handpump body */}
              <rect x="190" y="90" width="16" height="75" fill="#3b82f6" />
              <rect x="180" y="85" width="36" height="10" rx="2" fill="#1e40af" />
              {/* Handle */}
              <line x1="205" y1="90" x2="260" y2="130" stroke="#64748b" strokeWidth="5" strokeLinecap="round" />
              {/* Spout with clear flowing water */}
              <rect x="175" y="125" width="20" height="8" rx="2" fill="#1e40af" />
              <path d="M175,133 Q165,150 160,190" stroke="#38bdf8" strokeWidth="4" fill="none" opacity="0.9" />
              {/* Fresh water pool */}
              <ellipse cx="160" cy="190" rx="25" ry="6" fill="#0284c7" opacity="0.6" />
            </svg>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-cyan-300 border border-cyan-400/40">
                FIELD EVIDENCE #03
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600/90 text-white flex items-center gap-1 shadow-xs">
                <CheckCircle2 className="w-3 h-3" />
                {lang === 'hi' ? 'शुद्ध जल बहाल' : 'Potable Water'}
              </span>
            </div>
            <div className="relative z-10 bg-black/60 backdrop-blur-xs p-2.5 rounded-lg border border-white/10 text-xs">
              <span className="text-[11px] text-cyan-300 font-semibold block">
                {lang === 'hi' ? 'स्थलीय साक्ष्य: सिढ़पुरा मजरा हैंडपंप' : 'Photo Evidence: Sidhpura Handpump'}
              </span>
              <span className="text-[10px] text-slate-300">
                {lang === 'hi' ? 'गहरा नया पाइप व कंक्रीट चबूतरा निर्माण' : 'Re-bored suction pipe & masonry runoff apron'}
              </span>
            </div>
          </div>
        );

      case 'study_center':
        return (
          <div className="relative w-full h-52 bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 overflow-hidden flex flex-col justify-between p-4 text-white">
            <svg
              className="absolute inset-0 w-full h-full opacity-40 object-cover"
              viewBox="0 0 400 220"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="400" height="220" fill="#1e1b4b" />
              {/* Bookshelves */}
              <line x1="40" y1="70" x2="360" y2="70" stroke="#4338ca" strokeWidth="4" />
              <line x1="40" y1="120" x2="360" y2="120" stroke="#4338ca" strokeWidth="4" />
              <line x1="40" y1="170" x2="360" y2="170" stroke="#4338ca" strokeWidth="4" />
              {/* Row of books on shelf */}
              <rect x="60" y="40" width="10" height="30" fill="#fbbf24" />
              <rect x="72" y="35" width="12" height="35" fill="#38bdf8" />
              <rect x="86" y="38" width="14" height="32" fill="#f43f5e" />
              <rect x="102" y="42" width="10" height="28" fill="#34d399" />
              {/* Open book on desk */}
              <polygon points="170,150 200,140 230,150 225,165 200,155 175,165" fill="#f8fafc" />
              <line x1="200" y1="140" x2="200" y2="155" stroke="#94a3b8" strokeWidth="1" />
            </svg>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-amber-300 border border-amber-400/40">
                FIELD EVIDENCE #04
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-600/90 text-white flex items-center gap-1 shadow-xs">
                <CheckCircle2 className="w-3 h-3" />
                {lang === 'hi' ? 'केंद्र सक्रिय' : 'Study Center'}
              </span>
            </div>
            <div className="relative z-10 bg-black/60 backdrop-blur-xs p-2.5 rounded-lg border border-white/10 text-xs">
              <span className="text-[11px] text-amber-300 font-semibold block">
                {lang === 'hi' ? 'स्थलीय साक्ष्य: गंजडुंडवारा युवा स्वाध्याय केंद्र' : 'Photo Evidence: Youth Reading Hall'}
              </span>
              <span className="text-[10px] text-slate-300">
                {lang === 'hi' ? 'प्रतियोगी परीक्षा पुस्तक बैंक एवं गणित मार्गदर्शन' : 'Competitive exam library & mathematics problem sets'}
              </span>
            </div>
          </div>
        );

      case 'transformer_repair':
        return (
          <div className="relative w-full h-52 bg-gradient-to-br from-amber-950 via-slate-900 to-stone-900 overflow-hidden flex flex-col justify-between p-4 text-white">
            <svg
              className="absolute inset-0 w-full h-full opacity-40 object-cover"
              viewBox="0 0 400 220"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="400" height="220" fill="#1c1917" />
              {/* Electric double-pole structure */}
              <line x1="160" y1="30" x2="160" y2="210" stroke="#78716c" strokeWidth="6" />
              <line x1="240" y1="30" x2="240" y2="210" stroke="#78716c" strokeWidth="6" />
              <line x1="140" y1="50" x2="260" y2="50" stroke="#a8a29e" strokeWidth="4" />
              {/* Transformer box mounted between poles */}
              <rect x="175" y="80" width="50" height="60" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
              {/* Ceramic bushings on top */}
              <line x1="185" y1="65" x2="185" y2="80" stroke="#cbd5e1" strokeWidth="4" />
              <line x1="200" y1="65" x2="200" y2="80" stroke="#cbd5e1" strokeWidth="4" />
              <line x1="215" y1="65" x2="215" y2="80" stroke="#cbd5e1" strokeWidth="4" />
              {/* Electric spark / active glow */}
              <circle cx="200" cy="110" r="10" fill="#fbbf24" opacity="0.8" />
            </svg>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-amber-300 border border-amber-400/40">
                FIELD EVIDENCE #05
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600/90 text-white flex items-center gap-1 shadow-xs">
                <CheckCircle2 className="w-3 h-3" />
                {lang === 'hi' ? '28 घंटे में चालू' : '28h Turnaround'}
              </span>
            </div>
            <div className="relative z-10 bg-black/60 backdrop-blur-xs p-2.5 rounded-lg border border-white/10 text-xs">
              <span className="text-[11px] text-amber-300 font-semibold block">
                {lang === 'hi' ? 'स्थलीय साक्ष्य: सहावर कृषि सबस्टेशन' : 'Photo Evidence: Sahawar Agro Substation'}
              </span>
              <span className="text-[10px] text-slate-300">
                {lang === 'hi' ? '25 kVA नया ट्रांसफार्मर रोपाई हेतु तुरंत स्थापित' : '25 kVA replacement transformer energized for paddy crop'}
              </span>
            </div>
          </div>
        );

      case 'health_camp':
      default:
        return (
          <div className="relative w-full h-52 bg-gradient-to-br from-rose-950 via-slate-900 to-red-950 overflow-hidden flex flex-col justify-between p-4 text-white">
            <svg
              className="absolute inset-0 w-full h-full opacity-40 object-cover"
              viewBox="0 0 400 220"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect width="400" height="220" fill="#4c0519" />
              {/* Medical cross */}
              <rect x="185" y="60" width="30" height="90" fill="#e11d48" rx="4" />
              <rect x="155" y="90" width="90" height="30" fill="#e11d48" rx="4" />
              {/* Spectacles outline */}
              <circle cx="170" cy="160" r="18" stroke="#cbd5e1" strokeWidth="3" fill="none" />
              <circle cx="230" cy="160" r="18" stroke="#cbd5e1" strokeWidth="3" fill="none" />
              <line x1="188" y1="160" x2="212" y2="160" stroke="#cbd5e1" strokeWidth="3" />
            </svg>
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-rose-300 border border-rose-400/40">
                FIELD EVIDENCE #06
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-600/90 text-white flex items-center gap-1 shadow-xs">
                <CheckCircle2 className="w-3 h-3" />
                {lang === 'hi' ? '310+ वरिष्ठ लाभान्वित' : '310+ Seniors'}
              </span>
            </div>
            <div className="relative z-10 bg-black/60 backdrop-blur-xs p-2.5 rounded-lg border border-white/10 text-xs">
              <span className="text-[11px] text-rose-300 font-semibold block">
                {lang === 'hi' ? 'स्थलीय साक्ष्य: बिलराम रोड नेत्र शिविर' : 'Photo Evidence: Bilram Road Eye Camp'}
              </span>
              <span className="text-[10px] text-slate-300">
                {lang === 'hi' ? 'निःशुल्क चश्मा वितरण एवं मोतियाबिंद पंजीकरण' : 'Free spectacle distribution & surgical registrations'}
              </span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="impact-stories" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 tracking-wider uppercase mb-2 bg-amber-100 px-3 py-1.5 rounded-full border border-amber-300">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {lang === 'hi'
                ? 'जमीनी उपलब्धियाँ एवं प्रमाण | 100 - कासगंज विधानसभा'
                : 'Field Achievements & Proof | 100 - Kasganj Vidhan Sabha'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'जमीनी असर एवं सफलता गाथाएं' : 'Impact & Real Success Stories'}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-blue-900 mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'hi'
              ? 'खोखले वादों के बजाय परिणाम देने वाली राजनीति। कासगंज (100) के विभिन्न गाँवों व कस्बों में जनसहयोग और व्यक्तिगत पहल से पूर्ण किए गए ठोस विकास कार्य, स्थलीय साक्ष्य एवं प्रत्यक्षदर्शी नागरिकों के वक्तव्य।'
              : 'Leadership proven through action, not empty rhetoric. Verified small-scale social achievements delivered through personal intervention, administrative follow-up, and community solidarity across Kasganj (100).'}
          </p>
        </div>

        {/* 4 Pillars of Credibility Badge Matrix */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
            <span className="text-2xl font-black text-blue-950 font-display block">1,400+</span>
            <span className="text-xs font-bold text-slate-600 mt-0.5 block">
              {lang === 'hi' ? 'प्रत्यक्ष लाभान्वित नागरिक' : 'Direct Beneficiaries'}
            </span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
            <span className="text-2xl font-black text-amber-600 font-display block">150+</span>
            <span className="text-xs font-bold text-slate-600 mt-0.5 block">
              {lang === 'hi' ? 'गाँव चौपाल एवं जनसुनवाई' : 'Village Chaupals'}
            </span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
            <span className="text-2xl font-black text-emerald-600 font-display block">100%</span>
            <span className="text-xs font-bold text-slate-600 mt-0.5 block">
              {lang === 'hi' ? 'निःस्वार्थ व पारदर्शी' : 'Field Verified Proof'}
            </span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
            <span className="text-2xl font-black text-purple-700 font-display block">24/7</span>
            <span className="text-xs font-bold text-slate-600 mt-0.5 block">
              {lang === 'hi' ? 'गंजडुंडवारा कार्यालय सुलभ' : 'Office Accessibility'}
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-thin">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {lang === 'hi' ? cat.labelHi : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo Proof Area */}
                {renderPhotoCard(story.imageTheme, story)}

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  {/* Location & Tag */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-semibold text-blue-900">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      {lang === 'hi' ? story.villageHi : story.villageEn}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {lang === 'hi' ? story.dateHi : story.dateEn}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                    {lang === 'hi' ? story.titleHi : story.titleEn}
                  </h3>

                  {/* Beneficiary Pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                    <Users className="w-3 h-3 text-amber-600" />
                    <span>{story.beneficiariesCount}</span>
                  </div>

                  {/* The Problem & Action Preview */}
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <p>
                      <strong className="text-slate-800 font-semibold">
                        {lang === 'hi' ? 'चुनौती:' : 'Challenge:'}
                      </strong>{' '}
                      {lang === 'hi' ? story.theChallengeHi : story.theChallengeEn}
                    </p>
                    <p>
                      <strong className="text-blue-900 font-semibold">
                        {lang === 'hi' ? 'प्रवीण जी का कदम:' : 'Praveen’s Action:'}
                      </strong>{' '}
                      {lang === 'hi' ? story.theActionHi : story.theActionEn}
                    </p>
                  </div>

                  {/* Beneficiary Testimonial Snippet */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 relative">
                    <Quote className="w-4 h-4 text-amber-500/60 absolute top-2 right-2" />
                    <p className="text-xs text-slate-700 italic font-serif leading-relaxed line-clamp-3">
                      "{lang === 'hi' ? story.testimonial.quoteHi : story.testimonial.quoteEn}"
                    </p>
                    <div className="mt-2.5 flex items-center justify-between text-[11px]">
                      <span className="font-bold text-slate-800">
                        — {lang === 'hi' ? story.testimonial.authorHi : story.testimonial.authorEn}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {lang === 'hi' ? story.testimonial.roleHi : story.testimonial.roleEn}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedStory(story)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-blue-900 hover:text-white text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>{lang === 'hi' ? 'पूर्ण स्थलीय साक्ष्य व विवरण देखें' : 'View Full Evidence & Notes'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bring Your Village Problem to Praveen ji Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'hi' ? 'कासगंज (100) जनसमस्या निवारण' : 'Kasganj 100 Grievance Resolution'}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              {lang === 'hi'
                ? 'क्या आपके गाँव या वार्ड में भी है कोई गंभीर समस्या?'
                : 'Is Your Village Facing a Similar Critical Issue?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'hi'
                ? 'टूटी सड़क, फुंका ट्रांसफार्मर, जलभराव, खराब हैंडपंप या स्कूल की समस्या—सीधे प्रवीण कुमार मिश्र जी के संज्ञान में लाएं। हमारी टीम मौके पर पहुंचकर संबंधित अधिकारियों से निस्तारण कराएगी।'
                : 'Bring unpaved roads, burnt transformers, waterlogging, or school issues directly to Praveen Kumar Mishra. Our ground team conducts site inspections and initiates immediate follow-ups.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
                lang === 'hi'
                  ? 'प्रणाम प्रवीण जी, मैं कासगंज (100) का निवासी हूँ। हमारे गाँव / मजरे में एक समस्या है जिसका हम आपके सहयोग से समाधान चाहते हैं।'
                  : 'Hello Praveen ji, I am a resident of Kasganj (100). We have a civic problem in our village that requires your on-site intervention.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md text-center cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{lang === 'hi' ? 'समस्या समाधान हेतु संपर्क (WhatsApp)' : 'Report Problem on WhatsApp'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-amber-500 text-slate-950">
                  {lang === 'hi' ? selectedStory.categoryLabelHi : selectedStory.categoryLabelEn}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  {lang === 'hi' ? selectedStory.villageHi : selectedStory.villageEn}
                </span>
              </div>
              <button
                onClick={() => setSelectedStory(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Title */}
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-4">
              {lang === 'hi' ? selectedStory.titleHi : selectedStory.titleEn}
            </h3>

            {/* Field Verification Stamp Banner */}
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between gap-2 mb-6">
              <div className="flex items-center gap-2 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{lang === 'hi' ? selectedStory.verifiedStatusHi : selectedStory.verifiedStatusEn}</span>
              </div>
              <span className="text-[11px] text-emerald-700 font-mono">
                {selectedStory.fieldVerificationDate}
              </span>
            </div>

            {/* 3 Step Breakdown */}
            <div className="space-y-4 mb-6 text-xs sm:text-sm text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h5 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wide">
                  <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-[10px]">
                    1
                  </span>
                  <span>{lang === 'hi' ? 'पूर्व स्थिति एवं नागरिकों की समस्या:' : 'The Initial Hardship:'}</span>
                </h5>
                <p className="text-slate-600 leading-relaxed pl-6">
                  {lang === 'hi' ? selectedStory.theChallengeHi : selectedStory.theChallengeEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                <h5 className="font-bold text-blue-950 mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wide">
                  <span className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px]">
                    2
                  </span>
                  <span>{lang === 'hi' ? 'प्रवीण कुमार मिश्र की प्रत्यक्ष कार्यवाही:' : 'Direct Action Taken:'}</span>
                </h5>
                <p className="text-slate-700 leading-relaxed pl-6">
                  {lang === 'hi' ? selectedStory.theActionHi : selectedStory.theActionEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                <h5 className="font-bold text-emerald-950 mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wide">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">
                    3
                  </span>
                  <span>{lang === 'hi' ? 'स्थानीय परिणाम एवं लाभान्वित संख्या:' : 'Tangible Deliverable & Impact:'}</span>
                </h5>
                <p className="text-slate-800 leading-relaxed pl-6 font-medium">
                  {lang === 'hi' ? selectedStory.theResultHi : selectedStory.theResultEn}
                </p>
              </div>
            </div>

            {/* Detailed Verified Testimonial Quote */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                  {selectedStory.testimonial.avatarInitials}
                </div>
                <div>
                  <h6 className="font-bold text-xs text-slate-900">
                    {lang === 'hi' ? selectedStory.testimonial.authorHi : selectedStory.testimonial.authorEn}
                  </h6>
                  <p className="text-[10px] text-slate-500">
                    {lang === 'hi' ? selectedStory.testimonial.roleHi : selectedStory.testimonial.roleEn}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-serif italic leading-relaxed">
                "{lang === 'hi' ? selectedStory.testimonial.quoteHi : selectedStory.testimonial.quoteEn}"
              </p>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <span className="text-[11px] text-slate-500">
                {lang === 'hi'
                  ? 'स्थायी कार्यालय: ऑयल मिल कॉलोनी, गंजडुंडवारा (कासगंज)'
                  : 'Office: Oil Mill Colony, Ganjdundwara (Kasganj)'}
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
                    lang === 'hi'
                      ? `प्रणाम प्रवीण जी, मैंने वेबसाइट पर ${selectedStory.titleHi} की सफलता गाथा देखी। हमारे गाँव में भी ऐसी ही सहायता की आवश्यकता है।`
                      : `Hello Praveen ji, I read your success story on ${selectedStory.titleEn}. We would like similar assistance for our village in Kasganj.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'इस संबंध में चर्चा करें' : 'Discuss This Issue'}</span>
                </a>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs cursor-pointer"
                >
                  {lang === 'hi' ? 'बंद करें' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
