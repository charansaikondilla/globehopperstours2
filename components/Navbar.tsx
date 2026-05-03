import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
=======
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6

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

<<<<<<< HEAD
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

=======
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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

<<<<<<< HEAD
            <nav 
                className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
                    isScrolled || isMenuOpen
                        ? 'bg-black backdrop-blur-2xl border-b border-white/10 py-1 shadow-2xl' 
                        : 'bg-black lg:bg-transparent py-2 sm:py-3'
                }`}
            >
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="flex items-center justify-between">
                        {/* Brand Logo - Bigger & Clean */}
                        <Link to="/" className="flex items-center space-x-0 group relative">
                            <div className="relative w-16 sm:w-24 h-16 sm:h-24 flex items-center justify-center transition-all duration-700 flex-shrink-0">
                                <img src="https://i.ibb.co/HfRc0wJr/globehoppersimage-removebg-preview.png" alt="GlobeHoppersTours" className="w-full h-full object-contain scale-110" />
                            </div>
                            <div className="flex flex-col -space-y-1 sm:-space-y-2 -ml-6 sm:-ml-8">
                                <h1 className="text-lg sm:text-2xl font-black tracking-tighter text-white leading-none">
                                    Globe<span className="text-blue-400">HoppersTours</span>
                                </h1>
                                <span className="text-[8px] sm:text-[12px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-white opacity-100">FROM HOP TO HORIZON</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation - Premium Typography */}
                        <div className="hidden lg:flex items-center space-x-10">
=======
            <nav
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4 sm:px-12 py-8 ${isScrolled ? 'sm:py-4 translate-y-2' : ''
                    }`}
            >
                <div
                    className={`max-w-7xl mx-auto transition-all duration-700 relative rounded-[2.5rem] ${isScrolled ? 'nav-glass px-10 py-3 shadow-[0_20px_80px_rgba(0,0,0,0.4)] ring-1 ring-white/10' : 'bg-transparent px-2'
                        }`}
                >
                    <div className="flex items-center justify-between">
                        {/* Brand Logo */}
                        <Link to="/" className="flex items-center space-x-3 group relative">
                            <div className="relative w-12 h-12 bg-blue-600 rounded-[1.25rem] flex items-center justify-center transform group-hover:rotate-[15deg] transition-all duration-700 shadow-2xl shadow-blue-500/40 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex flex-col -space-y-1">
                                <h1 className="text-2xl font-black tracking-tighter text-white leading-none">
                                    Globe<span className="text-blue-500">HoppersTours</span>
                                </h1>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 opacity-60 ml-0.5">from hop to horizon</span>
                            </div>
                            {/* Logo Glow */}
                            <div className="absolute -inset-4 bg-blue-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-6">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
<<<<<<< HEAD
                                    className={`text-[9px] font-black tracking-[0.3em] uppercase transition-all duration-500 hover:text-blue-400 ${
                                        location.pathname === item.path ? 'text-blue-400' : 'text-white/60'
                                    }`}
=======
                                    className="nav-link relative text-[11px] font-black text-slate-400 hover:text-white transition-all duration-300 uppercase tracking-[0.25em]"
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <Link
                                to="/contact"
<<<<<<< HEAD
                                className="px-10 py-3 bg-blue-600 text-white font-black rounded-full hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl shadow-blue-500/40 uppercase tracking-[0.2em] text-[10px] border border-blue-400/20"
=======
                                className="group/btn relative px-10 py-4 bg-blue-600 text-white font-black rounded-[1.5rem] hover:scale-105 active:scale-95 transition-all duration-500 overflow-hidden shadow-2xl shadow-blue-500/40 uppercase tracking-[0.15em] text-[11px]"
                            >
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                {/* Shimmer on button */}
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover/btn:animate-shimmer-fast" />
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

                    {/* Mobile Menu */}
                    <div
                        className={`lg:hidden absolute top-full left-0 right-0 mt-4 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
                            }`}
                    >
                        <div className="nav-glass rounded-[2rem] p-6 space-y-4 mx-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="block px-6 py-4 rounded-xl text-lg font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="block w-full text-center px-6 py-5 bg-white text-blue-800 font-black rounded-xl uppercase tracking-widest"
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                            >
                                Get Started
                            </Link>
                        </div>
<<<<<<< HEAD

                        {/* Mobile Toggle - Improved Design */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-90"
                                aria-label="Menu"
                            >
                                <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                                    <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                    <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-500 ${isMenuOpen ? '-translate-x-full opacity-0' : ''}`} />
                                    <span className={`w-full h-0.5 bg-white rounded-full transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div >
            </nav >

            {/* Mobile Menu - Premium Full-Screen Overlay (Moved to Root for Maximum Coverage) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] lg:hidden bg-black flex flex-col"
                    >
                        {/* Solid Background Layer to Block Everything */}
                        <div className="absolute inset-0 bg-black" />

                        <div className="relative z-10 flex flex-col h-full p-8">
                            <div className="flex justify-between items-center mb-16 pt-2">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl p-1 border border-white/10">
                                        <img src="https://i.ibb.co/HfRc0wJr/globehoppersimage-removebg-preview.png" alt="Logo" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="ml-4 flex flex-col -space-y-1">
                                        <span className="text-xl font-black text-white uppercase tracking-tighter">Menu</span>
                                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Navigation</span>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white active:scale-90 transition-all"
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-col space-y-6">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        key={item.name}
                                    >
                                        <Link
                                            to={item.path}
                                            className={`text-4xl font-black transition-colors tracking-tighter ${
                                                location.pathname === item.path ? 'text-blue-500' : 'text-white hover:text-blue-400'
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="pt-6"
                                >
                                    <Link
                                        to="/contact"
                                        className="block w-full py-5 bg-blue-600 text-white text-center font-black rounded-[1.5rem] text-xl uppercase tracking-widest shadow-[0_20px_50px_rgba(37,99,235,0.4)] border border-blue-400/30 active:scale-[0.98] transition-all"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get Started
                                    </Link>
                                </motion.div>
                            </div>

                            <div className="mt-auto pb-12 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
                                <div className="flex gap-6">
                                    <span className="w-8 h-px bg-white/10" />
                                    <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">GlobeHoppersTours</span>
                                    <span className="w-8 h-px bg-white/10" />
                                </div>
                                <p className="text-slate-500 text-[10px] font-bold text-center">
                                    © {new Date().getFullYear()} GlobeHoppersTours. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
=======
                    </div>
                </div >
            </nav >
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
            <div className="h-0 pointer-events-none" />
        </>
    );
};

export default Navbar;
