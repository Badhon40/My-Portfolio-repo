"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
    fetch("https://dev.to/api/articles?usernam=badhon") // 🔁 Replace with your dev.to username
      .then((res) => res.json())
      .then((data) => setBlogs(data.slice(0, 6))) // 👈 Limit to first 6 blogs
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <section className="py-10 px-6  text-gray-900 dark:text-white bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#0c0c1d] dark:to-[#0f172a]">
      <h2 className="text-4xl font-extrabold mb-10 text-center">Recent Tech Blogs</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <a
            key={blog.id}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#161b33] p-4 rounded-lg hover:shadow-lg transition"
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;
