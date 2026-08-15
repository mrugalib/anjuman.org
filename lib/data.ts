import type { TranslationKey } from "./translations";

export const stats = [
  { value: "60+", label: "Publications" },
  { value: "200+", label: "Institutions Run" },
  { value: "20000+", label: "Dawah Programs" },
  { value: "1,00,00,000+", label: "Lives Reached" },
  { value: "10,00,000+", label: "Annual Attendees" },
];

export const founders = [
  {
    name: "Syed Ahmed Shah Sirikoti",
    suffix: "(R.A.)",
    role: "Founder",
    msg: "Established the Trust in 1926 to unite Sunni Muslims of the region under a single charitable and spiritual banner.",
    image: "/images/founders/syed-ahmed-shah-sirikoti.png",
    tagline: "Founded the Trust in Rangoon, 1926",
    bio: "Established the Trust in 1926 to unite Sunni Muslims of the region under a single charitable and spiritual banner, laying the foundation for a century of Dawah, education and welfare work.",
    location: "Rangoon, Burma",
    committee: "Founding Council",
    tags: ["Founder", "Dawah", "Unity"],
  },
  {
    name: "Syed Muhammad Tayyab Shah",
    suffix: "(R.A.)",
    role: "Founder",
    msg: "Expanded the Trust's education and welfare programs across Chattogram through three decades of service.",
    image: "/images/founders/syed-muhammad-tayyab-shah.png",
    tagline: "Expanded education & welfare in Chattogram",
    bio: "Expanded the Trust's education and welfare programs across Chattogram through three decades of dedicated service, opening new madrasas and welfare centres across the region.",
    location: "Chattogram, Bangladesh",
    committee: "Education Board",
    tags: ["Education", "Welfare", "Chattogram"],
  },
  {
    name: "Syed Muhammad Taher Shah",
    suffix: "(M.J.A.)",
    role: "Patron",
    msg: "Oversees the Trust's spiritual guidance and represents Anjuman at national interfaith forums.",
    image: "/images/founders/syed-muhammad-taher-shah.png",
    tagline: "Patron guiding the Trust's spiritual leadership",
    bio: "Oversees the Trust's spiritual guidance and represents Anjuman-E Rahmania at national interfaith forums, upholding the Ahle Sunnat wal Jamaat tradition across the sub-continent.",
    location: "Chattogram, Bangladesh",
    committee: "Chief Patronage",
    tags: ["Leadership", "Interfaith", "Guidance"],
  },
  {
    name: "Syed Muhammad Sabir Shah",
    suffix: "(M.J.A.)",
    role: "Patron",
    msg: "Leads the Gawsia Committee and coordinates nationwide relief efforts and disaster response for the Trust.",
    image: "/images/founders/syed-muhammad-sabir-shah.jpeg",
    tagline: "Leads Gawsia Committee relief nationwide",
    bio: "Leads the Gawsia Committee and coordinates relief efforts and disaster response across Bangladesh, overseeing emergency aid and community welfare distribution nationwide.",
    location: "Sylhet, Bangladesh",
    committee: "Gawsia Committee",
    tags: ["Relief", "Committee", "Nationwide"],
  },
];

export type Localized = { en: string; bn: string };
export type LocalizedList = { en: string[]; bn: string[] };

export type NewsItem = {
  title: Localized;
  slug: string;
  excerpt?: Localized;
  date: string;
  body: LocalizedList;
  highlights: LocalizedList;
  heroImage: string;
  gallery: string[];
};

export type NewsCategory = {
  key: string;
  label: Localized;
  featured: NewsItem & { excerpt: Localized };
  rest: NewsItem[];
};

const gausiaBandarbanRelief: NewsItem & { excerpt: Localized } = {
  title: {
    en: "Flood Relief Reaches Balaghata, Bandarban",
    bn: "বান্দরবানের বালাঘাটায় পৌঁছাল বন্যা ত্রাণ",
  },
  slug: "gausia-committee-bandarban-flood-relief",
  excerpt: {
    en: "Gausia Committee volunteers carried relief packages on foot into Balaghata, one of the hardest-to-reach flood-affected villages in the hill district of Bandarban.",
    bn: "গাউসিয়া কমিটির স্বেচ্ছাসেবকরা বান্দরবানের দুর্গম পাহাড়ি গ্রাম বালাঘাটায় পায়ে হেঁটে ত্রাণসামগ্রী পৌঁছে দেন।",
  },
  date: "Jul 14, 2026",
  heroImage: "/images/activities/gausia-bandarban-relief-1.jpg",
  gallery: [
    "/images/activities/gausia-bandarban-relief-1.jpg",
    "/images/activities/gausia-bandarban-relief-2.jpg",
    "/images/activities/gausia-bandarban-relief-3.jpg",
    "/images/activities/gausia-bandarban-relief-4.jpg",
    "/images/activities/gausia-bandarban-relief-5.jpg",
  ],
  highlights: {
    en: [
      "Relief packages carried on foot into Balaghata, Bandarban",
      "Part of a wider flood relief drive spanning hill and plain districts",
      "Packages delivered directly to flood-affected families by committee volunteers",
    ],
    bn: [
      "বান্দরবানের বালাঘাটায় পায়ে হেঁটে ত্রাণসামগ্রী পৌঁছে দেওয়া হয়",
      "পাহাড় ও সমতল জুড়ে চলমান বন্যা ত্রাণ কর্মসূচির অংশ",
      "কমিটির স্বেচ্ছাসেবকরা সরাসরি বন্যাদুর্গত পরিবারের হাতে ত্রাণ তুলে দেন",
    ],
  },
  body: {
    en: [
      "The Gausia Committee Bangladesh's relief distribution programme has reached Balaghata in Bandarban, carrying essential supplies into one of the hardest-to-reach flood-affected areas of the hill district.",
      "Volunteers in the committee's green vests carried sacks of relief materials on foot through the affected village, distributing packages directly to families whose homes had been affected by the flooding.",
      "\"From the hills to the plains, Gausiyans everywhere are engaged in the service of humanity,\" the committee said, describing the effort as part of a wider relief drive that has now reached communities across both hill and plain districts, and pledging that this tradition of service will continue, God willing, until the Day of Judgement.",
    ],
    bn: [
      "বান্দরবানের বালাঘাটায়ও পৌঁছে গেছে গাউসিয়া কমিটি বাংলাদেশ'র ত্রাণ বিতরণ কর্মসূচি।",
      "এভাবে পাহাড়-সমতল সর্বত্র গাউসিয়ানরা মানবতার সেবায় নিয়োজিত।",
      "হযরাতে কেরামের নেগাহে করমে এ ধারা কেয়ামত পর্যন্ত চলবে- ইনশাআল্লাহ্‌।",
    ],
  },
};

const gausiaDhakaQuaderiaMeeting: NewsItem = {
  title: {
    en: "Meeting on Ensuring Sustainable Education Held at Dhaka Quaderia Madrasah",
    bn: "ঢাকা কাদেরিয়া মাদরাসায় টেকসই শিক্ষা নিশ্চিতকরণ বিষয়ক মতবিনিময় সভা",
  },
  slug: "gausia-committee-dhaka-kaderia-education-meeting",
  date: "Jul 19, 2026",
  heroImage: "/images/activities/gausia-dhaka-kaderia-education-meeting-1.jpg",
  gallery: [
    "/images/activities/gausia-dhaka-kaderia-education-meeting-1.jpg",
    "/images/activities/gausia-dhaka-kaderia-education-meeting-2.jpg",
    "/images/activities/gausia-dhaka-kaderia-education-meeting-3.jpg",
  ],
  highlights: {
    en: [
      "Held at Quaderia Tayyebia Kamil Madrasah, Dhaka on 19 July 2026",
      "Organised by the Anjuman Education Management Board",
      "Chaired by AEMB Chairman Professor Dr. N.K.M. Akbar Hossain",
    ],
    bn: [
      "১৯ জুলাই ২০২৬, ঢাকা কাদেরিয়া তৈয়্যেবিয়া কামিল মাদরাসায় অনুষ্ঠিত",
      "আয়োজনে আনজুমান এডুকেশন ম্যানেজমেন্ট বোর্ড",
      "সভাপতিত্বে বোর্ডের চেয়ারম্যান প্রফেসর ড. নূ.ক.ম আকবর হোসেন",
    ],
  },
  body: {
    en: [
      "The Anjuman Education Management Board organised a 'consultation meeting on ensuring sustainable education' at Quaderia Tayyebia Kamil Madrasah in Dhaka, known as a beacon for producing sincere scholars under the Anjuman Trust in the capital.",
      "The meeting, held on Sunday, 19 July 2026, was chaired by AEMB Chairman Professor Dr. N.K.M. Akbar Hossain. Alhaj Mohammad Manjur Alam (Manju), Senior Vice President of the central Anjuman, attended as chief guest.",
      "Also present were the central Anjuman's Secretary General Alhaj Mohammed Anowar Hossain, leaders of the central Anjuman, leaders of the Dhaka Anjuman, leaders of the Education Board, and Dhaka Quaderia Madrasah's Principal Mufti Muhammad Jashim Uddin Al-Azhari along with other members of the teaching staff.",
    ],
    bn: [
      "কাদেরিয়া তৈয়্যেবিয়া কামিল মাদরাসা রাজধানী ঢাকার বুকে আনজুমান ট্রাস্ট পরিচালিত সাচ্চা আলেম তৈরির বাতিঘর হিসেবে সুপরিচিত। হযরাতে কেরামের নেগাহে কর্মে এ বাতিঘরের আলোকে আরও প্রজ্জলিত করতে 'টেকসই শিক্ষা নিশ্চিতকরণ বিষয়ক মতবিনিময় সভা'-এর আয়োজন করে আনজুমান এডুকেশন ম্যানেজমেন্ট বোর্ড।",
      "বোর্ডের চেয়ারম্যান প্রফেসর ড. নূ.ক.ম আকবর হোসেনের সভাপতিত্বে অনুষ্ঠিত সভায় প্রধান অতিথি ছিলেন কেন্দ্রীয় আনজুমানের সিনিয়র ভাইস প্রেসিডেন্ট আলহাজ্ব মোহাম্মদ মনজুর আলম (মনজু)।",
      "কেন্দ্রীয় আনজুমানের সেক্রেটারি জেনারেল আলহাজ্ব মোহাম্মদ আনোয়ার হোসেনসহ সভায় আরও উপস্থিত ছিলেন কেন্দ্রীয় আনজুমানের নেতৃবৃন্দ, ঢাকা আনজুমানের নেতৃবৃন্দ, এডুকেশন বোর্ডের নেতৃবৃন্দ এবং ঢাকা কাদেরিয়া মাদরাসার অধ্যক্ষ মুফতি মুহাম্মদ জসিম উদ্দীন আল-আযহারীসহ অন্যান্য শিক্ষকমন্ডলী।",
    ],
  },
};

