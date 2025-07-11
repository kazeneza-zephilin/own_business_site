import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <FAQSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
