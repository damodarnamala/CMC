import {
  FilmDetails,
  ProducerProfile,
  DirectorProfile,
  SlateProject,
  NewsArticle,
  MusicTrack,
  IpRightsPillar,
  PartnershipCategory
} from '../types.ts';

export const STUDIO_INFO = {
  customerBrand: "Crystolyte Media",
  legalName: "Crystolyte Media Creations",
  name: "Crystolyte Media",
  brandName: "Crystolyte Media",
  acronym: "CMC",
  location: "Hyderabad, Telangana, India",
  email: "business@crystolytemedia.com",
  pressEmail: "press@crystolytemedia.com",
  legalEmail: "legal@crystolytemedia.com",
  established: "2020",
  tagline: "Stories born in India. Built for the world.",
  alternativeTagline: "Original stories. Global ambition.",
  subcopy: "An independent entertainment company developing, producing, and owning premium film, television, music, and original intellectual property.",
  ecosystemStrip: ["FILM", "SERIES", "MUSIC", "IP", "GLOBAL PARTNERSHIPS"],
  description: "Crystolyte Media (legal entity Crystolyte Media Creations) is an independent entertainment company developing, producing, and owning premium feature films, episodic television, music catalogs, and original intellectual property. Founded in 2020 in Hyderabad, the studio structures disciplined capital, narrative rigor, and long-term rights retention to build enduring entertainment franchises for worldwide audiences.",
  vision: "We believe exceptional stories originate in specific cultural soils and resonate universally. By pairing script-first development with disciplined slate financing, Crystolyte Media builds scalable cinematic universes, evergreen music catalogs, and multi-territory adaptation rights that generate long-term enterprise value."
};

