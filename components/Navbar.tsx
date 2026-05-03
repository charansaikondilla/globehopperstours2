import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Holidays', path: '/holidays' },
        { name: 'India', path: '/india' },
        { name: 'Visa', path: '/visa' },
        { name: 'Insurance', path: '/insurance' },
        { name: 'About', path: '/about' },
    ];

    return (
        <>
            <style>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                @keyframes shimmer-fast {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer-fast {
                    animation: shimmer-fast 1s infinite;
                }
                .shimmer-text {
                    background: linear-gradient(90deg, #3b82f6 0%, #fff 50%, #3b82f6 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 5s linear infinite;
                }
                .nav-glass {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(20px) saturate(180%);
                    -webkit-backdrop-filter: blur(20px) saturate(180%);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #3b82f6;
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
            `}</style>

            <nav 
                className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
                    isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-4'
                }`}
            >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex items-center justify-between">
                        {/* Brand Logo */}
                        <Link to="/" className="flex items-center space-x-0 group relative">
                            {/* Reduced Brand Logo - Zero Gap */}
                            <div className="relative w-14 sm:w-20 h-14 sm:h-20 flex items-center justify-center transition-all duration-700 flex-shrink-0">
                                <img src="https://i.ibb.co/HfRc0wJr/globehoppersimage-removebg-preview.png" alt="GlobeHoppersTours" className="w-full h-full object-contain scale-110" />
                            </div>
                            {/* Company Name & Tagline - No Space */}
                            <div className="flex flex-col -space-y-1 sm:-space-y-2 -ml-5 sm:-ml-7">
                                <h1 className="text-lg sm:text-xl font-black tracking-tighter text-white leading-none">
                                    Globe<span className="text-blue-400">HoppersTours</span>
                                </h1>
                                <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-white opacity-100">FROM HOP TO HORIZON</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="text-[10px] font-black tracking-[0.2em] text-white/70 hover:text-white transition-all duration-300 uppercase"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <Link
                                to="/contact"
                                className="px-8 py-2.5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl shadow-blue-500/30 uppercase tracking-[0.15em] text-[10px]"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white"
                                aria-label="Menu"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Backdrop */}
                    {isMenuOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                    )}

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div
                            className="lg:hidden fixed top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto"
                            onClick={(e) => {
                                if (e.target === e.currentTarget) setIsMenuOpen(false);
                            }}
                        >
                            <div className="min-h-screen flex flex-col pt-24 pb-6">
                                <div className="nav-glass rounded-2xl p-6 space-y-3 mx-3 mt-4">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.path}
                                            className="block px-6 py-3 rounded-lg text-base font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                    <Link
                                        to="/contact"
                                        className="block w-full text-center px-6 py-4 bg-white text-blue-800 font-black rounded-lg uppercase tracking-widest text-sm"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div >
            </nav >
            <div className="h-0 pointer-events-none" />
        </>
    );
};

export default Navbar;
