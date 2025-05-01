'use client';

import { projects } from '../../../components/data/index';
import { ProjectCard } from '@/components/projects/ProjectCard';


export default function ProjectsPage() {
  return (
    <main className="px-6 py-30 bg-[#000319] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          All Projects
        </h1>
        <p className="text-center text-neutral-300 max-w-2xl mx-auto mb-12">
          A collection of my recent works showcasing UI/UX design, full-stack development, API integration, and more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <ProjectCard
                     key={project.id}
                    title={project.title}
                    tags={project.tags}
                    description={project.description}
                    img={project.image}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                />
            ))} 
        </div>  
        </div>
    </main>
  );
}
