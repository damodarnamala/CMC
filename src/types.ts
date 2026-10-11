export type AppRoute =
  | 'home'
  | 'studio'
  | 'productions'
  | 'productions/iit-krishnamurthy'
  | 'slate'
  | 'music'
  | 'ip-rights'
  | 'leadership'
  | 'newsroom'
  | 'partnerships'
  | 'contact';

export interface SlateProject {
  id: string;
  title: string;
  internalCode?: string;
  genre: string;
  format: string;
  category: 'drama' | 'action' | 'thriller' | 'series' | string;
  status: 'In Development' | 'Pre-Production' | 'In Production' | 'Packaging';
  stage: string;
  synopsis: string;
  confidentialOverview?: string;
  scope: string;
  musicStyle: string;
  timeline: string;
}

export interface VideoMediaItem {
  id: string;
  title: string;
  category: 'Trailer' | 'Teaser' | 'Song' | 'Full Movie' | 'Award' | string;
  youtubeId: string;
  watchUrl: string;
  thumbnailUrl: string;
  description: string;
  badge: string;
  duration?: string;
}

export interface MoviePosterItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  tag: string;
}

export interface FilmDetails {
  title: string;
  teluguTitle?: string;
  tagline: string;
  director: string;
  directorInstagram?: string;
  producers: string[];
  cast: {
    hero: string;
    heroine: string;
    ensemble: string[];
  };
  crew: {
    musicDirector: string;
    dop: string;
    editor: string;
    publicityDesign: string;
    colorist: string;
    lyrics: string;
    lineProducer: string;
    executiveProducer: string;
    productionController: string;
    soundDesign: string;
  };
  musicDirector: string;
  releasePlatforms: {
    primeVideoUrl: string;
    ahaVideoUrl: string;
    youtubeVideoId: string;
    youtubeWatchUrl: string;
  };
  videos: VideoMediaItem[];
  posters: MoviePosterItem[];
  genre: string;
  duration: string;
  resolution: string;
  synopsis: string;
  awards?: {
    title: string;
    event: string;
    year: string;
    details: string[];
    videoUrl?: string;
  }[];
}

export interface ProducerProfile {
  name: string;
  role: string;
  designation: string;
  company: string;
  initials: string;
  photo?: string;
  bio: string;
  executiveFocus: string;
  highlights: string[];
  location: string;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface DirectorProfile {
  name: string;
  role: string;
  filmTitle: string;
  initials: string;
  photo?: string;
  expertise?: string;
  bio: string;
  highlights: string[];
  instagram?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Company News' | 'Productions' | 'Casting' | 'Partnerships' | 'Distribution' | 'Festivals';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  verifiedSource?: string;
  linkText?: string;
  linkUrl?: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  category: 'Soundtrack' | 'Original Score' | 'Independent Release' | 'Single';
  artist: string;
  composer: string;
  duration: string;
  featuredFilm?: string;
  description: string;
  streamingUrl?: string;
  youtubeId?: string;
}

export interface IpRightsPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  keyAssets: string[];
}

export interface PartnershipCategory {
  id: string;
  title: string;
  scope: string;
  description: string;
  targetPartners: string[];
}
