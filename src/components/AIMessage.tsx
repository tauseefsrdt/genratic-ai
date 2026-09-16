import React, { useState } from 'react';
import { ChatMessageItem } from '../types/ai';
import { Program } from '../types/program';
import { ProgramCard } from './ProgramCard';
import { InfoCard } from './InfoCard';
import { SourceCard } from './SourceCard';
import { RelatedQuestions } from './RelatedQuestions';
import { NoResult } from './NoResult';
import { Bot, Copy, Check, RotateCcw, Volume2, Sparkles, GraduationCap } from 'lucide-react';

interface AIMessageProps {
  message: ChatMessageItem;
  onSelectQuestion: (question: string) => void;
  onViewProgramDetails: (program: Program) => void;
  onRegenerate?: (query: string) => void;
}

/**
 * Enhanced markdown-like formatting component
 */
const FormattedContent: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');

  return (
    <div className="space-y-2 text-sm leading-relaxed font-sans">
      {lines.map((line, idx) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return <div key={idx} className="h-1.5" />;
        }

        // Heading 3: ### Title
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={idx} className="font-bold text-base sm:text-lg text-brand-navy pt-2 pb-1 border-b border-slate-200/80 flex items-center gap-1.5 font-['Rubik']">
              {renderFormattedInline(trimmed.replace('### ', ''))}
            </h3>
          );
        }

        // Heading 2: ## Title
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
              <span className="text-slate-700">{renderFormattedInline(itemText)}</span>
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
              <span className="text-slate-700">{renderFormattedInline(numberedMatch[2])}</span>
            </div>
          );
        }

        // Standard paragraph
        return (
          <p key={idx} className="text-slate-700">
            {renderFormattedInline(line)}
          </p>
        );
      })}
    </div>
  );
};

function renderFormattedInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const token = match[0];

    // Bold: **text**
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={match.index} className="font-bold text-brand-navy">
          {token.slice(2, -2)}
        </strong>
      );
    }
    // Italic: *text*
    else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <em key={match.index} className="italic text-slate-800">
          {token.slice(1, -1)}
        </em>
      );
    }
    // Inline code: `code`
    else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={match.index} className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-900 font-mono text-xs border border-blue-200/60">
          {token.slice(1, -1)}
        </code>
      );
    }
    // Link: [title](url)
    else if (token.startsWith('[') && token.includes('](') && token.endsWith(')')) {
      const linkText = token.substring(1, token.indexOf(']('));
      const linkUrl = token.substring(token.indexOf('](') + 2, token.length - 1);
      parts.push(
        <a
          key={match.index}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 underline font-semibold"
        >
          {linkText}
        </a>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export const AIMessage: React.FC<AIMessageProps> = ({
  message,
  onSelectQuestion,
  onViewProgramDetails,
  onRegenerate
}) => {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      // Clean markdown tags for clear speech synthesis
      const plainText = message.content.replace(/[*#>`]/g, '').replace(/\[(.*?)\]\(.*?\)/g, '$1');
      const utterance = new SpeechSynthesisUtterance(plainText);
      utterance.rate = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex w-full justify-start animate-slide-up font-sans">
      <div className="flex max-w-[96%] sm:max-w-[90%] md:max-w-[85%] space-x-2.5 sm:space-x-3 w-full">
        
        {/* AI Assistant Avatar */}
        <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-brand-gold to-brand-goldLight text-brand-navy font-bold flex items-center justify-center shadow-sm shadow-amber-500/20">
          <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        {/* Structured Message Body */}
        <div className="flex flex-col space-y-2 flex-1 overflow-hidden">
          
          {/* Header Bar */}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-slate-700">SRMU AI Assistant</span>
              <span>•</span>
              <span>{message.timestamp}</span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded bg-amber-50 text-amber-800 text-[10px] font-semibold border border-amber-200">
                <Sparkles className="w-2.5 h-2.5 mr-1 text-brand-goldDark" /> Verified
              </span>
            </div>

            {/* Quick Action Toolbar */}
            <div className="flex items-center space-x-1.5">
              {/* Audio Listen */}
              <button
                onClick={handleSpeak}
                className={`p-1 rounded-lg transition-colors cursor-pointer ${
                  isSpeaking ? 'text-amber-600 bg-amber-50' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
                }`}
                title={isSpeaking ? 'Stop reading' : 'Read aloud'}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>

              {/* Copy */}
              <button
                onClick={handleCopy}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                title="Copy response"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>

              {/* Regenerate */}
              {onRegenerate && message.query && (
                <button
                  onClick={() => onRegenerate(message.query!)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Regenerate answer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* If off-topic, render NoResult state */}
          {message.isOffTopic ? (
            <NoResult
              query={message.query || 'your inquiry'}
              onSelectSuggested={onSelectQuestion}
            />
          ) : (
            <>
              {/* 1. Natural Language Answer Box */}
              <div className="p-4 sm:p-5 rounded-2xl rounded-tl-none bg-white text-slate-800 border border-slate-200/90 shadow-subtle">
                <FormattedContent content={message.content} />
                {message.isStreaming && (
                  <span className="inline-block w-2 h-4 bg-brand-gold ml-1 animate-pulse align-middle" />
                )}
              </div>

              {/* 2. Matched Program Cards Grid */}
              {message.programs && message.programs.length > 0 && !message.isStreaming && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <GraduationCap className="w-4 h-4 text-blue-700" />
                    <span>Relevant SRMU Programs ({message.programs.length})</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {message.programs.map((prog) => (
                      <ProgramCard
                        key={prog.id}
                        program={prog}
                        onViewDetails={onViewProgramDetails}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* 3. Key Information Card */}
              {message.keyInfo && !message.isStreaming && (
                <div className="pt-1">
                  <InfoCard info={message.keyInfo} />
                </div>
              )}

              {/* 4. Verified Sources */}
              {message.sources && message.sources.length > 0 && !message.isStreaming && (
                <SourceCard sources={message.sources} />
              )}

              {/* 5. Clickable Related Questions */}
              {message.relatedQuestions && message.relatedQuestions.length > 0 && !message.isStreaming && (
                <RelatedQuestions
                  questions={message.relatedQuestions}
                  onSelectQuestion={onSelectQuestion}
                />
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
};
