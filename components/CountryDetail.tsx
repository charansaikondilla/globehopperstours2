import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { destinationsData } from '../data/destinations';

const CountryDetail: React.FC = () => {
    const { country } = useParams<{ country: string }>();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    // Get country data or use default
    const data = destinationsData[country || ''] || destinationsData['default'];
    const countryName = country
        ? country.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        : data.displayName;

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo(0, 0);
    }, [country]);

    const handleBack = () => {
        setIsVisible(false);
        setTimeout(() => navigate('/'), 500);
    };

    const handlePackageClick = (packageId: string) => {
        navigate(`/${country}/${packageId}`);
    };

    // Separate featured and regular packages
    const featuredPackage = data.packages.find(pkg => pkg.featured);
    const regularPackages = data.packages.filter(pkg => !pkg.featured);

    // JSON-LD Structured Data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": data.displayName,
        "description": data.description,
        "image": data.heroImage,
        "touristType": "International Travelers",
        "includesAttraction": data.packages.map(pkg => ({
            "@type": "TouristAttraction",
            "name": pkg.title,
            "description": pkg.description || pkg.features.join(', ')
        }))
    };

    return (
        <>
            <Helmet>
                <title>{data.displayName} Travel Packages & Tours | 3D Earth Explorer</title>
                <meta name="description" content={`${data.description} Explore ${data.packages.length} curated travel packages starting from ${data.packages[0]?.price}. ${data.tagline}`} />
                <meta name="keywords" content={`${data.displayName}, travel packages, ${data.highlights?.join(', ')}, vacation, tours, ${countryName} tourism`} />
                
                {/* Open Graph */}
                <meta property="og:title" content={`Discover ${data.displayName} - ${data.tagline}`} />
                <meta property="og:description" content={data.description} />
                <meta property="og:image" content={data.heroImage} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://yourwebsite.com/${country}`} />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Discover ${data.displayName}`} />
                <meta name="twitter:description" content={data.tagline} />
                <meta name="twitter:image" content={data.heroImage} />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <div
                className={`fixed inset-0 z-50 overflow-y-auto bg-black transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url("${data.heroImage}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

                {/* Content Container */}
                <div className="relative z-10 min-h-screen flex flex-col font-sans text-white">

                    {/* Enhanced Navbar */}
                    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-md bg-black/30 border-b border-white/10">
                        <div className="text-xl md:text-2xl font-bold tracking-wider">
                            Travel<span className="text-orange-500">{countryName}</span>
                        </div>
                        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
                            <button onClick={() => navigate('/')} className="hover:text-orange-400 transition">Home</button>
                            <a href="#packages" className="hover:text-orange-400 transition">Packages</a>
                            <a href="#featured" className="hover:text-orange-400 transition">Featured</a>
                            <button onClick={() => navigate('/')} className="hover:text-orange-400 transition">Destinations</button>
                        </div>
                        <button className="px-4 md:px-6 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-lg font-semibold transition shadow-xl text-sm md:text-base transform hover:scale-105">
                            Contact Us
                        </button>
                    </nav>

                    {/* Hero Section */}
                    <div className={`flex flex-col items-center justify-center mt-16 md:mt-24 text-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/50 mb-6">
                            <span className="text-orange-400 font-semibold">{data.displayName}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
                            Discover the Beauty of<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">{countryName}</span>
                        </h1>
                        <p className="text-xl md:text-3xl font-light text-gray-200 tracking-wide mb-4 max-w-3xl">
                            {data.tagline}
                        </p>
                        {data.description && (
                            <p className="text-md md:text-lg text-gray-300 max-w-2xl mb-8">
                                {data.description}
                            </p>
                        )}
                        
                        {/* Highlights */}
                        {data.highlights && data.highlights.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {data.highlights.map((highlight, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:bg-white/20 transition">
                                        ✨ {highlight}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Travel Info Bar */}
                    {(data.bestTime || data.currency || data.language) && (
                        <div className="max-w-6xl mx-auto w-full px-4 mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {data.bestTime && (
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center">
                                        <div className="text-orange-400 text-2xl mb-2">🗓️</div>
                                        <div className="text-sm text-gray-400">Best Time to Visit</div>
                                        <div className="font-semibold">{data.bestTime}</div>
                                    </div>
                                )}
                                {data.currency && (
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center">
                                        <div className="text-orange-400 text-2xl mb-2">💱</div>
                                        <div className="text-sm text-gray-400">Currency</div>
                                        <div className="font-semibold">{data.currency}</div>
                                    </div>
                                )}
                                {data.language && (
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-center">
                                        <div className="text-orange-400 text-2xl mb-2">🗣️</div>
                                        <div className="text-sm text-gray-400">Language</div>
                                        <div className="font-semibold">{data.language}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Package Cards Section */}
                    <div id="packages" className="flex-grow flex items-center justify-center pb-16 px-4">
                        <div className="max-w-7xl w-full">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                                Available <span className="text-orange-400">Travel Packages</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {regularPackages.map((pkg, index) => (
                                    <div
                                        key={pkg.id || index}
                                        onClick={() => handlePackageClick(pkg.id)}
                                        className={`bg-black/40 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                                        style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                                    >
                                        <div className="relative h-52 overflow-hidden">
                                            <img
                                                src={pkg.image}
                                                alt={pkg.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                            {pkg.duration && (
                                                <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 rounded-full text-xs font-bold">
                                                    {pkg.duration}
                                                </div>
                                            )}
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                                                <p className="text-sm text-gray-300 flex items-center">
                                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                    {pkg.location}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {pkg.features.slice(0, 3).map((feature, idx) => (
                                                    <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                                                        {feature}
                                                    </span>
                                                ))}
                                                {pkg.features.length > 3 && (
                                                    <span className="text-xs bg-orange-500/20 px-2 py-1 rounded-full text-orange-300">
                                                        +{pkg.features.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between mt-4">
                                                <div>
                                                    <span className="text-xs text-gray-400 block">Starting from</span>
                                                    <span className="text-2xl font-bold text-orange-400">{pkg.price}</span>
                                                </div>
                                                <button className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-lg text-sm font-semibold transition transform group-hover:scale-110 shadow-lg">
                                                    View Details →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Featured Package */}
                    {featuredPackage && (
                        <div id="featured" className="flex items-center justify-center px-4 pb-20">
                            <div className="max-w-6xl w-full">
                                <div className="text-center mb-8">
                                    <span className="inline-block px-4 py-2 bg-yellow-500/20 backdrop-blur-sm rounded-full border border-yellow-500/50 mb-4">
                                        <span className="text-yellow-400 font-semibold">⭐ Featured Package</span>
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold">
                                        Our <span className="text-yellow-400">Most Popular</span> Experience
                                    </h2>
                                </div>
                                <div
                                    onClick={() => handlePackageClick(featuredPackage.id)}
                                    className={`relative bg-black/50 backdrop-blur-lg border-2 border-yellow-500/50 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 shadow-2xl cursor-pointer group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                                    style={{ transitionDelay: `${(regularPackages.length + 1) * 150}ms` }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                        <div className="relative h-80 md:h-auto overflow-hidden order-2 md:order-1">
                                            <img
                                                src={featuredPackage.image}
                                                alt={featuredPackage.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80 md:block hidden" />
                                        </div>
                                        <div className="p-8 md:p-10 flex flex-col justify-center order-1 md:order-2 bg-gradient-to-br from-black/70 to-black/50">
                                            <div className="mb-4">
                                                <span className="inline-block px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold mb-4">
                                                    ⭐ BEST SELLER
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-yellow-400 transition">{featuredPackage.title}</h3>
                                            <p className="text-lg text-orange-400 mb-6 flex items-center">
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                                {featuredPackage.location}
                                            </p>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                {featuredPackage.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center text-gray-200">
                                                        <svg className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/20">
                                                <div>
                                                    <span className="text-sm text-gray-400 block">Starting from</span>
                                                    <span className="text-4xl md:text-5xl font-bold text-yellow-400">{featuredPackage.price}</span>
                                                    {featuredPackage.duration && (
                                                        <span className="text-sm text-gray-300 block mt-1">{featuredPackage.duration}</span>
                                                    )}
                                                </div>
                                                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 rounded-xl font-bold shadow-2xl transition transform hover:scale-110 text-black">
                                                    Explore Package →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-md py-16 px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to Start Your {countryName} Adventure?
                            </h2>
                            <p className="text-lg text-white/90 mb-8">
                                Join thousands of travelers who have created unforgettable memories
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl">
                                    Get Free Consultation
                                </button>
                                <button onClick={() => navigate('/')} className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg border border-white/30 hover:bg-white/30 transition transform hover:scale-105">
                                    Explore More Destinations
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Back Button */}
                    <button
                        onClick={handleBack}
                        className="fixed top-20 left-6 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white transition backdrop-blur-md border border-white/20 z-50 group"
                        aria-label="Back to globe"
                    >
                        <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>

                </div>
            </div>
        </>
    );
};

export default CountryDetail;
