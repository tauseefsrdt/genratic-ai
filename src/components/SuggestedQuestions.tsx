import React from 'react';
import { SuggestedQuestion } from '../types/chat';
import { Sparkles, BookOpen, Compass, Code, Microscope, Building, TrendingUp } from 'lucide-react';

interface SuggestedQuestionsProps {
  questions: SuggestedQuestion[];
  onSelectQuestion: (query: string) => void;
  disabled?: boolean;
}

export const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({
  questions,
  onSelectQuestion,
  disabled
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Admissions':
        return <Compass className="w-3.5 h-3.5 text-amber-600" />;
      case 'Academics':
        return <BookOpen className="w-3.5 h-3.5 text-blue-600" />;
      case 'Research':
        return <Microscope className="w-3.5 h-3.5 text-purple-600" />;
      case 'Campus':
        return <Building className="w-3.5 h-3.5 text-emerald-600" />;
      case 'Placements':
        return <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />;
      default:
        return <Code className="w-3.5 h-3.5 text-slate-500" />;
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 mb-2.5">
        <Sparkles className="w-4 h-4 text-brand-goldDark" />
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Suggested Topics & Inquiries
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {questions.map((q) => (
          <button
            key={q.id}
            onClick={() => onSelectQuestion(q.query)}
            disabled={disabled}
            className="group flex flex-col text-left p-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-gold/70 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-slate-800"
          >
            <div className="flex items-center justify-between w-full mb-1.5">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 flex items-center space-x-1 group-hover:bg-amber-50 group-hover:text-amber-800 transition-colors">
                {getCategoryIcon(q.category)}
                <span className="ml-1">{q.category}</span>
              </span>
              <span className="text-[10px] text-slate-400 group-hover:text-brand-navy font-semibold transition-colors">
                Ask →
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-brand-navy group-hover:text-blue-900 line-clamp-2 transition-colors">
              {q.query}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
