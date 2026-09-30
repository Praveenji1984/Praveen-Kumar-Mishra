import React, { useState } from 'react';
import { ArrowUp, ShieldAlert, Heart, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [modalType, setModalType] = useState<'privacy' | 'disclaimer' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Identity & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
              {lang === 'hi' ? PERSONAL_INFO.nameHindi : PERSONAL_INFO.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              {lang === 'hi' ? PERSONAL_INFO.primaryIdentityHi : PERSONAL_INFO.primaryIdentityEn}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {lang === 'hi'
                ? 'कासगंज, उत्तर प्रदेश में समाज सेवा, शिक्षा प्रोत्साहन, ग्रामीण अवसंरचना सर्वेक्षण एवं जनसरोकारों को समर्पित आधिकारिक डिजिटल पहचान।'
                : 'Official personal portfolio and public-service profile dedicated to grassroots social work, rural development advocacy, and community dialogue in Kasganj, Uttar Pradesh.'}
            </p>
            <div className="pt-1 space-y-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="font-semibold text-amber-400">
                  {lang === 'hi'
                    ? '100 - कासगंज विधानसभा क्षेत्र (उ.प्र.)'
                    : '100 - Kasganj Vidhan Sabha Kshetra (U.P.)'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 pl-5">
                {lang === 'hi'
                  ? `कार्यालय: ${PERSONAL_INFO.address}`
                  : `Office: ${PERSONAL_INFO.address}`}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {lang === 'hi' ? 'त्वरित लिंक' : 'Core Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'परिचय एवं पृष्ठभूमि' : 'About Praveen Kumar Mishra'}
                </a>
              </li>
              <li>
                <a href="#political-profile" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'सार्वजनिक एवं राजनीतिक दायित्व' : 'Public & Political Profile'}
                </a>
              </li>
              <li>
                <a href="#social-work" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'समाज सेवा के 10 क्षेत्र' : '10 Social Work Areas'}
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट' : 'Dr. Ambedkar Trust'}
                </a>
              </li>
              <li>
                <a href="#public-issues" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'कासगंज की 11 स्थानीय समस्याएं' : 'Understanding Local Issues'}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'व्यावसायिक अनुभव' : 'Professional Experience'}
                </a>
              </li>
            </ul>
          </div>

          {/* Media & Engagement */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              {lang === 'hi' ? 'दस्तावेजीकरण एवं संपर्क' : 'Documentation & Contact'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'चित्र दीर्घा' : 'Verified Photo Gallery'}
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'भाषण एवं वीडियो संग्रह' : 'Speeches & Video Recordings'}
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'प्रेस एवं समाचार कवरेज' : 'Media Updates & Articles'}
                </a>
              </li>
              <li>
                <a href="#social-media" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'आधिकारिक सोशल मीडिया' : 'Official Social Media'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {lang === 'hi' ? 'नागरिक संवाद प्रपत्र' : 'Citizen Contact Form'}
                </a>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-500">
              <span>{PERSONAL_INFO.email}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              © {new Date().getFullYear()} Praveen Kumar Mishra. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {lang === 'hi' ? PERSONAL_INFO.taglineHindi : PERSONAL_INFO.taglineEnglish}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setModalType('disclaimer')}
              className="hover:text-slate-300 underline cursor-pointer"
            >
              {lang === 'hi' ? 'अस्वीकरण (Disclaimer)' : 'Disclaimer'}
            </button>
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-slate-300 underline cursor-pointer"
            >
              {lang === 'hi' ? 'गोपनीयता नीति (Privacy)' : 'Privacy Policy'}
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 text-slate-200 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white mb-2">
              {modalType === 'disclaimer'
                ? lang === 'hi'
                  ? 'अस्वीकरण एवं नीति (Disclaimer)'
                  : 'Official Disclaimer & Purpose'
                : lang === 'hi'
                ? 'गोपनीयता नीति (Privacy Policy)'
                : 'Privacy Policy'}
            </h3>

            {modalType === 'disclaimer' ? (
              <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
                <p>
                  This personal portfolio website represents the authentic social work, public-life
                  participation, professional background, and community development initiatives of
                  Praveen Kumar Mishra, based in Kasganj, Uttar Pradesh.
                </p>
                <p>
                  Political affiliation with Rashtriya Adhikar Morcha Party (State Executive Member, UP)
                  is stated strictly for identity verification, ethical transparency, and public record.
                  This website does not solicit votes, nor make election appeals or aggressive campaign
                  claims.
                </p>
                <p>
                  All local issues (drinking water, roads, power, schools) are presented for constructive
                  community dialogue and survey documentation.
                </p>
              </div>
            ) : (
              <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
                <p>
                  We value your privacy. Any information submitted through the contact form, Jan Samasya
                  Survey, or community bulletin is used exclusively for communication with Praveen Kumar
                  Mishra's citizen outreach team.
                </p>
                <p>
                  We do not sell, rent, or trade your personal data to any commercial third parties.
                </p>
              </div>
            )}

            <div className="mt-6 pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setModalType(null)}
                className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold cursor-pointer"
              >
                {lang === 'hi' ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
