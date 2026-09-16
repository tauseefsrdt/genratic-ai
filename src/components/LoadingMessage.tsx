import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

export const LoadingMessage: React.FC = () => {
  return (
    <div className="flex w-full justify-start animate-fade-in font-sans">
      <div className="flex max-w-[92%] sm:max-w-[85%] space-x-3">
        {/* Avatar */}
        <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-brand-gold to-brand-goldLight flex items-center justify-center text-brand-navy shadow-sm">
          <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {/* Content Box */}
        <div className="flex-1 space-y-3">
          {/* Header */}
          <div className="flex items-center space-x-2 text-[11px] font-medium text-slate-400">
            <span className="font-semibold text-slate-700">SRMU AI Assistant</span>
            <span>•</span>
            <span className="flex items-center text-brand-goldDark font-semibold">
              <Sparkles className="w-3 h-3 mr-1 animate-spin" style={{ animationDuration: '3s' }} />
              Searching SRMU Knowledge Base...
            </span>
          </div>

          {/* Bubble Skeleton */}
          <div className="bg-white border border-slate-200/90 rounded-2xl rounded-tl-none p-4 shadow-subtle space-y-3">
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <span>Synthesizing answer</span>
              <div className="flex space-x-1 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-goldDark typing-dot" />
                <div className="w-1.5 h-1.5 rounded-full bg-brand-goldDark typing-dot" />
                <div className="w-1.5 h-1.5 rounded-full bg-brand-goldDark typing-dot" />
              </div>
            </div>

            {/* Skeleton lines */}
            <div className="space-y-2 pt-1">
              <div className="h-3.5 bg-slate-100 rounded-full w-4/5 animate-pulse" />
              <div className="h-3.5 bg-slate-100 rounded-full w-full animate-pulse" />
              <div className="h-3.5 bg-slate-100 rounded-full w-2/3 animate-pulse" />
            </div>

            {/* Skeleton mini card */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="h-16 bg-slate-50 rounded-xl border border-slate-100 animate-pulse" />
              <div className="h-16 bg-slate-50 rounded-xl border border-slate-100 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
