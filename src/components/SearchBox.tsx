import React, { useState, useRef, useEffect } from 'react';
import { Search, Send, Mic, MicOff, X, Sparkles, RefreshCw } from 'lucide-react';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  placeholder?: string;
  initialValue?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  onSearch,
  isLoading,
  placeholder = 'Ask anything about SRMU courses, admissions, fees, scholarships, or placements...',
  initialValue = ''
}) => {
  const [query, setQuery] = useState(initialValue);
  const [isListening, setIsListening] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialValue) {
      setQuery(initialValue);
    }
  }, [initialValue]);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim() || isLoading) return;
    onSearch(query.trim());
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const toggleListening = () => {
    if (isLoading) return;
    if (!isListening) {
      setIsListening(true);
      // Simulate voice input demo
      const demoVoicePrompts = [
        'What courses does SRMU offer after 12th?',
        'Tell me about B.Tech Computer Science and Engineering.',
        'What scholarships are available through SRMUSET?',
        'What is the placement record at SRMU?'
      ];
      const randomPrompt = demoVoicePrompts[Math.floor(Math.random() * demoVoicePrompts.length)];
      setTimeout(() => {
        setQuery(randomPrompt);
        setIsListening(false);
      }, 1400);
    } else {
      setIsListening(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto font-sans">
      <form
        onSubmit={handleSearch}
        className={`relative flex items-center bg-white rounded-2xl border-2 transition-all duration-300 shadow-md ${
          isListening
            ? 'border-brand-gold ring-4 ring-brand-gold/25 shadow-glow'
            : 'border-slate-200 hover:border-brand-gold/80 focus-within:border-brand-gold focus-within:ring-4 focus-within:ring-brand-gold/20 shadow-subtle hover:shadow-lg'
        }`}
      >
        {/* Search / AI Icon */}
        <div className="pl-4 sm:pl-5 pr-2 flex items-center justify-center text-slate-400">
          {isLoading ? (
            <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 animate-spin text-brand-goldDark" />
          ) : (
            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-brand-navy" />
          )}
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          placeholder={isListening ? 'Listening... Speak your question' : placeholder}
          className="w-full py-3.5 sm:py-4 px-2 text-slate-800 text-sm sm:text-base outline-none bg-transparent placeholder-slate-400 disabled:bg-transparent"
        />

        {/* Action Controls */}
        <div className="flex items-center space-x-1.5 pr-2.5 sm:pr-3">
          
          {/* Clear Button */}
          {query && !isLoading && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Clear search text"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Voice Microphone Toggle */}
          <button
            type="button"
            onClick={toggleListening}
            disabled={isLoading}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isListening
                ? 'bg-red-500 text-white animate-pulse'
                : 'text-slate-400 hover:text-brand-navy hover:bg-slate-100'
            }`}
            title={isListening ? 'Stop listening' : 'Ask with voice (Click to test)'}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>

          {/* Send Button */}
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl font-bold transition-all duration-200 cursor-pointer ${
              query.trim() && !isLoading
                ? 'bg-brand-gold hover:bg-brand-goldDark text-brand-navy shadow-md shadow-brand-gold/30 hover:scale-105 active:scale-95'
                : 'bg-slate-100 text-slate-300 cursor-not-allowed'
            }`}
            title="Search SRMU knowledge (Enter)"
          >
            <Send className="w-4 h-4 translate-x-0.5" />
          </button>

        </div>
      </form>

      {/* Under-search quick hint */}
      <div className="flex items-center justify-between px-3 pt-2 text-[11px] text-slate-400">
        <span className="flex items-center">
          <Sparkles className="w-3 h-3 text-brand-goldDark mr-1" />
          SRMU Generative AI Search Engine
        </span>
        <span className="hidden sm:inline">Press <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px] text-slate-600">Enter</kbd> to search</span>
      </div>
    </div>
  );
};
