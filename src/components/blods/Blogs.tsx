"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Blog = {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  cover_image: string | null;
};

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?usernam=badhon") // Replace with your dev.to username
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 6)))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section id="blogs" className="py-10 px-6 text-white">
      <h2 className="text-4xl font-extrabold mb-5 text-center">Recent Tech Blogs</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        I love sharing my knowledge and experiences through writing. Here are some of my recent blogs.
      </p>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {blogs.map((blog) => (
          <motion.a
            key={blog.id}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#161b33] p-4 rounded-lg hover:shadow-lg transition"
            variants={cardVariants}
          >
            {blog.cover_image && (
              <Image
                width={400}
                height={200}
                src={blog.cover_image}
                alt={blog.title}
                className="rounded mb-4 h-40 w-full object-cover"
              />
            )}
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-400 text-sm mt-2">
              {new Date(blog.published_at).toLocaleDateString()}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default RecentBlogs;
