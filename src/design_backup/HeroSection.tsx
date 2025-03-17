import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface HeroSectionProps {
  companyName?: string;
  tagline?: string;
  backgroundColorStart?: string;
  backgroundColorEnd?: string;
}

const HeroSection = ({
  companyName = "PayNomad Capital Ltd.",
  tagline = "Empowering Your Finances",
  backgroundColorStart = "#2c3e50",
  backgroundColorEnd = "#0077be",
}: HeroSectionProps) => {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const gradientStyle = {
    background: `linear-gradient(135deg, ${backgroundColorStart} ${gradientPosition}%, ${backgroundColorEnd} ${gradientPosition + 50}%, ${backgroundColorStart} ${gradientPosition + 100}%)`,
    backgroundSize: "200% 200%",
  };

  return (
    <section
      className="relative w-full h-[800px] flex items-center justify-center overflow-hidden bg-navy-900"
      style={gradientStyle}
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {companyName}
        </h1>

        <p
          className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-10"
          style={{ fontFamily: "'Proxima Nova', sans-serif" }}
        >
          {tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-[#2c3e50] hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors"
            onClick={() => {
              const servicesSection = document.querySelector("#services");
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{
              fontFamily: "'Proxima Nova', sans-serif",
              fontWeight: 600,
            }}
          >
            Our Services
          </button>
          <button
            className="bg-[#6b96c3] border border-white text-white hover:bg-[#5a85b2] px-8 py-3 rounded-md font-medium transition-colors"
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{
              fontFamily: "'Proxima Nova', sans-serif",
              fontWeight: 600,
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => {
          const nextSection = document.querySelector("#about");
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
