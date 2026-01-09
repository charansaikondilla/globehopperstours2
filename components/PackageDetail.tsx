import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { destinationsData, TravelPackage, CountryData } from '../data/destinations';

const PackageDetail: React.FC = () => {
    const { country, packageId } = useParams<{ country: string; packageId: string }>();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    // Get country data
    const countryData: CountryData | undefined = destinationsData[country || ''];
    const packageData: TravelPackage | undefined = countryData?.packages.find(pkg => pkg.id === packageId);

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, []);

    // Redirect if package not found
    if (!countryData || !packageData) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Package Not Found</h2>
                    <button
                        onClick={() => navigate(`/${country || ''}`)}
                        className="px-6 py-3 bg-orange-600 rounded-lg hover:bg-orange-700 transition"
                    >
                        Back to {countryData?.displayName || 'Destinations'}
                    </button>
                </div>
            </div>
        );
    }

    const images = [packageData.image, countryData.heroImage];

    // JSON-LD Structured Data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": packageData.title,
        "description": packageData.description || `Experience ${packageData.title} in ${countryData.displayName}`,
        "image": packageData.image,
        "touristType": "International Travelers",
        "offers": {
            "@type": "Offer",
            "price": packageData.price.replace(/[^0-9]/g, ''),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "itinerary": packageData.itinerary?.map(day => ({
            "@type": "Action",
            "name": day.title,
            "description": day.activities.join(', ')
        }))
    };

    return (
        <>
            <Helmet>
                <title>{packageData.title} - {countryData.displayName} Travel Package | 3D Earth Explorer</title>
                <meta name="description" content={packageData.description || `Book ${packageData.title} in ${countryData.displayName}. ${packageData.duration}. Starting from ${packageData.price}. ${packageData.features.join(', ')}.`} />
                <meta name="keywords" content={`${countryData.displayName}, ${packageData.title}, travel package, vacation, ${packageData.location}, ${packageData.features.join(', ')}`} />
                
                {/* Open Graph */}
                <meta property="og:title" content={`${packageData.title} - ${countryData.displayName}`} />
                <meta property="og:description" content={packageData.description || `Experience ${packageData.title} in ${countryData.displayName}`} />
                <meta property="og:image" content={packageData.image} />
                <meta property="og:type" content="website" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${packageData.title} - ${countryData.displayName}`} />
                <meta name="twitter:description" content={packageData.description || `Experience ${packageData.title}`} />
                <meta name="twitter:image" content={packageData.image} />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div className="fixed inset-0 z-50 overflow-y-auto bg-black">
                {/* Background Pattern */}
                <div className="fixed inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }} />
                </div>

                {/* Content */}
                <div className={`relative z-10 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    
                    {/* Navigation Bar */}
                    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/80 border-b border-white/10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                            <button
                                onClick={() => navigate(`/${country}`)}
                                className="flex items-center space-x-2 text-white hover:text-orange-400 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span className="font-medium">Back to {countryData.displayName}</span>
                            </button>
                            <div className="text-orange-500 font-bold text-xl">
                                Travel<span className="text-white">Explorer</span>
                            </div>
                        </div>
                    </nav>

                    {/* Hero Section with Image Gallery */}
                    <div className="relative h-[60vh] overflow-hidden">
                        <img
                            src={images[selectedImage]}
                            alt={packageData.title}
                            className="w-full h-full object-cover transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        
                        {/* Image Selector */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`w-3 h-3 rounded-full transition-all ${selectedImage === idx ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/80'}`}
                                    aria-label={`View image ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="flex items-center space-x-3 mb-3">
                                    <span className="px-3 py-1 bg-orange-600 rounded-full text-sm font-semibold text-white">
                                        {countryData.displayName}
                                    </span>
                                    {packageData.featured && (
                                        <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold">
                                            ⭐ Featured
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{packageData.title}</h1>
                                <p className="text-xl text-orange-300 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {packageData.location}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            
                            {/* Left Column - Details */}
                            <div className="lg:col-span-2 space-y-8">
                                
                                {/* Overview */}
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Overview
                                    </h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {packageData.description || `Experience the best of ${countryData.displayName} with our ${packageData.title} package. Immerse yourself in the beauty and culture of ${packageData.location}.`}
                                    </p>
                                </div>

                                {/* Highlights */}
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Package Highlights
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {packageData.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5">
                                                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-200">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Itinerary */}
                                {packageData.itinerary && packageData.itinerary.length > 0 && (
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
                                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                            <svg className="w-6 h-6 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                            Detailed Itinerary
                                        </h2>
                                        <div className="space-y-4">
                                            {packageData.itinerary.map((day, idx) => (
                                                <div key={idx} className="relative pl-8 pb-4 border-l-2 border-orange-500/30 last:border-0">
                                                    <div className="absolute left-0 top-0 w-8 h-8 -ml-4 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                                                        {day.day}
                                                    </div>
                                                    <h3 className="text-lg font-bold text-white mb-2">{day.title}</h3>
                                                    <ul className="space-y-1">
                                                        {day.activities.map((activity, actIdx) => (
                                                            <li key={actIdx} className="text-gray-300 flex items-start">
                                                                <span className="text-orange-400 mr-2">•</span>
                                                                <span>{activity}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Inclusions & Exclusions */}
                                {(packageData.included || packageData.excluded) && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Included */}
                                        {packageData.included && (
                                            <div className="bg-green-500/10 backdrop-blur-md border border-green-500/20 rounded-xl p-6">
                                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    What's Included
                                                </h3>
                                                <ul className="space-y-2">
                                                    {packageData.included.map((item, idx) => (
                                                        <li key={idx} className="text-gray-200 flex items-start text-sm">
                                                            <span className="text-green-400 mr-2">✓</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Excluded */}
                                        {packageData.excluded && (
                                            <div className="bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded-xl p-6">
                                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    What's Not Included
                                                </h3>
                                                <ul className="space-y-2">
                                                    {packageData.excluded.map((item, idx) => (
                                                        <li key={idx} className="text-gray-200 flex items-start text-sm">
                                                            <span className="text-red-400 mr-2">✗</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Right Column - Booking Card */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 space-y-6">
                                    
                                    {/* Price */}
                                    <div className="text-center border-b border-white/10 pb-6">
                                        <p className="text-gray-400 text-sm mb-1">Starting from</p>
                                        <p className="text-5xl font-bold text-white mb-1">{packageData.price}</p>
                                        {packageData.duration && (
                                            <p className="text-orange-400 text-sm font-medium">{packageData.duration}</p>
                                        )}
                                    </div>

                                    {/* Quick Info */}
                                    <div className="space-y-3">
                                        {packageData.duration && (
                                            <div className="flex items-center text-gray-300">
                                                <svg className="w-5 h-5 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <span className="text-sm">{packageData.duration}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            </svg>
                                            <span className="text-sm">{packageData.location}</span>
                                        </div>
                                        <div className="flex items-center text-gray-300">
                                            <svg className="w-5 h-5 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                            </svg>
                                            <span className="text-sm">{countryData.displayName}</span>
                                        </div>
                                    </div>

                                    {/* Booking Form */}
                                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Booking functionality coming soon!'); }}>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Select Date</label>
                                            <input
                                                type="date"
                                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-2">Number of Travelers</label>
                                            <input
                                                type="number"
                                                min="1"
                                                defaultValue="2"
                                                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-500 transition"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                                        >
                                            Book Now
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition"
                                        >
                                            Add to Wishlist ♡
                                        </button>
                                    </form>

                                    {/* Contact */}
                                    <div className="pt-4 border-t border-white/10 text-center">
                                        <p className="text-sm text-gray-400 mb-2">Need help?</p>
                                        <a href="#" className="text-orange-400 hover:text-orange-300 font-medium text-sm">
                                            Contact Travel Advisor →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 py-12">
                        <div className="max-w-7xl mx-auto px-4 text-center">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Ready to Explore {countryData.displayName}?
                            </h2>
                            <p className="text-white/90 mb-6">
                                Join thousands of travelers who have experienced the adventure of a lifetime
                            </p>
                            <button
                                onClick={() => navigate(`/${country}`)}
                                className="px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition"
                            >
                                View More Packages
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PackageDetail;