const gausiaGazaAidShipment: NewsItem = {
  title: {
    en: "Gausia Committee Sends Humanitarian Aid Shipment for Gaza, Palestine",
    bn: "ফিলিস্তিনের গাজায় মানবিক সহায়তা পাঠাল গাউসিয়া কমিটি",
  },
  slug: "gausia-committee-gaza-palestine-aid-shipment",
  date: "Apr 13, 2025",
  heroImage: "/images/activities/gausia-gaza-aid-shipment-1.jpg",
  gallery: [
    "/images/activities/gausia-gaza-aid-shipment-1.jpg",
    "/images/activities/gausia-gaza-aid-shipment-2.jpg",
    "/images/activities/gausia-gaza-aid-shipment-3.jpg",
    "/images/activities/gausia-gaza-aid-shipment-4.jpg",
    "/images/activities/gausia-gaza-aid-shipment-5.jpg",
  ],
  highlights: {
    en: [
      "Pallets of relief supplies packed and loaded for shipment to Gaza",
      "Sent under the auspices of the Grand Imam of Al-Azhar's office",
      "Part of the committee's 'Love for Gaza, Palestine' humanitarian campaign",
    ],
    bn: [
      "গাজায় পাঠানোর জন্য প্যালেটে ত্রাণসামগ্রী প্যাক ও লোড করা হয়",
      "আল-আজহারের গ্র্যান্ড ইমামের কার্যালয়ের তত্ত্বাবধানে প্রেরিত",
      "কমিটির 'Love for Gaza, Palestine' মানবিক কর্মসূচির অংশ",
    ],
  },
  body: {
    en: [
      "\"Alhamdulillah — Gausia Committee Bangladesh, a humanitarian organisation, stands with the oppressed people of Palestine,\" the committee announced as it dispatched a shipment of humanitarian aid for Gaza.",
      "Warehouse photos show pallets of relief boxes packed and wrapped for transport, loaded onto flatbed trucks for onward shipment, with the consignment sent under the auspices of the office of the Grand Imam of Al-Azhar.",
      "Volunteers and committee members gathered around the 'Love for Gaza, Palestine' banner ahead of the shipment, part of the Gausia Committee's ongoing campaign in solidarity with the people of Gaza.",
    ],
    bn: [
      "আলহামদুলিল্লাহ,,, ফিলিস্তিনের মজলুমদের পাশে মানবতার সংগঠন গাউসিয়া কমিটি বাংলাদেশ।",
      "গুদামের ছবিতে দেখা যায়, পরিবহনের জন্য প্যাকেটজাত ত্রাণ বাক্সের প্যালেট ফ্ল্যাটবেড ট্রাকে তোলা হচ্ছে, আল-আজহারের গ্র্যান্ড ইমামের কার্যালয়ের তত্ত্বাবধানে এই চালান প্রেরণ করা হয়।",
      "শিপমেন্টের আগে স্বেচ্ছাসেবক ও কমিটির সদস্যরা 'Love for Gaza, Palestine' ব্যানারের সামনে একত্রিত হন, যা গাজার জনগণের প্রতি সংহতি প্রকাশের চলমান কর্মসূচির অংশ।",
    ],
  },
};

const gausiaAlimCommittee: NewsItem = {
  title: {
    en: "Alim 2nd Year Class Committee Formed at Jamea Ahmadia Sunnia",
    bn: "জামেয়া আহমদিয়া সুন্নিয়ায় আলিম ২য় বর্ষের ক্লাস কমিটি গঠন",
  },
  slug: "gausia-committee-alim-2nd-year-class-committee",
  date: "Aug 9, 2026",
  heroImage: "/images/activities/gausia-alim-2nd-year-class-committee-1.jpg",
  gallery: [
    "/images/activities/gausia-alim-2nd-year-class-committee-1.jpg",
    "/images/activities/gausia-alim-2nd-year-class-committee-2.jpg",
  ],
  highlights: {
    en: [
      "Class committee approved for the Alim 2nd year batch",
      "Formed under the Jamea Ahmadia Sunnia Kamil Madrasah branch",
      "Organised by Gausia Committee Bangladesh (JASA chapter)",
    ],
    bn: [
      "আলিম ২য় বর্ষের ব্যাচের জন্য ক্লাস কমিটি অনুমোদিত",
      "জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসা শাখার অধীনে গঠিত",
      "আয়োজনে গাউসিয়া কমিটি বাংলাদেশ (জাসা শাখা)",
    ],
  },
  body: {
    en: [
      "Gausia Committee Bangladesh has approved the class committee for the Alim 2nd year batch under its Jamea Ahmadia Sunnia Kamil Madrasah branch.",
      "The committee was formally approved on Sunday, 9 August 2026, and the newly formed body was photographed together in the madrasah's courtyard.",
    ],
    bn: [
      "আলিম ২য় বর্ষের ক্লাস কমিটি গঠন।",
      "আলহামদুলিল্লাহ, গত ৯ আগস্ট ২০২৬, রবিবার গাউসিয়া কমিটি বাংলাদেশ, জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসা শাখার আওতাধীন আলিম ২য় বর্ষের ক্লাস কমিটি অনুমোদন করা হয়েছে।",
    ],
  },
};

const gausiaRabiulAwwalWelcomeRally: NewsItem = {
  title: {
    en: "Welcome Rally Marks the Holy Month of Rabiul Awwal Sharif",
    bn: "পবিত্র মাহে রবিউল আউয়াল শরীফ উপলক্ষে স্বাগত র‍্যালি",
  },
  slug: "gausia-committee-rabiul-awwal-welcome-rally",
  date: "Aug 14, 2026",
  heroImage: "/images/activities/gausia-rabiul-awwal-welcome-rally-1.png",
  gallery: [
    "/images/activities/gausia-rabiul-awwal-welcome-rally-1.png",
    "/images/activities/gausia-rabiul-awwal-welcome-rally-2.png",
    "/images/activities/gausia-rabiul-awwal-welcome-rally-3.png",
    "/images/activities/gausia-rabiul-awwal-welcome-rally-4.png",
    "/images/activities/gausia-rabiul-awwal-welcome-rally-5.png",
  ],
  highlights: {
    en: [
      "Rally set out from the premises of Quaderia Tayyabiya Kamil Madrasah",
      "Managed by Anjuman-E Rahmania Ahmadiyya Sunnia Trust, Dhaka",
      "Held in collaboration with Gausia Committee Bangladesh, Dhaka",
    ],
    bn: [
      "কাদেরিয়া তৈয়্যেবিয়া কামিল মাদরাসা প্রাঙ্গণ থেকে র‍্যালিটি শুরু হয়",
      "ব্যবস্থাপনায় আনজুমান-এ রহমানিয়া আহমদিয়া সুন্নিয়া ট্রাস্ট, ঢাকা",
      "সহযোগিতায় গাউসিয়া কমিটি বাংলাদেশ, ঢাকা",
    ],
  },
  body: {
    en: [
      "A welcome rally marking the arrival of the holy month of Rabiul Awwal Sharif set out from the premises of Quaderia Tayyabiya Kamil Madrasah in Dhaka.",
      "Carrying green flags and a banner reading \"Ahlan Sahlan, Marhaban Marhaban\" and \"Welcome Rally for the Holy Month of Rabiul Awwal,\" scholars, students and devotees marched through the streets of the capital in celebration of the sacred month.",
      "The rally was managed by Anjuman-E Rahmania Ahmadiyya Sunnia Trust, Dhaka, in collaboration with Gausia Committee Bangladesh, Dhaka.",
    ],
    bn: [
      "রাজধানী ঢাকার কাদেরিয়া তৈয়্যেবিয়া কামিল মাদরাসা প্রাঙ্গণ থেকে পবিত্র মাহে রবিউল আউয়াল শরীফ উপলক্ষে একটি স্বাগত র‍্যালি বের হয়।",
      "সবুজ পতাকা ও \"আহলান সাহলান, মারহাবান মারহাবান\" এবং \"পবিত্র মাহে রবিউল আউয়ালের স্বাগত র‍্যালি\" লেখা ব্যানার নিয়ে আলেম-ওলামা, ছাত্র ও ভক্তবৃন্দ রাজধানীর রাজপথে পবিত্র এই মাস উদযাপনে অংশ নেন।",
      "র‍্যালিটির ব্যবস্থাপনায় ছিল আনজুমান-এ রহমানিয়া আহমদিয়া সুন্নিয়া ট্রাস্ট, ঢাকা এবং সহযোগিতায় ছিল গাউসিয়া কমিটি বাংলাদেশ, ঢাকা।",
    ],
  },
};

const researchKhairReviewMeeting: NewsItem & { excerpt: Localized } = {
  title: {
    en: "Review Meeting & Thank-You Letters for Da'wat-E Khair Thana Committees",
    bn: "পর্যালোচনা সভা ও থানা কমিটিগুলোকে ধন্যবাদপত্র প্রদান",
  },
  slug: "research-centre-khair-review-meeting-thanks-letters",
  excerpt: {
    en: "The Anjuman Research Centre convened a review meeting with the six thana committees behind the third monthly Da'wat-E Khair ijtema, presenting each with a letter of thanks.",
    bn: "তৃতীয় মাসিক দাওয়াতে খায়র ইজতিমার আয়োজক ছয়টি থানা কমিটির সঙ্গে পর্যালোচনা সভা করে আনজুমান রিসার্চ সেন্টার এবং প্রতিটি কমিটিকে ধন্যবাদপত্র প্রদান করা হয়।",
  },
  date: "Jul 29, 2026",
  heroImage: "/images/activities/research-khair-review-meeting-1.jpg",
  gallery: [
    "/images/activities/research-khair-review-meeting-1.jpg",
    "/images/activities/research-khair-review-meeting-2.jpg",
    "/images/activities/research-khair-review-meeting-3.jpg",
    "/images/activities/research-khair-review-meeting-4.jpg",
  ],
  highlights: {
    en: [
      "Review meeting held with organisers of the 3rd monthly Da'wat-E Khair ijtema",
      "Thank-you letters presented to all six participating thana committees",
      "Attended by the Da'wat-E Khair Standing Committee and Gausia Committee Bangladesh leaders",
    ],
    bn: [
      "তৃতীয় মাসিক দাওয়াতে খায়র ইজতিমার আয়োজকদের সঙ্গে পর্যালোচনা সভা অনুষ্ঠিত",
      "অংশগ্রহণকারী ছয়টি থানা কমিটিকে ধন্যবাদপত্র প্রদান করা হয়",
      "দাওয়াতে খায়র স্ট্যান্ডিং কমিটি ও গাউসিয়া কমিটি বাংলাদেশের নেতৃবৃন্দ উপস্থিত ছিলেন",
    ],
  },
  body: {
    en: [
      "On 29 July 2026, a review meeting was held with the leaders of the six thana committees that organised the third monthly Da'wat-E Khair ijtema, followed by the presentation of thank-you letters to each participating committee.",
      "The meeting was attended by the Da'wat-E Khair Standing Committee, together with leaders of Gausia Committee Bangladesh and representatives from the Khulshi, Akbar Shah, Pahartali, Kotwali East, Kotwali West and Karnaphuli thana committees.",
    ],
    bn: [
      "পর্যালোচনা সভা ও ধন্যবাদপত্র প্রদান। আজ ২৯ জুলাই'২৬, দা'ওয়াতে খায়র তৃতীয় মাসিক ইজতিমার আয়োজক ৬ থানা কমিটির দায়িত্বশীলগণের উপস্থিতিতে পর্যালোচনা সভা ও থানা কমিটিগুলোকে ধন্যবাদপত্র প্রদান করা হয়।",
      "এতে উপস্থিত ছিলেন দা'ওয়াতে খায়র স্ট্যান্ডিং কমিটি, গাউসিয়া কমিটি বাংলাদেশ, খুলশী, আকবর শাহ, পাহাড়তলী, কোতোয়ালি পূর্ব, কোতোয়ালি পশ্চিম, কর্ণফুলী থানা কমিটির নেতৃবৃন্দ।",
    ],
  },
};

