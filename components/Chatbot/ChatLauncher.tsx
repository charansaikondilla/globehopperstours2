
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
            className="relative w-14 sm:w-16 h-14 sm:h-16 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30 flex items-center justify-center text-white overflow-hidden group flex-shrink-0"
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
                    <X size={24} className="sm:w-7 sm:h-7" />
                ) : (
                    <motion.div
                        animate={{
                            y: [0, -4, 2, -4, 0],
                            rotate: [0, -5, 5, -5, 0],
                            scale: [1, 1.05, 1, 1.05, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="text-white relative w-full h-full flex items-center justify-center overflow-hidden"
                    >
                        <motion.div
                            animate={{
                                y: [45, 0, -45],
                                opacity: [0, 1, 0],
                                scale: [0.8, 1, 0.8]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="flex items-center justify-center"
                        >
                            {/* Rotate -45deg to make Lucide Plane point straight up */}
                            <Plane size={32} className="sm:w-9 sm:h-9 transform -rotate-45 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
                        </motion.div>
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
