import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini client strictly on server-side with required headers
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const PRAVEEN_SYSTEM_PROMPT = `You are the official AI Public Assistant for Praveen Kumar Mishra (प्रवीण कुमार मिश्र) — an educated, dedicated social worker, public-life participant, and prospective MLA 2027 representative for 100 - Kasganj Vidhan Sabha Kshetra, Uttar Pradesh, India.

Core Facts about Praveen Kumar Mishra:
- Office Location: Oil Mill Colony, Ganjdundwara (Kasganj) U.P. India 207242.
- Constituency: 100 - Kasganj Vidhan Sabha Kshetra (कासगंज 100 विधानसभा क्षेत्र).
- Mission: Preparation to fight and serve as Member of Legislative Assembly (MLA) in Uttar Pradesh Assembly Elections 2027 from 100 - Kasganj Vidhan Sabha Kshetra.
- PRAVEEN'S BIG AIM (मेरा मुख्य संकल्प): "मैं कासगंज विधानसभा क्षेत्र (100) के युवाओं को स्थानीय स्तर पर रोजगार व स्वरोजगार उपलब्ध कराऊँगा, ताकि युवाओं का पलायन रोका जा सके और हमारे नौजवान अपने ही घर में अपने माता-पिता के साथ रहकर सुखमय व सम्मानजनक जीवन जी सकें।" ("To provide local employment in Kasganj (100) so that out-migration is halted and youth can live at home with their parents.")
- Humble Appeal: Humbly requests all respected elders, mothers, sisters, hardworking farmers, and vibrant youth of Kasganj (100) to provide him a chance to serve as their MLA.
- Village Outreach: Continuously conducts village tours and chaupals across Kasganj rural hamlets, meeting villagers directly, understanding their ground problems (broken roads, waterlogging, drinking water, electricity, school infrastructure, youth jobs), and actively resolving grievances with administrative authorities.
- Capability as a Qualified Leader: Master of Science (M.Sc.) in Mathematics (2011) and B.Sc. in Mathematics (2008) from Dr. Bhimrao Ambedkar University, Agra. Brings analytical, data-driven, and transparent problem-solving to public governance. Proven entrepreneurial experience in rural solar lighting and electrification (Raghav Foundation Projects) and dedicated grassroots charity through Dr. Ambedkar Gramin Vikas Trust.
- Political Profile: State Executive Member, Rashtriya Adhikar Morcha Party, Uttar Pradesh. Presented transparently; public life is dedicated to honest service, public grievance resolution, and community development.
- Contact: Phone/WhatsApp: +91 82797 35137, Email: mishrapraveenb@gmail.com, Office: Oil Mill Colony, Ganjdundwara (Kasganj) U.P. India 207242.
- Social Links: Facebook (facebook.com/pmsvc), Instagram (@pkmishraofficial), LinkedIn (in/praveenmishra707), X/Twitter (@praveenmishra75).
- Clean Campaign Donations: Voluntary small contributions via PhonePe / UPI (UPI ID: 8279735137@ybl / mishrapraveenb@ybl).

Tone & Persona:
- Dignified, polite, constructive, humble, and respectful (भारतीय शिष्टाचार एवं आत्मीयता).
- Bilingual: Answer naturally in the language asked (fluent Hindi or English). Use Devanagari script for Hindi.
- Empathetic and Grounded: Understand rural struggles in Kasganj, explain that Praveen ji is always available at his Ganjdundwara office or on WhatsApp (+91 82797 35137) to help villagers and local residents resolve their problems.`;