export const FEATURE_FILM: FilmDetails = {
  title: "IIT KRISHNAMURTHY",
  teluguTitle: "IIT కృష్ణమూర్తి",
  tagline: "A Corporate Crime • Non Recognised Sector",
  director: "S. Sreevardhan",
  directorInstagram: "https://www.instagram.com/mr.sreevardhan/",
  producers: ["Prasad Nekuri", "Praneeth Nekuri"],
  cast: {
    hero: "Dandamudi Pruthvi (as Krishnamurthy)",
    heroine: "Maira Doshi",
    ensemble: ["Vinay Varma", "Banerjee", "Satya", "Bharath Reddy", "Anand Bharathi"]
  },
  crew: {
    musicDirector: "Naresh Kumaran",
    dop: "Yesu",
    editor: "Anil Kumar P",
    publicityDesign: "BSP Roy",
    colorist: "Raja Srinivas Mamidi",
    lyrics: "Ramanjhaneyulu Sankarpu",
    lineProducer: "LV Vasuki",
    executiveProducer: "Tati Ashwin",
    productionController: "Anand Kumar",
    soundDesign: "Aravind Menon"
  },
  musicDirector: "Naresh Kumaran",
  releasePlatforms: {
    primeVideoUrl: "https://www.primevideo.com/detail/0QSWDMWNHLP89N38ABP7KL3MXJ",
    ahaVideoUrl: "https://www.aha.video/movie/iit-krishnamurthy",
    youtubeVideoId: "_nKFH-wbwtE",
    youtubeWatchUrl: "https://www.youtube.com/watch?v=_nKFH-wbwtE"
  },
  videos: [
    {
      id: "trailer",
      title: "Official Theatrical Trailer",
      category: "Trailer",
      youtubeId: "ez6iLxDgdBU",
      watchUrl: "https://www.youtube.com/watch?v=ez6iLxDgdBU",
      thumbnailUrl: "https://img.youtube.com/vi/ez6iLxDgdBU/maxresdefault.jpg",
      description: "Official Telugu Trailer released on Telugu FilmNagar. Uncovering the mystery of a missing uncle in Hyderabad.",
      badge: "Official Trailer",
      duration: "2m 14s"
    },
    {
      id: "teaser",
      title: "Official First Look Teaser",
      category: "Teaser",
      youtubeId: "XfDvmgAZmX4",
      watchUrl: "https://www.youtube.com/watch?v=XfDvmgAZmX4",
      thumbnailUrl: "https://img.youtube.com/vi/XfDvmgAZmX4/maxresdefault.jpg",
      description: "The gripping First Look Teaser presenting the corporate crime premise and investigative intrigue.",
      badge: "First Look Teaser",
      duration: "1m 18s"
    },
    {
      id: "song-megham",
      title: "Megham Tho Megham (Official Video Song)",
      category: "Song",
      youtubeId: "5IAPAGizJ9Y",
      watchUrl: "https://www.youtube.com/watch?v=5IAPAGizJ9Y&list=RD5IAPAGizJ9Y&start_radio=1",
      thumbnailUrl: "https://img.youtube.com/vi/5IAPAGizJ9Y/maxresdefault.jpg",
      description: "Melodious chartbuster sung by Yazin Nizar, penned by Ramanjhaneyulu Sankarpu, music by Naresh Kumaran (Saregama Telugu).",
      badge: "Official Video Song",
      duration: "3m 45s"
    },
    {
      id: "full-movie",
      title: "Full Feature Film (4K UHD)",
      category: "Full Movie",
      youtubeId: "_nKFH-wbwtE",
      watchUrl: "https://www.youtube.com/watch?v=_nKFH-wbwtE",
      thumbnailUrl: "https://img.youtube.com/vi/_nKFH-wbwtE/maxresdefault.jpg",
      description: "Complete full-length 4K UHD streaming presentation of IIT Krishnamurthy with crystal clear master audio.",
      badge: "Full Movie 4K",
      duration: "2h 08m"
    },
    {
      id: "award-golden-cape",
      title: "Golden Cape Awards 2021 Winner Segment",
      category: "Award",
      youtubeId: "xxfSpP6yxT4",
      watchUrl: "https://www.youtube.com/watch?v=xxfSpP6yxT4",
      thumbnailUrl: "https://img.youtube.com/vi/xxfSpP6yxT4/maxresdefault.jpg",
      description: "IIT Krishnamurthy movie wins The Nail Byting Category Award at the prestigious Golden Cape Awards 2021 (Telugu Cinema).",
      badge: "Award Winner",
      duration: "3m 38s"
    }
  ],
  posters: [
    {
      id: "poster-1",
      title: "First Look Poster",
      subtitle: "A Corporate Crime • Missing Saturday Evening",
      src: "./p1.png",
      alt: "IIT Krishnamurthy First Look Official Poster",
      tag: "First Look"
    },
    {
      id: "poster-2",
      title: "Theatrical Release Poster",
      subtitle: "Directed by Sreevardhan • Produced by Prasad Nekuri & Praneeth Nekuri",
      src: "./p2.png",
      alt: "IIT Krishnamurthy Theatrical Release Poster",
      tag: "Theatrical Poster"
    },
    {
      id: "poster-3",
      title: "Investigative Key Art",
      subtitle: "Mystery Thriller • Official Presentation",
      src: "./p3.png",
      alt: "IIT Krishnamurthy Key Art Poster",
      tag: "Key Art"
    }
  ],
  genre: "Mystery / Corporate Crime Thriller",
  duration: "2h 08m",
  resolution: "4K UHD Master Stream",
  synopsis: "The studio established its operational proof-of-execution with the release of IIT KRISHNAMURTHY, directed by S. Sreevardhan. An intelligent academic arrives in Hyderabad to investigate his missing uncle, uncovering a labyrinthine web of corporate fraud, police collusion, and high-stakes criminal deception. Released simultaneously across Amazon Prime Video, Aha, and YouTube 4K, the feature demonstrated CMC's ability to finance, produce, and distribute narrative-driven content internationally.",
  awards: [
    {
      title: "The Nail Biting Category Award — Winner",
      event: "Golden Cape Awards 2021",
      year: "2021",
      details: [
        "Category: The Nail Biting Category Award (Best Suspense/Thriller)",
        "Film: IIT Krishnamurthy",
        "Directed by: S. Sreevardhan",
        "Produced by: Crystolyte Media (Prasad Nekuri & Praneeth Nekuri)"
      ],
      videoUrl: "https://www.youtube.com/watch?v=xxfSpP6yxT4"
    },
    {
      title: "Best Debut Actor (Telugu) — Nominee",
      event: "9th South Indian International Movie Awards (SIIMA)",
      year: "2021",
      details: [
        "Nominee: Dandamudi Pruthvi (Playing Krishnamurthy)",
        "Category: Best Debut Actor (Telugu)",
        "Film: IIT Krishnamurthy",
        "Director: Sreevardhan"
      ]
    }
  ]
};

