import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  onClick?: () => void;
}

const ServiceCard = ({
  title = "Financial Service",
  description = "Comprehensive financial solutions tailored to your specific needs and goals.",
  icon,
  backgroundColor = "bg-[#2c3e50]",
  textColor = "text-white",
  onClick = () => {},
}: ServiceCardProps) => {
  return (
    <Card
      className={`w-full max-w-[320px] h-[400px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] ${backgroundColor} ${textColor}`}
    >
      <CardHeader className="pb-2">
        {icon && <div className="mb-4 text-4xl">{icon}</div>}
        <CardTitle className="text-xl font-semibold text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className={`${textColor} opacity-90`}>
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          variant="ghost"
          className={`${textColor} hover:bg-opacity-20 hover:bg-white p-0 flex items-center gap-2 group`}
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" });
            if (onClick) onClick();
          }}
        >
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