const anjumanResearchCentreAbout: NewsItem & { excerpt: Localized } = {
  title: {
    en: "About Anjuman Research Centre",
    bn: "আনজুমান রিসার্চ সেন্টার পরিচিতি",
  },
  slug: "anjuman-research-centre-about",
  excerpt: {
    en: "Anjuman Research Centre serves as the Trust's hub for scholarship, writing and publications — nurturing researchers, writers and Qira'at reciters under the guidance of its Director General and senior scholars.",
    bn: "আনজুমান রিসার্চ সেন্টার ট্রাস্টের গবেষণা, লেখনী ও প্রকাশনার কেন্দ্র, যা ডাইরেক্টর জেনারেল ও সিনিয়র আলেমগণের তত্ত্বাবধানে গবেষক, লেখক ও ক্বারী তৈরিতে কাজ করে।",
  },
  date: "Aug 14, 2026",
  heroImage: "/images/activities/research-centre-about-thumb.png",
  gallery: ["/images/activities/research-centre-about-thumb.png"],
  highlights: {
    en: [
      "Serves as the Trust's centre for research, writing and publications",
      "Led by Director General Allama Abdul Mannan alongside senior scholars",
      "Organises research-writing workshops, Qira'at training and publication launches",
      "Has helped produce 200+ publications supporting the Trust's Dawah and education mission",
    ],
    bn: [
      "ট্রাস্টের গবেষণা, লেখনী ও প্রকাশনার কেন্দ্র হিসেবে কাজ করে",
      "ডাইরেক্টর জেনারেল আল্লামা আব্দুল মান্নান ও সিনিয়র আলেমগণের নেতৃত্বে পরিচালিত",
      "গবেষণা লিখন কর্মশালা, ক্বেরাত প্রশিক্ষণ ও প্রকাশনা উদ্বোধন আয়োজন করে",
      "ট্রাস্টের দাওয়াহ ও শিক্ষা লক্ষ্য পূরণে ২০০+ প্রকাশনা তৈরিতে ভূমিকা রেখেছে",
    ],
  },
  body: {
    en: [
      "Anjuman Research Centre is the research, writing and publications wing of Anjuman-E Rahmania Ahmadiyya Sunnia Trust, working to nurture scholars, writers and reciters across the Trust's institutions.",
      "Under the guidance of Director General Allama Abdul Mannan and senior scholars, the Centre organises training programmes such as the annual Gausia Qira'at Training and day-long research-writing workshops, alongside publication launches and academic roundtables.",
      "Over the years, the Centre has helped produce more than 200 publications, and continues to expand its work — from training new researchers to reviewing manuscripts — in service of the Trust's wider mission of Dawah and education.",
    ],
    bn: [
      "আনজুমান রিসার্চ সেন্টার আনজুমান-এ রহমানিয়া আহমদিয়া সুন্নিয়া ট্রাস্টের গবেষণা, লেখনী ও প্রকাশনা বিভাগ, যা ট্রাস্টের বিভিন্ন প্রতিষ্ঠানের মধ্যে আলেম, লেখক ও ক্বারী তৈরিতে কাজ করে।",
      "ডাইরেক্টর জেনারেল আল্লামা আব্দুল মান্নান ও সিনিয়র আলেমগণের তত্ত্বাবধানে সেন্টার বার্ষিক গাউসিয়া ক্বেরাত প্রশিক্ষণ, দিনব্যাপী গবেষণা লিখন কর্মশালাসহ বিভিন্ন প্রশিক্ষণ কর্মসূচি এবং প্রকাশনা উদ্বোধন ও একাডেমিক রাউন্ডটেবিল আয়োজন করে থাকে।",
      "বছরের পর বছর ধরে সেন্টার ২০০+ প্রকাশনা তৈরিতে ভূমিকা রেখেছে এবং নতুন গবেষক তৈরি থেকে শুরু করে পাণ্ডুলিপি পর্যালোচনা পর্যন্ত ট্রাস্টের দাওয়াহ ও শিক্ষার বৃহত্তর লক্ষ্য পূরণে কাজ করে চলেছে।",
    ],
  },
};

const researchWritingWorkshop: NewsItem = {
  title: {
    en: "Day-Long Workshop on Research Writing Held by Anjuman Research Centre",
    bn: "আনজুমান রিসার্চ সেন্টার আয়োজিত দিনব্যাপী গবেষণা লিখন কর্মশালা",
  },
  slug: "research-centre-research-writing-workshop",
  date: "Aug 14, 2026",
  heroImage: "/images/activities/research-writing-workshop-1.png",
  gallery: [
    "/images/activities/research-writing-workshop-1.png",
    "/images/activities/research-writing-workshop-2.png",
    "/images/activities/research-writing-workshop-3.png",
  ],
  highlights: {
    en: [
      "Organised by Anjuman Research Centre under the guidance of Dr. Shaiful Alam Huzur",
      "Day-long workshop covering the qualities, responsibilities and methods of a researcher",
      "Included a writer-verification process and timed article-writing exercises",
      "Certificates presented to participants at the closing session",
    ],
    bn: [
      "মুর্শিদের মিশন বাস্তবায়নের লক্ষ্যে আনজুমান রিসার্চ সেন্টার ও ড. সাইফুল আলম হুযুরের উদ্যোগে আয়োজিত",
      "গবেষকের গুণাবলি, দায়িত্ব ও পদ্ধতি নিয়ে দিনব্যাপী কর্মশালা",
      "লেখক যাচাইকরণ প্রক্রিয়া ও নির্দিষ্ট সময়ের মধ্যে প্রবন্ধ রচনার অনুশীলন অন্তর্ভুক্ত",
      "সমাপনী পর্বে অংশগ্রহণকারীদের সনদপত্র প্রদান করা হয়",
    ],
  },
  body: {
    en: [
      "With the aim of realising the Murshid's mission, the Anjuman Research Centre, through the tireless effort of Dr. Shaiful Alam Huzur, organised a 'Day-Long Workshop on Research Writing.'",
      "Dr. Shaiful Alam Huzur's words and the arrangements made clear that he had planned for much more, though time and circumstances did not allow all of it to be realised. No one becomes a researcher or writer in a single day — this workshop was only the beginning of a journey, and future editions are expected to be held on a deeper and larger scale, God willing.",
      "The best part of the programme was its writer-verification process, with emphasis placed on producing an article within a set time. Gratitude is owed to everyone involved, and especially to Dr. Shaiful Alam Huzur.",
    ],
    bn: [
      "মুর্শিদের মিশন বাস্তবায়নের লক্ষ্যে Anjuman Research Center ও DR. Shaiful Alam হুযুরের অক্লান্ত পরিশ্রমে আয়োজিত হয় 'দিনব্যাপী গবেষণা লিখন কর্মশালা'।",
      "ড. সাইফুল আলম হুযুরের কথা ও আয়োজনে স্পষ্ট বুঝা যায় তিনি আরো অনেক পরিকল্পনা করেছিলেন কিন্তু সময় ও পরিস্থিতি অনুকূলে না-থাকার কারণে তা বাস্তবায়ন সম্ভব হয়নি। মূলত একদিনেই যে গবেষক বা লেখক হয়ে যাবে তা ভাবার সুযোগ নেই। বরং এটি একটি যাত্রার প্রারম্ভ মাত্র। ভবিষ্যতে এই কর্মশালা আরো গভীর ও বৃহৎ আকারে হবে ইনশাআল্লাহ।",
      "এই আয়োজনের সবচেয়ে ভালো দিক হচ্ছে এখানে লেখক যাচাইকরণ প্রক্রিয়া রাখা হয়েছে। প্রবন্ধ রচনার উপর জোর প্রয়োগ করে নির্দিষ্ট সময়ের মাঝে লেখা তৈরির জন্য জোর দেয়া হয়েছে। তবে আমার জন্য বিষয়টি ভিন্ন ধরনের গুরুত্ব বহন করে। আমার স্বপ্নের সারথি এখন মুর্শিদের দিকনির্দেশনা হবে, পথিকের জন্য এ অনেক বড়ো পাওনা আলহামদুলিল্লাহ। সর্বোপরি সংশ্লিষ্ট সবার প্রতি আমি কৃতজ্ঞতা স্বীকার করছি, বিশেষ করে ড. সাইফুল স্যারের প্রতি আন্তরিক শুকরিয়া।",
    ],
  },
};

const researchQiraatTraining: NewsItem & { excerpt: Localized } = {
  title: {
    en: "Gausia Qira'at Training 2026 Begins at Alamgir Khankah Sharif",
    bn: "আলমগীর খানকাহ শরীফে শুরু হলো গাউসিয়া ক্বিরাআত প্রশিক্ষণ-২০২৬",
  },
  slug: "research-centre-gausia-qiraat-training-2026",
  excerpt: {
    en: "Gausia Qira'at Training 2026 has begun at Alamgir Khankah Sharif, running daily through Ramadan under the supervision of the Anjuman Research Centre.",
    bn: "আলমগীর খানকাহ শরীফে শুরু হয়েছে গাউসিয়া ক্বিরাআত প্রশিক্ষণ-২০২৬, রমাদ্বান জুড়ে প্রতিদিন আনজুমান রিসার্চ সেন্টারের তত্ত্বাবধানে অনুষ্ঠিত হবে।",
  },
  date: "3 Ramadan 1447 AH",
  heroImage: "/images/activities/research-qiraat-training-1.jpg",
  gallery: [
    "/images/activities/research-qiraat-training-1.jpg",
    "/images/activities/research-qiraat-training-2.jpg",
    "/images/activities/research-qiraat-training-3.jpg",
    "/images/activities/research-qiraat-training-4.jpg",
  ],
  highlights: {
    en: [
      "Daily sessions from 2:00pm to 4:00pm at Alamgir Khankah Sharif",
      "Runs from 3 Ramadan through to 24 Ramadan",
      "Organised by the Da'wat-E Khair Standing Committee, supervised by the Anjuman Research Centre",
    ],
    bn: [
      "প্রতিদিন বিকাল ২টা থেকে ৪টা পর্যন্ত আলমগীর খানকাহ শরীফে অনুষ্ঠিত হবে",
      "৩ রমাদ্বান থেকে ২৪ রমাদ্বান পর্যন্ত চলবে",
      "আয়োজনে দাওয়াতে খায়র স্ট্যান্ডিং কমিটি, তত্ত্বাবধানে আনজুমান রিসার্চ সেন্টার",
    ],
  },
  body: {
    en: [
      "Gausia Qira'at Training 2026 has begun, running daily from 3 Ramadan through to 24 Ramadan, held each afternoon from 2:00pm to 4:00pm at Alamgir Khankah Sharif.",
      "The training is organised by the Da'wat-E Khair Standing Committee, sponsored by Anjuman-E Rahmania Ahmadia Sunnia Trust, Chattogram, and supervised by the Anjuman Research Centre.",
    ],
    bn: [
      "সুখবর! শুরু হয়ে গেছে গাউসিয়া ক্বিরাআত প্রশিক্ষণ-২০২৬ || আজ ৩ রমাদ্বান থেকে ২৪ রমাদ্বান পর্যন্ত। স্থান: আলমগীর খানকাহ শরীফ, বিকাল ২টা থেকে ৪টা।",
      "আয়োজন: দা'ওয়াতে খায়র স্ট্যান্ডিং কমিটি। পৃষ্ঠপোষকতা: আনজুমান-এ রহমানিয়া আহমদিয়া সুন্নিয়া ট্রাস্ট, চট্টগ্রাম। তত্ত্বাবধানে: আনজুমান রিসার্চ সেন্টার।",
    ],
  },
};

