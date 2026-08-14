import type { TranslationKey } from "./translations";

export const stats = [
  { value: "60+", label: "Publications" },
  { value: "200+", label: "Institutions Run" },
  { value: "200+", label: "Dawah Programs" },
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

const stock = (name: string) => `/images/news/stock/${name}`;

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

const researchQiraatTraining: NewsItem = {
  title: {
    en: "Gausia Qira'at Training 2026 Begins at Alamgir Khankah Sharif",
    bn: "আলমগীর খানকাহ শরীফে শুরু হলো গাউসিয়া ক্বিরাআত প্রশিক্ষণ-২০২৬",
  },
  slug: "research-centre-gausia-qiraat-training-2026",
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

const researchMiladOlympiad: NewsItem = {
  title: {
    en: "Gausia Committee Launches Milad Olympiad, Season 2",
    bn: "গাউসিয়া কমিটির মিলাদ অলিম্পিয়াড, সিজন-২ শুরু",
  },
  slug: "research-centre-milad-olympiad-season-2",
  date: "Aug 15, 2026",
  heroImage: "/images/activities/research-milad-olympiad-poster.png",
  gallery: ["/images/activities/research-milad-olympiad-poster.png"],
  highlights: {
    en: [
      "Total prize pool of Tk 2.5 lakh shared among 12 winners",
      "1st prize: a Ziyarat (holy visit) to the Haramain Sharifain",
      "Selection round exam on 15 August 2026, syllabus based on the book Nurunnabi",
    ],
    bn: [
      "১২ জন বিজয়ীর জন্য সর্বমোট ২.৫ লক্ষ টাকার পুরস্কার",
      "১ম পুরস্কার: পবিত্র হারামাইন শরীফাইনের যেয়ারত",
      "সিলেকশন রাউন্ডের পরীক্ষা ১৫ আগস্ট ২০২৬, সিলেবাস নূরনবী বই থেকে",
    ],
  },
  body: {
    en: [
      "Marking the holy Milad of Sayyidul Mursalin, Rahmatul lil Alameen, Huzur Karim (peace and blessings be upon him), the Gausia Committee Bangladesh's Jamea Ahmadia Sunnia Kamil Madrasah branch has launched the Milad Olympiad, Season 2, offering a total prize pool of Tk 2.5 lakh across 12 winners.",
      "The top prize is a Ziyarat (holy visit) to the Haramain Sharifain, followed by a laptop for 2nd place and a tablet for 3rd, with cash prizes of Tk 7,000 and Tk 5,000 for 4th and 5th place. Winners placed 6th to 12th receive certificates, medals and gift hampers.",
      "The syllabus is drawn from the book Nurunnabi by Hafez Muhammad Abdul Jalil (rah.): the selection round covers chapters 1–30, the elimination round chapters 31–55, and the final round the complete book together with a designated PDF. The selection round exam is scheduled for 15 August 2026, with elimination and final round dates to be announced later; the first two rounds will be held online via miladolympiad.com. Registration costs Tk 150.",
    ],
    bn: [
      "সাইয়্যিদুল মুরসালিন, রহমাতুল্লিল আলামীন হুযুর করীম ﷺ এর পবিত্র মিলাদ উপলক্ষে গাউসিয়া কমিটি বাংলাদেশের জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসা শাখার আয়োজনে শুরু হয়েছে মিলাদ অলিম্পিয়াড সিজন-২, সর্বমোট ২.৫ লক্ষ টাকার পুরস্কার নিয়ে ১২ জন বিজয়ীর জন্য।",
      "১ম পুরস্কার পবিত্র হারামাইন শরীফাইনের যেয়ারত, ২য় পুরস্কার ল্যাপটপ, ৩য় পুরস্কার ট্যাব, ৪র্থ পুরস্কার ৭০০০ টাকা এবং ৫ম পুরস্কার ৫০০০ টাকা। ৬ষ্ঠ থেকে ১২তম পুরস্কারপ্রাপ্তরা পাবেন সার্টিফিকেট, মেডেল ও আকর্ষণীয় গিফট হ্যাম্পার।",
      "সিলেবাস নির্ধারিত হয়েছে হাফেজ মুহাম্মদ আবদুল জলিল (রহ.) রচিত 'নূরনবী' বই থেকে: সিলেকশন রাউন্ড ১ম থেকে ৩০তম অধ্যায় পর্যন্ত, এলিমিনেশন রাউন্ড ৩১তম থেকে ৫৫তম অধ্যায় পর্যন্ত, এবং ফাইনাল রাউন্ড সম্পূর্ণ বই ও নির্ধারিত পিডিএফ থেকে। সিলেকশন রাউন্ডের পরীক্ষা ১৫ আগস্ট ২০২৬-এ অনুষ্ঠিত হবে, এলিমিনেশন ও ফাইনাল রাউন্ডের তারিখ পরবর্তীতে জানানো হবে; প্রথম দু'টি রাউন্ডের পরীক্ষা হবে miladolympiad.com-এ। রেজিস্ট্রেশন ফি ১৫০ টাকা।",
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
    rest: [gausiaDhakaQuaderiaMeeting, gausiaGazaAidShipment, gausiaAlimCommittee],
  },
  {
    key: "research",
    label: { en: "Research Centre", bn: "রিসার্চ সেন্টার" },
    featured: researchKhairReviewMeeting,
    rest: [
      researchQiraatTraining,
      researchMiladOlympiad,
      {
        title: {
          en: "Centre Hosts Roundtable on Community Welfare Policy",
          bn: "কমিউনিটি কল্যাণ নীতি নিয়ে রাউন্ডটেবিল আয়োজন করল সেন্টার",
        },
        slug: "research-centre-roundtable-welfare-policy",
        date: "Mar 30, 2026",
        heroImage: stock("mosque-interior-2.jpg"),
        gallery: [stock("mosque-interior-2.jpg"), stock("quran-manuscript.jpg")],
        highlights: {
          en: [
            "Roundtable brought together researchers and chapter representatives",
            "Discussed findings from the welfare trends study",
          ],
          bn: [
            "রাউন্ডটেবিলে গবেষক ও চ্যাপ্টার প্রতিনিধিরা একত্রিত হন",
            "কল্যাণ প্রবণতা সমীক্ষার ফলাফল নিয়ে আলোচনা হয়",
          ],
        },
        body: {
          en: [
            "The Research Centre hosted a roundtable bringing together researchers and chapter representatives to discuss findings from its welfare trends study.",
            "Participants exchanged views on how the findings could shape programme planning across affiliated institutions.",
          ],
          bn: [
            "রিসার্চ সেন্টার একটি রাউন্ডটেবিল আয়োজন করে, যেখানে গবেষক ও চ্যাপ্টার প্রতিনিধিরা কল্যাণ প্রবণতা সমীক্ষার ফলাফল নিয়ে আলোচনা করেন।",
            "অংশগ্রহণকারীরা এই ফলাফল কীভাবে অধিভুক্ত প্রতিষ্ঠানগুলোর কর্মসূচি পরিকল্পনাকে প্রভাবিত করতে পারে তা নিয়ে মতবিনিময় করেন।",
          ],
        },
      },
    ],
  },
  {
    key: "education",
    label: { en: "Education Board", bn: "এডুকেশন বোর্ড" },
    featured: educationChuetWorkshop,
    rest: [
      {
        title: {
          en: "New Madrasah Curriculum Approved for Rollout",
          bn: "মাদ্রাসার নতুন পাঠ্যক্রম অনুমোদিত",
        },
        slug: "education-board-new-curriculum-rollout",
        date: "Jun 2, 2026",
        heroImage: stock("calligraphy-classic.jpg"),
        gallery: [stock("calligraphy-classic.jpg"), stock("education-classroom.jpg")],
        highlights: {
          en: [
            "Updated curriculum to roll out across affiliated madrasahs",
            "Developed with input from senior teaching staff",
          ],
          bn: [
            "অধিভুক্ত মাদ্রাসাগুলোতে হালনাগাদ পাঠ্যক্রম চালু হবে",
            "সিনিয়র শিক্ষকদের পরামর্শে প্রস্তুত করা হয়েছে",
          ],
        },
        body: {
          en: [
            "The Education Board has approved an updated curriculum for rollout across affiliated madrasahs, developed with input from senior teaching staff.",
            "Institutions will begin phasing in the new curriculum from the coming academic term.",
          ],
          bn: [
            "এডুকেশন বোর্ড অধিভুক্ত মাদ্রাসাগুলোর জন্য একটি হালনাগাদ পাঠ্যক্রম অনুমোদন করেছে, যা সিনিয়র শিক্ষকদের পরামর্শে প্রস্তুত করা হয়েছে।",
            "আগামী শিক্ষাবর্ষ থেকে প্রতিষ্ঠানগুলো ধাপে ধাপে নতুন পাঠ্যক্রম চালু করবে।",
          ],
        },
      },
      {
        title: {
          en: "Teacher Training Workshop Held in Chattogram",
          bn: "চট্টগ্রামে শিক্ষক প্রশিক্ষণ কর্মশালা অনুষ্ঠিত",
        },
        slug: "education-board-teacher-training-workshop",
        date: "May 8, 2026",
        heroImage: stock("education-classroom.jpg"),
        gallery: [stock("education-classroom.jpg"), stock("calligraphy-learning.jpg")],
        highlights: {
          en: [
            "Workshop drew teaching staff from affiliated institutions",
            "Focused on classroom methods and student welfare practices",
          ],
          bn: [
            "অধিভুক্ত প্রতিষ্ঠানগুলোর শিক্ষকরা কর্মশালায় অংশগ্রহণ করেন",
            "শ্রেণিকক্ষ পদ্ধতি ও শিক্ষার্থী কল্যাণ চর্চার ওপর গুরুত্ব দেওয়া হয়",
          ],
        },
        body: {
          en: [
            "The Education Board hosted a teacher training workshop in Chattogram, drawing teaching staff from affiliated institutions across the district.",
            "Sessions focused on classroom methods and student welfare practices, led by senior educators from the board.",
          ],
          bn: [
            "এডুকেশন বোর্ড চট্টগ্রামে একটি শিক্ষক প্রশিক্ষণ কর্মশালার আয়োজন করে, যেখানে জেলার অধিভুক্ত প্রতিষ্ঠানগুলোর শিক্ষকরা অংশগ্রহণ করেন।",
            "সেশনগুলো শ্রেণিকক্ষ পদ্ধতি ও শিক্ষার্থী কল্যাণ চর্চার ওপর কেন্দ্রীভূত ছিল, যা বোর্ডের সিনিয়র শিক্ষাবিদরা পরিচালনা করেন।",
          ],
        },
      },
      {
        title: {
          en: "Board Opens New Scholarship Applications Portal",
          bn: "বৃত্তির আবেদনের জন্য নতুন অনলাইন পোর্টাল চালু",
        },
        slug: "education-board-scholarship-applications-portal",
        date: "Apr 14, 2026",
        heroImage: stock("quran-page.jpg"),
        gallery: [stock("quran-page.jpg"), stock("education-classroom.jpg")],
        highlights: {
          en: [
            "New online portal for scholarship applications",
            "Reduces paperwork for affiliated institution administrators",
          ],
          bn: [
            "বৃত্তির আবেদনের জন্য নতুন অনলাইন পোর্টাল",
            "অধিভুক্ত প্রতিষ্ঠানের প্রশাসকদের কাগজপত্রের কাজ কমায়",
          ],
        },
        body: {
          en: [
            "The Education Board has launched a new online portal for scholarship applications, replacing the previous paper-based process.",
            "Institution administrators say the portal significantly reduces the paperwork involved in submitting and tracking applications.",
          ],
          bn: [
            "এডুকেশন বোর্ড বৃত্তির আবেদনের জন্য একটি নতুন অনলাইন পোর্টাল চালু করেছে, যা আগের কাগজভিত্তিক প্রক্রিয়ার পরিবর্তে ব্যবহৃত হবে।",
            "প্রতিষ্ঠান প্রশাসকরা বলছেন, পোর্টালটি আবেদন জমা ও ট্র্যাক করার কাগজপত্রের কাজ উল্লেখযোগ্যভাবে কমিয়ে দেয়।",
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
      {
        title: {
          en: "Volunteer Corps Doubles in Size This Year",
          bn: "এ বছর স্বেচ্ছাসেবক দলের সংখ্যা দ্বিগুণ হয়েছে",
        },
        slug: "dawate-khair-volunteer-corps-growth",
        date: "Jun 20, 2026",
        heroImage: stock("water-well-pulley.jpg"),
        gallery: [stock("water-well-pulley.jpg"), stock("relief-aid-distribution.jpg")],
        highlights: {
          en: [
            "Active volunteer numbers have doubled compared to last year",
            "New volunteers trained through monthly orientation sessions",
          ],
          bn: [
            "গত বছরের তুলনায় সক্রিয় স্বেচ্ছাসেবকের সংখ্যা দ্বিগুণ হয়েছে",
            "মাসিক ওরিয়েন্টেশন সেশনের মাধ্যমে নতুন স্বেচ্ছাসেবক প্রশিক্ষিত হয়েছেন",
          ],
        },
        body: {
          en: [
            "Dawate Khair's volunteer corps has doubled in size this year, with new members trained through monthly orientation sessions.",
            "The growth has allowed the programme to take on additional relief and outreach activities across more districts.",
          ],
          bn: [
            "দাওয়াতে খায়রের স্বেচ্ছাসেবক দলের আকার এ বছর দ্বিগুণ হয়েছে, নতুন সদস্যরা মাসিক ওরিয়েন্টেশন সেশনের মাধ্যমে প্রশিক্ষিত হয়েছেন।",
            "এই বৃদ্ধির ফলে কর্মসূচি আরও বেশি জেলায় ত্রাণ ও প্রচারণা কার্যক্রম গ্রহণ করতে সক্ষম হয়েছে।",
          ],
        },
      },
      {
        title: {
          en: "Monthly Food Drive Reaches 500 Families",
          bn: "মাসিক খাদ্য কর্মসূচি ৫০০ পরিবারে পৌঁছেছে",
        },
        slug: "dawate-khair-monthly-food-drive-500-families",
        date: "May 15, 2026",
        heroImage: stock("relief-aid-distribution.jpg"),
        gallery: [stock("relief-aid-distribution.jpg"), stock("mosque-interior-1.jpg")],
        highlights: {
          en: [
            "Food packages delivered to 500 families this month",
            "Distribution coordinated through local mosque committees",
          ],
          bn: [
            "এ মাসে ৫০০ পরিবারে খাদ্য প্যাকেজ পৌঁছে দেওয়া হয়েছে",
            "স্থানীয় মসজিদ কমিটির মাধ্যমে বিতরণ সমন্বয় করা হয়",
          ],
        },
        body: {
          en: [
            "Dawate Khair's monthly food drive reached 500 families this month, with distribution coordinated through local mosque committees.",
            "The programme runs year-round, with volunteers assembling and delivering packages on the first weekend of every month.",
          ],
          bn: [
            "দাওয়াতে খায়রের মাসিক খাদ্য কর্মসূচি এ মাসে ৫০০ পরিবারে পৌঁছেছে, স্থানীয় মসজিদ কমিটির মাধ্যমে বিতরণ সমন্বয় করা হয়েছে।",
            "কর্মসূচিটি সারা বছর চলে, স্বেচ্ছাসেবকরা প্রতি মাসের প্রথম সপ্তাহান্তে প্যাকেজ প্রস্তুত ও বিতরণ করেন।",
          ],
        },
      },
      {
        title: {
          en: "Emergency Relief Deployed After Flash Floods",
          bn: "আকস্মিক বন্যার পর জরুরি ত্রাণ বিতরণ",
        },
        slug: "dawate-khair-emergency-relief-flash-floods",
        date: "Apr 3, 2026",
        heroImage: stock("water-well-pulley.jpg"),
        gallery: [stock("water-well-pulley.jpg"), stock("mosque-exterior-sunset.jpg")],
        highlights: {
          en: [
            "Emergency packages delivered within 48 hours of flooding",
            "Coordinated with local union councils on the ground",
          ],
          bn: [
            "বন্যার ৪৮ ঘণ্টার মধ্যে জরুরি ত্রাণ প্যাকেজ পৌঁছে দেওয়া হয়",
            "স্থানীয় ইউনিয়ন পরিষদের সঙ্গে সমন্বয় করা হয়",
          ],
        },
        body: {
          en: [
            "Dawate Khair deployed emergency relief packages within 48 hours of flash flooding in low-lying districts, working with local union councils to reach affected households.",
            "The rapid response drew on the programme's standing emergency relief fund, kept in reserve for situations exactly like this one.",
          ],
          bn: [
            "নিম্নাঞ্চলীয় জেলাগুলোতে আকস্মিক বন্যার ৪৮ ঘণ্টার মধ্যে দাওয়াতে খায়র জরুরি ত্রাণ প্যাকেজ বিতরণ করে, স্থানীয় ইউনিয়ন পরিষদের সঙ্গে মিলে ক্ষতিগ্রস্ত পরিবারগুলোর কাছে পৌঁছায়।",
            "এই দ্রুত সাড়াদান কর্মসূচির স্থায়ী জরুরি ত্রাণ তহবিল থেকে সম্ভব হয়েছে, যা ঠিক এই ধরনের পরিস্থিতির জন্য সংরক্ষিত থাকে।",
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
    stat: "1,00,00,000+",
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
    address: "Anjuman Complex, Andarkilla, Chattogram, Bangladesh",
    phone: "02333388421",
  },
  {
    name: "Gawsia Committee — Sylhet",
    address: "Zindabazar Road, Sylhet, Bangladesh",
    phone: "01841-937872",
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
