import { Program } from './program';

export interface SourceItem {
  id: string;
  title: string;
  category: string;
  url: string;
  snippet?: string;
}

export interface KeyInformation {
  title: string;
  eligibility?: string;
  duration?: string;
  fee?: string;
  admissionProcess?: string;
  careerOpportunities?: string;
  keyHighlights?: string[];
  contactInfo?: string;
}

export interface SearchResultPayload {
  answer: string;
  category: string;
  matchedPrograms: Program[];
  keyInfo?: KeyInformation;
  sources: SourceItem[];
  relatedQuestions: string[];
  isOffTopic?: boolean;
}

export interface SuggestionTopic {
  id: string;
  icon: string;
  label: string;
  category: string;
  query: string;
  color?: string;
}
