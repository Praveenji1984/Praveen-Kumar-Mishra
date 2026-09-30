import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  Bot,
  Send,
  X,
  Sparkles,
  Copy,
  Check,
  User,
  Loader2,
  RefreshCw,
} from 'lucide-react';
import { Language } from '../types';

interface AiJanSamvadModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  time: string;
}

export const AiJanSamvadModal: React.FC<AiJanSamvadModalProps> = ({
  lang,
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text:
        lang === 'hi'
          ? 'नमस्कार! मैं प्रवीण कुमार मिश्र का आधिकारिक "एआई जनसंवाद सहायक" हूँ। आप मुझसे कासगंज की जनसमस्याओं, डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट, शिक्षा-कौशल पहलों, अथवा जनसहयोग के विषय में कोई भी प्रश्न पूछ सकते हैं।'
          : 'Welcome! I am the official "AI Jan Samvad Assistant" for Praveen Kumar Mishra. Feel free to ask about our community work in Kasganj, Dr. Ambedkar Trust, youth skill initiatives, or how to connect and contribute.',
      time: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions =
    lang === 'hi'
      ? [
          'कासगंज में सड़कों और जलभराव पर क्या दृष्टिकोण है?',
          'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट से छात्रों को क्या सहायता मिलती है?',
          'सोलर स्ट्रीट लाइटिंग और युवाओं के स्वरोजगार पर क्या योजना है?',
          'चुनावी जनसहयोग (UPI) से सहयोग कैसे करें?',
        ]
      : [
          'What is Praveen Mishra’s stance on rural roads & waterlogging?',
          'How does Dr. Ambedkar Gramin Vikas Trust support rural students?',
          'What are the opportunities in solar energy & youth skills?',
          'How can citizens contribute via PhonePe UPI to the campaign?',
        ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
          lang,
        }),
      });

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.reply || data.fallback || 'धन्यवाद। आपका प्रश्न दर्ज कर लिया गया है।',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'model',
        text:
          lang === 'hi'
            ? 'प्रवीण कुमार मिश्र कासगंज में जनसेवा एवं शिक्षा सुधार हेतु समर्पित हैं। आप उनसे सीधे व्हाट्सएप नंबर +91 82797 35137 पर भी संपर्क कर सकते हैं।'
            : 'Praveen Kumar Mishra is devoted to public service in Kasganj. You can also connect directly via WhatsApp at +91 82797 35137.',
        time: 'Now',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full h-[90vh] sm:h-[680px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header Bar */}
        <div className="px-5 py-4 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-md">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base font-display text-white">
                  {lang === 'hi' ? 'प्रवीण जनसंवाद एआई' : 'Praveen Jan Samvad AI'}
                </h3>
                <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                  AI Powered
                </span>
              </div>
              <p className="text-[11px] text-slate-300">
                {lang === 'hi'
                  ? 'कासगंज जनसरोकार, सामाजिक कार्य एवं ट्रस्ट मार्गदर्शन'
                  : 'Official Civic Dialogue & Community Assistant'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/70">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex gap-3 max-w-[88%] ${
                m.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                  m.role === 'user'
                    ? 'bg-blue-950 text-white'
                    : 'bg-amber-400 text-slate-950 shadow-xs'
                }`}
              >
                {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed relative group shadow-2xs ${
                  m.role === 'user'
                    ? 'bg-blue-950 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-wrap">{m.text}</div>

                <div
                  className={`mt-1.5 flex items-center justify-between gap-3 text-[10px] ${
                    m.role === 'user' ? 'text-blue-300' : 'text-slate-400'
                  }`}
                >
                  <span>{m.time}</span>
                  {m.role === 'model' && (
                    <button
                      onClick={() => copyText(m.id, m.text)}
                      className="opacity-0 group-hover:opacity-100 hover:text-slate-600 transition-opacity flex items-center gap-1 cursor-pointer"
                      title="Copy response"
                    >
                      {copiedId === m.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 mr-auto max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-2 text-xs text-slate-500 shadow-2xs">
                <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                <span>
                  {lang === 'hi'
                    ? 'प्रवीण जनसंवाद एआई विचार कर रहा है...'
                    : 'Praveen AI is generating response...'}
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Prompts Strip */}
        <div className="px-4 py-2 bg-slate-100/80 border-t border-slate-200 shrink-0 overflow-x-auto">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{lang === 'hi' ? 'सुझाव:' : 'Try:'}</span>
            </span>
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="text-[11px] bg-white hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full border border-slate-300/80 whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={
                lang === 'hi'
                  ? 'कासगंज की समस्याएं, समाज सेवा या ट्रस्ट से जुड़ा प्रश्न पूछें...'
                  : 'Ask about Kasganj civic issues, social initiatives, trust...'
              }
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="p-2.5 rounded-xl bg-blue-950 hover:bg-blue-900 disabled:opacity-50 text-white transition-colors cursor-pointer shadow-xs"
              aria-label="Send query"
            >
              <Send className="w-4 h-4 text-amber-400" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
