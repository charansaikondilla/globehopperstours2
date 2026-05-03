import React from 'react';

interface Destination {
  name: string;
  coordinates: [number, number];
}

interface DestinationPopupProps {
  destination: Destination;
  onClose: () => void;
  onExplore?: () => void;
}

const DestinationPopup: React.FC<DestinationPopupProps> = ({ destination, onClose, onExplore }) => {
  return (
    <div className="glass-popup-overlay" onClick={onClose}>
      <div className="glass-popup-content group" onClick={(e) => e.stopPropagation()}>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] pointer-events-none" />

        <button
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all duration-300"
          onClick={onClose}
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-6 animate-shimmer">
            Destination Spotlight
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter italic">
            {destination.name}
          </h2>

          <div className="space-y-6">
            <p className="text-slate-400 text-lg leading-relaxed font-light italic">
              Experience the breathtaking wonders of {destination.name}. This extraordinary locale offers a perfect blend of rich heritage, stunning landscapes, and unforgettable adventures.
            </p>

            <div className="flex justify-end pt-4">
              {onExplore && (
                <button
                  onClick={onExplore}
                  className="group/btn relative px-8 py-3 bg-white text-blue-700 font-black rounded-2xl shadow-xl shadow-blue-500/10 hover:scale-105 active:scale-95 transition-all duration-300 uppercase tracking-widest text-sm flex items-center"
                >
                  Explore Collection
                  <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPopup;
