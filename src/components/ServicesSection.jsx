import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(
        "Website Design & Development"
    );

    const services = [
        {
            id: "website",
            title: "Website Design & Development",
            icon: (isActive) => (
                <svg
                    className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-gray-700"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                </svg>
            ),
            description:
                "Custom websites and web applications built with modern technologies. From landing pages to complex e-commerce platforms.",
            features: [
                "Responsive web design",
                "E-commerce solutions",
                "SEO optimization",
                "Content management",
                "Performance optimization",
                "Mobile-first approach",
            ],
            techStack: "React, Next.js, Tailwind CSS, Node.js",
        },
        {
            id: "dashboard",
            title: "Custom Dashboards",
            icon: (isActive) => (
                <svg
                    className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-gray-700"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                </svg>
            ),
            description:
                "Data-driven dashboards and business intelligence tools that help you make informed decisions with real-time insights.",
            features: [
                "Real-time analytics",
                "Custom data visualization",
                "Business intelligence",
                "KPI tracking",
                "API integrations",
                "User management",
            ],
            techStack: "React, D3.js, Chart.js, Firebase, REST APIs",
        },
        {
            id: "ai",
            title: "AI Web Applications",
            icon: (isActive) => (
                <svg
                    className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-gray-700"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                </svg>
            ),
            description:
                "AI-powered web applications including chatbots, workflow automation, and intelligent data processing solutions.",
            features: [
                "AI chatbots",
                "Workflow automation",
                "Natural language processing",
                "Predictive analytics",
                "Machine learning integration",
                "Process optimization",
            ],
            techStack: "OpenAI API, TensorFlow, Python, Node.js, WebSockets",
        },
        {
            id: "uiux",
            title: "UI/UX Design",
            icon: (isActive) => (
                <svg
                    className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-gray-700"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                </svg>
            ),
            description:
                "User-centered design that combines beautiful aesthetics with intuitive functionality to create exceptional user experiences.",
            features: [
                "User research & personas",
                "Wireframing & prototyping",
                "Visual design systems",
                "Usability testing",
                "Brand identity",
                "Design system creation",
            ],
            techStack: "Figma, Adobe Creative Suite, Principle, InVision",
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
                            className={`service-tab px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                                activeService === service.title
                                    ? "bg-gray-900 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {service.icon(activeService === service.title)}
                            {service.title}
                        </button>
                    ))}
                </div>

                {/* Service Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="service-content space-y-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                                {activeServiceData.icon(true)}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                {activeServiceData.title}
                            </h3>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            {activeServiceData.description}
                        </p>

                        {/* Tech Stack */}
                        {activeServiceData.techStack && (
                            <div className="bg-gray-50 rounded-lg p-4">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    Tech Stack:
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {activeServiceData.techStack}
                                </p>
                            </div>
                        )}

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
                                    <div className="mb-4 flex items-center justify-center">
                                        {activeServiceData.icon(true)}
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