const researchTarjumanSafarIssue: NewsItem = {
  title: {
    en: "Tarjuman-e-Ahle-Sunnat wal Jama'at — Safar 1448H Issue Published",
    bn: "মাসিক তরজুমান-এ আহলে সুন্নাত ওয়াল জামা'আত সফর ১৪৪৮ হিজরী সংখ্যা প্রকাশিত",
  },
  slug: "research-centre-tarjuman-safar-1448-issue",
  date: "Aug 14, 2026",
  heroImage: "/images/activities/research-tarjuman-safar-1448-issue.png",
  gallery: ["/images/activities/research-tarjuman-safar-1448-issue.png"],
  highlights: {
    en: [
      "Regular monthly publication of Anjuman Trust: Tarjuman-e-Ahle-Sunnat wal Jama'at",
      "Safar 1448 Hijri issue (July–August 2026) now available",
      "Copies can be collected from the Anjuman office",
    ],
    bn: [
      "আনজুমান ট্রাস্টের নিয়মিত প্রকাশনা মাসিক তরজুমান-এ আহলে সুন্নাত ওয়াল জামা'আত",
      "সফর ১৪৪৮ হিজরী সংখ্যা (জুলাই-আগস্ট ২০২৬) প্রকাশিত হয়েছে",
      "আনজুমান কার্যালয় থেকে কপি সংগ্রহ করা যাবে",
    ],
  },
  body: {
    en: [
      "Alhamdulillah! The Safar 1448 Hijri issue of Anjuman Trust's regular monthly publication, 'Tarjuman-e-Ahle-Sunnat wal Jama'at,' has been published.",
      "Readers are invited to collect their copy.",
    ],
    bn: [
      "আলহামদুলিল্লাহ্‌! আনজুমান ট্রাস্ট এর নিয়মিত প্রকাশনা- \"মাসিক তরজুমান- এ আহলে সুন্নাত ওয়াল জামা'আত\" সফর ১৪৪৮ হিজরী সংখ্যা প্রকাশিত হয়েছে।",
      "আপনার কপি সংগ্রহ করুন।",
    ],
  },
};

const educationChuetWorkshop: NewsItem & { excerpt: Localized } = {
  title: {
    en: "Day-Long Teacher Training Workshop Held at CUET IT Business Incubator",
    bn: "চুয়েট আইটি বিজনেস ইনকিউবেটরে দিনব্যাপী শিক্ষক প্রশিক্ষণ কর্মশালা",
  },
  slug: "education-board-chuet-teacher-training-workshop",
  excerpt: {
    en: "AEMB brought together nearly 180 teachers from Raozan and Rangunia's madrasahs for a day-long faculty development workshop on modern pedagogy and quality education.",
    bn: "রাউজান ও রাঙ্গুনিয়ার মাদ্রাসার প্রায় ১৮০ জন শিক্ষককে নিয়ে আধুনিক শিক্ষাদর্শ ও গুণগত শিক্ষা বিষয়ক দিনব্যাপী প্রশিক্ষণ কর্মশালার আয়োজন করে এএইএমবি।",
  },
  date: "Jun 20, 2026",
  heroImage: "/images/activities/edu-chuet-workshop-1.jpg",
  gallery: [
    "/images/activities/edu-chuet-workshop-1.jpg",
    "/images/activities/edu-chuet-workshop-2.jpg",
    "/images/activities/edu-chuet-workshop-3.jpg",
  ],
  highlights: {
    en: [
      "Around 180 teachers from 10 madrasahs across Raozan and Rangunia attended",
      "Sessions covered outcome-based learning, EdTech/AI, classroom management, discipline and exam evaluation",
      "Certificates were presented to all participating teachers at the closing ceremony",
    ],
    bn: [
      "রাউজান ও রাঙ্গুনিয়ার ১০টি মাদ্রাসার প্রায় ১৮০ জন শিক্ষক অংশগ্রহণ করেন",
      "আউটকাম বেইজড লার্নিং, তথ্যপ্রযুক্তি ও এআই, শ্রেণিকক্ষ ব্যবস্থাপনা ও মূল্যায়ন বিষয়ে আলোচনা হয়",
      "সমাপনী অনুষ্ঠানে সকল অংশগ্রহণকারী শিক্ষককে সনদপত্র প্রদান করা হয়",
    ],
  },
  body: {
    en: [
      "The Anjuman Education Management Board (AEMB), Chattogram held a day-long teacher training workshop at the CUET IT Business Incubator, aimed at improving the quality of madrasah education, spreading modern teaching methods and strengthening teachers' professional skills.",
      "Nearly 180 teachers from ten madrasahs across Raozan and Rangunia upazilas took part. The day's sessions covered the current challenges facing madrasah education and strategies to overcome them, outcome-based learning (OBL), the use of IT and artificial intelligence in education, classroom and time management, positive discipline practices, the 2011 policy abolishing corporal punishment, bullying and cyber safety, question-paper setting and answer-script evaluation, results preparation, service and leave rules, financial discipline, and effective lesson planning.",
      "AEMB Vice Chairman Alhaj M. A. Hamid, FCMA delivered the welcome address, saying the board is working continuously through teacher training, academic supervision and modern evaluation methods to ensure quality, modern and values-based education across Anjuman-affiliated madrasahs. Resource persons for the day included AEMB Chairman Professor Dr. N. K. M. Akbar Hossain, Professor Abu Saleh Mohammad Naeem Uddin, Professor Muhammad Gofran and Principal Dr. Mohammad Sarwar Uddin.",
      "The closing and certificate-distribution ceremony was chaired by Professor Dr. N. K. M. Akbar Hossain, with Anjuman-E Rahmania Ahmadia Sunnia Trust Secretary General Alhaj Mohammed Anowar Hossain as chief guest and CUET IT Business Incubator Director Professor Dr. Mohammad Moshiul Hoque as guest of honour, alongside Finance Secretary Kamar Uddin Sabur and AEMB Vice Chairman M. A. Hamid, FCMA as special guests. \"Teachers are the principal architects of a nation's future — there is no substitute for regular training and skills development if madrasah education is to remain modern and competitive,\" said Alhaj Mohammed Anowar Hossain in his address.",
      "Certificates were distributed to all participating teachers at the close of the workshop, and attendees called for such training programmes to be organised regularly going forward.",
    ],
    bn: [
      "চুয়েট আইটি বিজনেস ইনকিউবেটরে আনজুমান এডুকেশন ম্যানেজমেন্ট বোর্ডের দিনব্যাপী শিক্ষক প্রশিক্ষণ কর্মশালা অনুষ্ঠিত। মাদ্রাসা শিক্ষার গুণগত মানোন্নয়ন, আধুনিক শিক্ষাদর্শের প্রসার এবং শিক্ষকদের পেশাগত দক্ষতা উন্নয়নের লক্ষ্যে আনজুমান এডুকেশন ম্যানেজমেন্ট বোর্ড (এএইএমবি), চট্টগ্রামের উদ্যোগে এই কর্মশালা অনুষ্ঠিত হয়।",
      "কর্মশালায় রাউজান ও রাঙ্গুনিয়া উপজেলার আওতাধীন ১০টি মাদ্রাসার প্রায় ১৮০ জন শিক্ষক অংশগ্রহণ করেন। দিনব্যাপী প্রশিক্ষণে মাদ্রাসা শিক্ষার বর্তমান চ্যালেঞ্জ ও উত্তরণের কৌশল, আউটকাম বেইজড লার্নিং (ওবিএল), শিক্ষা ক্ষেত্রে তথ্যপ্রযুক্তি ও কৃত্রিম বুদ্ধিমত্তার (এআই) ব্যবহার, শ্রেণিকক্ষ ও সময় ব্যবস্থাপনা, ইতিবাচক শৃঙ্খলা চর্চা, শারীরিক শাস্তি রহিতকরণ নীতিমালা-২০১১, বুলিং ও সাইবার নিরাপত্তা, প্রশ্নপত্র প্রণয়ন, উত্তরপত্র মূল্যায়ন, ফলাফল প্রস্তুতকরণ, চাকরি ও ছুটি বিধিমালা, আর্থিক শৃঙ্খলা এবং কার্যকর পাঠ পরিকল্পনা প্রণয়ন বিষয়ে বিস্তারিত আলোচনা করা হয়।",
      "উদ্বোধনী পর্বে স্বাগত বক্তব্য প্রদান করেন আনজুমান এডুকেশন ম্যানেজমেন্ট বোর্ডের ভাইস চেয়ারম্যান এম. এ. হামিদ, এফসিএমএ। তিনি বলেন, আনজুমানভুক্ত মাদ্রাসাগুলোতে গুণগত, আধুনিক ও মূল্যবোধভিত্তিক শিক্ষা নিশ্চিত করতে বোর্ড ধারাবাহিকভাবে শিক্ষক প্রশিক্ষণ, একাডেমিক তদারকি এবং আধুনিক মূল্যায়ন পদ্ধতি বাস্তবায়নের মাধ্যমে কাজ করে যাচ্ছে। রিসোর্স পারসন হিসেবে বক্তব্য রাখেন বোর্ডের চেয়ারম্যান প্রফেসর ড. নূ ক ম. আকবর হোসেন, প্রফেসর আবু ছালেহ মোহাম্মদ নঈম উদ্দিন, প্রফেসর মুহাম্মদ গোফরান এবং অধ্যক্ষ ড. মোহাম্মদ সরওয়ার উদ্দিন।",
      "প্রশিক্ষণের সমাপনী ও সনদ বিতরণ অনুষ্ঠানে প্রধান অতিথি ছিলেন আনজুমানে রহমানিয়া আহমদিয়া সুন্নিয়া ট্রাস্টের সেক্রেটারি জেনারেল আলহাজ্ব মোহাম্মদ আনোয়ার হোসেন। গেস্ট অব অনার ছিলেন চুয়েট আইটি বিজনেস ইনকিউবেটরের পরিচালক প্রফেসর ড. মোহাম্মদ মশিউল হক। বিশেষ অতিথি ছিলেন ফাইন্যান্স সেক্রেটারি কমর উদ্দিন সবুর এবং ভাইস চেয়ারম্যান এম. এ. হামিদ, এফসিএমএ। প্রধান অতিথি বলেন, \"শিক্ষকরাই একটি জাতির ভবিষ্যৎ নির্মাণের প্রধান কারিগর। মাদ্রাসা শিক্ষাকে যুগোপযোগী ও প্রতিযোগিতামূলক করতে হলে শিক্ষকদের নিয়মিত প্রশিক্ষণ ও দক্ষতা উন্নয়নের বিকল্প নেই।\"",
      "প্রশিক্ষণ শেষে অংশগ্রহণকারী শিক্ষকদের মধ্যে সনদপত্র বিতরণ করা হয় এবং তাঁরা ভবিষ্যতেও এ ধরনের প্রশিক্ষণ কার্যক্রম নিয়মিত আয়োজনের আহ্বান জানান।",
    ],
  },
};

