import React from "react";
import ServiceCard from "./ServiceCard";
import { Bitcoin, RefreshCw, DollarSign, Banknote } from "lucide-react";

interface ServicesProps {
  title?: string;
  description?: string;
  services?: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const ServicesSection = ({
  title = "Our Services",
  description = "Discover our comprehensive range of financial services designed to meet your unique needs.",
  services = [
    {
      title: "Cryptocurrency",
      description:
        "Secure cryptocurrency & digital asset exchange with tailored investment solution options, expert guidance and market insights.",
      icon: <Bitcoin className="text-white" />,
    },
    {
      title: "Currency Exchange",
      description:
        "Competitive rates for all major currencies with fast, secure transactions and personalized service.",
      icon: <RefreshCw className="text-white" />,
    },
    {
      title: "Remittance Services",
      description:
        "Move your money where it matters. Efficient international money transfers with competitive fees and excellent exchange rates.",
      icon: <DollarSign className="text-white" />,
    },
    {
      title: "Money Services",
      description:
        "Comprehensive financial solutions with multi currency accounts and multiple payment options through our fast, proven, global payments infrastructure.",
      icon: <Banknote className="text-white" />,
    },
  ],
}: ServicesProps) => {
  return (
    <section id="services" className="py-24 bg-[#f8f9fa] w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-[#0077be] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "'Proxima Nova', sans-serif" }}
          >
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              backgroundColor="bg-[#2c3e50]"
              textColor="text-white"
              onClick={() => console.log(`${service.title} clicked`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
