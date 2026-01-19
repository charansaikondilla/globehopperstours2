
import React from 'react';
import { motion } from 'framer-motion';
import { Plane, X } from 'lucide-react';

interface ChatLauncherProps {
    isOpen: boolean;
    toggle: () => void;
}

const ChatLauncher: React.FC<ChatLauncherProps> = ({ isOpen, toggle }) => {
    return (
        <motion.button
            onClick={toggle}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="relative w-16 h-16 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center text-white overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-cyan-400 opacity-100" />

            <motion.div
                animate={{
                    rotate: isOpen ? 90 : 0,
                    scale: isOpen ? 0.8 : 1
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative z-10"
            >
                {isOpen ? (
                    <X size={28} />
                ) : (
                    <motion.div
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {/* Custom SVG Plane for better visual or just standard icon */}
                        <Plane size={32} className="transform -rotate-45" />
                    </motion.div>
                )}
            </motion.div>

            {/* Pulse effect */}
            {!isOpen && (
                <span className="absolute w-full h-full rounded-full bg-blue-400 opacity-20 animate-ping" />
            )}
        </motion.button>
    );
};

export default ChatLauncher;
