import {
  SocialWorkCard,
  PublicIssue,
  ExperienceItem,
  EducationItem,
  InitiativeItem,
  GalleryPhoto,
  VideoItem,
  MediaItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Praveen Kumar Mishra',
  nameHindi: 'प्रवीण कुमार मिश्र',
  shortName: 'Praveen Mishra',
  shortNameHindi: 'प्रवीण मिश्र',
  primaryIdentityEn: 'Social Worker | Public Life | Rural Development | Public Communication',
  primaryIdentityHi: 'सामाजिक कार्यकर्ता | जनजीवन | ग्रामीण विकास | जनसंवाद',
  taglineHindi: 'जनसंवाद • जनसेवा • सामुदायिक विकास',
  taglineEnglish: 'Public Communication • Social Service • Community Development',
  subheadlineEn: 'Social Worker | Public Life | Community Development | Public Communication',
  subheadlineHi: 'सामाजिक कार्यकर्ता | जनजीवन | सामुदायिक विकास | जनसंवाद',
  additionalLineEn: 'Working with people, understanding local issues and supporting community development.',
  additionalLineHi: 'जनता के साथ काम करना, स्थानीय समस्याओं को समझना और सामुदायिक विकास को आगे बढ़ाना।',
  locationEn: 'Kasganj, Uttar Pradesh, India',
  locationHi: 'कासगंज, उत्तर प्रदेश, भारत',
  email: 'mishrapraveenb@gmail.com',
  phone: '+91 82797 35137',
  whatsapp: '+918279735137',
  address: 'Oil Mill Colony, Ganjdundwara (Kasganj) U.P. India 207242',
  officeLocationEn: 'Oil Mill Colony, Ganjdundwara (Kasganj), Uttar Pradesh 207242, India',
  officeLocationHi: 'ऑयल मिल कॉलोनी, गंजडुंडवारा (कासगंज), उत्तर प्रदेश 207242, भारत',
  constituencyNumber: '100',
  constituencyNameEn: '100 - Kasganj Vidhan Sabha Kshetra',
  constituencyNameHi: '100 - कासगंज विधानसभा क्षेत्र',
  bigAimYouthEmployment: {
    tagEn: 'MY BIG AIM | RESOLUTION FOR KASGANJ 100',
    tagHi: 'मेरा मुख्य संकल्प | कासगंज 100 के युवाओं के नाम',
    titleEn: 'Local Employment in Kasganj (100) — Halting Youth Migration & Living with Parents',
    titleHi: 'कासगंज (100) के युवाओं को स्थानीय रोजगार — पलायन पर रोक और माता-पिता के साथ सम्मानजनक जीवन',
    statementEn:
      'I will provide employment and livelihood opportunities to the youth of Kasganj Vidhan Sabha Kshetra (100) so that out-migration of youth can be stopped, and they can live peacefully in their own homes with their parents — THIS IS MY BIG AIM.',
    statementHi:
      'मैं कासगंज विधानसभा क्षेत्र (100) के युवाओं को स्थानीय स्तर पर रोजगार व स्वरोजगार उपलब्ध कराऊँगा, ताकि युवाओं का बड़े शहरों की ओर पलायन रोका जा सके और हमारे नौजवान अपने ही घर में अपने माता-पिता के साथ रहकर सुखमय व सम्मानजनक जीवन जी सकें — यही मेरा सबसे बड़ा और मुख्य संकल्प (MY BIG AIM) है।',
    coreReasons: [
      {
        id: 'stop-migration',
        titleEn: 'Ending Painful Out-Migration',
        titleHi: 'पीड़ादायक पलायन का अंत',
        descEn: 'Our educated young men and women should not have to leave their ancestral soil to work in menial, distant city conditions just to survive.',
        descHi: 'कासगंज के शिक्षित और होनहार युवाओं को मजबूरी में रोजी-रोटी के लिए दिल्ली-मुंबई जैसे महानगरों के तंग कमरों में भटकने की जरूरत न पड़े।',
      },
      {
        id: 'caring-for-parents',
        titleEn: 'Living at Home with Aging Parents',
        titleHi: 'घर में बुजुर्ग माता-पिता की सेवा व साथ',
        descEn: 'Parents sacrifice their entire lives to educate their children; in their old age, their children must be beside them to support and care for them.',
        descHi: 'माता-पिता अपने बच्चों को जीवन भर खून-पसीने से पढ़ाते-लिखाते हैं; बुढ़ापे में बेटे-बेटियों को उनके पास रहकर उनकी देखभाल करने का अवसर मिलना चाहिए।',
      },
      {
        id: 'local-jobs',
        titleEn: 'Local Industry, Solar & Agro-Processing',
        titleHi: 'स्थानीय सौर, खाद्य व कुटीर उद्योग',
        descEn: 'Establishing local manufacturing, solar energy installations, cold chain storage, and MSME clusters right here in Kasganj & Ganjdundwara.',
        descHi: 'गंजडुंडवारा व कासगंज में सौर ऊर्जा उपकरण, कृषि फूड प्रोसेसिंग, वेयरहाउसिंग और कुटीर उद्योगों से हजारों स्थानीय रोजगार पैदा करना।',
      },
      {
        id: 'skill-and-dignity',
        titleEn: 'High-Tech Skill Training & Dignity',
        titleHi: 'आधुनिक तकनीकी कौशल व सम्मानजनक आय',
        descEn: 'Advanced ITI, digital centers, competitive exam coaching, and self-employment funding so every youth earns with pride and stability.',
        descHi: 'आईटीआई, डिजिटल स्किल, प्रतियोगी परीक्षा तैयारी और स्वरोजगार हेतु सरकारी सहायता ताकि हर युवा स्वाभिमान से कमा सके।',
      },
    ],
  },
  mlaMission2027: {
    targetYear: '2027',
    badgeEn: 'Mission 2027 | 100 - Kasganj Vidhan Sabha',
    badgeHi: 'मिशन 2027 | 100 - कासगंज विधानसभा क्षेत्र',
    titleEn: 'Dedicated Preparation for MLA 2027 — 100 Kasganj Vidhan Sabha Kshetra',
    titleHi: 'कासगंज विधानसभा क्षेत्र संख्या 100 से विधायक 2027 हेतु सतत जनसेवा व तैयारी',
    humbleAppealEn:
      'A humble and heartfelt request to all respected elders, mothers, sisters, hardworking farmers, and vibrant youth of 100 - Kasganj Vidhan Sabha Kshetra: Please give a chance to an educated, qualified (M.Sc. Mathematics), and accessible local leader to serve you as your Member of Legislative Assembly (MLA) in 2027. We are constantly touring villages, holding chaupals, hearing your ground issues, and standing with you to resolve every difficulty with dedication and integrity.',
    humbleAppealHi:
      'कासगंज (100) विधानसभा क्षेत्र के समस्त आदरणीय बुजुर्गों, पूज्य मातृशक्ति, अन्नदाता किसान भाइयों और युवा साथियों से विनम्र करबद्ध प्रार्थना: कासगंज के चहुंमुखी विकास, ईमानदार प्रतिनिधित्व और जनसमस्याओं के त्वरित समाधान हेतु अपने इस शिक्षित (M.Sc. गणित), संघर्षशील और सुलभ बेटे/भाई को 2027 के विधानसभा चुनाव में एक अवसर अवश्य प्रदान करें। हम निरंतर गाँव-गाँव और चौपाल-चौपाल जाकर आपकी समस्याओं को सुन रहे हैं तथा उनके स्थायी समाधान के लिए दिन-रात प्रयासरत हैं।',
    leadershipIntroEn:
      'Praveen Kumar Mishra stands out as a visionary, educated, and credible public representative for Kasganj. With a Master of Science in Mathematics from Dr. B.R. Ambedkar University, Agra, combined with successful entrepreneurial leadership in solar renewable energy and deep grassroots social commitment through Dr. Ambedkar Gramin Vikas Trust, he possesses both the administrative intellect and field dedication required to lead Kasganj forward.',
    leadershipIntroHi:
      'प्रवीण कुमार मिश्र कासगंज (100) के लिए एक सुशिक्षित, निष्ठावान और सशक्त नेतृत्व हैं। डॉ. भीमराव आंबेडकर विश्वविद्यालय, आगरा से गणित में एम.एससी. (M.Sc.) की उच्च शिक्षा, सौर ऊर्जा व ग्रामीण प्रकाश व्यवस्था में सफल उद्यमिता और डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट के माध्यम से निरंतर जमीनी सेवा के साथ, वे कासगंज की जनसमस्याओं के वैज्ञानिक एवं त्वरित समाधान में पूरी तरह सक्षम हैं।',
    pillars: [
      {
        id: 'qualified',
        titleEn: 'Highly Qualified (M.Sc. Mathematics)',
        titleHi: 'उच्च शिक्षित (M.Sc. गणित)',
        descEn: 'Logical, analytical, and data-driven approach to budget allocation, rural development, and education reforms.',
        descHi: 'योजनाओं, बजट और स्थानीय समस्याओं के अध्ययन व समाधान में वैज्ञानिक एवं विश्लेषणात्मक दृष्टि।',
      },
      {
        id: 'village-outreach',
        titleEn: 'Meeting Villagers & Solving Problems',
        titleHi: 'गाँव-गाँव जनसंवाद एवं समस्या समाधान',
        descEn: 'Daily visits to villages, hamlets, and wards, listening directly to citizens and resolving grievances with district officials.',
        descHi: 'निरंतर गाँवों में चौपाल और जनसुनवाई; स्थानीय नागरिकों की समस्याओं को सुनकर संबंधित प्रशासनिक अधिकारियों से त्वरित निस्तारण।',
      },
      {
        id: 'accessible',
        titleEn: 'Always Accessible at Ganjdundwara Office',
        titleHi: 'गंजडुंडवारा कार्यालय पर सदैव सुलभ',
        descEn: 'Permanent public office at Oil Mill Colony, Ganjdundwara (Kasganj) with open doors and 24x7 helpline (+91 82797 35137).',
        descHi: 'ऑयल मिल कॉलोनी, गंजडुंडवारा (कासगंज) में स्थायी कार्यालय; किसी भी समस्या के लिए नागरिक कभी भी सीधे मिल सकते हैं।',
      },
      {
        id: 'clean-politics',
        titleEn: 'Clean, Value-Based Public Representation',
        titleHi: 'स्वच्छ, जनहितैषी एवं पारदर्शी राजनीति',
        descEn: 'Free from money power and unfulfilled promises; focused purely on roads, water, electricity, hospitals, and youth jobs.',
        descHi: 'दिखावे और झूठे वादों से दूर; बुनियादी नागरिक सुविधाओं, पक्की सड़कों, पेयजल, स्वास्थ्य और युवाओं को रोजगार दिलाने पर केंद्रित।',
      },
    ],
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/pmsvc',
    facebookHandle: 'facebook.com/pmsvc',
    instagram: 'https://www.instagram.com/pkmishraofficial',
    instagramHandle: '@pkmishraofficial',
    linkedin: 'https://www.linkedin.com/in/praveenmishra707',
    linkedinHandle: 'in/praveenmishra707',
    twitter: 'https://x.com/praveenmishra75',
    twitterHandle: '@praveenmishra75',
  },
  donation: {
    payeeName: 'PRAVEEN KUMAR MISHRA',
    primaryUpiId: '8279735137@ybl',
    alternateUpiId: 'mishrapraveenb@ybl',
    phonePeAccepted: true,
    campaignTitleEn: 'Grassroots Citizen Campaign Fund',
    campaignTitleHi: 'स्वच्छ राजनीति एवं चुनावी जनसहयोग',
    campaignDescEn:
      'Support honest public representation and grassroots election outreach in Kasganj without dependence on high-money influence. Small contributions from citizens and youth empower clean, transparent public service.',
    campaignDescHi:
      'कासगंज में स्वच्छ, पारदर्शी और ईमानदार जनसेवा को आगे बढ़ाने हेतु आम नागरिकों और युवा पीढ़ी ("Generation") का छोटा ऐच्छिक सहयोग। जनता की ताक़त से जनता की आवाज़।',
  },
  politicalAffiliation: {
    partyEn: 'Rashtriya Adhikar Morcha Party',
    partyHi: 'राष्ट्रीय अधिकार मोर्चा पार्टी',
    positionEn: 'State Executive Member, Uttar Pradesh',
    positionHi: 'प्रदेश कार्यकारिणी सदस्य, उत्तर प्रदेश',
    regionEn: 'Kasganj, Uttar Pradesh',
    regionHi: 'कासगंज, उत्तर प्रदेश',
    roleEn: 'Social Worker and Public-Life Participant',
    roleHi: 'सामाजिक कार्यकर्ता एवं जनजीवन सहभागी',
    transparencyNoteEn:
      'Political affiliation is presented for identification and transparency. This website primarily focuses on social work, community development and public communication.',
    transparencyNoteHi:
      'राजनीतिक संबद्धता केवल पारदर्शी परिचय और पहचान के उद्देश्य से प्रस्तुत की गई है। यह वेबसाइट मुख्य रूप से समाज सेवा, सामुदायिक विकास और जनसंवाद पर केंद्रित है।',
  },
  quotes: [
    {
      hindi: 'गलत के खिलाफ आवाज़ उठाना हर शिक्षित नागरिक की जिम्मेदारी है। समाज किसी एक धर्म, जाति या वर्ग से नहीं, बल्कि सभी के सहयोग से बनता है।',
      english:
        'It is the duty of every educated citizen to stand against injustice. A constructive society is built by the cooperation of all communities, not isolated groups.',
    },
    {
      hindi: 'हमारा संकल्प: जनसमस्याओं की पहचान, पारदर्शी जनसुनवाई, जमीनी सामाजिक सेवा और स्थानीय मुद्दों की सशक्त आवाज़।',
      english:
        'Our resolve: identifying grassroots grievances, transparent public dialogue, dedicated social service, and an articulate voice for local issues.',
    },
    {
      hindi: 'The best way to find yourself is to lose yourself in the service of others.',
      english: 'Dedicated to community welfare, grassroots dialogue, and sustainable rural transformation in Uttar Pradesh.',
    },
  ],
};

