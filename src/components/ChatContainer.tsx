import React, { useRef, useEffect } from 'react';
import { ChatMessageItem } from '../types/ai';
import { Program } from '../types/program';
import { UserMessage } from './UserMessage';
import { AIMessage } from './AIMessage';
import { LoadingMessage } from './LoadingMessage';
import { SearchBox } from './SearchBox';

interface ChatContainerProps {
  messages: ChatMessageItem[];
  isLoading: boolean;
  onSearch: (query: string) => void;
  onViewProgramDetails: (program: Program) => void;
  onRegenerate?: (query: string) => void;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({
  messages,
  isLoading,
  onSearch,
  onViewProgramDetails,
  onRegenerate
}) => {
  const scrollEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden font-sans">
      
      {/* Scrollable Conversation History */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 sm:py-6 custom-scrollbar">
        <div className="max-w-4xl mx-auto w-full flex flex-col space-y-6">
          {messages.map((msg) =>
            msg.role === 'user' ? (
              <UserMessage
                key={msg.id}
                content={msg.content}
                timestamp={msg.timestamp}
              />
            ) : (
              <AIMessage
                key={msg.id}
                message={msg}
                onSelectQuestion={onSearch}
                onViewProgramDetails={onViewProgramDetails}
                onRegenerate={onRegenerate}
              />
            )
          )}

          {/* Loading / Thinking State */}
          {isLoading && messages[messages.length - 1]?.role === 'user' && (
            <LoadingMessage />
          )}

          <div ref={scrollEndRef} />
        </div>
      </div>

      {/* Sticky Bottom Search Bar */}
      <div className="bg-white/90 backdrop-blur-md border-t border-slate-200/80 p-3 sm:p-4 sticky bottom-0 z-20 shadow-lg">
        <div className="max-w-4xl mx-auto w-full">
          <SearchBox onSearch={onSearch} isLoading={isLoading} />
        </div>
      </div>

    </div>
  );
};
