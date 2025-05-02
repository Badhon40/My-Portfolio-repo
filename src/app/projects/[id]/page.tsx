import { projects } from "@/components/data";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

type ProjectDetailProps = {
  params: { id: string };
};

const ProjectDetail = ({ params }: ProjectDetailProps) => {
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound(); // Automatically show 404 if project is not found
  }

  return (
    <section className="min-h-screen text-white bg-[#000319] px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-20 bg-gray-900 p-6 rounded-lg shadow-lg">
        {/* Left Side: Image */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <Image 
            src={project.image} 
            alt={project.title} 
            className="rounded-xl w-full h-auto shadow-lg transition-transform duration-300 transform hover:scale-105"
            width={500} // Adjust width as needed
            height={600} // Adjust height as needed 
          />
        </div>

        {/* Right Side: Project Details */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-300 mb-6">{project.description}</p>

          <h2 className="text-2xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside mb-6 text-gray-300">
            {project.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-2">Working Procedure</h2>
          <p className="text-gray-300 mb-6">{project.workingProcedure}</p>

          <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <a href={project.liveLink} target="_blank" className="px-3 py-1 text-sm md:text-lg bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center gap-1 transition">
                Live Site <ExternalLink className="w-4 h-4" />
            </a>
            <a href={project.githubLink} target="_blank" className="px-3 py-1 text-sm md:text-lg bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center gap-1 transition">Frontend Code
                <Github className="w-4 h-4" />
            </a>
            {project.serverLink && (
              <a href={project.serverLink} target="_blank" className="px-3 py-1 text-sm md:text-lg bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center gap-1 transition">Backend Code
              <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
