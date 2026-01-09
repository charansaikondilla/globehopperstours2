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
            
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
                <div className="text-center px-6 max-w-2xl">
                    {/* 404 Text */}
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 animate-pulse">
                            404
                        </h1>
                    </div>

                    {/* Earth Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl animate-bounce">
                            <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Message */}
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Oops! Lost in Space
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        The destination you're looking for doesn't exist on our planet. 
                        Let's get you back to explore real destinations!
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/')}
                            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                        >
                            🌍 Return to Earth
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transform transition-all duration-300"
                        >
                            ← Go Back
                        </button>
                    </div>

                    {/* Popular Destinations */}
                    <div className="mt-12 text-left">
                        <p className="text-gray-400 mb-4 text-center">Popular Destinations:</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['thailand', 'japan', 'vietnam', 'philippines', 'india', 'nepal'].map(country => (
                                <button
                                    key={country}
                                    onClick={() => navigate(`/${country}`)}
                                    className="px-4 py-2 bg-white/5 backdrop-blur-sm text-white rounded-full border border-white/10 hover:bg-white/10 hover:border-orange-500 transition-all duration-300 capitalize"
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
