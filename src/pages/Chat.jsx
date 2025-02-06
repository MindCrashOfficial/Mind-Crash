import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({
  token: '9owewv5lyQg7LayxQiNJrbmM4r6AuAyhwoyaYY2p',
});

const systemPrompt = `You are MindCrash, an expert AI assistant specializing in market analysis, financial crashes, and digital economy trends. Your knowledge spans:

1. Historical market crashes (Dot-com bubble, 2008 financial crisis, 2022 crypto crash)
2. Market indicators and risk assessment
3. Digital asset evaluation
4. Technological impact on markets
5. Regulatory frameworks
6. Crisis prevention and recovery strategies

Maintain a professional yet engaging tone. Provide accurate, data-driven responses while keeping the cyberpunk aesthetic of the interface. Always base your responses on real market events and verified data.`;

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const chatHistory = messages.map(msg => ({
        role: msg.role === 'user' ? 'User' : 'Chatbot',
        message: msg.content
      }));

      const response = await cohere.chat({
        message: userMessage,
        preamble: systemPrompt,
        chatHistory: chatHistory,
        temperature: 0.7,
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.text }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto h-[calc(100vh-16rem)]"
    >
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold neon-text">MindCrash AI Assistant</h1>
          <div className="text-sm text-[#00ffff]">
            {messages.length} messages exchanged
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto mb-6 space-y-4 p-6 neon-border rounded-lg bg-black/40">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full py-8 px-4">
              <div className="text-[#00ffff] text-2xl neon-text text-center">Welcome to MindCrash AI</div>
            </div>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/20'
                    : 'bg-[#ff00ff]/10 text-[#ff00ff] border border-[#ff00ff]/20'
                } backdrop-blur-sm shadow-lg hover:scale-[1.02] transition-transform`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <div className="text-xs mt-2 opacity-50">
                  {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-4 rounded-lg bg-[#ff00ff]/10 border border-[#ff00ff]/20 backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#ff00ff] rounded-full animate-ping"></div>
                  <div className="w-2 h-2 bg-[#ff00ff] rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-[#ff00ff] rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                  <p className="text-[#ff00ff] ml-2">Processing market data...</p>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about market trends, crashes, or digital economy..."
            className="flex-grow p-4 rounded-lg bg-black/90 border border-[#39ff14] text-white focus:outline-none focus:ring-2 focus:ring-[#39ff14] placeholder-gray-500 hover:bg-black/70 transition-colors backdrop-blur-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-4 rounded-lg bg-black/90 text-[#39ff14] border border-[#39ff14] hover:bg-[#39ff14]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            Send
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Chat