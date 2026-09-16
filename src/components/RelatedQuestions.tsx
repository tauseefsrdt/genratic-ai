import React from 'react';
import { HelpCircle, ArrowRight } from 'lucide-react';

interface RelatedQuestionsProps {
  questions: string[];
  onSelectQuestion: (question: string) => void;
  disabled?: boolean;
}

export const RelatedQuestions: React.FC<RelatedQuestionsProps> = ({
  questions,
  onSelectQuestion,
  disabled
}) => {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="w-full pt-3 font-sans">
      <div className="flex items-center space-x-1.5 mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-400">
        <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
        <span>Related Questions</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {questions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => onSelectQuestion(q)}
            disabled={disabled}
            className="group flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-brand-gold/70 text-xs font-medium text-brand-navy hover:text-blue-900 shadow-subtle hover:shadow transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{q}</span>
            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-brand-goldDark transition-transform group-hover:translate-x-0.5" />
          </button>
        ))}
      </div>
    </div>
  );
};
