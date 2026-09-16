import React from 'react';
import { SearchBox } from './SearchBox';
import { SuggestionCards } from './SuggestionCards';
import { Sparkles, GraduationCap, Award, Building2, TrendingUp } from 'lucide-react';

interface EmptyStateProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onSearch, isLoading }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-12 max-w-4xl mx-auto px-3 animate-fade-in font-sans">
      
      {/* University Hero Badge */}
      <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-navy font-semibold text-xs mb-4 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-brand-goldDark" />
        <span>Shri Ramswaroop Memorial University (SRMU)</span>
        <span className="text-slate-300">•</span>
        <span className="text-blue-900 font-bold">Generative AI Search</span>
      </div>

      {/* Hero Headline */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-navy text-center tracking-tight leading-tight mb-3 font-['Rubik']">
        Ask anything about <span className="text-brand-goldDark">SRMU</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xs sm:text-base text-slate-600 text-center max-w-2xl mb-8 leading-relaxed">
        Explore 115+ degree programs, SRMUSET scholarships up to 100%, admissions, fees, hostel amenities, and placement records powered by AI.
      </p>

      {/* Centered Main Search Area */}
      <div className="w-full mb-8">
        <SearchBox onSearch={onSearch} isLoading={isLoading} />
      </div>

      {/* Suggested Inquiries / Categories */}
      <div className="w-full mb-10">
        <SuggestionCards onSelectSuggestion={onSearch} disabled={isLoading} />
      </div>

      {/* University Metric Pillars */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
        <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-subtle flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-1.5">
            <GraduationCap className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold text-brand-navy">115+</span>
          <span className="text-[11px] text-slate-500 font-medium">Degree Courses</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-subtle flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5">
            <Award className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold text-brand-navy">NAAC B+</span>
          <span className="text-[11px] text-slate-500 font-medium">Ranked 70th India Today</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-subtle flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5">
            <Building2 className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold text-brand-navy">100 Acres</span>
          <span className="text-[11px] text-slate-500 font-medium">Smart Campus</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-subtle flex flex-col items-center text-center">
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5">
            <TrendingUp className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold text-brand-navy">90% Placed</span>
          <span className="text-[11px] text-slate-500 font-medium">₹17 LPA Highest Pkg</span>
        </div>
      </div>

    </div>
  );
};
