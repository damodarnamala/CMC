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

export interface VideoMediaItem {
  id: string;
  title: string;
  category: 'Trailer' | 'Teaser' | 'Song' | 'Full Movie';
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
    youtubeVideoId: string;
    youtubeWatchUrl: string;
  };
  videos: VideoMediaItem[];
  posters: MoviePosterItem[];
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
