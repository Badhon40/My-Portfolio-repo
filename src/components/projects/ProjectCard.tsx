import { ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  tags: string[];
  description: string;
  img: string | StaticImageData;
  liveLink?: string;
  githubLink?: string;
  serverLink?: string;
}

export function ProjectCard({
  title,
  tags,
  description,
  img,
  liveLink,
  githubLink,
  serverLink,
}: ProjectCardProps) {
  return (
    <div className="min-h-[40vh] bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-2xl relative group overflow-hidden shadow-md hover:shadow-xl transition">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl h-52 mb-4">
        <Image
          src={img}
          alt={`Screenshot of ${title} project`}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-2">
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
            className="px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center gap-1 transition"
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
        {serverLink && (
          <Link
            href={serverLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center gap-1 transition"
          >
            <Github className="w-4 h-4" />
            Server Link
          </Link>
        )}
      </div>
    </div>
  );
}
