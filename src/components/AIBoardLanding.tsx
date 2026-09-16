import React from 'react';
import { Sparkles, GraduationCap, Award, Building2, TrendingUp, Phone, MapPin } from 'lucide-react';
import { SuggestedQuestions } from './SuggestedQuestions';
import { SUGGESTED_QUESTIONS } from '../data/demoResponses';

interface AIBoardLandingProps {
  onSelectQuestion: (query: string) => void;
  isLoading: boolean;
}

export const AIBoardLanding: React.FC<AIBoardLandingProps> = ({
  onSelectQuestion,
  isLoading
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-4 sm:py-8 max-w-4xl mx-auto px-2 animate-fade-in font-sans">
      
      {/* Hero Badge */}
      <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-navy font-semibold text-xs mb-3.5 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-brand-goldDark" />
        <span>Shri Ramswaroop Memorial University • Generative AI Assistant</span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy text-center tracking-tight leading-tight mb-2 font-['Rubik']">
        SRMU <span className="text-brand-goldDark">AI Knowledge Board</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xs sm:text-base text-slate-600 text-center max-w-2xl mb-6 leading-relaxed">
        Instant, verified generative guidance on **115+ Courses**, **SRMUSET Scholarships**, B.Tech CSE, Admissions, Fees, Campus Hostels, and Placements.
      </p>

      {/* SRMU Key Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full mb-6">
        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-subtle flex flex-col items-center text-center">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-1.5">
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="text-base sm:text-xl font-bold text-brand-navy">115+</span>
          <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Programs (11 Disciplines)</span>
        </div>

        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-subtle flex flex-col items-center text-center">
          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5">
            <Award className="w-5 h-5" />
          </div>
          <span className="text-base sm:text-xl font-bold text-brand-navy">NAAC B+</span>
          <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Ranked 70th India Today</span>
        </div>

        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-subtle flex flex-col items-center text-center">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5">
            <Building2 className="w-5 h-5" />
          </div>
          <span className="text-base sm:text-xl font-bold text-brand-navy">100 Acres</span>
          <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Lush Green Campus</span>
        </div>

        <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-subtle flex flex-col items-center text-center">
          <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5">
            <TrendingUp className="w-5 h-5" />
          </div>
          <span className="text-base sm:text-xl font-bold text-brand-navy">90% Placed</span>
          <span className="text-[11px] sm:text-xs text-slate-500 font-medium">₹17 LPA Highest Pkg</span>
        </div>
      </div>

      {/* Suggested Questions Area */}
      <div className="w-full bg-white/70 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
        <SuggestedQuestions
          questions={SUGGESTED_QUESTIONS}
          onSelectQuestion={onSelectQuestion}
          disabled={isLoading}
        />
      </div>

      {/* Quick Location & Helpline Footer Banner */}
      <div className="mt-5 w-full flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-blue-50/70 border border-blue-100 rounded-xl text-[11px] sm:text-xs text-slate-600">
        <span className="flex items-center">
          <MapPin className="w-3.5 h-3.5 text-blue-700 mr-1 flex-shrink-0" />
          Lucknow-Deva Road, Barabanki, Uttar Pradesh (PIN: 225003)
        </span>
        <span className="flex items-center font-semibold text-brand-navy">
          <Phone className="w-3.5 h-3.5 text-brand-goldDark mr-1 flex-shrink-0" />
          Admissions: 1800 102 6004
        </span>
      </div>

    </div>
  );
};
