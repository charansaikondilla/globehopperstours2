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
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="popup-close" onClick={onClose}>&times;</span>
        <h2 className="text-3xl font-bold mb-4">{destination.name}</h2>
        <div className="space-y-4">
          <p className="text-gray-300">
            Detailed information about visiting {destination.name} will be displayed here.
            You can include facts, travel tips, famous landmarks, and more!
          </p>

          <div className="flex justify-end pt-4">
            {onExplore && (
              <button
                onClick={onExplore}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold shadow-lg transition transform hover:scale-105"
              >
                Explore {destination.name}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationPopup;
