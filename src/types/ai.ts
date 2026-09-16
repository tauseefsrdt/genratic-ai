import { Program } from './program';
import { KeyInformation, SourceItem } from './search';

export type MessageRole = 'user' | 'assistant';

export interface ChatMessageItem {
  id: string;
  role: MessageRole;
  query?: string;
  content: string;
  timestamp: string;
  isStreaming?: boolean;
  programs?: Program[];
  keyInfo?: KeyInformation;
  sources?: SourceItem[];
  relatedQuestions?: string[];
  isOffTopic?: boolean;
}

export interface ChatSession {
  id: string;
  title: string;
  timestamp: string;
  messages: ChatMessageItem[];
}

export interface SearchApiRequest {
  query: string;
  context?: {
    lastTopic?: string;
    lastProgramId?: string;
    conversationHistory?: Array<{ role: string; content: string }>;
  };
}

export interface SearchApiResponse {
  answer: string;
  results: Program[];
  keyInfo?: KeyInformation;
  sources: SourceItem[];
  relatedQuestions: string[];
  isOffTopic?: boolean;
}
