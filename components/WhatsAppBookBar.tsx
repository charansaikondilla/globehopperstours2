import React from 'react';
import { getWhatsAppLink } from '../utils/whatsapp';

interface WhatsAppBookBarProps {
    /** Optional context (e.g. package or country name) added to the pre-filled message */
    context?: string;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor">
        <path d="M16.001 2.667c-7.363 0-13.334 5.97-13.334 13.333 0 2.353.615 4.66 1.784 6.687L2.667 29.333l6.83-1.75a13.29 13.29 0 0 0 6.503 1.657h.006c7.362 0 13.333-5.97 13.333-13.333 0-3.56-1.387-6.907-3.906-9.427a13.24 13.24 0 0 0-9.432-3.813Zm0 24.4h-.005a11.06 11.06 0 0 1-5.64-1.544l-.404-.24-4.053 1.038 1.082-3.951-.264-.406a11.02 11.02 0 0 1-1.688-5.87c0-6.106 4.968-11.073 11.078-11.073 2.958 0 5.738 1.153 7.83 3.247a10.99 10.99 0 0 1 3.242 7.831c0 6.106-4.968 11.073-11.083 11.073Zm6.075-8.293c-.333-.167-1.966-.97-2.27-1.081-.305-.111-.527-.167-.749.167s-.86 1.08-1.054 1.303c-.194.222-.388.25-.72.083-.334-.166-1.409-.518-2.684-1.653-.992-.884-1.663-1.977-1.858-2.31-.194-.334-.021-.514.146-.68.15-.15.334-.389.5-.583.167-.195.223-.334.334-.556.111-.222.056-.417-.028-.583-.083-.167-.749-1.803-1.026-2.469-.27-.65-.545-.562-.749-.572l-.638-.012c-.222 0-.583.083-.888.417-.305.333-1.165 1.138-1.165 2.775s1.193 3.22 1.36 3.442c.166.222 2.348 3.584 5.687 5.026.794.343 1.414.548 1.898.701.798.254 1.523.218 2.096.132.64-.095 1.966-.804 2.243-1.581.277-.777.277-1.442.194-1.581-.083-.14-.305-.222-.638-.389Z" />
    </svg>
);

const WhatsAppBookBar: React.FC<WhatsAppBookBarProps> = ({ context }) => {
    const message = context
        ? `Hi! I'd like to book "${context}". Could you share more details?`
        : `Hi! I'm interested in your travel packages. Could you help me plan a trip?`;

    return (
        <div
            className="fixed bottom-0 inset-x-0 z-40 bg-black/90 backdrop-blur-2xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] px-4 sm:px-6 py-3"
            style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="hidden sm:block">
                    <p className="text-white font-black text-sm tracking-tight">Ready to plan your trip?</p>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Get an instant reply on WhatsApp</p>
                </div>
                <a
                    href={getWhatsAppLink(message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-black rounded-xl text-xs sm:text-sm uppercase tracking-widest shadow-lg shadow-green-600/30 active:scale-95 transition-all duration-300"
                >
                    <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    Book Now
                </a>
            </div>
        </div>
    );
};

export default WhatsAppBookBar;
