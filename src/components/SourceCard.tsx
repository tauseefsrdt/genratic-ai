import React from 'react';
import { SourceItem } from '../types/search';
import { ExternalLink, ShieldCheck, BookOpen } from 'lucide-react';

interface SourceCardProps {
  sources: SourceItem[];
}

export const SourceCard: React.FC<SourceCardProps> = ({ sources }) => {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="w-full pt-2 font-sans">
      <div className="flex items-center space-x-1.5 mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-400">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Verified SRMU Sources</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {sources.map((src, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 bg-white px-3 py-2 rounded-xl border border-slate-200/90 shadow-subtle hover:border-brand-gold/80 transition-all text-xs"
          >
            <div className="w-5 h-5 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-3 h-3" />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-semibold text-slate-800 line-clamp-1">{src.title}</span>
              <span className="text-[10px] text-slate-400">{src.category || 'Official Portal'}</span>
            </div>

            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-2 py-1 rounded-lg bg-slate-100 hover:bg-brand-gold hover:text-brand-navy text-[11px] font-semibold text-slate-700 transition-colors ml-2 cursor-pointer"
              title="View Source on srmu.ac.in"
            >
              <span>View Source</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
