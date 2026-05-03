import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
            setSearchQuery(query);
            setTargetCoordinates(result.coordinates);
            setTimeout(() => setSelectedDestination(result), 800);
        }
    };

    const getDynamicPrice = (key: string, defaultPrice: string) => {
        const country = allDestinations?.[key];
        if (country && country.packages && country.packages.length > 0) {
            return `From ${country.packages[0].price}`;
        }
        return defaultPrice;
    };

    const features = [
        {
            title: "Curated Tours, Not Templates",
            desc: "Expertly designed itineraries tailored to your specific travel style and preferences.",
            icon: "✨"
        },
        {
            title: "Zero-Hassle Logistics",
            desc: "We handle every detail from visas to local transfers, so you can truly unwind.",
            icon: "🌍"
        },
        {
            title: "24/7 Global Support",
            desc: "Travel with confidence knowing our experts are just a message away, anywhere in the world.",
            icon: "🛡️"
        }
    ];

    return (
        <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee-left {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-50%, 0, 0); }
                }
                @keyframes marquee-right {
                    0% { transform: translate3d(-50%, 0, 0); }
                    100% { transform: translate3d(0, 0, 0); }
                }
                .marquee-row {
                    display: flex;
                    width: max-content;
                    will-change: transform;
                    backface-visibility: hidden;
                }
                .animate-marquee-left {
                    animation: marquee-left var(--duration) linear infinite;
                }
                .animate-marquee-right {
                    animation: marquee-right var(--duration) linear infinite;
                }
            ` }} />

            <div className="fixed inset-0 z-0 opacity-40 pointer-events-none">
                <Stars />
            </div>

            <main className="relative z-10 pt-20">
                <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden py-20">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 z-0 flex items-center justify-center"
                    >
                        <Earth targetCoordinates={targetCoordinates} />
                    </motion.div>

                    <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-center space-y-4 sm:space-y-6"
                        >
                            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none text-white selection:bg-blue-500">
                                GLOBE<span className="text-blue-500">HOPPERS</span><br />
                                <span className="text-4xl sm:text-5xl md:text-6xl text-white/40 tracking-tighter">TOURS & TRAVELS</span>
                            </h1>
                            <p className="text-xs sm:text-sm md:text-base font-black text-blue-400 tracking-[0.4em] uppercase max-w-2xl mx-auto leading-relaxed">
                                Curating Ultra-Premium Global Journeys
                            </p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="w-full max-w-2xl px-4"
                        >
                            <Search onSearch={handleSearch} />
                        </motion.div>
                    </div>
                </section>

                <section className="relative py-20 sm:py-24 px-4 bg-black pointer-events-auto overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.03] blur-[100px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">
                                Popular <span className="text-blue-500">Destinations</span>
                            </h2>
                        </div>

                        <div className="space-y-6 sm:space-y-8">
                            {[0, 1, 2].map((rowIndex) => {
                                const rowItems = rowIndex === 0 
                                    ? destinationPool.slice(0, 5) 
                                    : rowIndex === 1 
                                        ? destinationPool.slice(5, 9) 
                                        : destinationPool.slice(9);
                                
                                const marqueeItems = [...rowItems, ...rowItems]; 
                                const isEven = rowIndex % 2 === 0;

                                return (
                                    <div key={rowIndex} className="relative w-full overflow-hidden">
                                        <div 
                                            className={`marquee-row gap-4 px-2 ${isEven ? 'animate-marquee-left' : 'animate-marquee-right'}`}
                                            style={{ 
                                                '--duration': `${25 + rowIndex * 5}s` 
                                            } as React.CSSProperties}
                                        >
                                            {marqueeItems.map((dest, i) => (
                                                <div
                                                    key={`${dest.key}-${rowIndex}-${i}`}
                                                    onClick={() => navigate(`/${dest.key}`)}
                                                    className="group relative flex-shrink-0 w-[180px] sm:w-[240px] h-[130px] sm:h-[160px] rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 bg-white/[0.03] transition-all duration-300"
                                                >
                                                    <div className="absolute inset-0">
                                                        <img 
                                                            src={dest.img} 
                                                            alt={dest.name} 
                                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                            loading="lazy"
                                                        />
                                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                                    </div>

                                                    <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-20">
                                                        <h3 className="text-xs sm:text-sm font-black text-white tracking-tight truncate group-hover:text-blue-400">
                                                            {dest.name}
                                                        </h3>
                                                        <p className="text-[8px] sm:text-[9px] text-white/40 font-bold uppercase tracking-widest leading-none">
                                                            {dest.duration} • {getDynamicPrice(dest.key, dest.defaultPrice)}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="relative py-24 sm:py-32 px-4 bg-black pointer-events-auto">
                    <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
                            {features.map((feature, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className="flex flex-col items-center md:items-start text-center md:text-left gap-4 sm:gap-6"
                                >
                                    <div className="text-4xl sm:text-5xl">{feature.icon}</div>
                                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">{feature.title}</h3>
                                    <p className="text-sm sm:text-base text-white/40 font-medium leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <DestinationPopup 
                destination={selectedDestination} 
                onClose={() => setSelectedDestination(null)} 
            />

            <Footer />
        </div>
    );
};

export default HomePage;
