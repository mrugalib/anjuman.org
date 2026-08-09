export const stats = [
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
    role: "Patron",
    msg: "Expanded the Trust's education and welfare programs across Chattogram through three decades of service.",
    image: "/images/founders/syed-muhammad-tayyab-shah.png",
    tagline: "Three decades expanding education & welfare",
    bio: "Expanded the Trust's education and welfare programs across Chattogram through three decades of dedicated service, opening new madrasas and welfare centres across the region.",
    location: "Chattogram, Bangladesh",
    committee: "Education Board",
    tags: ["Education", "Welfare", "Chattogram"],
  },
  {
    name: "Syed Muhammad Taher Shah",
    suffix: "(M.J.A.)",
    role: "Chief Patron",
    msg: "Oversees the Trust's spiritual guidance and represents Anjuman at national interfaith forums.",
    image: "/images/founders/syed-muhammad-taher-shah.png",
    tagline: "Spiritual guidance & interfaith representation",
    bio: "Oversees the Trust's spiritual guidance and represents Anjuman-E Rahmania at national interfaith forums, upholding the Ahle Sunnat wal Jamaat tradition across the sub-continent.",
    location: "Chattogram, Bangladesh",
    committee: "Chief Patronage",
    tags: ["Leadership", "Interfaith", "Guidance"],
  },
  {
    name: "Syed Muhammad Sabir Shah",
    suffix: "(M.J.A.)",
    role: "Patron",
    msg: "Leads the Gawsia Committee and coordinates relief efforts across the wider Sylhet region.",
    image: "/images/founders/syed-muhammad-sabir-shah.jpeg",
    tagline: "Leading relief efforts across Sylhet",
    bio: "Leads the Gawsia Committee and coordinates relief efforts across the wider Sylhet region, overseeing emergency response and community welfare distribution.",
    location: "Sylhet, Bangladesh",
    committee: "Gawsia Committee",
    tags: ["Relief", "Committee", "Sylhet"],
  },
];

export type NewsItem = {
  title: string;
  slug: string;
  excerpt?: string;
  date: string;
  body: string[];
  highlights: string[];
  heroImage: string;
  gallery: string[];
};

export type NewsCategory = {
  key: string;
  label: string;
  featured: NewsItem & { excerpt: string };
  rest: NewsItem[];
};

const stock = (name: string) => `/images/news/stock/${name}`;

