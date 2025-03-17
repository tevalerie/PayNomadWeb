import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import InsightsSection from "./InsightsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        companyName="PayNomad Capital Ltd."
        tagline="Empowering Your Finances"
        backgroundColorStart="#2c3e50"
        backgroundColorEnd="#0077be"
      />

      {/* About Section */}
      <AboutSection
        title="About PayNomad Capital Ltd."
        subtitle="Our Mission"
        description="PayNomad Capital Ltd. is a premier financial services provider specializing in innovative solutions for the modern global citizen. With decades of combined experience, our team of financial experts is dedicated to delivering exceptional service and personalized strategies to meet your unique financial needs."
        backgroundColor="#ffffff"
      />

      {/* Services Section */}
      <ServicesSection
        title="Our Services"
        description="Discover our comprehensive range of financial services designed to meet your unique needs."
      />

      {/* Insights Section */}
      <InsightsSection
        title="Financial Insights"
        subtitle="Stay informed with our latest financial perspectives and market analyses"
      />

      {/* Contact Section */}
      <ContactSection
        title="Get in Touch"
        subtitle="We're here to answer any questions about our financial services."
        backgroundColor="#faf4eb"
      />

      {/* Footer */}
      <Footer
        companyName="PayNomad Capital Ltd."
        companyAddress="810 Quayside Dr. Unit #205, New Westminister, British Columbia, V3M 6B9, Canada"
        companyPhone="+44 20 1234 5678"
        companyEmail="info@paynomadcapitalltd.ca"
      />
    </div>
  );
};

export default Home;
