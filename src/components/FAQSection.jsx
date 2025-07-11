import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "What is your development process like?",
            answer: "Our development process follows a proven methodology that includes discovery, planning, design, development, testing, and deployment. We maintain transparent communication throughout each phase and provide regular updates on progress. We also involve our clients in key decision points to ensure the final product meets their expectations.",
        },
        {
            id: 2,
            question: "How long does it typically take to complete a project?",
            answer: "Project timelines vary depending on scope and complexity. A simple website typically takes 4-6 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase and keep you updated on progress throughout the development process.",
        },
        {
            id: 3,
            question:
                "Do you provide ongoing support after the project is completed?",
            answer: "Yes, we offer comprehensive ongoing support and maintenance packages. This includes regular updates, security patches, performance monitoring, and technical support. We believe in building long-term relationships with our clients and ensuring their digital solutions continue to perform optimally.",
        },
        {
            id: 4,
            question: "How do you handle project pricing?",
            answer: "We provide transparent, fixed-price quotes based on detailed project requirements. Our pricing includes all development work, testing, and initial setup. We don't believe in hidden fees or surprise charges. For ongoing projects, we can also work with monthly retainers or hourly rates.",
        },
        {
            id: 5,
            question: "What technologies do you specialize in?",
            answer: "We specialize in modern web technologies including React, Node.js, Python, and cloud platforms like AWS and Google Cloud. We also have expertise in mobile development (React Native, Flutter), AI/ML technologies, and various databases. We choose the best technology stack for each specific project.",
        },
        {
            id: 6,
            question:
                "Can you help with an existing project that needs improvements?",
            answer: "Absolutely! We frequently work on existing projects that need updates, improvements, or modernization. We start with a comprehensive audit of the current system, identify areas for improvement, and create a roadmap for enhancements. Whether it's performance optimization, new features, or complete redesigns, we can help.",
        },
    ];

    useEffect(() => {
        // FAQ section animations
        gsap.fromTo(
            ".faq-title",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".faq-title",
                    start: "top 80%",
                },
            }
        );

        gsap.fromTo(
            ".faq-item",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".faq-list",
                    start: "top 80%",
                },
            }
        );

        gsap.fromTo(
            ".faq-cta",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".faq-cta",
                    start: "top 80%",
                },
            }
        );
    }, []);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="faq" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="faq-title text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        FAQ
                    </p>
                    <h2 className="faq-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="faq-title mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Find answers to common questions about our services and
                        process.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="faq-list space-y-4 mb-16">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="faq-item bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                                        openFAQ === faq.id ? "rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openFAQ === faq.id
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0"
                                }`}
                            >
                                <div className="px-6 pb-5">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="faq-cta text-center bg-white rounded-2xl p-8 shadow-lg">
                    <div className="max-w-md mx-auto">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg
                                className="w-8 h-8 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                            Still have questions?
                        </h3>

                        <p className="text-gray-600 mb-6">
                            Can't find the answer you're looking for? Please
                            contact our support team.
                        </p>

                        <button
                            onClick={scrollToContact}
                            className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                        >
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