export const PRODUCERS: ProducerProfile[] = [
  {
    name: "Prasad Nekuri",
    role: "Founder & Chairman",
    designation: "Executive Strategy & Corporate Governance",
    company: "Crystolyte Media",
    initials: "PN",
    photo: "./prasad_nekuri.png",
    executiveFocus: "Corporate Governance & Long-Term Capital Allocation",
    bio: "Prasad Nekuri provides executive leadership and strategic governance as Founder & Chairman of Crystolyte Media. Drawing upon a multifaceted background across diversified business sectors, he guides the long-term institutional expansion of the studio—transitioning Crystolyte Media from single-film production into a sustainable, multi-vertical IP and entertainment ownership platform with institutional capital discipline.",
    highlights: [
      "Founded Crystolyte Media with long-term intellectual property vision",
      "Executive governance and multi-sector corporate structuring",
      "Disciplined financial oversight across slate budgeting and distribution",
      "Steering the studio's transition into an enduring rights-holding enterprise"
    ],
    location: "Hyderabad, India"
  },
  {
    name: "Praneeth Nekuri",
    role: "CEO & Producer",
    designation: "Creative Architecture & Strategic Partnerships",
    company: "Crystolyte Media",
    initials: "PN",
    photo: "./praneeth.png",
    executiveFocus: "Slate Development, Independent Music & Global Alliances",
    bio: "Praneeth Nekuri serves as Chief Executive Officer and Producer at Crystolyte Media. Bringing a rare multidisciplinary perspective spanning healthcare, commerce, and creative storytelling, he spearheads the company's operational growth, talent acquisition, and development slate. He directs strategic partnerships with domestic and international streaming platforms, oversees the expansion into independent music publishing (including the Bangaru Bomma initiative), and leads the studio's philanthropic arm, Crystolyte Helping Hands.",
    highlights: [
      "Executive Producer on debut feature IIT Krishnamurthy (Prime Video / Aha / YouTube)",
      "Driving the next-generation development slate and screenwriter incubation",
      "Spearheading Crystolyte Music expansion, including 'Bangaru Bomma'",
      "Director & Overseer of philanthropic initiatives at Crystolyte Helping Hands"
    ],
    location: "Hyderabad, India",
    socialLinks: {
      linkedin: "http://linkedin.com/in/praneeth-nekuri",
      instagram: "https://www.instagram.com/praneethnekuri/",
      facebook: "https://m.facebook.com/profile.php?id=100003239927433&__n=K"
    }
  }
];

export const DIRECTOR: DirectorProfile = {
  name: "S. Sreevardhan",
  role: "Creative Collaborator (Writer & Director)",
  filmTitle: "IIT Krishnamurthy",
  initials: "SS",
  photo: "./sreevardhan.svg",
  expertise: "Genre Filmmaking & Narrative Pacing",
  instagram: "https://www.instagram.com/mr.sreevardhan/",
  bio: "S. Sreevardhan is an acclaimed screenwriter and director known for his command of narrative-driven genre storytelling, sharp investigative pacing, and psychologically grounded character arcs. His collaboration with Crystolyte Media on IIT Krishnamurthy exemplifies the studio's core philosophy: partnering with original, authorial voices to produce smart cinema that commands broad domestic and global audience attention.",
  highlights: [
    "Written & Directed Debut Feature: IIT Krishnamurthy",
    "Golden Cape Awards 2021 Winner for High-Tension Suspense Storytelling",
    "Collaborative development partner for upcoming narrative-driven genre properties",
    "Specialized in intricate investigative thrillers, corporate crime, and high-concept drama"
  ]
};

