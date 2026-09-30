import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  X,
  Compass,
  CheckCircle2,
  Copy,
  Check,
  Loader2,
  ArrowRight,
  Briefcase,
} from 'lucide-react';
import { Language } from '../types';

interface AiCareerAdvisorModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

export const AiCareerAdvisorModal: React.FC<AiCareerAdvisorModalProps> = ({
  lang,
  isOpen,
  onClose,
}) => {
  const [qualification, setQualification] = useState('12th Pass (Science/Maths)');
  const [interests, setInterests] = useState('Solar energy, Electrical & Renewable Technology');
  const [goals, setGoals] = useState('Govt job / Self-employment in Kasganj district');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAdvice(null);

    try {
      const res = await fetch('/api/ai/career-guidance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          qualification,
          interests,
          goals,
          lang,
        }),
      });
      const data = await res.json();
      setAdvice(data.advice || 'मार्गदर्शन तैयार किया जा रहा है...');
    } catch {
      setAdvice(
        lang === 'hi'
          ? 'युवाओं के लिए तकनीकी ट्रेड, सोलर तकनीशियन और प्रतियोगी परीक्षाओं की तैयारी हेतु कासगंज कौशल विकास केंद्र पर संपर्क करें।'
          : 'Please connect with local skill development centers in Kasganj for vocational courses and trade certifications.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!advice) return;
    navigator.clipboard.writeText(advice);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base font-display text-white">
                  {lang === 'hi' ? 'एआई युवा करियर एवं हुनर सलाहकार' : 'AI Youth Career & Skill Advisor'}
                </h3>
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                  Gemini AI
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                {lang === 'hi'
                  ? 'कासगंज के छात्र-छात्राओं एवं युवाओं हेतु व्यावहारिक मार्गदर्शन'
                  : 'Personalized vocational and professional guidance for rural youth'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-slate-50/50">
          <form onSubmit={handleGenerate} className="space-y-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'आपकी वर्तमान योग्यता *' : 'Current Qualification *'}
                </label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                >
                  <option value="10th High School">10th (High School / मैट्रिक)</option>
                  <option value="12th Pass (Science/Maths)">12th (Science / Mathematics)</option>
                  <option value="12th Pass (Arts/Commerce)">12th (Arts / Commerce)</option>
                  <option value="B.Sc. / B.A. Graduate">Graduate (B.Sc. / B.A. / B.Com)</option>
                  <option value="ITI / Polytechnic Diploma">ITI / Polytechnic Diploma</option>
                  <option value="Post Graduate / Other">Post Graduate / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'रुचि / कार्यक्षेत्र *' : 'Key Field of Interest *'}
                </label>
                <input
                  type="text"
                  required
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  placeholder="e.g., Solar, IT, Government Jobs, Civil Engineering"
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {lang === 'hi' ? 'भविष्य का लक्ष्य / उद्देश्य' : 'Career Ambition / Goal'}
              </label>
              <input
                type="text"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="e.g., High-paying technical job, self-employment in UP, civil services"
                className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                  <span>{lang === 'hi' ? 'रोडमैप तैयार हो रहा है...' : 'Generating Career Roadmap...'}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'hi' ? 'एआई करियर रोडमैप प्राप्त करें' : 'Generate AI Career Roadmap'}</span>
                </>
              )}
            </button>
          </form>

          {/* Render Advice result */}
          {advice && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-md space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-amber-600" />
                  <span>{lang === 'hi' ? 'अनुशंसित करियर रोडमैप' : 'Recommended Career Roadmap'}</span>
                </span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Roadmap</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap max-h-72 overflow-y-auto pr-2">
                {advice}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
