import React from 'react';
import { X, Cpu, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-brand-navy p-4 sm:p-5 text-white flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold">System Architecture & Integration</h3>
              <p className="text-xs text-slate-300">Phase 1 (Local Demo) → Phase 2 (Spring Boot + Real AI)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 text-sm text-slate-700">
          
          {/* Phase 1 vs Phase 2 Comparison */}
          <div className="space-y-3">
            <h4 className="font-bold text-brand-navy text-sm uppercase tracking-wider flex items-center">
              <CheckCircle className="w-4 h-4 text-brand-green mr-1.5" />
              Phase 1: Current Demo State
            </h4>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 font-mono text-xs text-slate-700">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-brand-navy text-white px-2 py-1 rounded">React 18 + TS</span>
                <span>→</span>
                <span className="bg-emerald-600 text-white px-2 py-1 rounded">aiService.ts (Isolated)</span>
                <span>→</span>
                <span className="bg-amber-600 text-white px-2 py-1 rounded">Simulated LLM Stream</span>
                <span>→</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded">Chat UI</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-brand-navy text-sm uppercase tracking-wider flex items-center">
              <Sparkles className="w-4 h-4 text-amber-500 mr-1.5" />
              Phase 2: Upcoming Spring Boot + Real Generative AI
            </h4>
            <div className="p-3.5 bg-emerald-50/50 rounded-xl border border-emerald-200 font-mono text-xs text-slate-800 space-y-2">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="bg-brand-navy text-white px-2 py-1 rounded">React Frontend</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
                <span className="bg-purple-700 text-white px-2 py-1 rounded">Spring Boot REST/SSE API</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
                <span className="bg-emerald-700 text-white px-2 py-1 rounded">Spring AI Framework</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
                <span className="bg-blue-700 text-white px-2 py-1 rounded">OpenAI / Gemini LLM</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
                <span className="bg-amber-700 text-white px-2 py-1 rounded">pgvector / Milvus RAG</span>
              </div>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1.5">
            <p className="font-semibold text-brand-navy">Why this architecture?</p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li><code className="text-brand-green font-mono">aiService.ts</code> abstracts all network logic; swapping from local simulation to HTTP/SSE takes only a few lines.</li>
              <li>Fully typed message structures ensure seamless JSON schema matching with Spring Boot DTOs.</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-brand-navy hover:bg-brand-navyDark text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
