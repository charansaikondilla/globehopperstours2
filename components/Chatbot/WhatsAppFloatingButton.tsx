import React from 'react';
import { motion } from 'framer-motion';
import { getWhatsAppLink } from '../../utils/whatsapp';

const WhatsAppFloatingButton: React.FC = () => {
    return (
        <motion.a
            href={getWhatsAppLink("Hi! I'm interested in your travel packages. Could you help me plan a trip?")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
            className="relative w-14 sm:w-16 h-14 sm:h-16 bg-green-500 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center text-white overflow-hidden group flex-shrink-0"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600 to-emerald-400" />
            <svg viewBox="0 0 32 32" className="relative z-10 w-7 h-7 sm:w-8 sm:h-8" fill="currentColor">
                <path d="M16.001 2.667c-7.363 0-13.334 5.97-13.334 13.333 0 2.353.615 4.66 1.784 6.687L2.667 29.333l6.83-1.75a13.29 13.29 0 0 0 6.503 1.657h.006c7.362 0 13.333-5.97 13.333-13.333 0-3.56-1.387-6.907-3.906-9.427a13.24 13.24 0 0 0-9.432-3.813Zm0 24.4h-.005a11.06 11.06 0 0 1-5.64-1.544l-.404-.24-4.053 1.038 1.082-3.951-.264-.406a11.02 11.02 0 0 1-1.688-5.87c0-6.106 4.968-11.073 11.078-11.073 2.958 0 5.738 1.153 7.83 3.247a10.99 10.99 0 0 1 3.242 7.831c0 6.106-4.968 11.073-11.083 11.073Zm6.075-8.293c-.333-.167-1.966-.97-2.27-1.081-.305-.111-.527-.167-.749.167s-.86 1.08-1.054 1.303c-.194.222-.388.25-.72.083-.334-.166-1.409-.518-2.684-1.653-.992-.884-1.663-1.977-1.858-2.31-.194-.334-.021-.514.146-.68.15-.15.334-.389.5-.583.167-.195.223-.334.334-.556.111-.222.056-.417-.028-.583-.083-.167-.749-1.803-1.026-2.469-.27-.65-.545-.562-.749-.572l-.638-.012c-.222 0-.583.083-.888.417-.305.333-1.165 1.138-1.165 2.775s1.193 3.22 1.36 3.442c.166.222 2.348 3.584 5.687 5.026.794.343 1.414.548 1.898.701.798.254 1.523.218 2.096.132.64-.095 1.966-.804 2.243-1.581.277-.777.277-1.442.194-1.581-.083-.14-.305-.222-.638-.389Z" />
            </svg>
            <span className="absolute w-full h-full rounded-full bg-green-400 opacity-20 animate-ping" />
        </motion.a>
    );
};

export default WhatsAppFloatingButton;
