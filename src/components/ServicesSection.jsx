import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const [activeService, setActiveService] = useState("Website Development");

    const services = [
        {
            id: "website",
            title: "Website Development",
            icon: "🌐",
            description:
                "Custom-built websites that are fast, responsive, and optimized for search engines.",
            features: [
                "Business websites",
                "Landing pages",
                "SEO optimization",
                "E-commerce solutions",
                "Content management systems",
                "Responsive design",
            ],
        },
        {
            id: "dashboard",
            title: "Dashboard Solutions",
            icon: "📊",
            description:
                "Real-time analytics dashboards with customizable reports and data visualization.",
            features: [
                "Real-time analytics",
                "Custom dashboards",
                "Data visualization",
                "Performance metrics",
                "User management",
                "API integrations",
            ],
        },
        {
            id: "mobile",
            title: "App Development",
            icon: "📱",
            description:
                "Cross-platform mobile applications for tracking workouts, nutrition, and health metrics.",
            features: [
                "iOS and Android",
                "Cross-platform development",
                "Native performance",
                "Push notifications",
                "Offline functionality",
                "App store deployment",
            ],
        },
        {
            id: "ai",
            title: "AI Solutions",
            icon: "⭐",
            description:
                "AI-powered solutions including chatbots, automation, and intelligent data processing.",
            features: [
                "Machine learning models",
                "Natural language processing",
                "Computer vision",
                "Predictive analytics",
                "Automation workflows",
                "Custom AI integrations",
            ],
        },
    ];

    useEffect(() => {
        // Services section animations
        gsap.fromTo(
            ".services-title",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".services-title",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".service-tab",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out",
                stagger: 0.06,
                scrollTrigger: {
                    trigger: ".services-tabs",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".service-content",
            { x: 40, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".service-content",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".service-image",
            { x: -40, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".service-image",
                    start: "top 85%",
                },
            }
        );
    }, []);

    const activeServiceData = services.find(
        (service) => service.title === activeService
    );

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="services-title text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        OUR SERVICES
                    </p>
                    <h2 className="services-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Solutions We Offer
                    </h2>
                    <p className="services-title mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Comprehensive digital solutions tailored to your
                        business needs and goals.
                    </p>
                </div>

                {/* Service Tabs */}
                <div className="services-tabs flex flex-wrap justify-center gap-4 mb-12">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service.title)}
                            className={`service-tab px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                activeService === service.title
                                    ? "bg-gray-900 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <span className="mr-2">{service.icon}</span>
                            {service.title}
                        </button>
                    ))}
                </div>

                {/* Service Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="service-content space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            {activeServiceData.title}
                        </h3>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            {activeServiceData.description}
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {activeServiceData.features.map(
                                (feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3"
                                    >
                                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-green-600"
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
                                        <span className="text-gray-700">
                                            {feature}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="service-image relative">
                        <div className="relative h-80 lg:h-96 bg-white rounded-2xl overflow-hidden shadow-xl">
                            {/* City/Infrastructure themed image placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>

                            {/* Overlay content representing the service */}
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="text-center text-white">
                                    <div className="text-6xl mb-4">
                                        {activeServiceData.icon}
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 bg-white/30 rounded-full w-full"></div>
                                        <div className="h-2 bg-white/30 rounded-full w-3/4 mx-auto"></div>
                                        <div className="h-2 bg-white/30 rounded-full w-1/2 mx-auto"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                            <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm"></div>
                            <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
