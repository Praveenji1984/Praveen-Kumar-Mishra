export type Language = 'en' | 'hi';

export interface SocialWorkCard {
  id: string;
  titleEn: string;
  titleHi: string;
  category: string;
  descEn: string;
  descHi: string;
  iconName: string;
  stats?: string;
  keyPointsEn: string[];
  keyPointsHi: string[];
}

export interface PublicIssue {
  id: string;
  titleEn: string;
  titleHi: string;
  category: string;
  descEn: string;
  descHi: string;
  focusAreaEn: string;
  focusAreaHi: string;
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  roleEn: string;
  roleHi: string;
  companyEn: string;
  companyHi: string;
  locationEn: string;
  locationHi: string;
  descEn: string;
  descHi: string;
  highlightsEn: string[];
  highlightsHi: string[];
}

export interface EducationItem {
  id: string;
  degreeEn: string;
  degreeHi: string;
  institutionEn: string;
  institutionHi: string;
  year: string;
  detailsEn: string;
  detailsHi: string;
}

export interface InitiativeItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: string;
  locationEn: string;
  locationHi: string;
  date: string;
  descEn: string;
  descHi: string;
  fullContentEn: string;
  fullContentHi: string;
  impactMetrics: string;
  hasVideo?: boolean;
}

export interface GalleryPhoto {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'all' | 'social_work' | 'community_events' | 'public_meetings' | 'rural_development' | 'awareness' | 'trust_activities' | 'professional';
  date: string;
  location: string;
  descriptionEn: string;
  descriptionHi: string;
  imageTheme: string;
  accentColor: string;
}

export interface VideoItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'social_work' | 'public_issues' | 'community_awareness' | 'interviews' | 'events' | 'development';
  duration: string;
  date: string;
  location: string;
  descriptionEn: string;
  descriptionHi: string;
  speechQuoteHindi?: string;
  speechQuoteEnglish?: string;
  keyTakeawayEn: string;
  keyTakeawayHi: string;
}

export interface MediaItem {
  id: string;
  titleEn: string;
  titleHi: string;
  publicationEn: string;
  publicationHi: string;
  date: string;
  type: 'News' | 'Statement' | 'Article' | 'Interview' | 'Social';
  summaryEn: string;
  summaryHi: string;
  verified: boolean;
}
