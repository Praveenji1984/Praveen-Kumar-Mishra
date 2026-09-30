import React from 'react';
import { User, CheckCircle2, Award, BookOpen, Compass, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';
import { PortraitArtwork } from './PortraitArtwork';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
            <User className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'व्यक्तित्व एवं परिचय' : 'Personal Profile & Background'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'प्रवीण कुमार मिश्र का परिचय' : 'About Praveen Kumar Mishra'}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Visual Portrait & Key Badges */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
              <PortraitArtwork
                type="office"
                className="w-full h-80 sm:h-96"
                alt="Praveen Kumar Mishra in Office"
              />
              <div className="p-4 bg-slate-900 text-white border-t border-slate-800">
                <p className="text-xs uppercase text-amber-400 font-semibold tracking-wider">
                  {lang === 'hi' ? 'जनसरोकार एवं सेवा' : 'Public Dedication'}
                </p>
                <p className="text-sm font-medium text-slate-200 mt-1">
                  {lang === 'hi'
                    ? 'गाँव-गाँव जनसंवाद, समस्याओं की जमीनी पहचान और विकासोन्मुख समाधान।'
                    : 'Listening at the grassroots, identifying civic challenges, and advocating data-backed solutions.'}
                </p>
              </div>
            </div>

            {/* Quick credentials card */}
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500">
                {lang === 'hi' ? 'महत्वपूर्ण विवरण एवं पहचान' : 'Core Identification & Constituency'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block">{lang === 'hi' ? 'विधानसभा क्षेत्र' : 'Assembly Constituency'}</span>
                  <span className="font-bold text-amber-700">100 - Kasganj (कासगंज 100)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">{lang === 'hi' ? 'शैक्षणिक योग्यता' : 'Highest Degree'}</span>
                  <span className="font-bold text-slate-800">M.Sc. Mathematics (2011)</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-slate-400 block">{lang === 'hi' ? 'स्थायी कार्यालय' : 'Permanent Office'}</span>
                  <span className="font-semibold text-slate-800">{PERSONAL_INFO.address}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">{lang === 'hi' ? 'उद्यम / व्यवसाय' : 'Enterprise'}</span>
                  <span className="font-semibold text-slate-800">Raghav Foundation Projects</span>
                </div>
                <div>
                  <span className="text-slate-400 block">{lang === 'hi' ? 'मिशन' : 'Public Mission'}</span>
                  <span className="font-semibold text-blue-900">MLA 2027 Ground Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div className="p-4 sm:p-5 bg-blue-50/60 rounded-xl border-l-4 border-blue-900 text-slate-800 font-medium">
              {lang === 'hi' ? (
                <p>
                  "प्रवीण कुमार मिश्र कासगंज, उत्तर प्रदेश से जुड़े एक समर्पित सामाजिक कार्यकर्ता और जनजीवन सहभागी हैं। वह सामुदायिक संपर्क, जनसंवाद, ग्रामीण विकास, शिक्षा जागरूकता, रोजगार एवं कौशल-विकास पहल, पर्यावरण जागरूकता और स्थानीय नागरिक समस्याओं के समाधान में निरंतर सक्रिय रहते हैं।"
                </p>
              ) : (
                <p>
                  "Praveen Kumar Mishra is a social worker and public-life participant associated with Kasganj, Uttar Pradesh. He is involved in community outreach, public communication, rural development, education awareness, employment and skill-development initiatives, environmental awareness and local civic issues."
                </p>
              )}
            </div>

            <p>
              {lang === 'hi' ? (
                <>
                  कासगंज जिले की माटी से गहरा जुड़ाव रखने वाले प्रवीण कुमार मिश्र का दृष्टिकोण हमेशा समस्याओं को निकट से देखने और व्यावहारिक समाधान निकालने पर आधारित रहा है। गणित में परास्नातक (M.Sc.) की डिग्री प्राप्त करने के बाद, उन्होंने अपनी विश्लेषणात्मक दृष्टि का उपयोग केवल व्यवसाय तक सीमित नहीं रखा, बल्कि ग्रामीण समाज में शिक्षा की स्थिति, जलभराव, पेयजल की गुणवत्ता और किसानों की वास्तविक समस्याओं को समझने में लगाया।
                </>
              ) : (
                <>
                  Rooted deeply in Kasganj district, Praveen Kumar Mishra approaches public service with empirical rigor and deep empathy. Holding a Master of Science (M.Sc.) in Mathematics, he leverages statistical and analytical acumen to document community needs—whether auditing groundwater tables, tracking rural power transformer breakdowns, or addressing the lack of female sanitation in village primary schools.
                </>
              )}
            </p>

            {/* Political note factually */}
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-950">
                  <p className="font-bold">
                    {lang === 'hi' ? 'राजनीतिक एवं सार्वजनिक दायित्व:' : 'Public & Political Profile:'}
                  </p>
                  <p className="mt-0.5">
                    {lang === 'hi'
                      ? 'प्रवीण कुमार मिश्र राष्ट्रीय अधिकार मोर्चा पार्टी, उत्तर प्रदेश में प्रदेश कार्यकारिणी सदस्य के रूप में दायित्व का निर्वहन करते हैं। वे 100 - कासगंज विधानसभा क्षेत्र से 2027 के चुनाव हेतु सतत जमीनी जनसेवा और जनसमस्या निवारण में समर्पित हैं।'
                      : 'Praveen Kumar Mishra serves as a State Executive Member of Rashtriya Adhikar Morcha Party, Uttar Pradesh, and is actively preparing to serve the 100 - Kasganj Assembly Constituency in 2027 through grassroots grievance redressal.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Qualified Leader for Kasganj (100) Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {lang === 'hi'
                    ? 'कासगंज (100) के लिए एक योग्य एवं सुलभ प्रतिनिधि'
                    : 'A Qualified & Accessible Leader for Kasganj 100'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {lang === 'hi'
                  ? 'गणित में उच्च शिक्षित (M.Sc.) होने के कारण प्रवीण कुमार मिश्र समस्याओं को सतही नारों से नहीं, बल्कि तथ्यों, आंकड़ों और प्रशासनिक प्राथमिकताओं के साथ हल करते हैं। वे निरंतर कासगंज के गाँवों का दौरा कर ग्रामीणों की समस्याओं को सुनते हैं और अधिकारियों से उनके समाधान के लिए तत्पर रहते हैं।'
                  : 'Equipped with an M.Sc. in Mathematics, Praveen Kumar Mishra solves local challenges through analytical data and persistence rather than empty political slogans. He routinely conducts village visits across Kasganj, listening directly to rural residents and advocating with district authorities for immediate relief.'}
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <Compass className="w-6 h-6 text-blue-900 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">
                  {lang === 'hi' ? 'जमीनी संवाद' : 'Grassroots Dialogue'}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'hi'
                    ? 'गाँव-गाँव में चौपालों के माध्यम से सीधे लोगों के सुख-दुख में सहभागिता।'
                    : 'Regular chaupals and direct engagement across all sections of society.'}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <BookOpen className="w-6 h-6 text-amber-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">
                  {lang === 'hi' ? 'शिक्षा व कौशल' : 'Education & Skills'}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'hi'
                    ? 'बच्चों के लिए शिक्षण सामग्री और युवाओं को आधुनिक वोकेशनल मार्गदर्शन।'
                    : 'Mentoring youth in solar technology, technical trades, and literacy.'}
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <Award className="w-6 h-6 text-emerald-700 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm">
                  {lang === 'hi' ? 'ईमानदार सरोकार' : 'Constructive Service'}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'hi'
                    ? 'बिना किसी झूठे वादे या प्रचार के निरंतर जनहितैषी कार्यों में सक्रियता।'
                    : 'Fact-based representation and continuous welfare without hyperbole.'}
                </p>
              </div>
            </div>

            {/* Social Work Quote */}
            <blockquote className="border-l-3 border-amber-500 pl-4 py-1 italic text-slate-600 text-xs sm:text-sm">
              {lang === 'hi'
                ? '“गलत के खिलाफ आवाज़ उठाना हर शिक्षित नागरिक की जिम्मेदारी है। समाज किसी एक धर्म, जाति या वर्ग से नहीं, बल्कि सभी के सहयोग से बनता है।”'
                : '“Raising voice against injustice is the duty of every educated citizen. Society is built not by isolated factions, but through the united cooperation of all people.”'}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