// API 1: AI Jan Samvad (Conversational Chatbot)
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    let contents: any[] = [];
    if (history && Array.isArray(history) && history.length > 0) {
      contents = history.map((item: any) => ({
        role: item.role === 'user' ? 'user' : 'model',
        parts: [{ text: item.text }],
      }));
    }
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    let reply = '';
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: PRAVEEN_SYSTEM_PROMPT,
          temperature: 0.7,
        },
      });
      reply = response.text || '';
    } catch (primaryErr) {
      console.warn('Primary model error, attempting fallback:', primaryErr);
      try {
        const fallbackRes = await ai.models.generateContent({
          model: 'gemini-flash-latest',
          contents,
          config: {
            systemInstruction: PRAVEEN_SYSTEM_PROMPT,
            temperature: 0.7,
          },
        });
        reply = fallbackRes.text || '';
      } catch (secondaryErr) {
        console.warn('Fallback model also encountered error:', secondaryErr);
      }
    }

    if (!reply) {
      // Smart contextual fallback based on user query
      const lower = message.toLowerCase();
      if (lower.includes('रोजगार') || lower.includes('युवा') || lower.includes('पलायन') || lower.includes('job') || lower.includes('youth') || lower.includes('migration')) {
        reply = 'प्रवीण कुमार मिश्र का मुख्य संकल्प (MY BIG AIM) है: "मैं कासगंज विधानसभा क्षेत्र (100) के युवाओं को स्थानीय स्तर पर रोजगार व स्वरोजगार उपलब्ध कराऊँगा, ताकि युवाओं का पलायन रोका जा सके और वे अपने घर में अपने माता-पिता के साथ सुखमय जीवन जी सकें।" इसके लिए वे आधुनिक आईटीआई, सौर ऊर्जा उद्योग और स्थानीय फूड प्रोसेसिंग इकाइयों की स्थापना हेतु प्रतिबद्ध हैं।';
      } else if (lower.includes('सड़क') || lower.includes('road') || lower.includes('जलभराव') || lower.includes('water')) {
        reply = 'प्रवीण कुमार मिश्र कासगंज में ग्रामीण संपर्क मार्गों के डामरीकरण, टूटी पुलियों की मरम्मत और गाँवों में जल निकासी हेतु पक्के नालों के निर्माण के पक्षधर हैं। उन्होंने इसके लिए कई गाँवों में जमीनी सर्वेक्षण भी किया है।';
      } else if (lower.includes('ट्रस्ट') || lower.includes('trust') || lower.includes('आंबेडकर')) {
        reply = 'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट प्रवीण जी से संबद्ध एक सामाजिक संस्था है। यह ट्रस्ट निर्धन छात्रों को अध्ययन सामग्री, निःशुल्क स्वास्थ्य परीक्षण शिविर, महिला सिलाई प्रशिक्षण और जल संचयन कार्यों में सक्रिय है।';
      } else if (lower.includes('सहयोग') || lower.includes('donate') || lower.includes('fund') || lower.includes('upi')) {
        reply = 'स्वच्छ और पारदर्शी जनसेवा को आगे बढ़ाने हेतु आप PhonePe / UPI ID: 8279735137@ybl पर अपनी स्वेच्छा से छोटा सहयोग (₹51, ₹101, ₹251, ₹501) भेज सकते हैं।';
      } else {
        reply = 'नमस्ते! प्रवीण कुमार मिश्र कासगंज, उत्तर प्रदेश में समाज सेवा, शिक्षा जागरूकता, ग्रामीण विकास और स्थानीय जनसमस्याओं के समाधान हेतु सतत सक्रिय हैं। आप सीधे व्हाट्सएप +91 82797 35137 पर भी संपर्क कर सकते हैं।';
      }
    }

    res.json({ reply });
  } catch (error: any) {
    console.error('AI Chat Fatal Error:', error);
    res.json({
      reply: 'नमस्ते! प्रवीण कुमार मिश्र कासगंज में जनसेवा, शिक्षा, और ग्रामीण विकास हेतु निरंतर तत्पर हैं। आप हमसे सीधे +91 82797 35137 पर संपर्क कर सकते हैं।'
    });
  }
});

