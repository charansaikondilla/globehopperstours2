import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import Navbar from './Navbar';
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
import Stars from './Stars';
import Footer from './Footer';

const Visa: React.FC = () => {
    const visaServices = [
        {
            country: 'United States',
            flag: '🇺🇸',
            processingTime: '10-15 days',
            price: '$299',
            requirements: ['Valid Passport', 'Application Form', 'Photo', 'Supporting Documents'],
        },
        {
            country: 'United Kingdom',
            flag: '🇬🇧',
            processingTime: '15-20 days',
            price: '$349',
            requirements: ['Valid Passport', 'Financial Proof', 'Travel Itinerary', 'Hotel Booking'],
        },
        {
            country: 'Schengen Countries',
            flag: '🇪🇺',
            processingTime: '10-15 days',
            price: '$279',
            requirements: ['Valid Passport', 'Travel Insurance', 'Hotel Confirmation', 'Bank Statement'],
        },
        {
            country: 'Australia',
            flag: '🇦🇺',
            processingTime: '20-30 days',
            price: '$399',
            requirements: ['Valid Passport', 'Health Insurance', 'Character Documents', 'Financial Proof'],
        },
        {
            country: 'Canada',
            flag: '🇨🇦',
            processingTime: '15-25 days',
            price: '$329',
            requirements: ['Valid Passport', 'Purpose of Visit', 'Financial Documents', 'Medical Exam'],
        },
        {
            country: 'Japan',
            flag: '🇯🇵',
            processingTime: '5-7 days',
            price: '$199',
            requirements: ['Valid Passport', 'Application Form', 'Photo', 'Travel Documents'],
        },
    ];

    return (
        <>
            <Helmet>
                <title>Visa Services - GlobeHoppersTours | Hassle-Free Visa Processing</title>
                <meta name="description" content="Get expert visa assistance for countries worldwide. Fast processing, document guidance, and high approval rates. Let us handle your visa application." />
            </Helmet>

<<<<<<< HEAD
            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <Stars />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                            Visa Services
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-light tracking-wide">
                            Hassle-free visa processing with expert guidance and support
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="glass-card rounded-full px-6 py-3">
                                <span className="text-2xl mr-2">⚡</span>
                                <span className="font-semibold">Fast Processing</span>
                            </div>
                            <div className="glass-card rounded-full px-6 py-3">
                                <span className="text-2xl mr-2">✓</span>
                                <span className="font-semibold">90% Approval Rate</span>
                            </div>
                            <div className="glass-card rounded-full px-6 py-3">
                                <span className="text-2xl mr-2">🌍</span>
                                <span className="font-semibold">150+ Countries</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {visaServices.map((service, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className="text-6xl mb-4 text-center">{service.flag}</div>
                                <h3 className="text-2xl font-bold mb-2 text-center text-blue-400">
                                    {service.country}
                                </h3>
                                <div className="text-center mb-4">
                                    <p className="text-slate-400 text-sm italic">Processing Time</p>
                                    <p className="text-white font-bold">{service.processingTime}</p>
                                </div>
                                <div className="text-center mb-6">
                                    <p className="text-slate-400 text-sm">Service Fee</p>
                                </div>
                                <div className="mb-8">
                                    <p className="text-sm font-bold mb-2 text-blue-400 underline decoration-blue-400/30">Requirements:</p>
                                    <ul className="space-y-1">
                                        {service.requirements.map((req, idx) => (
                                            <li key={idx} className="text-sm text-slate-300 flex items-start">
                                                <span className="text-blue-500 mr-2">•</span>
                                                {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link
                                    to="/contact"
                                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 active:scale-95"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="glass-card rounded-3xl p-8 md:p-12 mb-16">
                        <h2 className="text-3xl md:text-4xl font-black mb-12 text-center bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent italic">
                            Why Choose Our Visa Services?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { icon: '👨‍💼', title: 'Expert Guidance', desc: 'Professional consultants with years of experience' },
                                { icon: '📄', title: 'Document Prep', desc: 'Complete assistance with document preparation' },
                                { icon: '🔒', title: 'Secure Process', desc: 'Safe and confidential handling of your information' },
                                { icon: '💬', title: '24/7 Support', desc: 'Round-the-clock customer support and updates' },
                            ].map((item, idx) => (
                                <div key={idx} className="text-center group">
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-2 text-blue-400">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-[2.5rem] p-12 text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-20" />
                        <h2 className="text-4xl font-black mb-4 relative z-10">Need Help with Your Visa?</h2>
                        <p className="text-xl mb-8 opacity-90 relative z-10 font-light">
                            Contact our visa experts for personalized consultation
                        </p>
                        <Link
                            to="/contact"
                            className="relative z-10 inline-block px-10 py-4 bg-white text-blue-700 rounded-full font-black text-lg hover:scale-110 transition-all duration-500 hover:shadow-2xl active:scale-95"
                        >
                            Get Free Consultation
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Visa;
