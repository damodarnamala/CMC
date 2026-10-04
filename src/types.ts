export interface SlateProject {
  id: string;
  title: string;
  genre: string;
  category: 'drama' | 'action' | 'romance' | 'commercial' | string;
  status: string;
  stage: string;
  synopsis: string;
  scope: string;
  musicStyle: string;
  timeline: string;
}

export interface FilmDetails {
  title: string;
  tagline: string;
  director: string;
  directorInstagram?: string;
  producers: string[];
  cast: {
    hero: string;
    heroine: string;
    ensemble: string[];
  };
  musicDirector: string;
  releasePlatforms: {
    primeVideoUrl: string;
    youtubeVideoId: string;
    youtubeWatchUrl: string;
  };
  genre: string;
  duration: string;
  resolution: string;
  synopsis: string;
}

export interface ProducerProfile {
  name: string;
  role: string;
  designation: string;
  company: string;
  initials: string;
  photo?: string;
  bio: string;
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
  bio: string;
  highlights: string[];
  instagram?: string;
}