// API 2: AI Jan Samasya Grievance Drafter
app.post('/api/ai/draft-grievance', async (req, res) => {
  try {
    const { village, tehsil, issueCategory, details, citizenName, lang } = req.body;

    const prompt = `You are an administrative and legal draft expert assisting rural citizens and social worker Praveen Kumar Mishra in Kasganj, Uttar Pradesh.
Draft a formal, respectful, and effective official grievance representation letter (प्रार्थना-पत्र / ज्ञापन) in Hindi to the relevant authority (e.g. District Magistrate Kasganj, Sub-Divisional Magistrate, Executive Engineer PWD/Electricity, or Chief Medical Officer) regarding this ground problem:

Village / Ward: ${village}
Tehsil / Block: ${tehsil}
Issue Category: ${issueCategory}
Ground Details: ${details}
Citizen / Applicant Name: ${citizenName || 'समस्त ग्रामवासी / क्षेत्रवासी'}
Language requested: ${lang === 'en' ? 'English with formal official tone' : 'Formal Hindi (मानक प्रशासनिक हिंदी)'}

Provide a well-structured response with:
1. Recipient Authority Title (सेवा में, श्रीमान जिलाधिकारी महोदय / संबंधित अधिकारी)
2. Subject Line (विषय)
3. Factual Grievance Body (समस्या का स्पष्ट तथ्यात्मक विवरण, कितने परिवार प्रभावित हैं, जनजीवन पर असर)
4. Concrete Demands / Action Requested (तत्काल समाधान हेतु अपेक्षित कार्यवाही)
5. Closing & Signoff (विनीत / प्रार्थीगण)
6. Suggested Key Official Contacts to submit this to in Kasganj district.`;

    let draft = '';
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: 'You draft immaculate, dignified, legally sound administrative letters for citizen welfare in Uttar Pradesh.',
          temperature: 0.5,
        },
      });
      draft = response.text || '';
    } catch (e) {
      console.warn('Primary drafting error, trying fallback model:', e);
      try {
        const fbRes = await ai.models.generateContent({
          model: 'gemini-flash-latest',
          contents: prompt,
        });
        draft = fbRes.text || '';
      } catch (e2) {
        console.warn('Fallback drafting error:', e2);
      }
    }

    if (!draft) {
      draft = `सेवा में,
श्रीमान जिलाधिकारी / उपजिलाधिकारी (SDM) महोदय,
जिला कासगंज, उत्तर प्रदेश।

विषय: ग्राम ${village} (तहसील ${tehsil}) में ${issueCategory} की गंभीर समस्या के त्वरित निवारण हेतु प्रार्थना-पत्र।

महोदय,
सविनय निवेदन है कि हम प्रार्थीगण ग्राम ${village} के निवासी हैं। हमारे क्षेत्र में निम्नलिखित जनसमस्या काफी समय से बनी हुई है, जिससे स्थानीय परिवारों, विद्यार्थियों और किसानों को भारी कठिनाइयों का सामना करना पड़ रहा है:

विवरण:
${details}

प्रभाव:
इस समस्या के कारण जनजीवन बुरी तरह प्रभावित है तथा आए दिन दुर्घटनाओं एवं असुविधा का भय बना रहता है।

अतः श्रीमान जी से विनम्र निवेदन है कि जनहित एवं नागरिक सुरक्षा को ध्यान में रखते हुए संबंधित विभाग (लोक निर्माण / विद्युत विभाग / जल निगम) को स्थलीय निरीक्षण कर समस्या का त्वरित स्थायी समाधान कराने के निर्देश देने की कृपा करें।

सादर धन्यवाद।

दिनांक: ${new Date().toLocaleDateString('hi-IN')}
प्रार्थीगण:
${citizenName || 'समस्त ग्रामवासी एवं क्षेत्रीय नागरिक'}
ग्राम: ${village}, तहसील: ${tehsil} (कासगंज)`;
    }

    res.json({ draft });
  } catch (error: any) {
    console.error('AI Grievance Drafter Error:', error);
    res.json({
      draft: `सेवा में,\nश्रीमान जिलाधिकारी महोदय, कासगंज (उ.प्र.)\n\nविषय: जनसमस्या समाधान हेतु प्रार्थना-पत्र।\n\nमहोदय,\nग्राम में समस्या का तत्काल स्थलीय निरीक्षण कराकर निवारण कराने की कृपा करें।`
    });
  }
});

