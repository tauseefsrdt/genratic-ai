import React from 'react';
import { ChatSession } from '../types/ai';
import { X, MessageSquare, Trash2, Clock, Plus } from 'lucide-react';

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  sessions: ChatSession[];
  currentSessionId: string;
  onSelectSession: (session: ChatSession) => void;
  onClearHistory: () => void;
  onNewChat: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({
  isOpen,
  onClose,
  sessions,
  currentSessionId,
  onSelectSession,
  onClearHistory,
  onNewChat
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-sm bg-white shadow-2xl border-l border-slate-200 flex flex-col animate-slide-left">
          
          {/* Header */}
          <div className="p-4 bg-brand-navy text-white flex items-center justify-between border-b border-blue-900">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-brand-gold" />
              <h3 className="font-bold text-base">Search History</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Action: Start New Chat */}
          <div className="p-3 border-b border-slate-100 bg-slate-50">
            <button
              onClick={() => {
                onNewChat();
                onClose();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-brand-gold hover:bg-brand-goldDark text-brand-navy font-bold text-xs shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Start New Search Session</span>
            </button>
          </div>

          {/* Sessions List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
            {sessions.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-xs">
                <MessageSquare className="w-8 h-8 mx-auto mb-2 text-slate-300" />
                <span>No past search history yet</span>
              </div>
            ) : (
              sessions.map((sess) => (
                <button
                  key={sess.id}
                  onClick={() => {
                    onSelectSession(sess);
                    onClose();
                  }}
                  className={`w-full flex items-start space-x-2.5 p-3 rounded-xl text-left transition-all cursor-pointer border ${
                    sess.id === currentSessionId
                      ? 'bg-blue-50/80 border-blue-200 text-brand-navy shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-200/80 text-slate-700'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 text-brand-goldDark flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">{sess.title}</p>
                    <span className="text-[10px] text-slate-400 mt-0.5 block">{sess.timestamp}</span>
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Footer with Clear button */}
          {sessions.length > 0 && (
            <div className="p-3 border-t border-slate-100 bg-slate-50">
              <button
                onClick={onClearHistory}
                className="w-full flex items-center justify-center space-x-1.5 py-2 px-3 rounded-xl text-red-600 hover:bg-red-50 text-xs font-semibold transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All History</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