export const SLATE_PROJECTS: SlateProject[] = [
  {
    id: "untitled-cmc-feature-1",
    title: "Untitled CMC Feature",
    internalCode: "CMC-FL-02",
    genre: "High-Concept Drama / Social Mystery",
    format: "Theatrical Feature Film",
    category: "drama",
    status: "Pre-Production",
    stage: "Screenplay Polish & Principal Packaging",
    synopsis: "An emotionally charged contemporary drama exploring moral accountability, institutional pressure, and personal redemption. Authored with authentic Indian cultural roots and dynamic cinematic tension calibrated for theatrical and global streaming audiences.",
    confidentialOverview: "Confidential story package registered with the Screenwriters Association. Cast and key crew packaging underway.",
    scope: "Theatrical & Worldwide Direct-to-Consumer Release",
    musicStyle: "Original Acoustic & Cinematic Orchestral Score",
    timeline: "Active Pre-Production Pipeline"
  },
  {
    id: "untitled-cmc-series-1",
    title: "Untitled CMC Episodic Series",
    internalCode: "CMC-EP-01",
    genre: "Investigative Crime Drama",
    format: "Multi-Part Limited Series",
    category: "series",
    status: "In Development",
    stage: "Writers Room & Show Bible Conception",
    synopsis: "A serialized investigative procedural tracing systemic corruption across intersecting corporate and civic structures. Developed natively for long-form streaming with layered franchise potential.",
    confidentialOverview: "Show bible and pilot episode completed. Pitch materials structured for major global OTT commissioning.",
    scope: "Global Streaming Original Series",
    musicStyle: "Dark Ambient & Electronic Synthesis Score",
    timeline: "In Script Development"
  },
  {
    id: "untitled-cmc-feature-2",
    title: "Untitled CMC Action Thriller",
    internalCode: "CMC-FL-03",
    genre: "Survival Suspense / Psychological Thriller",
    format: "Theatrical Feature Film",
    category: "thriller",
    status: "In Development",
    stage: "Treatment & Narrative Architecture",
    synopsis: "A claustrophobic cat-and-mouse survival thriller centered on an ordinary individual pitted against unforeseen criminal syndicates in an unfamiliar landscape.",
    confidentialOverview: "High-concept logline in active incubation. Target co-production packaging.",
    scope: "Multi-Language Theatrical Release",
    musicStyle: "Percussive Modern Action Score",
    timeline: "Concept & Narrative Incubation"
  }
];

export const IP_RIGHTS_PILLARS: IpRightsPillar[] = [
  {
    id: "original-ip",
    title: "Original Intellectual Property",
    subtitle: "Enduring Story Universes",
    description: "Crystolyte Media maintains 100% ownership discipline across core story materials, registered characters, and narrative universes created in-house.",
    status: "Active Ownership Portfolio",
    keyAssets: [
      "Original screenplay copyrights & character rights",
      "Registered story treatments & franchise world-bibles",
      "Unrestricted sequel, prequel, and spin-off governance"
    ]
  },
  {
    id: "adaptation-remakes",
    title: "Adaptation & Remake Rights",
    subtitle: "Pan-Indian & International Remakes",
    description: "We structure clean, unencumbered remake and localization rights across major Indian regional languages (Hindi, Tamil, Malayalam, Kannada) and international markets.",
    status: "Available for Qualified Licensing",
    keyAssets: [
      "Format licensing for IIT Krishnamurthy remakes",
      "Multi-territory script adaptation agreements",
      "Executive producing participation options on localized versions"
    ]
  },
  {
    id: "international-distribution",
    title: "International & Territorial Rights",
    subtitle: "Global Direct-to-Consumer & Syndication",
    description: "Retaining worldwide territorial rights to syndicate across global streaming networks, international broadcast television, airline inflight entertainment, and home video.",
    status: "200+ Territories Active",
    keyAssets: [
      "Worldwide streaming syndication on Prime Video, Aha & YouTube",
      "Territorial digital rights for North America, Europe & Southeast Asia",
      "Linear broadcast and satellite syndication windows"
    ]
  },
  {
    id: "music-soundtracks",
    title: "Music & Soundtrack Rights",
    subtitle: "Master Recordings & Publishing Catalogs",
    description: "Through our expanding music division, Crystolyte Media controls master recordings, sync licensing, and digital publishing revenue streams.",
    status: "Expanding Catalog",
    keyAssets: [
      "Original feature scores & master recordings (IIT Krishnamurthy OST)",
      "Sync rights licensing for television, advertising, and digital media",
      "Independent contemporary music releases, including 'Bangaru Bomma'"
    ]
  },
  {
    id: "franchise-development",
    title: "Franchise & Transmedia Development",
    subtitle: "Building Enterprise Value",
    description: "Rather than isolated one-off projects, we design narrative properties engineered to sustain sequels, spin-off episodic dramas, graphic novels, and gaming formats.",
    status: "Architectural Pipeline",
    keyAssets: [
      "Episodic series adaptations of feature film investigations",
      "Transmedia intellectual property expansion roadmaps",
      "Long-term royalty structures and franchise participation"
    ]
  }
];

