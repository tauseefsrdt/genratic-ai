import React, { useState } from 'react';
import { ChatMessageData } from '../types/chat';
import { Bot, User, Copy, Check, BookOpen } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageData;
}

/**
 * Lightweight helper to render markdown-like text nicely
 */
const FormattedContent: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');

  return (
    <div className="space-y-2 text-sm leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Headers: ### Title or ## Title
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={idx} className="font-bold text-base sm:text-lg text-brand-navy pt-2 pb-1 border-b border-slate-200/80 flex items-center gap-1.5 font-['Rubik']">
              {renderFormattedInline(trimmed.replace('### ', ''))}
            </h3>
          );
        }
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={idx} className="font-bold text-lg text-brand-navy pt-2 pb-1 border-b border-slate-200/80 font-['Rubik']">
              {renderFormattedInline(trimmed.replace('## ', ''))}
            </h2>
          );
        }

        // Blockquote: > text
        if (trimmed.startsWith('> ')) {
          return (
            <div key={idx} className="border-l-4 border-brand-gold bg-amber-50/70 p-2.5 rounded-r-lg text-slate-800 text-xs sm:text-sm my-2 font-medium">
              {renderFormattedInline(trimmed.replace('> ', ''))}
            </div>
          );
        }

        // Unordered list item: * or -
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
          const itemText = trimmed.replace(/^[\*\-]\s+/, '');
          return (
            <div key={idx} className="flex items-start space-x-2 pl-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-goldDark mt-2 flex-shrink-0" />
              <span>{renderFormattedInline(itemText)}</span>
            </div>
          );
        }

        // Numbered list: 1. , 2.
        const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (numberedMatch) {
          return (
            <div key={idx} className="flex items-start space-x-2 pl-2">
              <span className="font-bold text-blue-800 text-xs mt-0.5 flex-shrink-0">
                {numberedMatch[1]}.
              </span>
              <span>{renderFormattedInline(numberedMatch[2])}</span>
            </div>
          );
        }

        // Normal paragraph
        return (
          <p key={idx} className="text-slate-700">
            {renderFormattedInline(line)}
          </p>
        );
      })}
    </div>
  );
};

/**
 * Parses bold text (**bold**) and italics (*italic*)
 */
function renderFormattedInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={match.index} className="font-semibold text-brand-navy">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <em key={match.index} className="italic text-slate-800">
          {token.slice(1, -1)}
        </em>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex w-full ${
        isUser ? 'justify-end' : 'justify-start'
      } animate-slide-up`}
    >
      <div
        className={`flex max-w-[92%] sm:max-w-[85%] md:max-w-[80%] space-x-2.5 sm:space-x-3 ${
          isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shadow-sm ${
            isUser
              ? 'bg-brand-navy text-white ring-2 ring-brand-navy/20'
              : 'bg-gradient-to-tr from-brand-gold to-brand-goldLight text-brand-navy font-bold shadow-amber-500/20'
          }`}
        >
          {isUser ? (
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </div>

        {/* Message Bubble */}
        <div className="flex flex-col space-y-1.5 flex-1 overflow-hidden">
          
          {/* Header info / Role */}
          <div
            className={`flex items-center space-x-2 text-[11px] font-medium text-slate-400 ${
              isUser ? 'justify-end' : 'justify-start'
            }`}
          >
            <span className="font-semibold text-slate-700">
              {isUser ? 'You' : 'SRMU AI Assistant'}
            </span>
            <span>•</span>
            <span>{message.timestamp}</span>
            {!isUser && (
              <button
                onClick={handleCopy}
                className="opacity-60 hover:opacity-100 transition-opacity p-0.5 text-slate-500 hover:text-slate-800 cursor-pointer"
                title="Copy response"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>

          {/* Bubble Box */}
          <div
            className={`p-3.5 sm:p-4 rounded-2xl shadow-sm text-sm ${
              isUser
                ? 'bg-brand-navy text-white rounded-tr-none font-medium'
                : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none shadow-subtle'
            }`}
          >
            {isUser ? (
              <p className="whitespace-pre-wrap">{message.content}</p>
            ) : (
              <div>
                <FormattedContent content={message.content} />
                {message.isStreaming && (
                  <span className="inline-block w-2 h-4 bg-brand-gold ml-1 animate-pulse align-middle" />
                )}
              </div>
            )}
          </div>

          {/* Sources Section for AI responses */}
          {!isUser && message.sources && message.sources.length > 0 && !message.isStreaming && (
            <div className="pt-1 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-semibold text-slate-400 flex items-center mr-1">
                <BookOpen className="w-3 h-3 mr-1 text-brand-goldDark" /> Verified SRMU Sources:
              </span>
              {message.sources.map((src, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200/70"
                >
                  {src.title}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
