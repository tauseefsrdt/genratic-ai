import React from 'react';
import { KeyInformation } from '../types/search';
import { CheckCircle2, Clock, IndianRupee, ShieldCheck, Briefcase, FileText, Phone } from 'lucide-react';

interface InfoCardProps {
  info: KeyInformation;
}

export const InfoCard: React.FC<InfoCardProps> = ({ info }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-subtle p-4 sm:p-5 space-y-3.5 font-sans">
      
      {/* Title */}
      <div className="flex items-center space-x-2 border-b border-slate-100 pb-2.5">
        <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
          i
        </div>
        <h4 className="font-bold text-sm sm:text-base text-brand-navy font-['Rubik']">
          {info.title}
        </h4>
      </div>

      {/* Grid of Key Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
        
        {info.eligibility && (
          <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-100">
            <span className="font-bold text-amber-900 flex items-center mb-1 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-amber-700" />
              Eligibility
            </span>
            <p className="text-slate-700 text-xs">{info.eligibility}</p>
          </div>
        )}

        {info.duration && (
          <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100">
            <span className="font-bold text-blue-900 flex items-center mb-1 text-xs">
              <Clock className="w-3.5 h-3.5 mr-1 text-blue-700" />
              Duration
            </span>
            <p className="text-slate-700 text-xs">{info.duration}</p>
          </div>
        )}

        {info.fee && (
          <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100">
            <span className="font-bold text-emerald-900 flex items-center mb-1 text-xs">
              <IndianRupee className="w-3.5 h-3.5 mr-1 text-emerald-700" />
              Fee Structure & Scholarships
            </span>
            <p className="text-slate-700 text-xs">{info.fee}</p>
          </div>
        )}

        {info.admissionProcess && (
          <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100">
            <span className="font-bold text-purple-900 flex items-center mb-1 text-xs">
              <FileText className="w-3.5 h-3.5 mr-1 text-purple-700" />
              Admission Steps
            </span>
            <p className="text-slate-700 text-xs">{info.admissionProcess}</p>
          </div>
        )}

      </div>

      {/* Career Opportunities */}
      {info.careerOpportunities && (
        <div className="p-3 bg-slate-50 rounded-xl text-xs">
          <span className="font-bold text-slate-800 flex items-center mb-1">
            <Briefcase className="w-3.5 h-3.5 mr-1 text-slate-600" />
            Career Roles & Opportunities
          </span>
          <p className="text-slate-600">{info.careerOpportunities}</p>
        </div>
      )}

      {/* Key Highlights list */}
      {info.keyHighlights && info.keyHighlights.length > 0 && (
        <div className="pt-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Important Highlights
          </span>
          <div className="space-y-1.5">
            {info.keyHighlights.map((hl, idx) => (
              <div key={idx} className="flex items-start text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-goldDark mr-2 flex-shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Info */}
      {info.contactInfo && (
        <div className="p-2.5 bg-blue-900/10 rounded-xl border border-blue-200 text-xs text-brand-navy flex items-center justify-between">
          <span className="flex items-center font-medium">
            <Phone className="w-3.5 h-3.5 mr-1 text-blue-700" />
            {info.contactInfo}
          </span>
        </div>
      )}

    </div>
  );
};
