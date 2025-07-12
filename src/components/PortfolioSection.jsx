import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
    const [activeFilter, setActiveFilter] = useState("All Projects");

    const filters = ["All Projects", "Websites", "Dashboards", "AI Solutions"];

    const projects = [
        {
            id: 1,
            title: "AI-Powered Analytics Dashboard",
            category: "Dashboards",
            client: "DataTech Solutions",
            description:
                "Custom business intelligence dashboard with real-time data visualization, predictive analytics, and automated reporting for a fast-growing SaaS company.",
            image: "dashboard",
            tags: ["React", "D3.js", "Node.js", "MongoDB"],
            outcome:
                "40% improvement in data-driven decision making, reduced reporting time by 60%",
        },
        {
            id: 2,
            title: "E-commerce Platform with AI Recommendations",
            category: "Websites",
            client: "RetailFlow",
            description:
                "Modern e-commerce platform featuring AI-powered product recommendations, advanced search, and seamless checkout experience.",
            image: "ecommerce",
            tags: ["Next.js", "Tailwind CSS", "OpenAI API", "Stripe"],
            outcome:
                "25% increase in conversion rate, 35% boost in average order value",
        },
        {
            id: 3,
            title: "Restaurant Management Suite",
            category: "AI Solutions",
            client: "Bistro Chain",
            description:
                "Complete restaurant management system with AI chatbot for orders, inventory prediction, and customer service automation.",
            image: "restaurant",
            tags: ["React", "Firebase", "OpenAI", "Twilio"],
            outcome:
                "50% reduction in order errors, 30% improvement in customer satisfaction",
        },
    ];

    const filteredProjects =
        activeFilter === "All Projects"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    useEffect(() => {
        // Portfolio section animations
        gsap.fromTo(
            ".portfolio-title",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".portfolio-title",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".portfolio-filter",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out",
                stagger: 0.06,
                scrollTrigger: {
                    trigger: ".portfolio-filters",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".project-card",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".projects-grid",
                    start: "top 85%",
                },
            }
        );
    }, []);

    const getProjectImage = (imageType) => {
        const imageStyles = {
            ecommerce: "bg-gradient-to-br from-purple-500 to-pink-500",
            analytics: "bg-gradient-to-br from-blue-500 to-cyan-500",
            fitness: "bg-gradient-to-br from-green-500 to-emerald-500",
            chatbot: "bg-gradient-to-br from-orange-500 to-red-500",
            corporate: "bg-gradient-to-br from-gray-600 to-gray-800",
            inventory: "bg-gradient-to-br from-indigo-500 to-purple-600",
        };

        return (
            imageStyles[imageType] ||
            "bg-gradient-to-br from-gray-400 to-gray-600"
        );
    };

    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="portfolio-title text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        OUR PORTFOLIO
                    </p>
                    <h2 className="portfolio-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Recent Projects
                    </h2>
                    <p className="portfolio-title mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our latest work and see how we've helped
                        businesses achieve their digital goals.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="portfolio-filters flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`portfolio-filter px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                activeFilter === filter
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div
                                className={`relative h-48 ${getProjectImage(
                                    project.image
                                )} overflow-hidden`}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                                {/* Project Type Icon */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                                    <span className="text-sm font-medium text-gray-700">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Project
                                    </button>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500">
                                        {project.client}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Outcome */}
                                {project.outcome && (
                                    <div className="mb-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                                        <p className="text-sm text-green-800 font-medium">
                                            <span className="text-green-600">
                                                Outcome:
                                            </span>{" "}
                                            {project.outcome}
                                        </p>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                        Tech Stack:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center px-8 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors group">
                        View All Projects
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
