import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Earth from './Earth';
import Stars from './Stars';
import Search from './Search';
import DestinationPopup from './DestinationPopup';
import Footer from './Footer';
import { findDestination } from '../utils/searchLogic';
import { useDestinations } from '../context/DestinationsContext';

interface Destination {
    name: string;
    coordinates: [number, number];
}

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { destinations: allDestinations } = useDestinations();
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [targetCoordinates, setTargetCoordinates] = useState<[number, number] | null>(null);
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

    const handleSearch = (query: string) => {
        setSelectedDestination(null);
        const result = findDestination(query, allDestinations);
        if (result) {
            setSearchQuery(result.name);
            setTargetCoordinates(result.coordinates);
        } else {
            setSearchQuery(query);
            setTargetCoordinates(null);
        }
    };

    const handleCountryNotFound = () => {
        if (window.confirm("Country not found. Would you like to contact us for a custom package?")) {
            navigate('/contact');
        }
    };

    const handleCountryFound = (countryName: string) => {
        const urlFriendlyName = countryName.toLowerCase().replace(/\s+/g, '-');
        navigate(`/${urlFriendlyName}`);
    };

    const handlePinClick = (destination: any) => {
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

    const getDynamicPrice = (key: string, defaultPrice: string) => {
        if (!allDestinations) return defaultPrice;
        const data = allDestinations[key];
        if (data && data.packages && data.packages.length > 0) {
            return `From ${data.packages[0].price}`;
        }
        return defaultPrice;
    };

    const popularDestinations = [
        { key: "malaysia", name: "Malaysia", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2670&auto=format&fit=crop", defaultPrice: "From $599", duration: "5 Days" },
        { key: "united-arab-emirates", name: "Dubai", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop", defaultPrice: "From $749", duration: "6 Days" },
        { key: "singapore", name: "Singapore", img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2671&auto=format&fit=crop", defaultPrice: "From $699", duration: "5 Days" },
        { key: "thailand", name: "Thailand", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2659&auto=format&fit=crop", defaultPrice: "From $849", duration: "7 Days" },
        { key: "maldives", name: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2655&auto=format&fit=crop", defaultPrice: "From $1199", duration: "5 Days" },
        { key: "europe", name: "Europe", img: "https://i.ibb.co/CpDFwYLv/unnamed.webp", defaultPrice: "From $899", duration: "8 Days" }
    ];

    const features = [
        {
            title: "Curated Tours, Not Templates",
            desc: "120+ handpicked experiences, beyond the beaten path."
        },
        {
            title: "Smart Planning Assistance",
            desc: "AI + expert planners handle everything from flights to local guides."
        },
        {
            title: "Human + Tech Support",
            desc: "24/7 dedicated help from real people who care."
        },
        {
            title: "Corporate & Group Specialists",
            desc: "Tailored itineraries for groups, celebrations, and romantic escapes."
        }
    ];

    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-blue-500/30 w-screen overflow-x-hidden font-lexend">
            <div className="fixed inset-0 z-0 pointer-events-none w-screen h-screen">
                <Stars />
            </div>
            <div className="fixed inset-0 top-0 h-screen z-0 flex items-center justify-center pointer-events-auto w-screen">
                <Earth
                    searchQuery={searchQuery}
                    targetCoordinates={targetCoordinates}
                    onCountryNotFound={handleCountryNotFound}
                    onCountryFound={handleCountryFound}
                    onPinClick={handlePinClick}
                    isPaused={!!selectedDestination}
                />
            </div>

            <div className="relative z-10">
                <section className="relative h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 pointer-events-none">
                    <div className="text-center space-y-3 sm:space-y-4 mb-[25vh] sm:mb-[22vh] z-20 pointer-events-auto px-6">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight drop-shadow-2xl">
                            Where Will You <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400">Hop Next?</span>
                        </h1>
                        <p className="text-[9px] sm:text-[10px] text-blue-200/40 font-black tracking-[0.6em] uppercase">
                            From Hop to Horizon
                        </p>
                        
                        <div className="w-full max-w-md mx-auto mt-6 sm:mt-8 relative">
                            <div className="absolute inset-0 bg-blue-500/5 blur-[60px] rounded-full" />
                            <Search onSearch={handleSearch} />
                            <p className="text-[8px] sm:text-[9px] text-blue-400/30 mt-4 tracking-[0.4em] uppercase font-black">
                                Discover 120+ global experiences
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-4 sm:bottom-8 w-full flex flex-col items-center pointer-events-auto px-4 z-30">
                        <div className="flex flex-col items-center scale-100 sm:scale-125 transition-all duration-700">
                            {/* Avatars and Stars Row */}
                            <div className="flex items-center gap-4 sm:gap-8 mb-4">
                                {/* Avatars */}
                                <div className="flex -space-x-3 sm:-space-x-4">
                                    {[
                                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&h=128&auto=format&fit=crop",
                                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&h=128&auto=format&fit=crop",
                                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=128&h=128&auto=format&fit=crop",
                                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=128&h=128&auto=format&fit=crop",
                                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=128&h=128&auto=format&fit=crop"
                                    ].map((url, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-800 overflow-hidden shadow-xl"
                                        >
                                            <img src={url} className="w-full h-full object-cover" alt="User" />
                                        </motion.div>
                                    ))}
                                </div>
                                
                                {/* Yellow Stars */}
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-xl sm:text-2xl text-yellow-400 drop-shadow-md">★</span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Trust Text */}
                            <p className="text-white text-sm sm:text-base font-medium tracking-tight drop-shadow-lg">
                                Trusted by <span className="font-black">1,000+</span> Happy Travelers
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative py-20 sm:py-24 px-4 bg-black/95 border-t border-white/5 pointer-events-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
                            <div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">Popular Destinations</h2>
                                <p className="text-[10px] sm:text-xs text-blue-400/60 uppercase tracking-[0.3em] font-black">Top Picks For Your Next Journey</p>
                            </div>
                            <button onClick={() => navigate('/holidays')} className="text-xs sm:text-sm font-black text-blue-400 hover:text-white transition-colors">EXPLORE ALL PACKAGES →</button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                            {popularDestinations.map((dest) => (
                                <div
                                    key={dest.key}
                                    onClick={() => navigate(`/${dest.key}`)}
                                    className="group relative h-[280px] sm:h-[320px] rounded-[2rem] overflow-hidden cursor-pointer border border-white/5 bg-white/5 shadow-2xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                                    <img src={dest.img} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute bottom-5 left-5 right-5 z-20">
                                        <h3 className="text-sm sm:text-base font-black text-white mb-0.5 tracking-tight group-hover:text-blue-400 transition-colors drop-shadow-md">{dest.name}</h3>
                                        <p className="text-[9px] sm:text-[10px] text-blue-300/80 font-bold uppercase tracking-widest">{getDynamicPrice(dest.key, dest.defaultPrice)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative py-20 px-4 bg-black pointer-events-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {features.map((feature, i) => (
                                <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all">
                                    <h3 className="text-base sm:text-lg font-black mb-3 text-white">{feature.title}</h3>
                                    <p className="text-[11px] sm:text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Footer />

            {selectedDestination && (
                <DestinationPopup
                    destination={selectedDestination}
                    onClose={handleClosePopup}
                    onExplore={handleExploreCountry}
                />
            )}
        </main>
    );
};

export default HomePage;
