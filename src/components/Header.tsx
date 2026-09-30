import React, { useState } from 'react';
import { Menu, X, Globe, PhoneCall, ChevronDown, Bot, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenAiChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onOpenAiChat }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const navLinks = [
    { href: '#about', labelEn: 'About', labelHi: 'परिचय' },
    { href: '#political-profile', labelEn: 'Public Role', labelHi: 'सार्वजनिक दायित्व' },
    { href: '#vision-kasganj', labelEn: 'Vision 2027', labelHi: 'कासगंज विजन 2027' },
    { href: '#impact-stories', labelEn: 'Impact & Proof', labelHi: 'सफलता गाथाएं' },
    { href: '#election-roadmap', labelEn: '2027 Roadmap', labelHi: '2027 रोडमैप' },
    { href: '#social-work', labelEn: 'Social Work', labelHi: 'समाज सेवा' },
    { href: '#public-issues', labelEn: 'Public Issues', labelHi: 'जनमुद्दे' },
  ];

  const moreLinks = [
    { href: '#volunteer-registration', labelEn: 'Join as Volunteer', labelHi: 'स्वयंसेवक बनें' },
    { href: '#initiatives', labelEn: 'Key Initiatives', labelHi: 'प्रमुख पहल' },
    { href: '#contribute', labelEn: 'Campaign Fund (UPI)', labelHi: 'चुनावी जनसहयोग (UPI)' },
    { href: '#trust', labelEn: 'Dr. Ambedkar Trust', labelHi: 'डॉ. आंबेडकर ट्रस्ट' },
    { href: '#experience', labelEn: 'Experience', labelHi: 'कार्य अनुभव' },
    { href: '#education', labelEn: 'Education & Skills', labelHi: 'शिक्षा व योग्यता' },
    { href: '#gallery', labelEn: 'Photo Gallery', labelHi: 'चित्र दीर्घा' },
    { href: '#videos', labelEn: 'Speeches & Videos', labelHi: 'भाषण एवं वीडियो' },
    { href: '#media', labelEn: 'Media & Updates', labelHi: 'मीडिया एवं समाचार' },
    { href: '#social-media', labelEn: 'Social Media', labelHi: 'सोशल मीडिया' },
    { href: '#contact', labelEn: 'Contact', labelHi: 'संपर्क' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold font-display text-slate-900 tracking-tight hover:text-blue-900 transition-colors whitespace-nowrap"
        >
          {lang === 'hi' ? 'प्रवीण कुमार मिश्र' : 'Praveen Kumar Mishra'}
        </a>

        {/* Zone 2: 4-6 clean text navigation links with More dropdown */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-900 hover:border-b-2 hover:border-amber-500 py-1 transition-all whitespace-nowrap"
            >
              {lang === 'hi' ? link.labelHi : link.labelEn}
            </a>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
              className="flex items-center gap-1 hover:text-blue-900 py-1 transition-all whitespace-nowrap cursor-pointer"
              aria-expanded={moreDropdownOpen}
            >
              <span>{lang === 'hi' ? 'अधिक वर्ग' : 'More'}</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {moreDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                {moreLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMoreDropdownOpen(false)}
                    className="block px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors"
                  >
                    {lang === 'hi' ? item.labelHi : item.labelEn}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            title="Switch Language / भाषा बदलें"
          >
            <Globe className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'en' ? 'हिंदी' : 'EN'}</span>
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={onOpenAiChat}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-900 to-indigo-950 hover:from-blue-800 hover:to-indigo-900 rounded-lg transition-all whitespace-nowrap shadow-xs cursor-pointer border border-blue-400/30"
            title="Chat with Praveen AI / एआई जनसंवाद"
          >
            <Bot className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">{lang === 'hi' ? 'एआई संवाद' : 'AI Assistant'}</span>
          </button>

          {/* Contribute / Donation Quick Action */}
          <a
            href="#contribute"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all whitespace-nowrap shadow-xs cursor-pointer"
          >
            <span>{lang === 'hi' ? 'जनसहयोग' : 'Contribute'}</span>
          </a>

          {/* Primary Action Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-blue-950 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'hi' ? 'जुड़ें' : 'Connect'}</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-1">
          <div className="text-xs font-semibold uppercase text-slate-400 px-3 py-1">
            {lang === 'hi' ? 'नेविगेशन' : 'Navigation'}
          </div>
          {[...navLinks, ...moreLinks].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-950 transition-colors"
            >
              {lang === 'hi' ? link.labelHi : link.labelEn}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAiChat();
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-900 to-indigo-950 rounded-lg cursor-pointer"
            >
              <Bot className="w-4 h-4 text-amber-400" />
              <span>{lang === 'hi' ? 'प्रवीण जनसंवाद एआई से पूछें' : 'Chat with Praveen AI'}</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-bold text-white bg-blue-950 rounded-lg"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>{lang === 'hi' ? 'संपर्क करें' : 'Connect With Praveen'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
