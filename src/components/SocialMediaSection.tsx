import React, { useState } from 'react';
import {
  Share2,
  Check,
  ExternalLink,
  MessageCircle,
  Send,
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface SocialMediaProps {
  lang: Language;
}

export const SocialMediaSection: React.FC<SocialMediaProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);

  const platforms = [
    {
      name: 'Facebook',
      handle: 'facebook.com/pmsvc',
      noteEn: 'Official Facebook Page & Field Updates',
      noteHi: 'आधिकारिक फेसबुक पेज एवं क्षेत्र अपडेट',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      actionUrl: PERSONAL_INFO.socialLinks.facebook,
      badge: 'Official Page',
    },
    {
      name: 'Instagram',
      handle: PERSONAL_INFO.socialLinks.instagramHandle,
      noteEn: 'Field Photos & Community Highlights',
      noteHi: 'जमीनी तस्वीरें व जनसंवाद झलकियां',
      icon: Instagram,
      color: 'bg-pink-600 hover:bg-pink-700',
      actionUrl: PERSONAL_INFO.socialLinks.instagram,
      badge: 'Official Profile',
    },
    {
      name: 'LinkedIn',
      handle: 'in/praveenmishra707',
      noteEn: 'Professional Background & Solar Projects',
      noteHi: 'व्यावसायिक अनुभव व सौर परियोजनाएं',
      icon: Linkedin,
      color: 'bg-sky-700 hover:bg-sky-800',
      actionUrl: PERSONAL_INFO.socialLinks.linkedin,
      badge: 'Professional Network',
    },
    {
      name: 'X (Twitter)',
      handle: PERSONAL_INFO.socialLinks.twitterHandle,
      noteEn: 'Public Statements & Policy Thoughts',
      noteHi: 'सार्वजनिक वक्तव्य एवं नीतिगत विचार',
      icon: Twitter,
      color: 'bg-slate-900 hover:bg-slate-800',
      actionUrl: PERSONAL_INFO.socialLinks.twitter,
      badge: 'Official Handle',
    },
    {
      name: 'WhatsApp',
      handle: PERSONAL_INFO.phone,
      noteEn: 'Direct Public Grievance & Citizen Connect',
      noteHi: 'सीधा नागरिक जनसंवाद एवं समस्या निवारण',
      icon: MessageCircle,
      color: 'bg-emerald-600 hover:bg-emerald-700',
      actionUrl: `https://wa.me/${PERSONAL_INFO.whatsapp}?text=Namaste%20Praveen%20ji,%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect.`,
      badge: 'Direct Connect',
    },
    {
      name: 'YouTube',
      handle: 'Praveen Kumar Mishra Official',
      noteEn: 'Speeches, Public Dialogues & Village Audits',
      noteHi: 'भाषण, जनसंवाद व ग्रामीण समस्याएं',
      icon: Youtube,
      color: 'bg-red-600 hover:bg-red-700',
      actionUrl: '#videos',
      badge: 'Official Speeches',
    },
  ];

  const handleShareWebsite = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Praveen Kumar Mishra - Social Worker & Public Life',
        text: 'Official Profile & Community Portfolio of Praveen Kumar Mishra, Kasganj, UP.',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="social-media" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
              <Share2 className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'hi' ? 'आधिकारिक डिजिटल मंच' : 'Official Social Channels'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
              {lang === 'hi' ? 'आधिकारिक सोशल मीडिया' : 'Official Social Media'}
            </h2>
            <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              {lang === 'hi'
                ? 'प्रवीण कुमार मिश्र से डिजिटल माध्यमों से जुड़ने के अधिकृत प्लेटफॉर्म।'
                : 'Connect and follow verified field updates, speeches, and community dialogue across official channels.'}
            </p>
          </div>

          <button
            onClick={handleShareWebsite}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors cursor-pointer self-start sm:self-auto shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'hi' ? 'लिंक कॉपी हुआ!' : 'Link Copied!'}</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-blue-900" />
                <span>{lang === 'hi' ? 'वेबसाइट साझा करें' : 'Share Portfolio'}</span>
              </>
            )}
          </button>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {platforms.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${p.color} text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">{p.name}</h3>
                  <p className="text-xs font-mono text-slate-500 mt-0.5 truncate">{p.handle}</p>

                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                    {lang === 'hi' ? p.noteHi : p.noteEn}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/70">
                  <a
                    href={p.actionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors"
                  >
                    <span>{lang === 'hi' ? 'प्लेटफॉर्म पर जाएं' : 'Open Channel'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on links */}
        <p className="mt-8 text-center text-xs text-slate-400">
          {lang === 'hi'
            ? 'नोट: सभी लिंक केवल प्रवीण कुमार मिश्र के आधिकारिक पतों से सम्बद्ध हैं।'
            : 'Note: Official links will be updated strictly in accordance with verified public handles provided by the owner.'}
        </p>
      </div>
    </section>
  );
};
