import React, { useState } from 'react';
import {
  Compass,
  FileCheck2,
  CheckCircle2,
  Sprout,
  GraduationCap,
  HeartPulse,
  Zap,
  Building2,
  ShieldCheck,
  Droplets,
  Truck,
  ArrowRight,
  Send,
  MessageSquare,
  Sparkles,
  Download,
  Share2,
  PhoneCall,
  MapPin,
  Vote,
  Target,
  FileText,
  Briefcase,
  Home,
  Heart,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface VisionKasganjProps {
  lang: Language;
}

interface PriorityItem {
  id: string;
  category: 'infra' | 'farmer' | 'youth' | 'health' | 'governance' | 'green';
  titleEn: string;
  titleHi: string;
  badgeEn: string;
  badgeHi: string;
  targetEn: string;
  targetHi: string;
  descEn: string;
  descHi: string;
  keyPointsEn: string[];
  keyPointsHi: string[];
  icon: React.ElementType;
}

export const VisionKasganj: React.FC<VisionKasganjProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [suggestionModalOpen, setSuggestionModalOpen] = useState(false);
  const [suggestionText, setSuggestionText] = useState('');
  const [citizenVillage, setCitizenVillage] = useState('');
  const [citizenName, setCitizenName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const priorities: PriorityItem[] = [
    {
      id: 'roads-connectivity',
      category: 'infra',
      titleEn: 'All-Weather Roads & Seamless Rural Connectivity',
      titleHi: 'सर्वऋतु पक्की सड़कें एवं सुगम ग्रामीण संपर्क',
      badgeEn: 'Infrastructure & Connectivity',
      badgeHi: 'अवसंरचना एवं संपर्क',
      targetEn: '100% Majra & Village Connectivity by 2027',
      targetHi: '2027 तक प्रत्येक मजरे व गाँव का पक्का संपर्क मार्ग',
      descEn:
        'Transforming the road network of Kasganj (100) by ensuring every village, hamlet, and farmland link is paved with high-durability bituminous roads, reinforced culverts, and proper roadside drainage.',
      descHi:
        'कासगंज (100) के प्रत्येक गाँव, मजरे और खेत संपर्क मार्गों का उच्च गुणवत्तायुक्त डामरीकरण। जर्जर पुलियों का पुनर्निर्माण और सड़कों के दोनों ओर पक्के नाले ताकि बारिश में संपर्क कभी न टूटे।',
      keyPointsEn: [
        'Widening of major arterial routes connecting Ganjdundwara and Kasganj town.',
        'Immediate reconstruction of accident-prone turns, bridges, and agricultural link roads.',
        'Proper stormwater drainage alongside village roads to prevent premature deterioration.',
        'Installation of solar-powered safety reflectors and street lights on dark corridors.',
      ],
      keyPointsHi: [
        'गंजडुंडवारा और कासगंज मुख्य संपर्क मार्गों का चौड़ीकरण व सुदृढ़ीकरण।',
        'दुर्घटना संभावित मोड़ों, टूटी पुलियों और कृषि संपर्क मार्गों का तत्काल पुनर्निर्माण।',
        'सड़कों के किनारे पक्की जल निकासी ताकि जलभराव से सड़कें नष्ट न हों।',
        'अंधेरे ग्रामीण मार्गों पर सौर ऊर्जा चालित स्ट्रीट लाइटें व सुरक्षा संकेतक।',
      ],
      icon: Truck,
    },
    {
      id: 'farmers-agri',
      category: 'farmer',
      titleEn: 'Farmers’ Prosperity & Agro-Processing Hub',
      titleHi: 'अन्नदाता समृद्धि, सिंचाई व कृषि प्रसंस्करण केंद्र',
      badgeEn: 'Agriculture & Livelihood',
      badgeHi: 'कृषि एवं किसान कल्याण',
      targetEn: 'Direct Remuneration & Solar Irrigation Support',
      targetHi: 'उचित मूल्य, कोल्ड चेन एवं सौर पंप सुविधा',
      descEn:
        'Kasganj is an agricultural heartland for potatoes, mustard, wheat, and vegetables. We aim to protect farmer profits through subsidized cold storage, reliable canal water, and scientific stray cattle management.',
      descHi:
        'कासगंज आलू, सरसों, गेहूँ और सब्जियों का प्रमुख उत्पादक है। किसानों की आय दोगुनी करने हेतु रियायती कोल्ड स्टोरेज, निर्बाध नहरी पानी, समय पर बिजली और निराश्रित गोवंश से फसलों की वैज्ञानिक सुरक्षा।',
      keyPointsEn: [
        'Setting up modern agro-processing units to eliminate distress selling by potato and vegetable farmers.',
        'Tail-end water assurance in irrigation canals across all agricultural blocks of Kasganj.',
        'Dedicated solar agricultural pump subsidies to reduce diesel pumping expenses.',
        'Constructing well-managed, humane Cow Shelters (गौशाला) with fodder security to protect standing crops.',
      ],
      keyPointsHi: [
        'आलू व सब्जी उत्पादक किसानों को घाटे से बचाने हेतु आधुनिक फूड प्रोसेसिंग यूनिट्स की स्थापना।',
        'कासगंज के सभी कृषि ब्लॉकों में नहरों के टेल (अंतिम छोर) तक पानी की गारंटी।',
        'सिंचाई खर्च कम करने हेतु किसानों को सौर कृषि पंपों की सुलभ उपलब्धता।',
        'फसलों की सुरक्षा हेतु चारा-पानी से युक्त सुव्यवस्थित गौशालाओं का संचालन।',
      ],
      icon: Sprout,
    },
    {
      id: 'water-drainage',
      category: 'infra',
      titleEn: 'Pure Drinking Water & Permanent Drainage',
      titleHi: 'हर घर शुद्ध पेयजल व स्थायी जल निकासी व्यवस्था',
      badgeEn: 'Water & Public Health',
      badgeHi: 'पेयजल एवं स्वच्छता',
      targetEn: 'Tested Tap Water & Zero Waterlogged Localities',
      targetHi: 'लैब-परीक्षित नल जल एवं जलभराव से स्थायी मुक्ति',
      descEn:
        'Ending chronic waterlogging in urban and rural Kasganj while ensuring every household receives safe, mineral-balanced piped drinking water through accelerated infrastructure and pond rejuvenation.',
      descHi:
        'कासगंज व गंजडुंडवारा के नगरीय व ग्रामीण क्षेत्रों में बरसात के दौरान होने वाले भयंकर जलभराव का स्थायी समाधान तथा प्रत्येक परिवार को शुद्ध, फ्लोराइड-मुक्त नल जल की निर्बाध आपूर्ति।',
      keyPointsEn: [
        'Comprehensive underground storm drainage masterplan for Ganjdundwara and Kasganj wards.',
        'Revival and deepening of traditional village ponds (Amrit Sarovars) for rainwater harvesting.',
        'Regular laboratory testing of drinking water quality to eradicate waterborne diseases.',
        'Immediate replacement of rusted pipelines and non-functional handpumps in every village.',
      ],
      keyPointsHi: [
        'गंजडुंडवारा व कासगंज के प्रमुख मोहल्लों हेतु व्यापक स्टॉर्म ड्रेनेज मास्टरप्लान।',
        'भूजल स्तर बढ़ाने हेतु पारंपरिक तालाबों और अमृत सरोवरों का वैज्ञानिक जीर्णोद्धार।',
        'जलजनित बीमारियों की रोकथाम हेतु हर गाँव में पेयजल की नियमित लैब जांच।',
        'खराब पड़े इंडिया मार्का हैंडपंपों की त्वरित मरम्मत और लीकेज पाइपलाइनों का बदलाव।',
      ],
      icon: Droplets,
    },
    {
      id: 'youth-employment',
      category: 'youth',
      titleEn: 'Skill Academy, IT Hub & Youth Employment',
      titleHi: 'युवा कौशल विकास, आईटीआई व स्थानीय रोजगार सृजन',
      badgeEn: 'Youth & Industry',
      badgeHi: 'युवा एवं रोजगार',
      targetEn: '10,000+ Youth Trained in High-Tech & Green Skills',
      targetHi: '10,000+ युवाओं को उच्च तकनीकी एवं सौर ऊर्जा प्रशिक्षण',
      descEn:
        'Halting the forced migration of youth from Kasganj by setting up state-of-the-art government technical institutes, promotion of renewable energy industries, and digital freelance empowerment centers.',
      descHi:
        'कासगंज के होनहार युवाओं को रोजगार हेतु बड़े शहरों में भटकने से रोकना। उच्चस्तरीय सरकारी आईटीआई/पॉलिटेक्निक, सौर ऊर्जा विनिर्माण एवं डिजिटल स्किल सेंटर स्थापित कर स्थानीय स्तर पर रोजगार के अवसर।',
      keyPointsEn: [
        'Modern Government ITI and Skill Academy in Kasganj focused on Solar Tech, Robotics, Coding, and Electrician trades.',
        'Incubation assistance for local youth entrepreneurs, traders, and cottage industries.',
        'Free digital library, reading rooms, and competitive exam coaching guidance for UPSC, SSC, Police, and Railway aspirants.',
        'Annual Kasganj Mega Job Fair bringing verified manufacturing and service sector recruiters.',
      ],
      keyPointsHi: [
        'कासगंज में सोलर तकनीक, इलेक्ट्रिकल, कंप्यूटर एवं डिजिटल स्किल हेतु सरकारी प्रशिक्षण अकादमी।',
        'स्थानीय युवा उद्यमियों, व्यापारियों एवं कुटीर उद्योगों हेतु सरल ऋण व मार्गदर्शन।',
        'प्रतियोगी परीक्षाओं (UPSC, UP Police, रेलवे, SSC) हेतु निःशुल्क डिजिटल लाइब्रेरी व अध्ययन कक्ष।',
        'कासगंज में प्रतिवर्ष मेगा रोजगार मेले का आयोजन ताकि युवाओं को मौके पर नियुक्ति मिले।',
      ],
      icon: Target,
    },
    {
      id: 'healthcare',
      category: 'health',
      titleEn: '24x7 Specialized Healthcare & Trauma Facilities',
      titleHi: '24x7 विशेषज्ञ चिकित्सा, सीएचसी सुदृढ़ीकरण व ट्रॉमा सेवा',
      badgeEn: 'Health & Emergency',
      badgeHi: 'स्वास्थ्य एवं आपात सेवा',
      targetEn: 'Zero Referrals for Basic Critical Emergencies',
      targetHi: 'सामान्य आपात स्थितियों में अलीगढ़/आगरा रेफरल की समाप्ति',
      descEn:
        'Upgrading District Hospital Kasganj and Ganjdundwara Community Health Center (CHC) with round-the-clock emergency medical officers, pediatricians, gynecologists, dialysis beds, and free essential medicines.',
      descHi:
        'कासगंज जिला चिकित्सालय एवं गंजडुंडवारा सीएचसी को आधुनिक सुविधाओं से युक्त करना, ताकि किसी भी गंभीर मरीज या प्रसूता को मामूली कारणों से अलीगढ़ या आगरा रेफर न करना पड़े।',
      keyPointsEn: [
        'Filling 100% specialist doctor vacancies (surgeons, gynecologists, cardiologists) at government hospitals.',
        'Equipping Ganjdundwara CHC with a dedicated 24x7 Emergency Trauma & Neonatal Care Unit.',
        'Mobile health vans with basic diagnostic facilities reaching distant majras and rural elders monthly.',
        'Guaranteed zero black-marketing of generic medicines and fair operation of Jan Aushadhi Kendras.',
      ],
      keyPointsHi: [
        'सरकारी अस्पतालों में स्त्री रोग विशेषज्ञ, बाल रोग विशेषज्ञ व सर्जन के रिक्त पदों को प्राथमिकता से भरना।',
        'गंजडुंडवारा सीएचसी में 24 घंटे आपातकालीन ट्रॉमा व नवजात शिशु देखभाल इकाई की स्थापना।',
        'दूरस्थ मजरों व बुजुर्गों हेतु मासिक सचल चिकित्सा वैन (Mobile Health Clinic) का संचालन।',
        'जन औषधि केंद्रों पर सभी अनिवार्य दवाओं की 100% उपलब्धता सुनिश्चित करना।',
      ],
      icon: HeartPulse,
    },
    {
      id: 'education-girls',
      category: 'youth',
      titleEn: 'Quality Education & Safe Transport for Girls',
      titleHi: 'गुणवत्तापूर्ण शिक्षा, स्मार्ट स्कूल व बेटियों हेतु सुरक्षित आवागमन',
      badgeEn: 'Education & Equality',
      badgeHi: 'शिक्षा एवं समानता',
      targetEn: 'Smart Classrooms & Rural Female College Connectivity',
      targetHi: 'डिजिटल स्मार्ट स्कूल एवं बेटियों हेतु सुरक्षित बस सेवा',
      descEn:
        'Empowering every child with modern education by upgrading government schools into model smart institutions with math/science laboratories, and providing safe, dedicated transport for rural female students.',
      descHi:
        'गणित में स्नातकोत्तर (M.Sc.) के दृष्टिकोण से शिक्षा में क्रांतिकारी बदलाव: परिषदीय विद्यालयों को स्मार्ट लैब से सुसज्जित करना और ग्रामीण बेटियों के उच्च शिक्षण संस्थानों तक सुरक्षित आवागमन की व्यवस्था।',
      keyPointsEn: [
        'Transformation of government primary and inter-colleges into modern institutions with clean sanitation and STEM labs.',
        'Dedicated, safe subsidized bus routes connecting rural villages to girls’ colleges and universities.',
        'Dr. Ambedkar Gramin Vikas Trust scholarship expansion for meritorious students from economically weak backgrounds.',
        'Self-defense and vocational skill programs for high school and intermediate girl students.',
      ],
      keyPointsHi: [
        'सरकारी विद्यालयों में स्वच्छ पेयजल, अलग बालिका शौचालय व विज्ञान-गणित प्रयोगशालाओं की स्थापना।',
        'गाँवों से डिग्री कॉलेजों तक बेटियों के आने-जाने हेतु सुरक्षित व रियायती बस सेवा।',
        'डॉ. आंबेडकर ट्रस्ट के माध्यम से निर्धन मेधावी छात्र-छात्राओं को विशेष छात्रवृत्ति व पाठ्य सामग्री।',
        'बालिकाओं हेतु आत्मरक्षा प्रशिक्षण एवं कौशल विकास कार्यशालाओं का नियमित आयोजन।',
      ],
      icon: GraduationCap,
    },
    {
      id: 'solar-green',
      category: 'green',
      titleEn: 'Solar Green Kasganj & Renewable Clean Energy',
      titleHi: 'हरित कासगंज - सौर ऊर्जा आत्मनिर्भरता अभियान',
      badgeEn: 'Green Energy',
      badgeHi: 'सौर ऊर्जा क्रांति',
      targetEn: 'Every Village Illuminated with Solar Street Lights',
      targetHi: 'प्रत्येक ग्राम पंचायत में सौर प्रकाश व निर्बाध विद्युत',
      descEn:
        'Harnessing Praveen Kumar Mishra’s proven professional expertise in solar engineering (Raghav Foundation Projects) to transform Kasganj into a green, clean energy benchmark in Uttar Pradesh.',
      descHi:
        'सौर ऊर्जा क्षेत्र में प्रवीण कुमार मिश्र के सफल उद्यम (राघव फाउंडेशन प्रोजेक्ट्स) के अनुभव का लाभ उठाकर कासगंज को उत्तर प्रदेश की आदर्श हरित एवं सौर ऊर्जा आत्मनिर्भर विधानसभा बनाना।',
      keyPointsEn: [
        '100% solar LED street lighting across major village crossroads, temples, and school routes.',
        'Expedited replacement of burnt village transformers within 24 hours without bureaucratic delay.',
        'Promotion of rooftop solar for residential and commercial establishments to cut electricity bills.',
        'Tree plantation drives along canal banks and roadsides to combat summer heat and dust.',
      ],
      keyPointsHi: [
        'गाँवों के प्रमुख चौराहों, सार्वजनिक स्थलों और स्कूलों के पास सौर एलईडी स्ट्रीट लाइटों की स्थापना।',
        'गाँवों में फुंके हुए ट्रांसफार्मरों को 24 घंटे के भीतर बिना किसी अवैध वसूली के बदलवाना।',
        'व्यापारियों और घरेलू उपभोक्ताओं हेतु रूफटॉप सोलर लगाने में सरकारी सब्सिडी की सुलभ सहायता।',
        'नहरों और सड़कों के दोनों ओर सघन वृक्षारोपण ताकि धूल और प्रदूषण से मुक्ति मिले।',
      ],
      icon: Zap,
    },
    {
      id: 'transparent-governance',
      category: 'governance',
      titleEn: 'Zero-Corruption Governance & Weekly Jan Sunwai',
      titleHi: 'भ्रष्टाचार मुक्त पारदर्शी प्रशासन व साप्ताहिक जनसुनवाई',
      badgeEn: 'Accountability & Ethics',
      badgeHi: 'पारदर्शिता एवं सुशासन',
      targetEn: '100% Public Audit of MLA Development Funds (निधि)',
      targetHi: 'विधायक निधि का 100% पारदर्शी डिजिटल ऑडिट',
      descEn:
        'Ending middlemen culture in public schemes. Establishing an open-door permanent constituency office in Ganjdundwara where every citizen can register grievances and track resolution status transparently.',
      descHi:
        'दलाली और भ्रष्टाचार की व्यवस्था का समूल नाश। गंजडुंडवारा कार्यालय (ऑयल मिल कॉलोनी) पर नियमित जनता दरबार और गाँव-गाँव चौपाल के माध्यम से हर नागरिक की समस्या का सीधे प्रशासनिक अधिकारियों से समाधान।',
      keyPointsEn: [
        'Full public dashboard showing every rupee spent from MLA Development Funds (Vidhayak Nidhi).',
        'Permanent public office at Oil Mill Colony, Ganjdundwara with 24x7 phone/WhatsApp helpline (+91 82797 35137).',
        'Zero tolerance for police harassment, revenue department delays, or exploitation of poor citizens.',
        'Weekly village outreach tour (चौपाल) to directly monitor ground development projects.',
      ],
      keyPointsHi: [
        'विधायक निधि के एक-एक पैसे का सार्वजनिक ब्यौरा डिजिटल पोर्टल पर प्रदर्शित ताकि जनता स्वयं जांच सके।',
        'गंजडुंडवारा (ऑयल मिल कॉलोनी) में स्थायी जनसंपर्क कार्यालय व 24x7 हेल्पलाइन (+91 82797 35137)।',
        'थाना, तहसील और ब्लॉक स्तर पर गरीबों और किसानों के शोषण व अवैध वसूली पर पूर्ण अंकुश।',
        'सप्ताह में निश्चित दिन गाँव-गाँव जाकर विकास कार्यों की जमीनी गुणवत्ता का व्यक्तिगत निरीक्षण।',
      ],
      icon: ShieldCheck,
    },
  ];

  const filteredPriorities =
    activeCategory === 'all'
      ? priorities
      : priorities.filter((item) => item.category === activeCategory);

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestionText.trim()) return;

    // Simulate direct save / WhatsApp dispatch
    const waMessage = `*सुझाव - कासगंज विजन 2027*%0A*नाम:* ${citizenName || 'कासगंज नागरिक'}%0A*गाँव/वार्ड:* ${citizenVillage || 'कासगंज 100'}%0A*सुझाव:* ${suggestionText}`;
    window.open(`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(waMessage)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSuggestionModalOpen(false);
      setSuggestionText('');
      setCitizenVillage('');
      setCitizenName('');
    }, 2000);
  };

  return (
    <section id="vision-kasganj" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Geometric Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 tracking-wider uppercase mb-2 bg-amber-100/80 px-3 py-1.5 rounded-full border border-amber-300">
            <Compass className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
            <span>
              {lang === 'hi'
                ? '100 - कासगंज विधानसभा क्षेत्र | विकास का समग्र खाका'
                : '100 - Kasganj Assembly | Comprehensive Development Blueprint'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'कासगंज विजन 2027: विकास एवं सुशासन' : 'Vision for Kasganj 2027: Growth & Governance'}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'hi'
              ? 'कासगंज विधानसभा (संख्या 100) के सर्वांगीण विकास हेतु एक सुशिक्षित (M.Sc. गणित), व्यावहारिक और पारदर्शी कार्ययोजना। खोखले चुनावी वादों के बजाय वैज्ञानिक प्राथमिकताओं पर आधारित वास्तविक बदलाव।'
              : 'A rigorous, data-driven, and actionable roadmap designed by an educated public leader (M.Sc. Mathematics) to uplift rural connectivity, agriculture, healthcare, and youth opportunities across Kasganj (100).'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* EXECUTIVE STATEMENT OF INTENT (प्रतिज्ञा-पत्र) */}
        {/* ========================================================================= */}
        <div className="mb-16 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-1 shadow-xl text-white relative overflow-hidden">
          {/* Subtle glowing accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="bg-slate-900/90 backdrop-blur-sm rounded-[22px] p-6 sm:p-10 lg:p-12 border border-slate-700/80 relative">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-700/70">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-wider border border-amber-500/30">
                  <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>
                    {lang === 'hi'
                      ? 'आधिकारिक प्रतिज्ञा-पत्र | सेवा संकल्प'
                      : 'Solemn Statement of Intent | Public Pledge'}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  {lang === 'hi'
                    ? 'कासगंज (100) के जनमानस के प्रति मेरा संकल्प एवं वचनबद्धता'
                    : 'My Solemn Pledge & Commitment to the People of Kasganj (100)'}
                </h3>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => setSuggestionModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'अपना सुझाव भेजें' : 'Share Your Suggestion'}</span>
                </button>

                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
                    lang === 'hi'
                      ? 'प्रणाम प्रवीण जी, मैं कासगंज विजन 2027 का समर्थन करता हूँ और अपने क्षेत्र की समस्या/सुझाव साझा करना चाहता हूँ।'
                      : 'Hello Praveen ji, I support the Vision for Kasganj 2027 and would like to share my village suggestions.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm border border-slate-600 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'hi' ? 'सीधे संवाद' : 'WhatsApp Team'}</span>
                </a>
              </div>
            </div>

            {/* Statement Body Text */}
            <div className="mt-8 space-y-6 text-slate-200 leading-relaxed">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base italic font-serif leading-loose">
                <p>
                  {lang === 'hi' ? (
                    <>
                      "मैं, <strong>प्रवीण कुमार मिश्र</strong>, कासगंज की पवित्र माटी और यहाँ के सम्मानित अन्नदाताओं, माताओं, बहनों, युवाओं और बुजुर्गों के समक्ष यह प्रतिज्ञा करता हूँ कि सार्वजनिक जीवन में मेरी उपस्थिति सत्ता-सुख के लिए नहीं, बल्कि कासगंज के प्रत्येक नागरिक के स्वाभिमान, सुरक्षा और विकास के लिए है। 100 - कासगंज विधानसभा क्षेत्र को दशकों से बुनियादी सुविधाओं के अभाव, जलभराव, टूटी सड़कों और स्वास्थ्य सेवाओं की बदहाली से जूझना पड़ा है। यदि कासगंज की जनता मुझे 2027 में सेवा का अवसर देती है, तो मैं विधायक के रूप में नहीं, बल्कि आपके परिवार के एक सुशिक्षित बेटे और सेवक के रूप में दिन-रात आपके बीच उपस्थित रहूँगा। विधायक निधि के एक-एक पैसे का पारदर्शी सार्वजनिक ऑडिट होगा, गंजडुंडवारा कार्यालय पर जनता दरबार सदैव खुला रहेगा और कासगंज के किसी भी नागरिक की आवाज दबने नहीं दी जाएगी।"
                    </>
                  ) : (
                    <>
                      "I, <strong>Praveen Kumar Mishra</strong>, solemnly pledge before the revered elders, mothers, sisters, hardworking farmers, and vibrant youth of Kasganj that my participation in public life is driven solely by public welfare, accountability, and justice. Kasganj (100) has endured neglected roads, recurrent waterlogging, insufficient healthcare facilities, and limited youth avenues for too long. Should the respected electorate of Kasganj bestow upon me the honor to represent you in 2027, I will serve not as an inaccessible political figure, but as an educated son and humble public servant. Every rupee of the MLA Development Fund will be publicly audited online, our permanent office at Ganjdundwara will remain open for every citizen, and no genuine grievance will go unaddressed."
                    </>
                  )}
                </p>
              </div>

              {/* Core Pillars of the Statement */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>{lang === 'hi' ? '1. पारदर्शी निधि ऑडिट' : '1. Transparent Fund Audit'}</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {lang === 'hi'
                      ? 'विधायक निधि (MLA Fund) का प्रत्येक प्रस्ताव व भुगतान ऑनलाइन सार्वजनिक रहेगा।'
                      : '100% public disclosure of every development rupee spent in the constituency.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>{lang === 'hi' ? '2. चौपाल एवं जनसुनवाई' : '2. Village Chaupals'}</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {lang === 'hi'
                      ? 'गाँव-गाँव नियमित चौपाल ताकि ग्रामीणों को किसी अधिकारी या नेता के चक्कर न लगाने पड़ें।'
                      : 'Weekly direct grievance sessions in villages and permanent Ganjdundwara office.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>{lang === 'hi' ? '3. दलाली पर पूर्ण रोक' : '3. Zero Corruption'}</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {lang === 'hi'
                      ? 'सरकारी योजनाओं (आवास, राशन, पेंशन) में किसी भी बिचौलिए या अवैध वसूली को बर्दाश्त नहीं।'
                      : 'Eliminating middleman culture from PM Awas, Kisan Samman, and civic welfare.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-amber-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>{lang === 'hi' ? '4. सुलभ 24x7 सेवा' : '4. 24x7 Accessibility'}</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {lang === 'hi'
                      ? 'गंजडुंडवारा (कासगंज) में स्थायी कार्यालय एवं सक्रिय हेल्पलाइन: +91 82797 35137।'
                      : 'Always reachable at Oil Mill Colony, Ganjdundwara or on mobile helpline.'}
                  </p>
                </div>
              </div>

              {/* Sign-off seal */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg border border-amber-500/30">
                    PKM
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">
                      {lang === 'hi' ? PERSONAL_INFO.nameHindi : PERSONAL_INFO.name}
                    </h5>
                    <p className="text-xs text-slate-400">
                      M.Sc. Mathematics | {lang === 'hi' ? 'कासगंज (100) जनसेवक' : 'Kasganj (100) Public Servant'}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{PERSONAL_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CENTERPIECE: PRAVEEN KUMAR MISHRA'S BIG AIM (LOCAL YOUTH JOBS & PALAYAN ROKNA) */}
        {/* ========================================================================= */}
        <div className="mb-16 relative">
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-1 shadow-2xl border border-amber-400/40 overflow-hidden">
            <div className="bg-gradient-to-br from-slate-900/95 via-blue-950/90 to-slate-900/95 rounded-[22px] p-6 sm:p-10 lg:p-12 text-white relative">
              {/* Background ambient glow */}
              <div className="absolute -top-10 -right-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

              {/* Tag and Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-widest shadow-md">
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span>{lang === 'hi' ? PERSONAL_INFO.bigAimYouthEmployment.tagHi : PERSONAL_INFO.bigAimYouthEmployment.tagEn}</span>
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
                  <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
                  <span>
                    {lang === 'hi'
                      ? 'पलायन मुक्त कासगंज | घर पर रोजगार'
                      : 'Migration-Free Kasganj | Dignified Livelihoods'}
                  </span>
                </div>
              </div>

              {/* Big Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white leading-tight mb-6">
                {lang === 'hi'
                  ? PERSONAL_INFO.bigAimYouthEmployment.titleHi
                  : PERSONAL_INFO.bigAimYouthEmployment.titleEn}
              </h3>

              {/* Main Emotive Statement Banner */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/15 via-white/5 to-amber-500/10 border-l-4 border-amber-400 border-y border-r border-amber-500/20 shadow-inner mb-8">
                <p className="text-base sm:text-xl lg:text-2xl font-serif font-bold text-amber-200/95 leading-relaxed italic">
                  "{lang === 'hi' ? PERSONAL_INFO.bigAimYouthEmployment.statementHi : PERSONAL_INFO.bigAimYouthEmployment.statementEn}"
                </p>
                <div className="mt-4 pt-3 border-t border-amber-500/30 flex items-center justify-between text-xs sm:text-sm text-slate-300">
                  <span className="font-bold text-white tracking-wide">
                    — {lang === 'hi' ? PERSONAL_INFO.nameHindi : PERSONAL_INFO.name}
                  </span>
                  <span className="text-amber-400 font-medium">
                    {lang === 'hi' ? '100 - कासगंज विधानसभा क्षेत्र' : '100 - Kasganj Assembly Constituency'}
                  </span>
                </div>
              </div>

              {/* 4 Pillars of the Big Aim */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {PERSONAL_INFO.bigAimYouthEmployment.coreReasons.map((reason) => (
                  <div
                    key={reason.id}
                    className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/50 transition-colors space-y-2 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      {reason.id === 'stop-migration' && <Briefcase className="w-5 h-5" />}
                      {reason.id === 'caring-for-parents' && <Home className="w-5 h-5" />}
                      {reason.id === 'local-jobs' && <Building2 className="w-5 h-5" />}
                      {reason.id === 'skill-and-dignity' && <Target className="w-5 h-5" />}
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {lang === 'hi' ? reason.titleHi : reason.titleEn}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {lang === 'hi' ? reason.descHi : reason.descEn}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to Action for Youth & Parents */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                <div className="text-xs sm:text-sm text-slate-200">
                  <span className="font-bold text-amber-400 block mb-0.5">
                    {lang === 'hi' ? 'कासगंज (100) के युवाओं और अभिभावकों से सीधा संवाद:' : 'Direct Dialogue with Kasganj Youth & Parents:'}
                  </span>
                  <span>
                    {lang === 'hi'
                      ? 'यदि आप या आपके परिवार का कोई युवा रोजगार की तलाश में है या पलायन को मजबूर है, तो सीधे अपने सुझाव व बायोडाटा साझा करें।'
                      : 'If you or someone in your family is facing unemployment or out-migration, share your proposal or resume directly with our team.'}
                  </span>
                </div>

                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
                    lang === 'hi'
                      ? 'प्रणाम प्रवीण जी, मैं कासगंज (100) का युवा/अभिभावक हूँ। आपके "MY BIG AIM" (स्थानीय रोजगार व पलायन रोकथाम) के संबंध में अपना विचार/बायोडाटा साझा करना चाहता हूँ।'
                      : 'Hello Praveen ji, I am a youth/parent from Kasganj 100. I would like to support and connect regarding your Big Aim for local youth employment and halting migration.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 whitespace-nowrap cursor-pointer"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'युवा रोजगार संवाद (WhatsApp)' : 'Connect for Youth Jobs'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DEVELOPMENT PRIORITIES GRID (8 FOCUSED SECTORS) */}
        {/* ========================================================================= */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                {lang === 'hi' ? 'रणनीतिक विकास प्राथमिकताएं' : 'Strategic Action Pillars'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                {lang === 'hi'
                  ? 'कासगंज (100) के 8 मुख्य विकासात्मक स्तंभ'
                  : '8 Core Development Priorities for Kasganj'}
              </h3>
            </div>

            {/* Category filter tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', labelEn: 'All Priorities', labelHi: 'सभी 8 प्राथमिकताएं' },
                { id: 'infra', labelEn: 'Infrastructure', labelHi: 'सड़क व अवसंरचना' },
                { id: 'farmer', labelEn: 'Agriculture', labelHi: 'किसान कल्याण' },
                { id: 'youth', labelEn: 'Youth & Jobs', labelHi: 'युवा व रोजगार' },
                { id: 'health', labelEn: 'Healthcare', labelHi: 'चिकित्सा' },
                { id: 'green', labelEn: 'Solar & Green', labelHi: 'सौर ऊर्जा' },
                { id: 'governance', labelEn: 'Governance', labelHi: 'पारदर्शिता' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-blue-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {lang === 'hi' ? tab.labelHi : tab.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPriorities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400/80 shadow-xs hover:shadow-md transition-all p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                        {lang === 'hi' ? item.badgeHi : item.badgeEn}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-bold font-display text-slate-900 leading-snug">
                      {lang === 'hi' ? item.titleHi : item.titleEn}
                    </h4>

                    {/* Target Metric Badge */}
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-200/60">
                      <Target className="w-3.5 h-3.5 text-amber-600" />
                      <span>{lang === 'hi' ? item.targetHi : item.targetEn}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {lang === 'hi' ? item.descHi : item.descEn}
                    </p>

                    {/* Actionable Key Deliverables */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {lang === 'hi' ? 'मुख्य कार्य योजना:' : 'Key Action Deliverables:'}
                      </span>
                      <ul className="space-y-1.5">
                        {(lang === 'hi' ? item.keyPointsHi : item.keyPointsEn).map((pt, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-400">
                      {lang === 'hi' ? `प्राथमिकता #${idx + 1}` : `Priority #${idx + 1}`}
                    </span>
                    <a
                      href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
                        lang === 'hi'
                          ? `प्रणाम प्रवीण जी, मुझे कासगंज विजन 2027 के अंतर्गत '${item.titleHi}' के बारे में अपने गाँव का सुझाव देना है।`
                          : `Hello Praveen ji, regarding Kasganj Vision 2027 (${item.titleEn}), I have a proposal for my village.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-900 hover:text-amber-600 font-bold transition-colors cursor-pointer"
                    >
                      <span>{lang === 'hi' ? 'सुझाव दें' : 'Propose Idea'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CITIZEN SUGGESTION & PARTICIPATION BANNER */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-2xl p-6 sm:p-8 text-slate-950 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider bg-slate-950 text-amber-400 px-3 py-1 rounded-full inline-block">
              {lang === 'hi' ? 'जनसहभागिता मंच' : 'Citizen Participation Forum'}
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold font-display">
              {lang === 'hi'
                ? 'कासगंज (100) के विकास में आपका सुझाव सबसे महत्वपूर्ण है'
                : 'Your Suggestion is Vital for Kasganj (100) Development'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium">
              {lang === 'hi'
                ? 'क्या आपके गाँव या वार्ड में सड़क, पानी, स्कूल, बिजली या अस्पताल से संबंधित कोई विशेष समस्या है? अपना सुझाव सीधे प्रवीण कुमार मिश्र और उनकी टीम के साथ साझा करें।'
                : 'Do you have a specific proposal for your village, ward, or agricultural hamlet regarding roads, clean water, healthcare, or schools? Share your input directly.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => setSuggestionModalOpen(true)}
              className="px-5 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              {lang === 'hi' ? 'यहाँ सुझाव लिखें' : 'Submit Ground Proposal'}
            </button>
            <a
              href={`tel:${PERSONAL_INFO.whatsapp}`}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm transition-all border border-slate-300 text-center whitespace-nowrap"
            >
              {lang === 'hi' ? 'कार्यालय फोन: +91 82797 35137' : 'Helpline: +91 82797 35137'}
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CITIZEN SUGGESTION MODAL */}
      {/* ========================================================================= */}
      {suggestionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block">
                  {lang === 'hi' ? 'कासगंज (100) जनसुझाव' : 'Kasganj (100) Citizen Proposal'}
                </span>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  {lang === 'hi' ? 'विकास हेतु अपना विचार साझा करें' : 'Share Your Development Suggestion'}
                </h3>
              </div>
              <button
                onClick={() => setSuggestionModalOpen(false)}
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
                  {lang === 'hi' ? 'सुझाव सफलतापूर्वक भेजा गया!' : 'Suggestion Successfully Shared!'}
                </h4>
                <p className="text-xs text-slate-600">
                  {lang === 'hi'
                    ? 'प्रवीण कुमार मिश्र और कासगंज जनसेवा टीम आपके सुझाव पर शीघ्र संज्ञान लेगी।'
                    : 'Praveen Kumar Mishra and the team will review your proposal promptly.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSuggestionSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {lang === 'hi' ? 'आपका नाम (वैकल्पिक)' : 'Your Name (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={citizenName}
                    onChange={(e) => setCitizenName(e.target.value)}
                    placeholder={lang === 'hi' ? 'उदा. अमित कुमार' : 'e.g. Amit Kumar'}
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
                    value={citizenVillage}
                    onChange={(e) => setCitizenVillage(e.target.value)}
                    placeholder={lang === 'hi' ? 'उदा. गंजडुंडवारा वार्ड 5 / ग्राम नमैनी' : 'e.g. Ganjdundwara Ward 5 / Village Namaini'}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    {lang === 'hi' ? 'कासगंज (100) के लिए आपका सुझाव / समस्या का विवरण *' : 'Your Specific Suggestion / Local Need *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={suggestionText}
                    onChange={(e) => setSuggestionText(e.target.value)}
                    placeholder={
                      lang === 'hi'
                        ? 'यहाँ लिखें: हमारे गाँव में सड़क/पुलिया टूटी है, या विद्यालय में शिक्षक/कमरों की आवश्यकता है...'
                        : 'Describe your suggestion: road repair, drainage, school requirement, or health camp need...'
                    }
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSuggestionModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 cursor-pointer"
                  >
                    {lang === 'hi' ? 'रद्द करें' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'सुझाव भेजें (WhatsApp)' : 'Submit via WhatsApp'}</span>
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
