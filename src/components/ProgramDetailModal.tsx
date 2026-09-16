import React from 'react';
import { Program } from '../types/program';
import { X, Clock, IndianRupee, CheckCircle2, ArrowUpRight, ShieldCheck, Briefcase } from 'lucide-react';

interface ProgramDetailModalProps {
  program: Program | null;
  onClose: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ program, onClose }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-brand-navy p-5 text-white flex items-start justify-between border-b border-blue-900">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-brand-gold text-brand-navy inline-block mb-2">
              {program.degree}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-['Rubik']">{program.name}</h3>
            <p className="text-xs text-slate-300 mt-0.5">{program.faculty}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-sm text-slate-700 custom-scrollbar">
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <div>
                <span className="text-[11px] text-slate-500 block">Duration</span>
                <span className="font-semibold text-slate-800">{program.duration}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <IndianRupee className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <div>
                <span className="text-[11px] text-slate-500 block">Fee Structure</span>
                <span className="font-semibold text-slate-800">{program.fee}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-2">About the Program</h4>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">{program.description}</p>
          </div>

          {/* Eligibility */}
          <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80 text-xs sm:text-sm">
            <h4 className="font-bold text-amber-900 mb-1 flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-700" />
              Eligibility Criteria
            </h4>
            <p className="text-amber-800">{program.eligibility}</p>
          </div>

          {/* Program Highlights */}
          {program.highlights && program.highlights.length > 0 && (
            <div>
              <h4 className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-2">Key Highlights</h4>
              <ul className="space-y-1.5">
                {program.highlights.map((h, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-goldDark mr-2 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Career Prospects */}
          {program.careerProspects && program.careerProspects.length > 0 && (
            <div>
              <h4 className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-2 flex items-center">
                <Briefcase className="w-4 h-4 mr-1.5 text-blue-700" />
                Career Opportunities
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {program.careerProspects.map((career, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 text-blue-800 border border-blue-200/60"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Close
          </button>

          <a
            href="https://srmu.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-brand-navy bg-brand-gold hover:bg-brand-goldDark transition-colors shadow-md shadow-brand-gold/20 flex items-center space-x-1 cursor-pointer"
          >
            <span>Proceed to Apply</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
