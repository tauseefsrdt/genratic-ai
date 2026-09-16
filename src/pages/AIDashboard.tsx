import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { EmptyState } from '../components/EmptyState';
import { ChatContainer } from '../components/ChatContainer';
import { ProgramDetailModal } from '../components/ProgramDetailModal';
import { HistoryDrawer } from '../components/HistoryDrawer';
import { ArchitectureModal } from '../components/ArchitectureModal';
import { ChatMessageItem, ChatSession } from '../types/ai';
import { Program } from '../types/program';
import { aiService } from '../services/aiService';

export const AIDashboard: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState<boolean>(false);
  const [isArchModalOpen, setIsArchModalOpen] = useState<boolean>(false);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string>(() => `session-${Date.now()}`);

  const getFormattedTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Load saved sessions from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('srmu_ai_sessions');
      if (saved) {
        setSessions(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load past sessions:', e);
    }
  }, []);

  // Save sessions on change
  const saveSessionState = (newMessages: ChatMessageItem[]) => {
    if (newMessages.length === 0) return;
    const firstUserQuery = newMessages.find((m) => m.role === 'user')?.content || 'Search Session';
    const title = firstUserQuery.length > 40 ? `${firstUserQuery.substring(0, 37)}...` : firstUserQuery;

    setSessions((prev) => {
      const existingIdx = prev.findIndex((s) => s.id === currentSessionId);
      const updatedSession: ChatSession = {
        id: currentSessionId,
        title,
        timestamp: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        messages: newMessages
      };

      let nextSessions: ChatSession[];
      if (existingIdx >= 0) {
        nextSessions = [...prev];
        nextSessions[existingIdx] = updatedSession;
      } else {
        nextSessions = [updatedSession, ...prev];
      }

      try {
        localStorage.setItem('srmu_ai_sessions', JSON.stringify(nextSessions));
      } catch (err) {
        console.error('LocalStorage save error:', err);
      }
      return nextSessions;
    });
  };

  const handleSearch = async (queryText: string) => {
    if (!queryText.trim() || isLoading) return;

    const userMessageId = `user-${Date.now()}`;
    const assistantMessageId = `ai-${Date.now() + 1}`;
    const timestamp = getFormattedTime();

    // 1. Add User Message
    const userMessage: ChatMessageItem = {
      id: userMessageId,
      role: 'user',
      content: queryText.trim(),
      timestamp
    };

    // 2. Add Assistant Message placeholder for streaming
    const assistantPlaceholder: ChatMessageItem = {
      id: assistantMessageId,
      role: 'assistant',
      query: queryText.trim(),
      content: '',
      timestamp,
      isStreaming: true
    };

    const nextMessages = [...messages, userMessage, assistantPlaceholder];
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      // 3. Search and stream response chunk-by-chunk
      const result = await aiService.searchAndGenerate(queryText.trim(), {
        onTokenChunk: (partialText) => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMessageId
                ? { ...m, content: partialText, isStreaming: true }
                : m
            )
          );
        }
      });

      // 4. Finalize message with structured programs, keyInfo, sources, and related questions
      const finalizedMessages: ChatMessageItem[] = nextMessages.map((m) =>
        m.id === assistantMessageId
          ? {
              ...m,
              content: result.answer,
              programs: result.matchedPrograms,
              keyInfo: result.keyInfo,
              sources: result.sources,
              relatedQuestions: result.relatedQuestions,
              isOffTopic: result.isOffTopic,
              isStreaming: false
            }
          : m
      );

      setMessages(finalizedMessages);
      saveSessionState(finalizedMessages);
    } catch (error) {
      console.error('Search error:', error);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMessageId
            ? {
                ...m,
                content: '⚠️ An error occurred while searching the knowledge base. Please try again.',
                isStreaming: false
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setCurrentSessionId(`session-${Date.now()}`);
    aiService.resetConversation();
  };

  const handleSelectSession = (session: ChatSession) => {
    setCurrentSessionId(session.id);
    setMessages(session.messages);
    aiService.resetConversation();
  };

  const handleClearHistory = () => {
    setSessions([]);
    localStorage.removeItem('srmu_ai_sessions');
  };

  return (
    <div className="flex flex-col h-screen bg-[#f5f8fc] overflow-hidden font-sans">
      
      {/* Header */}
      <Header
        onNewChat={handleNewChat}
        onToggleHistory={() => setIsHistoryOpen((prev) => !prev)}
        onOpenArchModal={() => setIsArchModalOpen(true)}
        historyCount={sessions.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        {messages.length === 0 ? (
          <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
            <EmptyState onSearch={handleSearch} isLoading={isLoading} />
          </div>
        ) : (
          <ChatContainer
            messages={messages}
            isLoading={isLoading}
            onSearch={handleSearch}
            onViewProgramDetails={(prog) => setSelectedProgram(prog)}
            onRegenerate={handleSearch}
          />
        )}
      </main>

      {/* Program Details Modal */}
      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />

      {/* Search History Drawer */}
      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        sessions={sessions}
        currentSessionId={currentSessionId}
        onSelectSession={handleSelectSession}
        onClearHistory={handleClearHistory}
        onNewChat={handleNewChat}
      />

      {/* Spring Boot / Spring AI Roadmap Modal */}
      <ArchitectureModal
        isOpen={isArchModalOpen}
        onClose={() => setIsArchModalOpen(false)}
      />

    </div>
  );
};

export default AIDashboard;