export const MUSIC_CATALOG: MusicTrack[] = [
  {
    id: "megham-tho-megham",
    title: "Megham Tho Megham",
    category: "Soundtrack",
    artist: "Yazin Nizar",
    composer: "Naresh Kumaran",
    duration: "3m 45s",
    featuredFilm: "IIT Krishnamurthy",
    description: "A soaring romantic melody combining contemporary acoustic instrumentation with rich orchestral arrangements. Penned by Ramanjhaneyulu Sankarpu and distributed via Saregama.",
    streamingUrl: "https://www.youtube.com/watch?v=5IAPAGizJ9Y",
    youtubeId: "5IAPAGizJ9Y"
  },
  {
    id: "bangaru-bomma",
    title: "Bangaru Bomma",
    category: "Independent Release",
    artist: "Crystolyte Music Collaboration",
    composer: "Crystolyte Creative Division",
    duration: "3m 20s",
    description: "The debut initiative of Crystolyte Media's independent music division, led by CEO Praneeth Nekuri to champion fresh musical arrangements and independent artist partnerships.",
    streamingUrl: "https://www.instagram.com/praneethnekuri/"
  },
  {
    id: "iit-ost-score",
    title: "IIT Krishnamurthy: Original Motion Picture Score",
    category: "Original Score",
    artist: "Naresh Kumaran & Studio Orchestra",
    composer: "Naresh Kumaran",
    duration: "42m 15s",
    featuredFilm: "IIT Krishnamurthy",
    description: "A dark, atmospheric cinematic score driven by suspense motifs, ticking percussive layers, and orchestral tension that powered the Golden Cape Award-winning thriller.",
    streamingUrl: "https://www.youtube.com/watch?v=_nKFH-wbwtE"
  }
];

export const NEWSROOM_ARTICLES: NewsArticle[] = [
  {
    id: "prime-video-aha-release",
    title: "IIT Krishnamurthy Achieves Worldwide Streaming Availability on Amazon Prime Video, Aha & YouTube",
    category: "Distribution",
    date: "December 2020",
    readTime: "3 min read",
    summary: "Crystolyte Media's debut feature film establishes a dual-tier distribution model reaching viewers across 200+ countries and territories.",
    content: [
      "HYDERABAD — Crystolyte Media Creations confirmed the global digital distribution strategy for its maiden feature production, IIT Krishnamurthy.",
      "The mystery thriller was delivered to worldwide audiences via Amazon Prime Video, regional streaming leader Aha Video, and a pristine 4K UHD presentation on YouTube, delivering immediate worldwide footprint for the studio's debut intellectual property.",
      "Produced by Prasad Nekuri and Praneeth Nekuri and directed by S. Sreevardhan, the project validates the studio's thesis on agile digital distribution for high-concept Indian cinema."
    ],
    verifiedSource: "Official Studio Press Wire",
    linkText: "Watch on Prime Video",
    linkUrl: "https://www.primevideo.com/detail/0QSWDMWNHLP89N38ABP7KL3MXJ"
  },
  {
    id: "golden-cape-awards-win",
    title: "IIT Krishnamurthy Wins 'The Nail Biting Category Award' at the Golden Cape Awards 2021",
    category: "Festivals",
    date: "July 2021",
    readTime: "2 min read",
    summary: "The Telugu suspense thriller honored for narrative tension and relentless cinematic pacing at the annual Golden Cape Awards.",
    content: [
      "HYDERABAD — In recognition of its gripping narrative architecture, IIT Krishnamurthy has been awarded the prestigious 'Nail Biting Category Award' at the Golden Cape Awards 2021.",
      "The award celebrates cinematic works that excel in building suspense, sustained mystery, and high-tension pacing throughout the runtime.",
      "Director S. Sreevardhan and the production team at Crystolyte Media accepted the honors, citing the recognition as validation for audience-driven genre excellence in Telugu cinema."
    ],
    verifiedSource: "Golden Cape Awards Committee",
    linkText: "View Award Segment",
    linkUrl: "https://www.youtube.com/watch?v=xxfSpP6yxT4"
  },
  {
    id: "siima-best-debut-nomination",
    title: "Dandamudi Pruthvi Nominated for Best Debut Actor (Telugu) at 9th SIIMA Awards",
    category: "Festivals",
    date: "September 2021",
    readTime: "2 min read",
    summary: "Lead actor honored by the South Indian International Movie Awards for his breakthrough performance as Krishnamurthy.",
    content: [
      "HYDERABAD — Actor Dandamudi Pruthvi has secured an official nomination for Best Debut Actor (Telugu) at the 9th South Indian International Movie Awards (SIIMA).",
      "Pruthvi's restrained, intellectually grounded portrayal of an IIT scholar navigating a missing-persons conspiracy in Hyderabad earned praise from critics and industry peers alike.",
      "The SIIMA nomination marks an important institutional milestone for Crystolyte Media's talent development platform."
    ],
    verifiedSource: "South Indian International Movie Awards (SIIMA)",
    linkText: "SIIMA Official Archives"
  },
  {
    id: "music-expansion-bangaru-bomma",
    title: "Crystolyte Media Expands Creative Footprint with Independent Music Division and 'Bangaru Bomma'",
    category: "Company News",
    date: "2023",
    readTime: "3 min read",
    summary: "CEO Praneeth Nekuri initiates the studio's multi-track strategy into standalone music publishing and independent artist incubation.",
    content: [
      "HYDERABAD — Building upon the success of chartbuster film tracks including 'Megham Tho Megham', Crystolyte Media has formally expanded its operational mandates to encompass independent music publishing.",
      "Led by CEO Praneeth Nekuri, the music arm focuses on acquiring master recording rights, developing independent musical properties such as 'Bangaru Bomma', and creating synchronized licensing catalogs for global media buyers."
    ],
    verifiedSource: "Crystolyte Media Corporate Communications"
  },
  {
    id: "next-generation-slate-announcement",
    title: "Crystolyte Media Unveils Multi-Project Development Slate and Institutional IP Architecture",
    category: "Productions",
    date: "2024",
    readTime: "4 min read",
    summary: "Studio leadership announces active development on new feature and episodic pipelines under the 'Untitled CMC Feature' initiative.",
    content: [
      "HYDERABAD — Crystolyte Media today announced the structuring of its multi-project development slate, transitioning the studio into a diversified intellectual property platform.",
      "With active pre-production progressing on its next feature film drama alongside serialized procedural concepts, Founder & Chairman Prasad Nekuri reaffirmed the company's commitment to financial discipline, screenwriter empowerment, and 100% long-term rights ownership."
    ],
    verifiedSource: "Crystolyte Media Corporate Slate Office"
  }
];

