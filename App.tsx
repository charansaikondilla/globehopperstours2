
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DestinationsProvider } from './context/DestinationsContext';
import HomePage from './components/HomePage';
import CountryDetail from './components/CountryDetail';
import PackageDetail from './components/PackageDetail';
import NotFound from './components/NotFound';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Visa from './components/Visa';
import FlightBooking from './components/FlightBooking';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Holidays from './components/Holidays';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot/Chatbot';
import Insurance from './components/Insurance';
import IndiaPackages from './components/IndiaPackages';

const App: React.FC = () => {
    return (
        <DestinationsProvider>
            <HelmetProvider>
                <Navbar />
                <Chatbot />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/holidays" element={<Holidays />} />
                    <Route path="/india-packages" element={<IndiaPackages />} />

                    <Route path="/visa" element={<Visa />} />
                    <Route path="/insurance" element={<Insurance />} />
                    <Route path="/flights" element={<FlightBooking />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/:country" element={<CountryDetail />} />
                    <Route path="/:country/:packageId" element={<PackageDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </HelmetProvider>
        </DestinationsProvider>
    );
};

export default App;
