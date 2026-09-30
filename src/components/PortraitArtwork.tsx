import React from 'react';

interface PortraitProps {
  type: 'hero' | 'rally' | 'office' | 'elder' | 'team' | 'banner';
  className?: string;
  customSrc?: string;
  alt?: string;
}

export const PortraitArtwork: React.FC<PortraitProps> = ({
  type,
  className = '',
  customSrc,
  alt = 'Praveen Kumar Mishra',
}) => {
  if (customSrc) {
    return (
      <img
        src={customSrc}
        alt={alt}
        className={`object-cover ${className}`}
        referrerPolicy="no-referrer"
      />
    );
  }

  // High-fidelity styled visual artwork reflecting Praveen Kumar Mishra's authentic public presence
  if (type === 'hero') {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center ${className}`}>
        {/* Ambient background lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(217,119,6,0.18),transparent_70%)]" />
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600/15 rounded-full blur-3xl" />

        {/* Subtle decorative grid/geometry */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#f59e0b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        {/* Dignified portrait graphic */}
        <div className="relative z-10 flex flex-col items-center justify-end w-full h-full pt-6 pb-2 px-4">
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-amber-200 to-blue-400 shadow-2xl flex items-center justify-center overflow-hidden mb-3">
            <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden relative flex items-center justify-center">
              {/* Silhouette portrait representation with styled Nehru vest / suit */}
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="98" fill="#0f172a" />
                {/* Background warm rim */}
                <ellipse cx="100" cy="80" rx="60" ry="70" fill="#1e293b" />
                {/* Shoulders with blazer */}
                <path d="M30 195 C 40 145, 75 130, 100 130 C 125 130, 160 145, 170 195 Z" fill="#1e3a8a" />
                {/* Lapel collar & tie */}
                <path d="M85 130 L100 170 L115 130 Z" fill="#f8fafc" />
                <path d="M96 135 L104 135 L102 185 L98 185 Z" fill="#991b1b" />
                {/* Neck */}
                <rect x="88" y="98" width="24" height="34" rx="4" fill="#d97706" opacity="0.8" />
                {/* Head */}
                <ellipse cx="100" cy="85" rx="34" ry="40" fill="#b45309" opacity="0.9" />
                <ellipse cx="100" cy="82" rx="32" ry="38" fill="#d97706" />
                {/* Classic wavy hairstyle */}
                <path d="M62 82 C 60 50, 75 42, 100 42 C 125 42, 140 50, 138 82 C 132 60, 120 54, 100 54 C 80 54, 68 60, 62 82 Z" fill="#0f172a" />
                <path d="M64 75 C 68 55, 85 45, 100 45 C 115 45, 132 55, 136 75 C 130 65, 116 58, 100 58 C 84 58, 70 65, 64 75 Z" fill="#1e293b" />
                {/* Facial features - gentle smile & eyes */}
                <circle cx="88" cy="80" r="3" fill="#0f172a" />
                <circle cx="112" cy="80" r="3" fill="#0f172a" />
                <path d="M82 72 Q 88 68 94 72" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M106 72 Q 112 68 118 72" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M100 80 L98 90 L102 90 Z" fill="#92400e" />
                {/* Warm smile */}
                <path d="M89 97 Q 100 106 111 97" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
          </div>

          {/* Nameplate ribbon */}
          <div className="text-center px-4 py-2 bg-slate-900/90 backdrop-blur border border-amber-500/30 rounded-xl shadow-lg max-w-sm">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Official Portrait</p>
            <h4 className="text-white font-bold text-base md:text-lg">Praveen Kumar Mishra</h4>
            <p className="text-slate-300 text-xs mt-0.5">Kasganj, Uttar Pradesh</p>
          </div>
        </div>

        {/* Bottom subtle border highlight */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
      </div>
    );
  }

  if (type === 'rally') {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-amber-900/30 via-slate-900 to-blue-950 flex flex-col items-center justify-center p-6 ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.2),transparent_70%)]" />
        <div className="relative z-10 text-center max-w-xs">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </div>
          <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase">Public Address</span>
          <h4 className="text-white font-bold text-sm mt-1">Direct Jan Samwad at Kasganj</h4>
          <p className="text-slate-300 text-xs mt-1">Podium speech addressing thousands of rural citizens on community rights and accountability.</p>
        </div>
      </div>
    );
  }

  if (type === 'elder') {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-amber-950/40 flex flex-col items-center justify-center p-6 ${className}`}>
        <div className="relative z-10 text-center max-w-xs">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase">Grassroots Empathy</span>
          <h4 className="text-white font-bold text-sm mt-1">Village Elder Dialogue</h4>
          <p className="text-slate-300 text-xs mt-1">Holding hands with rural mothers and village elders, listening to real hardships before offering solutions.</p>
        </div>
      </div>
    );
  }

  if (type === 'office') {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-6 ${className}`}>
        <div className="relative z-10 text-center max-w-xs">
          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-slate-700/50 border border-slate-600 flex items-center justify-center text-amber-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase">Executive Study</span>
          <h4 className="text-white font-bold text-sm mt-1">Professional & Administrative Office</h4>
          <p className="text-slate-300 text-xs mt-1">Conducting community research, infrastructure project planning, and citizen feedback analysis.</p>
        </div>
      </div>
    );
  }

  // Default team / survey view
  return (
    <div className={`relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center p-6 ${className}`}>
      <div className="relative z-10 text-center max-w-xs">
        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase">Data & Grievance Review</span>
        <h4 className="text-white font-bold text-sm mt-1">Digital Team Mentorship</h4>
        <p className="text-slate-300 text-xs mt-1">Working with educated youth volunteers to audit village water and electricity complaints.</p>
      </div>
    </div>
  );
};
