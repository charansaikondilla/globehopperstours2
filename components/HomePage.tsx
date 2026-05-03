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

    const destinationPool = [
        { key: "japan", name: "Japan", img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2670&auto=format&fit=crop", defaultPrice: "From $899", duration: "6 Days" },
        { key: "malaysia", name: "Malaysia", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2670&auto=format&fit=crop", defaultPrice: "From $599", duration: "5 Days" },
        { key: "united-arab-emirates", name: "Dubai", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop", defaultPrice: "From $749", duration: "6 Days" },
        { key: "singapore", name: "Singapore", img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2671&auto=format&fit=crop", defaultPrice: "From $699", duration: "5 Days" },
        { key: "thailand", name: "Thailand", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2659&auto=format&fit=crop", defaultPrice: "From $849", duration: "7 Days" },
        { key: "maldives", name: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2655&auto=format&fit=crop", defaultPrice: "From $1199", duration: "5 Days" },
        { key: "nepal", name: "Nepal", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop", defaultPrice: "From $499", duration: "10 Days" },
        { key: "sri-lanka", name: "Sri Lanka", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop", defaultPrice: "From $549", duration: "7 Days" },
        { key: "india", name: "India", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2671&auto=format&fit=crop", defaultPrice: "From $399", duration: "8 Days" },
        { key: "china", name: "China", img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2670&auto=format&fit=crop", defaultPrice: "From $799", duration: "6 Days" },
        { key: "vietnam", name: "Vietnam", img: "https://images.unsplash.com/photo-1528127220168-9a3114ed41f8?q=80&w=2574&auto=format&fit=crop", defaultPrice: "From $449", duration: "7 Days" },
        { key: "south-korea", name: "South Korea", img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2670&auto=format&fit=crop", defaultPrice: "From $899", duration: "6 Days" },
        { key: "europe", name: "Europe", img: "https://i.ibb.co/CpDFwYLv/unnamed.webp", defaultPrice: "From $1299", duration: "12 Days" }
    ];

    const [popularDestinations, setPopularDestinations] = useState(destinationPool.slice(0, 6));

    React.useEffect(() => {
        const interval = setInterval(() => {
            setPopularDestinations(current => {
                const newDestinations = [...current];
                const indexToReplace = Math.floor(Math.random() * 6);
                
                // Find a destination from the pool that isn't currently visible
                const currentKeys = new Set(current.map(d => d.key));
                const availablePool = destinationPool.filter(d => !currentKeys.has(d.key));
                
                if (availablePool.length > 0) {
                    const randomReplacement = availablePool[Math.floor(Math.random() * availablePool.length)];
                    newDestinations[indexToReplace] = randomReplacement;
                }
                
                return newDestinations;
            });
        }, 3000); // Rotate every 3 seconds

        return () => clearInterval(interval);
    }, []);

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

                <section className="relative py-24 sm:py-32 px-4 bg-black pointer-events-auto overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 sm:mb-20">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
                                    <span className="text-[10px] sm:text-xs font-black text-blue-400 uppercase tracking-[0.4em]">Live Collections</span>
                                </div>
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
                                    Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">Destinations</span>
                                </h2>
                                <p className="text-xs sm:text-sm text-white/40 max-w-md font-medium leading-relaxed">
                                    A dynamic window into the world's most breathtaking horizons. Always changing, always inspiring.
                                </p>
                            </motion.div>
                            
                            <motion.button 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                onClick={() => navigate('/holidays')} 
                                className="group flex items-center gap-3 text-xs sm:text-sm font-black text-white hover:text-blue-400 transition-all duration-300"
                            >
                                <span className="relative">
                                    EXPLORE ALL PACKAGES
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                                </span>
                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </motion.button>
                        </div>

                        {/* Modern Asymmetrical Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[250px]">
                            {popularDestinations.map((dest, i) => {
                                // Dynamic Grid Mapping for a unique asymmetrical look
                                // 0: Large, 1: Tall, 2: Regular, 3: Wide, 4: Regular, 5: Regular
                                const gridStyles = [
                                    "col-span-2 row-span-2", // 0
                                    "col-span-1 row-span-2", // 1
                                    "col-span-1 row-span-1", // 2
                                    "col-span-2 row-span-1", // 3
                                    "col-span-1 row-span-1", // 4
                                    "col-span-1 row-span-1", // 5
                                ];

                                return (
                                    <motion.div
                                        key={dest.key}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        onClick={() => navigate(`/${dest.key}`)}
                                        className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.2)] ${gridStyles[i % gridStyles.length]}`}
                                    >
                                        <div className="absolute inset-0">
                                            <motion.img 
                                                key={dest.img}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                                src={dest.img} 
                                                alt={dest.name} 
                                                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                                        </div>

                                        <div className="absolute top-4 right-4 z-20">
                                            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-widest text-white">
                                                {dest.duration}
                                            </div>
                                        </div>

                                        <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                                            <h3 className="text-lg sm:text-xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors truncate">
                                                {dest.name}
                                            </h3>
                                            <p className="text-[9px] sm:text-[10px] text-blue-300/80 font-black uppercase tracking-widest">
                                                {getDynamicPrice(dest.key, dest.defaultPrice)}
                                            </p>
                                        </div>
                                        
                                        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/[0.03] transition-all duration-500 pointer-events-none" />
                                    </motion.div>
                                );
                            })}
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
