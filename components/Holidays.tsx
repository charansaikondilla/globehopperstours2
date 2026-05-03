<<<<<<< HEAD
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
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
<<<<<<< HEAD
    const [activeCategory, setActiveCategory] = useState('all');

    const getDestinationKey = (name: string): string => {
        const lowerName = name.toLowerCase();
=======

    const getDestinationKey = (name: string): string => {
        const lowerName = name.toLowerCase();

        // Special mappings for specific cases
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
        const mappings: Record<string, string> = {
            'dubai': 'united-arab-emirates',
            'abu dhabi': 'united-arab-emirates',
            'united states': 'united-states',
            'usa': 'united-states',
            'uk': 'united-kingdom',
            'south korea': 'south-korea',
<<<<<<< HEAD
            'sri lanka': 'sri-lanka',
=======
            'sri lanka': 'sri-lanka', // Ensure standard slug
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
            'saudi arabia': 'saudi-arabia',
            'hong kong': 'hong-kong',
            'new zealand': 'new-zealand'
        };
<<<<<<< HEAD
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
=======

        if (mappings[lowerName]) {
            return mappings[lowerName];
        }

        // Default slug generation: lowercase and replace spaces with hyphens
        return lowerName.replace(/\s+/g, '-');
    };

    const handlePackageClick = (pkgName: string) => {
        const destinationKey = getDestinationKey(pkgName);
        navigate(`/${destinationKey}`);
    };

    const holidayPackages = {
        visaFree: {
            title: '🎉 VISA-FREE DESTINATIONS',
            subtitle: 'Travel Hassle-Free - No Visa Required!',
            packages: [
                { name: 'Sri Lanka', flag: '🇱🇰', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop', isVisaFree: true },
                { name: 'Maldives', flag: '🇲🇻', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2665&auto=format&fit=crop', isVisaFree: true },
                { name: 'Thailand', flag: '🇹🇭', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2659&auto=format&fit=crop', isVisaFree: true },
                { name: 'Malaysia', flag: '🇲🇾', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2664&auto=format&fit=crop', isVisaFree: true },
                { name: 'Qatar', flag: '🇶🇦', visaStatus: 'Visa-Free', image: 'https://i.ibb.co/GvmW991h/unnamed.webp', isVisaFree: true },

                { name: 'Kazakhstan', flag: '🇰🇿', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?q=80&w=2667&auto=format&fit=crop', isVisaFree: true },
                { name: 'Kyrgyzstan', flag: '🇰🇬', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=2670&auto=format&fit=crop', isVisaFree: true },
                { name: 'Uzbekistan', flag: '🇺🇿', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2670&auto=format&fit=crop', isVisaFree: true },
                { name: 'Philippines', flag: '🇵🇭', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=2664&auto=format&fit=crop', isVisaFree: true },
                { name: 'Fiji', flag: '🇫🇯', visaStatus: 'Visa-Free', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2670&auto=format&fit=crop', isVisaFree: true },
                { name: 'Iran', flag: '🇮🇷', visaStatus: 'Visa-Free (short stay)', image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=2676&auto=format&fit=crop', isVisaFree: true },
            ]
        },
        asia: {
            title: '🌏 ASIA - VISA ASSISTED',
            subtitle: 'Explore the wonders of Asia with our visa assistance',
            packages: [
                { name: 'Japan', flag: '🇯🇵', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'South Korea', flag: '🇰🇷', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Cambodia', flag: '🇰🇭', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Indonesia', flag: '🇮🇩', visaStatus: 'Visa-Assisted (Bali)', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2638&auto=format&fit=crop', isVisaFree: false },
                { name: 'Singapore', flag: '🇸🇬', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2671&auto=format&fit=crop', isVisaFree: false },
                { name: 'China', flag: '🇨🇳', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Hong Kong', flag: '🇭🇰', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Taiwan', flag: '🇹🇼', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1552993873-0dd1110e025f?q=80&w=2671&auto=format&fit=crop', isVisaFree: false },
                { name: 'Russia', flag: '🇷🇺', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=2649&auto=format&fit=crop', isVisaFree: false },
                { name: 'Myanmar', flag: '🇲🇲', visaStatus: 'Visa-Assisted', image: 'https://i.ibb.co/JRcBnQWw/unnamed.webp', isVisaFree: false },
            ]
        },
        europe: {
            title: '🏰 EUROPE - VISA ASSISTED',
            subtitle: 'Premium Schengen & UK Visa Assistance',
            packages: [
                { name: 'Europe', flag: '🇪🇺', visaStatus: 'Schengen Visa', image: 'https://i.ibb.co/CpDFwYLv/unnamed.webp', isVisaFree: false },
                { name: 'United Kingdom', flag: '🇬🇧', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Ireland', flag: '🇮🇪', visaStatus: 'Visa-Assisted', image: 'https://i.ibb.co/gLyvmNWg/unnamed.webp', isVisaFree: false },
                { name: 'France', flag: '🇫🇷', visaStatus: 'Schengen Visa', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop', isVisaFree: false },
                { name: 'Italy', flag: '🇮🇹', visaStatus: 'Schengen Visa', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2683&auto=format&fit=crop', isVisaFree: false },
                { name: 'Germany', flag: '🇩🇪', visaStatus: 'Schengen Visa', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Spain', flag: '🇪🇸', visaStatus: 'Schengen Visa', image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Switzerland', flag: '🇨🇭', visaStatus: 'Schengen Visa', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Netherlands', flag: '🇳🇱', visaStatus: 'Schengen Visa', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
            ]
        },
        middleEast: {
            title: '🕌 MIDDLE EAST - VISA ASSISTED',
            subtitle: 'Discover the Middle East with Ease',
            packages: [
                { name: 'Dubai', flag: '🇦🇪', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Abu Dhabi', flag: '🇦🇪', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Oman', flag: '🇴🇲', visaStatus: 'Visa-Assisted', image: 'https://i.ibb.co/wFX2nnYx/unnamed.webp', isVisaFree: false },
                { name: 'Israel', flag: '🇮🇱', visaStatus: 'Visa-Assisted', image: 'https://i.ibb.co/Tq2GwjzC/download.webp', isVisaFree: false },
                { name: 'Qatar', flag: '🇶🇦', visaStatus: 'Visa-Assisted', image: 'https://i.ibb.co/GvmW991h/unnamed.webp', isVisaFree: false },
            ]
        },
        americas: {
            title: '🌎 AMERICAS - VISA ASSISTED',
            subtitle: 'Explore the Americas with our expert support',
            packages: [
                { name: 'United States', flag: '🇺🇸', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2699&auto=format&fit=crop', isVisaFree: false },
                { name: 'Canada', flag: '🇨🇦', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Mexico', flag: '🇲🇽', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
            ]
        },
        australia: {
            title: '🦘 AUSTRALIA - VISA ASSISTED',
            subtitle: 'Discover the Land Down Under',
            packages: [
                { name: 'Sydney', flag: '🇦🇺', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Melbourne', flag: '🇦🇺', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=2671&auto=format&fit=crop', isVisaFree: false },
                { name: 'Brisbane', flag: '🇦🇺', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
                { name: 'Perth', flag: '🇦🇺', visaStatus: 'Visa-Assisted', image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=2670&auto=format&fit=crop', isVisaFree: false },
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
            ]
        }
    };

<<<<<<< HEAD
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
=======
    const renderPackageCard = (pkg: HolidayPackage) => (
        <div
            key={pkg.name}
            onClick={() => handlePackageClick(pkg.name)}
            className="group relative flex-shrink-0 w-64 h-72 rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
            <img
                src={pkg.image}
                alt={pkg.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                {pkg.isVisaFree && (
                    <div className="mb-3 inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/90 backdrop-blur-md rounded-full">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs font-black text-white uppercase tracking-wider">Visa-Free</span>
                    </div>
                )}
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-2xl">
                        {pkg.flag}
                    </div>
                    <div>
                        <h3 className="font-black text-xl text-white leading-tight">{pkg.name}</h3>
                        <p className="text-sm text-blue-300 font-semibold">{pkg.visaStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Helmet>
                <title>Holiday Packages - GlobeHoppersTours | Explore the World</title>
                <meta name="description" content="Discover our curated holiday packages across the globe. Visa-free destinations, easy visa countries, and premium assisted travel experiences." />
            </Helmet>

            <div className="min-h-screen bg-black text-white relative overflow-hidden pt-32">
                <Stars />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-700">
                            🌍 Holiday Packages by GlobeHoppersTours
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light tracking-wide">
                            Explore the world with our <span className="text-blue-400 font-medium italic">handpicked destinations</span> - from visa-free getaways to premium assisted travel
                        </p>
                    </div>

                    {/* VISA-FREE SECTION - HIGHLIGHTED */}
                    <section className="mb-20">
                        <div className="bg-gradient-to-r from-green-600/20 via-green-500/10 to-transparent rounded-2xl md:rounded-[3rem] p-4 md:p-8 mb-6 md:mb-8 border-2 border-green-500/30">
                            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3">
                                <div className="w-10 h-10 md:w-16 md:h-16 bg-green-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                                        {holidayPackages.visaFree.title}
                                    </h2>
                                    <p className="text-sm md:text-lg text-green-300 font-semibold mt-0.5 md:mt-1">{holidayPackages.visaFree.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto pb-6 -mx-4 px-4">
                            <div className="flex gap-6 min-w-max">
                                {holidayPackages.visaFree.packages.map(renderPackageCard)}
                            </div>
                        </div>
                    </section>

                    {/* ASIA SECTION */}
                    <section className="mb-20">
                        <div className="glass-card rounded-2xl md:rounded-[3rem] p-4 md:p-8 mb-6 md:mb-8">
                            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3">
                                <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                                        {holidayPackages.asia.title}
                                    </h2>
                                    <p className="text-sm md:text-lg text-blue-300 font-semibold mt-0.5 md:mt-1">{holidayPackages.asia.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto pb-6 -mx-4 px-4">
                            <div className="flex gap-6 min-w-max">
                                {holidayPackages.asia.packages.map(renderPackageCard)}
                            </div>
                        </div>
                    </section>

                    {/* EUROPE SECTION */}
                    <section className="mb-20">
                        <div className="glass-card rounded-2xl md:rounded-[3rem] p-4 md:p-8 mb-6 md:mb-8">
                            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3">
                                <div className="w-10 h-10 md:w-16 md:h-16 bg-purple-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                                        {holidayPackages.europe.title}
                                    </h2>
                                    <p className="text-sm md:text-lg text-purple-300 font-semibold mt-0.5 md:mt-1">{holidayPackages.europe.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto pb-6 -mx-4 px-4">
                            <div className="flex gap-6 min-w-max">
                                {holidayPackages.europe.packages.map(renderPackageCard)}
                            </div>
                        </div>
                    </section>

                    {/* MIDDLE EAST SECTION */}
                    <section className="mb-20">
                        <div className="glass-card rounded-2xl md:rounded-[3rem] p-4 md:p-8 mb-6 md:mb-8">
                            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3">
                                <div className="w-10 h-10 md:w-16 md:h-16 bg-yellow-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                                        {holidayPackages.middleEast.title}
                                    </h2>
                                    <p className="text-sm md:text-lg text-yellow-300 font-semibold mt-0.5 md:mt-1">{holidayPackages.middleEast.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto pb-6 -mx-4 px-4">
                            <div className="flex gap-6 min-w-max">
                                {holidayPackages.middleEast.packages.map(renderPackageCard)}
                            </div>
                        </div>
                    </section>

                    {/* AMERICAS SECTION */}
                    <section className="mb-20">
                        <div className="glass-card rounded-2xl md:rounded-[3rem] p-4 md:p-8 mb-6 md:mb-8">
                            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3">
                                <div className="w-10 h-10 md:w-16 md:h-16 bg-red-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                                        {holidayPackages.americas.title}
                                    </h2>
                                    <p className="text-sm md:text-lg text-red-300 font-semibold mt-0.5 md:mt-1">{holidayPackages.americas.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto pb-6 -mx-4 px-4">
                            <div className="flex gap-6 min-w-max">
                                {holidayPackages.americas.packages.map(renderPackageCard)}
                            </div>
                        </div>
                    </section>

                    {/* AUSTRALIA SECTION */}
                    <section className="mb-20">
                        <div className="glass-card rounded-2xl md:rounded-[3rem] p-4 md:p-8 mb-6 md:mb-8">
                            <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3">
                                <div className="w-10 h-10 md:w-16 md:h-16 bg-orange-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                                        {holidayPackages.australia.title}
                                    </h2>
                                    <p className="text-sm md:text-lg text-orange-300 font-semibold mt-0.5 md:mt-1">{holidayPackages.australia.subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto pb-6 -mx-4 px-4">
                            <div className="flex gap-6 min-w-max">
                                {holidayPackages.australia.packages.map(renderPackageCard)}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 rounded-[3rem] p-16 text-center relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 animate-shimmer opacity-20" />
                        <h2 className="text-5xl font-black mb-6 relative z-10 text-white tracking-tighter">Ready to Book Your Dream Holiday?</h2>
                        <p className="text-xl mb-12 opacity-90 relative z-10 font-light text-blue-50">
                            Contact our travel experts for personalized packages and exclusive deals
                        </p>
                        <a
                            href="/contact"
                            className="relative z-10 inline-block px-12 py-5 bg-white text-blue-700 rounded-full font-black text-xl hover:scale-110 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] active:scale-95"
                        >
                            Get Started
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
                        </a>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            <Footer />
        </div>
=======

            <Footer />
        </>
>>>>>>> add7a8b50360fa3839f9bca695737f51735055d6
    );
};

export default Holidays;
