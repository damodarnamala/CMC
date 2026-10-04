import { FilmDetails, ProducerProfile, DirectorProfile, SlateProject } from '../types.ts';

export const STUDIO_INFO = {
  name: "Crystolyte Media Creations",
  acronym: "CMC",
  location: "Hyderabad, Telangana, India",
  email: "info@crystolytemedia.com",
  established: "2020",
  tagline: "Redefining Telugu Cinema with Excellence",
  description: "Crystolyte Media Creations (CMC) is an Indian film production company founded by Prasad Nekuri and Praneeth Nekuri, who serve as the producers of the company. Dedicated to producing high-quality Telugu feature films, the company focuses on delivering compelling stories with strong emotional depth, commercial appeal, and cinematic excellence.",
  vision: "With a commitment to innovative storytelling, emerging talent, and high production values, Crystolyte Media Creations aims to create films that resonate with audiences in India and worldwide. The company continues to expand its slate of feature films while building a strong brand recognized for quality cinema and creative excellence."
};

export const FEATURE_FILM: FilmDetails = {
  title: "IIT KRISHNAMURTHY",
  tagline: "Every Equation Has An Unknown Variable",
  director: "S. Sreevardhan",
  producers: ["Prasad Nekuri", "Praneeth Nekuri"],
  cast: {
    hero: "Prudhvi Dandamudi",
    heroine: "Maira Doshi",
    ensemble: ["Vinay Varma", "Banerjee", "Satya", "Bharath Reddy"]
  },
  musicDirector: "Naresh Kumaran",
  releasePlatforms: {
    primeVideoUrl: "https://www.primevideo.com/detail/0QSWDMWNHLP89N38ABP7KL3MXJ",
    youtubeVideoId: "_nKFH-wbwtE",
    youtubeWatchUrl: "https://www.youtube.com/watch?v=_nKFH-wbwtE"
  },
  genre: "Mystery / Crime Investigation Thriller",
  duration: "2h 08m",
  resolution: "4K UHD Cinema Stream",
  synopsis: "The production house made its debut with IIT KRISHNA MURTHY, directed by S. Sreevardhan, establishing its presence in the Telugu film industry. An intelligent student arrives in Hyderabad in search of his missing uncle, only to find himself entangled in a labyrinth of corporate deception and police intrigue where every clue unravels more questions than answers."
};

export const PRODUCERS: ProducerProfile[] = [
  {
    name: "Prasad Nekuri",
    role: "Producer & Founder",
    designation: "Executive Production & Finance",
    company: "Crystolyte Media Creations",
    initials: "PN",
    bio: "As co-founder and producer at Crystolyte Media Creations, Prasad Nekuri oversees executive strategy, film production operations, and project financing. His focus on production integrity and disciplined execution ensures that every project meets high theatrical and streaming benchmarks.",
    highlights: [
      "Produced Debut Feature: IIT Krishnamurthy",
      "Executive Strategy & Financial Structuring",
      "Global OTT & Theatrical Distribution Operations"
    ],
    location: "Hyderabad, India"
  },
  {
    name: "Praneeth Nekuri",
    role: "Producer & Founder",
    designation: "Creative Development & Talent Curation",
    company: "Crystolyte Media Creations",
    initials: "PN",
    bio: "Co-founder and producer at Crystolyte Media Creations, Praneeth Nekuri leads creative development, screenplay curation, and strategic collaborations. He is dedicated to championing progressive concepts, modern visual aesthetics, and emerging talents across Telugu cinema.",
    highlights: [
      "Produced Debut Feature: IIT Krishnamurthy",
      "Creative Slate Architecture & Script Incubation",
      "International Streaming Partner Relations"
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
  role: "Film Director",
  filmTitle: "IIT Krishnamurthy",
  initials: "SS",
  bio: "Visionary filmmaker who made his directorial debut with Crystolyte Media Creations' acclaimed thriller IIT Krishnamurthy. Renowned for suspense orchestration, crisp editing pacing, and grounded character portrayals in modern Telugu cinema.",
  highlights: [
    "Directorial Debut: IIT Krishnamurthy",
    "Acclaimed Amazon Prime Video Worldwide Release",
    "Expertise in High-Concept Mystery & Suspense Thrillers"
  ]
};

export const SLATE_PROJECTS: SlateProject[] = [
  {
    id: "cmc-prod-2",
    title: "Production-2",
    genre: "Drama",
    category: "drama",
    status: "In Development",
    stage: "Screenplay Stage",
    synopsis: "Following the acclaimed debut feature IIT Krishnamurthy, Crystolyte Media Creations is currently in active pre-production for its prestigious second venture: Production-2, an emotionally resonant and high-concept Drama crafted with exceptional cinematic depth and commercial appeal.",
    scope: "Theatrical & Global OTT Release",
    musicStyle: "Original Acoustic & Orchestral Score",
    timeline: "Production-2 Upcoming"
  }
];
