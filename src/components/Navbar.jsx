import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Animate navbar on load
        gsap.fromTo(
            ".navbar",
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
                isScrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="text-2xl font-bold text-gray-900">
                            DigitalDuo
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        {" "}
                        <div className="ml-10 flex items-baseline space-x-8">
                            <button
                                onClick={() => scrollToSection("home")}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection("services")}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => scrollToSection("portfolio")}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={() => scrollToSection("about-page")}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection("blog")}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Blog
                            </button>
                            <button
                                onClick={() => scrollToSection("contact")}
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
                            >
                                Contact
                            </button>
                        </div>
                    </div>

                    {/* Get Started Button */}
                    <div className="hidden md:block">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="text-gray-700 hover:text-gray-900"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                            <button
                                onClick={() => {
                                    scrollToSection("home");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-base font-medium w-full text-left"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => {
                                    scrollToSection("services");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-base font-medium w-full text-left"
                            >
                                Services
                            </button>
                            <button
                                onClick={() => {
                                    scrollToSection("portfolio");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-base font-medium w-full text-left"
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={() => {
                                    scrollToSection("about-page");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-base font-medium w-full text-left"
                            >
                                About
                            </button>
                            <button
                                onClick={() => {
                                    scrollToSection("blog");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-base font-medium w-full text-left"
                            >
                                Blog
                            </button>
                            <button
                                onClick={() => {
                                    scrollToSection("contact");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block px-3 py-2 text-gray-700 hover:text-gray-900 text-base font-medium w-full text-left"
                            >
                                Contact
                            </button>
                            <button
                                onClick={() => {
                                    scrollToSection("contact");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="block w-full mt-4 bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