export const SOCIAL_WORK_CARDS: SocialWorkCard[] = [
  {
    id: 'education-literacy',
    titleEn: 'Education & Literacy',
    titleHi: 'शिक्षा एवं साक्षरता',
    category: 'Education',
    descEn:
      'Promoting foundational learning, student career guidance, and distribution of learning materials for underprivileged rural students across Kasganj villages.',
    descHi:
      'कासगंज के ग्रामीण अंचलों में निर्धन विद्यार्थियों को शिक्षण सामग्री वितरण, करियर मार्गदर्शन और गुणवत्तापूर्ण प्राथमिक शिक्षा के प्रति अभिभावकों में जागरूकता।',
    iconName: 'GraduationCap',
    stats: '2,400+ Students Reached',
    keyPointsEn: [
      'Study kits and book distribution camps in remote hamlets',
      'Guidance workshops on polytechnic, graduation and competitive tests',
      'School retention and girl-child education awareness meetings',
    ],
    keyPointsHi: [
      'दूरदराज के मजरों में शिक्षण किट और पाठ्य-सामग्री वितरण शिविर',
      'पॉलिटेक्निक, स्नातक एवं प्रतियोगी परीक्षाओं पर करियर मार्गदर्शन',
      'बालिका शिक्षा प्रोत्साहन और विद्यालय छोड़ने की दर घटाने पर चौपाल',
    ],
  },
  {
    id: 'youth-development',
    titleEn: 'Youth Development',
    titleHi: 'युवा विकास एवं मार्गदर्शन',
    category: 'Youth',
    descEn:
      'Organizing village-level sports competitions, personality building workshops, and leadership dialogues to channel youth energy into constructive community building.',
    descHi:
      'ग्रामीण युवाओं को खेलकूद प्रतियोगिताओं, व्यक्तित्व विकास और सामुदायिक नेतृत्व के माध्यम से सकारात्मक सामाजिक निर्माण की दिशा में प्रेरित करना।',
    iconName: 'Users',
    stats: '45+ Youth Dialogues',
    keyPointsEn: [
      'Grassroots cricket and volleyball tournaments for rural cohesion',
      'Workshops on ethical leadership and constitutional rights awareness',
      'Mentorship for youth seeking technical trade certifications',
    ],
    keyPointsHi: [
      'सामाजिक समरसता बढ़ाने हेतु ग्रामीण खेल प्रतियोगिताओं का आयोजन',
      'संवैधानिक अधिकारों और नैतिक नेतृत्व पर संवादात्मक सत्र',
      'तकनीकी ट्रेड एवं हुनर सीखने वाले युवाओं को मार्गदर्शन',
    ],
  },
  {
    id: 'employment-skills',
    titleEn: 'Employment & Skill Development',
    titleHi: 'रोजगार एवं कौशल विकास',
    category: 'Livelihood',
    descEn:
      'Connecting local youth with vocational training programs, renewable energy technician skills, and government skill development centres.',
    descHi:
      'स्थानीय युवाओं को वोकेशनल कौशल, सोलर व एलईडी तकनीशियन प्रशिक्षण और सरकारी रोजगार मेलों से जोड़ने का निरंतर प्रयास।',
    iconName: 'Briefcase',
    stats: '850+ Trained & Guided',
    keyPointsEn: [
      'Solar energy installation and electrical maintenance training seminars',
      'Facilitating enrollment in Pradhan Mantri Kaushal Vikas Yojana (PMKVY)',
      'Resume writing and digital interview preparation workshops',
    ],
    keyPointsHi: [
      'सोलर ऊर्जा उपकरण संस्थापन व इलेक्ट्रीशियन कौशल पर कार्यशालाएं',
      'प्रधानमंत्री कौशल विकास योजना व तकनीकी संस्थानों में पंजीकरण सहयोग',
      'रोजगार सूचना एवं डिजिटल आवेदन प्रक्रियाओं में सहायता',
    ],
  },
  {
    id: 'rural-development',
    titleEn: 'Rural Development',
    titleHi: 'ग्रामीण विकास एवं अधोसंरचना',
    category: 'Development',
    descEn:
      'Advocating for all-weather rural link roads, village solar lighting, solid waste management, and structured drainage to eliminate stagnant water puddles.',
    descHi:
      'गाँवों में पक्के संपर्क मार्ग, सोलर स्ट्रीट लाइटिंग, ठोस अपशिष्ट प्रबंधन और जलभराव मुक्त नालियों के निर्माण हेतु जन-भागीदारी एवं प्रशासन से समन्वय।',
    iconName: 'Building',
    stats: '30+ Villages Covered',
    keyPointsEn: [
      'Ground surveys of broken culverts and waterlogged village streets',
      'Promoting community-led cleanliness and solar street illumination',
      'Representing rural connectivity demands before civic authorities',
    ],
    keyPointsHi: [
      'टूटी पुलियों, कीचड़युक्त रास्तों व जलभराव का विस्तृत जमीनी सर्वेक्षण',
      'सामुदायिक स्वच्छता अभियान और सोलर स्ट्रीट लाइट की पैरवी',
      'सड़क और संपर्क मार्गों के लिए संबंधित विभागों में प्रतिवेदन',
    ],
  },
  {
    id: 'health-awareness',
    titleEn: 'Health Awareness',
    titleHi: 'स्वास्थ्य जागरूकता एवं शिविर',
    category: 'Healthcare',
    descEn:
      'Conducting seasonal health check-up camps, blood donation drives, maternal hygiene sessions, and preventive health guidance in underserved rural belts.',
    descHi:
      'नियमित स्वास्थ्य जांच शिविर, रक्तदान अभियान, मौसमी बीमारियों से बचाव, और मातृत्व पोषण एवं स्वच्छता पर ग्रामीण जागरूकता कार्यक्रम।',
    iconName: 'HeartPulse',
    stats: '1,800+ Free Checkups',
    keyPointsEn: [
      'Free blood pressure, diabetes, and vision screening camps',
      'Distribution of chlorine tablets and dengue/malaria prevention kits',
      'Support in accessing Ayushman Bharat golden cards for poor families',
    ],
    keyPointsHi: [
      'रक्तचाप, मधुमेह और नेत्र परीक्षण हेतु निःशुल्क स्वास्थ्य शिविर',
      'मच्छर जनित एवं मौसमी रोगों से बचाव हेतु दवा व जागरूकता वितरण',
      'निर्धन परिवारों के लिए आयुष्मान भारत कार्ड बनवाने में सहयोग',
    ],
  },
  {
    id: 'women-empowerment',
    titleEn: 'Women Empowerment',
    titleHi: 'महिला सशक्तिकरण',
    category: 'Empowerment',
    descEn:
      'Strengthening women self-help groups (SHGs), supporting cottage enterprises (tailoring, handicrafts), and advocating for dignity and legal literacy.',
    descHi:
      'स्वयं सहायता समूहों (SHG) का सुदृढ़ीकरण, सिलाई-कढ़ाई व लघु कुटीर कार्यों में सहयोग, और महिलाओं के कानूनी व सामाजिक अधिकारों की जानकारी।',
    iconName: 'Sparkles',
    stats: '350+ Women Supported',
    keyPointsEn: [
      'Free distribution of sewing machines and vocational tailoring classes',
      'Financial literacy sessions on banking, savings, and micro-loans',
      'Counseling and legal aid guidance for social security entitlements',
    ],
    keyPointsHi: [
      'सिलाई प्रशिक्षण शिविर एवं आत्मनिर्भरता हेतु सिलाई मशीन सहयोग',
      'बैंक बचत, स्वयं सहायता समूह गठन व सूक्ष्म ऋण पर वित्तीय साक्षरता',
      'सामाजिक सुरक्षा एवं मातृत्व कल्याण योजनाओं की जानकारी',
    ],
  },
  {
    id: 'environment-water',
    titleEn: 'Environment & Water Conservation',
    titleHi: 'पर्यावरण एवं जल संरक्षण',
    category: 'Environment',
    descEn:
      'Promoting traditional pond rejuvenation, tree plantation drives along rural roads, and rainwater harvesting techniques to tackle groundwater depletion.',
    descHi:
      'पारंपरिक तालाबों के पुनरुद्धार की पहल, सघन वृक्षारोपण अभियान, और गिरते भूजल स्तर के समाधान हेतु वर्षा जल संचयन के प्रति चेतना।',
    iconName: 'Droplets',
    stats: '5,000+ Saplings Planted',
    keyPointsEn: [
      'Plantation of native shade and fruit trees (Neem, Peepal, Jamun)',
      'Community dialogue on reviving choked ponds and stop-dams',
      'Awareness campaigns against single-use plastic in local mandis and bazaars',
    ],
    keyPointsHi: [
      'नीम, पीपल, जामुन आदि देशी छायादार पौधों का सघन रोपण',
      'गाँवों के पुराने तालाबों की सफाई व अतिक्रमण मुक्ति हेतु जन-जागृति',
      'स्थानीय कस्बों व हाट-बाजारों में प्लास्टिक निषेध जन-अभियान',
    ],
  },
  {
    id: 'scheme-awareness',
    titleEn: 'Government Scheme Awareness',
    titleHi: 'सरकारी योजनाओं की जागरूकता',
    category: 'Welfare',
    descEn:
      'Bridging information gaps so eligible farmers, artisans, and disadvantaged families can access pensions, housing subsidies, and Kisan Samman Nidhi.',
    descHi:
      'योग्य किसानों, श्रमिकों और वंचित परिवारों तक पेंशन, किसान सम्मान निधि, आवास एवं राशन योजनाओं की वास्तविक पहुंच सुनिश्चित करने में सहायता।',
    iconName: 'FileCheck',
    stats: '3,200+ Beneficiaries Guided',
    keyPointsEn: [
      'Special guidance desks for PM Kisan e-KYC and land seeding issues',
      'Old-age, widow, and disability pension application guidance',
      'Ration card correction and Ujjwala gas cylinder beneficiary assistance',
    ],
    keyPointsHi: [
      'पीएम किसान ई-केवाईसी और भूलेख सत्यापन में किसानों की सीधी मदद',
      'वृद्धावस्था, विधवा एवं दिव्यांग पेंशन फॉर्म भरने में निःशुल्क मार्गदर्शन',
      'राशन कार्ड सुधार एवं उज्ज्वला योजना लाभार्थियों को प्रक्रिया सहयोग',
    ],
  },
  {
    id: 'public-surveys',
    titleEn: 'Public Issues & Community Surveys',
    titleHi: 'जनसमस्या सर्वेक्षण एवं समाधान',
    category: 'Civic',
    descEn:
      'Conducting systematic door-to-door grievance audits across Kasganj to document drinking water purity, transformer burnouts, and local civic hurdles.',
    descHi:
      'कासगंज क्षेत्र के विभिन्न वार्डों व गाँवों में घर-घर जाकर पेयजल गुणवत्ता, बिजली ट्रांसफार्मर जलने और जल निकासी समस्याओं का व्यवस्थित संकलन।',
    iconName: 'ClipboardList',
    stats: '120+ Wards & Hamlets Audited',
    keyPointsEn: [
      'Formal compilation of local problem dossiers for sub-divisional magistrates',
      'Photographic mapping of public taps and open drain hazards',
      'Regular public listening hours (Jan Sunwai) without discrimination',
    ],
    keyPointsHi: [
      'प्रशासनिक अधिकारियों के समक्ष व्यवस्थित जनसमस्या प्रतिवेदन प्रस्तुति',
      'खराब इंडिया मार्क हैंडपंपों और खुले नालों का दस्तावेजीकरण',
      'बिना किसी भेदभाव के नियमित जनसंवाद एवं जनसुनवाई का आयोजन',
    ],
  },
  {
    id: 'community-outreach',
    titleEn: 'Community Outreach',
    titleHi: 'सामुदायिक जनसंवाद एवं संपर्क',
    category: 'Outreach',
    descEn:
      'Maintaining direct, personal contact with citizens through chaupals, festival visits, mourning solidarity, and celebrating social harmony across all sections.',
    descHi:
      'चौपालों, सामाजिक आयोजनों, सुख-दुख में सहभागिता और सभी वर्गों के बीच आपसी सद्भाव व भाईचारे को सुदृढ़ करने हेतु सतत जीवंत जनसंपर्क।',
    iconName: 'MessageSquare',
    stats: '250+ Village Chaupals',
    keyPointsEn: [
      'Regular village chaupals to listen first and speak second',
      'Inter-faith harmony and social unity initiatives',
      'Instant assistance for families facing medical or legal distress',
    ],
    keyPointsHi: [
      'गाँव-गाँव में चौपाल लगाकर लोगों के विचार और कठिनाइयां सुनना',
      'सर्वसमाज में परस्पर सद्भाव और भाईचारे को बनाए रखने का प्रयास',
      'आपात स्थिति या बीमारी में जरूरतमंद परिवारों के साथ प्रत्यक्ष खड़े रहना',
    ],
  },
];

