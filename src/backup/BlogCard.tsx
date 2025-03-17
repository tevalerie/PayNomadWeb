import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl?: string;
  onClick?: () => void;
}

const BlogCard = ({
  title = "The Future of Digital Finance",
  excerpt = "Explore how blockchain technology and digital currencies are reshaping the financial landscape for ultra-high net worth individuals.",
  date = "May 15, 2023",
  imageUrl = "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&q=80",
  onClick = () => console.log("Blog card clicked"),
}: BlogCardProps) => {
  return (
    <Card
      className="w-full max-w-[380px] h-[320px] overflow-hidden flex flex-col bg-[#2c3e50] text-white hover:shadow-lg transition-shadow duration-300 cursor-pointer !important"
      onClick={onClick}
      style={{ backgroundColor: "#2c3e50" }}
    >
      {imageUrl && (
        <div className="h-32 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-[#ffffff] line-clamp-1">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-300 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2 border-t border-gray-700">
        <div className="flex items-center text-xs text-gray-300">
          <CalendarIcon className="mr-1 h-3 w-3" />
          <span>{date}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-white hover:text-[#0077be] hover:bg-transparent"
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
