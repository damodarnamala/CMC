// Leadership profiles shown in the Leadership & Collaborators cards.
// Card = short summary; "More" opens the full profile popup.

export interface LeadershipProfile {
  id: 'prasad' | 'praneeth' | 'sreevardhan';
  name: string;
  badge: string;        // small pill on the card
  title: string;        // line under the name
  summary: string[];    // two short paragraphs shown on the card
  photo: string;        // path under /public
  photoFallback: string;
  initials: string;
  bio: string[];        // full profile paragraphs
  highlights: string[]; // key facts
  quote?: { text: string; author: string };
}

export const LEADERSHIP_PROFILES: LeadershipProfile[] = [
  {
    id: 'prasad',
    name: 'Prasad Nekuri',
    badge: 'Founder & Chairman',
    title: 'Founder & Chairman, Crystolyte Associates India · Film Producer',
    summary: [
      "Prasad Nekuri is a prominent Indian businessman, first-generation entrepreneur, industrialist, and film producer based in Hyderabad, Telangana, with more than two decades of entrepreneurial experience.",
      "As Founder and Chairman of Crystolyte Associates India, established in 2003, he has built a diversified enterprise serving government institutions, corporations, and industrial facilities across India.",
    ],
    photo: './prasad_nekuri.png',
    photoFallback: './prasad_nekuri.jpg',
    initials: 'PN',
    bio: [
      'Prasad Nekuri is a prominent Indian businessman, first-generation entrepreneur, industrialist, and film producer based in Hyderabad, Telangana. With more than two decades of entrepreneurial experience, he has established himself as a formidable business leader through his work in diversified industrial services, infrastructure, workforce management, engineering, and entertainment.',
      'As the Founder and Chairman of Crystolyte Associates India, established in 2003, Prasad Nekuri has played a defining role in building a multi-sector enterprise with a business presence extending across India. What began as an entrepreneurial venture in Hyderabad has evolved into a diversified organization serving government institutions, corporations, industrial facilities, and commercial enterprises.',
      'His business interests span civil construction, infrastructure development, electrical engineering, renewable energy solutions, mining support, government outsourcing, security services, integrated facility management, industrial operations, and human capital development.',
      'His leadership has been characterized by strategic diversification, operational expansion, and an emphasis on establishing lasting institutional relationships. Through Crystolyte Associates India, he has pursued a business model centered on providing essential services while creating large-scale employment and professional development opportunities.',
      'Unlike entrepreneurs whose ambitions are limited to a single industry, Prasad Nekuri has built his business philosophy around diversification, resilience, and long-term institutional value. Beyond individual projects, his entrepreneurial journey represents the evolution of a family-founded business into an enterprise with ambitions across multiple industries and generations.',
      'Today, he continues to be associated with the growth and long-term direction of the Crystolyte business enterprise, with an emphasis on strategic development, corporate responsibility, employment generation, and enduring economic value. His professional identity reflects the qualities of an established Indian business leader: entrepreneurial independence, commercial discipline, long-term vision, and a commitment to building organizations designed to outlast their founders.',
      'His legacy is defined not merely by the businesses he has established, but by his ambition to build enduring institutions that shape industries, create opportunities, and carry forward a tradition of entrepreneurial excellence.',
    ],
    highlights: [
      'Founder & Chairman, Crystolyte Associates India (established 2003)',
      'Over two decades of entrepreneurial experience',
      'Business interests: infrastructure, engineering, renewable energy, workforce management',
      'Film producer with Crystolyte Media Creations',
    ],
    quote: {
      text: 'I never believed in building a business merely for success or recognition. I believed in building an institution that creates livelihoods, earns trust, and stands the test of time. Wealth may define success for some, but to me, true greatness lies in the opportunities we create, the lives we transform, and the legacy we leave for generations.',
      author: 'Prasad Nekuri',
    },
  },
  {
    id: 'praneeth',
    name: 'Praneeth Nekuri',
    badge: 'Founder · Producer',
    title: 'Founder, Crystolyte Media Creations · CEO, Crystolyte Associates India',
    summary: [
      "Praneeth Nekuri is an Indian physician-entrepreneur, film producer, and business leader whose career spans medicine, entertainment, entrepreneurship, and social impact.",
      "As Founder of Crystolyte Media Creations, he develops original cinematic and musical projects, including the Telugu feature IIT Krishnamurthy and the independent music project Bangaru Bomma.",
    ],
    photo: './praneeth.png',
    photoFallback: './praneeth.jpg',
    initials: 'PN',
    bio: [
      'Praneeth Nekuri is an Indian physician-entrepreneur, film producer, and business leader whose multidisciplinary career spans medicine, entertainment, entrepreneurship, and social impact.',
      'Originally from Hyderabad, India, his academic and professional journey across India, Europe, and the United States has shaped an international perspective on healthcare, enterprise development, and the creative industries.',
      'As the Founder of Crystolyte Media Creations, Nekuri is dedicated to developing original cinematic and musical projects, supporting independent artists, and creating opportunities for emerging creative talent. His recent work in entertainment includes producing the Telugu feature film IIT Krishnamurthy and the independent music project Bangaru Bomma. Through Crystolyte Media Creations, he seeks to connect distinctive storytelling with broader audiences and international opportunities.',
      'Beyond entertainment, Nekuri serves as Chief Executive Officer of Crystolyte Associates India, where he focuses on employment generation, skill development, and rural manufacturing initiatives designed to encourage sustainable economic growth and strengthen local communities.',
      'His background in medicine and psychology informs his approach to leadership, combining analytical thinking, human understanding, and long-term strategic vision. His continued medical training, with a focus on surgical specialization, reflects an ongoing commitment to clinical education and professional development.',
      'He also oversees Crystolyte Helping Hands, a philanthropic initiative dedicated to community development, social responsibility, and meaningful grassroots impact.',
      'Operating at the intersection of healthcare, business, and creative enterprise, Nekuri believes in building institutions that extend beyond individual achievements, organizations capable of creating enduring economic, cultural, and social value. His vision is centered on disciplined leadership, creative independence, and the development of sustainable enterprises with a lasting global impact.',
    ],
    highlights: [
      'Founder, Crystolyte Media Creations',
      'Chief Executive Officer, Crystolyte Associates India',
      'Producer: IIT Krishnamurthy (Telugu feature) and Bangaru Bomma (independent music project)',
      'Oversees Crystolyte Helping Hands, a community development initiative',
    ],
    quote: {
      text: 'My ambition has never been to succeed in just one field. Whether through medicine, business, or cinema, I believe in creating opportunities, challenging boundaries, and building something greater than myself. True success is not measured by what we achieve in our lifetime, but by the impact we leave on generations to come.',
      author: 'Praneeth Nekuri',
    },
  },
  {
    id: 'sreevardhan',
    name: 'Sree Vardhan',
    badge: 'Writer & Director',
    title: 'Indian Film Director & Screenwriter · Telugu Cinema',
    summary: [
      "Sree Vardhan, professionally credited as Sreevardhan, is an Indian film director and screenwriter working in Telugu cinema, focused on suspense, emotional depth, and expressive visual storytelling.",
      "He made his feature directorial debut with the Telugu mystery thriller IIT Krishnamurthy (2020), produced under Crystolyte Media Creations and released on Amazon Prime Video.",
    ],
    photo: './sreevardhan.png',
    photoFallback: './sreevardhan.jpg',
    initials: 'SV',
    bio: [
      'Sree Vardhan, also professionally credited as Sreevardhan, is an Indian film director and screenwriter working in Telugu cinema. His creative ambitions extend beyond conventional entertainment, with a focus on compelling narratives, emotional depth, and expressive visual storytelling.',
      'He approaches filmmaking as an opportunity to connect with audiences in ways that reach beyond the screen. His work reflects an interest in suspense, human conflict, emotional storytelling, and the collaborative nature of cinema.',
      'Sree Vardhan made his feature directorial debut with the Telugu mystery thriller IIT Krishnamurthy (2020). Produced under the banner of Crystolyte Media Creations and released on Amazon Prime Video, the film introduced his directorial voice through a story centered on suspense, mystery, and the pursuit of truth. The film marked an important beginning in his career and established his interest in creating narratives that encourage audiences to remain engaged, question what they see, and follow a story through its unfolding revelations.',
      'For Sree Vardhan, cinema represents more than the telling of a story. It is a medium capable of provoking thought, awakening emotion, challenging perspectives, and creating memories that remain with viewers long after the final scene. His ambition is not merely to give audiences another film to watch, but to offer them an experience worth remembering.',
      'At the heart of his creative vision is the belief that meaningful cinema should do more than entertain. It should invite audiences into unfamiliar worlds, allow them to recognize parts of themselves in fictional characters, and leave them with something to reflect upon. He believes Indian cinema has the potential to reach audiences beyond geographical and linguistic boundaries, and that storytelling is a universal language.',
      'As he looks toward the future, his creative ambition remains centered on exploring distinctive stories, supporting fresh perspectives, and continuing to evolve as a filmmaker. He aims to develop films that combine strong storytelling with emotional and intellectual depth, films that audiences do not merely watch, but experience, remember, and carry with them long after the credits roll.',
    ],
    highlights: [
      'Feature directorial debut: IIT Krishnamurthy (2020)',
      'Produced by Crystolyte Media Creations; released on Amazon Prime Video',
      'Focus: suspense, human conflict, and emotionally driven narratives',
      'Writer & director working in Telugu cinema',
    ],
    quote: {
      text: "I don't aspire to make films that simply fill a screen. I aspire to create stories that fill hearts, challenge minds, and remain with audiences long after they leave.",
      author: "Sree Vardhan — The Director's Vision",
    },
  },
];
