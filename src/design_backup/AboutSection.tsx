import React from "react";
import { Separator } from "./ui/separator";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  values?: Array<{ title: string; description: string }>;
  backgroundColor?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = "About PayNomad Capital Ltd.",
  subtitle = "Our Mission",
  description = "PayNomad Capital Ltd. is a premier financial services provider specializing in innovative solutions for the modern global citizen. With decades of combined experience, our team of financial experts is dedicated to delivering exceptional service and personalized strategies to meet your unique financial needs.",
  values = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service, ensuring the highest standards of quality and professionalism.",
    },
    {
      title: "Integrity",
      description:
        "We operate with unwavering integrity, maintaining transparency and ethical practices in all our dealings.",
    },
    {
      title: "Innovation",
      description:
        "We embrace innovation, constantly seeking new solutions to enhance our services and meet evolving financial needs.",
    },
    {
      title: "Client-Centric",
      description:
        "We place our clients at the center of everything we do, tailoring our services to meet their specific requirements and goals.",
    },
  ],
  backgroundColor = "#f8f9fa",
}) => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
            {title}
          </h2>
          <Separator className="w-24 h-1 bg-[#0077be] mx-auto mb-8" />
          <h3 className="text-xl md:text-2xl font-semibold text-[#2c3e50] mb-6">
            {subtitle}
          </h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <h4 className="text-xl font-semibold text-[#2c3e50] mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
