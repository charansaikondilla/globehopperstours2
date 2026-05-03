
import React, { useState, useEffect } from 'react';
import ChatLauncher from './ChatLauncher';
import ChatWindow from './ChatWindow';
import { AnimatePresence } from 'framer-motion';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Automatically open the chatbot after 3 seconds
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 sm:gap-4">
            <AnimatePresence>
                {isOpen && (
                    <ChatWindow onClose={() => setIsOpen(false)} />
                )}
            </AnimatePresence>
            <ChatLauncher isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
    );
};

export default Chatbot;
