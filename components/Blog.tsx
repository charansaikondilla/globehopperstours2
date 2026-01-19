import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Stars from './Stars';
import Footer from './Footer';

const Blog: React.FC = () => {
    const blogPosts = [
        {
            title: '10 Must-Visit Destinations in 2026',
            excerpt: 'Discover the hottest travel destinations for the new year, from hidden gems to iconic landmarks that should be on every traveler\'s bucket list.',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
            date: 'January 5, 2026',
            category: 'Destinations',
            readTime: '5 min read',
        },
        {
            title: 'Travel Photography Tips for Beginners',
            excerpt: 'Learn how to capture stunning travel photos with these essential tips and techniques. From composition to lighting, master the art of travel photography.',
            image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&q=80',
            date: 'December 28, 2025',
            category: 'Photography',
            readTime: '7 min read',
        },
        {
            title: 'Budget Travel: How to Explore More for Less',
            excerpt: 'Traveling doesn\'t have to break the bank. Discover practical strategies to save money while still enjoying incredible experiences around the world.',
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
            date: 'December 20, 2025',
            category: 'Budget Travel',
            readTime: '6 min read',
        },
        {
            title: 'Solo Travel Safety Guide',
            excerpt: 'Essential safety tips and advice for solo travelers. Learn how to stay safe, meet people, and make the most of your solo adventure.',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
            date: 'December 15, 2025',
            category: 'Travel Tips',
            readTime: '8 min read',
        },
        {
            title: 'Best Street Food Around the World',
            excerpt: 'Embark on a culinary journey through the world\'s best street food scenes. From Bangkok to Mexico City, discover flavors that define cultures.',
            image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
            date: 'December 10, 2025',
            category: 'Food & Culture',
            readTime: '6 min read',
        },
        {
            title: 'Packing Hacks: Travel Light, Travel Smart',
            excerpt: 'Master the art of efficient packing with these game-changing hacks. Learn to pack everything you need in a carry-on and travel stress-free.',
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80',
            date: 'December 5, 2025',
            category: 'Travel Tips',
            readTime: '5 min read',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Travel Blog - Globalhopperstours | Tips, Guides & Inspiration</title>
                <meta name="description" content="Read our travel blog for destination guides, travel tips, photography advice, and cultural insights to inspire your next adventure." />
            </Helmet>

            <Navbar />

            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <Stars />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-700">
                            Travel Blog
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light tracking-wide italic">
                            Stories, tips, and <span className="text-blue-400 font-medium">inspiration</span> for your next adventure
                        </p>
                    </div>

                    {/* Featured Post */}
                    <div className="mb-16 glass-card rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all duration-700 hover:scale-[1.01] shadow-2xl group border-l-4 border-l-blue-500/50">
                        <div className="grid lg:grid-cols-2">
                            <div className="h-64 lg:h-[450px] overflow-hidden">
                                <img
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                            </div>
                            <div className="p-8 md:p-16 flex flex-col justify-center relative">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] -z-10" />
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-5 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-500/20">
                                        Featured
                                    </span>
                                    <span className="text-slate-500 text-sm font-bold">{blogPosts[0].date}</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight tracking-tighter">
                                    {blogPosts[0].title}
                                </h2>
                                <p className="text-slate-400 mb-8 leading-relaxed text-lg font-light">
                                    {blogPosts[0].excerpt}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-sm text-slate-500 font-bold uppercase tracking-wider italic flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {blogPosts[0].readTime}
                                    </span>
                                    <Link
                                        to="/contact"
                                        className="px-10 py-4 bg-white text-blue-700 rounded-2xl font-black hover:scale-110 hover:shadow-2xl transition-all duration-500 active:scale-95"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(1).map((post, index) => (
                            <div
                                key={index}
                                className="glass-card rounded-[2rem] overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/5 group flex flex-col"
                            >
                                <div className="h-56 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400">
                                            {post.category}
                                        </span>
                                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{post.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 text-white line-clamp-2 leading-tight tracking-tight hover:text-blue-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-8 line-clamp-3 font-light leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">{post.date}</span>
                                        <Link
                                            to="/contact"
                                            className="text-white font-black text-sm hover:text-blue-400 transition-all duration-300 flex items-center group/btn"
                                        >
                                            Read More
                                            <svg className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className="mt-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 animate-shimmer opacity-20 pointer-events-none" />
                        <h2 className="text-5xl font-black mb-6 relative z-10 text-white tracking-tighter">Subscribe to Our Newsletter</h2>
                        <p className="text-xl mb-12 opacity-90 relative z-10 font-light text-blue-50 max-w-2xl mx-auto">
                            Get travel tips, destination guides, and <span className="text-white font-bold underline decoration-blue-400">exclusive deals</span> delivered to your inbox
                        </p>
                        <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-8 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all text-lg"
                            />
                            <button className="px-12 py-5 bg-white text-blue-700 rounded-2xl font-black text-lg hover:scale-105 transition-all duration-500 hover:shadow-2xl active:scale-95 shadow-lg">
                                Subscribe Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Blog;
