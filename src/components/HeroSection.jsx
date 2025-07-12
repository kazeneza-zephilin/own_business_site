import React, { useEffect } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
    useEffect(() => {
        // Hero animation
        const tl = gsap.timeline({ delay: 0.2 });

        tl.fromTo(
            ".hero-title",
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
        )
            .fromTo(
                ".hero-subtitle",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                "-=0.4"
            )
            .fromTo(
                ".hero-buttons",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                "-=0.3"
            )
            .fromTo(
                ".hero-rating",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
                "-=0.2"
            )
            .fromTo(
                ".hero-image",
                { x: 80, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            );
    }, []);

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToPortfolio = () => {
        const element = document.getElementById("portfolio");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="min-h-screen bg-gray-50 pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Smart Websites & Digital Solutions for Modern
                            Businesses
                        </h1>

                        <p className="hero-subtitle text-lg md:text-xl text-gray-600 leading-relaxed">
                            We're a focused 2-person team specializing in custom
                            websites, data-driven dashboards, and AI-powered web
                            applications. Direct communication, agile
                            development, and affordable rates.
                        </p>

                        {/* Quick Service Overview */}
                        <div className="hero-services grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                            <div className="flex items-center space-x-2 text-gray-700">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-sm font-medium">
                                    Web Design & Development
                                </span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-700">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-sm font-medium">
                                    Custom Dashboards
                                </span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-700">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-sm font-medium">
                                    AI Web Apps
                                </span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={scrollToContact}
                                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center group"
                            >
                                Let's Talk
                                <svg
                                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>

                            <button
                                onClick={scrollToPortfolio}
                                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                            >
                                Get a Quote
                            </button>
                        </div>

                        {/* Rating */}
                        <div className="hero-rating flex items-center space-x-4">
                            {/* Avatar Group */}
                            <div className="flex -space-x-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 border-2 border-white"></div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-2 border-white"></div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-500 border-2 border-white"></div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white"></div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 border-2 border-white"></div>
                            </div>

                            <div>
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-yellow-400 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-sm font-medium text-gray-900">
                                        4.9/5 rating
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Join 200+ satisfied clients
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="hero-image relative mt-8 lg:mt-0">
                        <div className="relative h-96 lg:h-[500px] bg-white rounded-2xl overflow-hidden shadow-2xl mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
                            {/* Dashboard Image */}
                            <img
                                src="/images/data-dashboard.jpg"
                                alt="Analytics Dashboard Interface"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay for better text contrast */}
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute inset-0 flex items-end justify-center p-8">
                                <div className="w-full h-32 bg-black/40 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                                    <div className="text-white text-center">
                                        <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-8 h-8"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-medium">
                                            Real Dashboard Preview
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
