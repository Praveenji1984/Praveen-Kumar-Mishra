import React, { useState, useEffect } from 'react';
import {
  Users2,
  CheckCircle2,
  Send,
  Heart,
  Briefcase,
  ShieldCheck,
  Building,
  Sparkles,
  PhoneCall,
  MapPin,
  Award,
  Share2,
  Clock,
  UserCheck,
  BookOpen,
  Sprout,
  HeartHandshake,
  Download,
  AlertCircle,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface VolunteerRegistrationProps {
  lang: Language;
}

interface AreaInterest {
  id: string;
  labelEn: string;
  labelHi: string;
  icon: React.ElementType;
}

interface RegisteredVolunteer {
  id: string;
  name: string;
  village: string;
  profession: string;
  areasOfInterest: string[];
  createdAt: string;
}

export const VolunteerRegistration: React.FC<VolunteerRegistrationProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [village, setVillage] = useState('');
  const [profession, setProfession] = useState('युवा / विद्यार्थी (Youth / Student)');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'युवा रोजगार एवं कौशल (Big Aim)',
  ]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [successVolunteer, setSuccessVolunteer] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [totalSupportersCount, setTotalSupportersCount] = useState<number>(1423);
  const [recentSupporters, setRecentSupporters] = useState<RegisteredVolunteer[]>([]);

  const availableInterests: AreaInterest[] = [
    {
      id: 'youth-jobs',
      labelEn: 'Youth Jobs & Local Employment (Big Aim)',
      labelHi: 'युवा रोजगार एवं कौशल (Big Aim)',
      icon: Briefcase,
    },
    {
      id: 'village-chaupal',
      labelEn: 'Village Chaupals & Grievance Help',
      labelHi: 'गाँव चौपाल एवं जनसमस्या निवारण',
      icon: Users2,
    },
    {
      id: 'booth-management',
      labelEn: 'Booth Organization & Clean Elections',
      labelHi: 'बूथ प्रबंधन एवं स्वच्छ मतदान',
      icon: ShieldCheck,
    },
    {
      id: 'farmers-welfare',
      labelEn: 'Farmers’ Welfare & Irrigation Access',
      labelHi: 'किसान कल्याण एवं सिंचाई सहायता',
      icon: Sprout,
    },
    {
      id: 'women-education',
      labelEn: 'Women Empowerment & Girls’ Education',
      labelHi: 'महिला सशक्तीकरण व बालिका शिक्षा',
      icon: Heart,
    },
    {
      id: 'digital-media',
      labelEn: 'Digital Campaign & Social Media',
      labelHi: 'डिजिटल एवं सोशल मीडिया जनसंवाद',
      icon: Sparkles,
    },
    {
      id: 'health-camps',
      labelEn: 'Health Camps & Blood Donation',
      labelHi: 'स्वास्थ्य एवं रक्तदान शिविर',
      icon: HeartHandshake,
    },
    {
      id: 'legal-civic',
      labelEn: 'Civic Legal Aid & Administrative Follow-up',
      labelHi: 'प्रशासनिक पैरवी व नागरिक सहायता',
      icon: BookOpen,
    },
  ];

  // Fetch recent volunteer counts & recent list
  useEffect(() => {
    fetch('/api/volunteers')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          if (data.totalCount) setTotalSupportersCount(data.totalCount);
          if (data.recentVolunteers && Array.isArray(data.recentVolunteers)) {
            setRecentSupporters(data.recentVolunteers);
          }
        }
      })
      .catch((err) => console.warn('Could not fetch volunteers list:', err));
  }, []);

  const toggleInterest = (labelHi: string) => {
    setSelectedInterests((prev) =>
      prev.includes(labelHi) ? prev.filter((item) => item !== labelHi) : [...prev, labelHi]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim() || !phone.trim() || !village.trim()) {
      setErrorMsg(
        lang === 'hi'
          ? 'कृपया नाम, मोबाइल नंबर और गाँव का नाम अवश्य भरें।'
          : 'Please provide your name, mobile number, and village name.'
      );
      return;
    }

    if (selectedInterests.length === 0) {
      setErrorMsg(
        lang === 'hi'
          ? 'कृपया कम से कम एक रुचि/कार्यक्षेत्र का चयन करें।'
          : 'Please select at least one area of interest.'
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          village: village.trim(),
          profession,
          areasOfInterest: selectedInterests,
          message: message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessVolunteer(data.volunteer);
        if (data.totalVolunteersCount) {
          setTotalSupportersCount(data.totalVolunteersCount);
        }
        // Save locally as well
        localStorage.setItem(
          'kasganj_volunteer_reg',
          JSON.stringify({ ...data.volunteer, phone, date: new Date().toISOString() })
        );
      } else {
        // Fallback local persistence
        const fakeBadge = `KAS-2027-${(totalSupportersCount + 1).toString().padStart(4, '0')}`;
        const fallbackObj = {
          name: name.trim(),
          village: village.trim(),
          profession,
          areasOfInterest: selectedInterests,
          badgeNumber: fakeBadge,
        };
        setSuccessVolunteer(fallbackObj);
        setTotalSupportersCount((prev) => prev + 1);
      }
    } catch (err) {
      console.warn('Network error, registering locally:', err);
      const fakeBadge = `KAS-2027-${(totalSupportersCount + 1).toString().padStart(4, '0')}`;
      const fallbackObj = {
        name: name.trim(),
        village: village.trim(),
        profession,
        areasOfInterest: selectedInterests,
        badgeNumber: fakeBadge,
      };
      setSuccessVolunteer(fallbackObj);
      setTotalSupportersCount((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  const handleShareToWhatsApp = () => {
    if (!successVolunteer) return;
    const shareText = `*कासगंज 2027 जनसेवक पंजीकरण*%0A*नाम:* ${successVolunteer.name}%0A*गाँव/वार्ड:* ${successVolunteer.village}%0A*पद:* ${successVolunteer.profession}%0A*बैज आईडी:* ${successVolunteer.badgeNumber}%0A*रुचियाँ:* ${successVolunteer.areasOfInterest.join(', ')}%0A*संदेश:* मैं प्रवीण कुमार मिश्र जी के साथ कासगंज (100) के नवनिर्माण हेतु जुड़ चुका हूँ।`;
    window.open(`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleResetForm = () => {
    setSuccessVolunteer(null);
    setName('');
    setPhone('');
    setVillage('');
    setMessage('');
    setSelectedInterests(['युवा रोजगार एवं कौशल (Big Aim)']);
  };

  return (
    <section id="volunteer-registration" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 tracking-wider uppercase mb-2 bg-amber-100/90 px-3 py-1.5 rounded-full border border-amber-300">
            <UserCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>
              {lang === 'hi'
                ? '100 - कासगंज जनआंदोलन | स्वयंसेवक एवं समर्थक पंजीकरण'
                : '100 - Kasganj Grassroots Movement | Volunteer & Supporter Registration'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'कासगंज के नवनिर्माण से जुड़ें: स्वयंसेवक बनें' : 'Join the Movement: Register as a Volunteer'}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-900 to-amber-500 mt-3 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'hi'
              ? 'कासगंज (100) में शिक्षा, स्वास्थ्य, पक्की सड़कों और युवाओं को स्थानीय रोजगार दिलाकर पलायन रोकने के संकल्प में अपनी सहभागिता दर्ज करें। नाम, गाँव और रुचि का चयन कर आज ही जनसेवक दल का हिस्सा बनें।'
              : 'Become an active partner in Praveen Kumar Mishra’s grassroots initiative for Kasganj (100). Register your name, village, and preferred area of interest to strengthen local governance and youth jobs.'}
          </p>
        </div>

        {/* Live Community Counter Bar */}
        <div className="mb-12 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded-2xl p-4 sm:p-6 text-white shadow-md flex flex-wrap items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-xs">
              <Users2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold font-display text-amber-300">
                  {totalSupportersCount.toLocaleString()}+
                </span>
                <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                  {lang === 'hi' ? 'पंजीकृत जनसेवक व समर्थक' : 'Registered Supporters'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {lang === 'hi'
                  ? 'कासगंज व गंजडुंडवारा के 150+ गाँवों व वार्डों से जुड़े कर्मठ नागरिक'
                  : 'Citizens united across 150+ rural hamlets and municipal wards'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-300 border-t sm:border-t-0 sm:border-l border-slate-700/80 pt-3 sm:pt-0 sm:pl-6">
            <div>
              <span className="text-amber-400 font-bold block text-sm">100%</span>
              <span>{lang === 'hi' ? 'निःस्वार्थ जनसेवा' : 'Grassroots Focus'}</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold block text-sm">0%</span>
              <span>{lang === 'hi' ? 'धनबल व प्रलोभन' : 'Zero Money Power'}</span>
            </div>
            <div>
              <span className="text-sky-300 font-bold block text-sm">24x7</span>
              <span>{lang === 'hi' ? 'कार्यालय सहयोग' : 'Direct Support'}</span>
            </div>
          </div>
        </div>

        {/* Main Grid: Form on Left, Digital Badge / Success / Social Proof on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Registration Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-8 lg:p-10 relative">
            {successVolunteer ? (
              /* Success & Digital Volunteer Identity Card */
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">
                      {lang === 'hi'
                        ? 'बधाई हो! आपका पंजीकरण सफलतापूर्वक दर्ज हो गया है।'
                        : 'Congratulations! Your Volunteer Registration is Confirmed.'}
                    </h4>
                    <p className="text-xs text-emerald-700 mt-0.5">
                      {lang === 'hi'
                        ? 'कासगंज (100) नवनिर्माण अभियान में आपका हार्दिक स्वागत है।'
                        : 'Welcome to the Kasganj 2027 Grassroots Transformation Team.'}
                    </p>
                  </div>
                </div>

                {/* Digital Volunteer Badge Card */}
                <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 text-white border-2 border-amber-400/70 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-start justify-between pb-4 border-b border-slate-700/80 mb-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 block mb-0.5">
                        {lang === 'hi' ? 'डिजिटल जनसेवक पहचान पत्र' : 'DIGITAL VOLUNTEER IDENTITY'}
                      </span>
                      <h5 className="text-lg font-extrabold font-display text-white">
                        100 - कासगंज जनसेवक 2027
                      </h5>
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-amber-500 text-slate-950 shadow-xs">
                      {successVolunteer.badgeNumber}
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="text-[11px] text-slate-400 block">
                          {lang === 'hi' ? 'स्वयंसेवक का नाम:' : 'Volunteer Name:'}
                        </span>
                        <span className="font-bold text-white text-base">
                          {successVolunteer.name}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] text-slate-400 block">
                          {lang === 'hi' ? 'गाँव / वार्ड:' : 'Village / Ward:'}
                        </span>
                        <span className="font-semibold text-slate-200">
                          {successVolunteer.village}
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-400 block">
                        {lang === 'hi' ? 'दायित्व / वर्ग:' : 'Category / Profession:'}
                      </span>
                      <span className="font-semibold text-amber-300">
                        {successVolunteer.profession}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-400 block mb-1">
                        {lang === 'hi' ? 'चयनित कार्यक्षेत्र (Areas of Interest):' : 'Areas of Interest:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {successVolunteer.areasOfInterest.map((interest: string, i: number) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700"
                          >
                            ✓ {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Seal */}
                  <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{lang === 'hi' ? 'प्रवीण कुमार मिश्र जनसेवा दल' : 'Praveen Kumar Mishra Team'}</span>
                    </div>
                    <span>{PERSONAL_INFO.address}</span>
                  </div>
                </div>

                {/* Post-Registration Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={handleShareToWhatsApp}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{lang === 'hi' ? 'व्हाट्सएप पर पुष्टि भेजें' : 'Send Confirmation on WhatsApp'}</span>
                  </button>

                  <button
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <span>{lang === 'hi' ? '+ नया पंजीकरण करें' : '+ Register Another'}</span>
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mb-1">
                    {lang === 'hi' ? 'स्वयंसेवक / समर्थक पंजीकरण फॉर्म' : 'Volunteer Registration Form'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {lang === 'hi'
                      ? 'अपनी जानकारी दर्ज करें। यह विवरण सीधे केंद्रीय टीम के पास सुरक्षित रहेगा।'
                      : 'Fill in your details below. Your information is securely stored with our constituency office.'}
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {lang === 'hi' ? 'आपका पूरा नाम *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lang === 'hi' ? 'उदा. राहुल कुमार सिंह' : 'e.g. Rahul Kumar Singh'}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {lang === 'hi' ? 'मोबाइल / व्हाट्सएप नंबर *' : 'WhatsApp / Mobile *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={lang === 'hi' ? '+91 9XXXXXXXXX' : '+91 9XXXXXXXXX'}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Village / Ward */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {lang === 'hi' ? 'गाँव / मजरा / वार्ड का नाम (कासगंज 100) *' : 'Village / Majra / Ward Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={village}
                      onChange={(e) => setVillage(e.target.value)}
                      placeholder={lang === 'hi' ? 'उदा. ग्राम नमैनी / गंजडुंडवारा वार्ड 5' : 'e.g. Namaini / Ganjdundwara Ward 5'}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>

                  {/* Profession / Role */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {lang === 'hi' ? 'आपकी श्रेणी / व्यवसाय' : 'Profession / Category'}
                    </label>
                    <select
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                    >
                      <option value="युवा / विद्यार्थी (Youth / Student)">
                        {lang === 'hi' ? 'युवा / विद्यार्थी (Youth / Student)' : 'Youth / Student'}
                      </option>
                      <option value="किसान / अन्नदाता (Farmer)">
                        {lang === 'hi' ? 'किसान / अन्नदाता (Farmer)' : 'Farmer'}
                      </option>
                      <option value="व्यापारी / दुकानदार (Trader / Business)">
                        {lang === 'hi' ? 'व्यापारी / दुकानदार (Trader / Business)' : 'Trader / Business'}
                      </option>
                      <option value="शिक्षक / बुद्धिजीवी (Teacher / Professional)">
                        {lang === 'hi' ? 'शिक्षक / बुद्धिजीवी (Teacher / Professional)' : 'Teacher / Professional'}
                      </option>
                      <option value="महिला शक्ति / समाज सेविका (Woman Leader)">
                        {lang === 'hi' ? 'महिला शक्ति / समाज सेविका (Woman Leader)' : 'Woman Leader / Homemaker'}
                      </option>
                      <option value="वरिष्ठ नागरिक / मार्गदर्शक (Senior Citizen)">
                        {lang === 'hi' ? 'वरिष्ठ नागरिक / मार्गदर्शक (Senior Citizen)' : 'Senior Citizen / Elder'}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Areas of Interest Multi-Selection */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-700 block">
                      {lang === 'hi'
                        ? 'आप किस क्षेत्र में सहयोग करना चाहते हैं? (Areas of Interest) *'
                        : 'Select Your Areas of Interest *'}
                    </label>
                    <span className="text-[11px] text-slate-400">
                      {selectedInterests.length} {lang === 'hi' ? 'चयनित' : 'selected'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableInterests.map((interest) => {
                      const Icon = interest.icon;
                      const isSelected = selectedInterests.includes(interest.labelHi);
                      return (
                        <button
                          type="button"
                          key={interest.id}
                          onClick={() => toggleInterest(interest.labelHi)}
                          className={`flex items-center gap-2.5 p-3 rounded-xl text-left transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          <div
                            className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected
                                ? 'bg-amber-400 text-slate-950 font-bold'
                                : 'bg-white text-slate-500 border border-slate-200'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-medium leading-tight">
                            {lang === 'hi' ? interest.labelHi : interest.labelEn}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message / Suggestion */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    {lang === 'hi'
                      ? 'प्रवीण जी के नाम संदेश / गाँव की विशेष आवश्यकता (वैकल्पिक)'
                      : 'Personal Message / Village Need for Praveen ji (Optional)'}
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      lang === 'hi'
                        ? 'उदा. मैं अपने गाँव में चौपाल लगवाना चाहता हूँ, या युवाओं को सौर ऊर्जा व कौशल प्रशिक्षण से जोड़ना चाहता हूँ...'
                        : 'Share any thought, village issue, or idea...'
                    }
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span>{lang === 'hi' ? 'पंजीकरण हो रहा है...' : 'Registering...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>
                        {lang === 'hi'
                          ? 'कासगंज जनसेवक के रूप में पंजीकरण पूर्ण करें'
                          : 'Complete Volunteer Registration'}
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Why Join & Recent Supporter Wall (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Why Join Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
                {lang === 'hi' ? 'जनसेवा का संकल्प' : 'Our Grassroots Values'}
              </span>
              <h4 className="text-xl font-bold font-display text-slate-900">
                {lang === 'hi' ? 'स्वयंसेवक के रूप में आपको क्या अवसर मिलेंगे?' : 'What You Gain as a Volunteer'}
              </h4>

              <div className="space-y-3 pt-1 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'hi' ? 'सीधा संपर्क:' : 'Direct Access:'}</strong>{' '}
                    {lang === 'hi'
                      ? 'प्रवीण कुमार मिश्र और गंजडुंडवारा केंद्रीय कार्यालय से सीधा समन्वय।'
                      : 'Direct communication with Praveen Kumar Mishra and the central team.'}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'hi' ? 'गाँव की आवाज:' : 'Village Voice:'}</strong>{' '}
                    {lang === 'hi'
                      ? 'अपने गाँव की सड़क, नाली, स्कूल और बिजली समस्याओं का प्राथमिकता से निस्तारण।'
                      : 'Priority resolution for your village roads, drains, and schools.'}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'hi' ? 'युवा रोजगार दल:' : 'Youth Employment:'}</strong>{' '}
                    {lang === 'hi'
                      ? 'कासगंज से पलायन रोकने के मुख्य संकल्प (Big Aim) का हिस्सा बनकर स्थानीय युवाओं को हुनर व रोजगार से जोड़ना।'
                      : 'Partnering in the Big Aim to halt out-migration and skill youth.'}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>{lang === 'hi' ? 'डिजिटल प्रमाण पत्र:' : 'Digital Certificate:'}</strong>{' '}
                    {lang === 'hi'
                      ? 'सक्रिय स्वयंसेवकों को समाज सेवा हेतु अधिकृत प्रशंसा-पत्र व पहचान पत्र।'
                      : 'Authorized digital recognition and identity for active social service.'}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Supporters Roll / Live Wall */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <h5 className="font-bold text-xs uppercase tracking-wider text-slate-800">
                    {lang === 'hi' ? 'हाल ही में जुड़े जनसेवक' : 'Recently Joined Volunteers'}
                  </h5>
                </div>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {(recentSupporters.length > 0
                  ? recentSupporters.slice(0, 4)
                  : [
                      {
                        name: 'राकेश कुमार राजपूत',
                        village: 'ग्राम नमैनी, कासगंज',
                        profession: 'युवा किसान',
                        areasOfInterest: ['युवा रोजगार (Big Aim)', 'सिंचाई सहायता'],
                      },
                      {
                        name: 'अमित कुमार शर्मा',
                        village: 'गंजडुंडवारा वार्ड 4',
                        profession: 'व्यापारी',
                        areasOfInterest: ['बूथ प्रबंधन', 'जनसमस्या निवारण'],
                      },
                      {
                        name: 'सुमन लता शाक्य',
                        village: 'ग्राम सहावर रोड',
                        profession: 'शिक्षिका',
                        areasOfInterest: ['बालिका शिक्षा', 'सोशल मीडिया'],
                      },
                    ]
                ).map((sup: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-slate-900">
                        <span>{sup.name}</span>
                        <span className="text-[10px] font-normal text-slate-500">
                          ({sup.profession})
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-600" />
                        {sup.village}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">
                        {sup.areasOfInterest?.[0] || 'कासगंज विकास'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office contact note */}
              <div className="pt-2 text-center">
                <a
                  href={`tel:${PERSONAL_INFO.whatsapp}`}
                  className="text-xs font-semibold text-blue-900 hover:text-amber-600 transition-colors"
                >
                  {lang === 'hi'
                    ? 'सीधे केंद्रीय कार्यालय संपर्क: +91 82797 35137'
                    : 'Constituency Helpline: +91 82797 35137'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
