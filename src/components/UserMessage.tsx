import React from 'react';
import { User } from 'lucide-react';

interface UserMessageProps {
  content: string;
  timestamp: string;
}

export const UserMessage: React.FC<UserMessageProps> = ({ content, timestamp }) => {
  return (
    <div className="flex w-full justify-end animate-slide-up font-sans">
      <div className="flex max-w-[92%] sm:max-w-[80%] flex-row-reverse space-x-reverse space-x-2.5 sm:space-x-3">
        {/* User Avatar */}
        <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-brand-navy text-white ring-2 ring-brand-navy/20 flex items-center justify-center shadow-sm">
          <User className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {/* Bubble */}
        <div className="flex flex-col space-y-1">
          <div className="flex items-center justify-end space-x-2 text-[11px] text-slate-400 font-medium">
            <span className="font-semibold text-slate-700">You</span>
            <span>•</span>
            <span>{timestamp}</span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl rounded-tr-none bg-brand-navy text-white text-sm font-medium shadow-sm">
            <p className="whitespace-pre-wrap">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
