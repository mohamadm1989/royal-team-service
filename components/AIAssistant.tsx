
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

interface AIAssistantProps {
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Willkommen bei Royal Team Service! Ich bin Ihr KI-Projekt-Assistent. Haben Sie Fragen zu einem Abbruch, einer Entkernung oder benötigen Sie eine Einschätzung zur Schadstoffsanierung?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-2xl bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      {/* Header */}
      <div className="bg-slate-900 p-6 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-safety-yellow rounded-full flex items-center justify-center text-slate-900 shadow-lg">
            <span className="material-symbols-outlined text-3xl">smart_toy</span>
          </div>
          <div>
            <h3 className="text-white font-black uppercase text-sm tracking-widest">KI Projekt-Planer</h3>
            <span className="text-xs text-green-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
            </span>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
        >
          <span className="material-symbols-outlined text-slate-400">close</span>
        </button>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-800/50"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-safety-yellow text-slate-900 font-semibold rounded-tr-none' 
                : 'bg-slate-700 text-slate-200 rounded-tl-none border border-slate-600'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 p-4 rounded-2xl rounded-tl-none flex gap-2">
              <div className="w-2 h-2 bg-safety-yellow rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-safety-yellow rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-safety-yellow rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Input */}
      <div className="p-6 bg-slate-900 border-t border-slate-700">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Beschreiben Sie Ihr Projekt..."
            className="w-full bg-slate-800 border-slate-600 rounded-2xl py-4 pl-6 pr-16 text-white placeholder-slate-500 focus:ring-safety-yellow focus:border-safety-yellow transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 w-12 bg-safety-yellow hover:bg-safety-yellow-dark text-slate-900 rounded-xl flex items-center justify-center transition-all active:scale-95 disabled:opacity-50"
          >
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
        <p className="mt-4 text-[10px] text-slate-500 text-center uppercase tracking-[0.2em] font-bold">
          Powered by Gemini 3 Flash &middot; Expert Knowledge for Royal Team Service
        </p>
      </div>
    </div>
  );
};

export default AIAssistant;