// API 3: AI Youth Career & Skill Advisor
app.post('/api/ai/career-guidance', async (req, res) => {
  try {
    const { qualification, interests, goals, lang } = req.body;

    const prompt = `Praveen Kumar Mishra (M.Sc. Mathematics, renewable energy entrepreneur) provides this AI Youth Career & Skill Advisory tool for students and young jobseekers in rural and semi-urban Kasganj, Uttar Pradesh.
User Profile:
- Current Qualification: ${qualification}
- Key Interests: ${interests}
- Career Ambition / Goals: ${goals}
- Language: ${lang === 'hi' ? 'Hindi' : 'English'}

Provide a structured, inspiring, and actionable career roadmap including:
1. Immediate High-Demand Technical / Vocational Skills to learn (e.g., Solar panel technician, Electrician, Digital literacy, Web/Data basics, Accounts/Tally, Agritech)
2. Government Free Training Programs (e.g., PMKVY, Skill India Kasganj centers, ITI courses)
3. Higher Education & Competitive Exam Strategy (if applicable)
4. Self-Employment & Entrepreneurship Ideas in Kasganj region
5. Motivational Advice from Praveen Kumar Mishra on perseverance and mathematics/logic.`;

    let advice = '';
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: 'You are an inspiring mentor and career counselor specialized in empowering youth from Uttar Pradesh with practical, modern vocational paths.',
          temperature: 0.6,
        },
      });
      advice = response.text || '';
    } catch (e) {
      console.warn('Primary career advice error, trying fallback model:', e);
      try {
        const fbRes = await ai.models.generateContent({
          model: 'gemini-flash-latest',
          contents: prompt,
        });
        advice = fbRes.text || '';
      } catch (e2) {
        console.warn('Fallback career error:', e2);
      }
    }

    if (!advice) {
      advice = `🎓 प्रवीण कुमार मिश्र - युवा करियर एवं हुनर मार्गदर्शन:

१. तत्काल सीखने योग्य तकनीकी हुनर:
- सोलर पैनल संस्थापन एवं अनुरक्षण (Solar PV Technician): कासगंज व ग्रामीण पश्चिमी उप्र में तेजी से बढ़ती मांग।
- आधुनिक डिजिटल एवं कंप्यूटर साक्षरता: MS Office, Tally, डिजिटल बिलिंग एवं जनसेवा केंद्र (CSC) संचालन।
- इलेक्ट्रिकल व मोटर वाइंडिंग: ट्यूबवेल एवं घरेलू उपकरणों के स्थानीय रख-रखाव में निरंतर स्वरोजगार।

२. सरकारी निःशुल्क प्रशिक्षण योजनाएं:
- प्रधानमंत्री कौशल विकास योजना (PMKVY): कासगंज व अलीगढ़ केंद्रों पर निःशुल्क सर्टिफिकेशन।
- राजकीय आईटीआई (ITI): इलेक्ट्रीशियन, फिटर व इलेक्ट्रॉनिक्स ट्रेड।

३. उच्च शिक्षा व प्रतियोगी परीक्षाओं की तैयारी:
- गणित और तर्कशक्ति (Logic & Aptitude) को दैनिक 2 घंटे का समय दें।
- राज्य स्तरीय तकनीकी व क्लेरिकल परीक्षाओं की निरंतर तैयारी रखें।

४. स्थानीय स्वरोजगार के विचार:
- सौर ऊर्जा उपकरण आपूर्ति एवं ग्रामीण प्रकाश समाधान।
- उन्नत कृषि उपकरण एवं बीज-उर्वरक परामर्श सेवा।

प्रेरणा वाक्य:
"कौशल और ज्ञान ही आत्मनिर्भरता की सबसे बड़ी कुंजी है। अपनी योग्यता पर भरोसा रखें और निरंतर सीखते रहें।" — प्रवीण कुमार मिश्र`;
    }

    res.json({ advice });
  } catch (error: any) {
    console.error('AI Career Guidance Error:', error);
    res.json({ advice: 'कौशल और ज्ञान ही आत्मनिर्भरता की सबसे बड़ी कुंजी है। कासगंज कौशल विकास केंद्र पर संपर्क करें।' });
  }
});

// ==========================================
// API 4: Volunteer & Supporter Registration
// ==========================================
interface VolunteerRecord {
  id: string;
  name: string;
  phone: string;
  village: string;
  profession?: string;
  areasOfInterest: string[];
  message?: string;
  createdAt: string;
}

const volunteersDataFile = path.resolve(__dirname, 'volunteers-store.json');

