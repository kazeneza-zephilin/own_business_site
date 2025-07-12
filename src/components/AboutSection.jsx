import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    useEffect(() => {
        // About section animations
        gsap.fromTo(
            ".about-title",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-title",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".about-content",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-content",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".about-image",
            { x: -40, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-image",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".feature-item",
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out",
                stagger: 0.08,
                scrollTrigger: {
                    trigger: ".features-grid",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".stat-item",
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.4)",
                stagger: 0.08,
                scrollTrigger: {
                    trigger: ".stats-grid",
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="about-title text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        WHY WORK WITH US
                    </p>
                    <h2 className="about-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Your Agile Digital Partners
                    </h2>
                    <p className="about-content mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We're a focused 2-person team that delivers high-quality
                        digital solutions with direct communication, fast
                        turnaround, and affordable rates.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Image */}
                    <div className="about-image relative">
                        <div className="relative h-80 lg:h-96 bg-gray-100 rounded-2xl overflow-hidden mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
                            {/* Placeholder for laptop/workspace image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white rounded-lg shadow-lg p-8 transform -rotate-12">
                                    <div className="w-48 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4"></div>
                                    <div className="space-y-2">
                                        <div className="h-2 bg-gray-200 rounded"></div>
                                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                                    </div>
                                </div>
                                <div className="absolute top-8 right-8 w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center">
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="about-content space-y-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Why Choose Our Team
                        </h3>

                        <p className="text-gray-600 leading-relaxed">
                            As a lean 2-person agency, we offer the perfect
                            balance of expertise and agility. You'll work
                            directly with the people building your project - no
                            middlemen, no miscommunication, just results.
                        </p>

                        {/* Features Grid */}
                        <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="feature-item flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-green-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Direct Communication
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Work directly with your developer &
                                        designer
                                    </p>
                                </div>
                            </div>

                            <div className="feature-item flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-green-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Agile Development
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Fast iterations and quick decision
                                        making
                                    </p>
                                </div>
                            </div>

                            <div className="feature-item flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-green-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Affordable Rates
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Premium quality without agency overhead
                                    </p>
                                </div>
                            </div>

                            <div className="feature-item flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-green-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Quality Focus
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Every project gets our full attention
                                    </p>
                                </div>
                            </div>

                            <div className="feature-item flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-green-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Modern Tech Stack
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        React, Next.js, Tailwind, and latest
                                        tools
                                    </p>
                                </div>
                            </div>

                            <div className="feature-item flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-green-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        Cutting-edge technologies and
                                        methodologies
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="stat-item">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            200+
                        </div>
                        <div className="text-sm text-gray-600">
                            Happy Clients
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            500+
                        </div>
                        <div className="text-sm text-gray-600">
                            Projects Completed
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            10+
                        </div>
                        <div className="text-sm text-gray-600">
                            Years Experience
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            24/7
                        </div>
                        <div className="text-sm text-gray-600">Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
