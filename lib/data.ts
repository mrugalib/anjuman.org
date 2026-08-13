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
      title: "Flood Relief Reaches Balaghata, Bandarban",
      slug: "gausia-committee-bandarban-flood-relief",
      excerpt:
        "Gausia Committee volunteers carried relief packages on foot into Balaghata, one of the hardest-to-reach flood-affected villages in the hill district of Bandarban.",
      date: "Jul 14, 2026",
      heroImage: "/images/activities/gausia-bandarban-relief-1.jpg",
      gallery: [
        "/images/activities/gausia-bandarban-relief-1.jpg",
        "/images/activities/gausia-bandarban-relief-2.jpg",
        "/images/activities/gausia-bandarban-relief-3.jpg",
        "/images/activities/gausia-bandarban-relief-4.jpg",
        "/images/activities/gausia-bandarban-relief-5.jpg",
      ],
      highlights: [
        "Relief packages carried on foot into Balaghata, Bandarban",
        "Part of a wider flood relief drive spanning hill and plain districts",
        "Packages delivered directly to flood-affected families by committee volunteers",
      ],
      body: [
        "The Gausia Committee Bangladesh's relief distribution programme has reached Balaghata in Bandarban, carrying essential supplies into one of the hardest-to-reach flood-affected areas of the hill district.",
        "Volunteers in the committee's green vests carried sacks of relief materials on foot through the affected village, distributing packages directly to families whose homes had been affected by the flooding.",
        "\"From the hills to the plains, Gausiyans everywhere are engaged in the service of humanity,\" the committee said, describing the effort as part of a wider relief drive that has now reached communities across both hill and plain districts.",
      ],
    },
    rest: [
      {
        title: "Day-Long Teacher Training Workshop Held at CUET IT Business Incubator",
        slug: "education-board-chuet-teacher-training-workshop",
        date: "Jun 20, 2026",
        heroImage: "/images/activities/edu-chuet-workshop-1.jpg",
        gallery: [
          "/images/activities/edu-chuet-workshop-1.jpg",
          "/images/activities/edu-chuet-workshop-2.jpg",
          "/images/activities/edu-chuet-workshop-3.jpg",
        ],
        highlights: [
          "Around 180 teachers from 10 madrasahs across Raozan and Rangunia attended",
          "Sessions covered outcome-based learning, EdTech/AI, classroom management and exam evaluation",
        ],
        body: [
          "The Anjuman Education Management Board (AEMB), Chattogram held a day-long teacher training workshop at the CUET IT Business Incubator, aimed at improving the quality of madrasah education and strengthening teachers' professional skills.",
          "Nearly 180 teachers from ten madrasahs across Raozan and Rangunia upazilas took part, with certificates distributed to all participants at the closing ceremony.",
        ],
      },
      {
        title: "Da'wat-E Khair Ijtema Held in Potiya",
        slug: "dawate-khair-potiya-ijtema",
        date: "May 2, 2026",
        heroImage: "/images/activities/khair-potiya-ijtema-1.jpg",
        gallery: [
          "/images/activities/khair-potiya-ijtema-1.jpg",
          "/images/activities/khair-potiya-ijtema-2.jpg",
          "/images/activities/khair-potiya-ijtema-3.jpg",
        ],
        highlights: [
          "Held at Potiya Shah Chand Awlia Mazar & Madrasah's adjoining Jame Masjid",
          "Organised by the Da'wat-E Khair Standing Committee with Gausia Committee Chattogram South",
        ],
        body: [
          "Speakers at the Da'wat-E Khair ijtema in Potiya said the purpose of the Da'wat-E Khair Majlis is to teach the basic rulings of Islam to Muslim men and women in a simple, accessible way, and called for the movement to be expanded through wholehearted effort.",
          "The gathering, held for the Da'wat-E Khair year 2026, closed with the announcement of a topic-wise syllabus for trained Muallims to teach over the next three months.",
        ],
      },
      {
        title: "Review Meeting & Thank-You Letters for Da'wat-E Khair Thana Committees",
        slug: "research-centre-khair-review-meeting-thanks-letters",
        date: "Jul 29, 2026",
        heroImage: "/images/activities/research-khair-review-meeting-1.jpg",
        gallery: [
          "/images/activities/research-khair-review-meeting-1.jpg",
          "/images/activities/research-khair-review-meeting-2.jpg",
          "/images/activities/research-khair-review-meeting-3.jpg",
          "/images/activities/research-khair-review-meeting-4.jpg",
        ],
        highlights: [
          "Review meeting held with organisers of the 3rd monthly Da'wat-E Khair ijtema",
          "Thank-you letters presented to all six participating thana committees",
        ],
        body: [
          "On 29 July 2026, the Anjuman Research Centre convened a review meeting with the leaders of the six thana committees that organised the third monthly Da'wat-E Khair ijtema, followed by the presentation of thank-you letters to each participating committee.",
          "The meeting was attended by the Da'wat-E Khair Standing Committee, together with leaders of Gausia Committee Bangladesh and representatives from the Khulshi, Akbar Shah, Pahartali, Kotwali East, Kotwali West and Karnaphuli thana committees.",
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
      {
        title: "Board Approves New Exam Scholarship Track",
        slug: "board-approves-new-exam-scholarship-track",
        date: "May 22, 2026",
        heroImage: stock("quran-page.jpg"),
        gallery: [
          stock("quran-page.jpg"),
          stock("education-classroom.jpg"),
          stock("calligraphy-learning.jpg"),
        ],
        highlights: [
          "New scholarship track for top religious exam performers",
          "Open to students at all affiliated madrasas",
          "First awards to be presented at next year's assembly",
        ],
        body: [
          "The Education Board has approved a new scholarship track recognising top performers in religious examinations across affiliated madrasas.",
          "The track is open to students at every affiliated institution, with award criteria published to administrators this month.",
          "The first round of awards under the new track will be presented at next year's scholarship assembly.",
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
      {
        title: "Tafsir Circle Begins New Chapter Study",
        slug: "tafsir-circle-begins-new-chapter-study",
        date: "Jul 13, 2026",
        heroImage: stock("mosque-interior-1.jpg"),
        gallery: [
          stock("mosque-interior-1.jpg"),
          stock("quran-manuscript.jpg"),
          stock("quran-page.jpg"),
        ],
        highlights: [
          "New chapter-by-chapter tafsir circle opened to all attendees",
          "Meets weekly following the Maghrib congregation",
          "Notes distributed for those unable to attend in person",
        ],
        body: [
          "The Tarjuman committee has opened a new chapter-by-chapter tafsir circle, welcoming attendees of all backgrounds to join the weekly sessions.",
          "The circle meets weekly following the Maghrib congregation, led by one of the Trust's resident scholars.",
          "Written notes from each session are distributed afterward for those unable to attend in person.",
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
      {
        title: "Reader Letters: A Century of Service",
        slug: "reader-letters-a-century-of-service",
        date: "Jun 30, 2026",
        heroImage: stock("calligraphy-learning.jpg"),
        gallery: [
          stock("calligraphy-learning.jpg"),
          stock("calligraphy-classic.jpg"),
          stock("mosque-exterior-sunset.jpg"),
        ],
        highlights: [
          "Selected reader letters marking the Trust's centenary",
          "Submissions gathered from across the mailing list",
          "Full collection to run across three upcoming issues",
        ],
        body: [
          "This edition's reader letters column features submissions marking the Trust's approaching centenary, gathered from readers across the mailing list.",
          "Contributors shared memories of the Trust's institutions and the impact of its relief and education work on their families.",
          "The full collection of letters will run across three upcoming issues of Da'wat-e-Khair.",
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
      {
        title: "New Madrasah and Orphanage Open in Sub-Continent",
        slug: "new-madrasah-and-orphanage-open-in-sub-continent",
        date: "May 15, 2026",
        heroImage: stock("mosque-interior-3.jpg"),
        gallery: [
          stock("mosque-interior-3.jpg"),
          stock("education-classroom.jpg"),
          stock("mosque-exterior-sunset.jpg"),
        ],
        highlights: [
          "Combined madrasah and orphanage facility now open",
          "Built with support from affiliated chapters abroad",
          "Provides boarding, schooling and religious education",
        ],
        body: [
          "A combined madrasah and orphanage facility affiliated with the Gawsia Committee has opened, built with support from chapters across the sub-continent.",
          "The facility provides boarding, general schooling and religious education for children in its care.",
          "Committee officials say the facility will serve as a model for similar projects planned in other regions.",
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

export const activityCategories: NewsCategory[] = [
  {
    key: "gausia",
    label: "Gausia Committee Bangladesh",
    featured: {
      title: "Flood Relief Reaches Balaghata, Bandarban",
      slug: "gausia-committee-bandarban-flood-relief",
      excerpt:
        "Gausia Committee volunteers carried relief packages on foot into Balaghata, one of the hardest-to-reach flood-affected villages in the hill district of Bandarban.",
      date: "Jul 14, 2026",
      heroImage: "/images/activities/gausia-bandarban-relief-1.jpg",
      gallery: [
        "/images/activities/gausia-bandarban-relief-1.jpg",
        "/images/activities/gausia-bandarban-relief-2.jpg",
        "/images/activities/gausia-bandarban-relief-3.jpg",
        "/images/activities/gausia-bandarban-relief-4.jpg",
        "/images/activities/gausia-bandarban-relief-5.jpg",
      ],
      highlights: [
        "Relief packages carried on foot into Balaghata, Bandarban",
        "Part of a wider flood relief drive spanning hill and plain districts",
        "Packages delivered directly to flood-affected families by committee volunteers",
      ],
      body: [
        "The Gausia Committee Bangladesh's relief distribution programme has reached Balaghata in Bandarban, carrying essential supplies into one of the hardest-to-reach flood-affected areas of the hill district.",
        "Volunteers in the committee's green vests carried sacks of relief materials on foot through the affected village, distributing packages directly to families whose homes had been affected by the flooding.",
        "\"From the hills to the plains, Gausiyans everywhere are engaged in the service of humanity,\" the committee said, describing the effort as part of a wider relief drive that has now reached communities across both hill and plain districts, and pledging that this tradition of service will continue, God willing, until the Day of Judgement.",
      ],
    },
    rest: [
      {
        title: "Meeting on Ensuring Sustainable Education Held at Dhaka Quaderia Madrasah",
        slug: "gausia-committee-dhaka-kaderia-education-meeting",
        date: "Jul 19, 2026",
        heroImage: "/images/activities/gausia-dhaka-kaderia-education-meeting-1.jpg",
        gallery: [
          "/images/activities/gausia-dhaka-kaderia-education-meeting-1.jpg",
          "/images/activities/gausia-dhaka-kaderia-education-meeting-2.jpg",
          "/images/activities/gausia-dhaka-kaderia-education-meeting-3.jpg",
        ],
        highlights: [
          "Held at Quaderia Tayyebia Kamil Madrasah, Dhaka on 19 July 2026",
          "Organised by the Anjuman Education Management Board",
          "Chaired by AEMB Chairman Professor Dr. N.K.M. Akbar Hossain",
        ],
        body: [
          "The Anjuman Education Management Board organised a 'consultation meeting on ensuring sustainable education' at Quaderia Tayyebia Kamil Madrasah in Dhaka, known as a beacon for producing sincere scholars under the Anjuman Trust in the capital.",
          "The meeting, held on Sunday, 19 July 2026, was chaired by AEMB Chairman Professor Dr. N.K.M. Akbar Hossain. Alhaj Mohammad Manjur Alam (Manju), Senior Vice President of the central Anjuman, attended as chief guest.",
          "Also present were the central Anjuman's Secretary General Alhaj Mohammed Anowar Hossain, leaders of the central Anjuman, leaders of the Dhaka Anjuman, leaders of the Education Board, and Dhaka Quaderia Madrasah's Principal Mufti Muhammad Jashim Uddin Al-Azhari along with other members of the teaching staff.",
        ],
      },
      {
        title: "Gausia Committee Sends Humanitarian Aid Shipment for Gaza, Palestine",
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
        highlights: [
          "Pallets of relief supplies packed and loaded for shipment to Gaza",
          "Sent under the auspices of the Grand Imam of Al-Azhar's office",
          "Part of the committee's 'Love for Gaza, Palestine' humanitarian campaign",
        ],
        body: [
          "\"Alhamdulillah — Gausia Committee Bangladesh, a humanitarian organisation, stands with the oppressed people of Palestine,\" the committee announced as it dispatched a shipment of humanitarian aid for Gaza.",
          "Warehouse photos show pallets of relief boxes packed and wrapped for transport, loaded onto flatbed trucks for onward shipment, with the consignment sent under the auspices of the office of the Grand Imam of Al-Azhar.",
          "Volunteers and committee members gathered around the 'Love for Gaza, Palestine' banner ahead of the shipment, part of the Gausia Committee's ongoing campaign in solidarity with the people of Gaza.",
        ],
      },
      {
        title: "Alim 2nd Year Class Committee Formed at Jamea Ahmadia Sunnia",
        slug: "gausia-committee-alim-2nd-year-class-committee",
        date: "Aug 9, 2026",
        heroImage: "/images/activities/gausia-alim-2nd-year-class-committee-1.jpg",
        gallery: [
          "/images/activities/gausia-alim-2nd-year-class-committee-1.jpg",
          "/images/activities/gausia-alim-2nd-year-class-committee-2.jpg",
        ],
        highlights: [
          "Class committee approved for the Alim 2nd year batch",
          "Formed under the Jamea Ahmadia Sunnia Kamil Madrasah branch",
          "Organised by Gausia Committee Bangladesh (JASA chapter)",
        ],
        body: [
          "Gausia Committee Bangladesh has approved the class committee for the Alim 2nd year batch under its Jamea Ahmadia Sunnia Kamil Madrasah branch.",
          "The committee was formally approved on Sunday, 9 August 2026, and the newly formed body was photographed together in the madrasah's courtyard.",
        ],
      },
    ],
  },
  {
    key: "research",
    label: "Research Centre",
    featured: {
      title: "Review Meeting & Thank-You Letters for Da'wat-E Khair Thana Committees",
      slug: "research-centre-khair-review-meeting-thanks-letters",
      excerpt:
        "The Anjuman Research Centre convened a review meeting with the six thana committees behind the third monthly Da'wat-E Khair ijtema, presenting each with a letter of thanks.",
      date: "Jul 29, 2026",
      heroImage: "/images/activities/research-khair-review-meeting-1.jpg",
      gallery: [
        "/images/activities/research-khair-review-meeting-1.jpg",
        "/images/activities/research-khair-review-meeting-2.jpg",
        "/images/activities/research-khair-review-meeting-3.jpg",
        "/images/activities/research-khair-review-meeting-4.jpg",
      ],
      highlights: [
        "Review meeting held with organisers of the 3rd monthly Da'wat-E Khair ijtema",
        "Thank-you letters presented to all six participating thana committees",
        "Attended by the Da'wat-E Khair Standing Committee and Gausia Committee Bangladesh leaders",
      ],
      body: [
        "On 29 July 2026, a review meeting was held with the leaders of the six thana committees that organised the third monthly Da'wat-E Khair ijtema, followed by the presentation of thank-you letters to each participating committee.",
        "The meeting was attended by the Da'wat-E Khair Standing Committee, together with leaders of Gausia Committee Bangladesh and representatives from the Khulshi, Akbar Shah, Pahartali, Kotwali East, Kotwali West and Karnaphuli thana committees.",
      ],
    },
    rest: [
      {
        title: "Gausia Qira'at Training 2026 Begins at Alamgir Khankah Sharif",
        slug: "research-centre-gausia-qiraat-training-2026",
        date: "3 Ramadan 1447 AH",
        heroImage: "/images/activities/research-qiraat-training-1.jpg",
        gallery: [
          "/images/activities/research-qiraat-training-1.jpg",
          "/images/activities/research-qiraat-training-2.jpg",
          "/images/activities/research-qiraat-training-3.jpg",
          "/images/activities/research-qiraat-training-4.jpg",
        ],
        highlights: [
          "Daily sessions from 2:00pm to 4:00pm at Alamgir Khankah Sharif",
          "Runs from 3 Ramadan through to 24 Ramadan",
          "Organised by the Da'wat-E Khair Standing Committee, supervised by the Anjuman Research Centre",
        ],
        body: [
          "Gausia Qira'at Training 2026 has begun, running daily from 3 Ramadan through to 24 Ramadan, held each afternoon from 2:00pm to 4:00pm at Alamgir Khankah Sharif.",
          "The training is organised by the Da'wat-E Khair Standing Committee, sponsored by Anjuman-E Rahmania Ahmadia Sunnia Trust, Chattogram, and supervised by the Anjuman Research Centre.",
        ],
      },
      {
        title: "Gausia Committee Launches Milad Olympiad, Season 2",
        slug: "research-centre-milad-olympiad-season-2",
        date: "Aug 15, 2026",
        heroImage: "/images/activities/research-milad-olympiad-poster.png",
        gallery: ["/images/activities/research-milad-olympiad-poster.png"],
        highlights: [
          "Total prize pool of Tk 2.5 lakh shared among 12 winners",
          "1st prize: a Ziyarat (holy visit) to the Haramain Sharifain",
          "Selection round exam on 15 August 2026, syllabus based on the book Nurunnabi",
        ],
        body: [
          "Marking the holy Milad of Sayyidul Mursalin, Rahmatul lil Alameen, Huzur Karim (peace and blessings be upon him), the Gausia Committee Bangladesh's Jamea Ahmadia Sunnia Kamil Madrasah branch has launched the Milad Olympiad, Season 2, offering a total prize pool of Tk 2.5 lakh across 12 winners.",
          "The top prize is a Ziyarat (holy visit) to the Haramain Sharifain, followed by a laptop for 2nd place and a tablet for 3rd, with cash prizes of Tk 7,000 and Tk 5,000 for 4th and 5th place. Winners placed 6th to 12th receive certificates, medals and gift hampers.",
          "The syllabus is drawn from the book Nurunnabi by Hafez Muhammad Abdul Jalil (rah.): the selection round covers chapters 1–30, the elimination round chapters 31–55, and the final round the complete book together with a designated PDF. The selection round exam is scheduled for 15 August 2026, with elimination and final round dates to be announced later; the first two rounds will be held online via miladolympiad.com. Registration costs Tk 150.",
        ],
      },
      {
        title: "Centre Hosts Roundtable on Community Welfare Policy",
        slug: "research-centre-roundtable-welfare-policy",
        date: "Mar 30, 2026",
        heroImage: stock("mosque-interior-2.jpg"),
        gallery: [stock("mosque-interior-2.jpg"), stock("quran-manuscript.jpg")],
        highlights: [
          "Roundtable brought together researchers and chapter representatives",
          "Discussed findings from the welfare trends study",
        ],
        body: [
          "The Research Centre hosted a roundtable bringing together researchers and chapter representatives to discuss findings from its welfare trends study.",
          "Participants exchanged views on how the findings could shape programme planning across affiliated institutions.",
        ],
      },
    ],
  },
  {
    key: "education",
    label: "Education Board",
    featured: {
      title: "Day-Long Teacher Training Workshop Held at CUET IT Business Incubator",
      slug: "education-board-chuet-teacher-training-workshop",
      excerpt:
        "AEMB brought together nearly 180 teachers from Raozan and Rangunia's madrasahs for a day-long faculty development workshop on modern pedagogy and quality education.",
      date: "Jun 20, 2026",
      heroImage: "/images/activities/edu-chuet-workshop-1.jpg",
      gallery: [
        "/images/activities/edu-chuet-workshop-1.jpg",
        "/images/activities/edu-chuet-workshop-2.jpg",
        "/images/activities/edu-chuet-workshop-3.jpg",
      ],
      highlights: [
        "Around 180 teachers from 10 madrasahs across Raozan and Rangunia attended",
        "Sessions covered outcome-based learning, EdTech/AI, classroom management, discipline and exam evaluation",
        "Certificates were presented to all participating teachers at the closing ceremony",
      ],
      body: [
        "The Anjuman Education Management Board (AEMB), Chattogram held a day-long teacher training workshop at the CUET IT Business Incubator, aimed at improving the quality of madrasah education, spreading modern teaching methods and strengthening teachers' professional skills.",
        "Nearly 180 teachers from ten madrasahs across Raozan and Rangunia upazilas took part. The day's sessions covered the current challenges facing madrasah education and strategies to overcome them, outcome-based learning (OBL), the use of IT and artificial intelligence in education, classroom and time management, positive discipline practices, the 2011 policy abolishing corporal punishment, bullying and cyber safety, question-paper setting and answer-script evaluation, results preparation, service and leave rules, financial discipline, and effective lesson planning.",
        "AEMB Vice Chairman Alhaj M. A. Hamid, FCMA delivered the welcome address, saying the board is working continuously through teacher training, academic supervision and modern evaluation methods to ensure quality, modern and values-based education across Anjuman-affiliated madrasahs. Resource persons for the day included AEMB Chairman Professor Dr. N. K. M. Akbar Hossain, Professor Abu Saleh Mohammad Naeem Uddin, Professor Muhammad Gofran and Principal Dr. Mohammad Sarwar Uddin.",
        "The closing and certificate-distribution ceremony was chaired by Professor Dr. N. K. M. Akbar Hossain, with Anjuman-E Rahmania Ahmadia Sunnia Trust Secretary General Alhaj Mohammed Anowar Hossain as chief guest and CUET IT Business Incubator Director Professor Dr. Mohammad Moshiul Hoque as guest of honour, alongside Finance Secretary Kamar Uddin Sabur and AEMB Vice Chairman M. A. Hamid, FCMA as special guests. \"Teachers are the principal architects of a nation's future — there is no substitute for regular training and skills development if madrasah education is to remain modern and competitive,\" said Alhaj Mohammed Anowar Hossain in his address.",
        "Certificates were distributed to all participating teachers at the close of the workshop, and attendees called for such training programmes to be organised regularly going forward.",
      ],
    },
    rest: [
      {
        title: "New Madrasah Curriculum Approved for Rollout",
        slug: "education-board-new-curriculum-rollout",
        date: "Jun 2, 2026",
        heroImage: stock("calligraphy-classic.jpg"),
        gallery: [stock("calligraphy-classic.jpg"), stock("education-classroom.jpg")],
        highlights: [
          "Updated curriculum to roll out across affiliated madrasahs",
          "Developed with input from senior teaching staff",
        ],
        body: [
          "The Education Board has approved an updated curriculum for rollout across affiliated madrasahs, developed with input from senior teaching staff.",
          "Institutions will begin phasing in the new curriculum from the coming academic term.",
        ],
      },
      {
        title: "Teacher Training Workshop Held in Chattogram",
        slug: "education-board-teacher-training-workshop",
        date: "May 8, 2026",
        heroImage: stock("education-classroom.jpg"),
        gallery: [stock("education-classroom.jpg"), stock("calligraphy-learning.jpg")],
        highlights: [
          "Workshop drew teaching staff from affiliated institutions",
          "Focused on classroom methods and student welfare practices",
        ],
        body: [
          "The Education Board hosted a teacher training workshop in Chattogram, drawing teaching staff from affiliated institutions across the district.",
          "Sessions focused on classroom methods and student welfare practices, led by senior educators from the board.",
        ],
      },
      {
        title: "Board Opens New Scholarship Applications Portal",
        slug: "education-board-scholarship-applications-portal",
        date: "Apr 14, 2026",
        heroImage: stock("quran-page.jpg"),
        gallery: [stock("quran-page.jpg"), stock("education-classroom.jpg")],
        highlights: [
          "New online portal for scholarship applications",
          "Reduces paperwork for affiliated institution administrators",
        ],
        body: [
          "The Education Board has launched a new online portal for scholarship applications, replacing the previous paper-based process.",
          "Institution administrators say the portal significantly reduces the paperwork involved in submitting and tracking applications.",
        ],
      },
    ],
  },
  {
    key: "khair",
    label: "Dawate Khair",
    featured: {
      title: "Da'wat-E Khair Ijtema Held in Potiya",
      slug: "dawate-khair-potiya-ijtema",
      excerpt:
        "Speakers at the Potiya ijtema called for wider outreach so ordinary Muslim men and women can easily learn the basic rulings of Islam, as Da'wat-E Khair announced its next three-month syllabus for trained Muallims.",
      date: "May 2, 2026",
      heroImage: "/images/activities/khair-potiya-ijtema-1.jpg",
      gallery: [
        "/images/activities/khair-potiya-ijtema-1.jpg",
        "/images/activities/khair-potiya-ijtema-2.jpg",
        "/images/activities/khair-potiya-ijtema-3.jpg",
      ],
      highlights: [
        "Held at Potiya Shah Chand Awlia Mazar & Madrasah's adjoining Jame Masjid",
        "Organised by the Da'wat-E Khair Standing Committee with Gausia Committee Chattogram South",
        "Next three-month topic-wise syllabus announced for trained Muallims",
      ],
      body: [
        "Speakers at the Da'wat-E Khair ijtema in Potiya said the purpose of the Da'wat-E Khair Majlis is to teach the basic rulings of Islam to Muslim men and women in a simple, accessible way, and called for the movement to be expanded through wholehearted effort. Pir Sabir Shah Maddazilluhul Ali, the founder of the Majlis, has directed everyone to carry out this work with sincerity.",
        "The ijtema was held on Saturday, 2 May 2026 at 9:00am at the Jame Masjid adjoining the Potiya Shah Chand Awlia Mazar and Madrasah, organised under the supervision of the Da'wat-E Khair Standing Committee of Anjuman-E Rahmania Ahmadia Sunnia Trust, with the courtesy of the Gausia Committee Chattogram South district.",
        "The session was chaired by Da'wat-E Khair Standing Committee convener Mufti Syed Osiyor Rahman Al-Qaderi, and conducted by member secretaries Mosaheb Uddin Bakhtiar and Habibullah Master. Mufti Kazi Abdul Wajed served as chief Muallim, answering questions from attendees, while Anjuman Research Centre Director General Allama Abdul Mannan and Southern University professor Syed Jalal Uddin Al-Azhari delivered talim and discourse on contemporary issues. Maulana Imran Hasan Al-Qaderi conducted the programme and announced the next steps.",
        "The gathering, held for the Da'wat-E Khair year 2026, brought together district, upazila and union-level presidents, general secretaries and Da'wat-E Khair secretaries alongside trained Muallims and officials of the Chattogram South district committee. The ijtema closed with the announcement of a topic-wise syllabus for Muallims to teach over the next three months.",
      ],
    },
    rest: [
      {
        title: "Volunteer Corps Doubles in Size This Year",
        slug: "dawate-khair-volunteer-corps-growth",
        date: "Jun 20, 2026",
        heroImage: stock("water-well-pulley.jpg"),
        gallery: [stock("water-well-pulley.jpg"), stock("relief-aid-distribution.jpg")],
        highlights: [
          "Active volunteer numbers have doubled compared to last year",
          "New volunteers trained through monthly orientation sessions",
        ],
        body: [
          "Dawate Khair's volunteer corps has doubled in size this year, with new members trained through monthly orientation sessions.",
          "The growth has allowed the programme to take on additional relief and outreach activities across more districts.",
        ],
      },
      {
        title: "Monthly Food Drive Reaches 500 Families",
        slug: "dawate-khair-monthly-food-drive-500-families",
        date: "May 15, 2026",
        heroImage: stock("relief-aid-distribution.jpg"),
        gallery: [stock("relief-aid-distribution.jpg"), stock("mosque-interior-1.jpg")],
        highlights: [
          "Food packages delivered to 500 families this month",
          "Distribution coordinated through local mosque committees",
        ],
        body: [
          "Dawate Khair's monthly food drive reached 500 families this month, with distribution coordinated through local mosque committees.",
          "The programme runs year-round, with volunteers assembling and delivering packages on the first weekend of every month.",
        ],
      },
      {
        title: "Emergency Relief Deployed After Flash Floods",
        slug: "dawate-khair-emergency-relief-flash-floods",
        date: "Apr 3, 2026",
        heroImage: stock("water-well-pulley.jpg"),
        gallery: [stock("water-well-pulley.jpg"), stock("mosque-exterior-sunset.jpg")],
        highlights: [
          "Emergency packages delivered within 48 hours of flooding",
          "Coordinated with local union councils on the ground",
        ],
        body: [
          "Dawate Khair deployed emergency relief packages within 48 hours of flash flooding in low-lying districts, working with local union councils to reach affected households.",
          "The rapid response drew on the programme's standing emergency relief fund, kept in reserve for situations exactly like this one.",
        ],
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

export const concerns = [
  {
    name: "Anjuman Education Management Board",
    logo: "/images/concerns/education-management-board.png",
    href: "https://anjumantrust.org/about-1/",
    stat: "200+",
    statLabel: "Institutions",
  },
  {
    name: "Anjuman Research Center",
    logo: "/images/concerns/anjuman-research-center.png",
    href: "https://anjumantrust.org/about-1/",
    stat: "200+",
    statLabel: "Books",
  },
  {
    name: "Da'wat-E Khair Implement Committee",
    logo: "/images/concerns/dawat-e-khair-implement-committee.png",
    href: "https://dawatekhair.com/",
    stat: "1,00,00,000+",
    statLabel: "Da'wah",
  },
  {
    name: "Gausia Committee Bangladesh",
    logo: "/images/concerns/gausia-committee-bangladesh.png",
    href: "https://gausiacommitteebangladesh.org/",
    stat: "10,00,000+",
    statLabel: "Humble Attendant",
  },
];

export const concernLogos = [
  ...concerns.map(({ name, logo, href }) => ({
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
