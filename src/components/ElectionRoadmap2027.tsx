import React, { useState } from 'react';
import {
  Calendar,
  Flag,
  Users2,
  FileText,
  CheckCircle2,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  PhoneCall,
  Vote,
  Target,
  Megaphone,
  UserCheck,
  Send,
  Building,
  Heart,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface ElectionRoadmap2027Props {
  lang: Language;
}

interface RoadmapPhase {
  id: string;
  stepNumber: string;
  titleEn: string;
  titleHi: string;
  timeframeEn: string;
  timeframeHi: string;
  status: 'active' | 'upcoming' | 'milestone';
  statusLabelEn: string;
  statusLabelHi: string;
  summaryEn: string;
  summaryHi: string;
  milestonesEn: string[];
  milestonesHi: string[];
  icon: React.ElementType;
}

export const ElectionRoadmap2027: React.FC<ElectionRoadmap2027Props> = ({ lang }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerPhone, setVolunteerPhone] = useState('');
  const [volunteerVillage, setVolunteerVillage] = useState('');
  const [volunteerRole, setVolunteerRole] = useState('Booth Committee Member');
  const [submitted, setSubmitted] = useState(false);

  const phases: RoadmapPhase[] = [
    {
      id: 'phase-1',
      stepNumber: '01',
      titleEn: 'Grassroots Community Outreach & Village Chaupals',
      titleHi: 'गाँव-गाँव जनसंवाद एवं चौपाल अभियान',
      timeframeEn: 'Ongoing — Present Execution',
      timeframeHi: 'वर्तमान में सक्रिय — सतत जमीनी अभियान',
      status: 'active',
      statusLabelEn: 'Currently In Action',
      statusLabelHi: 'वर्तमान में सक्रिय',
      summaryEn:
        'Personal visits to rural hamlets (मजरे), panchayats, and urban wards across Kasganj (100) to listen directly to public grievances, inspect road/water issues, and resolve urgent matters with district administrative authorities.',
      summaryHi:
        'कासगंज (100) के प्रत्येक गाँव, मजरे और नगरीय वार्ड में जाकर नागरिकों की समस्याओं को सीधे सुनना। जलभराव, टूटी सड़कों, बिजली और स्वास्थ्य संबंधी शिकायतों का दस्तावेजीकरण और संबंधित अधिकारियों से तत्काल समाधान।',
      milestonesEn: [
        'Organizing 150+ village chaupals across Ganjdundwara and Kasganj rural blocks.',
        'Direct citizen grievance registration at the permanent Ganjdundwara office (Oil Mill Colony).',
        'Physical surveys of waterlogged areas, non-functional handpumps, and broken culverts.',
        'Connecting rural elders, women, and farmers directly with Praveen Kumar Mishra.',
      ],
      milestonesHi: [
        'कासगंज और गंजडुंडवारा के ग्रामीण क्षेत्रों में 150+ चौपालों का आयोजन।',
        'स्थायी गंजडुंडवारा कार्यालय (ऑयल मिल कॉलोनी) पर जनसमस्या निवारण पंजिका का संचालन।',
        'जलभराव वाले क्षेत्रों, खराब पड़े हैंडपंपों और टूटी पुलियों का भौतिक सत्यापन।',
        'बुजुर्गों, मातृशक्ति और किसान भाइयों से सीधा व्यक्तिगत संवाद व सहायता।',
      ],
      icon: Users2,
    },
    {
      id: 'phase-2',
      stepNumber: '02',
      titleEn: 'Citizen Manifesto & "Kasganj Sankalp Patra" Formulation',
      titleHi: 'कासगंज जन-संकल्प पत्र एवं घोषणापत्र निर्माण',
      timeframeEn: 'Q4 2026 — Policy & Planning',
      timeframeHi: 'चतुर्थ तिमाही 2026 — नीति एवं योजना निर्माण',
      status: 'upcoming',
      statusLabelEn: 'Strategy & Drafting',
      statusLabelHi: 'नीति व प्रारूप निर्माण',
      summaryEn:
        'Formulating an evidence-based, mathematically budgeted constituency manifesto with direct inputs from local farmers, traders, educators, women SHGs, and unemployed youth, centered around "MY BIG AIM".',
      summaryHi:
        'गणितीय और वैज्ञानिक दृष्टिकोण (M.Sc. Mathematics) से तैयार कासगंज (100) का समग्र घोषणापत्र। इसमें किसानों, व्यापारियों, शिक्षकों और युवाओं के सुझावों को सम्मिलित कर "MY BIG AIM" (पलायन मुक्त कासगंज) को मुख्य आधार बनाया जाएगा।',
      milestonesEn: [
        'Multi-sectoral consultations with potato farmers, small traders, and local artisans.',
        'Detailed blueprint for local agro-processing hubs and solar manufacturing in Kasganj.',
        'Transparent public commitment on 100% public audit of MLA Development Funds (निधि).',
        'Publication and bilingual distribution of the official "Kasganj Sankalp Patra 2027".',
      ],
      milestonesHi: [
        'आलू उत्पादक किसानों, छोटे व्यापारियों और कारीगरों के साथ क्षेत्रवार विचार-विमर्श।',
        'कासगंज व गंजडुंडवारा में फूड प्रोसेसिंग और सौर ऊर्जा उद्योग की विस्तृत कार्ययोजना।',
        'विधायक निधि के 100% पारदर्शी डिजिटल ऑडिट हेतु लिखित प्रतिज्ञा-पत्र।',
        'कासगंज संकल्प पत्र 2027 का हिंदी व अंग्रेजी में प्रकाशन एवं घर-घर वितरण।',
      ],
      icon: FileText,
    },
    {
      id: 'phase-3',
      stepNumber: '03',
      titleEn: 'Booth-Level Grassroots Organizing & Youth Task Force',
      titleHi: 'बूथ स्तरीय संगठन व युवा संकल्प दल का गठन',
      timeframeEn: 'Late 2026 – Early 2027',
      timeframeHi: 'अंतिम तिमाही 2026 – प्रारंभिक 2027',
      status: 'upcoming',
      statusLabelEn: 'Organization & Mobilization',
      statusLabelHi: 'संगठन एवं बूथ विस्तार',
      summaryEn:
        'Building a dedicated, disciplined network of local volunteers, booth coordinators, and youth task forces across all polling stations of Assembly 100 to safeguard clean, honest, and accessible democratic participation.',
      summaryHi:
        'कासगंज (100) के प्रत्येक पोलिंग बूथ पर निष्ठावान और शिक्षित युवाओं की टोली। धनबल और शराब-पैसों की राजनीति से दूर, स्वच्छ और पारदर्शी जनसेवा के संदेश को हर मतदाता तक पहुँचाना।',
      milestonesEn: [
        'Appointment of booth coordinators and volunteer teams across all polling booths.',
        'Empowering youth task force with digital tools for authentic voter communication.',
        'Training volunteers on democratic rights, election code of ethics, and peaceful mobilization.',
        'Dedicated 24x7 volunteer helpline coordinating through the Ganjdundwara election office.',
      ],
      milestonesHi: [
        'कासगंज विधानसभा के सभी पोलिंग बूथों पर बूथ प्रभारियों व स्वयंसेवकों की नियुक्ति।',
        'सोशल मीडिया और डिजिटल टूल्स के माध्यम से युवाओं को जनसेवा अभियान से जोड़ना।',
        'चुनाव आचार संहिता, मतदाता जागरूकता और शांतिपूर्ण मतदान हेतु स्वयंसेवक प्रशिक्षण।',
        'गंजडुंडवारा केंद्रीय कार्यालय से संचालित 24x7 स्वयंसेवक समन्वय केंद्र।',
      ],
      icon: ShieldCheck,
    },
    {
      id: 'phase-4',
      stepNumber: '04',
      titleEn: 'Door-to-Door Parivar Sampark & Voter Awakening',
      titleHi: 'घर-घर परिवार संपर्क व शत-प्रतिशत मतदान जागरूकता',
      timeframeEn: 'January – February 2027',
      timeframeHi: 'जनवरी – फरवरी 2027 (सघन जनसंपर्क)',
      status: 'upcoming',
      statusLabelEn: 'Mass Mobilization',
      statusLabelHi: 'सघन जनसंपर्क अभियान',
      summaryEn:
        'Intensive household outreach reaching every family in Kasganj (100), distributing the Sankalp Patra, inspiring high voter turnout, and seeking blessings from elders and mothers for honest leadership.',
      summaryHi:
        'कासगंज विधानसभा (100) के हर घर, मोहल्ले और मजरों में व्यक्तिगत दस्तक। बुजुर्गों और माताओं का आशीर्वाद प्राप्त करना, शत-प्रतिशत मतदान हेतु प्रेरित करना और एक सुशिक्षित बेटे को सेवा का अवसर देने की विनम्र प्रार्थना।',
      milestonesEn: [
        'Direct household outreach covering all rural and municipal families.',
        'Spreading awareness on voting rights, free and fair elections without fear or bribery.',
        'Special assistance network for senior citizens and differently-abled voters on polling day.',
        'Presenting Praveen Kumar Mishra’s credentials and commitment to local employment.',
      ],
      milestonesHi: [
        'कासगंज और गंजडुंडवारा क्षेत्र के प्रत्येक परिवार से प्रत्यक्ष संपर्क और संवाद।',
        'भयमुक्त, प्रलोभनमुक्त और स्वच्छ मतदान के प्रति जन-जन को जागरूक करना।',
        'बुजुर्ग एवं दिव्यांग मतदाताओं के लिए मतदान दिवस पर विशेष सहायता व्यवस्था।',
        'प्रवीण कुमार मिश्र की उच्च शिक्षा (M.Sc.) और निष्कलंक छवि को जनता के सामने रखना।',
      ],
      icon: Megaphone,
    },
    {
      id: 'phase-5',
      stepNumber: '05',
      titleEn: 'Democratic Election & Mandate for Public Service',
      titleHi: 'लोकतांत्रिक मतदान एवं पारदर्शी जनसेवा का जनादेश',
      timeframeEn: 'February – March 2027 (Elections & Results)',
      timeframeHi: 'फरवरी – मार्च 2027 (मतदान एवं जनआशीर्वाद)',
      status: 'milestone',
      statusLabelEn: 'The Final Mandate',
      statusLabelHi: 'जनसेवा का जनादेश',
      summaryEn:
        'The culmination of our journey where the citizens of Kasganj (100) vote for progress, education, and jobs. Immediate execution of our Day-1 Transition Plan for open governance and MLA fund audits.',
      summaryHi:
        'कासगंज के विकास, युवाओं के रोजगार और किसानों के सम्मान के लिए ऐतिहासिक मतदान। जीत के पहले ही दिन से गंजडुंडवारा कार्यालय पर नियमित जनता दरबार और विधायक निधि का ऑनलाइन पारदर्शी पोर्टल चालू करने की तैयारी।',
      milestonesEn: [
        'Peaceful and enthusiastic voting across all polling booths in Kasganj 100.',
        'Day-1 launch of the Open Jan Sunwai Portal and citizen grievance tracking system.',
        'Immediate initiation of the Youth Local Employment Taskforce to curb out-migration.',
        'Public celebration and thanksgiving rallies honoring the sovereign citizens of Kasganj.',
      ],
      milestonesHi: [
        'कासगंज (100) के सभी बूथों पर शांतिपूर्ण और भारी संख्या में मतदान।',
        'शपथ के पहले दिन से ही खुली जनसुनवाई और डिजिटल शिकायत निवारण प्रणाली की शुरुआत।',
        'युवाओं के स्थानीय रोजगार (पलायन रोकथाम) हेतु विशेष समिति का त्वरित गठन।',
        'कासगंज की सम्मानित जनता के चरणों में आभार और सेवा का संकल्प।',
      ],
      icon: Vote,
    },
  ];

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerName || !volunteerPhone) return;

    const message = `*कासगंज 2027 चुनाव अभियान - स्वयंसेवक पंजीकरण*%0A*नाम:* ${volunteerName}%0A*मोबाइल:* ${volunteerPhone}%0A*गाँव/वार्ड:* ${volunteerVillage || 'कासगंज (100)'}%0A*इच्छित भूमिका:* ${volunteerRole}`;
    window.open(`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setVolunteerModalOpen(false);
      setVolunteerName('');
      setVolunteerPhone('');
      setVolunteerVillage('');
    }, 2000);
  };

  const currentPhase = phases[activePhaseIndex];

  return (
    <section id="election-roadmap" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 tracking-wider uppercase mb-2 bg-blue-100 px-3 py-1.5 rounded-full border border-blue-200">
            <Flag className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {lang === 'hi'
                ? 'कासगंज (100) विधानसभा चुनाव 2027 | रणनीतिक रोडमैप'
                : 'Kasganj (100) Assembly Election 2027 | Strategic Roadmap'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi'
              ? '2027 चुनाव अभियान: जनसेवा से जनादेश का पथ'
              : '2027 Election Roadmap: The Path to Representation'}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-blue-900 mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'hi'
              ? 'कासगंज (100) में वास्तविक परिवर्तन की एक सुविचारित, पारदर्शी और चरणबद्ध कार्ययोजना। जनसंवाद से लेकर घोषणापत्र निर्माण, बूथ संगठन और घर-घर जनसंपर्क तक हर चरण की स्पष्ट रूपरेखा।'
              : 'A transparent, phase-by-phase strategic timeline visualizing the journey to the 2027 Vidhan Sabha election — from active village chaupals and citizen manifestos to booth-level empowerment.'}
          </p>
        </div>

        {/* Phase Stepper Bar */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center justify-between min-w-[760px] gap-2 border-b border-slate-200 pb-4">
            {phases.map((phase, idx) => {
              const Icon = phase.icon;
              const isActive = activePhaseIndex === idx;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`flex-1 flex flex-col items-start p-3.5 rounded-xl transition-all cursor-pointer text-left relative ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span
                      className={`text-[11px] font-black tracking-widest px-2 py-0.5 rounded ${
                        isActive
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      PHASE {phase.stepNumber}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  </div>
                  <span className="text-xs font-bold line-clamp-1">
                    {lang === 'hi' ? phase.titleHi : phase.titleEn}
                  </span>
                  <span
                    className={`text-[10px] mt-1 line-clamp-1 ${
                      isActive ? 'text-blue-200' : 'text-slate-400'
                    }`}
                  >
                    {lang === 'hi' ? phase.timeframeHi : phase.timeframeEn}
                  </span>

                  {/* Active Indicator Arrow */}
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-900 rotate-45" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Phase Featured Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10 lg:p-12 mb-14 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500 text-slate-950 shadow-xs">
                  PHASE {currentPhase.stepNumber}
                </span>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                    currentPhase.status === 'active'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : currentPhase.status === 'milestone'
                      ? 'bg-purple-50 text-purple-700 border-purple-300'
                      : 'bg-blue-50 text-blue-700 border-blue-300'
                  }`}
                >
                  {lang === 'hi' ? currentPhase.statusLabelHi : currentPhase.statusLabelEn}
                </span>

                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 ml-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{lang === 'hi' ? currentPhase.timeframeHi : currentPhase.timeframeEn}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                {lang === 'hi' ? currentPhase.titleHi : currentPhase.titleEn}
              </h3>
            </div>

            {/* Stepper Navigation buttons */}
            <div className="flex items-center gap-2 self-start lg:self-auto">
              <button
                disabled={activePhaseIndex === 0}
                onClick={() => setActivePhaseIndex((prev) => Math.max(0, prev - 1))}
                className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                ← {lang === 'hi' ? 'पिछला चरण' : 'Previous'}
              </button>
              <button
                disabled={activePhaseIndex === phases.length - 1}
                onClick={() => setActivePhaseIndex((prev) => Math.min(phases.length - 1, prev + 1))}
                className="px-3.5 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer shadow-xs"
              >
                {lang === 'hi' ? 'अगला चरण' : 'Next Phase'} →
              </button>
            </div>
          </div>

          {/* Phase Summary */}
          <div className="py-6">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              {lang === 'hi' ? currentPhase.summaryHi : currentPhase.summaryEn}
            </p>
          </div>

          {/* Phase Milestones & Targets */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-amber-600" />
              <span>{lang === 'hi' ? 'प्रमुख लक्ष्य एवं कार्य बिंदु:' : 'Core Milestones & Deliverables:'}</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(lang === 'hi' ? currentPhase.milestonesHi : currentPhase.milestonesEn).map(
                (milestone, mIdx) => (
                  <div
                    key={mIdx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      ✓
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-medium">
                      {milestone}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Phase Bottom Call to Action */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>
                {lang === 'hi'
                  ? 'कासगंज (100) के सर्वांगीण विकास हेतु निरंतर जमीनी सक्रियता'
                  : 'Sustained ground activism for 100 - Kasganj Vidhan Sabha'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setVolunteerModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
              >
                <Users2 className="w-4 h-4 text-amber-400" />
                <span>{lang === 'hi' ? 'अभियान से जुड़ें (Volunteer)' : 'Join 2027 Team'}</span>
              </button>

              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
                  lang === 'hi'
                    ? `प्रणाम प्रवीण जी, मैं 2027 चुनाव अभियान के ${currentPhase.titleHi} में सहयोग करना चाहता हूँ।`
                    : `Hello Praveen ji, I would like to support Phase ${currentPhase.stepNumber} (${currentPhase.titleEn}) of your 2027 election campaign.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{lang === 'hi' ? 'व्हाट्सएप पर बात करें' : 'WhatsApp Team'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 5-Step Visual Timeline Grid Overview */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              {lang === 'hi' ? 'पूर्ण दृश्य' : 'Full Horizon'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mt-1">
              {lang === 'hi' ? 'पाँच चरणों में 2027 का संपूर्ण रोडमैप' : 'Complete 5-Phase Election Roadmap'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {phases.map((phase, pIdx) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(pIdx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    activePhaseIndex === pIdx
                      ? 'bg-blue-950 text-white border-amber-400 shadow-md ring-2 ring-amber-400/40'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-[10px] font-black px-2 py-0.5 rounded ${
                          activePhaseIndex === pIdx
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        PHASE {phase.stepNumber}
                      </span>
                      <Icon
                        className={`w-4 h-4 ${
                          activePhaseIndex === pIdx ? 'text-amber-300' : 'text-slate-400'
                        }`}
                      />
                    </div>
                    <h5 className="font-bold text-sm leading-snug mb-1">
                      {lang === 'hi' ? phase.titleHi : phase.titleEn}
                    </h5>
                    <p
                      className={`text-[11px] mt-1 ${
                        activePhaseIndex === pIdx ? 'text-slate-300' : 'text-slate-500'
                      }`}
                    >
                      {lang === 'hi' ? phase.timeframeHi : phase.timeframeEn}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/40 text-[11px] font-semibold flex items-center justify-between">
                    <span
                      className={
                        activePhaseIndex === pIdx ? 'text-amber-300' : 'text-blue-900'
                      }
                    >
                      {lang === 'hi' ? 'विवरण देखें' : 'View Details'}
                    </span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Volunteer & Grassroots Enlistment Card */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'कासगंज (100) युवा व नागरिक स्वयंसेवक' : 'Join Kasganj 100 Volunteer Force'}</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              {lang === 'hi'
                ? 'कासगंज 2027 चुनाव अभियान का हिस्सा बनें'
                : 'Become a Partner in Kasganj 2027 Transformation'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'hi'
                ? 'यदि आप एक ईमानदार, सुशिक्षित (M.Sc. गणित) और युवा-हितैषी नेतृत्व के साथ जुड़कर अपने गाँव/वार्ड में स्वच्छ राजनीति का प्रसार करना चाहते हैं, तो आज ही स्वयंसेवक के रूप में पंजीकृत हों।'
                : 'Join Praveen Kumar Mishra’s dedicated grassroots network across Kasganj (100). Help build booth committees, organize village chaupals, and eliminate out-migration.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => setVolunteerModalOpen(true)}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              {lang === 'hi' ? 'स्वयंसेवक फॉर्म भरें' : 'Sign Up as Volunteer'}
            </button>
            <a
              href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
                lang === 'hi'
                  ? 'प्रणाम प्रवीण जी, मैं कासगंज 2027 चुनाव अभियान में अपनी ग्राम पंचायत/वार्ड से सक्रिय स्वयंसेवक बनना चाहता हूँ।'
                  : 'Hello Praveen ji, I want to join as an active volunteer for Kasganj 2027 from my gram panchayat/ward.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all border border-white/20 text-center whitespace-nowrap"
            >
              {lang === 'hi' ? 'व्हाट्सएप पर जुड़ें' : 'Join via WhatsApp'}
            </a>
          </div>
        </div>
      </div>

      {/* Volunteer Signup Modal */}
      {volunteerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                  {lang === 'hi' ? 'कासगंज 2027 चुनाव दल' : 'Kasganj 2027 Volunteer Network'}
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  {lang === 'hi' ? 'स्वयंसेवक के रूप में जुड़ें' : 'Join as a Campaign Volunteer'}
                </h3>
              </div>
              <button
                onClick={() => setVolunteerModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {lang === 'hi' ? 'पंजीकरण अनुरोध भेजा गया!' : 'Volunteer Request Sent!'}
                </h4>
                <p className="text-xs text-slate-600">
                  {lang === 'hi'
                    ? 'कासगंज (100) चुनाव टीम शीघ्र ही आपसे संपर्क करेगी।'
                    : 'The Kasganj (100) campaign team will connect with you shortly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {lang === 'hi' ? 'आपका पूरा नाम *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={volunteerName}
                    onChange={(e) => setVolunteerName(e.target.value)}
                    placeholder={lang === 'hi' ? 'उदा. राकेश कुमार' : 'e.g. Rakesh Kumar'}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {lang === 'hi' ? 'मोबाइल नंबर (WhatsApp) *' : 'Mobile / WhatsApp Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={volunteerPhone}
                    onChange={(e) => setVolunteerPhone(e.target.value)}
                    placeholder={lang === 'hi' ? '+91 XXXXX XXXXX' : '+91 XXXXX XXXXX'}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {lang === 'hi' ? 'गाँव / मजरा / वार्ड का नाम *' : 'Village / Majra / Ward Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={volunteerVillage}
                    onChange={(e) => setVolunteerVillage(e.target.value)}
                    placeholder={lang === 'hi' ? 'उदा. गंजडुंडवारा वार्ड 3 / ग्राम सिढ़पुरा' : 'e.g. Ganjdundwara Ward 3 / Village Sidhpura'}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {lang === 'hi' ? 'इच्छित भूमिका / रुचि' : 'Preferred Volunteer Role'}
                  </label>
                  <select
                    value={volunteerRole}
                    onChange={(e) => setVolunteerRole(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                  >
                    <option value="Booth Committee Member">
                      {lang === 'hi' ? 'बूथ समिति सदस्य / प्रभारी' : 'Booth Committee Member'}
                    </option>
                    <option value="Village Chaupal Organizer">
                      {lang === 'hi' ? 'गाँव चौपाल एवं जनसंवाद आयोजक' : 'Village Chaupal Organizer'}
                    </option>
                    <option value="Youth Employment & Skill Coordinator">
                      {lang === 'hi' ? 'युवा रोजगार व कौशल समन्वयक (Big Aim)' : 'Youth Employment & Skill Coordinator'}
                    </option>
                    <option value="Digital & Social Media Volunteer">
                      {lang === 'hi' ? 'डिजिटल एवं सोशल मीडिया प्रचारक' : 'Digital & Social Media Volunteer'}
                    </option>
                    <option value="Door-to-Door Campaigner">
                      {lang === 'hi' ? 'घर-घर जनसंपर्क प्रचारक' : 'Door-to-Door Campaigner'}
                    </option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setVolunteerModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
                  >
                    {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'व्हाट्सएप से भेजें' : 'Submit via WhatsApp'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
