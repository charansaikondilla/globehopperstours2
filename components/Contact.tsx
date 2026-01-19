import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Stars from './Stars';
import Footer from './Footer';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Globalhopperstours | Get in Touch</title>
                <meta name="description" content="Contact Globalhopperstours for travel inquiries, booking assistance, or any questions. Our team is ready to help you plan your perfect journey." />
            </Helmet>

            <Navbar />

            <div className="min-h-screen bg-black text-white relative overflow-hidden">
                <Stars />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-700">
                            Get in Touch
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light tracking-wide italic">
                            Have questions? We're here to help you plan your <span className="text-blue-400 font-medium">perfect journey</span>
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700" />
                            <h2 className="text-3xl font-black mb-8 text-white tracking-tight">
                                Send us a Message
                            </h2>

                            {isSubmitted && (
                                <div className="mb-8 p-5 bg-blue-500/10 border border-blue-500/30 rounded-2xl text-blue-300 animate-pulse">
                                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold mb-3 text-slate-400 tracking-widest uppercase">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-5 py-4 bg-white/5 border ${errors.name ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
                                            } rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-4 transition-all duration-300`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="mt-2 text-xs font-bold text-red-400 uppercase tracking-tighter">{errors.name}</p>}
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold mb-3 text-slate-400 tracking-widest uppercase">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-5 py-4 bg-white/5 border ${errors.email ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
                                            } rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-4 transition-all duration-300`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="mt-2 text-xs font-bold text-red-400 uppercase tracking-tighter">{errors.email}</p>}
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold mb-3 text-slate-400 tracking-widest uppercase">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-5 py-4 bg-white/5 border ${errors.phone ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
                                            } rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-4 transition-all duration-300`}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                    {errors.phone && <p className="mt-2 text-xs font-bold text-red-400 uppercase tracking-tighter">{errors.phone}</p>}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold mb-3 text-slate-400 tracking-widest uppercase">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full px-5 py-4 bg-white/5 border ${errors.message ? 'border-red-500/50 focus:ring-red-500/20' : 'border-white/10 focus:border-blue-500 focus:ring-blue-500/20'
                                            } rounded-2xl text-white placeholder-slate-600 focus:outline-none focus:ring-4 transition-all duration-300 resize-none`}
                                        placeholder="Tell us about your travel plans..."
                                    />
                                    {errors.message && <p className="mt-2 text-xs font-bold text-red-400 uppercase tracking-tighter">{errors.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl text-white font-black text-lg transition-all duration-500 shadow-xl ${isSubmitting
                                        ? 'opacity-70 cursor-not-allowed'
                                        : 'hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin h-6 w-6 mr-3 text-white" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending Message...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {[
                                { icon: '📧', title: 'Email Us', info: ['info@globalhopperstours.com', 'support@globalhopperstours.com'], color: 'text-blue-400' },
                                { icon: '📞', title: 'Call Us', info: ['+1 (800) 123-4567', '+1 (800) 765-4321'], note: 'Mon-Fri: 9AM - 6PM EST', color: 'text-indigo-400' },
                                { icon: '📍', title: 'Visit Us', info: ['123 Travel Avenue', 'New York, NY 10001', 'United States'], color: 'text-cyan-400' },
                                { icon: '⏰', title: 'Business Hours', info: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'], color: 'text-blue-400' }
                            ].map((card, idx) => (
                                <div key={idx} className="glass-card rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 group border-l-4 border-l-transparent hover:border-l-blue-500">
                                    <div className="flex items-start">
                                        <div className="text-5xl mr-6 group-hover:scale-110 transition-transform duration-500 transform group-hover:rotate-6">{card.icon}</div>
                                        <div>
                                            <h3 className={`text-xl font-black mb-3 ${card.color} tracking-tight uppercase`}>{card.title}</h3>
                                            {card.info.map((line, i) => (
                                                <p key={i} className="text-slate-300 font-light leading-relaxed">{line}</p>
                                            ))}
                                            {card.note && <p className="text-xs text-slate-500 mt-3 font-bold uppercase tracking-widest">{card.note}</p>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