const khairPotiyaIjtema: NewsItem & { excerpt: Localized } = {
  title: {
    en: "Da'wat-E Khair Ijtema Held in Potiya",
    bn: "পটিয়ায় দাওয়াতে খায়র ইজতিমা অনুষ্ঠিত",
  },
  slug: "dawate-khair-potiya-ijtema",
  excerpt: {
    en: "Speakers at the Potiya ijtema called for wider outreach so ordinary Muslim men and women can easily learn the basic rulings of Islam, as Da'wat-E Khair announced its next three-month syllabus for trained Muallims.",
    bn: "পটিয়ার ইজতিমায় আলোচকগণ বলেন, মুসলিম নর-নারীদের ইসলামের মৌলিক বিধিনিষেধের জ্ঞান সহজভাবে শিখিয়ে দিতে দাওয়াতে খায়র মজলিসের প্রসার ঘটাতে হবে।",
  },
  date: "May 2, 2026",
  heroImage: "/images/activities/khair-potiya-ijtema-1.jpg",
  gallery: [
    "/images/activities/khair-potiya-ijtema-1.jpg",
    "/images/activities/khair-potiya-ijtema-2.jpg",
    "/images/activities/khair-potiya-ijtema-3.jpg",
  ],
  highlights: {
    en: [
      "Held at Potiya Shah Chand Awlia Mazar & Madrasah's adjoining Jame Masjid",
      "Organised by the Da'wat-E Khair Standing Committee with Gausia Committee Chattogram South",
      "Next three-month topic-wise syllabus announced for trained Muallims",
    ],
    bn: [
      "পটিয়া শাহচান্দ আউলিয়া মাজার ও মাদ্রাসা সংলগ্ন জামে মসজিদে অনুষ্ঠিত",
      "আয়োজনে দাওয়াতে খায়র স্ট্যান্ডিং কমিটি, সৌজন্যে গাউসিয়া কমিটি চট্টগ্রাম দক্ষিণ জেলা",
      "মুয়াল্লিমদের জন্য আগামী তিন মাসের বিষয়ভিত্তিক সিলেবাস ঘোষণা",
    ],
  },
  body: {
    en: [
      "Speakers at the Da'wat-E Khair ijtema in Potiya said the purpose of the Da'wat-E Khair Majlis is to teach the basic rulings of Islam to Muslim men and women in a simple, accessible way, and called for the movement to be expanded through wholehearted effort. Pir Sabir Shah Maddazilluhul Ali, the founder of the Majlis, has directed everyone to carry out this work with sincerity.",
      "The ijtema was held on Saturday, 2 May 2026 at 9:00am at the Jame Masjid adjoining the Potiya Shah Chand Awlia Mazar and Madrasah, organised under the supervision of the Da'wat-E Khair Standing Committee of Anjuman-E Rahmania Ahmadia Sunnia Trust, with the courtesy of the Gausia Committee Chattogram South district.",
      "The session was chaired by Da'wat-E Khair Standing Committee convener Mufti Syed Osiyor Rahman Al-Qaderi, and conducted by member secretaries Mosaheb Uddin Bakhtiar and Habibullah Master. Mufti Kazi Abdul Wajed served as chief Muallim, answering questions from attendees, while Anjuman Research Centre Director General Allama Abdul Mannan and Southern University professor Syed Jalal Uddin Al-Azhari delivered talim and discourse on contemporary issues. Maulana Imran Hasan Al-Qaderi conducted the programme and announced the next steps.",
      "The gathering, held for the Da'wat-E Khair year 2026, brought together district, upazila and union-level presidents, general secretaries and Da'wat-E Khair secretaries alongside trained Muallims and officials of the Chattogram South district committee. The ijtema closed with the announcement of a topic-wise syllabus for Muallims to teach over the next three months.",
    ],
    bn: [
      "পটিয়ায় দাওয়াতে খায়র ইজতিমা অনুষ্ঠিত। ইসলামের মৌলিক বিধি নিষেধের জ্ঞান সহজভাবে শিখিয়ে দিতে দাওয়াতে খায়র মজলিসের প্রসার ঘটাতে হবে—আলোচকবৃন্দ। পটিয়ার দাওয়াতে খায়র ইজতিমায় আলোচকগণ বলেন, মুসলিম নর নারীদেরকে ইসলামের মৌলিক বিধিনিষেধের জ্ঞান সহজভাবে শিখিয়ে দেওয়াই দাওয়াতে খায়র মজলিসের উদ্দেশ্য। তাই সর্বাত্মক প্রচেষ্টার মাধ্যমে এই মজলিসের প্রসার ঘটাতে হবে। সবাইকে আন্তরিকতা নিয়ে কাজ করতে নির্দেশ দিয়েছেন এর প্রবর্তক পীর সাবির শাহ্‌ মাদ্দাজিল্লুহুল আলী।",
      "আজ ২ মে ২০২৬ শনিবার সকাল নয়টায় পটিয়া শাহচান্দ আউলিয়া মাজার ও মাদ্রাসা সংলগ্ন জামে মসজিদে আনজুমানে রহমানিয়া আহমদিয়া সুন্নিয়া ট্রাস্ট পরিচালিত দাওয়াতে খায়র স্ট্যান্ডিং কমিটির তত্ত্বাবধানে এবং গাউসিয়া কমিটি চট্টগ্রাম দক্ষিণ জেলার সৌজন্যে এই ইজতিমা অনুষ্ঠিত হয়।",
      "দাওয়াতে খায়র স্ট্যান্ডিং কমিটির আহ্বায়ক মুফতি সৈয়দ অসিয়র রহমান আল কাদেরীর সভাপতিত্বে এবং সদস্য সচিব মোছাহেব উদ্দিন বখতিয়ার ও জনাব হাবিবউল্লাহ মাস্টারের সার্বিক পরিচালনায় অনুষ্ঠিত এই ইজতিমায় প্রধান মুয়াল্লিম হিসেবে বিভিন্ন প্রশ্নের উত্তর দেন মুফতি কাজী আবদুল ওয়াজেদ। তা'লিম ও বয়ান প্রদান করেন আনজুমান রিসার্চ সেন্টারের মহাপরিচালক আল্লামা আবদুল মান্নান এবং সাদার্ন বিশ্ববিদ্যালয়ের অধ্যাপক সৈয়দ জালাল উদ্দীন আল আজহারী। ইজতিমা সঞ্চালনার দায়িত্ব পালন করেন মাওলানা ইমরান হাসান আল কাদেরী।",
      "দাওয়াতে খায়র বর্ষ ২০২৬ উপলক্ষে আয়োজিত এই ইজতিমায় জেলা-উপজেলা ও ইউনিয়ন পর্যায়ের সভাপতি, সাধারণ সম্পাদক এবং দাওয়াতে খায়র সম্পাদকসহ প্রশিক্ষণপ্রাপ্ত সকল মুয়াল্লিম অংশগ্রহণ করেন। ইজতিমা থেকে আগামী তিন মাসের জন্য মুয়াল্লিমদের হাতে বিষয়ভিত্তিক সিলেবাস ঘোষণা করা হয়।",
    ],
  },
};

export const newsCategories: NewsCategory[] = [
  {
    key: "latest",
    label: { en: "Latest News", bn: "সর্বশেষ সংবাদ" },
    featured: gausiaBandarbanRelief,
    rest: [educationChuetWorkshop, khairPotiyaIjtema, researchKhairReviewMeeting],
  },
];

export function findNewsArticle(slug: string) {
  for (const category of newsCategories) {
    const all = [category.featured, ...category.rest];
    const article = all.find((item) => item.slug === slug);
    if (article) return { article, category };
  }
  return null;
}

