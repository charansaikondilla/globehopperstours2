import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Stars from './Stars';
import Footer from './Footer';

const FlightBooking: React.FC = () => {
    const [tripType, setTripType] = useState<'oneWay' | 'roundTrip' | 'multiCity'>('roundTrip');

    const popularRoutes = [
        { from: 'New York', to: 'London', price: '$489', flag: '🇺🇸 ✈️ 🇬🇧' },
        { from: 'Los Angeles', to: 'Tokyo', price: '$699', flag: '🇺🇸 ✈️ 🇯🇵' },
        { from: 'San Francisco', to: 'Paris', price: '$549', flag: '🇺🇸 ✈️ 🇫🇷' },
        { from: 'Chicago', to: 'Dubai', price: '$799', flag: '🇺🇸 ✈️ 🇦🇪' },
        { from: 'Miami', to: 'Bangkok', price: '$649', flag: '🇺🇸 ✈️ 🇹🇭' },
        { from: 'Boston', to: 'Sydney', price: '$899', flag: '🇺🇸 ✈️ 🇦🇺' },
    ];

    return (
        <>
            <Helmet>
                <title>Flight Booking - Globalhopperstours | Find Best Flight Deals</title>
                <meta name="description" content="Book flights worldwide with exclusive deals and flexible options. Compare prices, choose your preferred airlines, and enjoy hassle-free booking." />
            </Helmet>

            <Navbar />

            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <Stars />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-700">
                            Flight Booking
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light tracking-wide">
                            Find and book the <span className="text-blue-400 font-medium italic">best flights</span> worldwide with exclusive deals
                        </p>
                    </div>

                    {/* Search Form */}
                    <div className="glass-card rounded-[2.5rem] p-8 md:p-12 mb-16 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10 group-hover:bg-blue-600/20 transition-all duration-700" />

                        {/* Trip Type Selection */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            {['roundTrip', 'oneWay', 'multiCity'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setTripType(type as any)}
                                    className={`px-8 py-3 rounded-2xl font-bold transition-all duration-500 ${tripType === type
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                                        : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10'
                                        }`}
                                >
                                    {type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1')}
                                </button>
                            ))}
                        </div>

                        {/* Search Fields */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                            {[
                                { label: 'From', placeholder: 'Departure City', type: 'text' },
                                { label: 'To', placeholder: 'Destination City', type: 'text' },
                                { label: 'Departure', type: 'date' },
                                { label: tripType === 'roundTrip' ? 'Return' : 'Travelers', type: tripType === 'roundTrip' ? 'date' : 'select' }
                            ].map((field, idx) => (
                                <div key={idx}>
                                    <label className="block text-sm font-bold mb-3 text-slate-400 tracking-wider uppercase">{field.label}</label>
                                    {field.type === 'select' ? (
                                        <select className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 appearance-none cursor-pointer">
                                            <option className="bg-slate-900">1 Traveler</option>
                                            <option className="bg-slate-900">2 Travelers</option>
                                            <option className="bg-slate-900">3 Travelers</option>
                                            <option className="bg-slate-900">4+ Travelers</option>
                                        </select>
                                    ) : (
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <button className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl text-white font-black text-xl hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-500 hover:scale-[1.02] active:scale-95">
                            Search Flights
                        </button>
                    </div>

                    {/* Popular Routes */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-black mb-12 text-center bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent italic tracking-tight">
                            Popular Routes
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {popularRoutes.map((route, index) => (
                                <div
                                    key={index}
                                    className="glass-card rounded-3xl p-8 hover:bg-white/10 transition-all duration-700 hover:scale-[1.05] hover:shadow-2xl hover:shadow-blue-500/10 border-b-4 border-b-blue-500/30"
                                >
                                    <div className="text-4xl mb-6 text-center drop-shadow-lg">{route.flag}</div>
                                    <h3 className="text-2xl font-extrabold text-center mb-3 text-white">
                                        {route.from} <span className="text-blue-500 mx-2">→</span> {route.to}
                                    </h3>
                                    <p className="text-4xl font-black text-center mb-8 text-blue-500">{route.price}</p>
                                    <button className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white hover:text-blue-600 transition-all duration-500">
                                        View Deals
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {[
                            { icon: '💰', title: 'Best Price Guarantee', desc: 'Find the lowest fares or we refund the difference' },
                            { icon: '🔄', title: 'Flexible Changes', desc: 'Free date changes on selected bookings' },
                            { icon: '✈️', title: 'Multiple Airlines', desc: 'Compare 500+ airlines worldwide' },
                            { icon: '🎫', title: 'Instant Confirmation', desc: 'Get your e-ticket immediately after booking' },
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="glass-card rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2"
                            >
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                                <h3 className="text-lg font-black mb-3 text-blue-400 tracking-tight">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 rounded-[3rem] p-16 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 animate-shimmer opacity-20" />
                        <h2 className="text-5xl font-black mb-6 relative z-10 text-white tracking-tighter">Need Help Booking?</h2>
                        <p className="text-xl mb-12 opacity-90 relative z-10 font-light text-blue-50 max-w-2xl mx-auto">
                            Our travel experts are available 24/7 to assist you with global flight itineraries
                        </p>
                        <Link
                            to="/contact"
                            className="relative z-10 inline-block px-12 py-5 bg-white text-blue-700 rounded-full font-black text-xl hover:scale-110 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] active:scale-95"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default FlightBooking;
