import React from 'react';
import { Plus, History, GraduationCap, ShieldCheck, Phone, User, Cpu } from 'lucide-react';

interface HeaderProps {
  onNewChat: () => void;
  onToggleHistory: () => void;
  onOpenArchModal: () => void;
  historyCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onNewChat,
  onToggleHistory,
  onOpenArchModal,
  historyCount
}) => {
  return (
    <header className="bg-brand-navy text-white shadow-md border-b border-brand-navyLight/40 sticky top-0 z-30 font-sans">
      
      {/* Top Utility Helpline Bar matching srmu.ac.in */}
      <div className="bg-[#0f4a85] text-[11px] sm:text-xs text-slate-200 py-1 px-4 sm:px-8 border-b border-blue-900/50 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 text-slate-300">
            <span className="font-semibold text-brand-gold">Shri Ramswaroop Memorial University</span>
            <span>• Lucknow-Deva Road, Barabanki (PIN: 225003)</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919120007948"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-brand-gold transition-colors"
            >
              <span>WhatsApp: <strong>+91 9120007948</strong></span>
            </a>
            <span className="text-blue-400">|</span>
            <a
              href="tel:18001026004"
              className="flex items-center space-x-1 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-gold" />
              <span>Toll Free: <strong>1800 102 6004</strong></span>
            </a>
            <span className="text-blue-400">|</span>
            <span className="px-2 py-0.5 rounded bg-brand-gold text-brand-navy font-bold text-[10px] tracking-wide uppercase">
              SRMUSET 2026 Admissions Open
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: SRMU AI Brand Identity */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={onNewChat}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-brand-gold to-brand-goldLight flex items-center justify-center shadow-lg shadow-brand-gold/25 ring-2 ring-white/10 text-brand-navy cursor-pointer hover:scale-105 active:scale-95 transition-transform"
              title="SRMU AI Assistant"
            >
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base sm:text-2xl tracking-tight text-white font-['Rubik']">
                  SRMU <span className="text-brand-gold">AI ASSISTANT</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  <ShieldCheck className="w-3 h-3 mr-1" /> UGC Approved • NAAC B+
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 flex items-center space-x-1.5 font-normal">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <span>Generative Search & Knowledge Dashboard</span>
              </p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* New Chat Button */}
            <button
              onClick={onNewChat}
              className="flex items-center space-x-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-brand-gold hover:bg-brand-goldDark text-brand-navy font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md shadow-brand-gold/20 hover:scale-105 active:scale-95"
              title="Start a new conversation"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden sm:inline">New Chat</span>
            </button>

            {/* Search History Button */}
            <button
              onClick={onToggleHistory}
              className="flex items-center space-x-1.5 px-3 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-blue-950/80 hover:bg-blue-900 border border-blue-700/60 text-xs sm:text-sm text-slate-200 transition-all cursor-pointer"
              title="View search history"
            >
              <History className="w-4 h-4 text-brand-gold" />
              <span className="hidden md:inline">History</span>
              {historyCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-brand-gold text-brand-navy text-[10px] font-bold">
                  {historyCount}
                </span>
              )}
            </button>

            {/* Architecture / Spring Boot Badge */}
            <button
              onClick={onOpenArchModal}
              className="hidden lg:flex items-center space-x-1.5 px-2.5 py-2 rounded-xl bg-blue-950/80 hover:bg-blue-900 border border-blue-700/60 text-xs text-slate-300 transition-all cursor-pointer"
              title="Architecture info"
            >
              <Cpu className="w-3.5 h-3.5 text-brand-gold" />
              <span>Spring AI Ready</span>
            </button>

            {/* Profile Avatar */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-900/90 border border-blue-600/50 flex items-center justify-center text-slate-200">
              <User className="w-4 h-4 text-brand-gold" />
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};
