import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, RefreshCw } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  placeholder?: string;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  isLoading,
  placeholder = 'Ask anything about SRMU courses, fees, SRMUSET, admissions, or placements...'
}) => {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea height based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    onSendMessage(input.trim());
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg focus-within:border-brand-gold focus-within:ring-2 focus-within:ring-brand-gold/30 transition-all p-2 sm:p-2.5">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        
        {/* Textarea */}
        <div className="flex items-end space-x-2 px-1">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            placeholder={placeholder}
            className="w-full resize-none outline-none text-slate-800 placeholder-slate-400 text-sm sm:text-base bg-transparent py-1.5 px-1 max-h-28 custom-scrollbar disabled:bg-transparent"
          />

          {/* Action Send Button */}
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
              input.trim() && !isLoading
                ? 'bg-brand-gold hover:bg-brand-goldDark text-brand-navy shadow-md shadow-brand-gold/30 hover:scale-105 active:scale-95 font-bold'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
            title="Send inquiry (Enter)"
          >
            {isLoading ? (
              <RefreshCw className="w-4 h-4 animate-spin text-brand-goldDark" />
            ) : (
              <Send className="w-4 h-4 translate-x-0.5" />
            )}
          </button>
        </div>

        {/* Bottom Helper Bar */}
        <div className="flex items-center justify-between px-2 pt-1 border-t border-slate-100 text-[11px] text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="flex items-center text-slate-500 font-medium">
              <Sparkles className="w-3 h-3 mr-1 text-brand-goldDark" />
              SRMU Generative AI Engine
            </span>
          </div>

          <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] text-slate-400">
            <span>Press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px] text-slate-600">Enter</kbd> to send</span>
          </div>
        </div>

      </form>
    </div>
  );
};
