import React from 'react';
import { Helmet } from 'react-helmet-async';
import Stars from './Stars';
import Footer from './Footer';

// Matches the hard-coded GitHub Pages base in vite.config.ts
const ASSET_BASE = '/globehopperstours2/';

const teamMembers = [
    { name: 'Vyshalini', role: 'Founder', photo: `${ASSET_BASE}team/vyshalini.jpg` },
    { name: 'Vaishanavi', role: 'Co-Founder', photo: `${ASSET_BASE}team/vaishanavi.jpg` },
    { name: 'Pavan Sai Kondilla', role: 'Managing Director', photo: `${ASSET_BASE}team/pavan.jpg` },
    { name: 'Charan Sai Kondilla', role: 'COO', photo: `${ASSET_BASE}team/charan.jpg` },
];

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

                    {/* Team Section - Compacted */}
                    <div className="mb-16 md:mb-20">
                        <div className="text-center mb-10 md:mb-14">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <div className="h-1 w-8 bg-blue-500 rounded-full" />
                                <span className="text-[9px] sm:text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">The People Behind It</span>
                                <div className="h-1 w-8 bg-blue-500 rounded-full" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black tracking-tighter italic">
                                Meet Our <span className="text-blue-500">Team</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {teamMembers.map((member, idx) => (
                                <div key={idx} className="group relative">
                                    <div className="relative rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden bg-black border border-white/10 aspect-[3/4] shadow-2xl group-hover:border-blue-500/40 transition-all duration-500">
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            loading="lazy"
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-transparent" />
                                    </div>
                                    <div className="relative -mt-8 sm:-mt-10 mx-3 sm:mx-4 glass-card rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-xl border border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
                                        <h3 className="text-white font-black text-xs sm:text-base tracking-tight truncate">{member.name}</h3>
                                        <p className="text-blue-400 text-[8px] sm:text-[10px] font-black uppercase tracking-widest mt-0.5">{member.role}</p>
                                    </div>
                                </div>
                            ))}
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

                    {/* Reach Us Section - Compacted */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-20">
                        {[
                            { icon: '📍', title: 'Visit Us', info: ['5-5-8/7, Sangeet Nagar', 'Kukatpally, Hyderabad', 'Telangana 500072'], color: 'text-cyan-400' },
                            { icon: '📞', title: 'Call Us', info: ['+91 9676113883', '+91 7995597570'], color: 'text-indigo-400' },
                        ].map((card, idx) => (
                            <div key={idx} className="glass-card rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group border-l-4 border-l-transparent hover:border-l-blue-500">
                                <div className="flex items-start">
                                    <div className="text-5xl mr-6 group-hover:scale-110 transition-transform duration-500 transform group-hover:rotate-6">{card.icon}</div>
                                    <div>
                                        <h3 className={`text-xl font-black mb-3 ${card.color} tracking-tight uppercase`}>{card.title}</h3>
                                        {card.info.map((line, i) => (
                                            <p key={i} className="text-slate-300 font-light leading-relaxed">{line}</p>
                                        ))}
                                    </div>
                                </div>
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
