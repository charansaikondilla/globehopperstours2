import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useDestinations } from '../context/DestinationsContext';
import Navbar from './Navbar';

const CountryDetail: React.FC = () => {
    const { country } = useParams<{ country: string }>();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const { destinations } = useDestinations(); // Use Hook

    // Get country data or use default
    // Access from context 'destinations' instead of static 'destinationsData'
    const data = destinations[country || ''] || destinations['default'];
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

<<<<<<< HEAD
            <img 
                src={data.heroImage} 
                className="hidden" 
                aria-hidden="true" 
                fetchPriority="high" 
                loading="eager" 
                alt=""
            />

=======
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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

                    {/* Premium Navbar - Handled globally in App.tsx */}
                    <div className="h-24 sm:h-28" />

<<<<<<< HEAD
                    {/* Hero Section - Compacted */}
                    <div className={`flex flex-col items-center justify-center mt-12 md:mt-16 text-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-block px-4 py-1.5 bg-blue-500/10 backdrop-blur-md rounded-full border border-blue-500/30 mb-6 animate-shimmer">
                            <span className="text-blue-400 font-black uppercase tracking-[0.2em] text-[10px]">{data.displayName}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-tight tracking-tighter">
                            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">{countryName}</span>
                        </h1>
                        <p className="text-lg md:text-xl font-light text-slate-200 tracking-wide mb-5 max-w-2xl italic">
                            {data.tagline}
                        </p>
                        {data.description && (
                            <p className="text-sm md:text-base text-slate-400 max-w-xl mb-10 font-light leading-relaxed">
=======
                    {/* Hero Section */}
                    <div className={`flex flex-col items-center justify-center mt-12 md:mt-20 text-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="inline-block px-6 py-2 bg-blue-500/10 backdrop-blur-md rounded-full border border-blue-500/30 mb-8 animate-shimmer">
                            <span className="text-blue-400 font-black uppercase tracking-[0.2em] text-xs">{data.displayName}</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-tight tracking-tighter">
                            Discover the Beauty of<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">{countryName}</span>
                        </h1>
                        <p className="text-xl md:text-3xl font-light text-slate-200 tracking-wide mb-6 max-w-3xl italic">
                            {data.tagline}
                        </p>
                        {data.description && (
                            <p className="text-md md:text-xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                {data.description}
                            </p>
                        )}

<<<<<<< HEAD
                        {/* Highlights - Tighter */}
                        {data.highlights && data.highlights.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {data.highlights.map((highlight, idx) => (
                                    <span key={idx} className="px-5 py-2.5 glass-card rounded-full text-xs font-bold border border-white/10 hover:bg-white hover:text-blue-600 transition-all duration-500 cursor-default">
=======
                        {/* Highlights */}
                        {data.highlights && data.highlights.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-4 mb-16">
                                {data.highlights.map((highlight, idx) => (
                                    <span key={idx} className="px-6 py-3 glass-card rounded-full text-sm font-bold border border-white/10 hover:bg-white hover:text-blue-600 transition-all duration-500 cursor-default">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                        ✨ {highlight}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

<<<<<<< HEAD
                    {/* Travel Info Bar - Compacted */}
                    {(data.bestTime || data.currency || data.language) && (
                        <div className="max-w-5xl mx-auto w-full px-4 mb-16">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { icon: '🗓️', label: 'Best Time', value: data.bestTime },
                                    { icon: '💱', label: 'Currency', value: data.currency },
                                    { icon: '🗣️', label: 'Language', value: data.language }
                                ].filter(i => i.value).map((item, idx) => (
                                    <div key={idx} className="bg-black border border-white/10 rounded-[2rem] p-6 text-center hover:bg-zinc-900 transition-all duration-700 shadow-2xl group">
                                        <div className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-110">{item.icon}</div>
                                        <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-2">{item.label}</div>
                                        <div className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">{item.value}</div>
=======
                    {/* Travel Info Bar */}
                    {(data.bestTime || data.currency || data.language) && (
                        <div className="max-w-6xl mx-auto w-full px-4 mb-20">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { icon: '🗓️', label: 'Best Time to Visit', value: data.bestTime },
                                    { icon: '💱', label: 'Currency', value: data.currency },
                                    { icon: '🗣️', label: 'Language', value: data.language }
                                ].filter(i => i.value).map((item, idx) => (
                                    <div key={idx} className="glass-card rounded-[2rem] p-8 text-center border-t-2 border-t-white/5 hover:bg-white/10 transition-all duration-500">
                                        <div className="text-4xl mb-4 drop-shadow-lg">{item.icon}</div>
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">{item.label}</div>
                                        <div className="text-xl font-black text-blue-400 tracking-tight">{item.value}</div>
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

<<<<<<< HEAD
                    {/* Package Cards Section - Compacted */}
                    <div id="packages" className="flex-grow flex items-center justify-center pb-16 px-4">
                        <div className="max-w-6xl w-full">
                            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">
                                Curated <span className="text-white">Experiences</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
=======
                    {/* Package Cards Section */}
                    <div id="packages" className="flex-grow flex items-center justify-center pb-20 px-4">
                        <div className="max-w-7xl w-full">
                            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent italic tracking-tighter">
                                Curated <span className="text-white">Travel Experiences</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                {regularPackages.map((pkg, index) => (
                                    <div
                                        key={pkg.id || index}
                                        onClick={() => handlePackageClick(pkg.id)}
<<<<<<< HEAD
                                        className={`bg-black rounded-[2rem] overflow-hidden hover:transform hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] transition-all duration-700 cursor-pointer group border border-white/10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                                        style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                                    >
                                        <div className="relative h-56 overflow-hidden">
=======
                                        className={`glass-card rounded-[2.5rem] overflow-hidden hover:transform hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)] transition-all duration-700 cursor-pointer group border-b-4 border-b-blue-600/30 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                                        style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                                    >
                                        <div className="relative h-64 overflow-hidden">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                            <img
                                                src={pkg.image}
                                                alt={pkg.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                            {pkg.duration && (
<<<<<<< HEAD
                                                <div className="absolute top-4 right-4 px-3 py-1.5 bg-blue-600 text-[8px] text-white rounded-full font-black tracking-widest uppercase">
                                                    {pkg.duration}
                                                </div>
                                            )}
                                            <div className="absolute bottom-5 left-5 right-5">
                                                <h3 className="text-xl sm:text-2xl font-black mb-1 text-white leading-tight tracking-tight">{pkg.title}</h3>
                                                <p className="text-[10px] text-blue-400 font-black flex items-center uppercase tracking-widest">
                                                    <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
=======
                                                <div className="absolute top-6 right-6 px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-black tracking-widest shadow-xl">
                                                    {pkg.duration}
                                                </div>
                                            )}
                                            <div className="absolute bottom-6 left-6 right-6">
                                                <h3 className="text-2xl font-black mb-1 drop-shadow-lg leading-tight">{pkg.title}</h3>
                                                <p className="text-sm text-blue-400 font-bold flex items-center uppercase tracking-widest">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                                    </svg>
                                                    {pkg.location}
                                                </p>
                                            </div>
                                        </div>
<<<<<<< HEAD
                                        <div className="p-6 bg-black">
                                            <div className="flex flex-wrap gap-1.5 mb-6">
                                                {pkg.features.slice(0, 3).map((feature, idx) => (
                                                    <span key={idx} className="text-[9px] font-black uppercase tracking-widest bg-zinc-800/50 border border-white/10 px-3 py-1.5 rounded-full text-white/70">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between pt-5 border-t border-white/5">
                                                <div>
                                                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 block mb-1">FROM</span>
                                                    <span className="text-2xl font-black text-white tracking-tighter">{pkg.price}</span>
                                                </div>
                                                <button className="p-4 bg-zinc-900 border border-white/5 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl">
                                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
=======
                                        <div className="p-8">
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {pkg.features.slice(0, 3).map((feature, idx) => (
                                                    <span key={idx} className="text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-400">
                                                        {feature}
                                                    </span>
                                                ))}
                                                {pkg.features.length > 3 && (
                                                    <span className="text-[10px] font-black uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full text-blue-400">
                                                        +{pkg.features.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                                <div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 block mb-1">Starting from</span>
                                                    <span className="text-3xl font-black text-white tracking-tighter">{pkg.price}</span>
                                                </div>
                                                <button className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-white group-hover:text-blue-600 transition-all duration-500">
                                                    <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" />
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

<<<<<<< HEAD
                    {/* Featured Package - Compacted */}
                    {featuredPackage && (
                        <div id="featured" className="flex items-center justify-center px-4 pb-20">
                            <div className="max-w-5xl w-full">
                                <div className="text-center mb-10">
                                    <span className="inline-block px-5 py-1.5 bg-blue-500/10 backdrop-blur-md rounded-full border border-blue-500/30 mb-5 animate-pulse">
                                        <span className="text-blue-400 font-black uppercase tracking-widest text-[10px]">⭐ Elite Experience</span>
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-black italic tracking-tighter">
=======
                    {/* Featured Package */}
                    {featuredPackage && (
                        <div id="featured" className="flex items-center justify-center px-4 pb-24">
                            <div className="max-w-6xl w-full">
                                <div className="text-center mb-12">
                                    <span className="inline-block px-6 py-2 bg-blue-500/10 backdrop-blur-md rounded-full border border-blue-500/30 mb-6 animate-pulse">
                                        <span className="text-blue-400 font-black uppercase tracking-widest text-xs">⭐ Elite Experience</span>
                                    </span>
                                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Best Seller</span>
                                    </h2>
                                </div>
                                <div
                                    onClick={() => handlePackageClick(featuredPackage.id)}
<<<<<<< HEAD
                                    className={`relative glass-card border border-blue-500/20 rounded-[2.5rem] overflow-hidden hover:transform hover:scale-[1.01] hover:shadow-[0_30px_80px_rgba(37,99,235,0.15)] transition-all duration-1000 cursor-pointer group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                                    style={{ transitionDelay: `${(regularPackages.length + 1) * 100}ms` }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                        <div className="relative h-72 md:h-auto overflow-hidden order-2 md:order-1">
=======
                                    className={`relative glass-card border-2 border-blue-500/30 rounded-[3rem] overflow-hidden hover:transform hover:scale-[1.01] hover:shadow-[0_40px_100px_rgba(37,99,235,0.2)] transition-all duration-1000 cursor-pointer group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                                    style={{ transitionDelay: `${(regularPackages.length + 1) * 150}ms` }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                                        <div className="relative h-96 md:h-auto overflow-hidden order-2 md:order-1">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                            <img
                                                src={featuredPackage.image}
                                                alt={featuredPackage.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80 md:block hidden" />
                                        </div>
<<<<<<< HEAD
                                        <div className="p-8 md:p-12 flex flex-col justify-center order-1 md:order-2 bg-gradient-to-br from-black/90 to-blue-900/40 relative">
                                            <div className="absolute top-10 right-10 w-24 h-24 bg-blue-500/10 blur-[50px]" />
                                            <div className="mb-5">
                                                <span className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
                                                    ⭐ SIGNATURE
                                                </span>
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-black mb-5 leading-tight tracking-tighter group-hover:text-blue-400 transition-colors duration-500">{featuredPackage.title}</h3>
                                            <p className="text-lg text-blue-400 mb-6 flex items-center font-bold uppercase tracking-widest">
                                                <svg className="w-5 h-5 mr-2.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
                                        <div className="p-10 md:p-16 flex flex-col justify-center order-1 md:order-2 bg-gradient-to-br from-black/80 to-blue-900/40 relative">
                                            <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 blur-[60px]" />
                                            <div className="mb-6">
                                                <span className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                                                    ⭐ SIGNATURE COLLECTION
                                                </span>
                                            </div>
                                            <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tighter group-hover:text-blue-400 transition-colors duration-500">{featuredPackage.title}</h3>
                                            <p className="text-xl text-blue-400 mb-8 flex items-center font-bold uppercase tracking-widest">
                                                <svg className="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                                {featuredPackage.location}
                                            </p>

<<<<<<< HEAD
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                                {featuredPackage.features.slice(0, 4).map((feature, idx) => (
                                                    <div key={idx} className="flex items-center text-slate-300">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2.5 flex-shrink-0" />
                                                        <span className="text-xs font-medium tracking-wide">{feature}</span>
=======
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                                {featuredPackage.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center text-slate-300">
                                                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0" />
                                                        <span className="text-sm font-medium tracking-wide">{feature}</span>
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                                    </div>
                                                ))}
                                            </div>

<<<<<<< HEAD
                                            <div className="flex items-center justify-between flex-wrap gap-4 pt-8 border-t border-white/10">
                                                <div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50 block mb-1">Price from</span>
                                                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter">{featuredPackage.price}</span>
                                                </div>
                                                <button className="px-8 py-4 bg-white text-blue-700 rounded-xl font-black text-lg shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 group-hover:shadow-white/10">
=======
                                            <div className="flex items-center justify-between flex-wrap gap-6 pt-10 border-t border-white/10">
                                                <div>
                                                    <span className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1">Elite Package from</span>
                                                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl">{featuredPackage.price}</span>
                                                    {featuredPackage.duration && (
                                                        <span className="text-sm font-bold text-blue-400 uppercase tracking-widest block mt-2 italic">{featuredPackage.duration}</span>
                                                    )}
                                                </div>
                                                <button className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black text-xl shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group-hover:shadow-white/20">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                                    Book Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

<<<<<<< HEAD
                    {/* Call to Action - Compacted */}
                    <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 py-20 px-4 overflow-hidden relative">
                        <div className="absolute inset-0 animate-shimmer opacity-20 pointer-events-none" />
                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none tracking-tighter">
                                Start Your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">{countryName}</span> Adventure?
                            </h2>
                            <p className="text-lg md:text-xl text-blue-100/90 mb-10 font-light italic">
                                Join thousands of elite travelers with <span className="text-white font-bold underline decoration-blue-400 decoration-2 underline-offset-4">unforgettable memories</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-10 py-4 bg-white text-blue-800 font-black text-lg rounded-xl hover:scale-105 transition-all duration-500 shadow-xl active:scale-95">
                                    Free Consultation
                                </button>
                                <button onClick={() => navigate('/')} className="px-10 py-4 bg-white/10 backdrop-blur-xl text-white font-black text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-500 active:scale-95">
=======
                    {/* Call to Action */}
                    <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 py-24 px-4 overflow-hidden relative">
                        <div className="absolute inset-0 animate-shimmer opacity-20 pointer-events-none" />
                        <div className="max-w-5xl mx-auto text-center relative z-10">
                            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
                                Ready to Start Your <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">{countryName}</span> Adventure?
                            </h2>
                            <p className="text-xl md:text-2xl text-blue-100/90 mb-12 font-light italic">
                                Join thousands of elite travelers who have created <span className="text-white font-bold underline decoration-blue-400 decoration-4 underline-offset-8">unforgettable memories</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button className="px-12 py-5 bg-white text-blue-800 font-black text-xl rounded-2xl hover:scale-110 transition-all duration-500 shadow-[0_20px_60px_rgba(255,255,255,0.3)] active:scale-95">
                                    Get Free Consultation
                                </button>
                                <button onClick={() => navigate('/')} className="px-12 py-5 bg-white/10 backdrop-blur-xl text-white font-black text-xl rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 active:scale-95">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                                    Browse Globe
                                </button>
                            </div>
                        </div>
                    </div>

<<<<<<< HEAD
                    {/* Back Button - Smaller */}
                    <button
                        onClick={handleBack}
                        className="fixed top-24 left-6 p-3.5 rounded-xl bg-white/5 hover:bg-white text-white hover:text-blue-600 transition-all duration-500 backdrop-blur-xl border border-white/10 z-50 group hover:scale-110 shadow-2xl"
                        aria-label="Back to globe"
                    >
                        <svg className="w-6 h-6 transform group-hover:-translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
=======
                    {/* Back Button */}
                    <button
                        onClick={handleBack}
                        className="fixed top-24 left-8 p-4 rounded-2xl bg-white/5 hover:bg-white text-white hover:text-blue-600 transition-all duration-500 backdrop-blur-xl border border-white/10 z-50 group hover:scale-110 shadow-2xl"
                        aria-label="Back to globe"
                    >
                        <svg className="w-7 h-7 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>

                </div>
            </div>
        </>
    );
};

export default CountryDetail;