export const PUBLIC_ISSUES: PublicIssue[] = [
  {
    id: 'roads-connectivity',
    titleEn: 'Roads & Rural Connectivity',
    titleHi: 'सड़कें एवं ग्रामीण संपर्क मार्ग',
    category: 'Infrastructure',
    descEn:
      'Potholed rural arteries, missing culverts, and unpaved farm roads impede school transit and agricultural transport to mandis.',
    descHi:
      'गाँवों को मुख्य मार्गों से जोड़ने वाली सड़कों की खस्ताहाली, टूटी पुलिया और कच्चे रास्ते जिससे किसानों व विद्यार्थियों को रोज जूझना पड़ता है।',
    focusAreaEn: 'Timely blacktop surfacing and durable bridge construction across link roads.',
    focusAreaHi: 'संपर्क मार्गों का डामरीकरण और सुरक्षित पुलिया निर्माण की त्वरित आवश्यकता।',
    iconName: 'Milestone',
  },
  {
    id: 'drainage-waterlogging',
    titleEn: 'Drainage & Waterlogging',
    titleHi: 'जल निकासी एवं जलभराव',
    category: 'Sanitation',
    descEn:
      'Monsoon overflows flood residential quarters and school compounds, causing chronic vector-borne illnesses and road erosion.',
    descHi:
      'बरसात में आबादी के बीच और स्कूलों के सामने पानी जमा होना, जिससे संक्रामक बीमारियां फैलती हैं और रास्ते क्षतिग्रस्त होते हैं।',
    focusAreaEn: 'Planned underground masonry drains connected to natural outflow channels.',
    focusAreaHi: 'नालों की नियमित गाद सफाई और प्राकृतिक निकासी तक पक्के नालों का निर्माण।',
    iconName: 'Waves',
  },
  {
    id: 'drinking-water',
    titleEn: 'Safe Drinking Water',
    titleHi: 'शुद्ध पेयजल एवं हैंडपंप',
    category: 'Health',
    descEn:
      'Defunct India Mark handpumps and high iron/fluoride content in certain belts require rapid maintenance and piped Har Ghar Jal connections.',
    descHi:
      'खराब पड़े इंडिया मार्क हैंडपंप और कई मजरों में भारी तत्वों वाला पानी, जिसके लिए त्वरित मरम्मत व स्वच्छ पाइपलाइन जल की जरूरत है।',
    focusAreaEn: 'Functional tap water delivery, testing water quality, and prompt handpump repairs.',
    focusAreaHi: 'हर घर नल योजना की वास्तविक क्रियान्वयन निगरानी और खराब हैंडपंपों की मरम्मत।',
    iconName: 'Droplet',
  },
  {
    id: 'electricity-supply',
    titleEn: 'Electricity & Transformers',
    titleHi: 'विद्युत आपूर्ति एवं ट्रांसफार्मर',
    category: 'Energy',
    descEn:
      'Burnt transformers taking weeks to replace, erratic voltages damaging irrigation pump motors, and hanging loose wires.',
    descHi:
      'ट्रांसफार्मर फुंकने पर समय से न बदला जाना, लो वोल्टेज से ट्यूबवेल मोटरों का जलना और जर्जर तारों का खतरनाक जाल।',
    focusAreaEn: '48-hour replacement SLA for burnt transformers and dedicated feeder separation for agriculture.',
    focusAreaHi: 'फुंके ट्रांसफार्मर 48 घंटे में बदलने की व्यवस्था और कृषि हेतु निर्बाध बिजली।',
    iconName: 'Zap',
  },
  {
    id: 'healthcare-facilities',
    titleEn: 'Healthcare & PHC Infrastructure',
    titleHi: 'स्वास्थ्य सेवाएं एवं प्राथमिक स्वास्थ्य केंद्र',
    category: 'Healthcare',
    descEn:
      'Shortage of MBBS doctors, missing diagnostic machines, and inadequate emergency maternal care at community health centres.',
    descHi:
      'प्राथमिक व सामुदायिक स्वास्थ्य केंद्रों पर विशेषज्ञ डॉक्टरों की कमी, जांच मशीनों की अनुपलब्धता और आपातकालीन सुविधाओं की कमी।',
    focusAreaEn: '24/7 emergency readiness, well-stocked pharmacies, and functional ambulance response.',
    focusAreaHi: '24 घंटे आपातकालीन सेवा, आवश्यक जीवनरक्षक दवाएं और त्वरित एम्बुलेंस व्यवस्था।',
    iconName: 'Stethoscope',
  },
  {
    id: 'education-schools',
    titleEn: 'Quality Education & Schools',
    titleHi: 'बेहतर शिक्षा एवं विद्यालय',
    category: 'Education',
    descEn:
      'Primary schools lacking functional toilets for girls, missing science laboratories, and high teacher-student ratios in rural schools.',
    descHi:
      'सरकारी विद्यालयों में बालिकाओं हेतु स्वच्छ शौचालय, विज्ञान प्रयोगशालाओं का अभाव और शिक्षकों की रिक्तियां।',
    focusAreaEn: 'Smart classroom facilities, clean sanitation, and sports infrastructure in every cluster.',
    focusAreaHi: 'आधुनिक शिक्षण संसाधन, नियमित खेलकूद और स्वच्छ विद्यालय परिसर।',
    iconName: 'BookOpen',
  },
  {
    id: 'youth-employment',
    titleEn: 'Youth Employment & Enterprise',
    titleHi: 'रोजगार एवं स्थानीय आजीविका',
    category: 'Economy',
    descEn:
      'Lack of local food processing or agro-industrial units forcing educated youth into distress migration to Delhi and metro hubs.',
    descHi:
      'कासगंज में कृषि प्रसंस्करण या स्थानीय उद्योग न होने से शिक्षित युवाओं का बड़े शहरों की ओर पलायन।',
    focusAreaEn: 'Local agro-based incubation centres, MSME credits, and district skill hubs.',
    focusAreaHi: 'कृषि आधारित लघु उद्यमों को प्रोत्साहन और स्थानीय रोजगार मेलों का नियमित आयोजन।',
    iconName: 'Briefcase',
  },
  {
    id: 'agriculture-livelihoods',
    titleEn: 'Agriculture & Farmer Welfare',
    titleHi: 'किसानों की समृद्धि एवं कृषि',
    category: 'Agriculture',
    descEn:
      'Stray cattle damaging standing crops, timely availability of urea/DAP seeds, and fair price realization for potato and mustard growers.',
    descHi:
      'आवारा पशुओं से फसलों की बर्बादी, समय पर खाद-बीज की उपलब्धता, और आलू व सरसों उत्पादक किसानों को लाभकारी मूल्य।',
    focusAreaEn: 'Well-managed Gaushalas, transparent procurement centres, and cold storage accessibility.',
    focusAreaHi: 'व्यवस्थित गौशाला प्रबंधन, पारदर्शी खरीद केंद्र और भंडारण सुविधा का विस्तार।',
    iconName: 'Wheat',
  },
  {
    id: 'public-transport',
    titleEn: 'Public Transportation',
    titleHi: 'सार्वजनिक परिवहन व्यवस्था',
    category: 'Transit',
    descEn:
      'Limited roadway bus connectivity from Kasganj town to interior rural tehsils like Patiali, Sahawar, and Ganjdundwara.',
    descHi:
      'तहसील मुख्यालयों और अंदरूनी गाँवों तक सरकारी रोडवेज बसों की सीमित आवृत्ति, जिससे महिलाओं व छात्रों को असुविधा।',
    focusAreaEn: 'Dedicated mini-bus routes connecting daily commuters and college students.',
    focusAreaHi: 'कॉलेज छात्रों व कामगारों के समय पर नियमित ग्रामीण बस सेवाओं का संचालन।',
    iconName: 'Bus',
  },
  {
    id: 'environmental-protection',
    titleEn: 'Environmental Protection',
    titleHi: 'पर्यावरण संरक्षण एवं हरियाली',
    category: 'Ecology',
    descEn:
      'Shrinking forest covers, illegal burning of farm stubble, and pollution in local water bodies impacting micro-climate.',
    descHi:
      'कम होता हरित दायरा, पराली और कूड़ा जलाने से बढ़ता वायु प्रदूषण और प्राकृतिक जलस्रोतों में गंदगी।',
    focusAreaEn: 'Gram-panchayat tree belts, green buffer zones along canals, and composting drives.',
    focusAreaHi: 'नहरों व मार्गों के किनारे सघन पौधरोपण और जैविक खाद निर्माण को बढ़ावा।',
    iconName: 'Leaf',
  },
  {
    id: 'water-conservation',
    titleEn: 'Water Conservation & Ponds',
    titleHi: 'जल संचयन एवं तालाब पुनरुद्धार',
    category: 'Water',
    descEn:
      'Traditional village ponds encroached or silted up, resulting in plummeting water tables across Kasganj basin.',
    descHi:
      'पुराने तालाबों पर अतिक्रमण और गाद जमा होना, जिससे कासगंज के भूजल स्तर में लगातार गिरावट दर्ज हो रही है।',
    focusAreaEn: 'De-silting village ponds, Amrit Sarovar monitoring, and recharge pit construction.',
    focusAreaHi: 'तालाबों की गाद सफाई, अमृत सरोवर योजनाओं का पारदर्शी रख-रखाव और भूजल रिचार्जिंग।',
    iconName: 'ShieldAlert',
  },
];