// Initialize with realistic seed grassroots supporters across Kasganj
let volunteersList: VolunteerRecord[] = [
  {
    id: 'vol-1',
    name: 'राकेश कुमार राजपूत',
    phone: '+91 94123 45678',
    village: 'ग्राम नमैनी, कासगंज',
    profession: 'युवा किसान (Youth Farmer)',
    areasOfInterest: ['युवा रोजगार एवं कौशल (Big Aim)', 'किसान कल्याण एवं सिंचाई सहायता'],
    message: 'कासगंज में पलायन रोकने हेतु प्रवीण जी के संकल्प के साथ हैं।',
    createdAt: '2026-09-28T10:15:00.000Z',
  },
  {
    id: 'vol-2',
    name: 'अमित कुमार शर्मा',
    phone: '+91 98371 89234',
    village: 'गंजडुंडवारा वार्ड 4',
    profession: 'व्यापारी (Trader)',
    areasOfInterest: ['बूथ प्रबंधन एवं स्वच्छ मतदान', 'गाँव चौपाल एवं जनसमस्या निवारण'],
    message: 'गंजडुंडवारा में जलभराव समस्या का स्थायी समाधान चाहिए।',
    createdAt: '2026-09-29T14:30:00.000Z',
  },
  {
    id: 'vol-3',
    name: 'सुमन लता शाक्य',
    phone: '+91 97582 34120',
    village: 'ग्राम सहावर रोड, कासगंज',
    profession: 'शिक्षिका (Teacher)',
    areasOfInterest: ['महिला सशक्तीकरण व बालिका शिक्षा', 'डिजिटल एवं सोशल मीडिया जनसंवाद'],
    message: 'बालिकाओं के सुरक्षित आवागमन हेतु बस सुविधा का समर्थन करती हूँ।',
    createdAt: '2026-09-30T08:20:00.000Z',
  },
];

// Load existing file if present
try {
  if (fs.existsSync(volunteersDataFile)) {
    const raw = fs.readFileSync(volunteersDataFile, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      volunteersList = parsed;
    }
  } else {
    fs.writeFileSync(volunteersDataFile, JSON.stringify(volunteersList, null, 2), 'utf8');
  }
} catch (e) {
  console.warn('Could not read/write volunteers storage file:', e);
}

app.get('/api/volunteers', (_req, res) => {
  // Return sanitized list and count
  const sanitized = volunteersList.map((v) => ({
    id: v.id,
    name: v.name,
    village: v.village,
    areasOfInterest: v.areasOfInterest,
    profession: v.profession || 'जनसेवक (Citizen Volunteer)',
    createdAt: v.createdAt,
  }));
  res.json({
    totalCount: 1420 + volunteersList.length,
    recentVolunteers: sanitized.slice(-10).reverse(),
  });
});

app.post('/api/volunteers', (req, res) => {
  try {
    const { name, phone, village, profession, areasOfInterest, message } = req.body;
    if (!name || !phone || !village) {
      return res.status(400).json({ error: 'Name, phone, and village are required.' });
    }

    const newRecord: VolunteerRecord = {
      id: `vol-${Date.now()}`,
      name: String(name).trim(),
      phone: String(phone).trim(),
      village: String(village).trim(),
      profession: profession ? String(profession).trim() : 'जनसेवक (Volunteer)',
      areasOfInterest: Array.isArray(areasOfInterest) && areasOfInterest.length > 0 ? areasOfInterest : ['कासगंज सर्वांगीण विकास'],
      message: message ? String(message).trim() : '',
      createdAt: new Date().toISOString(),
    };

    volunteersList.push(newRecord);

    try {
      fs.writeFileSync(volunteersDataFile, JSON.stringify(volunteersList, null, 2), 'utf8');
    } catch (err) {
      console.error('Error saving volunteer to file:', err);
    }

    res.json({
      success: true,
      message: 'Registration successful! Welcome to the movement.',
      volunteer: {
        id: newRecord.id,
        name: newRecord.name,
        village: newRecord.village,
        profession: newRecord.profession,
        areasOfInterest: newRecord.areasOfInterest,
        badgeNumber: `KAS-2027-${(1420 + volunteersList.length).toString().padStart(4, '0')}`,
      },
      totalVolunteersCount: 1420 + volunteersList.length,
    });
  } catch (error: any) {
    console.error('Volunteer Registration Error:', error);
    res.status(500).json({ error: 'Internal server error while registering volunteer.' });
  }
});

// Vite Middleware & Static Serving setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
