import React from 'react';
import { SuggestionTopic } from '../types/search';
import {
  GraduationCap,
  FileText,
  BadgePercent,
  Building,
  Briefcase,
  Microscope,
  Award,
  PhoneCall,
  Sparkles
} from 'lucide-react';

interface SuggestionCardsProps {
  onSelectSuggestion: (query: string) => void;
  disabled?: boolean;
}

export const SUGGESTIONS_DATA: SuggestionTopic[] = [
  {
    id: 'sug-courses',
    icon: 'GraduationCap',
    label: 'Courses & Programs',
    category: 'Academics',
    query: 'What courses does SRMU offer after 12th and graduation?'
  },
  {
    id: 'sug-admission',
    icon: 'FileText',
    label: 'Admission Process',
    category: 'Admissions',
    query: 'How can I apply for admission and what is the SRMUSET process?'
  },
  {
    id: 'sug-fees',
    icon: 'BadgePercent',
    label: 'Fees & Scholarships',
    category: 'Financial Aid',
    query: 'What is the fee structure and what scholarships are available?'
  },
  {
    id: 'sug-campus',
    icon: 'Building',
    label: 'Campus & Hostel',
    category: 'Campus Life',
    query: 'What are the campus and hostel facilities at SRMU?'
  },
  {
    id: 'sug-placements',
    icon: 'Briefcase',
    label: 'Placements',
    category: 'Careers',
    query: 'Tell me about SRMU placements, highest package, and top recruiters.'
  },
  {
    id: 'sug-research',
    icon: 'Microscope',
    label: 'Research & Labs',
    category: 'Innovation',
    query: 'What research facilities, Ph.D. programs, and incubation does SRMU have?'
  },
  {
    id: 'sug-eligibility',
    icon: 'Award',
    label: 'Eligibility & Criteria',
    category: 'Requirements',
    query: 'What is the eligibility for B.Tech CSE and MBA programs?'
  },
  {
    id: 'sug-contact',
    icon: 'PhoneCall',
    label: 'Contact & Support',
    category: 'Helpline',
    query: 'What are the SRMU admission helpline numbers and campus location?'
  }
];

export const SuggestionCards: React.FC<SuggestionCardsProps> = ({
  onSelectSuggestion,
  disabled
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-blue-600" />;
      case 'FileText':
        return <FileText className="w-4 h-4 text-amber-600" />;
      case 'BadgePercent':
        return <BadgePercent className="w-4 h-4 text-emerald-600" />;
      case 'Building':
        return <Building className="w-4 h-4 text-purple-600" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4 text-indigo-600" />;
      case 'Microscope':
        return <Microscope className="w-4 h-4 text-teal-600" />;
      case 'Award':
        return <Award className="w-4 h-4 text-orange-600" />;
      case 'PhoneCall':
        return <PhoneCall className="w-4 h-4 text-rose-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-brand-goldDark" />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto font-sans">
      <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
        <Sparkles className="w-4 h-4 text-brand-goldDark" />
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Suggested Topics & Inquiries
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {SUGGESTIONS_DATA.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectSuggestion(item.query)}
            disabled={disabled}
            className="group flex flex-col items-start p-3 sm:p-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-gold/80 shadow-subtle hover:shadow-md transition-all duration-200 text-left cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-amber-50/80 flex items-center justify-center mb-2 transition-colors">
              {getIcon(item.icon)}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-brand-navy group-hover:text-blue-900 transition-colors line-clamp-1">
              {item.label}
            </span>
            <span className="text-[10px] text-slate-400 group-hover:text-brand-goldDark font-medium mt-0.5 transition-colors">
              Click to search →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