export const activityCategories: NewsCategory[] = [
  {
    key: "gausia",
    label: { en: "Gausia Committee Bangladesh", bn: "গাউসিয়া কমিটি বাংলাদেশ" },
    featured: gausiaBandarbanRelief,
    rest: [gausiaGazaAidShipment, gausiaAlimCommittee, gausiaRabiulAwwalWelcomeRally],
  },
  {
    key: "research",
    label: { en: "Research Centre", bn: "রিসার্চ সেন্টার" },
    featured: anjumanResearchCentreAbout,
    rest: [researchTarjumanSafarIssue, researchWritingWorkshop, researchQiraatTraining],
  },
  {
    key: "education",
    label: { en: "Education Board", bn: "এডুকেশন বোর্ড" },
    featured: educationChuetWorkshop,
    rest: [
      gausiaDhakaQuaderiaMeeting,
      {
        title: {
          en: "Anjuman Education Management Board Completes Day-Long Primary Teacher Training Workshop",
          bn: "আঞ্জুমান এডুকেশন ম্যানেজমেন্ট বোর্ডের ইবতেদায়ী শিক্ষক প্রশিক্ষণ কর্মশালা সম্পন্ন",
        },
        slug: "education-board-teacher-training-workshop",
        date: "Aug 11, 2026",
        heroImage: "/images/activities/education-board-teacher-training-workshop-thumb.png",
        gallery: [
          "/images/activities/education-board-teacher-training-workshop-thumb.png",
          "/images/activities/education-board-teacher-training-workshop-1.png",
          "/images/activities/education-board-teacher-training-workshop-2.png",
          "/images/activities/education-board-teacher-training-workshop-3.png",
          "/images/activities/education-board-teacher-training-workshop-4.png",
        ],
        highlights: {
          en: [
            "Day-long 'Lesson Plan' training for Ebtedayee-section madrasah teachers, held 11 August 2026 (Tuesday), 8:00 AM – 4:00 PM at the Jamea Conference Hall",
            "Chief guest: AEMB Chairman Professor Dr. N.K.M. Akbar Hossain; also present: Board Secretary Principal Professor Abu Saleh Mohammad Naeem Uddin and Joint Secretary Professor Muhammad Gofran",
            "Also attended by Jamea Ahmadia Sunnia Kamil Madrasah Chairman Md. Yahiya Khan, Principal Hafez Kazi Abdul Alim Rezvi, Vice Principal Dr. ATM Liakat Ali, and Jamea Ahmadia Sunnia Women's Kamil Madrasah Principal Dr. Maulana Muhammad Sarwar Uddin",
            "Teachers from three institutions took part: Jamea Ahmadia Sunnia Kamil Madrasah, Jamea Ahmadia Sunnia Women's Kamil Madrasah, and Madrasah-e-Tayyibiah Islamia Sunnia (Halishahr)",
          ],
          bn: [
            "১১ আগস্ট ২০২৬ (মঙ্গলবার), সকাল ৮টা থেকে বিকাল ৪টা পর্যন্ত জামেয়া কনফারেন্স হলে ইবতেদায়ী শাখার শিক্ষকদের জন্য দিনব্যাপী 'লেসন প্ল্যান' প্রশিক্ষণ কর্মশালা অনুষ্ঠিত হয়",
            "প্রধান অতিথি ছিলেন AEMB চেয়ারম্যান প্রফেসর ড. নু. ক. ম. আকবর হোসেন; আরও উপস্থিত ছিলেন বোর্ড সচিব প্রিন্সিপাল প্রফেসর আবু সালেহ মোহাম্মদ নাঈম উদ্দীন ও যুগ্ম সচিব প্রফেসর মুহাম্মদ গোফরান",
            "আরও উপস্থিত ছিলেন জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসার চেয়ারম্যান জনাব আবুল মহসিন মো. ইয়াহিয়া খান, অধ্যক্ষ হাফেজ কাজী আব্দুল আলীম রেজভী, উপাধ্যক্ষ ড. এটিএম লিয়াকত আলী এবং জামেয়া আহমদিয়া সুন্নিয়া মহিলা কামিল মাদরাসার অধ্যক্ষ ড. মাওলানা মুহাম্মদ সরওয়ার উদ্দীন",
            "তিনটি প্রতিষ্ঠানের শিক্ষকবৃন্দ অংশগ্রহণ করেন: জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসা, জামেয়া আহমদিয়া সুন্নিয়া মহিলা কামিল মাদরাসা এবং মাদরাসা-এ তৈয়্যবিয়া ইসলামিয়া সুন্নিয়া, হালিশহর",
          ],
        },
        body: {
          en: [
            "The Anjuman Education Management Board (AEMB) successfully completed a day-long 'Lesson Plan' training workshop for Ebtedayee-section madrasah teachers, held on Tuesday, 11 August 2026, from 8:00 AM to 4:00 PM at the Jamea Conference Hall. The workshop aimed to improve the quality of education, introduce modern and effective teaching methods, and strengthen teachers' professional competency.",
            "AEMB Chairman Professor Dr. N.K.M. Akbar Hossain attended as chief guest. Also present were the Board's Secretary, Principal Professor Abu Saleh Mohammad Naeem Uddin, Joint Secretary Professor Muhammad Gofran, and other officials of the board.",
            "The workshop was further attended by Jamea Ahmadia Sunnia Kamil Madrasah Chairman Md. Yahiya Khan, Principal Hafez Kazi Abdul Alim Rezvi, and Vice Principal Dr. ATM Liakat Ali, along with Jamea Ahmadia Sunnia Women's Kamil Madrasah Principal Dr. Maulana Muhammad Sarwar Uddin.",
            "Teaching staff from three affiliated institutions — Jamea Ahmadia Sunnia Kamil Madrasah, Jamea Ahmadia Sunnia Women's Kamil Madrasah, and Madrasah-e-Tayyibiah Islamia Sunnia (Halishahr) — took part throughout the full-day session, covering lesson planning, classroom management, and effective teaching practices.",
            "The Education Board expects the workshop to play an important role in familiarising teachers with contemporary teaching methods, improving classroom management and instructional skills, and raising the overall standard of education across affiliated madrasahs.",
          ],
          bn: [
            "শিক্ষার গুণগত মানোন্নয়ন, আধুনিক ও কার্যকর শিক্ষাদান পদ্ধতির প্রয়োগ এবং শিক্ষকদের পেশাগত দক্ষতা বৃদ্ধির লক্ষ্যে আঞ্জুমান এডুকেশন ম্যানেজমেন্ট বোর্ড (AEMB)-এর ইবতেদায়ী শিক্ষক প্রশিক্ষণ কর্মশালা ১১ আগস্ট ২০২৬ (মঙ্গলবার) সকাল ৮টা থেকে বিকাল ৪টা পর্যন্ত জামেয়া কনফারেন্স হলে সফলভাবে সম্পন্ন হয়েছে।",
            "প্রশিক্ষণ কর্মশালায় সম্মানিত অতিথি হিসেবে উপস্থিত ছিলেন আঞ্জুমান এডুকেশন ম্যানেজমেন্ট বোর্ডের চেয়ারম্যান প্রফেসর ড. নু. ক. ম. আকবর হোসেন। এছাড়াও উপস্থিত ছিলেন বোর্ডের সম্মানিত সচিব প্রিন্সিপাল প্রফেসর আবু সালেহ মোহাম্মদ নাঈম উদ্দীন, যুগ্ম সচিব প্রফেসর মুহাম্মদ গোফরানসহ বোর্ডের সংশ্লিষ্ট কর্মকর্তাবৃন্দ।",
            "কর্মশালায় আরও উপস্থিত ছিলেন জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসার সম্মানিত চেয়ারম্যান জনাব আবুল মহসিন মো. ইয়াহিয়া খান এবং অধ্যক্ষ হাফেজ কাজী আব্দুল আলীম রেজভী, উপাধ্যক্ষ ড. এটিএম লিয়াকত আলী। পাশাপাশি উপস্থিত ছিলেন জামেয়া আহমদিয়া সুন্নিয়া মহিলা কামিল মাদরাসার সম্মানিত অধ্যক্ষ ড. মাওলানা মুহাম্মদ সরওয়ার উদ্দীন।",
            "দিনব্যাপী এই প্রশিক্ষণ কর্মশালায় জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসা, জামেয়া আহমদিয়া সুন্নিয়া মহিলা কামিল মাদরাসা এবং মাদরাসা-এ তৈয়্যবিয়া ইসলামিয়া সুন্নিয়া, হালিশহর — এই তিনটি প্রতিষ্ঠানের সম্মানিত শিক্ষকবৃন্দ সক্রিয়ভাবে অংশগ্রহণ করেন এবং লেসন প্ল্যানিং, শ্রেণিকক্ষ ব্যবস্থাপনা ও কার্যকর শিক্ষাদান কৌশল নিয়ে দিনভর প্রশিক্ষণ গ্রহণ করেন।",
            "এ ধরনের প্রশিক্ষণ কর্মশালা শিক্ষকদের সমসাময়িক শিক্ষাদান পদ্ধতি সম্পর্কে ধারণা প্রদান, শ্রেণিকক্ষ ব্যবস্থাপনা ও পাঠদান দক্ষতা উন্নয়ন এবং শিক্ষার সামগ্রিক মানোন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখবে বলে প্রত্যাশা করা যায়।",
          ],
        },
      },
      {
        title: {
          en: "AEMB Holds Faculty Development Workshop on Skilled Teachers, Modern Pedagogy and Values-Based Leadership",
          bn: "দক্ষ শিক্ষক, আধুনিক শিক্ষাপদ্ধতি ও মূল্যবোধভিত্তিক নেতৃত্ব বিষয়ে AEMB-এর ফ্যাকাল্টি ডেভেলপমেন্ট ওয়ার্কশপ",
        },
        slug: "education-board-faculty-development-workshop",
        date: "Jun 27, 2026",
        heroImage: "/images/activities/education-board-faculty-development-workshop-thumb.png",
        gallery: [
          "/images/activities/education-board-faculty-development-workshop-1.png",
          "/images/activities/education-board-faculty-development-workshop-2.png",
          "/images/activities/education-board-faculty-development-workshop-3.png",
          "/images/activities/education-board-faculty-development-workshop-4.png",
          "/images/activities/education-board-faculty-development-workshop-5.png",
          "/images/activities/education-board-faculty-development-workshop-6.png",
        ],
        highlights: {
          en: [
            "Faculty Development Workshop on 'Skilled Teachers, Modern Pedagogy and Values-Based Leadership for Ensuring Quality Education', held Saturday, 27 June 2026 at Jameah Ahmadia Sunnia Kamil Madrasah",
            "Organised by the Anjuman Education Management Board (AEMB), Chattogram",
            "Attended by madrasah teachers from Hathazari, Fatikchari, Sitakunda and Kaptai upazilas",
            "Programme concluded with certificate distribution to participating teachers",
          ],
          bn: [
            "'দক্ষ শিক্ষক, আধুনিক শিক্ষাপদ্ধতি ও মূল্যবোধভিত্তিক নেতৃত্ব' শীর্ষক ফ্যাকাল্টি ডেভেলপমেন্ট ওয়ার্কশপ ২৭ জুন ২০২৬ (শনিবার) জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসায় অনুষ্ঠিত হয়",
            "আয়োজনে ছিল আঞ্জুমান এডুকেশন ম্যানেজমেন্ট বোর্ড (AEMB), চট্টগ্রাম",
            "হাটহাজারী, ফটিকছড়ি, সীতাকুণ্ড ও কাপ্তাই উপজেলার মাদ্রাসা শিক্ষকবৃন্দ অংশগ্রহণ করেন",
            "অনুষ্ঠানের সমাপনী পর্বে অংশগ্রহণকারী শিক্ষকদের মাঝে সনদপত্র বিতরণ করা হয়",
          ],
        },
        body: {
          en: [
            "The Anjuman Education Management Board (AEMB), Chattogram organised a Faculty Development Workshop on 'Skilled Teachers, Modern Pedagogy and Values-Based Leadership for Ensuring Quality Education' on Saturday, 27 June 2026 at Jameah Ahmadia Sunnia Kamil Madrasah.",
            "The workshop brought together madrasah teachers from Hathazari, Fatikchari, Sitakunda and Kaptai upazilas to strengthen classroom skills, introduce modern pedagogical approaches, and reinforce values-based leadership among educators.",
            "The programme concluded with a certificate distribution ceremony, where board and madrasah officials presented certificates to the participating teachers in recognition of their attendance.",
          ],
          bn: [
            "আঞ্জুমান এডুকেশন ম্যানেজমেন্ট বোর্ড (AEMB), চট্টগ্রাম আয়োজন করে 'দক্ষ শিক্ষক, আধুনিক শিক্ষাপদ্ধতি ও মূল্যবোধভিত্তিক নেতৃত্ব' শীর্ষক ফ্যাকাল্টি ডেভেলপমেন্ট ওয়ার্কশপ, যা ২৭ জুন ২০২৬ (শনিবার) জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসায় অনুষ্ঠিত হয়।",
            "কর্মশালায় হাটহাজারী, ফটিকছড়ি, সীতাকুণ্ড ও কাপ্তাই উপজেলার মাদ্রাসা শিক্ষকবৃন্দ অংশগ্রহণ করেন, যার লক্ষ্য ছিল শ্রেণিকক্ষ দক্ষতা বৃদ্ধি, আধুনিক শিক্ষাপদ্ধতির প্রবর্তন এবং শিক্ষকদের মধ্যে মূল্যবোধভিত্তিক নেতৃত্ব সুদৃঢ় করা।",
            "অনুষ্ঠানের সমাপনী পর্বে সনদপত্র বিতরণ অনুষ্ঠানের মাধ্যমে বোর্ড ও মাদরাসা কর্মকর্তাগণ অংশগ্রহণকারী শিক্ষকদের উপস্থিতির স্বীকৃতিস্বরূপ সনদপত্র প্রদান করেন।",
          ],
        },
      },
    ],
  },
  {
    key: "khair",
    label: { en: "Dawate Khair", bn: "দাওয়াতে খায়র" },
    featured: khairPotiyaIjtema,
    rest: [
      researchKhairReviewMeeting,
      {
        title: {
          en: "Dawate Khair Mahfil Held in Boalkhali with Gausia Committee Bangladesh",
          bn: "বোয়ালখালীতে গাউসিয়া কমিটি বাংলাদেশের আয়োজনে দাওয়াতে খায়র মাহফিল অনুষ্ঠিত",
        },
        slug: "dawate-khair-boalkhali-mahfil",
        date: "Jul 4, 2026",
        heroImage: "/images/activities/dawate-khair-boalkhali-mahfil-thumb.png",
        gallery: [
          "/images/activities/dawate-khair-boalkhali-mahfil-1.png",
          "/images/activities/dawate-khair-boalkhali-mahfil-2.png",
          "/images/activities/dawate-khair-boalkhali-mahfil-3.png",
          "/images/activities/dawate-khair-boalkhali-mahfil-4.jpeg",
          "/images/activities/dawate-khair-boalkhali-mahfil-5.png",
        ],
        highlights: {
          en: [
            "Dawate Khair Mahfil held Saturday, 4 July 2026, from 9:00 AM to 2:00 PM",
            "Venue: Sultan Mostofa Complex Shahi Jame Masjid, Kodurkhal, Boalkhali, Chattogram",
            "Managed by Gausia Committee Bangladesh, Boalkhali Upazila Branch",
            "Held with the overall cooperation of Toiyabiya Taheriya Sultan Mostofa Complex",
          ],
          bn: [
            "৪ জুলাই ২০২৬ (শনিবার) সকাল ৯টা থেকে বেলা ২টা পর্যন্ত দাওয়াতে খায়র মাহফিল অনুষ্ঠিত হয়",
            "স্থান: সুলতান মোস্তফা কমপ্লেক্স শাহী জামে মসজিদ, কধুরখাল, বোয়ালখালী, চট্টগ্রাম",
            "ব্যবস্থাপনায় ছিল গাউসিয়া কমিটি বাংলাদেশ, বোয়ালখালী উপজেলা শাখা",
            "সার্বিক সহযোগিতায় ছিল তৈয়্যবিয়া তাহেরিয়া সুলতান মোস্তফা কমপ্লেক্স",
          ],
        },
        body: {
          en: [
            "A Dawate Khair Mahfil was held on Saturday, 4 July 2026, from 9:00 AM to 2:00 PM at the Sultan Mostofa Complex Shahi Jame Masjid in Kodurkhal, Boalkhali, Chattogram.",
            "The programme was managed by Gausia Committee Bangladesh's Boalkhali Upazila Branch, with the overall cooperation of Toiyabiya Taheriya Sultan Mostofa Complex.",
            "A large gathering of attendees took part in the day-long mahfil, held under the Da'wat-E Khair banner to spread the basic teachings of Islam among the local community.",
          ],
          bn: [
            "গাউসিয়া কমিটি বাংলাদেশ বোয়ালখালী উপজেলা শাখার ব্যবস্থাপনায় এবং তৈয়্যবিয়া তাহেরিয়া সুলতান মোস্তফা কমপ্লেক্সের সার্বিক সহযোগিতায় \"দাওয়াতে খায়র মাহফিল\" ৪ জুলাই ২০২৬ (শনিবার) সকাল ৯টা থেকে বেলা ২টা পর্যন্ত সুলতান মোস্তফা কমপ্লেক্স শাহী জামে মসজিদ, কধুরখাল, বোয়ালখালী, চট্টগ্রামে সুসম্পন্ন হয়েছে।",
            "দিনব্যাপী এই মাহফিলে বিপুল সংখ্যক মুসল্লি ও এলাকাবাসী অংশগ্রহণ করেন, যার লক্ষ্য ছিল দাওয়াতে খায়রের ব্যানারে স্থানীয় জনগণের মাঝে ইসলামের মৌলিক শিক্ষা ছড়িয়ে দেওয়া।",
          ],
        },
      },
      {
        title: {
          en: "Dawate Khair Mahfil of Gausia Committee Bangladesh UAE Branch Held Under the Presidency of Huzur Qiblah",
          bn: "গাউসিয়া কমিটি বাংলাদেশ আরব আমিরাত শাখার দাওয়াতে খাইর মাহফিল হুজুর কিবলাগনের সদারতে অনুষ্ঠিত",
        },
        slug: "dawate-khair-gausia-committee-uae-mahfil",
        date: "Aug 14, 2026",
        heroImage: "/images/activities/dawate-khair-uae-mahfil-1.png",
        gallery: [
          "/images/activities/dawate-khair-uae-mahfil-1.png",
          "/images/activities/dawate-khair-uae-mahfil-2.png",
        ],
        highlights: {
          en: [
            "Organised by Gausia Committee Bangladesh, United Arab Emirates branch",
            "Mahfil held under the presidency (sadarat) of Huzur Qiblah",
            "Large gathering of devotees attended the Dawate Khair mahfil",
          ],
          bn: [
            "আয়োজনে গাউসিয়া কমিটি বাংলাদেশ, সংযুক্ত আরব আমিরাত শাখা",
            "হুজুর কিবলাগণের সদারতে অনুষ্ঠিত মাহফিল",
            "দাওয়াতে খায়র মাহফিলে বিপুল সংখ্যক ভক্তবৃন্দের উপস্থিতি",
          ],
        },
        body: {
          en: [
            "A Dawate Khair Mahfil organised by Gausia Committee Bangladesh's United Arab Emirates branch was held under the presidency of Huzur Qiblah.",
            "Huzur Qiblah addressed the gathering from among senior committee members, with devotees and attendees seated closely around him.",
            "A large congregation of devotees filled the hall to take part in the mahfil, held under the Da'wat-E Khair banner among the Bangladeshi diaspora community in the UAE.",
          ],
          bn: [
            "গাউসিয়া কমিটি বাংলাদেশ আরব আমিরাত শাখার আয়োজনে দাওয়াতে খায়র মাহফিল হুজুর কিবলাগণের সদারতে অনুষ্ঠিত হয়।",
            "হুজুর কিবলাগণ কমিটির শীর্ষ নেতৃবৃন্দের মাঝে উপবিষ্ট হয়ে উপস্থিত ভক্তবৃন্দের উদ্দেশ্যে বক্তব্য রাখেন।",
            "মাহফিলে অংশগ্রহণ করতে বিপুল সংখ্যক ভক্তবৃন্দ সমবেত হন, যা সংযুক্ত আরব আমিরাতে প্রবাসী বাংলাদেশি সম্প্রদায়ের মাঝে দাওয়াতে খায়রের ব্যানারে অনুষ্ঠিত হয়।",
          ],
        },
      },
    ],
  },
];

