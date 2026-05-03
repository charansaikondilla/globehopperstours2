import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TravelPackage, CountryData } from '../data/destinations'; // Keep interface imports
import { useDestinations } from '../context/DestinationsContext';


const PackageDetail: React.FC = () => {
    const { country, packageId } = useParams<{ country: string; packageId: string }>();
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);
    const { destinations } = useDestinations(); // Use Hook

    // Get country data with fallback to default for generic pages
    const countryData: CountryData | undefined = destinations[country || ''] || destinations['default'];
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

                    {/* Premium Navbar - Handled globally in App.tsx */}

                    {/* Hero Section with Image Gallery */}
                    <div className="relative h-[65vh] overflow-hidden">
                        <img
                            src={images[selectedImage]}
                            alt={packageData.title}
                            fetchPriority="high"
                            loading="eager"
                            className="w-full h-full object-cover transition-transform duration-[3000ms] hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                        {/* Image Selector */}
                        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`relative group overflow-hidden rounded-xl border-2 transition-all duration-500 ${selectedImage === idx ? 'border-blue-400 w-24 h-14' : 'border-white/20 w-16 h-10 hover:border-white/50'}`}
                                    aria-label={`View image ${idx + 1}`}
                                >
                                    <img src={img} className="w-full h-full object-cover" />
                                    <div className={`absolute inset-0 bg-blue-600/20 transition-opacity ${selectedImage === idx ? 'opacity-0' : 'opacity-40 group-hover:opacity-20'}`} />
                                </button>
                            ))}
                        </div>

                        {/* Title Overlay - Compacted */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
                            <div className="max-w-7xl mx-auto">
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                                        {countryData.displayName}
                                    </span>
                                    {packageData.featured && (
                                        <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-blue-400 border border-blue-400/30 rounded-full text-[10px] font-black uppercase tracking-[0.2em] animate-shimmer">
                                            ⭐ Elite
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-3xl md:text-6xl font-black text-white mb-4 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-tight italic">
                                    {packageData.title}
                                </h1>
                                <p className="text-lg md:text-2xl text-blue-400 flex items-center font-bold tracking-tight">
                                    <svg className="w-5 h-5 mr-2 text-blue-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    </svg>
                                    <span className="bg-white/5 px-3 py-1 rounded-lg backdrop-blur-sm border border-white/10 uppercase tracking-widest text-[11px]">{packageData.location}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content - Tighter Padding */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">

                            {/* Left Column - Details */}
                            <div className="lg:col-span-2 space-y-8 md:space-y-12">

                                {/* Overview - Compacted */}
                                <div className="glass-card rounded-[2rem] p-6 md:p-10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-[40px]" />
                                    <h2 className="text-2xl font-black text-white mb-6 flex items-center tracking-tighter italic">
                                        <div className="w-8 h-8 rounded-xl bg-blue-600/20 flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        Overview
                                    </h2>
                                    <p className="text-slate-400 text-base md:text-lg leading-relaxed font-light italic">
                                        {packageData.description || `Experience the absolute best of ${countryData.displayName} with our signature ${packageData.title} collection. Immerse yourself in the breathtaking beauty and rich cultural heritage of ${packageData.location}.`}
                                    </p>
                                </div>

                                {/* Highlights - Compacted */}
                                <div className="glass-card rounded-[2rem] p-6 md:p-10">
                                    <h2 className="text-2xl font-black text-white mb-8 flex items-center tracking-tighter italic">
                                        <div className="w-8 h-8 rounded-xl bg-blue-600/20 flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        Key Features
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {packageData.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-3 p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-slate-300 font-bold tracking-tight text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Itinerary - Compacted */}
                                {packageData.itinerary && packageData.itinerary.length > 0 && (
                                    <div className="glass-card rounded-[2rem] p-6 md:p-10">
                                        <h2 className="text-2xl font-black text-white mb-8 flex items-center tracking-tighter italic">
                                            <div className="w-8 h-8 rounded-xl bg-blue-600/20 flex items-center justify-center mr-3">
                                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                                </svg>
                                            </div>
                                            Itinerary
                                        </h2>
                                        <div className="space-y-4">
                                            {packageData.itinerary.map((day, idx) => (
                                                <div key={idx} className="relative pl-10 pb-6 border-l-2 border-dashed border-blue-500/20 last:border-0 last:pb-0">
                                                    <div className="absolute left-0 top-0 w-8 h-8 -ml-4 rounded-xl bg-white text-blue-700 font-black flex items-center justify-center text-[10px] shadow-lg">
                                                        {day.day.toString().replace('Day ', '')}
                                                    </div>
                                                    <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                                                        <h3 className="text-lg font-black text-white mb-3 tracking-tight">{day.title}</h3>
                                                        <ul className="space-y-2">
                                                            {day.activities.map((activity, actIdx) => (
                                                                <li key={actIdx} className="text-slate-400 flex items-start text-sm font-light">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-3 flex-shrink-0" />
                                                                    <span>{activity}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Inclusions & Exclusions - Compacted */}
                                {(packageData.included || packageData.excluded) && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Included */}
                                        {packageData.included && (
                                            <div className="bg-blue-600/10 backdrop-blur-md border border-blue-500/20 rounded-[2rem] p-6 md:p-8">
                                                <h3 className="text-xl font-black text-white mb-5 flex items-center tracking-tighter italic">
                                                    <svg className="w-5 h-5 mr-2.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    Included
                                                </h3>
                                                <ul className="space-y-3">
                                                    {packageData.included.map((item, idx) => (
                                                        <li key={idx} className="text-slate-300 flex items-start text-[11px] font-medium tracking-wide">
                                                            <span className="text-blue-400 mr-2.5 font-black">✓</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Excluded */}
                                        {packageData.excluded && (
                                            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2rem] p-6 md:p-8">
                                                <h3 className="text-xl font-black text-white mb-5 flex items-center tracking-tighter italic">
                                                    <svg className="w-5 h-5 mr-2.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    Not Included
                                                </h3>
                                                <ul className="space-y-3">
                                                    {packageData.excluded.map((item, idx) => (
                                                        <li key={idx} className="text-slate-400 flex items-start text-[11px] font-medium italic opacity-70">
                                                            <span className="text-slate-500 mr-2.5">✗</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Right Column - Booking Card - Compacted */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-32 glass-card rounded-[2.5rem] p-6 md:p-8 space-y-6 border-t-2 border-t-white/10 shadow-2xl">

                                    {/* Price */}
                                    <div className="text-center border-b border-white/5 pb-6">
                                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Price from</p>
                                        <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{packageData.price}</p>
                                        {packageData.duration && (
                                            <div className="inline-block px-4 py-1 bg-blue-600/10 border border-blue-500/30 rounded-full">
                                                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">{packageData.duration}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Quick Info Grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                                            <svg className="w-5 h-5 mx-auto mb-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 block">Duration</span>
                                            <span className="text-[10px] font-bold text-white">{packageData.duration}</span>
                                        </div>
                                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
                                            <svg className="w-5 h-5 mx-auto mb-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            </svg>
                                            <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 block">Location</span>
                                            <span className="text-[10px] font-bold text-white truncate">{packageData.location}</span>
                                        </div>
                                    </div>

                                    {/* Booking Form - Compacted */}
                                    <form className="space-y-4" onSubmit={(e) => {
                                        e.preventDefault();
                                        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwIZTBqG_t-m1prFDc4FyeslOFfmn9g2IXAkH239FpzwY1-MkDDFNRAgReObRvL6HDldw/exec';
                                        const form = e.target as HTMLFormElement;
                                        const formData = new FormData(form);
                                        formData.append('type', 'booking');
                                        formData.append('packageTitle', packageData.title);
                                        formData.append('country', countryData.displayName || '');

                                        const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                                        const originalText = btn.innerHTML;
                                        btn.disabled = true;
                                        btn.innerHTML = 'Booking...';

                                        fetch(SCRIPT_URL, {
                                            method: 'POST',
                                            body: formData,
                                            mode: 'no-cors'
                                        }).then(() => {
                                            alert('Successful and team will contact you shortly!');
                                            form.reset();
                                            btn.innerHTML = 'Booked Successfully';
                                            setTimeout(() => {
                                                btn.disabled = false;
                                                btn.innerHTML = originalText;
                                            }, 3000);
                                        }).catch(err => {
                                            console.error('Error booking:', err);
                                            alert('Failed to send booking request. Please try again.');
                                            btn.disabled = false;
                                            btn.innerHTML = originalText;
                                        });
                                    }}>
                                        <div className="space-y-1.5">
                                            <label className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1.5">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="John Doe"
                                                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-xs font-bold"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1.5">Mobile Number</label>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                placeholder="+1 234 567 890"
                                                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-xs font-bold"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[8px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1.5">Preferred Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-xs font-bold"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="group relative w-full py-4 bg-white text-blue-700 font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg text-sm uppercase tracking-widest disabled:opacity-70"
                                        >
                                            Book Expedition
                                        </button>
                                    </form>

                                    {/* Contact advisor */}
                                    <div className="pt-4 border-t border-white/5 text-center">
                                        <button
                                            onClick={() => navigate('/contact')}
                                            className="text-blue-400 hover:text-white font-black text-[9px] uppercase tracking-[0.2em] transition-all duration-300"
                                        >
                                            Consult an Advisor →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA - Compacted */}
                    <div className="bg-gradient-to-br from-blue-700 via-blue-900 to-black py-16 relative overflow-hidden">
                        <div className="absolute inset-0 animate-shimmer opacity-10 pointer-events-none" />
                        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-none italic">
                                Ready to Explore<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">{countryData.displayName}?</span>
                            </h2>
                            <p className="text-blue-100/70 mb-8 text-base md:text-lg font-light italic max-w-xl mx-auto">
                                Join our elite circle of world travelers and embark on the <span className="text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4">journey of a lifetime.</span>
                            </p>
                            <button
                                onClick={() => navigate(`/${country}`)}
                                className="px-8 py-4 bg-white text-blue-800 font-black rounded-xl hover:scale-105 active:scale-95 transition-all duration-500 shadow-xl text-base uppercase tracking-widest"
                            >
                                More Editions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PackageDetail;
