import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface InsightsSectionProps {
  title?: string;
  subtitle?: string;
  blogs?: Array<{
    id: string;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    fullContent?: string;
  }>;
  debug?: boolean;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  fullContent?: string;
}

const InsightsSectionDebug = ({
  title = "Financial Insights",
  subtitle = "Stay informed with our latest financial perspectives and market analyses",
  blogs = [
    {
      id: "1",
      title:
        "Unlocking Global Success: The Power of International Reach Without Compliance Headaches",
      excerpt:
        "In an era where borders are becoming less of a barrier to business, the ability to operate internationally with ease is a game-changer.",
      date: "March 12, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&q=80",
      fullContent: `In an era where borders are becoming less of a barrier to business, the ability to operate internationally with ease is a game-changer.`,
    },
    {
      id: "2",
      title: "Key Trends Transforming the Financial Services Sector in Canada",
      excerpt:
        "The financial services sector in Canada is undergoing a period of rapid transformation, driven by technological advancements and shifting consumer expectations.",
      date: "February 28, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      fullContent: `The financial services sector in Canada is undergoing a period of rapid transformation.`,
    },
    {
      id: "3",
      title:
        "Wealth Preservation Techniques for the Ultra-High-Net-Worth Individual (UHNWI)",
      excerpt:
        "In an era marked by economic volatility, geopolitical uncertainty, and rapid technological change, the preservation of wealth has become a paramount concern.",
      date: "February 14, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80",
      fullContent: `In an era marked by economic volatility, geopolitical uncertainty, and rapid technological change.`,
    },
    {
      id: "4",
      title:
        "The Rise of Cryptocurrency: A Paradigm Shift in Institutional Adoption",
      excerpt:
        "The financial landscape is undergoing a profound transformation as governments and regulators increasingly embrace cryptocurrencies.",
      date: "February 1, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
      fullContent: `The financial landscape is undergoing a profound transformation.`,
    },
    {
      id: "5",
      title: "The Future of Digital Finance for UHNWI & Global Citizen",
      excerpt:
        "The future of digital finance for ultra-high-net-worth individuals (UHNWIs) and global citizens is a rapidly evolving domain marked by transformative technological advancements.",
      date: "January 20, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
      fullContent: `The future of digital finance for ultra-high-net-worth individuals (UHNWIs) and global citizens is a rapidly evolving domain.`,
    },
    {
      id: "6",
      title: "Understanding the Money Service Business License in Canada",
      excerpt:
        "A Money Service Business (MSB) license is a cornerstone of regulatory oversight for businesses engaged in specific financial activities across Canada.",
      date: "January 10, 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80",
      fullContent: `A Money Service Business (MSB) license is a cornerstone of regulatory oversight for businesses engaged in specific financial activities across Canada.`,
    },
  ],
  debug = true,
}: InsightsSectionProps) => {
  console.log("Initial blogs length:", blogs.length);

  // Define state variables
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [visibleBlogs, setVisibleBlogs] = useState<BlogPost[]>(
    blogs.slice(0, 3),
  );
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [debugInfo, setDebugInfo] = useState({
    showAllBlogs: false,
    visibleBlogsCount: 3,
    totalBlogsCount: blogs.length,
  });

  // Ensure blogs are properly displayed when View All is clicked
  useEffect(() => {
    console.log("useEffect triggered, showAllBlogs:", showAllBlogs);
    console.log("Total blogs available:", blogs.length);

    if (showAllBlogs) {
      console.log("Setting all blogs, count:", blogs.length);
      setVisibleBlogs(blogs);
    } else {
      console.log("Setting initial 3 blogs");
      setVisibleBlogs(blogs.slice(0, 3));
    }

    setDebugInfo({
      showAllBlogs,
      visibleBlogsCount: showAllBlogs ? blogs.length : 3,
      totalBlogsCount: blogs.length,
    });
  }, [showAllBlogs, blogs]);

  // Function to truncate titles to ensure they're no more than 2 lines
  const truncateTitle = (title: string): string => {
    const words = title.split(" ");
    if (words.length <= 10) return title;

    // Find a good breaking point
    const firstPart = words.slice(0, Math.min(8, Math.floor(words.length / 2)));
    return `${firstPart.join(" ")}...`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleViewAllInsights = () => {
    console.log("View All Insights clicked");
    setShowAllBlogs(true);
    // The useEffect will handle updating visibleBlogs
  };

  const handleBlogClick = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setDialogOpen(true);
  };

  return (
    <section className="w-full py-24 bg-[#f8f9fa]" id="insights">
      <div className="container mx-auto px-4 md:px-8">
        {debug && (
          <div className="mb-8 p-4 bg-yellow-100 border border-yellow-400 rounded">
            <h3 className="font-bold text-lg mb-2">Debug Information:</h3>
            <ul className="list-disc pl-5">
              <li>
                showAllBlogs state: {debugInfo.showAllBlogs ? "true" : "false"}
              </li>
              <li>Visible blogs count: {visibleBlogs.length}</li>
              <li>Total blogs available: {debugInfo.totalBlogsCount}</li>
              <li>Expected visible blogs: {debugInfo.visibleBlogsCount}</li>
            </ul>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl font-bold text-[#0077be] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Proxima Nova', sans-serif" }}
          >
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full"
        >
          {visibleBlogs.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <BlogCard
                title={truncateTitle(blog.title)}
                excerpt={blog.excerpt}
                date={blog.date}
                imageUrl={blog.imageUrl}
                onClick={() => handleBlogClick(blog)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          {!showAllBlogs && (
            <button
              className="px-8 py-3 bg-[#0077be] text-white rounded hover:bg-[#005f9e] transition-colors duration-300 font-medium"
              onClick={handleViewAllInsights}
            >
              View All Insights ({blogs.length - visibleBlogs.length} more)
            </button>
          )}
        </motion.div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedBlog && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#2c3e50]">
                  {selectedBlog.title}
                </DialogTitle>
                <DialogDescription className="text-gray-500">
                  {selectedBlog.date}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 prose max-w-none">
                <div className="mb-6">
                  <img
                    src={selectedBlog.imageUrl.replace(
                      "w=800&q=80",
                      "w=1200&q=90",
                    )}
                    alt={selectedBlog.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                </div>
                {selectedBlog.fullContent
                  ?.split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InsightsSectionDebug;
