import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import {
  Heart,
  Copy,
  Check,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  QrCode,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Language } from '../types';

interface DonationSectionProps {
  lang: Language;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(101);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [activeUpiId, setActiveUpiId] = useState<string>(
    PERSONAL_INFO.donation.primaryUpiId
  );

  const payeeName = PERSONAL_INFO.donation.payeeName;
  const currentAmount = selectedAmount || (customAmount ? Number(customAmount) : null);

  // Construct standard UPI payment string
  const upiUrl = `upi://pay?pa=${activeUpiId}&pn=${encodeURIComponent(
    payeeName
  )}&tn=${encodeURIComponent(
    'Grassroots Public Life and Campaign Support'
  )}&cu=INR${currentAmount ? `&am=${currentAmount}` : ''}`;

  // Generate dynamic QR code whenever amount or UPI ID changes
  useEffect(() => {
    QRCode.toDataURL(upiUrl, {
      width: 320,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'M',
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('QR code generation error:', err));
  }, [upiUrl]);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(activeUpiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const presetAmounts = [
    { amount: 51, labelEn: 'Token of Trust', labelHi: 'शुभ सहयोग' },
    { amount: 101, labelEn: 'Youth Support', labelHi: 'जनसहयोग' },
    { amount: 251, labelEn: 'Community Voice', labelHi: 'युवा संकल्प' },
    { amount: 501, labelEn: 'Field Outreach', labelHi: 'विकास सहयोग' },
    { amount: 1000, labelEn: 'Patron Support', labelHi: 'विशिष्ट योगदान' },
  ];

  return (
    <section id="contribute" className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
            <Heart className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span>{lang === 'hi' ? 'जनसहयोग एवं स्वच्छ राजनीति' : 'Grassroots Citizen Campaign Fund'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            {lang === 'hi' ? PERSONAL_INFO.donation.campaignTitleHi : PERSONAL_INFO.donation.campaignTitleEn}
          </h2>
          <div className="w-16 h-1 bg-amber-400 mt-3 rounded-full" />
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'hi' ? PERSONAL_INFO.donation.campaignDescHi : PERSONAL_INFO.donation.campaignDescEn}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Authentic PhonePe QR Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* The Black PhonePe Card Container matching owner's authentic photo */}
            <div className="w-full max-w-sm bg-black rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-2xl relative flex flex-col items-center text-center">
              {/* PhonePe Header Branding */}
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-full bg-[#5f259f] flex items-center justify-center text-white font-bold text-base shadow-sm">
                  <span className="font-hindi text-lg">पे</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">PhonePe</span>
              </div>

              {/* Tagline */}
              <p className="text-[11px] tracking-widest font-extrabold text-[#9d6cdb] uppercase mt-1">
                ACCEPTED HERE
              </p>
              <p className="text-xs text-slate-300 font-medium mt-1 mb-4">
                Scan & Pay Using PhonePe App
              </p>

              {/* QR Code Container with Center Logo */}
              <div className="relative p-3 bg-white rounded-2xl shadow-inner my-1 w-64 h-64 flex items-center justify-center">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="UPI Payment QR Code"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-slate-400 animate-pulse" />
                  </div>
                )}

                {/* Center PhonePe Icon Badge matching photo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-11 h-11 rounded-full bg-black p-0.5 shadow-md flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-black border-2 border-white flex items-center justify-center">
                      <span className="font-hindi text-white font-bold text-base leading-none">
                        पे
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Payee Name */}
              <div className="mt-4 pt-2 w-full text-center">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-mono">
                  {payeeName}
                </p>
                <div className="mt-1 flex flex-col items-center gap-1.5">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                      {activeUpiId}
                    </span>
                    <button
                      onClick={handleCopyUpi}
                      className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                      title="Copy UPI ID"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Toggle between phone UPI and email UPI */}
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-1">
                    <span>UPI ID:</span>
                    <button
                      type="button"
                      onClick={() => setActiveUpiId('8279735137@ybl')}
                      className={`px-1.5 py-0.5 rounded cursor-pointer ${
                        activeUpiId === '8279735137@ybl'
                          ? 'bg-purple-900 text-purple-200 font-bold border border-purple-600'
                          : 'hover:text-slate-200'
                      }`}
                    >
                      8279735137@ybl
                    </button>
                    <span>·</span>
                    <button
                      type="button"
                      onClick={() => setActiveUpiId('mishrapraveenb@ybl')}
                      className={`px-1.5 py-0.5 rounded cursor-pointer ${
                        activeUpiId === 'mishrapraveenb@ybl'
                          ? 'bg-purple-900 text-purple-200 font-bold border border-purple-600'
                          : 'hover:text-slate-200'
                      }`}
                    >
                      mishrapraveenb@ybl
                    </button>
                  </div>
                </div>
              </div>

              {/* All UPI Apps Support Icons */}
              <div className="mt-4 pt-3 border-t border-slate-900 w-full flex items-center justify-center gap-3 text-[11px] text-slate-400">
                <span>PhonePe</span>
                <span>·</span>
                <span>GPay</span>
                <span>·</span>
                <span>Paytm</span>
                <span>·</span>
                <span>BHIM UPI</span>
              </div>

              {/* Footer text from the official photo */}
              <p className="mt-3 text-[9px] text-slate-400 leading-tight">
                © 2026, All rights reserved, PhonePe Ltd (Formerly known as 'PhonePe Private Ltd')
              </p>
            </div>
          </div>

          {/* Right Column: Donation Amount Selector & Generation Purpose */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-lg">
              <h3 className="text-xl font-bold font-display text-white mb-1">
                {lang === 'hi' ? 'सहयोग राशि चुनें (ऐच्छिक योगदान)' : 'Select Contribution Amount'}
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                {lang === 'hi'
                  ? 'यह कोई बाध्यकारी शुल्क नहीं है, बल्कि युवा पीढ़ी एवं नागरिकों का अपनी स्वेच्छा से दिया जाने वाला छोटा सहयोग है।'
                  : 'Small citizen donations keep public service honest and independent. Choose a comfortable amount to pre-fill the QR code.'}
              </p>

              {/* Preset Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {presetAmounts.map((p) => {
                  const isSelected = selectedAmount === p.amount;
                  return (
                    <button
                      key={p.amount}
                      onClick={() => {
                        setSelectedAmount(p.amount);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md font-bold'
                          : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      <div className="text-lg font-mono font-extrabold">₹{p.amount}</div>
                      <div className={`text-[11px] ${isSelected ? 'text-slate-900' : 'text-slate-400'}`}>
                        {lang === 'hi' ? p.labelHi : p.labelEn}
                      </div>
                    </button>
                  );
                })}

                {/* Custom Amount Option */}
                <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-700 flex flex-col justify-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                    {lang === 'hi' ? 'अन्य राशि' : 'Custom'}
                  </span>
                  <div className="flex items-center">
                    <span className="text-sm font-mono text-slate-400 mr-1">₹</span>
                    <input
                      type="number"
                      placeholder="Amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full text-xs font-mono font-bold bg-transparent text-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons: Pay via UPI on Mobile & Copy UPI */}
              <div className="pt-4 border-t border-slate-700 flex flex-wrap gap-3">
                <a
                  href={upiUrl}
                  className="flex-1 min-w-[200px] py-3 px-5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>
                    {lang === 'hi'
                      ? `UPI ऐप से ₹${currentAmount || ''} भुगतान करें`
                      : `Pay ₹${currentAmount || ''} via Any UPI App`}
                  </span>
                </a>

                <button
                  onClick={handleCopyUpi}
                  className="py-3 px-4 bg-slate-900 hover:bg-slate-700 border border-slate-600 text-slate-200 text-xs font-semibold rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>{lang === 'hi' ? 'UPI ID कॉपी हुआ!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{lang === 'hi' ? 'UPI ID कॉपी करें' : 'Copy UPI ID'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-3 text-[11px] text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {lang === 'hi'
                    ? 'सीधा प्रवीण कुमार मिश्र के आधिकारिक बैंक खाते में UPI हस्तांतरण।'
                    : 'Direct, zero-commission transfer directly to Praveen Kumar Mishra.'}
                </span>
              </div>
            </div>

            {/* Why Support From New Generation Box */}
            <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/60 space-y-4">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400" />
                <span>
                  {lang === 'hi'
                    ? 'युवा पीढ़ी ("Generation") से जनसहयोग क्यों?'
                    : 'Why Small Contributions from Citizens & Youth?'}
                </span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block mb-0.5">
                    {lang === 'hi' ? '१. पूंजीवादी दबाव से मुक्ति' : '1. Free from Corporate Clutches'}
                  </strong>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {lang === 'hi'
                      ? 'जब जनता और युवा ₹51, ₹101 का सहयोग देते हैं, तो जनप्रतिनिधि केवल जनता के प्रति जवाबदेह होता है।'
                      : 'Elections funded by thousands of citizens ensure representatives work for people, not private interest.'}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block mb-0.5">
                    {lang === 'hi' ? '२. शिक्षा व स्वास्थ्य सामग्री' : '2. Direct Ground Upliftment'}
                  </strong>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {lang === 'hi'
                      ? 'सहयोग राशि का उपयोग कासगंज के निर्धन छात्रों को शिक्षण किट और स्वास्थ्य शिविरों में होता है।'
                      : 'Funds directly facilitate student study kits, medical checkups, and village problem audits.'}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block mb-0.5">
                    {lang === 'hi' ? '३. पारदर्शी हिसाब-किताब' : '3. Ethical Transparency'}
                  </strong>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {lang === 'hi'
                      ? 'हर लेनदेन बैंक के माध्यम से डिजिटल रूप से रिकॉर्ड रहता है।'
                      : 'Every transaction is digitally authenticated via banking UPI protocols.'}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block mb-0.5">
                    {lang === 'hi' ? '४. युवा सशक्तिकरण' : '4. Youth Ownership'}
                  </strong>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {lang === 'hi'
                      ? 'यह युवाओं की अपनी भागीदारी है ताकि राजनीति में अच्छे, शिक्षित लोग आगे आ सकें।'
                      : 'Empowers educated youth to participate and steer the future of regional public life.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
