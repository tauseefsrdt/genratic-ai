import React from 'react';
import { Program } from '../types/program';
import { Clock, GraduationCap, IndianRupee, ArrowUpRight, Info } from 'lucide-react';

interface ProgramCardProps {
  program: Program;
  onViewDetails: (program: Program) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-md hover:border-brand-gold/60 transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between font-sans">
      
      {/* Top Header & Degree Badge */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200/70">
            {program.degree}
          </span>
          {program.tags && program.tags.length > 0 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/70">
              {program.tags[0]}
            </span>
          )}
        </div>

        {/* Program Name */}
        <h4 className="font-bold text-base sm:text-lg text-brand-navy leading-snug mb-2 hover:text-blue-900 transition-colors">
          {program.name}
        </h4>

        {/* Faculty subtitle */}
        <p className="text-xs text-slate-500 mb-3 flex items-center">
          <GraduationCap className="w-3.5 h-3.5 mr-1 text-slate-400" />
          {program.faculty}
        </p>

        {/* Key Metrics Chips */}
        <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 rounded-xl mb-3 text-xs text-slate-700">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-slate-900 line-clamp-1">{program.fee.split('(')[0]}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
          {program.description}
        </p>

        {/* Eligibility Snippet */}
        <div className="text-[11px] text-slate-500 bg-amber-50/50 p-2 rounded-lg border border-amber-100 mb-4 line-clamp-2">
          <strong className="text-slate-700">Eligibility:</strong> {program.eligibility}
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onViewDetails(program)}
          className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-semibold text-brand-navy hover:text-white bg-slate-100 hover:bg-brand-navy transition-colors cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 mr-1" />
          View Details
        </button>

        <a
          href="https://srmu.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl text-xs font-bold text-brand-navy bg-brand-gold hover:bg-brand-goldDark transition-colors shadow-sm cursor-pointer"
        >
          <span>Apply Now</span>
          <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>

    </div>
  );
};
