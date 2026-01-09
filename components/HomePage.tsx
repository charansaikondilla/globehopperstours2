import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Earth from './Earth';
import Stars from './Stars';
import Search from './Search';
import DestinationPopup from './DestinationPopup';

interface Destination {
    name: string;
    coordinates: [number, number];
}

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

    const handleSearch = (countryName: string) => {
        setSelectedDestination(null);
        setSearchQuery(countryName);
    };

    const handleCountryNotFound = () => {
        alert("Country not found. Please check the spelling and try again.");
    };

    const handleCountryFound = (countryName: string) => {
        // Navigate to country page after rotation completes
        const urlFriendlyName = countryName.toLowerCase().replace(/\s+/g, '-');
        navigate(`/${urlFriendlyName}`);
    };

    const handlePinClick = (destination: Destination) => {
        setSelectedDestination(destination);
    };

    const handleClosePopup = () => {
        setSelectedDestination(null);
    };

    const handleExploreCountry = () => {
        if (selectedDestination) {
            const urlFriendlyName = selectedDestination.name.toLowerCase().replace(/\s+/g, '-');
            navigate(`/${urlFriendlyName}`);
        }
    };

    return (
        <>
            <Helmet>
                <title>3D Earth Travel Explorer | Discover Amazing Destinations Worldwide</title>
                <meta name="description" content="Explore the world in 3D! Discover travel packages to Japan, Philippines, Nepal, Sri Lanka, India, China, Thailand, Vietnam, and more. Interactive globe with curated vacation packages and tours." />
                <meta name="keywords" content="travel, 3D earth, destinations, vacation packages, tours, Japan, Thailand, Philippines, Nepal, India, China, Vietnam, Sri Lanka, travel explorer, world map" />
                
                {/* Open Graph */}
                <meta property="og:title" content="3D Earth Travel Explorer - Discover Amazing Destinations" />
                <meta property="og:description" content="Interactive 3D globe to explore travel destinations worldwide. Find your next adventure!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourwebsite.com" />
                <meta property="og:image" content="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2670&auto=format&fit=crop" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="3D Earth Travel Explorer" />
                <meta name="twitter:description" content="Explore the world in 3D and discover amazing travel packages" />
                <meta name="twitter:image" content="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2670&auto=format&fit=crop" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebApplication",
                        "name": "3D Earth Travel Explorer",
                        "description": "Interactive 3D globe for exploring travel destinations and vacation packages worldwide",
                        "applicationCategory": "TravelApplication",
                        "offers": {
                            "@type": "AggregateOffer",
                            "priceCurrency": "USD",
                            "lowPrice": "249",
                            "highPrice": "1799"
                        }
                    })}
                </script>
            </Helmet>
            
            <main className="relative flex flex-col items-center justify-center w-screen h-screen bg-black overflow-hidden" role="main">
                <Stars />
                <div className="absolute top-8 text-center z-20 w-full px-4">
                    <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
                        Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">World</span>
                    </h1>
                    <p className="text-gray-300 text-sm md:text-lg mb-6 max-w-2xl mx-auto">
                        Click any country to discover curated travel packages and start your next adventure
                    </p>
                    <Search onSearch={handleSearch} />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <Earth
                        searchQuery={searchQuery}
                        onCountryNotFound={handleCountryNotFound}
                        onCountryFound={handleCountryFound}
                        onPinClick={handlePinClick}
                        isPaused={!!selectedDestination}
                    />
                </div>

                {/* Reset View Button */}
                <div className="absolute bottom-10 z-20">
                    <button
                        onClick={() => {
                            setSelectedDestination(null);
                            setSearchQuery(null);
                        }}
                        className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold tracking-wider hover:bg-white/20 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                        aria-label="Reset globe view"
                    >
                        🌍 RESET VIEW
                    </button>
                </div>

                {selectedDestination && (
                    <DestinationPopup
                        destination={selectedDestination}
                        onClose={handleClosePopup}
                        onExplore={handleExploreCountry}
                    />
                )}
            </main>
        </>
    );
};

export default HomePage;
