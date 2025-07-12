import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "CEO, DataTech Solutions",
            company: "DataTech Solutions",
            content:
                "The analytics dashboard they built transformed how we handle data. The team's attention to detail and direct communication made the entire process smooth. We saw immediate improvements in our decision-making speed.",
            avatar: "SC",
            rating: 5,
        },
        {
            id: 2,
            name: "Michael Rodriguez",
            role: "Founder, RetailFlow",
            company: "RetailFlow",
            content:
                "Working with this 2-person team was refreshing. No bureaucracy, just results. They delivered our e-commerce platform ahead of schedule and the AI recommendations have significantly boosted our sales.",
            avatar: "MR",
            rating: 5,
        },
        {
            id: 3,
            name: "Emily Johnson",
            role: "Operations Manager, Bistro Chain",
            company: "Bistro Chain",
            content:
                "The restaurant management system with AI chatbot has been a game-changer. Customer satisfaction improved dramatically, and we've reduced operational costs. Highly recommend their expertise.",
            avatar: "EJ",
            rating: 5,
        },
    ];

    useEffect(() => {
        // Testimonials section animations
        gsap.fromTo(
            ".testimonials-title",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testimonials-title",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".testimonial-card",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".testimonials-grid",
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="testimonials-title text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        CLIENT TESTIMONIALS
                    </p>
                    <h2 className="testimonials-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        What Our Clients Say
                    </h2>
                    <p className="testimonials-title mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Real feedback from businesses we've helped grow with our
                        digital solutions.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Stars */}
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Content */}
                            <blockquote className="text-gray-700 leading-relaxed mb-6">
                                "{testimonial.content}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="testimonial-stat">
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                50+
                            </div>
                            <p className="text-gray-600">Projects Completed</p>
                        </div>
                        <div className="testimonial-stat">
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                100%
                            </div>
                            <p className="text-gray-600">Client Satisfaction</p>
                        </div>
                        <div className="testimonial-stat">
                            <div className="text-3xl font-bold text-gray-900 mb-2">
                                2-4 weeks
                            </div>
                            <p className="text-gray-600">
                                Average Delivery Time
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
