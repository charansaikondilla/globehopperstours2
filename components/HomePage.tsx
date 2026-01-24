import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Earth from './Earth';
import Stars from './Stars';
import Search from './Search';
import DestinationPopup from './DestinationPopup';
import Footer from './Footer';

interface Destination {
    name: string;
    coordinates: [number, number];
}

import { findDestination } from '../utils/searchLogic';

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [targetCoordinates, setTargetCoordinates] = useState<[number, number] | null>(null);
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

    const handleSearch = (query: string) => {
        setSelectedDestination(null);

        // Use smart search logic
        const result = findDestination(query);

        if (result) {
            setSearchQuery(result.name);
            // We can temporarily store coordinates in a way to pass them to Earth
            // Since Earth listens to searchQuery changes, we need to pass coordinates simultaneously
            // Ideally, we add a state for targetCoordinates
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
    // Popular Destinations Mock (linking to logic)
    const destinations = [
        { name: "Malaysia", title: "Malaysia Truly Asia", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2670&auto=format&fit=crop", flag: "🇲🇾", price: "From $599", duration: "5 Days" },
        { name: "Dubai", title: "Dubai Luxury", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop", flag: "🇦🇪", price: "From $749", duration: "6 Days" },
        { name: "Singapore", title: "Singapore City", img: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2671&auto=format&fit=crop", flag: "🇸🇬", price: "From $699", duration: "5 Days" },
        { name: "Thailand", title: "Thailand Getaway", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2659&auto=format&fit=crop", flag: "🇹🇭", price: "From $849", duration: "7 Days" },
        { name: "Maldives", title: "Maldives Escape", img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2655&auto=format&fit=crop", flag: "🇲🇻", price: "From $1199", duration: "5 Days" },
        { name: "Europe", title: "Europe Hop", img: "https://i.ibb.co/CpDFwYLv/unnamed.webp", flag: "🇪🇺", price: "From $899", duration: "8 Days" }
    ];

    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-blue-500/30">
            {/* GLOBAL BACKGROUND: STARS & EARTH */}
            {/* The Earth and Stars stay fixed while content scrolls over them */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Stars />
            </div>
            <div className="fixed inset-0 top-0 h-[85vh] z-0 flex items-center justify-center pointer-events-auto">
                <Earth
                    searchQuery={searchQuery}
                    targetCoordinates={targetCoordinates}
                    onCountryNotFound={handleCountryNotFound}
                    onCountryFound={handleCountryFound}
                    onPinClick={handlePinClick}
                    isPaused={!!selectedDestination}
                />
            </div>

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
                            </p>
                        </div>
                    </div>

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
                        </div>
                    </div>
                </section>

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
                            {destinations.map((dest) => (
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
                                            <p className="text-sm text-slate-400 font-medium mb-3">{dest.duration} / <span className="text-white font-bold">{dest.price}</span></p>
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
        </main>
    );
};

export default HomePage;
