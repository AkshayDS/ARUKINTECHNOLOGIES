
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../../types';

const AICourseAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your Arukien AI Advisor. Tell me about your goals or background, and I'll recommend the best tech track for you." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const genAI = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await genAI.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `You are a helpful education consultant for Arukien Technologies. Recommend one of our courses (Web Development, MERN Stack, AI & ML, Cloud Computing) based on this user input: "${userMsg}". Keep the response under 100 words and be encouraging.` }] }
        ],
        config: {
          systemInstruction: "You are an expert career coach for Arukien Technologies. Be concise, professional, and friendly. Always link user interests to our core courses: Web Dev, Full Stack, AI/ML, and Cloud Computing."
        }
      });

      const aiText = response.text || "I'm sorry, I couldn't process that. Could you try rephrasing?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-primary text-white shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <span className="material-icons text-3xl">{isOpen ? 'close' : 'smart_toy'}</span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          {/* Header */}
          <div className="p-4 bg-primary text-white flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <span className="material-icons">auto_awesome</span>
            </div>
            <div>
              <h4 className="font-bold">Arukien AI Advisor</h4>
              <p className="text-xs opacity-80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Online & Ready to Help
              </p>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900/50"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about courses, career path..."
                className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-full py-3 pl-4 pr-12 focus:ring-2 focus:ring-primary text-sm dark:text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-1 top-1 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                <span className="material-icons text-xl">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AICourseAdvisor;
