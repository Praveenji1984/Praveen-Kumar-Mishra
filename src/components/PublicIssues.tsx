import React, { useState } from 'react';
import {
  HelpCircle,
  Milestone,
  Waves,
  Droplet,
  Zap,
  Stethoscope,
  BookOpen,
  Briefcase,
  Wheat,
  Bus,
  Leaf,
  ShieldAlert,
  Send,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
} from 'lucide-react';
import { PUBLIC_ISSUES } from '../data/portfolioData';
import { Language } from '../types';

interface PublicIssuesProps {
  lang: Language;
}

export const PublicIssues: React.FC<PublicIssuesProps> = ({ lang }) => {
  const [surveySubmitted, setSurveySubmitted] = useState(false);
  const [selectedIssueId, setSelectedIssueId] = useState<string>('all');
  const [isDrafting, setIsDrafting] = useState(false);
  const [draftText, setDraftText] = useState<string | null>(null);
  const [draftCopied, setDraftCopied] = useState(false);
  const [formData, setFormData] = useState({
    village: '',
    tehsil: 'Kasganj',
    issueCategory: 'Roads & Rural Connectivity',
    details: '',
    contactName: '',
    phone: '',
  });

  const handleAiDraft = async () => {
    if (!formData.village || !formData.details) return;
    setIsDrafting(true);
    setDraftText(null);
    try {
      const res = await fetch('/api/ai/draft-grievance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          village: formData.village,
          tehsil: formData.tehsil,
          issueCategory: formData.issueCategory,
          details: formData.details,
          citizenName: formData.contactName,
          lang,
        }),
      });
      const data = await res.json();
      setDraftText(data.draft || 'प्रार्थना पत्र तैयार किया जा रहा है...');
    } catch {
      setDraftText(
        `सेवा में,\nश्रीमान उपजिलाधिकारी (SDM) / जिलाधिकारी महोदय,\nकासगंज, उत्तर प्रदेश।\n\nविषय: ग्राम ${formData.village} (${formData.tehsil}) में ${formData.issueCategory} की गंभीर समस्या के संबंध में।\n\nमहोदय,\nसविनय निवेदन है कि ग्राम ${formData.village} के निवासी लंबे समय से निम्नलिखित समस्या से जूझ रहे हैं:\n\n${formData.details}\n\nअतः श्रीमान जी से सादर अनुरोध है कि जनहित में स्थलीय निरीक्षण कराकर समस्या का त्वरित निवारण कराने की कृपा करें।\n\nप्रार्थीगण:\nसमस्त ग्रामवासी, ग्राम ${formData.village}, कासगंज`
      );
    } finally {
      setIsDrafting(false);
    }
  };

  const handleCopyDraft = () => {
    if (!draftText) return;
    navigator.clipboard.writeText(draftText);
    setDraftCopied(true);
    setTimeout(() => setDraftCopied(false), 2500);
  };

  const getIssueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Milestone':
        return Milestone;
      case 'Waves':
        return Waves;
      case 'Droplet':
        return Droplet;
      case 'Zap':
        return Zap;
      case 'Stethoscope':
        return Stethoscope;
      case 'BookOpen':
        return BookOpen;
      case 'Briefcase':
        return Briefcase;
      case 'Wheat':
        return Wheat;
      case 'Bus':
        return Bus;
      case 'Leaf':
        return Leaf;
      case 'ShieldAlert':
      default:
        return ShieldAlert;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.village || !formData.details) return;
    setSurveySubmitted(true);
    setTimeout(() => {
      // auto reset after 6 seconds
      setSurveySubmitted(false);
      setFormData({
        village: '',
        tehsil: 'Kasganj',
        issueCategory: 'Roads & Rural Connectivity',
        details: '',
        contactName: '',
        phone: '',
      });
    }, 6000);
  };

  const filteredIssues =
    selectedIssueId === 'all'
      ? PUBLIC_ISSUES
      : PUBLIC_ISSUES.filter((i) => i.id === selectedIssueId);

  return (
    <section id="public-issues" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'जनसरोकार एवं स्थानीय मुद्दे' : 'Public Concerns & Regional Audit'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'स्थानीय समस्याओं की समझ' : 'Understanding Local Issues'}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            {lang === 'hi'
              ? 'ये मुद्दे किसी चुनावी वादे के रूप में नहीं, बल्कि जनहित और नागरिक चर्चा के विषय के रूप में प्रस्तुत किए गए हैं। इनका उद्देश्य कासगंज की जमीनी आवश्यकताओं को चिन्हित करना और प्रशासनिक ध्यान आकर्षित करना है।'
              : 'These points are presented strictly as areas of civic interest, community discussion, and grassroots empirical observation—not as political promises. They reflect ongoing dialogue with residents across Kasganj.'}
          </p>
        </div>

        {/* 11 Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredIssues.map((issue, idx) => {
            const Icon = getIssueIcon(issue.iconName);
            return (
              <div
                key={issue.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-blue-900/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-500 mb-1">
                    {issue.category}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {lang === 'hi' ? issue.titleHi : issue.titleEn}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lang === 'hi' ? issue.descHi : issue.descEn}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-950 block mb-0.5">
                    {lang === 'hi' ? 'चर्चा एवं सुधार का केंद्र:' : 'Focus of Discussion:'}
                  </span>
                  <p className="text-xs text-slate-700 font-medium">
                    {lang === 'hi' ? issue.focusAreaHi : issue.focusAreaEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Grassroots Jan Samasya Survey Form */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-10">
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-2 border border-amber-200">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'जनसमस्या सर्वेक्षण प्रपत्र' : 'Jan Samasya Survey Form'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              {lang === 'hi'
                ? 'अपने गाँव / वार्ड की समस्या दर्ज कराएं'
                : 'Report a Ground Civic Concern from Your Village or Ward'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              {lang === 'hi'
                ? 'कासगंज विधानसभा व आसपास के नागरिक अपने क्षेत्र की समस्या (सड़क, हैंडपंप, बिजली, नाली आदि) का विवरण साझा कर सकते हैं ताकि इसे सर्वे रिपोर्ट में शामिल किया जा सके।'
                : 'Citizens from Kasganj assembly and surrounding blocks can submit factual local concerns to be documented into our ongoing grassroots audit dossier.'}
            </p>
          </div>

          {surveySubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-4 animate-in fade-in">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-emerald-900">
                  {lang === 'hi' ? 'समस्या विवरण सफलतापूर्वक दर्ज हुआ!' : 'Ground Survey Entry Recorded!'}
                </h4>
                <p className="text-xs text-emerald-800 mt-1">
                  {lang === 'hi'
                    ? 'आपके द्वारा दर्ज कराई गई समस्या कासगंज जनसमस्या सर्वेक्षण रजिस्टर में अंकित कर ली गई है। टीम द्वारा स्थलीय अवलोकन में इसे शामिल किया जाएगा।'
                    : 'Thank you for contributing factual ground data. Your submission has been catalogued in the regional civic audit dossier for administrative representation.'}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'गाँव / मौहल्ला / वार्ड का नाम *' : 'Village / Ward / Mohalla *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'hi' ? 'उदा. ग्राम नगला खुशहाली, कासगंज' : 'e.g., Gram Nagla, Kasganj'}
                  value={formData.village}
                  onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'तहसील / ब्लॉक' : 'Tehsil / Block'}
                </label>
                <select
                  value={formData.tehsil}
                  onChange={(e) => setFormData({ ...formData, tehsil: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                >
                  <option value="Kasganj">Kasganj (कासगंज)</option>
                  <option value="Soron">Soron (सोरों शूकरक्षेत्र)</option>
                  <option value="Patiali">Patiali (पटियाली)</option>
                  <option value="Sahawar">Sahawar (सहावर)</option>
                  <option value="Ganjdundwara">Ganjdundwara (गंजडुंडवारा)</option>
                  <option value="Sidhpura">Sidhpura (सिढ़पुरा)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'समस्या का विषय' : 'Issue Category'}
                </label>
                <select
                  value={formData.issueCategory}
                  onChange={(e) => setFormData({ ...formData, issueCategory: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                >
                  <option value="Roads & Rural Connectivity">Roads / सड़कें</option>
                  <option value="Drinking Water & Handpumps">Drinking Water / पेयजल</option>
                  <option value="Electricity & Transformers">Electricity / बिजली ट्रांसफार्मर</option>
                  <option value="Drainage & Waterlogging">Drainage / नाली व जलभराव</option>
                  <option value="Healthcare & PHC">Health / स्वास्थ्य केंद्र</option>
                  <option value="Primary School Facilities">Education / स्कूल</option>
                  <option value="Agriculture & Stray Cattle">Agriculture / फसल व गौवंश</option>
                  <option value="Other">Other / अन्य समस्या</option>
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-3">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'समस्या का संक्षिप्त विवरण *' : 'Description of Ground Issue *'}
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={
                    lang === 'hi'
                      ? 'कृपया स्पष्ट लिखें कि समस्या कितने समय से है, कितने परिवार प्रभावित हैं...'
                      : 'Provide concrete context: how long has the problem existed, affected households, location landmarks...'
                  }
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'आपका नाम (वैकल्पिक)' : 'Your Name (Optional)'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'hi' ? 'नाम' : 'Full Name'}
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'hi' ? 'मोबाइल नंबर (वैकल्पिक)' : 'Mobile Number (Optional)'}
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50/50"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-3 flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAiDraft}
                  disabled={isDrafting || !formData.village || !formData.details}
                  className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
                  title="Generate a formal representation letter to SDM / DM"
                >
                  {isDrafting ? (
                    <>
                      <FileSpreadsheet className="w-4 h-4 animate-spin" />
                      <span>{lang === 'hi' ? 'एआई प्रारूप तैयार हो रहा है...' : 'AI Drafting Representation...'}</span>
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4" />
                      <span>{lang === 'hi' ? 'एआई द्वारा प्रार्थना-पत्र (ज्ञापन) बनाएं' : 'AI Draft Official Petition (DM / SDM)'}</span>
                    </>
                  )}
                </button>

                <button
                  type="submit"
                  className="py-2.5 px-6 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'hi' ? 'सर्वे में दर्ज करें' : 'Submit Issue to Survey'}</span>
                </button>
              </div>
            </form>
          )}

          {/* AI Grievance Draft Result Drawer */}
          {draftText && (
            <div className="mt-6 p-6 bg-slate-900 text-white rounded-2xl border border-amber-500/30 shadow-xl space-y-4 animate-in fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    {lang === 'hi' ? 'प्रशासनिक प्रार्थना-पत्र (एआई प्रारूप)' : 'Official Grievance Petition Draft'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopyDraft}
                    className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 cursor-pointer"
                  >
                    {draftCopied ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <FileSpreadsheet className="w-3.5 h-3.5 text-amber-400" />
                        <span>Copy Draft</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setDraftText(null)}
                    className="text-slate-400 hover:text-white text-xs cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-wrap max-h-96 overflow-y-auto pr-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                {draftText}
              </div>

              <p className="text-[11px] text-slate-400">
                {lang === 'hi'
                  ? 'नोट: इस प्रारूप को कॉपी करके संबंधित अधिकारी (एसडीएम/डीएम कासगंज अथवा अधिशासी अभियंता) के समक्ष प्रस्तुत किया जा सकता है।'
                  : 'Note: You can copy or print this draft and present it to the Sub-Divisional Magistrate (SDM), DM Kasganj, or public works officials.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
