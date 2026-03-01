"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot } from "lucide-react";

export default function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'system', content: 'Connection encrypted. Nobel Architecture Node active. How may I direct your inquiry today?' }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        setMessages([...messages, { role: 'user', content: inputValue }]);
        setInputValue('');

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'system',
                content: 'Processing request parameters. A wealth strategist will review your query and connect with you shortly.'
            }]);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-[#0A1A3A] p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-sm">Strategist Node</div>
                                    <div className="text-[10px] text-blue-300 uppercase tracking-widest font-bold flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                        Online
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 min-h-[300px] max-h-[400px] overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed font-medium shadow-sm ${msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-br-sm'
                                            : 'bg-white text-gray-700 rounded-bl-sm border border-gray-200'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Initialize private dialogue..."
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium text-[#0A1A3A]"
                            />
                            <button
                                onClick={handleSend}
                                className="w-10 h-10 rounded-xl bg-[#0A1A3A] text-white flex items-center justify-center hover:bg-blue-600 transition-colors flex-shrink-0 shadow-md"
                            >
                                <Send className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 border-2 ${isOpen ? 'bg-red-500 hover:bg-red-600 border-red-400' : 'bg-[#0A1A3A] hover:bg-blue-700 border-[#0A1A3A]/50'
                    }`}
            >
                {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
            </motion.button>
        </div>
    );
}
