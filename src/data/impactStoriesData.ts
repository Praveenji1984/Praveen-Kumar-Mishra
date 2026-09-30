export interface ImpactStory {
  id: string;
  titleEn: string;
  titleHi: string;
  villageEn: string;
  villageHi: string;
  constituencyEn: string;
  constituencyHi: string;
  dateEn: string;
  dateHi: string;
  category: 'civic_road' | 'solar_lighting' | 'water_sanitation' | 'youth_education' | 'farmers_power' | 'health_relief';
  categoryLabelEn: string;
  categoryLabelHi: string;
  beneficiariesCount: string;
  theChallengeEn: string;
  theChallengeHi: string;
  theActionEn: string;
  theActionHi: string;
  theResultEn: string;
  theResultHi: string;
  imageTheme: 'culvert_repair' | 'solar_lighting' | 'borewell_water' | 'study_center' | 'transformer_repair' | 'health_camp';
  verifiedStatusEn: string;
  verifiedStatusHi: string;
  fieldVerificationDate: string;
  testimonial: {
    quoteEn: string;
    quoteHi: string;
    authorEn: string;
    authorHi: string;
    roleEn: string;
    roleHi: string;
    avatarInitials: string;
  };
}

export const IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'story-culvert-namaini',
    titleEn: 'Culvert Reconstruction & Road De-Watering',
    titleHi: 'पुलिया मरम्मत एवं जल निकासी बहाली अभियान',
    villageEn: 'Village Namaini, Kasganj Block',
    villageHi: 'ग्राम नमैनी, कासगंज ब्लॉक',
    constituencyEn: '100 - Kasganj Vidhan Sabha',
    constituencyHi: '100 - कासगंज विधानसभा क्षेत्र',
    dateEn: 'August 2026',
    dateHi: 'अगस्त 2026',
    category: 'civic_road',
    categoryLabelEn: 'Civic Infrastructure & Roads',
    categoryLabelHi: 'सड़क व नागरिक अवसंरचना',
    beneficiariesCount: '220+ Farmers & Families',
    theChallengeEn:
      'A collapsed agricultural culvert blocked tractor access to 90 acres of farmland and flooded the main approach road for over 3 months, isolating school children and stalling potato transport.',
    theChallengeHi:
      'एक टूटी हुई कृषि पुलिया के कारण 90 एकड़ खेतों में ट्रैक्टरों का आवागमन ठप था और पिछले 3 महीनों से मुख्य संपर्क मार्ग पर गंदा पानी भरा हुआ था। इससे स्कूली बच्चों का निकलना दूभर था और फसल ढुलाई रुक गई थी।',
    theActionEn:
      'Praveen Kumar Mishra held an on-site chaupal, surveyed the gradient with local youth, submitted a technical representation to the PWD Executive Engineer, and coordinated interim gravel paving and manual clearing.',
    theActionHi:
      'प्रवीण कुमार मिश्र ने मौके पर पहुंचकर चौपाल की, युवाओं के साथ ढलान का स्थलीय सर्वेक्षण किया, लोक निर्माण विभाग के अधिशासी अभियंता को तकनीकी ज्ञापन सौंपा और स्वयंसेवकों के सहयोग से तात्कालिक पत्थर-गिट्टी डलवाकर नाले की सफाई करवाई।',
    theResultEn:
      'Road passage restored within 5 days; permanent drainage sanctioned in district records. Over 220 agricultural households regained smooth transit for their harvest.',
    theResultHi:
      'मात्र 5 दिन के भीतर मार्ग पूरी तरह सुचारू हो गया और जिला अभिलेखों में पक्के निर्माण की संस्तुति हुई। 220 से अधिक कृषक परिवारों को अपनी फसल मंडी ले जाने का सुरक्षित रास्ता मिला।',
    imageTheme: 'culvert_repair',
    verifiedStatusEn: 'Field Verified by Village Committee',
    verifiedStatusHi: 'ग्राम चौपाल समिति द्वारा स्थलीय सत्यापित',
    fieldVerificationDate: '14 August 2026',
    testimonial: {
      quoteEn:
        '"Officials kept ignoring our petitions for months. Praveen ji inspected the spot in knee-deep water, called the engineers right in front of us, and resolved it. That is what a real local leader does."',
      quoteHi:
        '"महीनों से कोई अधिकारी हमारी सुनने नहीं आ रहा था। प्रवीण भैया खुद घुटनों तक भरे पानी में उतरे, हमारे सामने अधिकारियों से बात की और 5 दिन में रास्ता खुलवा दिया। सच्चा जनसेवक ऐसा ही होता है।"',
      authorEn: 'Harishankar Rajput',
      authorHi: 'हरिशंकर राजपूत',
      roleEn: 'Local Farmer & Senior Resident, Namaini',
      roleHi: 'स्थानीय किसान एवं वरिष्ठ नागरिक, ग्राम नमैनी',
      avatarInitials: 'HR',
    },
  },
  {
    id: 'story-solar-girls-school',
    titleEn: 'Solar Lighting at Dark Intersections & Girls’ Route',
    titleHi: 'बालिका विद्यालय मार्ग व तिराहे पर सौर प्रकाश व्यवस्था',
    villageEn: 'Ganjdundwara Town, Ward 3 Link',
    villageHi: 'गंजडुंडवारा कस्बा, वार्ड 3 संपर्क मार्ग',
    constituencyEn: '100 - Kasganj Vidhan Sabha',
    constituencyHi: '100 - कासगंज विधानसभा क्षेत्र',
    dateEn: 'July 2026',
    dateHi: 'जुलाई 2026',
    category: 'solar_lighting',
    categoryLabelEn: 'Green Energy & Women Safety',
    categoryLabelHi: 'सौर ऊर्जा एवं महिला सुरक्षा',
    beneficiariesCount: '300+ Students Daily',
    theChallengeEn:
      'A 400-meter connecting stretch between residential colonies and the girls’ college was pitch dark after sunset due to burnt poles, forcing young female students to discontinue evening tuitions.',
    theChallengeHi:
      'आवासीय कॉलोनियों और बालिका विद्यालय के बीच का 400 मीटर लंबा रास्ता स्ट्रीट लाइटें न होने से शाम ढलते ही अंधेरे में डूब जाता था। असामाजिक तत्वों के डर से छात्राओं को शाम की कोचिंग छोड़नी पड़ रही थी।',
    theActionEn:
      'Utilized technical resources of Raghav Foundation Projects to install 4 high-lumen, standalone solar LED luminaires with automatic dusk-to-dawn sensors at key crossings at zero public expense.',
    theActionHi:
      'राघव फाउंडेशन प्रोजेक्ट्स के तकनीकी सहयोग से बिना किसी सरकारी खर्च के 4 उच्च क्षमता वाले ऑटोमैटिक सोलर एलईडी संयंत्र तिराहों और विद्यालय मार्ग पर स्थापित करवाए।',
    theResultEn:
      '100% brightly lit pathway restored safety for over 300 students and women shopkeepers returning home after sunset without power cuts.',
    theResultHi:
      'शत-प्रतिशत जगमगाता मार्ग तैयार हुआ। बिजली कटौती के बावजूद 300 से अधिक छात्राओं और महिलाओं को निर्भय आवागमन की स्थायी सुरक्षा मिली।',
    imageTheme: 'solar_lighting',
    verifiedStatusEn: 'Installed & Verified Active by Residents',
    verifiedStatusHi: 'नागरिकों द्वारा सक्रिय सत्यापित',
    fieldVerificationDate: '22 July 2026',
    testimonial: {
      quoteEn:
        '"As mothers, we were terrified whenever our daughters were late from coaching. The new solar lights have transformed this road into a bustling, safe market route."',
      quoteHi:
        '"शाम होते ही हम माताओं की जान हलक में रहती थी जब तक बच्चियां कोचिंग से न लौटें। इन सौर लाइटों के लगने से अंधेरा दूर हुआ और अब पूरा रास्ता सुरक्षित महसूस होता है।"',
      authorEn: 'Smt. Savitri Devi',
      authorHi: 'श्रीमती सावित्री देवी',
      roleEn: 'Parent & Mahila Mandal Secretary',
      roleHi: 'अभिभावक एवं महिला मंडल सचिव, गंजडुंडवारा',
      avatarInitials: 'SD',
    },
  },
  {
    id: 'story-borewell-water-sidhpura',
    titleEn: 'Drinking Water Borewell & Handpump Restoration',
    titleHi: 'खराब हैंडपंप मरम्मत एवं शुद्ध पेयजल बहाली',
    villageEn: 'Sidhpura Majra, Kasganj',
    villageHi: 'सिढ़पुरा मजरा, कासगंज',
    constituencyEn: '100 - Kasganj Vidhan Sabha',
    constituencyHi: '100 - कासगंज विधानसभा क्षेत्र',
    dateEn: 'June 2026',
    dateHi: 'जून 2026',
    category: 'water_sanitation',
    categoryLabelEn: 'Clean Water & Public Health',
    categoryLabelHi: 'पेयजल एवं जनस्वास्थ्य',
    beneficiariesCount: '80+ Marginalized Families',
    theChallengeEn:
      'Three public handpumps in the labor colony had been drawing yellow silt water for 6 weeks, causing waterborne fever among young children and elderly residents.',
    theChallengeHi:
      'मजदूर बस्ती के तीन सार्वजनिक हैंडपंप पिछले 6 हफ्तों से पीला और रेतीला पानी दे रहे थे, जिससे बच्चों और बुजुर्गों में संक्रामक पेट की बीमारियां फैल रही थीं।',
    theActionEn:
      'Dr. Ambedkar Gramin Vikas Trust intervened to re-bore and replace deep-well suction pipes and constructed concrete masonry runoff aprons to prevent wastewater seepage into the water table.',
    theActionHi:
      'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट ने त्वरित पहल कर गहरी बोरिंग पाइप बदलवाई और गंदे पानी का रिसाव रोकने हेतु पक्का कंक्रीट चबूतरा व नाली का निर्माण कराया।',
    theResultEn:
      'Clean, clear, sweet potable drinking water restored; zero reported cases of waterborne illness in the subsequent month.',
    theResultHi:
      'शुद्ध, स्वच्छ और सुरक्षित पेयजल की आपूर्ति बहाल हुई; अगले महीने में बस्ती में जलजनित बीमारियों के मामलों में 95% कमी आई।',
    imageTheme: 'borewell_water',
    verifiedStatusEn: 'Health Worker & Panchayat Verified',
    verifiedStatusHi: 'स्वास्थ्य कार्यकर्ता एवं पंचायत सत्यापित',
    fieldVerificationDate: '09 June 2026',
    testimonial: {
      quoteEn:
        '"We were forced to walk 1.5 km in peak summer heat to fetch drinkable water. Praveen ji’s trust fixed the pipes with their own funds within 48 hours."',
      quoteHi:
        '"भीषण गर्मी में हमें पीने का पानी लाने के लिए डेढ़ किलोमीटर दूर जाना पड़ता था। प्रवीण जी के ट्रस्ट ने 48 घंटे में नया पाइप डलवाकर हमारी सबसे बड़ी मुश्किल हल कर दी।"',
      authorEn: 'Ram Charan Jatav',
      authorHi: 'राम चरण जाटव',
      roleEn: 'Community Elder & Resident',
      roleHi: 'वरिष्ठ नागरिक एवं बस्ती प्रतिनिधि, सिढ़पुरा',
      avatarInitials: 'RC',
    },
  },
  {
    id: 'story-competitive-reading-room',
    titleEn: 'Free Youth Competitive Exam Reading Room & Study Kits',
    titleHi: 'निःशुल्क ग्रामीण युवा स्वाध्याय केंद्र एवं पुस्तक वितरण',
    villageEn: 'Oil Mill Colony Center, Ganjdundwara',
    villageHi: 'ऑयल मिल कॉलोनी केंद्र, गंजडुंडवारा (कासगंज)',
    constituencyEn: '100 - Kasganj Vidhan Sabha',
    constituencyHi: '100 - कासगंज विधानसभा क्षेत्र',
    dateEn: 'May 2026',
    dateHi: 'मई 2026',
    category: 'youth_education',
    categoryLabelEn: 'Youth Employment & Mentorship',
    categoryLabelHi: 'युवा रोजगार एवं मार्गदर्शन (Big Aim)',
    beneficiariesCount: '65+ Rural Students Daily',
    theChallengeEn:
      'Deserving youth preparing for state police, railways, and clerical exams lacked quiet study spaces, current affairs books, and mathematics practice guides in rural hamlets.',
    theChallengeHi:
      'कासगंज के ग्रामीण युवा जो यूपी पुलिस, रेलवे और अन्य प्रतियोगी परीक्षाओं की तैयारी कर रहे थे, उनके पास शांत अध्ययन स्थल और गणित-रीजनिंग की महंगी पुस्तकों का भारी अभाव था।',
    theActionEn:
      'Praveen Kumar Mishra opened a dedicated free study hall at his Ganjdundwara office, equipped with 200+ updated textbooks, mathematics problem sets curated personally (M.Sc. Mathematics), and high-speed Wi-Fi.',
    theActionHi:
      'प्रवीण कुमार मिश्र ने अपने गंजडुंडवारा कार्यालय में निःशुल्क स्वाध्याय केंद्र शुरू किया, जहाँ 200 से अधिक पुस्तकें, स्वयं उनके गणित नोट्स (M.Sc. गणित) और वाई-फाई की सुविधा उपलब्ध कराई।',
    theResultEn:
      '65+ youth study daily in a disciplined academic environment; 4 village candidates cleared written rounds of recent state police & clerical tests.',
    theResultHi:
      'प्रतिदिन 65 से अधिक छात्र शांतिपूर्ण माहौल में पढ़ाई कर रहे हैं; हालिया राज्य स्तरीय लिखित परीक्षाओं में 4 ग्रामीण युवाओं ने सफलता हासिल की है।',
    imageTheme: 'study_center',
    verifiedStatusEn: 'Active Center with Daily Attendance Register',
    verifiedStatusHi: 'नियमित उपस्थिति पंजिका द्वारा सत्यापित',
    fieldVerificationDate: 'Ongoing Daily',
    testimonial: {
      quoteEn:
        '"Praveen Sir doesn’t just give speeches about youth—he personally sat with us and solved our tough mathematics questions. That gave me the confidence to pass my written exam."',
      quoteHi:
        '"प्रवीण सर सिर्फ भाषण नहीं देते, उन्होंने खुद हमारे साथ बैठकर गणित के कठिन प्रश्नों को हल करना सिखाया। उसी मार्गदर्शन से मेरा लिखित पेपर निकला।"',
      authorEn: 'Deepak Kumar Rajput',
      authorHi: 'दीपक कुमार राजपूत',
      roleEn: 'UP Police Aspirant & Student',
      roleHi: 'प्रतियोगी छात्र, ग्राम मोहनपुरा',
      avatarInitials: 'DK',
    },
  },
  {
    id: 'story-transformer-sahawar',
    titleEn: '28-Hour Burnt Transformer Replacement During Sowing',
    titleHi: 'धान की बुवाई में फुंके ट्रांसफार्मर का 28 घंटे में प्रतिस्थापन',
    villageEn: 'Sahawar Rural Block, Kasganj',
    villageHi: 'सहावर ग्रामीण क्षेत्र, कासगंज',
    constituencyEn: '100 - Kasganj Vidhan Sabha',
    constituencyHi: '100 - कासगंज विधानसभा क्षेत्र',
    dateEn: 'May 2026',
    dateHi: 'मई 2026',
    category: 'farmers_power',
    categoryLabelEn: 'Farmer Support & Power Grid',
    categoryLabelHi: 'अन्नदाता सहायता व विद्युत आपूर्ति',
    beneficiariesCount: '45 Smallholder Farms Saved',
    theChallengeEn:
      'A 25 kVA agricultural transformer burnt out during peak tubewell irrigation. Junior line staff demanded unauthorized fees and quoted a 10-day delay, threatening drying of young paddy seedlings.',
    theChallengeHi:
      'धान की रोपाई के दौरान 25 kVA का कृषि ट्रांसफार्मर जल गया। स्थानीय बिजली कर्मचारियों ने अवैध लेन-देन और 10 दिन का समय बताया, जिससे नव-रोपित धान की पौध सूखने के कगार पर थी।',
    theActionEn:
      'Praveen Mishra led an emergency delegation of affected farmers directly to the Executive Engineer at Kasganj, submitted official logbooks, and pressured prompt workshop dispatch.',
    theActionHi:
      'प्रवीण मिश्र ने प्रभावित किसानों के प्रतिनिधिमंडल के साथ अधिशासी अभियंता (विद्युत) कासगंज से सीधा संपर्क किया, उपभोक्ता लॉगबुक प्रस्तुत की और बिना किसी रिश्वत के तत्काल ट्रांसफार्मर रिलीज करवाया।',
    theResultEn:
      'Brand new transformer delivered and commissioned within 28 hours without paying a single rupee in bribery, saving 45 farmers’ paddy crop worth lakhs.',
    theResultHi:
      'मात्र 28 घंटे में बिना एक रुपये की रिश्वत के नया ट्रांसफार्मर स्थापित कर चालू हुआ। 45 अन्नदाताओं की लाखों रुपये की धान की फसल बर्बाद होने से बच गई।',
    imageTheme: 'transformer_repair',
    verifiedStatusEn: 'Substation Log & Farmer Verified',
    verifiedStatusHi: 'विद्युत सबस्टेशन लॉग व किसान सत्यापित',
    fieldVerificationDate: '30 May 2026',
    testimonial: {
      quoteEn:
        '"We were about to lose our entire year’s investment. When Praveen Mishra stood with us at the office, the officers acted immediately. That is the kind of fearless leader Kasganj needs."',
      quoteHi:
        '"हमारी पूरे साल की पूंजी डूबने वाली थी। जब प्रवीण मिश्र जी हमारे साथ खड़े होकर कार्यालय में बोले, तो अधिकारियों ने तुरंत काम किया। कासगंज को ऐसे ही निर्भीक नेता की जरूरत है।"',
      authorEn: 'Mahendra Singh',
      authorHi: 'महेंद्र सिंह',
      roleEn: 'Kisan Union Member & Paddy Farmer',
      roleHi: 'किसान व धान उत्पादक, सहावर',
      avatarInitials: 'MS',
    },
  },
  {
    id: 'story-eye-screening-camp',
    titleEn: 'Senior Citizen Free Eye Screening & Spectacle Camp',
    titleHi: 'वरिष्ठ नागरिक निःशुल्क नेत्र परीक्षण व चश्मा वितरण शिविर',
    villageEn: 'Gram Panchayat Bilram Road, Kasganj',
    villageHi: 'ग्राम पंचायत बिलराम रोड, कासगंज',
    constituencyEn: '100 - Kasganj Vidhan Sabha',
    constituencyHi: '100 - कासगंज विधानसभा क्षेत्र',
    dateEn: 'April 2026',
    dateHi: 'अप्रैल 2026',
    category: 'health_relief',
    categoryLabelEn: 'Healthcare & Elder Dignity',
    categoryLabelHi: 'स्वास्थ्य सेवा व वरिष्ठ सम्मान',
    beneficiariesCount: '310 Elders Screened',
    theChallengeEn:
      'Elderly rural farmworkers and home weavers suffered from neglected vision impairment and headaches, unable to travel 30 km to district hospitals for eye check-ups.',
    theChallengeHi:
      'बुजुर्ग खेतिहर मजदूरों और बुनकरों को मोतियाबिंद और नजर की कमजोरी की वजह से दैनिक काम में भारी तकलीफ थी, लेकिन पैसे और साधन के अभाव में वे जिला अस्पताल नहीं जा पा रहे थे।',
    theActionEn:
      'Under Dr. Ambedkar Gramin Vikas Trust, organized an ophthalmology camp with specialized optometrists and diagnostic refraction sets right inside the village community hall.',
    theActionHi:
      'डॉ. आंबेडकर ग्रामीण विकास ट्रस्ट के तत्वावधान में योग्य नेत्र विशेषज्ञों और मशीनों के साथ गाँव के सामुदायिक भवन में ही एक दिवसीय संपूर्ण नेत्र जांच शिविर आयोजित किया गया।',
    theResultEn:
      '310 seniors tested; 140 free custom power reading glasses distributed on-the-spot; 18 advanced cataract cases successfully registered for government-subsidized surgeries.',
    theResultHi:
      '310 वरिष्ठजनों की निःशुल्क जांच; 140 बुजुर्गों को मौके पर ही निःशुल्क चश्मे वितरित; और 18 गंभीर मोतियाबिंद रोगियों का सरकारी अस्पताल में निःशुल्क ऑपरेशन हेतु पंजीकरण।',
    imageTheme: 'health_camp',
    verifiedStatusEn: 'Optometrist & Trust Medical Log Verified',
    verifiedStatusHi: 'नेत्र चिकित्सक एवं ट्रस्ट मेडिकल रिकॉर्ड सत्यापित',
    fieldVerificationDate: '18 April 2026',
    testimonial: {
      quoteEn:
        '"I couldn’t even read the newspaper or thread a needle for years. Getting tested with respect in our own village and receiving my glasses made me feel cared for."',
      quoteHi:
        '"कई सालों से न मैं अखबार पढ़ पाती थी और न सुई में धागा डाल पाती थी। गाँव में ही इज्जत के साथ जांच हुई और चश्मा मिला। लगा कि कोई हमारे बुढ़ापे की भी चिंता करता है।"',
      authorEn: 'Smt. Shanti Devi',
      authorHi: 'श्रीमती शांति देवी',
      roleEn: 'Elder Beneficiary (Age 68)',
      roleHi: 'वरिष्ठ लाभार्थी (आयु 68 वर्ष), बिलराम',
      avatarInitials: 'SD',
    },
  },
];
