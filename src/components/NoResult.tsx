import React from 'react';
import { HelpCircle, Sparkles, ArrowRight } from 'lucide-react';

interface NoResultProps {
  query: string;
  onSelectSuggested: (question: string) => void;
}

export const NoResult: React.FC<NoResultProps> = ({ query, onSelectSuggested }) => {
  const suggestedTopics = [
    { title: 'Courses & Programs', query: 'What courses does SRMU offer after 12th?' },
    { title: 'B.Tech CSE & AI', query: 'Tell me about B.Tech Computer Science & Engineering.' },
    { title: 'Admissions & SRMUSET', query: 'What is the admission process and scholarship test?' },
    { title: 'Fee & Scholarships', query: 'What is the fee structure and scholarship scheme?' },
    { title: 'Placements & Companies', query: 'Tell me about SRMU placements and average package.' },
    { title: 'Campus & Hostels', query: 'What are the campus and hostel facilities at SRMU?' },
    { title: 'Research & Ph.D.', query: 'What research facilities and Ph.D. programs are available?' }
  ];

  return (
    <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-4 sm:p-5 space-y-4 text-slate-800 font-sans">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm sm:text-base text-brand-navy">
            Information not found for &ldquo;{query}&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Sorry, I couldn&apos;t find matching records in the official **Shri Ramswaroop Memorial University (SRMU)** knowledge base.
          </p>
        </div>
      </div>

      {/* Suggestion list */}
      <div className="pt-2 border-t border-amber-200/60">
        <div className="flex items-center space-x-1.5 mb-2.5 text-xs font-bold uppercase tracking-wider text-amber-900">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Try exploring official university topics:</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {suggestedTopics.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSuggested(item.query)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-amber-100/60 border border-amber-200 text-left text-xs font-medium text-slate-800 hover:text-brand-navy transition-all cursor-pointer shadow-subtle"
            >
              <span>{item.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
