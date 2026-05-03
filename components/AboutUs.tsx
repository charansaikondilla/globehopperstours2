import React from 'react';
import { Helmet } from 'react-helmet-async';
import Stars from './Stars';
import Footer from './Footer';

const AboutUs: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>About Us - GlobeHoppersTours | Your Premium Travel Partner</title>
                <meta name="description" content="Learn about GlobeHoppersTours - your trusted partner for premium travel experiences worldwide. Discover our story, mission, and dedicated team." />
            </Helmet>

            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <Stars />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    {/* Hero Section - Compacted */}
                    <div className="text-center mb-16 md:mb-20">
                        <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[9px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6 animate-shimmer">
                            Excellence in Motion
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-b from-white via-white to-blue-500 bg-clip-text text-transparent tracking-tighter leading-tight italic font-serif">
                            Redefining <br className="hidden md:block" /> <span className="text-blue-500 font-sans not-italic">GlobeHoppersTours</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto font-light tracking-wide italic leading-relaxed">
                            Crafting <span className="text-white font-bold">transcendental journeys</span> for the discerning traveler with masterful precision.
                        </p>
                    </div>

                    {/* Story Section - Compacted */}
                    <div className="mb-16 md:mb-20 relative">
                        <div className="absolute -left-8 -top-8 text-[12rem] font-black opacity-[0.02] text-blue-500 select-none pointer-events-none">STORY</div>
                        <div className="glass-card rounded-[2rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group border-t border-white/10">
                            <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-600/10 transition-all duration-700" />
                            <h2 className="text-2xl font-black mb-6 text-white tracking-tighter italic">
                                Our Legacy
                            </h2>
                            <div className="space-y-6 max-w-3xl relative z-10">
                                <p className="text-base text-slate-300 leading-relaxed font-light italic">
                                    Founded with a passion for architectural exploration and cultural mastery, <span className="text-white font-bold">GlobeHoppersTours</span> has been architecting extraordinary narratives for the world's most curious souls. We believe that true travel is an art form—a delicate balance of <span className="text-blue-400">masterful logistics</span> and spontaneous wonder.
                                </p>
                                <p className="text-base text-slate-300 leading-relaxed font-light italic">
                                    Our curators traverse every corner of the earth to verify every sanctuary, ensuring that your path is marked by nothing but excellence and authentic connection.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Values - Compacted */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
                        {[
                            { icon: '🎯', title: 'Mission', desc: 'To make world-class travel accessible and memorable, providing personalized service at every step.', color: 'text-blue-400' },
                            { icon: '💎', title: 'Values', desc: "Excellence and authenticity drive us. Committed to sustainable and responsible tourism.", color: 'text-indigo-400' },
                            { icon: '🌏', title: 'Vision', desc: "To be the most trusted travel partner, inspiring millions to explore and connect.", color: 'text-cyan-400' }
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.03] border-t border-white/10">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className={`text-lg font-black mb-3 ${item.color} tracking-tight uppercase`}>{item.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section - Compacted */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 md:mb-20">
                        {[
                            { number: '50K+', label: 'Travelers' },
                            { number: '120+', label: 'Destinations' },
                            { number: '15+', label: 'Years' },
                            { number: '98%', label: 'Success' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-500 border-t border-white/5"
                            >
                                <div className="text-2xl md:text-3xl font-black mb-1 bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* FAQ Section - Compacted */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-black text-center mb-10 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">
                            Insurance – FAQ
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                            <div className="glass-card rounded-xl p-6 hover:bg-white/5 transition-all duration-300">
                                <h3 className="text-sm font-black text-white mb-2">Q. Do you provide insurance?</h3>
                                <p className="text-[11px] text-slate-400 leading-relaxed font-medium italic">
                                    <strong className="text-blue-400 not-italic mr-1">A.</strong> Yes, we offer assistance through elite partners.
                                </p>
                            </div>
                            <div className="glass-card rounded-xl p-6 hover:bg-white/5 transition-all duration-300">
                                <h3 className="text-sm font-black text-white mb-2">Q. Is it mandatory?</h3>
                                <p className="text-[11px] text-slate-400 leading-relaxed font-medium italic">
                                    <strong className="text-blue-400 not-italic mr-1">A.</strong> Optional but highly recommended for protection.
                                </p>
                            </div>
                            <div className="glass-card rounded-xl p-6 md:col-span-2 hover:bg-white/5 transition-all duration-300">
                                <h3 className="text-sm font-black text-white mb-2">Q. What does it cover?</h3>
                                <p className="text-[11px] text-slate-400 leading-relaxed font-medium italic">
                                    <strong className="text-blue-400 not-italic mr-1">A.</strong> Covers medical, cancellations, baggage, and delays.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default AboutUs;
