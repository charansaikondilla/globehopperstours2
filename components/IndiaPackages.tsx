import React from 'react';
import { Helmet } from 'react-helmet-async';
import Stars from './Stars';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const IndiaPackages: React.FC = () => {
    const devotionalPlaces = {
        north: {
            title: '🕉️ North India - Divine Hymns',
            places: [
                { name: 'Varanasi', state: 'Uttar Pradesh', details: 'Kashi Vishwanath, Ganga Aarti' },
                { name: 'Haridwar', state: 'Uttarakhand', details: 'Har Ki Pauri, Triveni Ghat' },
                { name: 'Rishikesh', state: 'Uttarakhand', details: 'Parmarth Niketan, Ashrams' },
                { name: 'Ayodhya', state: 'Uttar Pradesh', details: 'Ram Janmabhoomi, Hanuman Garhi' },
                { name: 'Amritsar', state: 'Punjab', details: 'Golden Temple (Harmandir Sahib)' },
                { name: 'Vaishno Devi', state: 'J&K', details: 'Mata Vaishno Devi Shrine' },
                { name: 'Kedarnath', state: 'Uttarakhand', details: 'Kedarnath Temple (Jyotirlinga)' },
                { name: 'Badrinath', state: 'Uttarakhand', details: 'Badrinath Temple (Char Dham)' },
                { name: 'Gangotri', state: 'Uttarakhand', details: 'Origin of River Ganga' },
                { name: 'Yamunotri', state: 'Uttarakhand', details: 'Origin of River Yamuna' },
            ]
        },
        south: {
            title: '🕉️ South India - Temple Glories',
            places: [
                { name: 'Tirupati', state: 'Andhra Pradesh', details: 'Tirumala Venkateswara Temple' },
                { name: 'Madurai', state: 'Tamil Nadu', details: 'Meenakshi Amman Temple' },
                { name: 'Rameswaram', state: 'Tamil Nadu', details: 'Ramanathaswamy Temple' },
                { name: 'Sabarimala', state: 'Kerala', details: 'Lord Ayyappa Temple' },
                { name: 'Guruvayur', state: 'Kerala', details: 'Guruvayur Sri Krishna Temple' },
                { name: 'Tanjore', state: 'Tamil Nadu', details: 'Brihadeeswara Temple' },
                { name: 'Kanchipuram', state: 'Tamil Nadu', details: 'Kamakshi Amman Temple' },
                { name: 'Kanyakumari', state: 'Tamil Nadu', details: 'Kumari Amman Temple' },
                { name: 'Kollur', state: 'Karnataka', details: 'Mookambika Temple' },
                { name: 'Udupi', state: 'Karnataka', details: 'Sri Krishna Matha' },
            ]
        },
        west: {
            title: '🕉️ West India - Sacred Sands',
            places: [
                { name: 'Shirdi', state: 'Maharashtra', details: 'Sai Baba Temple' },
                { name: 'Shani Shingnapur', state: 'Maharashtra', details: 'Lord Shani Temple' },
                { name: 'Dwarka', state: 'Gujarat', details: 'Dwarkadhish Temple' },
                { name: 'Somnath', state: 'Gujarat', details: 'Somnath Jyotirlinga' },
                { name: 'Siddhivinayak', state: 'Maharashtra', details: 'Siddhivinayak Ganpati (Mumbai)' },
                { name: 'Trimbakeshwar', state: 'Maharashtra', details: 'Trimbakeshwar Jyotirlinga' },
                { name: 'Panchgani', state: 'Maharashtra', details: 'Mahabaleshwar Temples' },
            ]
        },
        east: {
            title: '🕉️ East India - Spiritual Dawn',
            places: [
                { name: 'Puri', state: 'Odisha', details: 'Jagannath Temple' },
                { name: 'Konark', state: 'Odisha', details: 'Sun Temple (Surya Mandir)' },
                { name: 'Bhubaneswar', state: 'Odisha', details: 'Lingaraj Temple' },
                { name: 'Baidyanath Dham', state: 'Jharkhand', details: 'Baba Baidyanath Jyotirlinga' },
                { name: 'Jagannath Puri', state: 'Odisha', details: 'Rath Yatra Pilgrimage' },
            ]
        },
        central: {
            title: '🕉️ Central India - Heart of Devotion',
            places: [
                { name: 'Omkareshwar', state: 'Madhya Pradesh', details: 'Omkareshwar Jyotirlinga' },
                { name: 'Mahakaleshwar', state: 'Madhya Pradesh', details: 'Ujjain Mahakal Temple' },
                { name: 'Sanchi', state: 'Madhya Pradesh', details: 'Great Stupa (Buddhist)' },
            ]
        }
    };

    return (
        <>
            <Helmet>
                <title>Devotional India Packages - Globehoppertours</title>
                <meta name="description" content="Explore spiritual journeys across India. Visit Varanasi, Tirupati, Shirdi, Puri, and more with our exclusive devotional packages." />
            </Helmet>

            <div className="min-h-screen bg-black text-white relative overflow-hidden pt-32">
                <Stars />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                    {/* Hero Section */}
                    <div className="text-center mb-20 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[100px] rounded-full -z-10" />
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            🙏 Spiritual Journeys in India
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light tracking-wide">
                            Rediscover inner peace with our curated pilgrimages to the holiest shrines across <span className="text-orange-400 font-bold">Incredible India</span>.
                        </p>
                    </div>

                    {/* Regional Sections */}
                    {Object.entries(devotionalPlaces).map(([key, region]) => (
                        <section key={key} className="mb-24 last:mb-12">
                            <div className="flex items-center gap-4 mb-8 pl-4 border-l-4 border-orange-500">
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                                    {region.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {region.places.map((place, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] flex flex-col"
                                    >
                                        <div className="h-2 bg-gradient-to-r from-orange-600 to-yellow-500" />
                                        <div className="p-6 flex-grow flex flex-col">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                                    {place.name}
                                                </h3>
                                                <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-slate-300 border border-white/10">
                                                    {place.state}
                                                </span>
                                            </div>

                                            <p className="text-slate-400 text-sm mb-6 flex-grow border-t border-white/5 pt-4">
                                                <span className="text-orange-500 mr-2">✦</span>
                                                {place.details}
                                            </p>

                                            <Link
                                                to="/contact"
                                                className="w-full py-3 rounded-xl bg-white/5 text-center text-sm font-bold text-white hover:bg-orange-600 transition-all group-hover:shadow-lg"
                                            >
                                                Book Pilgrimage
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* CTA Section */}
                    <div className="mt-20 bg-gradient-to-br from-orange-900/40 to-red-900/40 border border-orange-500/20 rounded-[3rem] p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <h2 className="text-4xl font-black mb-6 text-white relative z-10">Custom Spiritual Packages Available</h2>
                        <p className="text-xl mb-10 text-orange-100 relative z-10 max-w-2xl mx-auto">
                            We organize group tours, senior citizen specials, and luxury darshan packages tailored to your needs.
                        </p>
                        <Link
                            to="/contact"
                            className="relative z-10 inline-block px-10 py-4 bg-orange-600 text-white rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-[0_0_20px_rgba(234,88,12,0.4)]"
                        >
                            Enquire Now
                        </Link>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default IndiaPackages;