export const PROFESSIONAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'raghav-foundation-enterprise',
    period: '2016 – Present',
    roleEn: 'Founder / Proprietor',
    roleHi: 'संस्थापक / प्रोपराइटर',
    companyEn: 'Raghav Foundation Projects',
    companyHi: 'राघव फाउंडेशन प्रोजेक्ट्स',
    locationEn: 'Uttar Pradesh & Delhi NCR',
    locationHi: 'उत्तर प्रदेश एवं दिल्ली एनसीआर',
    descEn:
      'Leading a green energy and infrastructure solutions enterprise specializing in high-efficiency solar lighting, commercial LED street installations, and rural electrification projects.',
    descHi:
      'हरित ऊर्जा एवं बुनियादी ढांचा समाधान उद्यम का नेतृत्व; उच्च दक्षता सोलर लाइटिंग, एलईडी स्ट्रीट लाइट और ग्रामीण व नगरीय प्रकाश परियोजनाओं का क्रियान्वयन।',
    highlightsEn: [
      'Solar products & renewable micro-grid systems',
      'LED street lighting supply, installation & maintenance',
      'Successful execution of both rural panchayat and urban lighting contracts',
      'Promoting energy efficiency and cost reduction for community infrastructure',
    ],
    highlightsHi: [
      'सोलर उत्पाद एवं नवीकरणीय ऊर्जा प्रकाश प्रणालियां',
      'एलईडी स्ट्रीट लाइटिंग की आपूर्ति, संस्थापन और रख-रखाव',
      'ग्रामीण पंचायतों एवं नगरीय निकायों में सफल परियोजना क्रियान्वयन',
      'सार्वजनिक परिसंपत्तियों में ऊर्जा बचत और आधुनिक तकनीक का समावेश',
    ],
  },
  {
    id: 'ss-engineers',
    period: '2012 – 2016',
    roleEn: 'Administrative Executive',
    roleHi: 'प्रशासनिक कार्यपालक (एडमिनिस्ट्रेटिव एग्जीक्यूटिव)',
    companyEn: 'S. S. Engineers & Consultants',
    companyHi: 'एस. एस. इंजीनियर्स एंड कंसल्टेंट्स',
    locationEn: 'New Delhi',
    locationHi: 'नई दिल्ली',
    descEn:
      'Managed core administrative operations, vendor contracts, project documentation, and logistical oversight for turnkey fire-fighting plant supply and large-scale industrial installations.',
    descHi:
      'औद्योगिक व वाणिज्यिक अग्निशामक संयंत्र (फायर-फाइटिंग प्लांट) आपूर्ति व संस्थापन से संबंधित प्रशासनिक कार्यों, अनुबंधों और लॉजिस्टिक्स का सुचारू प्रबंधन।',
    highlightsEn: [
      'Fire-fighting plant supply and installation-related administration',
      'Vendor negotiations, statutory compliance, and tender documentation',
      'Cross-functional coordination with engineering and safety audit teams',
    ],
    highlightsHi: [
      'फायर-फाइटिंग संयंत्र आपूर्ति एवं संस्थापन से जुड़े प्रशासनिक मामले',
      'विक्रेता अनुबंध, वैधानिक अनुपालन और टेंडर प्रक्रिया प्रबंधन',
      'इंजीनियरिंग, खरीद और सुरक्षा परीक्षण टीमों के साथ समन्वय',
    ],
  },
  {
    id: 'raghav-foundation',
    period: '2008 – 2012',
    roleEn: 'Marketing Manager',
    roleHi: 'मार्केटिंग मैनेजर',
    companyEn: 'Raghav Foundation Projects',
    companyHi: 'राघव फाउंडेशन प्रोजेक्ट्स',
    locationEn: 'New Delhi & Western UP',
    locationHi: 'नई दिल्ली एवं पश्चिमी उत्तर प्रदेश',
    descEn:
      'Directed client relations, marketing outreach, and strategic positioning for institutional and residential construction and infrastructure projects.',
    descHi:
      'निर्माण एवं अवसंरचना विकास परियोजनाओं के विपणन, ग्राहक संपर्क, और संस्थागत प्रोजेक्ट्स के प्रचार-प्रसार का कुशल नेतृत्व।',
    highlightsEn: [
      'Construction and civil project marketing strategy',
      'Institutional business development and stakeholder communication',
      'Project lifecycle monitoring and client delivery assurance',
    ],
    highlightsHi: [
      'निर्माण एवं सिविल प्रोजेक्ट्स की विपणन रणनीति',
      'संस्थागत व्यावसायिक संबंध एवं हितधारकों से प्रभावी संवाद',
      'परियोजना समयसीमा निगरानी एवं गुणवत्ता आश्वासन',
    ],
  },
  {
    id: 'govt-contractor-social',
    period: 'Ongoing',
    roleEn: 'Government Contractor & Community Development Leader',
    roleHi: 'सरकारी संविदाकार एवं सामुदायिक विकास नेतृत्व',
    companyEn: 'Public Works & Social Initiatives',
    companyHi: 'लोक निर्माण एवं सामाजिक सरोकार',
    locationEn: 'Kasganj, Uttar Pradesh',
    locationHi: 'कासगंज, उत्तर प्रदेश',
    descEn:
      'Executing public development contracts with rigorous quality standards, while dedicating personal time and resources to grassroots social work, community surveys, and welfare trusts.',
    descHi:
      'पारदर्शी मानकों के साथ विकास कार्यों का निष्पादन, साथ ही अपना समय और संसाधन जमीनी समाज सेवा, जनसमस्या सर्वेक्षण और जनसरोकारों में समर्पित करना।',
    highlightsEn: [
      'Public utility supply and execution with strict adherence to civil standards',
      'Grassroots conflict resolution and citizen grievance advocacy',
      'Bridging government welfare mechanisms with village households',
    ],
    highlightsHi: [
      'नागरिक मानकों के अनुरूप विकास कार्यों का निष्पादन',
      'जमीनी स्तर पर सौहार्दपूर्ण संवाद एवं जनसमस्याओं की प्रभावी पैरवी',
      'सरकारी कल्याणकारी योजनाओं और ग्रामीण परिवारों के बीच सेतु का कार्य',
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'msc-maths',
    degreeEn: 'Master of Science (M.Sc.) – Mathematics',
    degreeHi: 'एम.एससी. (गणित) – मास्टर ऑफ साइंस',
    institutionEn: 'Dr. Bhimrao Ambedkar University, Agra',
    institutionHi: 'डॉ. भीमराव आंबेडकर विश्वविद्यालय, आगरा',
    year: '2011',
    detailsEn:
      'Advanced analytical coursework, statistical reasoning, mathematical modeling, and problem-solving disciplines that inform data-driven community surveys and organizational leadership.',
    detailsHi:
      'उन्नत विश्लेषणात्मक गणित, सांख्यिकीय तर्क और तार्किक निर्णय क्षमता, जो आज सामाजिक सर्वेक्षणों व पारदर्शी प्रबंधन में सहायक है।',
  },
  {
    id: 'bsc-maths',
    degreeEn: 'Bachelor of Science (B.Sc.) – Mathematics',
    degreeHi: 'बी.एससी. (गणित) – बैचलर ऑफ साइंस',
    institutionEn: 'Dr. Bhimrao Ambedkar University, Agra',
    institutionHi: 'डॉ. भीमराव आंबेडकर विश्वविद्यालय, आगरा',
    year: '2008',
    detailsEn:
      'Solid academic foundation in pure and applied mathematics, physics, and computational logic with consistent academic dedication.',
    detailsHi:
      'शुद्ध एवं व्यावहारिक गणित, भौतिकी और तार्किक सिद्धांतों में सुदृढ़ शैक्षणिक आधार एवं निरंतर उत्कृष्ट अध्ययन।',
  },
];

