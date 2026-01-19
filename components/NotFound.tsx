import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | 3D Earth Travel Explorer</title>
                <meta name="description" content="The page you're looking for doesn't exist. Return to explore amazing travel destinations around the world." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />

                <div className="relative z-10 text-center px-6 max-w-2xl">
                    <div className="inline-block px-6 py-2 bg-blue-500/10 backdrop-blur-md rounded-full border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.3em] mb-8 animate-shimmer">
                        System Interruption
                    </div>

                    {/* 404 Text */}
                    <div className="mb-12 relative">
                        <h1 className="text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-200 to-blue-600 opacity-20 absolute inset-0 blur-2xl select-none">
                            404
                        </h1>
                        <h1 className="text-[12rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-500 drop-shadow-2xl relative animate-pulse">
                            404
                        </h1>
                    </div>

                    {/* Earth Icon container */}
                    <div className="mb-12 flex justify-center">
                        <div className="w-40 h-40 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl animate-bounce group transition-all duration-500 hover:scale-110">
                            <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                            <svg className="w-24 h-24 text-blue-400 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Message */}
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight italic">
                        Lost in the <span className="text-blue-400">Atmosphere?</span>
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 font-light italic leading-relaxed max-w-lg mx-auto">
                        The coordination you are seeking does not exist in our flight path.
                        Let's navigate you back to the <span className="text-white font-bold">prime destination.</span>
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => navigate('/')}
                            className="px-10 py-5 bg-white text-blue-800 font-black rounded-3xl hover:scale-110 active:scale-95 transition-all duration-500 shadow-2xl shadow-blue-500/10 uppercase tracking-widest text-sm"
                        >
                            Return to Base
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="px-10 py-5 bg-white/5 backdrop-blur-md text-white font-black rounded-3xl border border-white/10 hover:bg-white/10 hover:scale-110 active:scale-95 transition-all duration-500 uppercase tracking-widest text-sm"
                        >
                            ← Go Back
                        </button>
                    </div>

                    {/* Popular Destinations */}
                    <div className="mt-20">
                        <p className="text-slate-500 font-black uppercase text-[10px] tracking-[0.3em] mb-6">Redirect Protocols Active:</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {['thailand', 'japan', 'vietnam', 'philippines', 'india', 'nepal'].map(country => (
                                <button
                                    key={country}
                                    onClick={() => navigate(`/${country}`)}
                                    className="px-6 py-2.5 bg-white/5 backdrop-blur-sm text-slate-300 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-blue-500/50 hover:text-white transition-all duration-500 font-bold tracking-tight text-sm capitalize"
                                >
                                    {country}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;
