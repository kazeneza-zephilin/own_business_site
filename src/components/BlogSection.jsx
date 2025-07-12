import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
    const articles = [
        {
            id: 1,
            title: "How We Built a Custom Dashboard with Next.js",
            excerpt:
                "A deep dive into the architecture and development process of creating a real-time analytics dashboard for a growing SaaS company.",
            category: "Development",
            readTime: "8 min read",
            date: "Dec 15, 2024",
            author: "Development Team",
            image: "dashboard-blog",
            tags: ["Next.js", "React", "Dashboard", "Analytics"],
        },
        {
            id: 2,
            title: "Top 5 AI Tools for Small Businesses",
            excerpt:
                "Discover the most effective AI tools that can streamline operations, improve customer service, and boost productivity for small businesses.",
            category: "AI Solutions",
            readTime: "6 min read",
            date: "Dec 10, 2024",
            author: "AI Specialist",
            image: "ai-tools-blog",
            tags: ["AI", "Business", "Productivity", "Automation"],
        },
        {
            id: 3,
            title: "The Future of Web Design: Trends for 2025",
            excerpt:
                "Explore upcoming design trends, from AI-assisted design to micro-interactions, that will shape the web design landscape in 2025.",
            category: "Design",
            readTime: "5 min read",
            date: "Dec 5, 2024",
            author: "Design Team",
            image: "design-trends-blog",
            tags: ["Design", "Trends", "UI/UX", "2025"],
        },
        {
            id: 4,
            title: "Building Responsive E-commerce with Tailwind CSS",
            excerpt:
                "Learn how to create a modern, responsive e-commerce platform using Tailwind CSS and best practices for mobile-first design.",
            category: "Development",
            readTime: "10 min read",
            date: "Nov 28, 2024",
            author: "Development Team",
            image: "ecommerce-blog",
            tags: ["Tailwind CSS", "E-commerce", "Responsive", "CSS"],
        },
        {
            id: 5,
            title: "Implementing AI Chatbots: A Complete Guide",
            excerpt:
                "Step-by-step guide to integrating AI chatbots into your website, from planning to deployment and optimization.",
            category: "AI Solutions",
            readTime: "12 min read",
            date: "Nov 20, 2024",
            author: "AI Specialist",
            image: "chatbot-blog",
            tags: ["Chatbot", "AI", "Customer Service", "Integration"],
        },
        {
            id: 6,
            title: "Performance Optimization for React Applications",
            excerpt:
                "Essential techniques and best practices for optimizing React app performance, from code splitting to lazy loading.",
            category: "Development",
            readTime: "9 min read",
            date: "Nov 15, 2024",
            author: "Development Team",
            image: "react-performance-blog",
            tags: ["React", "Performance", "Optimization", "JavaScript"],
        },
    ];

    const categories = ["All", "Development", "Design", "AI Solutions"];
    const [activeCategory, setActiveCategory] = React.useState("All");

    const filteredArticles =
        activeCategory === "All"
            ? articles
            : articles.filter((article) => article.category === activeCategory);

    const getArticleImage = (imageName) => {
        const imageClasses = {
            "dashboard-blog": "bg-gradient-to-br from-blue-400 to-indigo-600",
            "ai-tools-blog": "bg-gradient-to-br from-purple-400 to-pink-600",
            "design-trends-blog":
                "bg-gradient-to-br from-green-400 to-blue-500",
            "ecommerce-blog": "bg-gradient-to-br from-yellow-400 to-orange-500",
            "chatbot-blog": "bg-gradient-to-br from-indigo-400 to-purple-600",
            "react-performance-blog":
                "bg-gradient-to-br from-red-400 to-pink-500",
        };
        return (
            imageClasses[imageName] ||
            "bg-gradient-to-br from-gray-400 to-gray-600"
        );
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
        <section id="blog" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="blog-title text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        INSIGHTS & EXPERTISE
                    </p>
                    <h2 className="blog-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Our Blog
                    </h2>
                    <p className="blog-title mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Tips, insights, and tutorials from our development and
                        design experience.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                                activeCategory === category
                                    ? "bg-gray-900 text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 sm:mx-6 lg:mx-8 xl:mx-12 2xl:mx-16">
                    {filteredArticles.map((article) => (
                        <article
                            key={article.id}
                            className="blog-article bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                        >
                            {/* Article Image */}
                            <div
                                className={`relative h-48 ${getArticleImage(
                                    article.image
                                )}`}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                                    <span className="text-sm font-medium text-gray-700">
                                        {article.category}
                                    </span>
                                </div>

                                {/* Read Time */}
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
                                    <span className="text-sm text-white">
                                        {article.readTime}
                                    </span>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <span>{article.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{article.author}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                                    {article.title}
                                </h3>

                                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                    {article.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags
                                        .slice(0, 3)
                                        .map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                </div>

                                {/* Read More Link */}
                                <button className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors group">
                                    Read More
                                    <svg
                                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                        </article>
                    ))}
                </div>

                {/* View All Articles Button */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center px-8 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors group">
                        View All Articles
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

export default BlogSection;
