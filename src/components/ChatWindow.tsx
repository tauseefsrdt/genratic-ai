import React, { useRef, useEffect } from 'react';
import { ChatMessageData } from '../types/chat';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { AIBoardLanding } from './AIBoardLanding';
import { Bot, Sparkles } from 'lucide-react';

interface ChatWindowProps {
  messages: ChatMessageData[];
  isLoading: boolean;
  onSendMessage: (query: string) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  isLoading,
  onSendMessage
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when messages change or stream
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      
      {/* Scrollable Messages Area */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 sm:py-6 custom-scrollbar">
        <div className="max-w-4xl mx-auto w-full flex flex-col space-y-5">
          
          {/* Empty state: Show AI Board Landing */}
          {messages.length === 0 ? (
            <AIBoardLanding
              onSelectQuestion={onSendMessage}
              isLoading={isLoading}
            />
          ) : (
            <>
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {/* Typing / Loading animation when waiting for initial stream response */}
              {isLoading && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex items-start space-x-3 animate-fade-in">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-green to-brand-greenLight flex items-center justify-center text-white shadow-sm flex-shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white border border-slate-200/90 rounded-2xl rounded-tl-none p-3.5 shadow-subtle flex items-center space-x-2">
                    <span className="text-xs text-slate-500 font-medium mr-1 flex items-center">
                      <Sparkles className="w-3 h-3 text-amber-500 mr-1 animate-spin" style={{ animationDuration: '3s' }} />
                      Formulating response
                    </span>
                    <div className="flex space-x-1 items-center">
                      <div className="w-2 h-2 rounded-full bg-brand-green typing-dot" />
                      <div className="w-2 h-2 rounded-full bg-brand-green typing-dot" />
                      <div className="w-2 h-2 rounded-full bg-brand-green typing-dot" />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Bottom Fixed Input Area */}
      <div className="bg-white/80 backdrop-blur-md border-t border-slate-200/80 p-3 sm:p-4 sticky bottom-0 z-20">
        <div className="max-w-4xl mx-auto w-full">
          <ChatInput onSendMessage={onSendMessage} isLoading={isLoading} />
        </div>
      </div>

    </div>
  );
};
