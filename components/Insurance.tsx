import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Stars from './Stars';
import Footer from './Footer';

const Insurance: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Travel Insurance - Globalhopperstours</title>
                <meta name="description" content="Travel insurance assistance for medical emergencies, trip cancellations, and more." />
            </Helmet>

            <Navbar />

            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <Stars />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <div className="glass-card rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden text-center border-t border-white/10">
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                        <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-8">
                            Protection & Safety
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-12 bg-gradient-to-b from-white via-white to-blue-500 bg-clip-text text-transparent tracking-tighter italic">
                            Travel Insurance
                        </h1>

                        <div className="space-y-8 text-xl text-slate-300 leading-relaxed font-light italic">
                            <p>
                                Travel insurance is recommended for all international trips. <span className="text-white font-bold">Globehopper Tours</span> provides travel insurance assistance through trusted partners to protect you against medical emergencies, trip cancellations, baggage loss, and travel delays.
                            </p>
                            <p className="text-sm text-slate-400 not-italic">
                                Coverage is subject to policy terms and conditions.
                            </p>
                        </div>

                        <div className="mt-12">
                            <a href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30 uppercase tracking-widest text-sm">
                                Contact Us for Assistance
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Insurance;