export const PARTNERSHIP_CATEGORIES: PartnershipCategory[] = [
  {
    id: "co-production",
    title: "Co-Production & Studio Alliances",
    scope: "Domestic & Pan-Asian Joint Ventures",
    description: "We partner with established studios, creative agencies, and international production entities seeking co-development or co-financing structures for high-concept feature films and episodic dramas.",
    targetPartners: ["Major Indian Studios", "International Production Companies", "Boutique Prestige Labels"]
  },
  {
    id: "slate-financing",
    title: "Film Financing & Private Equity",
    scope: "Disciplined Capital Allocation",
    description: "Institutional investors, family offices, and media funds benefit from our transparent production governance, audited project budgets, and structured waterfall recoupment frameworks.",
    targetPartners: ["Media Investment Funds", "High-Net-Worth Entities", "Structured Debt & Equity Partners"]
  },
  {
    id: "distribution-platforms",
    title: "Distribution & OTT Platform Deals",
    scope: "Worldwide Theatrical & Streaming",
    description: "Direct licensing partnerships with tier-one streaming services, regional OTT leaders, theatrical distributors, and airline entertainment aggregators.",
    targetPartners: ["Global SVOD/AVOD Platforms", "Theatrical Distribution Networks", "Syndication Buyers"]
  },
  {
    id: "remake-licensing",
    title: "Remake & Adaptation Rights",
    scope: "Multi-Language Localization",
    description: "Clean, optionable remake agreements for our existing IP library (including IIT Krishnamurthy) across Hindi, Tamil, Korean, European, and American markets.",
    targetPartners: ["Regional Film Producers", "International Remake Buyers", "Format Licensing Agencies"]
  },
  {
    id: "music-sync",
    title: "Music Publishing & Sync Licensing",
    scope: "Master Recording Synergies",
    description: "Licensing original motion picture scores, hit singles, and independent catalog tracks for television series, commercial advertising, gaming, and digital campaigns.",
    targetPartners: ["Record Labels", "Music Supervisors", "Advertising Agencies", "Gaming Studios"]
  },
  {
    id: "brand-partnerships",
    title: "Brand Partnerships & Corporate Integration",
    scope: "Contextual Story Immersion",
    description: "High-value, non-intrusive brand integration, co-marketing campaigns, and promotional alliances aligned with premium cinematic storytelling.",
    targetPartners: ["Consumer Brands", "Automotive & Technology Leaders", "Luxury Retail"]
  }
];
