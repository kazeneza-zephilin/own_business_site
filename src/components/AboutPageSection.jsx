import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutPageSection = () => {
    const tools = [
        { name: "Figma", category: "Design" },
        { name: "React", category: "Development" },
        { name: "Next.js", category: "Development" },
        { name: "Tailwind CSS", category: "Development" },
        { name: "Node.js", category: "Backend" },
        { name: "Firebase", category: "Backend" },
        { name: "Adobe Creative Suite", category: "Design" },
        { name: "OpenAI API", category: "AI" },
    ];

    const values = [
        {
            title: "Collaboration",
            description:
                "We work closely with our clients, treating their success as our own and maintaining open communication throughout every project.",
            icon: (
                <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
            ),
        },
        {
            title: "Quality",
            description:
                "We never compromise on quality. Every line of code, every design element is crafted with precision and attention to detail.",
            icon: (
                <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
        },
        {
            title: "Speed",
            description:
                "Our lean team structure allows us to move fast without sacrificing quality. Quick decisions, rapid iterations, faster delivery.",
            icon: (
                <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
        },
    ];

    useEffect(() => {
        // About page animations
        gsap.fromTo(
            ".about-page-title",
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-page-title",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".team-member",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".team-grid",
                    start: "top 85%",
                },
            }
        );

        gsap.fromTo(
            ".value-item",
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out",
                stagger: 0.08,
                scrollTrigger: {
                    trigger: ".values-grid",
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <section id="about-page" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="about-page-title text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        ABOUT OUR TEAM
                    </p>
                    <h2 className="about-page-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Meet the Duo Behind Your Success
                    </h2>
                    <p className="about-page-title mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        We're a focused 2-person digital agency combining design
                        expertise with development prowess to deliver
                        exceptional digital solutions.
                    </p>
                </div>

                {/* Team Members */}
                <div className="team-grid grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Designer */}
                    <div className="team-member text-center">
                        <div className="relative mb-6">
                            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                                <div className="text-white">
                                    <svg
                                        className="w-20 h-20 mx-auto mb-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                    <p className="text-xl font-semibold">
                                        Designer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            The Design Expert
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Specializes in creating intuitive user experiences
                            and beautiful interfaces. Expert in user research,
                            wireframing, prototyping, and visual design systems.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">
                                Figma
                            </span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">
                                Adobe Creative Suite
                            </span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">
                                Principle
                            </span>
                            <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full">
                                InVision
                            </span>
                        </div>
                    </div>

                    {/* Developer */}
                    <div className="team-member text-center">
                        <div className="relative mb-6">
                            <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                                <div className="text-white">
                                    <svg
                                        className="w-20 h-20 mx-auto mb-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <p className="text-xl font-semibold">
                                        Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            The Technical Expert
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Full-stack developer with expertise in modern web
                            technologies and AI integration. Focuses on
                            performance, scalability, and delivering robust
                            digital solutions.
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                React
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                Next.js
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                Node.js
                            </span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                                Python
                            </span>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Our Values
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            These core principles guide everything we do and
                            shape how we work with our clients.
                        </p>
                    </div>

                    <div className="values-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="value-item text-center p-6"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center">
                                        {value.icon}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools We Use */}
                <div className="bg-gray-50 rounded-2xl p-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Tools We Use
                        </h3>
                        <p className="text-gray-600">
                            We stay current with the latest technologies to
                            deliver modern, efficient solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className="text-center p-4 bg-white rounded-lg"
                            >
                                <h5 className="font-semibold text-gray-900">
                                    {tool.name}
                                </h5>
                                <p className="text-sm text-gray-500">
                                    {tool.category}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPageSection;
