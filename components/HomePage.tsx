import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
=======
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
import Earth from './Earth';
import Stars from './Stars';
import Search from './Search';
import DestinationPopup from './DestinationPopup';
import Footer from './Footer';
<<<<<<< HEAD
import { findDestination } from '../utils/searchLogic';
import { useDestinations } from '../context/DestinationsContext';
=======
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6

interface Destination {
    name: string;
    coordinates: [number, number];
}

<<<<<<< HEAD
const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { destinations: allDestinations } = useDestinations();
=======
import { findDestination } from '../utils/searchLogic';

import { useDestinations } from '../context/DestinationsContext';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const { destinations: allDestinations } = useDestinations(); // Rename to avoid collision
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [targetCoordinates, setTargetCoordinates] = useState<[number, number] | null>(null);
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

<<<<<<< HEAD
    const destinationPool = [
        { key: "japan", name: "Japan", img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $899", duration: "6 Days" },
        { key: "malaysia", name: "Malaysia", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $599", duration: "5 Days" },
        { key: "united-arab-emirates", name: "Dubai", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $749", duration: "6 Days" },
        { key: "singapore", name: "Singapore", img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $699", duration: "5 Days" },
        { key: "thailand", name: "Thailand", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $849", duration: "7 Days" },
        { key: "maldives", name: "Maldives", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $1199", duration: "5 Days" },
        { key: "nepal", name: "Nepal", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $499", duration: "10 Days" },
        { key: "sri-lanka", name: "Sri Lanka", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $549", duration: "7 Days" },
        { key: "india", name: "India", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $399", duration: "8 Days" },
        { key: "china", name: "China", img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $799", duration: "6 Days" },
        { key: "vietnam", name: "Vietnam", img: "https://images.unsplash.com/photo-1528127220168-9a3114ed41f8?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $449", duration: "7 Days" },
        { key: "south-korea", name: "South Korea", img: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=800&auto=format&fit=crop", defaultPrice: "From $899", duration: "6 Days" },
        { key: "europe", name: "Europe", img: "https://i.ibb.co/CpDFwYLv/unnamed.webp", defaultPrice: "From $1299", duration: "12 Days" }
    ];

    const [popularDestinations] = useState(destinationPool);

    const handleSearch = (query: string) => {
        setSelectedDestination(null);
        const result = findDestination(query, allDestinations);
=======
    const handleSearch = (query: string) => {
        setSelectedDestination(null);

        // Use smart search logic with dynamic data
        const result = findDestination(query, allDestinations); // Pass renamed var

>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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

<<<<<<< HEAD
    const handlePinClick = (destination: any) => {
=======
    const handlePinClick = (destination: Destination) => {
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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

<<<<<<< HEAD
    const getDynamicPrice = (key: string, defaultPrice: string) => {
        if (!allDestinations) return defaultPrice;
        const data = allDestinations[key];
        if (data && data.packages && data.packages.length > 0) {
=======
    // Features Data
    const features = [
        {
            icon: (
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Curated Tours, Not Templates",
            desc: "120+ handpicked experiences, beyond the beaten path."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Smart Planning Assistance",
            desc: "AI + expert planners handle everything from flights to local guides."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Human + Tech Support",
            desc: "24/7 dedicated help from real people who care."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Corporate, Group & Honeymoon Specialists",
            desc: "Tailored itineraries for groups, celebrations, and romantic escapes."
        }
    ];

    // Popular Destinations Mock (linking to logic)
    const popularDestinations = [
        { key: "malaysia", name: "Malaysia", title: "Malaysia Truly Asia", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2670&auto=format&fit=crop", flag: "🇲🇾", defaultPrice: "From $599", duration: "5 Days" },
        { key: "united-arab-emirates", name: "Dubai", title: "Dubai Luxury", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop", flag: "🇦🇪", defaultPrice: "From $749", duration: "6 Days" },
        { key: "singapore", name: "Singapore", title: "Singapore City", img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2671&auto=format&fit=crop", flag: "🇸🇬", defaultPrice: "From $699", duration: "5 Days" },
        { key: "thailand", name: "Thailand", title: "Thailand Getaway", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2659&auto=format&fit=crop", flag: "🇹🇭", defaultPrice: "From $849", duration: "7 Days" },
        { key: "maldives", name: "Maldives", title: "Maldives Escape", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2655&auto=format&fit=crop", flag: "🇲🇻", defaultPrice: "From $1199", duration: "5 Days" },
        { key: "europe", name: "Europe", title: "Europe Hop", img: "https://i.ibb.co/CpDFwYLv/unnamed.webp", flag: "🇪🇺", defaultPrice: "From $899", duration: "8 Days" }
    ];

    const getDynamicPrice = (key: string, defaultPrice: string) => {
        const data = allDestinations[key];
        if (data && data.packages && data.packages.length > 0) {
            // Use the first package price as the "From" price
            // Or ideally use Math.min if prices were numbers, but they are strings '$XXX'
            // For now, simple fallback to first package
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
            return `From ${data.packages[0].price}`;
        }
        return defaultPrice;
    };

<<<<<<< HEAD
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
=======
    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-blue-500/30">
            {/* GLOBAL BACKGROUND: STARS & EARTH */}
            {/* The Earth and Stars stay fixed while content scrolls over them */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Stars />
            </div>
            <div className="fixed inset-0 top-0 h-[85vh] z-0 flex items-center justify-center pointer-events-auto">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                <Earth
                    searchQuery={searchQuery}
                    targetCoordinates={targetCoordinates}
                    onCountryNotFound={handleCountryNotFound}
                    onCountryFound={handleCountryFound}
                    onPinClick={handlePinClick}
                    isPaused={!!selectedDestination}
                />
            </div>

<<<<<<< HEAD
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
=======
            {/* SCROLLABLE CONTENT WRAPPER */}
            <div className="relative z-10">

                {/* HERO SECTION (Transparent to show Earth) */}
                <section className="relative h-screen flex flex-col items-center justify-center pt-20 pointer-events-none">
                    {/* Content Overlay */}
                    <div className="text-center space-y-4 mb-[20vh] z-20 pointer-events-auto">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                            Where Will You <span className="text-blue-400">Hop Next?</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-200/80 font-light italic tracking-wide">
                            From Hop to Horizon
                        </p>



                        <div className="w-[90vw] max-w-2xl mx-auto mt-8 relative">
                            {/* Glass Search Background Glow */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                            <Search onSearch={handleSearch} />
                            <p className="text-sm text-blue-300/60 mt-4 tracking-wider uppercase font-medium">
                                Discover 120+ curated global tour experiences
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                            </p>
                        </div>
                    </div>

<<<<<<< HEAD
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
=======
                    {/* Trust Indicators */}
                    <div className="absolute bottom-10 w-full flex flex-col items-center gap-6 pointer-events-auto">
                        <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base font-medium text-blue-100/80">
                            <span className="flex items-center gap-2">
                                <span className="text-yellow-400 text-lg">★</span> Trusted by <strong className="text-white">1,000+</strong> Happy Travelers
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="text-blue-400">✈</span> Airline & GDS Connected
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-blue-200/60 font-semibold tracking-widest uppercase bg-white/5 px-6 py-2 rounded-full backdrop-blur-md border border-white/5">
                            <span className="text-blue-400">🛡</span> Visa Assistance & End-to-End Support
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                        </div>
                    </div>
                </section>

<<<<<<< HEAD
                <section className="relative py-20 sm:py-24 px-4 bg-black pointer-events-auto overflow-hidden">
                    {/* Atmospheric Glows */}
                    <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.03] blur-[100px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-1 w-8 bg-blue-500 rounded-full" />
                                    <span className="text-[9px] sm:text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Global Horizons</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter">
                                    Popular <span className="text-blue-500">Destinations</span>
                                </h2>
                            </motion.div>
                            
                            <motion.button 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                onClick={() => navigate('/holidays')} 
                                className="group text-[10px] sm:text-xs font-black text-white/60 hover:text-blue-400 transition-all tracking-[0.2em]"
                            >
                                EXPLORE ALL <span className="text-blue-500 group-hover:translate-x-1 inline-block transition-transform ml-1">→</span>
                            </motion.button>
                        </div>

                        {/* 3-Row Faster Horizontal Scrolling Marquees - Optimized for Performance */}
                        <div className="space-y-4 sm:space-y-6">
                            {[0, 1, 2].map((rowIndex) => {
                                // Split pool into rows using the simplified state
                                const rowItems = rowIndex === 0 
                                    ? popularDestinations.slice(0, 4) 
                                    : rowIndex === 1 
                                        ? popularDestinations.slice(4, 8) 
                                        : popularDestinations.slice(8);
                                
                                // Duplicate items for seamless loop
                                const marqueeItems = [...rowItems, ...rowItems];
                                const isEven = rowIndex % 2 === 0;

                                return (
                                    <div key={rowIndex} className="relative w-full overflow-hidden">
                                        <motion.div 
                                            initial={{ x: isEven ? 0 : "-50%" }}
                                            animate={{ x: isEven ? "-50%" : 0 }}
                                            transition={{ 
                                                duration: 20 + rowIndex * 5, // Slightly slower for better readability/perf
                                                repeat: Infinity, 
                                                ease: "linear" 
                                            }}
                                            style={{ willChange: "transform" }}
                                            className="flex gap-4 w-fit px-2"
                                        >
                                            {marqueeItems.map((dest, i) => (
                                                <motion.div
                                                    key={`${dest.key}-${i}`}
                                                    onClick={() => navigate(`/${dest.key}`)}
                                                    className="group relative flex-shrink-0 w-[180px] sm:w-[220px] h-[130px] sm:h-[150px] rounded-3xl overflow-hidden cursor-pointer border border-white/5 bg-white/[0.02] hover:border-blue-500/40 transition-all duration-300"
                                                    style={{ transform: "translateZ(0)" }} // Hardware acceleration
                                                >
                                                    <div className="absolute inset-0">
                                                        <img 
                                                            src={dest.img} 
                                                            alt={dest.name} 
                                                            decoding="async"
                                                            className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                                                    </div>

                                                    <div className="absolute top-3 right-3 z-20">
                                                        <div className="px-2 py-0.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/5 text-[7px] font-black uppercase text-blue-400">
                                                            {dest.duration}
                                                        </div>
                                                    </div>

                                                    <div className="absolute inset-x-0 bottom-0 p-4 z-20">
                                                        <h3 className="text-xs sm:text-sm font-black text-white truncate mb-0.5 tracking-tight group-hover:text-blue-400">
                                                            {dest.name}
                                                        </h3>
                                                        <p className="text-[8px] sm:text-[9px] text-white/40 font-bold uppercase tracking-widest leading-none">
                                                            {getDynamicPrice(dest.key, dest.defaultPrice)}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Why GlobeHoppersTours? Section - Optimized for Mobile */}
                <section id="why-us" className="py-16 sm:py-24 bg-black relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
                        <div className="text-center space-y-3 mb-12 sm:mb-16">
                            <motion.h2 
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter"
                            >
                                Why <span className="text-blue-500">GlobeHoppersTours?</span>
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-[8px] sm:text-[10px] font-black text-white/30 uppercase tracking-[0.4em]"
                            >
                                Your Intelligent Gateway to World Tours
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {[
                                {
                                    title: "Curated Tours, Not Templates",
                                    desc: "120+ handpicked experiences, beyond the beaten path.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Smart Planning Assistance",
                                    desc: "AI + expert planners handle everything from flights to local guides.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Human + Tech Support",
                                    desc: "24/7 dedicated help from real people who care.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Corporate & Group Specialists",
                                    desc: "Tailored itineraries for groups, celebrations, and romantic escapes.",
                                    icon: (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    )
                                }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="group p-6 sm:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-black text-white mt-6 leading-tight group-hover:text-blue-400">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[10px] sm:text-xs text-white/40 mt-3 leading-relaxed font-medium">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
            
            <AnimatePresence>
                {selectedDestination && (
                    <DestinationPopup
                        destination={selectedDestination}
                        onClose={() => setSelectedDestination(null)}
                    />
                )}
            </AnimatePresence>
=======
                {/* INSURANCE BANNER */}
                <section className="relative py-8 flex justify-center pointer-events-auto z-20">
                    <div className="px-6 py-3 bg-blue-900/60 backdrop-blur-xl rounded-full border border-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.2)] inline-block transform hover:scale-105 transition-transform duration-300 cursor-default">
                        <p className="text-sm md:text-lg text-blue-50 font-semibold tracking-wide text-center">
                            ✨ Travel with peace of mind — <span className="text-blue-300">We assist with travel insurance</span> for all bookings.
                        </p>
                    </div>
                </section>

                {/* DESTINATIONS GRID */}
                <section className="relative py-24 px-4 md:px-12 pointer-events-auto">
                    {/* Gradient Overlay for smooth transition from Earth to Content */}
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black/80 -translate-y-full" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] -z-10" />

                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 space-y-2">
                            <h2 className="text-3xl md:text-5xl font-black text-white">
                                Popular <span className="text-blue-500">Destinations</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {popularDestinations.map((dest) => (
                                <div
                                    key={dest.name}
                                    onClick={() => handleCountryFound(dest.name === "South Korea" ? "south-korea" : (dest.name === "United States" ? "united-states" : dest.name.toLowerCase()))}
                                    className="group relative h-96 rounded-[2rem] overflow-hidden cursor-pointer border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] bg-[#0a1128]"
                                >
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src={dest.img}
                                            alt={dest.name}
                                            className="w-full h-3/5 object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent h-3/5 bottom-1/3 top-auto" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 h-2/5 flex flex-col justify-between bg-[#0a1128]">
                                        <div>
                                            <h3 className="font-black text-2xl leading-tight mb-1 text-white">{dest.name === "United States" ? "USA" : dest.name}</h3>
                                            <p className="text-sm text-slate-400 font-medium mb-3">{dest.duration} / <span className="text-white font-bold">{getDynamicPrice(dest.key, dest.defaultPrice)}</span></p>
                                        </div>

                                        <button className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-sm hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg flex items-center justify-center gap-2 group-hover:gap-3">
                                            View Details <span>→</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <button
                                onClick={() => navigate('/holidays')}
                                className="px-10 py-4 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-200 font-bold hover:bg-blue-800/50 hover:text-white transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                            >
                                View All Packages →
                            </button>
                        </div>
                    </div>
                </section>

                {/* FEATURES SECTION */}
                <section className="relative py-24 px-4 md:px-12 bg-black/80 backdrop-blur-xl border-t border-white/5 pointer-events-auto">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20 space-y-2">
                            <h2 className="text-3xl md:text-5xl font-black text-white">
                                Why <span className="text-blue-500">GlobeHoppersTours?</span>
                            </h2>
                            <p className="text-blue-200/60 uppercase tracking-widest text-sm font-bold">
                                Your Intelligent Gateway to World Tours
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-500/20">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                                        {feature.desc}
                                    </p>
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
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        </main>
    );
};

export default HomePage;
