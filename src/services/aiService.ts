import { SearchResultPayload } from '../types/search';
import { searchEngine } from './searchService';
import { callSpringSearchApi } from './apiClient';

export interface StreamCallbacks {
  onTokenChunk?: (partialAnswer: string) => void;
}

class AIService {
  private useSpringBackend: boolean = false;

  public setUseSpringBackend(enabled: boolean) {
    this.useSpringBackend = enabled;
  }

  public isSpringBackendEnabled(): boolean {
    return this.useSpringBackend;
  }

  public resetConversation() {
    searchEngine.resetContext();
  }

  /**
   * Generates a structured response with optional streaming callback
   */
  public async searchAndGenerate(
    userQuery: string,
    callbacks?: StreamCallbacks
  ): Promise<SearchResultPayload> {
    // Phase 2: If Spring Boot backend is active, dispatch request via Axios
    if (this.useSpringBackend) {
      try {
        const backendResult = await callSpringSearchApi({ query: userQuery });
        return {
          answer: backendResult.answer,
          category: 'AI-Search',
          matchedPrograms: backendResult.results || [],
          keyInfo: backendResult.keyInfo,
          sources: backendResult.sources || [],
          relatedQuestions: backendResult.relatedQuestions || [],
          isOffTopic: backendResult.isOffTopic
        };
      } catch (err) {
        console.warn('Spring Boot API call failed, falling back to local SRMU search engine:', err);
      }
    }

    // Phase 1: Local Search Engine & Knowledge Base Processing
    const result = searchEngine.processQuery(userQuery);

    // Initial inference simulation delay (350ms)
    await new Promise((resolve) => setTimeout(resolve, 350));

    if (callbacks?.onTokenChunk) {
      // Simulate progressive LLM streaming
      const words = result.answer.split(' ');
      let currentText = '';

      for (let i = 0; i < words.length; i++) {
        currentText += (i === 0 ? '' : ' ') + words[i];
        callbacks.onTokenChunk(currentText);

        // Fast streaming typing delay (10-18ms per word)
        const delay = Math.floor(Math.random() * 8) + 10;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }

    return result;
  }
}

export const aiService = new AIService();