export const newsCategories: NewsCategory[] = [
  {
    key: "latest",
    label: "Latest News",
    featured: {
      title: "Annual Milad Gathering Draws Thousands",
      slug: "annual-milad-gathering-draws-thousands",
      excerpt:
        "Chattogram congregation marks the largest turnout in a decade, with attendees arriving from six districts.",
      date: "Aug 2, 2026",
      heroImage: stock("congregation-baitul-mukarram.jpg"),
      gallery: [
        stock("mosque-interior-1.jpg"),
        stock("mosque-interior-3.jpg"),
        stock("congregation-friday-herat.jpg"),
      ],
      highlights: [
        "Largest turnout in a decade, with attendees from six districts",
        "Volunteers coordinated seating, transport and meals for the day",
        "Senior patrons led recitations and an address on the founders' legacy",
      ],
      body: [
        "The Trust's annual Milad gathering drew its largest crowd in a decade this year, with attendees travelling from six districts to take part in the congregation held at the Anjuman complex in Chattogram.",
        "Volunteers coordinated seating, transport and meals for the day, while senior patrons led the programme with recitations and an address on the life and legacy of the Trust's founders.",
        "Committee members noted that turnout has grown steadily each year, and are now reviewing plans to expand the venue's capacity ahead of next year's gathering.",
      ],
    },
    rest: [
      {
        title: "New Water Well Commissioned in Cox's Bazar",
        slug: "new-water-well-commissioned-coxs-bazar",
        date: "Jul 24, 2026",
        heroImage: stock("water-well-pulley.jpg"),
        gallery: [
          stock("water-well-pulley.jpg"),
          stock("relief-aid-distribution.jpg"),
          stock("mosque-exterior-sunset.jpg"),
        ],
        highlights: [
          "Over 60 households now have access to clean drinking water",
          "Funded through the Trust's general relief fund",
          "Completed in partnership with the local union council",
        ],
        body: [
          "A new tube well was commissioned in a coastal village near Cox's Bazar, giving over 60 households access to clean drinking water for the first time.",
          "The project was funded through the Trust's general relief fund and completed in partnership with the local union council, which helped identify the site and coordinate labour.",
          "Field volunteers report that the well will also serve two neighbouring hamlets that previously relied on a shared source over a kilometre away.",
        ],
      },
      {
        title: "Winter Clothing Drive Reaches 40 Villages",
        slug: "winter-clothing-drive-reaches-40-villages",
        date: "Jul 10, 2026",
        heroImage: stock("relief-aid-distribution.jpg"),
        gallery: [
          stock("relief-aid-distribution.jpg"),
          stock("water-well-pulley.jpg"),
          stock("congregation-baitul-mukarram.jpg"),
        ],
        highlights: [
          "Blankets and warm garments delivered to 40 villages",
          "Households identified through local committee surveys",
          "Distribution completed ahead of the coldest weeks of the season",
        ],
        body: [
          "This year's winter clothing drive distributed blankets and warm garments across 40 villages in the northern districts, reaching families identified through local committee surveys.",
          "Volunteers packed and delivered the donations directly to households ahead of the coldest weeks of the season, prioritising elderly residents and young children.",
          "The drive was funded entirely through Sadaqah contributions collected over the preceding two months.",
        ],
      },
    ],
  },
  {
    key: "education",
    label: "Education Board",
    featured: {
      title: "Scholarship Ceremony for 200 Students",
      slug: "scholarship-ceremony-for-200-students",
      excerpt: "Merit and need-based awards presented at the annual assembly.",
      date: "Jun 30, 2026",
      heroImage: stock("education-classroom.jpg"),
      gallery: [
        stock("education-classroom.jpg"),
        stock("calligraphy-learning.jpg"),
        stock("mosque-interior-2.jpg"),
      ],
      highlights: [
        "200 merit and need-based scholarships awarded this year",
        "Covers tuition and materials for the coming academic year",
        "Priority given to families already supported by Trust welfare programs",
      ],
      body: [
        "Two hundred students received merit and need-based scholarships at this year's Education Board assembly, covering tuition and materials for the coming academic year.",
        "Recipients were selected through a review of academic performance and household circumstance, with priority given to students from families supported by the Trust's welfare programs.",
        "The Board also announced a modest increase in the scholarship fund for next year, aiming to extend coverage to a further 50 students.",
      ],
    },
    rest: [
      {
        title: "New Classroom Block Opens in Rangpur",
        slug: "new-classroom-block-opens-in-rangpur",
        date: "Jun 18, 2026",
        heroImage: stock("education-classroom.jpg"),
        gallery: [
          stock("education-classroom.jpg"),
          stock("mosque-interior-1.jpg"),
          stock("calligraphy-learning.jpg"),
        ],
        highlights: [
          "Adds capacity for over 150 additional students",
          "Six classrooms plus a small library",
          "Funded through the Education Support fund",
        ],
        body: [
          "A newly built classroom block opened at the Trust's affiliated madrasa in Rangpur, adding capacity for over 150 additional students.",
          "The block includes six classrooms and a small library, funded through donations to the Education Support fund.",
          "Local staff say the new space will let the madrasa introduce a dedicated girls' section for the first time next term.",
        ],
      },
      {
        title: "Free Tutoring Program Launched",
        slug: "free-tutoring-program-launched",
        date: "Jun 5, 2026",
        heroImage: stock("calligraphy-learning.jpg"),
        gallery: [
          stock("calligraphy-learning.jpg"),
          stock("education-classroom.jpg"),
          stock("quran-manuscript.jpg"),
        ],
        highlights: [
          "Free after-school tutoring for board and religious exams",
          "Staffed by volunteer teachers and senior students",
          "Runs twice weekly at Trust-affiliated madrasas in Chattogram",
        ],
        body: [
          "A free after-school tutoring program has launched for students preparing for board and religious examinations, staffed by volunteer teachers and senior students.",
          "Sessions run twice weekly at Trust-affiliated madrasas across Chattogram, with plans to expand to further districts later this year.",
          "Organisers say early sign-up numbers have exceeded expectations, and are now recruiting additional volunteer tutors.",
        ],
      },
    ],
  },
  {
    key: "tarjuman",
    label: "Tarjuman",
    featured: {
      title: "Darse Quran: Surah Al-Kahf Explained",
      slug: "darse-quran-surah-al-kahf-explained",
      excerpt: "A weekly reading circle on patience and trial.",
      date: "Aug 1, 2026",
      heroImage: stock("quran-manuscript.jpg"),
      gallery: [
        stock("quran-manuscript.jpg"),
        stock("quran-page.jpg"),
        stock("calligraphy-classic.jpg"),
      ],
      highlights: [
        "Focus on patience, trial and reliance on divine wisdom",
        "Drawn from the stories of the Companions of the Cave and Khidr",
        "Closed with guidance on applying the lessons to everyday hardship",
      ],
      body: [
        "This week's Darse Quran session examined Surah Al-Kahf, focusing on its themes of patience, trial and reliance on divine wisdom through the stories of the Companions of the Cave and Khidr.",
        "The session closed with a discussion on applying these lessons to everyday hardship, drawing from classical commentary and the words of the Trust's scholars.",
        "Attendees were given a short reading list for the following week, continuing the circle's chapter-by-chapter study of the surah.",
      ],
    },
    rest: [
      {
        title: "Darse Hadith: On Kindness to Neighbours",
        slug: "darse-hadith-kindness-to-neighbours",
        date: "Jul 27, 2026",
        heroImage: stock("quran-page.jpg"),
        gallery: [
          stock("quran-page.jpg"),
          stock("calligraphy-classic.jpg"),
          stock("mosque-interior-2.jpg"),
        ],
        highlights: [
          "Covered prophetic traditions on kindness to neighbours",
          "Discussed etiquette of sharing and checking in on the unwell",
          "Encouraged reflection within attendees' own communities",
        ],
        body: [
          "This week's Darse Hadith explored prophetic traditions on kindness to neighbours, covering the etiquette of sharing, checking in on the unwell, and resolving disputes gently.",
          "Attendees were encouraged to reflect on these teachings within their own communities over the coming week.",
          "The session forms part of an ongoing series examining social conduct in the hadith literature.",
        ],
      },
      {
        title: "Weekly Q&A: Your Questions Answered",
        slug: "weekly-qa-your-questions-answered",
        date: "Jul 20, 2026",
        heroImage: stock("calligraphy-classic.jpg"),
        gallery: [
          stock("calligraphy-classic.jpg"),
          stock("quran-manuscript.jpg"),
          stock("mosque-interior-3.jpg"),
        ],
        highlights: [
          "Addressed questions on prayer, fasting and family matters",
          "Questions submitted in advance through the outreach desk",
          "Recordings available on request through the Tarjuman committee",
        ],
        body: [
          "The Trust's weekly Q&A session addressed reader questions on prayer, fasting and family matters, submitted in advance through the community outreach desk.",
          "Recordings of the session are available on request through the Tarjuman committee.",
          "Organisers welcome new questions year-round for consideration in upcoming sessions.",
        ],
      },
    ],
  },
  {
    key: "khair",
    label: "Dawate Khair",
    featured: {
      title: "Da'wat-e-Khair Magazine, August Issue",
      slug: "dawat-e-khair-magazine-august-issue",
      excerpt: "This month: youth in dawah, and a founder's letter.",
      date: "Aug 1, 2026",
      heroImage: stock("calligraphy-classic.jpg"),
      gallery: [
        stock("calligraphy-classic.jpg"),
        stock("calligraphy-learning.jpg"),
        stock("quran-page.jpg"),
      ],
      highlights: [
        "Special section on youth in modern dawah work",
        "A letter from the Chief Patron on a century of service",
        "Available in print at all Trust offices and digitally by mail",
      ],
      body: [
        "The August issue of Da'wat-e-Khair features a special section on the role of youth in modern dawah work, alongside a letter from the Trust's Chief Patron reflecting on a century of service.",
        "Print copies are available at all Trust offices, with a digital edition distributed through the mailing list.",
        "This issue also introduces a new reader-submissions column, inviting short reflections for future editions.",
      ],
    },
    rest: [
      {
        title: "Dawate Iftar Highlights",
        slug: "dawate-iftar-highlights",
        date: "Jul 15, 2026",
        heroImage: stock("congregation-friday-herat.jpg"),
        gallery: [
          stock("congregation-friday-herat.jpg"),
          stock("congregation-baitul-mukarram.jpg"),
          stock("relief-aid-distribution.jpg"),
        ],
        highlights: [
          "Meals served to thousands of families during Ramadan",
          "Delivered across all Trust-affiliated centres",
          "Made possible by volunteers and donors region-wide",
        ],
        body: [
          "This year's community Iftar programs served meals to thousands of families across Trust-affiliated centres during the month of Ramadan.",
          "Volunteers and donors from across the region contributed to make the daily distributions possible.",
          "Organisers are already planning an expanded schedule of centres for next year's programme.",
        ],
      },
      {
        title: "Community Food Distribution Report",
        slug: "community-food-distribution-report",
        date: "Jul 8, 2026",
        heroImage: stock("relief-aid-distribution.jpg"),
        gallery: [
          stock("relief-aid-distribution.jpg"),
          stock("water-well-pulley.jpg"),
          stock("mosque-exterior-sunset.jpg"),
        ],
        highlights: [
          "Over 3,000 packages delivered this quarter",
          "Families identified through local welfare surveys",
          "Funded through the general and Sadaqah funds",
        ],
        body: [
          "A summary report on this quarter's community food distribution shows over 3,000 packages delivered to families identified through local welfare surveys.",
          "The program continues on a rolling basis, funded through the general and Sadaqah funds.",
          "The welfare committee plans to publish distribution reports quarterly going forward for full transparency with donors.",
        ],
      },
    ],
  },
  {
    key: "gawsia",
    label: "Gawsia Committee",
    featured: {
      title: "Committee Elects New Regional Heads",
      slug: "committee-elects-new-regional-heads",
      excerpt: "Fresh leadership for the Sylhet and Chattogram chapters.",
      date: "Jun 28, 2026",
      heroImage: stock("mosque-exterior-sunset.jpg"),
      gallery: [
        stock("mosque-exterior-sunset.jpg"),
        stock("mosque-interior-2.jpg"),
        stock("congregation-friday-herat.jpg"),
      ],
      highlights: [
        "New regional heads elected for Sylhet and Chattogram",
        "Fresh leadership brought in for the coming term",
        "Outgoing officials recognised for their contributions",
      ],
      body: [
        "The Gawsia Committee elected new regional heads for its Sylhet and Chattogram chapters at its annual general meeting, bringing in fresh leadership for the coming term.",
        "Outgoing officials were recognised for their contributions to relief coordination and congregation logistics over the past term.",
        "The incoming heads outlined priorities for the term ahead, including closer coordination between the two chapters on relief logistics.",
      ],
    },
    rest: [
      {
        title: "Annual Congregation Photos",
        slug: "annual-congregation-photos",
        date: "Jun 20, 2026",
        heroImage: stock("congregation-baitul-mukarram.jpg"),
        gallery: [
          stock("congregation-baitul-mukarram.jpg"),
          stock("mosque-interior-1.jpg"),
          stock("mosque-interior-3.jpg"),
        ],
        highlights: [
          "Largest attendance at the annual congregation to date",
          "Album covers the main assembly and closing address",
          "Includes behind-the-scenes shots of the logistics teams",
        ],
        body: [
          "Photographs from this year's annual congregation are now available, capturing the gathering's largest attendance to date.",
          "The album includes highlights from the main assembly, volunteer logistics teams and the closing address.",
          "Prints of selected photographs will be displayed at the Trust's head office through the end of the month.",
        ],
      },
      {
        title: "Friday Sermon Series Begins",
        slug: "friday-sermon-series-begins",
        date: "Jun 1, 2026",
        heroImage: stock("mosque-interior-2.jpg"),
        gallery: [
          stock("mosque-interior-2.jpg"),
          stock("mosque-exterior-sunset.jpg"),
          stock("congregation-friday-herat.jpg"),
        ],
        highlights: [
          "New eight-week series across Gawsia-affiliated masjids",
          "Focus on community responsibility and spiritual renewal",
          "Guest speakers rotating between chapters each week",
        ],
        body: [
          "A new Friday sermon series has begun across Gawsia Committee-affiliated masjids, focusing on themes of community responsibility and spiritual renewal.",
          "The series will run for eight weeks, with guest speakers rotating between chapters.",
          "Congregants can find the full speaker schedule posted at each affiliated masjid's noticeboard.",
        ],
      },
    ],
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

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/#news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerMenu = [
  { label: "About Us", href: "/about" },
  { label: "Activities", href: "/#news" },
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
    year: "1926",
    title: "Trust Established in Rangoon",
    text: "Syed Ahmed Shah Sirikoti founds the Anjuman in Rangoon (Burma) to unite the Sunni Muslim Mashab and Millat under one charitable banner.",
  },
  {
    year: "1937",
    title: "Reconstituted in Chattogram",
    text: "On 29 August, the disciples of Huzur Ahmad Shah reconstitute the Trust in Chattogram, laying the foundation for its present-day institutions.",
  },
  {
    year: "1958",
    title: "First Madrasa Opens",
    text: "The Trust opens its first religious school, beginning six decades of continuous investment in Islamic and general education.",
  },
  {
    year: "1981",
    title: "Gawsia Committee Formed",
    text: "A dedicated committee is formed to coordinate congregations, relief work and outreach across the wider Sylhet and Chattogram regions.",
  },
  {
    year: "2003",
    title: "Anjuman Relief Launched",
    text: "A standing emergency-relief programme is created to respond to floods, cyclones and humanitarian crises across Bangladesh.",
  },
  {
    year: "2026",
    title: "200+ Institutions Nationwide",
    text: "Today the Trust runs over 200 institutions and dawah programs, reaching more than a crore of lives each year.",
  },
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
