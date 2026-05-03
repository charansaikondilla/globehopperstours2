import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Stars from './Stars';
import Footer from './Footer';

const Services: React.FC = () => {
    const services = [
        {
            title: 'Flight Booking',
            description: 'Find and book the best flights worldwide with exclusive deals and flexible options. We partner with major airlines to bring you competitive prices.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
            ),
            features: ['Best Price Guarantee', '24/7 Support', 'Flexible Cancellation', 'Multi-city Options'],
            link: '/flights',
        },
        {
            title: 'Hotel Reservations',
            description: 'Luxury resorts, boutique hotels, and budget-friendly stays. Book your perfect accommodation with verified reviews and instant confirmation.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z" />
                </svg>
            ),
            features: ['5-Star Properties', 'Best Location', 'Free Cancellation', 'Loyalty Rewards'],
            link: '/contact',
        },
        {
            title: 'Visa Services',
            description: 'Hassle-free visa processing for all destinations. Our experts handle documentation, applications, and follow-ups to ensure smooth approvals.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-4 8h8v2H8v-2z" />
                </svg>
            ),
            features: ['Fast Processing', 'Document Guidance', '90% Approval Rate', 'Multiple Countries'],
            link: '/visa',
        },
        {
            title: 'Tour Packages',
            description: 'Curated travel experiences with guided tours, activities, and local insights. Explore destinations like never before with our expert guides.',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
            ),
            features: ['Expert Guides', 'Group & Private Tours', 'All-Inclusive Packages', 'Custom Itineraries'],
            link: '/',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Our Services - Globalhopperstours | Premium Travel Solutions</title>
                <meta name="description" content="Explore our comprehensive travel services including flight booking, hotel reservations, visa assistance, and curated tour packages." />
            </Helmet>

            <Navbar />

            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <Stars />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-700">
                            Our Premium Services
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light tracking-wide">
                            Everything you need for a <span className="text-blue-400 font-medium italic">perfect journey</span>, all in one place
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group glass-card rounded-[2.5rem] p-8 md:p-12 hover:bg-white/10 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
                            >
                                {/* Icon */}
                                <div className="text-blue-500 mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h2 className="text-4xl font-black mb-4 text-white tracking-tight">
                                    {service.title}
                                </h2>

                                {/* Description */}
                                <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-10 flex-grow">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-slate-300 group/item">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 group-hover/item:bg-blue-500/20 transition-colors">
                                                <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <Link
                                    to={service.link}
                                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white hover:text-blue-600 transition-all duration-500 active:scale-95 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                >
                                    Book Now
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 rounded-[3rem] p-16 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 animate-shimmer opacity-20" />
                        <h2 className="text-5xl font-black mb-6 relative z-10 text-white tracking-tighter">Ready to Start Your Journey?</h2>
                        <p className="text-xl mb-12 opacity-90 relative z-10 font-light text-blue-50">
                            Contact our travel experts for personalized assistance
                        </p>
                        <Link
                            to="/contact"
                            className="relative z-10 inline-block px-12 py-5 bg-white text-blue-700 rounded-full font-black text-xl hover:scale-110 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] active:scale-95"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Services;