export function findActivity(slug: string) {
  for (const category of activityCategories) {
    const all = [category.featured, ...category.rest];
    const article = all.find((item) => item.slug === slug);
    if (article) return { article, category };
  }
  return null;
}

export const donationFunds = [
  "Zakat",
  "Sadaqah",
  "Education Support",
  "Dawah & Outreach",
  "Emergency Relief",
  "General Fund",
];

export const prayerTimes = [
  { name: "Fajr", time: "4:31 AM" },
  { name: "Zuhr", time: "12:08 PM" },
  { name: "Asr", time: "4:52 PM" },
  { name: "Maghrib", time: "6:05 PM" },
  { name: "Isha", time: "7:25 PM" },
];

export const quickLinks = [
  "www.anjumantrust.com",
  "www.anjumanbank.com",
  "www.anjumanmadrasa.com",
  "www.anjumanrelief.com",
];

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/anjumantrustofficial" },
  { label: "YouTube", href: "https://www.youtube.com/@anjumantrustofficial" },
  { label: "Instagram", href: "https://www.instagram.com/anjumantrustofficial" },
  { label: "X", href: "https://x.com/AnjumanTrust" },
  { label: "WhatsApp", href: "https://whatsapp.com/channel/0029VaeBn9iCMY0E0fjd8Y3B" },
];

// Video showcase (homepage, shown after the calendar/prayer-times widgets).
// To attach a video: drop the file in `public/videos/` and reference it here as
// "/videos/your-file.mp4", or use a full https:// URL to an externally hosted mp4
// (an HLS/RTMP live player URL also works for `liveBroadcast.videoUrl` if the video
// element's source supports it). `poster` is the still image shown before playback
// starts — put it in `public/images/`.
export type ShowcaseVideo = {
  title: string;
  description: string;
  videoUrl: string;
  poster: string;
};

// Toggle `isLive` to true when a broadcast is actively streaming; when false the
// card shows an "Offline" state and plays the last recorded broadcast instead.
export type LiveBroadcast = ShowcaseVideo & { isLive: boolean };

export const liveBroadcast: LiveBroadcast = {
  title: "Friday Khutbah — Live",
  description: "Live broadcast from the Darbar-e-Alia congregation hall.",
  videoUrl: "/videos/hero-drone.mp4",
  poster: "/images/hero/drone-poster.jpg",
  isLive: false,
};

export const videoShowcase: ShowcaseVideo[] = [
  {
    title: "Darbar-e-Alia — Aerial View",
    description: "A drone flyover of the Darbar-e-Alia complex, showcasing the trust's spiritual home.",
    videoUrl: "/videos/hero-drone.mp4",
    poster: "/images/hero/drone-poster.jpg",
  },
  {
    title: "Annual Gathering Highlights",
    description: "Moments from the Trust's annual congregation and community programmes.",
    videoUrl: "/videos/hero-drone.mp4",
    poster: "/images/hero/drone-poster.jpg",
  },
  {
    title: "Education & Welfare in Action",
    description: "A look at the schools, madrasas and relief work supported across our committees.",
    videoUrl: "/videos/hero-drone.mp4",
    poster: "/images/hero/drone-poster.jpg",
  },
  {
    title: "Gausia Committee Coordination Meeting",
    description: "Chapter representatives gather in Chattogram to review the year's programmes.",
    videoUrl: "/videos/hero-drone.mp4",
    poster: "/images/hero/drone-poster.jpg",
  },
  {
    title: "Research Centre — Publications Launch",
    description: "Highlights from the Research Centre's latest publication launch event.",
    videoUrl: "/videos/hero-drone.mp4",
    poster: "/images/hero/drone-poster.jpg",
  },
  {
    title: "Dawate Khair Relief Distribution",
    description: "Emergency relief and welfare distribution across the wider Sylhet region.",
    videoUrl: "/videos/hero-drone.mp4",
    poster: "/images/hero/drone-poster.jpg",
  },
];

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerMenu = [
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Gallery", href: "/gallery" },
];

