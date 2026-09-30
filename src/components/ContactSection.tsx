import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  Bell,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'Public Issue / Local Problem',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        email: '',
        phone: '',
        purpose: 'Public Issue / Local Problem',
        message: '',
      });
    }, 6000);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 tracking-wider uppercase mb-2">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'hi' ? 'सीधा संपर्क एवं जनसंवाद' : 'Direct Communication & Dialogue'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            {lang === 'hi' ? 'प्रवीण कुमार मिश्र से जुड़ें' : 'Connect With Praveen Kumar Mishra'}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-3 rounded-full" />
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            {lang === 'hi'
              ? 'कासगंज क्षेत्र की जनसमस्या, डॉ. आंबेडकर ट्रस्ट गतिविधि, सामाजिक सहयोग अथवा सामान्य विचार-विमर्श हेतु संदेश भेजें।'
              : 'Submit local concerns, collaborate on Dr. Ambedkar Gramin Vikas Trust activities, or schedule public consultations in Kasganj.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Info & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Details */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
                {lang === 'hi' ? 'कार्यालय एवं संपर्क विवरण' : 'Official Office & Contact Details'}
              </h3>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">
                    {lang === 'hi' ? 'स्थान / कार्यक्षेत्र' : 'Office Location'}
                  </span>
                  <p className="text-slate-500 text-xs mt-0.5">{PERSONAL_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-blue-900" />
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">
                    {lang === 'hi' ? 'ईमेल' : 'Email Address'}
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-blue-900 hover:underline text-xs mt-0.5 block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">
                    {lang === 'hi' ? 'नागरिक हेल्पलाइन / संपर्क' : 'Citizen Outreach Helpline'}
                  </span>
                  <p className="text-slate-500 text-xs mt-0.5">{PERSONAL_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-slate-900">
                    {lang === 'hi' ? 'जनसुनवाई समय' : 'Public Listening Hours'}
                  </span>
                  <p className="text-slate-500 text-xs mt-0.5">
                    {lang === 'hi'
                      ? 'सोमवार से शनिवार: 09:00 AM – 01:00 PM (कार्यालय / जनसंपर्क चौपाल)'
                      : 'Monday to Saturday: 09:00 AM – 01:00 PM (Camp Office & Chaupal)'}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 bg-gradient-to-br from-emerald-800 to-teal-950 rounded-2xl text-white shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm sm:text-base">
                  {lang === 'hi' ? 'व्हाट्सएप से तुरंत संदेश भेजें' : 'Instant WhatsApp Connect'}
                </h4>
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed">
                {lang === 'hi'
                  ? 'कासगंज की किसी भी आपात जनसमस्या, जलभराव या हैंडपंप खराबी की सूचना सीधे व्हाट्सएप पर भेजें।'
                  : 'Report urgent village issues or civic breakdowns directly via one-click WhatsApp messaging.'}
              </p>
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=Namaste%20Praveen%20ji,%20I%20visited%20your%20website%20and%20wish%20to%20connect.`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-emerald-950 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'hi' ? 'व्हाट्सएप चैट शुरू करें' : 'Open WhatsApp Chat'}</span>
              </a>
            </div>

            {/* Google Map of Ganjdundwara & Kasganj */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-3.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    {lang === 'hi'
                      ? 'कार्यालय: गंजडुंडवारा (कासगंज)'
                      : 'Office: Ganjdundwara (Kasganj)'}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Oil Mill Colony, Ganjdundwara (Kasganj) 207242
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Ganjdundwara+Kasganj+Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-900 hover:underline inline-flex items-center gap-1"
                >
                  <span>{lang === 'hi' ? 'गूगल मैप' : 'Open Map'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="h-52 w-full bg-slate-200">
                <iframe
                  title="Ganjdundwara Kasganj Office Location"
                  src="https://maps.google.com/maps?q=Ganjdundwara%20Kasganj%20Uttar%20Pradesh%20207242&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Newsletter */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-bold font-display text-slate-900 mb-1">
                {lang === 'hi' ? 'ऑनलाइन संदेश प्रपत्र' : 'Direct Message Form'}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                {lang === 'hi'
                  ? 'कृपया अपना संदेश और संपर्क विवरण भरें। हमारी टीम शीघ्र उत्तर देगी।'
                  : 'Please submit your query or ground concern. All messages are reviewed for community response.'}
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-emerald-900">
                      {lang === 'hi' ? 'संदेश सफलतापूर्वक प्राप्त हुआ!' : 'Message Received Successfully!'}
                    </h4>
                    <p className="text-xs text-emerald-800 mt-1">
                      {lang === 'hi'
                        ? 'प्रवीण कुमार मिश्र एवं कार्यालय टीम को आपका संदेश मिल गया है। आपसे जल्द संपर्क किया जाएगा।'
                        : 'Thank you for reaching out. Praveen Kumar Mishra and the team will review and connect with you shortly.'}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {lang === 'hi' ? 'आपका पूरा नाम *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'hi' ? 'उदा. राकेश कुमार' : 'e.g., Rakesh Kumar'}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {lang === 'hi' ? 'मोबाइल नंबर *' : 'Phone Number *'}
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {lang === 'hi' ? 'ईमेल पता (वैकल्पिक)' : 'Email Address (Optional)'}
                      </label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {lang === 'hi' ? 'संपर्क का उद्देश्य *' : 'Purpose of Contact *'}
                      </label>
                      <select
                        value={form.purpose}
                        onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                        className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                      >
                        <option value="Village Chaupal / Ground Grievance Meeting">
                          {lang === 'hi'
                            ? 'गाँव चौपाल / जनसमस्या निवारण बैठक (कासगंज 100)'
                            : 'Village Chaupal / Ground Grievance Meeting (Kasganj 100)'}
                        </option>
                        <option value="Public Issue / Local Problem">
                          {lang === 'hi' ? 'जनसमस्या / क्षेत्रीय मुद्दा' : 'Public Issue / Local Problem'}
                        </option>
                        <option value="Kasganj 100 MLA 2027 Campaign Support">
                          {lang === 'hi'
                            ? 'कासगंज (100) विस 2027 चुनाव सहयोग व सुझाव'
                            : 'Kasganj 100 MLA 2027 Campaign Support'}
                        </option>
                        <option value="Dr. Ambedkar Trust Activity">
                          {lang === 'hi' ? 'डॉ. आंबेडकर ट्रस्ट गतिविधि' : 'Dr. Ambedkar Trust Activity'}
                        </option>
                        <option value="Social Work Collaboration">
                          {lang === 'hi' ? 'समाज सेवा सहभागिता' : 'Social Work Collaboration'}
                        </option>
                        <option value="Youth & Career Mentoring">
                          {lang === 'hi' ? 'युवा एवं करियर मार्गदर्शन' : 'Youth & Career Mentoring'}
                        </option>
                        <option value="Media & Press Query">
                          {lang === 'hi' ? 'प्रेस एवं मीडिया वार्ता' : 'Media & Press Query'}
                        </option>
                        <option value="General Inquiry">
                          {lang === 'hi' ? 'सामान्य संवाद' : 'General Inquiry'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'hi' ? 'आपका संदेश / समस्या का विवरण *' : 'Your Message / Concern *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={
                        lang === 'hi'
                          ? 'कृपया अपना संदेश या समस्या का स्पष्ट विवरण लिखें...'
                          : 'Write your message or detailed query here...'
                      }
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50/50"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-slate-400">
                      {lang === 'hi'
                        ? 'आपकी जानकारी केवल जनसंवाद हेतु सुरक्षित रखी जाएगी।'
                        : 'Your contact information is strictly handled for civic communication.'}
                    </p>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                      <span>{lang === 'hi' ? 'संदेश भेजें' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Newsletter Option */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                <Bell className="w-4 h-4 text-amber-600" />
                <span>{lang === 'hi' ? 'सामुदायिक बुलेटिन सदस्यता' : 'Community Bulletin Subscription'}</span>
              </div>
              <p className="text-xs text-slate-500 mb-3">
                {lang === 'hi'
                  ? 'कासगंज सामाजिक विकास रिपोर्ट, स्वास्थ्य शिविर और ट्रस्ट की नई पहलों की मासिक जानकारी प्राप्त करें।'
                  : 'Receive periodic verified updates on community health camps, student literacy drives, and civic surveys.'}
              </p>

              {newsletterSubscribed ? (
                <div className="p-3 bg-emerald-50 text-emerald-800 text-xs font-medium rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? 'धन्यवाद! आपकी ईमेल बुलेटिन सूची में जुड़ गई है।'
                      : 'Thank you! You are now subscribed to the verified civic bulletin.'}
                  </span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 text-xs px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50/50"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {lang === 'hi' ? 'जुड़ें' : 'Subscribe'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
