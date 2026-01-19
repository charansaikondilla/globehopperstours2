import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Stars from './Stars';
import Footer from './Footer';

const AboutUs: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Globalhopperstours | Your Premium Travel Partner</title>
                <meta name="description" content="Learn about Globalhopperstours - your trusted partner for premium travel experiences worldwide. Discover our story, mission, and dedicated team." />
            </Helmet>

            <Navbar />

            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <Stars />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Hero Section */}
                    <div className="text-center mb-24">
                        <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-8 animate-shimmer">
                            Excellence in Motion
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-b from-white via-white to-blue-500 bg-clip-text text-transparent tracking-tighter leading-[0.9] italic">
                            Redefining <br className="hidden md:block" /> <span className="text-blue-500">Global Hoppers</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light tracking-wide italic leading-relaxed">
                            Crafting <span className="text-white font-bold">transcendental journeys</span> for the discerning traveler since our inception.
                        </p>
                    </div>

                    {/* Story Section */}
                    <div className="mb-24 relative">
                        <div className="absolute -left-12 -top-12 text-[20rem] font-black opacity-[0.03] text-blue-500 select-none pointer-events-none">STORY</div>
                        <div className="glass-card rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group border-t border-white/10">
                            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-600/10 transition-all duration-700" />
                            <h2 className="text-4xl font-black mb-10 text-white tracking-tighter italic">
                                Our Legacy
                            </h2>
                            <div className="space-y-8 max-w-4xl relative z-10">
                                <p className="text-xl text-slate-300 leading-relaxed font-light italic">
                                    Founded with a passion for architectural exploration and cultural mastery, <span className="text-white font-bold">Global Hoppers</span> has been architecting extraordinary narratives for the world's most curious souls. We believe that true travel is an art form—a delicate balance of <span className="text-blue-400">masterful logistics</span> and spontaneous wonder.
                                </p>
                                <p className="text-xl text-slate-300 leading-relaxed font-light italic">
                                    Our curators traverse every corner of the earth to verify every sanctuary, ensuring that your path is marked by nothing but excellence and authentic connection.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mission & Values */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            { icon: '🎯', title: 'Our Mission', desc: 'To make world-class travel accessible and memorable for everyone, providing personalized service and expert guidance every step of the way.', color: 'text-blue-400' },
                            { icon: '💎', title: 'Our Values', desc: "Excellence, authenticity, and customer satisfaction drive everything we do. We're committed to sustainable and responsible tourism.", color: 'text-indigo-400' },
                            { icon: '🌏', title: 'Our Vision', desc: "To become the world's most trusted travel partner, inspiring millions to explore, discover, and connect with diverse cultures.", color: 'text-cyan-400' }
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card rounded-3xl p-10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-blue-500/10 border-t-2 border-t-white/10">
                                <div className="text-5xl mb-6">{item.icon}</div>
                                <h3 className={`text-2xl font-black mb-4 ${item.color} tracking-tight uppercase`}>{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Team Section */}
                    <div className="mb-20">
                        <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">
                            Our Expert Leadership
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { name: 'Sarah Johnson', role: 'Founder & CEO', emoji: '👩‍💼' },
                                { name: 'Michael Chen', role: 'Head of Operations', emoji: '👨‍💻' },
                                { name: 'Priya Sharma', role: 'Travel Curator', emoji: '👩‍✈️' },
                                { name: 'David Martinez', role: 'Customer Experience', emoji: '👨‍🎓' },
                            ].map((member, index) => (
                                <div
                                    key={index}
                                    className="glass-card rounded-[2rem] p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105 border-b-4 border-b-blue-600/30"
                                >
                                    <div className="text-7xl mb-6 drop-shadow-xl">{member.emoji}</div>
                                    <h3 className="text-2xl font-black mb-2 text-white">{member.name}</h3>
                                    <p className="text-blue-400 font-bold uppercase text-xs tracking-[0.2em]">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: '50K+', label: 'Happy Travelers' },
                            { number: '120+', label: 'Destinations' },
                            { number: '15+', label: 'Years Experience' },
                            { number: '98%', label: 'Satisfaction Rate' },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-[2rem] p-10 text-center hover:bg-white/10 transition-all duration-700 group border-t-2 border-t-white/5"
                            >
                                <div className="text-4xl md:text-5xl font-black mb-3 bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                                    {stat.number}
                                </div>
                                <p className="text-slate-500 text-sm md:text-base font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-20">
                    <h2 className="text-4xl font-black text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">
                        Travel Insurance – FAQ
                    </h2>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-3">Q. Do you provide travel insurance?</h3>
                            <p className="text-slate-400 leading-relaxed">
                                <strong className="text-blue-400">A.</strong> Yes, Globehopper Tours offers travel insurance assistance through trusted insurance partners.
                            </p>
                        </div>
                        <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-3">Q. Is travel insurance mandatory?</h3>
                            <p className="text-slate-400 leading-relaxed">
                                <strong className="text-blue-400">A.</strong> No, it is optional but strongly recommended for international trips.
                            </p>
                        </div>
                        <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-3">Q. What does travel insurance cover?</h3>
                            <p className="text-slate-400 leading-relaxed">
                                <strong className="text-blue-400">A.</strong> It covers medical emergencies, trip cancellation, baggage loss, flight delays, and more depending on the policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
};

export default AboutUs;
