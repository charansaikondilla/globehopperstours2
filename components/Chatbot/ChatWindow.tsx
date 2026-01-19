
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Loader2 } from 'lucide-react';

interface Message {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    type?: 'text' | 'options' | 'card';
    options?: string[];
}

interface UserData {
    name: string;
    email: string;
    mobile: string;
    preference: string;
}

const ChatWindow: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: "Welcome aboard! ✈️ I'm Captain Aero. Ready to plan your dream vacation?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [step, setStep] = useState<'name' | 'email' | 'mobile' | 'preference' | 'done'>('name');
    const [userData, setUserData] = useState<UserData>({ name: '', email: '', mobile: '', preference: '' });
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (step === 'name' && messages.length === 1) {
            setTimeout(() => {
                addBotMessage("Before we take off, what name should I put on your boarding pass?");
            }, 1000);
        }
    }, []);

    const addBotMessage = (text: string, options?: string[]) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                text,
                sender: 'bot',
                type: options ? 'options' : 'text',
                options
            }]);
        }, 1500);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg = inputValue.trim();
        setMessages(prev => [...prev, { id: Date.now().toString(), text: userMsg, sender: 'user' }]);
        setInputValue('');

        processInput(userMsg);
    };

    const processInput = (input: string) => {
        switch (step) {
            case 'name':
                setUserData({ ...userData, name: input });
                setStep('email');
                addBotMessage(`Nice to meet you, ${input}! 🌍 Where can I send your flight details? (Enter your Email)`);
                break;
            case 'email':
                setUserData({ ...userData, email: input });
                setStep('mobile');
                addBotMessage("Got it. And a mobile number for urgent updates? 📱");
                break;
            case 'mobile':
                setUserData({ ...userData, mobile: input });
                setStep('preference');
                addBotMessage("Great! Last question: What kind of trip are you looking for?", ["Beach 🏖️", "Mountain 🏔️", "City 🏙️", "Adventure 🧗"]);
                break;
            case 'preference':
                // This case is usually handled by option click, but if they type it:
                finalizeChat(input);
                break;
        }
    };

    const handleOptionClick = (option: string) => {
        setMessages(prev => [...prev, { id: Date.now().toString(), text: option, sender: 'user' }]);
        finalizeChat(option);
    };

    const finalizeChat = (preference: string) => {
        const finalData = { ...userData, preference };
        setUserData(finalData);
        setStep('done');

        // Simulate API Call to Google Sheets
        console.log("Submitting to Sheets:", finalData);
        // TODO: Add fetch call here

        addBotMessage(`Perfect! I've found some amazing ${preference} packages for you. Our agents will contact you shortly at ${finalData.mobile}. Stay tuned! ✈️`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-[350px] md:w-[400px] h-[500px] bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                        <span className="text-xl">👨‍✈️</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-sm">Captain Aero</h3>
                        <span className="text-xs text-blue-300 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Online
                        </span>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
                {messages.map((msg) => (
                    <motion.div
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                    ? 'bg-blue-600 text-white rounded-tr-none'
                                    : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                                }`}
                        >
                            {msg.text}
                        </div>
                    </motion.div>
                ))}

                {/* Options */}
                {messages.length > 0 && messages[messages.length - 1].type === 'options' && messages[messages.length - 1].options && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {messages[messages.length - 1].options!.map(opt => (
                            <button
                                key={opt}
                                onClick={() => handleOptionClick(opt)}
                                className="text-xs bg-white/5 hover:bg-blue-600/50 border border-white/10 text-white px-3 py-2 rounded-full transition-colors"
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                )}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                            <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-black/20">
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10 focus-within:border-blue-500/50 transition-colors">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder={step === 'preference' ? "Select an option above..." : "Type your answer..."}
                        className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-gray-500"
                        disabled={step === 'preference' || step === 'done'}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim() || step === 'preference' || step === 'done'}
                        className="text-blue-400 hover:text-blue-300 disabled:opacity-50 transition-colors"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ChatWindow;