export const footerConnect = [
  { label: "Donate", href: "/#donate-panel" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Careers", href: "/careers" },
];

export const footerOthers = [
  { label: "Contact", href: "/contact" },
  { label: "Terms of Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export const timeline = [
  {
    date: "15 February",
    year: "1925",
    title: "Founded in Rangoon",
    text: "Established as Anjuman-E-Shura-E-Rahmania in Rangoon, Burma to serve Islamic activities and the community.",
  },
  {
    date: "29 August",
    year: "1937",
    title: "Reconstituted in Chittagong",
    text: "Disciples returning from Rangoon reconstitute the Trust in Chittagong in the presence of Huzur Kebla Syed Ahmad Shah.",
  },
  {
    date: "22 January",
    year: "1954",
    title: "Renamed & First Madrasa Founded",
    text: "Reformed as Anjuman-E Ahmadia Sunnia in Anderkilla, Chittagong. The same year, the Trust founds its flagship institution, Jamea Ahmadia Sunnia Kamil Madrasah, in West Sholashahar.",
  },
  {
    date: "18 March",
    year: "1956",
    title: "Present Name Adopted",
    text: "Formally reconstituted under its current name, Anjuman-E-Rahmania Ahmadia Sunnia Trust, as a non-political, religious and philanthropic trust.",
  },
  {
    year: "1958–59",
    title: "Officially Registered",
    text: "Registered under the Societies Registration Act XXI of 1860, Registration No. 1237 E.P./82.",
  },
  {
    date: "12 Rabiul Awal",
    year: "1974",
    title: "Jashne Julus Eid-E-Miladunnabi Begins",
    text: "First organized under the direction of Allama Syed Muhammad Tayyab Shah (R.A.) in Chittagong.",
  },
  {
    date: "16 December 1976",
    year: "1976–77",
    title: "Monthly Tarjuman-E-Ahle-Sunnat Launched",
    text: "Ordered for publication by Allama Syed Muhammad Tayyab Shah (R.A.); officially launched in January 1977 as the Trust's primary monthly publication.",
  },
  {
    year: "1986",
    title: "Gausia Committee Bangladesh Founded",
    text: "Founded by Allama Syed Muhammad Tayyab Shah (R.A.) as the Trust's social reform, humanitarian and volunteer auxiliary wing.",
  },
  {
    year: "2009",
    title: "Da'wat-E Khair Launched",
    text: "Launched by Pir-e-Tariqat Hazrat Allama Syed Muhammad Sabir Shah Sahib Qibla at Alamgir Khanqah Sharif to guide people toward the core teachings of Sunni Islam.",
  },
  {
    year: "Present",
    title: "Anjuman Education Management Board",
    text: "Formed as the central administrative body overseeing the Trust's network of 200+ madrasas and educational institutions established since 1954.",
  },
];

export const concerns: {
  name: string;
  logo: string;
  href: string;
  stat: string;
  statLabel: TranslationKey;
}[] = [
  {
    name: "Monthly Tarjuman-e-Ahle-Sunnat",
    logo: "/images/concerns/tarjumane-ahle-sunnat.png",
    href: "https://www.monthlytarjuman.com/",
    stat: "60+",
    statLabel: "stats_publications",
  },
  {
    name: "Anjuman Education Management Board",
    logo: "/images/concerns/education-management-board.png",
    href: "https://anjumantrust.org/about-1/",
    stat: "200+",
    statLabel: "stats_institutions",
  },
  {
    name: "Anjuman Research Center",
    logo: "/images/concerns/anjuman-research-center.png",
    href: "https://anjumantrust.org/about-1/",
    stat: "200+",
    statLabel: "stats_books",
  },
  {
    name: "Da'wat-E Khair Implement Committee",
    logo: "/images/concerns/dawat-e-khair-implement-committee.png",
    href: "https://dawatekhair.com/",
    stat: "20000+",
    statLabel: "stats_dawah",
  },
  {
    name: "Gausia Committee Bangladesh",
    logo: "/images/concerns/gausia-committee-bangladesh.png",
    href: "https://gausiacommitteebangladesh.org/",
    stat: "10,00,000+",
    statLabel: "stats_humbleAttendant",
  },
];

export const statsBar: { name: string; stat: string; statLabel: TranslationKey }[] = [
  { name: "Publications", stat: "60+", statLabel: "stats_publications" },
  { name: "Institutions", stat: "200+", statLabel: "stats_institutions" },
  { name: "Dawah", stat: "20000+", statLabel: "stats_dawah" },
  { name: "Humble Attendant", stat: "10,00,000+", statLabel: "stats_humbleAttendant" },
];

export const concernLogos = [
  ...concerns
    .filter(({ name }) => name !== "Monthly Tarjuman-e-Ahle-Sunnat")
    .map(({ name, logo, href }) => ({
      name: name === "Da'wat-E Khair Implement Committee" ? "Da'wat-E Khair\nImplement Committee" : name,
      logo,
      href,
    })),
  {
    name: "Tarjumane Ahle Sunnat",
    logo: "/images/concerns/tarjumane-ahle-sunnat.png",
    href: "https://www.monthlytarjuman.com/",
  },
  {
    name: "Anjuman Trust Media",
    logo: "/images/concerns/anjuman-trust-media.png",
    href: "https://anjumantrust.org/",
  },
];

export type OrganizationProfile = {
  key: string;
  name: string;
  logo: string;
  href: string;
  established: string;
  description: string[];
};

export const organizationProfiles: OrganizationProfile[] = [
  {
    key: "tarjuman",
    name: "Monthly Tarjuman-e-Ahle-Sunnat",
    logo: "/images/concerns/tarjumane-ahle-sunnat.png",
    href: "https://www.monthlytarjuman.com/",
    established: "Est. 1977",
    description: [
      "Ordered for publication by Hazrat Allama Syed Muhammad Tayyab Shah (R.A.), the Monthly Tarjuman-e-Ahle-Sunnat was officially launched in January 1977 as the Trust's primary monthly publication.",
      "It holds the distinction of being the main and oldest publication in the field of leading monthly Sunni journals, and has long stood as a crucial pillar of Sunni literary publishing in the Bengali language.",
      "The magazine was founded on the belief that publication is one of the most important means of giving long-term, credible and widely accepted validity to an ideology — carrying the true teachings of Ahle Sunnat wal Jamaat to readers across generations.",
    ],
  },
  {
    key: "gausia",
    name: "Gausia Committee Bangladesh",
    logo: "/images/concerns/gausia-committee-bangladesh.png",
    href: "https://gausiacommitteebangladesh.org/",
    established: "Est. 1986",
    description: [
      "Founded in 1986 by Hazrat Allama Syed Muhammad Tayyab Shah (R.A.), the Gausia Committee Bangladesh serves as the Trust's social reform, humanitarian and volunteer auxiliary wing.",
      "It is a social reformist, non-political movement built on the principle that personal reform must precede social reform, with members taking an oath of allegiance to the teachings of Ghausul-A'zam Sheikh Abdul Qadir Jilani (R.A.).",
      "Its core objectives include member training centred on spiritual purification, raising awareness of authentic Sunni Islamic beliefs, and promoting steadfast commitment to Sunnism and spiritual guidance through the network of Madrasas and Anjumans.",
    ],
  },
  {
    key: "dawat-e-khair",
    name: "Da'wat-E Khair",
    logo: "/images/concerns/dawat-e-khair-implement-committee.png",
    href: "https://dawatekhair.com/",
    established: "Est. 2009",
    description: [
      "Launched in 2009 through a historic address at Alamgir Khanqah, Da'wat-E Khair carries forward the Qur'anic principle of enjoining good and forbidding evil (Amr Bil Ma'ruf wa Nahi Anil Munkar).",
      "The programme was established to make the true, authentic teachings of Islam accessible to communities across the country through structured outreach, education and Dawah activities.",
      "Since its launch, Da'wat-E Khair has grown into one of the Trust's largest public engagement efforts, reaching over 1 crore (10 million+) people through its Dawah initiatives.",
    ],
  },
];

export type CabinetMember = {
  name: string;
  suffix?: string;
  role: string;
  image?: string;
  isChief?: boolean;
};

export const cabinetChiefs: CabinetMember[] = [
  {
    name: "Syed Muhammad Taher Shah",
    suffix: "(M.J.A.)",
    role: "President",
    image: "/images/founders/syed-muhammad-taher-shah.png",
    isChief: true,
  },
  {
    name: "Syed Muhammad Sabir Shah",
    suffix: "(M.J.A.)",
    role: "Executive President",
    image: "/images/founders/syed-muhammad-sabir-shah.jpeg",
    isChief: true,
  },
];

export const cabinetMembers: CabinetMember[] = [
  {
    name: "Mohammad Manjur Alam",
    suffix: "(Manju)",
    role: "Senior Vice President",
    image: "/images/cabinet/manjur-alam.png",
  },
  { name: "A.Q.I Chowdhury", role: "Vice President", image: "/images/cabinet/aqi-chowdhury.png" },
  {
    name: "Muhammad Amir Hossain",
    suffix: "(Sohel)",
    role: "Vice President",
    image: "/images/cabinet/amir-hossain.png",
  },
  {
    name: "Mohammed Anowar Hossain",
    role: "Secretary General",
    image: "/images/cabinet/anowar-hossain.png",
  },
  {
    name: "Mohammed Shamsuddin",
    role: "Additional General Secretary",
    image: "/images/cabinet/shamsuddin.png",
  },
  {
    name: "S.M. Giash Uddin",
    suffix: "(Shaker)",
    role: "Assistant General Secretary",
    image: "/images/cabinet/giash-uddin.png",
  },
  {
    name: "Mohammed Kamar Uddin",
    suffix: "(Sabur)",
    role: "Finance Secretary",
    image: "/images/cabinet/kamar-uddin.png",
  },
  {
    name: "Mohammad Golam Mohiuddin",
    role: "Press & Publication Secretary",
    image: "/images/cabinet/golam-mohiuddin.png",
  },
  { name: "Payer Mohammad", role: "Cabinet Member", image: "/images/cabinet/payer-mohammad.png" },
  {
    name: "Muhammad Hossain Khokan",
    role: "Cabinet Member",
    image: "/images/cabinet/hossain-khokan.png",
  },
  {
    name: "Muhammad Mahmood Newaz",
    role: "Cabinet Member",
    image: "/images/cabinet/mahmood-newaz.png",
  },
];

export const aboutAchievements = [
  { value: "200+", label: "Our Madrasah" },
  { value: "50+", label: "Khanka Sharif" },
  { value: "20+", label: "On Going Project" },
];

export const missionPoints = [
  {
    title: "Faith & Dawah",
    text: "Preserving and propagating Sunni Islamic teaching through masjids, gatherings and scholarship, in the tradition of Ahle Sunnat wal Jamaat.",
  },
  {
    title: "Education",
    text: "Running madrasas, schools and scholarship programs that combine religious grounding with modern academic opportunity.",
  },
  {
    title: "Relief & Welfare",
    text: "Delivering emergency relief, healthcare support and sustainable aid to underserved and disaster-affected communities.",
  },
  {
    title: "Community",
    text: "Convening the Muslim Ummah of the sub-continent through congregations, committees and interfaith representation.",
  },
];

export type GalleryCategory = "events" | "education" | "relief" | "construction" | "congregation";

export const galleryFilters: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "events", label: "Events" },
  { key: "education", label: "Education" },
  { key: "relief", label: "Relief" },
  { key: "construction", label: "Construction" },
  { key: "congregation", label: "Congregation" },
];

export const galleryItems: { category: GalleryCategory; title: string; image: string }[] = [
  { category: "congregation", title: "Gallery Photo 01", image: "/images/gallery/1p-400x300.jpg" },
  { category: "education", title: "Gallery Photo 02", image: "/images/gallery/28p-400x300.jpg" },
  { category: "relief", title: "Gallery Photo 03", image: "/images/gallery/51p-400x300.jpg" },
  { category: "construction", title: "Gallery Photo 04", image: "/images/gallery/DSC00213-400x300.jpg" },
  { category: "events", title: "Gallery Photo 05", image: "/images/gallery/DSC00278-400x300.jpg" },
  { category: "congregation", title: "Gallery Photo 06", image: "/images/gallery/DSC00360-400x300.jpg" },
  { category: "education", title: "Gallery Photo 07", image: "/images/gallery/DSC00561-400x300.jpg" },
  { category: "relief", title: "Gallery Photo 08", image: "/images/gallery/DSC00684-400x300.jpg" },
  { category: "construction", title: "Gallery Photo 09", image: "/images/gallery/DSC00835-400x300.jpg" },
  { category: "events", title: "Gallery Photo 10", image: "/images/gallery/DSC00889-400x300.jpg" },
  { category: "congregation", title: "Gallery Photo 11", image: "/images/gallery/DSC00936-400x300.jpg" },
  { category: "education", title: "Gallery Photo 12", image: "/images/gallery/DSC00984-400x300.jpg" },
  { category: "relief", title: "Gallery Photo 13", image: "/images/gallery/DSC01043-400x300.jpg" },
  { category: "construction", title: "Gallery Photo 14", image: "/images/gallery/DSC01098-400x300.jpg" },
  { category: "events", title: "Gallery Photo 15", image: "/images/gallery/DSC01151-400x300.jpg" },
  { category: "congregation", title: "Gallery Photo 16", image: "/images/gallery/DSC01209-400x300.jpg" },
  { category: "education", title: "Gallery Photo 17", image: "/images/gallery/DSC01237-400x300.jpg" },
  { category: "relief", title: "Gallery Photo 18", image: "/images/gallery/DSC01322-400x300.jpg" },
  { category: "construction", title: "Gallery Photo 19", image: "/images/gallery/DSC01363-400x300.jpg" },
  { category: "events", title: "Gallery Photo 20", image: "/images/gallery/DSC09371-400x300.jpg" },
  { category: "congregation", title: "Gallery Photo 21", image: "/images/gallery/DSC09485-400x300.jpg" },
  { category: "education", title: "Gallery Photo 22", image: "/images/gallery/DSC09672-400x300.jpg" },
  { category: "relief", title: "Gallery Photo 23", image: "/images/gallery/DSC09782-400x300.jpg" },
  { category: "construction", title: "Gallery Photo 24", image: "/images/gallery/DSC09869-400x300.jpg" },
];

export const officeLocations = [
  {
    name: "Head Office — Chattogram",
    address: "321 Didar Market, Dewan Bazar, Chattogram, Bangladesh",
    phone: "02333388411, 02333388422, 02333363837",
  },
];

export const faqs = [
  {
    q: "How can I make a donation?",
    a: "Use the donation panel on the homepage or visit any of our office locations. Zakat, Sadaqah and general funds are all accepted.",
  },
  {
    q: "Is the Trust registered and audited?",
    a: "Yes. Anjuman-E Rahmania Ahmadia Sunnia Trust is a registered non-political, religious and philanthropic trust with annual financial disclosure.",
  },
  {
    q: "Can I volunteer without relocating?",
    a: "Most of our programs run through regional committees, so you can contribute from wherever you are based — see the Volunteer page for current openings.",
  },
];

export const volunteerOpportunities = [
  {
    title: "Relief Distribution Support",
    location: "Cox's Bazar & Sylhet",
    commitment: "Weekend, seasonal",
    text: "Assist field teams with packing and distributing emergency relief during flood and winter response drives.",
  },
  {
    title: "Madrasa Tutoring",
    location: "Chattogram",
    commitment: "2 evenings / week",
    text: "Support the free tutoring program for students preparing for board and religious examinations.",
  },
  {
    title: "Event & Congregation Logistics",
    location: "Nationwide",
    commitment: "Event-based",
    text: "Help coordinate logistics for Milad gatherings, Friday sermon series and the annual congregation.",
  },
  {
    title: "Digital & Media Volunteers",
    location: "Remote",
    commitment: "Flexible",
    text: "Contribute photography, writing or design skills to Dawate Khair magazine and our online communications.",
  },
];

export const careers = [
  {
    title: "Program Coordinator — Relief",
    location: "Chattogram",
    type: "Full-time",
    text: "Lead planning and on-the-ground coordination for the Trust's emergency relief and welfare programs.",
  },
  {
    title: "Madrasa Instructor — Hifz & Qirat",
    location: "Chattogram",
    type: "Full-time",
    text: "Teach Hifz and Qirat at an affiliated madrasa, with a background in Sunni Islamic scholarship.",
  },
  {
    title: "Accounts & Finance Officer",
    location: "Chattogram",
    type: "Full-time",
    text: "Manage day-to-day accounting, donation records and audit preparation for the Trust and its institutions.",
  },
  {
    title: "Communications Officer",
    location: "Remote / Chattogram",
    type: "Part-time",
    text: "Produce content for Dawate Khair, the website and social channels, coordinating with the Gawsia Committee.",
  },
];
