import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const articles = [
        {
            id: 1,
            title: "How We Built a Custom Dashboard with Next.js",
            excerpt:
                "A deep dive into the architecture and development process of creating a real-time analytics dashboard for a growing SaaS company.",
            category: "Development",
            readTime: "8 min read",
            date: "March 15, 2025",
            author: "Developer",
            image: "dashboard-tutorial",
        },
        {
            id: 2,
            title: "Top 5 AI Tools for Small Businesses",
            excerpt:
                "Discover the most effective AI tools that can automate workflows, improve customer service, and boost productivity.",
            category: "AI & Automation",
            readTime: "6 min read",
            date: "March 10, 2025",
            author: "Developer",
            image: "ai-tools",
        },
        {
            id: 3,
            title: "The Future of Web Design: Trends for 2025",
            excerpt:
                "Exploring the latest design trends including micro-animations, AI-driven personalization, and sustainable design practices.",
            category: "Design",
            readTime: "5 min read",
            date: "March 5, 2025",
            author: "Designer",
            image: "design-trends",
        },
        {
            id: 4,
            title: "Building Responsive E-commerce with Tailwind CSS",
            excerpt:
                "Step-by-step guide to creating a mobile-first e-commerce interface using Tailwind CSS utility classes.",
            category: "Development",
            readTime: "10 min read",
            date: "February 28, 2025",
            author: "Developer",
            image: "ecommerce-build",
        },
        {
            id: 5,
            title: "Implementing AI Chatbots: A Complete Guide",
            excerpt:
                "Learn how to integrate AI-powered chatbots into your website for improved customer service and lead generation.",
            category: "AI & Automation",
            readTime: "12 min read",
            date: "February 20, 2025",
            author: "Developer",
            image: "chatbot-guide",
        },
        {
            id: 6,
            title: "Performance Optimization for React Applications",
            excerpt:
                "Essential techniques for improving React app performance including code splitting, lazy loading, and efficient state management.",
            category: "Development",
            readTime: "9 min read",
            date: "February 15, 2025",
            author: "Developer",
            image: "react-performance",
        }
    ];

    const categories = ["All", "Development", "Design", "AI & Automation"];

    const filteredArticles =
        activeCategory === "All"
            ? articles
            : articles.filter((article) => article.category === activeCategory);

    const getArticleImage = (imageName) => {
        const imageClasses = {
            "dashboard-tutorial": "from-blue-400 to-indigo-600",
            "ai-tools": "from-purple-400 to-pink-600",
            "design-trends": "from-green-400 to-teal-600",
            "ecommerce-build": "from-orange-400 to-red-600",
            "chatbot-guide": "from-cyan-400 to-blue-600",
            "react-performance": "from-violet-400 to-purple-600"
        };
        return `bg-gradient-to-br ${imageClasses[imageName] || imageClasses["dashboard-tutorial"]}`;
    };

    useEffect(() => {
        // Blog section animations
        gsap.fromTo(
            ".blog-title",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".blog-title",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".blog-article",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".blog-grid",
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="blog-title text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        LATEST INSIGHTS
                    </p>
                    <h2 className="blog-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        From Our Blog
                    </h2>
                    <p className="blog-title mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Stay updated with the latest trends in web development,
                        design, and AI technology through our insights and
                        tutorials.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                                activeCategory === category
                                    ? "bg-gray-900 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 sm:mx-6 lg:mx-0">
                    {filteredArticles.map((article) => (
                        <article
                            key={article.id}
                            className="blog-article bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            {/* Article Image */}
                            <div
                                className={`relative h-48 ${getArticleImage(
                                    article.image
                                )} overflow-hidden`}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                                    <span className="text-sm font-medium text-gray-700">
                                        {article.category}
                                    </span>
                                </div>

                                {/* Read More Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        Read Article
                                    </button>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-6">
                                {/* Meta Info */}
                                <div className="flex items-center justify-between mb-3 text-sm text-gray-500">
                                    <span>{article.date}</span>
                                    <span>{article.readTime}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {article.excerpt}
                                </p>

                                {/* Author & Read More */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                                            {article.author[0]}
                                        </div>
                                        <span className="ml-2 text-sm text-gray-600">{article.author}</span>
                                    </div>
                                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center group/btn">
                                        Read More
                                        <svg
                                            className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Posts Button */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center px-8 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors group">
                        View All Posts
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
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
