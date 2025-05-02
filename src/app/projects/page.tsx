"use client";

import { projects } from "@/components/data";
import Image from "next/image";
import Link from "next/link";

const AllProjects = () => {
  return (
    <section className="w-full bg-[#000319] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 mt-10">My Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Their versatility allows them to navigate through different components, databases, servers, APIs, and more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="bg-[#111827] hover:bg-[#1f2937] min-h-96 transition rounded-xl overflow-hidden shadow-lg cursor-pointer group">
                <Image
                    width={200}
                    height={200}
                    priority={true}
                  src={project.image.src}
                  alt={project.title}
                  className="w-full h-46 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                    
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-purple-600 text-white text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
