import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PoliticalProfile } from './components/PoliticalProfile';
import { VisionKasganj } from './components/VisionKasganj';
import { ElectionRoadmap2027 } from './components/ElectionRoadmap2027';
import { VolunteerRegistration } from './components/VolunteerRegistration';
import { ImpactStoriesSection } from './components/ImpactStoriesSection';
import { SocialWork } from './components/SocialWork';
import { TrustSection } from './components/TrustSection';
import { PublicIssues } from './components/PublicIssues';
import { Initiatives } from './components/Initiatives';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { EducationSkills } from './components/EducationSkills';
import { Gallery } from './components/Gallery';
import { VideosSection } from './components/VideosSection';
import { MediaSection } from './components/MediaSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { DonationSection } from './components/DonationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiJanSamvadModal } from './components/AiJanSamvadModal';
import { AiCareerAdvisorModal } from './components/AiCareerAdvisorModal';
import { MessageCircle, Globe, Bot, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [isAiCareerOpen, setIsAiCareerOpen] = useState(false);

  // Sync title dynamically based on language choice
  useEffect(() => {
    if (lang === 'hi') {
      document.title = 'प्रवीण कुमार मिश्र | सामाजिक कार्यकर्ता | जनजीवन | कासगंज';
    } else {
      document.title = 'Praveen Kumar Mishra | Social Worker | Public Life | Kasganj';
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* 3-Zone Top Bar Navigation */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenAiChat={() => setIsAiChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Portrait, Pillars, and Taglines */}
        <Hero lang={lang} />

        {/* About Praveen Kumar Mishra Section */}
        <About lang={lang} />

        {/* Public & Political Profile Section (Transparent & Factual) */}
        <PoliticalProfile lang={lang} />

        {/* Vision for Kasganj 2027 Vidhan Sabha (100) & Statement of Intent */}
        <VisionKasganj lang={lang} />

        {/* 2027 Election Roadmap & Timeline */}
        <ElectionRoadmap2027 lang={lang} />

        {/* Grassroots Volunteer & Supporter Registration */}
        <VolunteerRegistration lang={lang} />

        {/* Social Work & Community Development (10 Distinct Cards) */}
        <SocialWork lang={lang} />

        {/* Real Ground Impact & Success Stories with Evidence & Testimonials */}
        <ImpactStoriesSection lang={lang} />

        {/* Dr. Ambedkar Gramin Vikas Trust Dedicated Section */}
        <TrustSection lang={lang} />

        {/* Understanding Local Issues (11 Areas + Jan Samasya Survey Form + AI Petition Drafter) */}
        <PublicIssues lang={lang} />

        {/* Our Initiatives & Field Projects Portfolio */}
        <Initiatives lang={lang} />

        {/* Professional Experience Career Timeline */}
        <ProfessionalExperience lang={lang} />

        {/* Education (M.Sc. / B.Sc. Mathematics) & 12 Visual Skill Cards + AI Career Advisor */}
        <EducationSkills
          lang={lang}
          onOpenCareerAdvisor={() => setIsAiCareerOpen(true)}
        />

        {/* Verified Photo Gallery with Lightbox & Upload Ability */}
        <Gallery lang={lang} />

        {/* YouTube-style Videos & Speeches Gallery with Audio/Speech Player */}
        <VideosSection lang={lang} />

        {/* Media & Press Updates Section */}
        <MediaSection lang={lang} />

        {/* Official Social Media Channels */}
        <SocialMediaSection lang={lang} />

        {/* Grassroots Campaign Fund (PhonePe QR & UPI Donations) */}
        <DonationSection lang={lang} />

        {/* Direct Contact Form & Kasganj Map Embed */}
        <ContactSection lang={lang} />
      </main>

      {/* Dignified Footer with Legal Disclaimers & Privacy */}
      <Footer lang={lang} />

      {/* Floating Action Button: AI Jan Samvad Assistant */}
      <button
        onClick={() => setIsAiChatOpen(true)}
        className="fixed bottom-22 right-6 z-40 p-3.5 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white border border-amber-400/40 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center justify-center cursor-pointer group"
        aria-label="Open Praveen AI Assistant"
        title="Open Praveen Jan Samvad AI / एआई जनसंवाद"
      >
        <Bot className="w-6 h-6 text-amber-400" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          {lang === 'hi' ? 'प्रवीण जनसंवाद एआई' : 'Praveen AI'}
        </span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-slate-900 animate-pulse" />
      </button>

      {/* Floating Action Button: WhatsApp Quick Connect */}
      <a
        href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Namaste%20Praveen%20ji,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center cursor-pointer group"
        aria-label="Connect on WhatsApp"
        title="Connect directly on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          {lang === 'hi' ? 'व्हाट्सएप संपर्क' : 'WhatsApp'}
        </span>
      </a>

      {/* Floating Language Switcher for quick mobile/desktop bilingual toggle */}
      <button
        onClick={toggleLanguage}
        className="fixed bottom-6 left-6 z-40 px-3 py-2 bg-slate-900/90 backdrop-blur-md text-white border border-slate-700/80 rounded-full shadow-lg hover:bg-slate-800 transition-all flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
        title="Toggle English / हिंदी"
      >
        <Globe className="w-3.5 h-3.5 text-amber-400" />
        <span>{lang === 'en' ? 'हिंदी में देखें' : 'View in English'}</span>
      </button>

      {/* AI Modals */}
      <AiJanSamvadModal
        lang={lang}
        isOpen={isAiChatOpen}
        onClose={() => setIsAiChatOpen(false)}
      />

      <AiCareerAdvisorModal
        lang={lang}
        isOpen={isAiCareerOpen}
        onClose={() => setIsAiCareerOpen(false)}
      />
    </div>
  );
}
