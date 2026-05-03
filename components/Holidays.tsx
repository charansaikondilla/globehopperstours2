import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Stars from './Stars';
import Footer from './Footer';

interface HolidayPackage {
    name: string;
    flag: string;
    visaStatus: string;
    image: string;
    isVisaFree: boolean;
}

const Holidays: React.FC = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('all');

    const getDestinationKey = (name: string): string => {
        const lowerName = name.toLowerCase();
        const mappings: Record<string, string> = {
            'dubai': 'united-arab-emirates',
            'abu dhabi': 'united-arab-emirates',
            'united states': 'united-states',
            'usa': 'united-states',
            'uk': 'united-kingdom',
            'south korea': 'south-korea',
            'sri lanka': 'sri-lanka',
            'saudi arabia': 'saudi-arabia',
            'hong kong': 'hong-kong',
            'new zealand': 'new-zealand'
        };
        return mappings[lowerName] || lowerName.replace(/\s+/g, '-');
    };

    const handlePackageClick = (pkgName: string) => {
        navigate(`/${getDestinationKey(pkgName)}`);
    };

    const categories = [
        { id: 'all', label: 'All Packages', icon: '🌍' },
        { id: 'visaFree', label: 'Visa-Free', icon: '🎉' },
        { id: 'asia', label: 'Asia', icon: '🌏' },
        { id: 'europe', label: 'Europe', icon: '🏰' },
        { id: 'middleEast', label: 'Middle East', icon: '🕌' },
        { id: 'americas', label: 'Americas', icon: '🌎' },
        { id: 'australia', label: 'Australia', icon: '🦘' }
    ];

    const holidayPackages: Record<string, { title: string; subtitle: string; packages: HolidayPackage[] }> = {
        visaFree: {
            title: 'Visa-Free',
            subtitle: 'No Hassle • Just Travel',
            packages: [
                { name: 'Sri Lanka', flag: '🇱🇰', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000', isVisaFree: true },
                { name: 'Maldives', flag: '🇲🇻', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000', isVisaFree: true },
                { name: 'Thailand', flag: '🇹🇭', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000', isVisaFree: true },
                { name: 'Malaysia', flag: '🇲🇾', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000', isVisaFree: true },
                { name: 'Qatar', flag: '🇶🇦', visaStatus: 'Visa-Free', image: 'https://i.ibb.co/GvmW991h/unnamed.webp', isVisaFree: true },
                { name: 'Kazakhstan', flag: '🇰🇿', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=1000', isVisaFree: true },
                { name: 'Kyrgyzstan', flag: '🇰🇬', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=1000', isVisaFree: true },
                { name: 'Uzbekistan', flag: '🇺🇿', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000', isVisaFree: true },
                { name: 'Philippines', flag: '🇵🇭', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1000', isVisaFree: true },
                { name: 'Fiji', flag: '🇫🇯', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1000', isVisaFree: true },
                { name: 'Iran', flag: '🇮🇷', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1000', isVisaFree: true },
            ]
        },
        asia: {
            title: 'Asia - Visa Assisted',
            subtitle: 'Wonders of the East',
            packages: [
                { name: 'Japan', flag: '🇯🇵', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000', isVisaFree: false },
                { name: 'South Korea', flag: '🇰🇷', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1000', isVisaFree: false },
                { name: 'Indonesia', flag: '🇮🇩', visaStatus: 'Bali • Visa-Assisted', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000', isVisaFree: false },
                { name: 'Singapore', flag: '🇸🇬', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=1000', isVisaFree: false },
                { name: 'China', flag: '🇨🇳', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1000', isVisaFree: false },
            ]
        },
        europe: {
            title: 'Europe - Visa Assisted',
            subtitle: 'Schengen & UK Premium Support',
            packages: [
                { name: 'Europe', flag: '🇪🇺', visaStatus: 'Schengen Visa', image: 'https://i.ibb.co/CpDFwYLv/unnamed.webp', isVisaFree: false },
                { name: 'United Kingdom', flag: '🇬🇧', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000', isVisaFree: false },
                { name: 'France', flag: '🇫🇷', visaStatus: 'Schengen Visa', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000', isVisaFree: false },
                { name: 'Switzerland', flag: '🇨🇭', visaStatus: 'Schengen Visa', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000', isVisaFree: false },
            ]
        },
        middleEast: {
            title: 'Middle East - Visa Assisted',
            subtitle: 'The Golden Sands',
            packages: [
                { name: 'Dubai', flag: '🇦🇪', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000', isVisaFree: false },
                { name: 'Abu Dhabi', flag: '🇦🇪', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=1000', isVisaFree: false },
                { name: 'Oman', flag: '🇴🇲', visaStatus: 'Visa-Assisted', image: 'https://i.ibb.co/wFX2nnYx/unnamed.webp', isVisaFree: false },
            ]
        },
        americas: {
            title: 'Americas - Visa Assisted',
            subtitle: 'Coast to Coast Adventures',
            packages: [
                { name: 'United States', flag: '🇺🇸', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1000', isVisaFree: false },
                { name: 'Canada', flag: '🇨🇦', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1000', isVisaFree: false },
            ]
        },
        australia: {
            title: 'Australia - Visa Assisted',
            subtitle: 'The Land Down Under',
            packages: [
                { name: 'Sydney', flag: '🇦🇺', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000', isVisaFree: false },
                { name: 'Melbourne', flag: '🇦🇺', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=1000', isVisaFree: false },
            ]
        }
    };

    return (
        <div className="font-lexend">
            <Helmet>
                <title>Holidays - GlobeHoppersTours</title>
            </Helmet>

            <div className="min-h-screen bg-black text-white relative overflow-hidden pt-20 sm:pt-24">
                <Stars />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-20">
                    {/* Header - Compact & Clean */}
                    <div className="mb-10 sm:mb-14">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 mb-4">
                            <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">Exclusive Travel</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black mb-3 tracking-tight">Holiday Packages</h1>
                        <p className="text-[11px] sm:text-sm text-slate-400 font-medium max-w-2xl leading-relaxed">
                            Explore handpicked destinations - from visa-free getaways to premium assisted travel experiences.
                        </p>
                    </div>

                    {/* Category Navigation */}
                    <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-xl py-4 -mx-4 px-4 mb-12 border-b border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] sm:text-xs font-black transition-all duration-300 ${
                                    activeCategory === cat.id 
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                                }`}
                            >
                                <span>{cat.icon}</span>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Sections */}
                    <div className="space-y-20">
                        {Object.entries(holidayPackages).map(([id, section]) => {
                            if (activeCategory !== 'all' && activeCategory !== id) return null;

                            return (
                                <motion.section 
                                    key={id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="relative"
                                >
                                    <div className="mb-8 pl-4 border-l-2 border-blue-500/30">
                                        <h2 className="text-xl sm:text-2xl font-black tracking-tight mb-1">{section.title}</h2>
                                        <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase tracking-[0.3em] font-black">{section.subtitle}</p>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                        {section.packages.map((pkg) => (
                                            <motion.div
                                                key={pkg.name}
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                onClick={() => handlePackageClick(pkg.name)}
                                                className="group relative h-[240px] sm:h-[280px] rounded-[1.5rem] overflow-hidden cursor-pointer border border-white/5 bg-white/5 shadow-2xl"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                                                <img 
                                                    src={pkg.image} 
                                                    alt={pkg.name} 
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                />
                                                
                                                <div className="absolute top-4 left-4 z-20">
                                                    <span className="text-xl drop-shadow-md">{pkg.flag}</span>
                                                </div>

                                                <div className="absolute bottom-5 left-5 right-5 z-20">
                                                    <h3 className="text-sm sm:text-base font-black text-white mb-0.5 tracking-tight group-hover:text-blue-400 transition-colors drop-shadow-md">{pkg.name}</h3>
                                                    <p className="text-[9px] sm:text-[10px] text-blue-300/80 font-bold uppercase tracking-widest">
                                                        {pkg.visaStatus}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.section>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="mt-24 relative p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent border border-white/10 overflow-hidden text-center">
                        <div className="absolute inset-0 bg-blue-500/5 blur-[120px]" />
                        <h2 className="text-2xl sm:text-3xl font-black mb-4 relative z-10 tracking-tight">Ready to Book Your Dream?</h2>
                        <p className="text-xs sm:text-sm text-slate-400 mb-10 relative z-10 max-w-xl mx-auto leading-relaxed">
                            Contact our travel experts for personalized packages, exclusive deals, and end-to-end visa support.
                        </p>
                        <a
                            href="/contact"
                            className="relative z-10 inline-flex items-center gap-3 px-10 py-4 bg-white text-blue-900 rounded-full font-black text-xs sm:text-sm hover:scale-105 transition-all duration-300 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
                        >
                            Get Started <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Holidays;
