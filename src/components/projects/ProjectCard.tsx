/* eslint-disable @next/next/no-img-element */
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  img: string;
  liveLink?: string;
  githubLink?: string;
}

export function ProjectCard({
  title,
  tags,
  description,
  img,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-2xl relative group overflow-hidden shadow-md backdrop-blur-lg hover:shadow-xl transition">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl h-52 mb-4">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
       
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
          >
           
          </Link>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap  gap-2 mb-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-1 bg-white/10 rounded-full text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title and Description */}
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-300 mb-3">{description}</p>

      {/* Buttons */}
      <div className="flex gap-2 mt-auto">
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-full  flex items-center gap-1  transition"
          >
            Live <ExternalLink className="w-4 h-4" />
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center gap-1 transition"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
        )}
      </div>
    </div>
  );
}