export const SKILLS_LIST = [
  { nameEn: 'Community Outreach', nameHi: 'सामुदायिक संपर्क', icon: 'HeartHandshake', level: 'Expert' },
  { nameEn: 'Public Communication', nameHi: 'जनसंवाद एवं वक्तृत्व', icon: 'Megaphone', level: 'Expert' },
  { nameEn: 'Rural Development', nameHi: 'ग्रामीण विकास', icon: 'TreePine', level: 'Specialist' },
  { nameEn: 'Social Awareness', nameHi: 'सामाजिक चेतना', icon: 'Eye', level: 'Specialist' },
  { nameEn: 'Project Coordination', nameHi: 'परियोजना समन्वय', icon: 'FolderKanban', level: 'Senior' },
  { nameEn: 'Administration', nameHi: 'प्रशासन एवं प्रबंधन', icon: 'Building2', level: 'Senior' },
  { nameEn: 'Marketing & Outreach', nameHi: 'विपणन एवं प्रसार', icon: 'TrendingUp', level: 'Senior' },
  { nameEn: 'Business Management', nameHi: 'व्यवसाय प्रबंधन', icon: 'Briefcase', level: 'Practitioner' },
  { nameEn: 'Digital Communication', nameHi: 'डिजिटल जनसंचार', icon: 'Smartphone', level: 'Advanced' },
  { nameEn: 'Community Survey', nameHi: 'जनसमस्या सर्वेक्षण', icon: 'FileSpreadsheet', level: 'Expert' },
  { nameEn: 'Youth Engagement', nameHi: 'युवा सहभागिता', icon: 'Users', level: 'Specialist' },
  { nameEn: 'NGO & Trust Activities', nameHi: 'ट्रस्ट व सामाजिक संस्थाएं', icon: 'Award', level: 'Specialist' },
];

