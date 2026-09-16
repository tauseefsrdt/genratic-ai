export type MessageRole = 'user' | 'assistant' | 'system';

export interface ChatSource {
  title: string;
  url?: string;
  category?: string;
}

export interface ChatMessageData {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  sources?: ChatSource[];
  isStreaming?: boolean;
}

export interface SuggestedQuestion {
  id: string;
  title: string;
  category: 'Admissions' | 'Academics' | 'Campus' | 'Research' | 'Placements';
  query: string;
}

export interface UniversityStat {
  label: string;
  value: string;
  iconName: string;
}