export const INITIATIVES_DATA: InitiativeItem[] = [
  {
    id: 'init-jan-samvad',
    titleEn: 'Jan Samasya Comprehensive Survey',
    titleHi: 'जनसमस्या व्यापक सर्वेक्षण अभियान',
    category: 'Jan Samasya Survey',
    locationEn: 'Kasganj, Soron, Sahawar, Patiali',
    locationHi: 'कासगंज, सोरों, सहावर, पटियाली',
    date: 'August 2026',
    descEn:
      'A structured field survey collecting first-hand citizen data on drinking water salinity, road potholes, and rural health center staffing across 40+ village blocks.',
    descHi:
      '40 से अधिक गाँवों में पेयजल, टूटी सड़कों, जलभराव और स्वास्थ्य केंद्रों की स्थिति पर नागरिकों से सीधे आंकड़े संकलित करने का अभियान।',
    fullContentEn:
      'Praveen Kumar Mishra initiated this grassroots survey to ensure development demands are grounded in verifiable ground realities rather than guesswork. Volunteers documented handpump status, electric pole safety, and ration distribution timeliness.',
    fullContentHi:
      'प्रवीण कुमार मिश्र ने इस जमीनी सर्वेक्षण की शुरुआत की ताकि विकास की मांगें वास्तविक तथ्यों पर आधारित हों। कार्यकर्ताओं ने हैंडपंपों की स्थिति, बिजली खंभों की सुरक्षा और राशन वितरण की समयबद्धता का दस्तावेजीकरण किया।',
    impactMetrics: '4,800+ Households Surveyed',
    hasVideo: true,
  },
  {
    id: 'init-education-drive',
    titleEn: 'Rural Student Literacy & Guidance Drive',
    titleHi: 'ग्रामीण छात्र साक्षरता एवं मार्गदर्शन अभियान',
    category: 'Education Awareness',
    locationEn: 'Rural Kasganj Clusters',
    locationHi: 'कासगंज ग्रामीण क्षेत्र',
    date: 'July 2026',
    descEn:
      'Distributing school bags, notebook bundles, and organizing career seminars for class 10th and 12th students aspiring for higher education.',
    descHi:
      '10वीं और 12वीं के विद्यार्थियों हेतु करियर सेमिनार, उच्च शिक्षा के अवसरों पर चर्चा और जरूरतमंद छात्रों को बस्ते व अभ्यास पुस्तिकाओं का वितरण।',
    fullContentEn:
      'Conducted under the aegis of Dr. Ambedkar Gramin Vikas Trust, this initiative focuses on preventing school dropouts among girl students and connecting rural youth to polytechnic and vocational diplomas.',
    fullContentHi:
      'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट के तत्वावधान में आयोजित यह पहल बालिकाओं में ड्रॉपआउट रोकने और ग्रामीण युवाओं को तकनीकी व वोकेशनल पाठ्यक्रमों से जोड़ने पर केंद्रित रही।',
    impactMetrics: '1,200+ Study Kits Distributed',
    hasVideo: false,
  },
  {
    id: 'init-career-mentorship',
    titleEn: 'Youth Skill & Career Guidance Camps',
    titleHi: 'युवा हुनर एवं करियर मार्गदर्शन शिविर',
    category: 'Career Guidance',
    locationEn: 'Kasganj City & Bilram',
    locationHi: 'कासगंज शहर एवं बिलराम',
    date: 'June 2026',
    descEn:
      'Free interactive sessions on preparing for competitive exams, learning solar installation, and soft skills needed for modern jobs.',
    descHi:
      'प्रतियोगी परीक्षाओं की तैयारी, सोलर इंस्टॉलेशन सीखने और आधुनिक रोजगार हेतु आवश्यक कौशल पर निःशुल्क संवादात्मक सत्र।',
    fullContentEn:
      'Equipping youth with realistic career pathways. Praveen Kumar Mishra leveraged his professional engineering and renewable energy background to mentor participants on emerging technician careers.',
    fullContentHi:
      'युवाओं को वास्तविक रोजगार अवसरों से जोड़ना। प्रवीण कुमार मिश्र ने अपने इंजीनियरिंग व सोलर उद्योग के अनुभव से युवाओं को उभरते तकनीकी क्षेत्रों में आगे बढ़ने का मार्ग दिखाया।',
    impactMetrics: '650+ Youth Attended',
    hasVideo: true,
  },
  {
    id: 'init-water-conservation',
    titleEn: 'Jal Chetna & Traditional Pond Revival',
    titleHi: 'जल चेतना एवं तालाब पुनर्जीवन पहल',
    category: 'Water Conservation',
    locationEn: 'Rural Kasganj Villages & Ponds',
    locationHi: 'कासगंज ग्रामीण अंचल एवं तालाब',
    date: 'Monsoon 2026',
    descEn:
      'Community meetings to clean village pond peripheries, construct soak pits, and prevent wastewater drainage into natural water aquifers.',
    descHi:
      'गाँव के तालाबों के किनारों की सफाई, सोख्ता गड्ढों के निर्माण और प्राकृतिक जलस्रोतों में गंदे पानी के ठहराव को रोकने हेतु जन-जागृति।',
    fullContentEn:
      'Focusing on water resilience in Kasganj district. Encouraging farmers to adopt micro-irrigation and recharge pits to stabilize declining water tables.',
    fullContentHi:
      'कासगंज क्षेत्र में जल सुरक्षा पर बल। गिरते भूजल को थामने हेतु किसानों को ड्रिप सिंचाई और वर्षा जल पुनर्भरण गड्ढे बनाने के लिए जागरूक किया गया।',
    impactMetrics: '8 Village Ponds Cleaned',
    hasVideo: false,
  },
  {
    id: 'init-green-kasganj',
    titleEn: 'Harit Kasganj Tree Plantation Movement',
    titleHi: 'हरित कासगंज सघन वृक्षारोपण अभियान',
    category: 'Environmental Awareness',
    locationEn: 'Kasganj Canal Road & School Premises',
    locationHi: 'कासगंज नहर पटरी एवं विद्यालय परिसर',
    date: 'Monsoon 2026',
    descEn:
      'Planting native saplings including Peepal, Banyan, Neem, and Jamun along rural roads with community adoption pledges.',
    descHi:
      'ग्रामीण मार्गों व विद्यालयों में पीपल, बरगद, नीम और जामुन के देशी पौधों का रोपण तथा ग्रामीणों द्वारा उनकी देखरेख का संकल्प।',
    fullContentEn:
      'Every sapling was paired with a local volunteer guardian to ensure survival and protection from grazing cattle.',
    fullContentHi:
      'प्रत्येक पौधे के संरक्षण की जिम्मेदारी स्थानीय स्वयंसेवकों को सौंपी गई ताकि पौधों का सुरक्षित संवर्धन हो सके।',
    impactMetrics: '2,500+ Saplings Guarded',
    hasVideo: false,
  },
  {
    id: 'init-scheme-camp',
    titleEn: 'Kalyan Seva: Government Scheme Facilitation',
    titleHi: 'कल्याण सेवा: सरकारी योजना सहयोग शिविर',
    category: 'Government Scheme Awareness',
    locationEn: 'Ganjdundwara & Sahawar Villages',
    locationHi: 'गंजडुंडवारा एवं सहावर के गाँव',
    date: 'May 2026',
    descEn:
      'Setting up on-ground help desks to resolve PM Kisan Samman Nidhi errors, pension document delays, and ration card seeding.',
    descHi:
      'पीएम किसान सम्मान निधि में आ रही त्रुटियों, वृद्धावस्था व विधवा पेंशन के आवेदनों और राशन कार्ड सत्यापन हेतु ऑन-ग्राउंड सहायता केंद्र।',
    fullContentEn:
      'Trained youth volunteers operated laptops to check beneficiary portals for villagers free of charge, avoiding exploitation by middlemen.',
    fullContentHi:
      'प्रशिक्षित युवा कार्यकर्ताओं ने बिना किसी शुल्क के ग्रामीणों के ऑनलाइन आवेदनों की स्थिति जांची और दलालों के शोषण से बचाया।',
    impactMetrics: '1,400+ Queries Resolved',
    hasVideo: false,
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'photo-1',
    titleEn: 'Direct Public Dialogue at Kasganj Assembly',
    titleHi: 'कासगंज विशाल जनसंवाद एवं सभा',
    category: 'public_meetings',
    date: 'September 2026',
    location: 'Kasganj, UP',
    descriptionEn:
      'Praveen Kumar Mishra addressing a large gathering of farmers and community elders, articulating local issues with dignified conviction.',
    descriptionHi:
      'प्रवीण कुमार मिश्र किसानों और क्षेत्रीय नागरिकों की विशाल सभा को संबोधित करते हुए, स्थानीय समस्याओं पर स्पष्ट विचार प्रस्तुत करते हुए।',
    imageTheme: 'speech_assembly',
    accentColor: '#1e3a8a',
  },
  {
    id: 'photo-2',
    titleEn: 'Empathetic Discussion with Rural Elders',
    titleHi: 'बुजुर्ग माताओं व ग्रामीणों से आत्मीय संवाद',
    category: 'social_work',
    date: 'August 2026',
    location: 'Rural Kasganj',
    descriptionEn:
      'Listening patiently to an elderly grandmother sharing the challenges of healthcare access and family livelihoods in the village.',
    descriptionHi:
      'ग्रामीण बुजुर्ग माताजी से बैठकर आत्मीयता से उनकी समस्याएं, दवा-इलाज और परिवार की कठिनाइयों को सुनते प्रवीण कुमार मिश्र।',
    imageTheme: 'elder_dialogue',
    accentColor: '#b45309',
  },
  {
    id: 'photo-3',
    titleEn: 'Grassroots Assembly – "Aapka Bharosa Hamara Sankalp"',
    titleHi: 'जमीनी चौपाल – "आपका भरोसा हमारा संकल्प"',
    category: 'community_events',
    date: 'August 2026',
    location: 'Gram Panchayat Meeting, Kasganj',
    descriptionEn:
      'Gramin Sabha meeting where hundreds of village residents gathered under open skies to discuss village connectivity and street lighting.',
    descriptionHi:
      'खुले प्रांगण में आयोजित ग्रामीण सभा जहां सैकड़ों ग्रामीणों ने गाँव के रास्ते और प्रकाश व्यवस्था पर चर्चा की।',
    imageTheme: 'chaupal_assembly',
    accentColor: '#0f766e',
  },
  {
    id: 'photo-4',
    titleEn: 'Collaborative Digital Work & Community Log Review',
    titleHi: 'युवाओं के साथ डिजिटल जनसमस्या समीक्षा',
    category: 'professional',
    date: 'July 2026',
    location: 'Development Center Office',
    descriptionEn:
      'Reviewing the user support log and grievance dashboard with educated youth volunteers and technical associates.',
    descriptionHi:
      'शिक्षित युवा सहयोगियों के साथ लैपटॉप पर जनसमस्या पोर्टल और प्राप्त शिकायतों की प्रगति का विश्लेषण करते हुए।',
    imageTheme: 'office_digital',
    accentColor: '#1d4ed8',
  },
  {
    id: 'photo-5',
    titleEn: 'Social Harmony & Awareness Campaign',
    titleHi: 'सत्य, न्याय और सामाजिक सद्भाव विचार गोष्ठी',
    category: 'awareness',
    date: 'June 2026',
    location: 'Public Hall, Kasganj',
    descriptionEn:
      'Advocating for constructive civic participation, truth, and community unity free from divisive rhetoric.',
    descriptionHi:
      'सत्य, न्याय, सद्भाव और सकारात्मक सामाजिक परिवर्तन के संकल्प के साथ प्रबुद्ध नागरिकों की संगोष्ठी में विचार रखते हुए।',
    imageTheme: 'harmony_dialogue',
    accentColor: '#7c2d12',
  },
  {
    id: 'photo-6',
    titleEn: 'Dr. Ambedkar Gramin Vikas Trust Field Review',
    titleHi: 'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट क्षेत्र समीक्षा',
    category: 'trust_activities',
    date: 'May 2026',
    location: 'Soron Block',
    descriptionEn:
      'Assessing village educational requirements and organizing study material distribution for primary students.',
    descriptionHi:
      'प्राथमिक विद्यालयों के आसपास बच्चों की पढ़ाई की जरूरतों का जायजा लेते हुए और अध्ययन सामग्री वितरण योजना की समीक्षा।',
    imageTheme: 'trust_field',
    accentColor: '#4338ca',
  },
  {
    id: 'photo-7',
    titleEn: 'Solar & LED Infrastructure Field Inspection',
    titleHi: 'सोलर एवं एलईडी स्ट्रीट लाइट निरीक्षण',
    category: 'professional',
    date: 'April 2026',
    location: 'Kasganj Outskirts',
    descriptionEn:
      'Inspecting solar street lighting installation quality executed under rural electrification initiatives.',
    descriptionHi:
      'ग्रामीण विद्युतीकरण के तहत स्थापित सोलर स्ट्रीट लाइटों के मानकों और प्रकाश गुणवत्ता का तकनीकी निरीक्षण।',
    imageTheme: 'solar_inspection',
    accentColor: '#d97706',
  },
  {
    id: 'photo-8',
    titleEn: 'Rural Connectivity & Culvert Survey',
    titleHi: 'ग्रामीण संपर्क मार्ग एवं पुलिया स्थल निरीक्षण',
    category: 'rural_development',
    date: 'March 2026',
    location: 'Patiali Road Link',
    descriptionEn:
      'Meeting local farmers whose tractor movement was blocked by broken culverts and planning representation to authorities.',
    descriptionHi:
      'टूटी पुलिया के कारण रुके आवागमन का स्थलीय निरीक्षण और किसानों के साथ मिलकर लोक निर्माण विभाग को प्रतिवेदन तैयार करना।',
    imageTheme: 'road_inspection',
    accentColor: '#047857',
  },
];

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 'vid-choice-in-elections',
    titleEn: 'Democratic Choice & Accountability in Public Life',
    titleHi: 'लोकतंत्र में सही चुनाव और सार्वजनिक जीवन में जवाबदेही',
    category: 'public_issues',
    duration: '0:35',
    date: 'September 2026',
    location: 'Kasganj Public Address',
    descriptionEn:
      'Key excerpt from a public speech highlighting why citizens must choose leadership based on real community commitment and character rather than hollow slogans.',
    descriptionHi:
      'सार्वजनिक सभा से महत्वपूर्ण अंश: क्यों नागरिकों को खोखले नारों के बजाय वास्तविक जमीनी सेवा और चरित्र के आधार पर प्रतिनिधित्व चुनना चाहिए।',
    speechQuoteHindi:
      'चुनाव में आपका एक फैसला अगले 5 साल के भविष्य की दिशा तय करता है। इसलिए सोच-समझकर अपने स्वाभिमान और क्षेत्र के विकास के लिए फैसला कीजिए।',
    speechQuoteEnglish:
      'Your choice in elections determines five years of collective progress. Make choices based on integrity, grassroots action, and sustainable regional development.',
    keyTakeawayEn: 'Electoral decisions shape five full years of regional development and community dignity.',
    keyTakeawayHi: 'चुनावी फैसला पूरे पांच वर्षों के विकास और क्षेत्रीय सम्मान को निर्धारित करता है।',
  },
  {
    id: 'vid-direct-address-office',
    titleEn: 'A Sincere Appeal to the People: "Give One Genuine Opportunity"',
    titleHi: 'क्षेत्रवासियों से विनम्र संवाद: "एक बार सेवा का मौका देकर देखें"',
    category: 'interviews',
    duration: '0:42',
    date: 'August 2026',
    location: 'Kasganj Office Study',
    descriptionEn:
      'A warm, direct-to-camera address to the people of Kasganj, sharing his transparent vision for social change, uncompromised honesty, and dedication to public welfare.',
    descriptionHi:
      'कासगंज की जनता से सीधा व विनम्र संवाद: "बहुतों को देखा, बहुत कुछ सुना... अब एक बार मुझको सेवा का मौका देकर देख लीजिए। वादा है, निराश नहीं होंगे।"',
    speechQuoteHindi:
      'बहुतों को देखा, बहुत कुछ सुना, अब एक बार मुझको मौका देकर देख लीजिए। वादा है, निराश नहीं होंगे।',
    speechQuoteEnglish:
      'You have seen and heard many over the years. Give me one genuine opportunity to serve with devotion. I promise you will not be disappointed.',
    keyTakeawayEn: 'Personal pledge of transparent, accessible, and energetic service for every citizen.',
    keyTakeawayHi: 'हर नागरिक के लिए सुलभ, पारदर्शी और समर्पित जनसेवा का व्यक्तिगत संकल्प।',
  },
  {
    id: 'vid-speech-jan-samwad',
    titleEn: 'Speech on Social Justice, Unity, and Honest Representation',
    titleHi: 'समाजिक न्याय, सर्वसमाज एकता और ईमानदार जनसेवा पर विचार',
    category: 'social_work',
    duration: '1:15',
    date: 'July 2026',
    location: 'Rural Assembly, Kasganj',
    descriptionEn:
      'Speaking at the decorated podium regarding constructive education, ending political commercialization, and prioritizing the weakest sections of society.',
    descriptionHi:
      'मंच से राजनीति के व्यवसायीकरण का विरोध, शिक्षित समाज का दायित्व, और समाज के सबसे कमजोर वर्ग के उत्थान पर स्पष्ट विचार।',
    speechQuoteHindi:
      'गलत के खिलाफ आवाज़ उठाना हर शिक्षित नागरिक की जिम्मेदारी है। जब तक अंतिम व्यक्ति को सम्मान और न्याय नहीं मिलता, हमारा कार्य अधूरा है।',
    speechQuoteEnglish:
      'Raising voice against wrongdoing is the responsibility of every educated citizen. Our mission remains incomplete until the last person receives justice and dignity.',
    keyTakeawayEn: 'Public life is a sacred trust to serve humanity, not a business enterprise.',
    keyTakeawayHi: 'जनसेवा एक पवित्र उत्तरदायित्व है, कोई व्यापारिक उद्यम नहीं।',
  },
  {
    id: 'vid-rural-water-discussion',
    titleEn: 'Field Dialogue: Groundwater & Clean Drinking Water Audit',
    titleHi: 'जमीनी संवाद: भूजल स्तर एवं स्वच्छ पेयजल सर्वेक्षण',
    category: 'development',
    duration: '2:10',
    date: 'June 2026',
    location: 'Sahawar Block Villages',
    descriptionEn:
      'Walking through village lanes, inspecting malfunctioning handpumps and interacting with mothers about tap water safety.',
    descriptionHi:
      'गाँव की गलियों में जाकर खराब हैंडपंपों की जांच और माताओं-बहनों से पीने के पानी की शुद्धता पर बातचीत।',
    keyTakeawayEn: 'Clean water is a fundamental right, not an administrative luxury.',
    keyTakeawayHi: 'शुद्ध पेयजल प्रत्येक परिवार का बुनियादी अधिकार है।',
  },
];

export const MEDIA_UPDATES: MediaItem[] = [
  {
    id: 'media-1',
    titleEn: 'Social Worker Praveen Kumar Mishra Urges Focus on Rural Roads & Health Centers',
    titleHi: 'सामाजिक कार्यकर्ता प्रवीण कुमार मिश्र ने ग्रामीण सड़कों व स्वास्थ्य केंद्रों पर ध्यान देने की मांग की',
    publicationEn: 'Regional Uttar Pradesh Press Release',
    publicationHi: 'क्षेत्रीय उत्तर प्रदेश समाचार पत्र',
    date: 'September 2026',
    type: 'News',
    summaryEn:
      'In a verified press statement, Praveen Kumar Mishra highlighted the critical delay in repairing broken rural link roads in Kasganj, urging administration to address waterlogged school approaches before the coming winter term.',
    summaryHi:
      'एक अधिकृत प्रेस वक्तव्य में प्रवीण कुमार मिश्र ने कासगंज के ग्रामीण संपर्क मार्गों की मरम्मत में हो रही देरी को रेखांकित किया और विद्यालयों के पास जलभराव को प्राथमिकता से दूर करने का आग्रह किया।',
    verified: true,
  },
  {
    id: 'media-2',
    titleEn: 'Education Kits Distributed to Over 500 Primary Students in Kasganj',
    titleHi: 'कासगंज में 500 से अधिक प्राथमिक विद्यार्थियों को शिक्षण सामग्री किट का वितरण',
    publicationEn: 'Dainik Jagran / Amar Ujala Bureau Coverage',
    publicationHi: 'दैनिक जागरण / अमर उजाला ब्यूरो रिपोर्ट',
    date: 'August 2026',
    type: 'News',
    summaryEn:
      'Dr. Ambedkar Gramin Vikas Trust organized a distribution camp where Praveen Kumar Mishra encouraged children to pursue mathematics and science, emphasizing that education is the supreme instrument of social empowerment.',
    summaryHi:
      'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट द्वारा आयोजित शिविर में प्रवीण कुमार मिश्र ने बच्चों को गणित और विज्ञान के अध्ययन हेतु प्रेरित करते हुए कहा कि शिक्षा ही सामाजिक उत्थान का सबसे सशक्त माध्यम है।',
    verified: true,
  },
  {
    id: 'media-3',
    titleEn: 'Public Statement: Politics Must Be Public Service, Not Commercial Enterprise',
    titleHi: 'सार्वजनिक वक्तव्य: राजनीति जनसेवा का माध्यम होनी चाहिए, निजी व्यवसाय नहीं',
    publicationEn: 'Public Communication Dossier',
    publicationHi: 'जनसंवाद वक्तव्य',
    date: 'July 2026',
    type: 'Statement',
    summaryEn:
      'A principled message released to the public reiterating that genuine representatives must remain accountable to farmers, laborers, and youth rather than personal enrichment.',
    summaryHi:
      'जनता के नाम विचार संदेश जिसमें स्पष्ट किया गया कि जनप्रतिनिधियों को निजी लाभ के बजाय किसानों, मजदूरों और युवाओं के प्रति सदैव समर्पित व पारदर्शी रहना चाहिए।',
    verified: true,
  },
  {
    id: 'media-4',
    titleEn: 'Expert Interview on Rural Solar Street Lighting and Clean Energy Adoption',
    titleHi: 'ग्रामीण सोलर स्ट्रीट लाइट एवं स्वच्छ ऊर्जा पर विशेषज्ञ साक्षात्कार',
    publicationEn: 'Energy & Infrastructure Quarterly',
    publicationHi: 'ऊर्जा एवं अवसंरचना पत्रिका',
    date: 'June 2026',
    type: 'Interview',
    summaryEn:
      'Discussing his professional work with Raghav Foundation Projects on deploying durable LED lighting and solar panels tailored for village panchayat climate conditions.',
    summaryHi:
      'राघव फाउंडेशन प्रोजेक्ट्स के माध्यम से ग्रामीण पंचायतों में टिकाऊ एलईडी लाइटिंग और सौर ऊर्जा उपकरणों के सफल उपयोग पर अपने तकनीकी अनुभव साझा किए।',
    verified: true,
  },
];

export const TRUST_DETAILS = {
  name: 'Dr. Ambedkar Gramin Vikas Trust',
  nameHindi: 'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट',
  taglineEn: 'Committed to Grassroots Social Upliftment, Education, and Rural Self-Reliance',
  taglineHi: 'जमीनी सामाजिक उत्थान, शिक्षा और ग्रामीण आत्मनिर्भरता को समर्पित',
  associatedWith: 'Praveen Kumar Mishra',
  descriptionEn:
    'Dr. Ambedkar Gramin Vikas Trust is a dedicated social-development non-profit initiative closely associated with Praveen Kumar Mishra. Rooted in the humanitarian ethos of Babasaheb Dr. B. R. Ambedkar, the Trust actively promotes equal opportunity, educational awareness, rural healthcare, women self-reliance, and youth skills.',
  descriptionHi:
    'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट प्रवीण कुमार मिश्र से सम्बद्ध एक अग्रणी सामाजिक विकास संस्था है। परमपूज्य बाबासाहेब डॉ. भीमराव आंबेडकर के समतामूलक मानवीय विचारों से प्रेरित यह ट्रस्ट ग्रामीण शिक्षा, स्वास्थ्य जागरूकता, महिला सशक्तिकरण और युवाओं के कौशल विकास हेतु निरंतर समर्पित है।',
  corePillars: [
    {
      titleEn: 'Education & Literacy',
      titleHi: 'शिक्षा एवं साक्षरता',
      descEn: 'Free learning kits, remedial mentoring, and girl-child scholarship guidance.',
      descHi: 'निःशुल्क शिक्षण किट, अतिरिक्त मार्गदर्शन और बालिका छात्रवृत्ति सहायता।',
    },
    {
      titleEn: 'Health Awareness',
      titleHi: 'स्वास्थ्य जागरूकता',
      descEn: 'Preventive health check-up camps, hygiene education, and blood donation drives.',
      descHi: 'नियमित स्वास्थ्य जांच शिविर, स्वच्छता जागरूकता और रक्तदान अभियान।',
    },
    {
      titleEn: 'Rural Development',
      titleHi: 'ग्रामीण विकास',
      descEn: 'Community infrastructure advocacy, link roads, and village pond preservation.',
      descHi: 'गाँवों के संपर्क मार्ग, जल निकासी और पारंपरिक तालाबों का संरक्षण।',
    },
    {
      titleEn: 'Employment & Skills',
      titleHi: 'रोजगार एवं कौशल',
      descEn: 'Vocational guidance, solar technology seminars, and resume building.',
      descHi: 'व्यावसायिक मार्गदर्शन, सोलर तकनीक प्रशिक्षण और करियर परामर्श।',
    },
    {
      titleEn: 'Women Empowerment',
      titleHi: 'महिला सशक्तिकरण',
      descEn: 'Sewing machine skill camps, SHG micro-finance literacy, and legal awareness.',
      descHi: 'सिलाई प्रशिक्षण शिविर, स्वयं सहायता समूह गठन और कानूनी साक्षरता।',
    },
    {
      titleEn: 'Environmental Protection',
      titleHi: 'पर्यावरण संरक्षण',
      descEn: 'Native tree plantation, water harvesting promotion, and clean village drives.',
      descHi: 'सघन पौधरोपण, जल संचयन जागरूकता और प्लास्टिक मुक्ति अभियान।',
    },
    {
      titleEn: 'Youth Development',
      titleHi: 'युवा विकास',
      descEn: 'Village sports tournaments, leadership seminars, and ethical civic education.',
      descHi: 'ग्रामीण खेल प्रतियोगिताएं, नेतृत्व कार्यशालाएं और नागरिक कर्तव्य।',
    },
    {
      titleEn: 'Scheme Awareness',
      titleHi: 'सरकारी योजना जागरूकता',
      descEn: 'Connecting poor families with PM Kisan, pensions, and Ayushman cards.',
      descHi: 'पीएम किसान, वृद्धावस्था पेंशन और आयुष्मान भारत कार्ड में सहायता।',
    },
    {
      titleEn: 'Community Surveys',
      titleHi: 'सामुदायिक सर्वेक्षण',
      descEn: 'Documenting village civic issues with empirical data for administrative review.',
      descHi: 'गाँवों की वास्तविक समस्याओं का तथ्यात्मक सर्वेक्षण और प्रशासनिक प्रतिवेदन।',
    },
    {
      titleEn: 'Social Harmony',
      titleHi: 'सामाजिक समरसता',
      descEn: 'Promoting goodwill, mutual respect, and united civic action across all communities.',
      descHi: 'सभी वर्गों के बीच आपसी सद्भाव, सम्मान और साझा सामाजिक प्रगति।',
    },
  ],
};
