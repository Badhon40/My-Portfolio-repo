import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";
import Link from "next/link";
import { Button } from '@/components/ui/button';




const ProjectSection = () => {
    return (
        <section id="project" className=" py-12 px-4 text-white">
          <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4  text-center">My Recent Projects</h2>
          <p className="text-gray-400 mb-8 max-w-7xl  text-center">
            Their versatility allows them to navigate through different components, databases, servers, APIs, and more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(0,3).map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    tags={project.tags}
                    description={project.description}
                    img={project.image}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                    serverLink={project.serverLink}
                />
                ))} 
             </div>  
           
          </div>
            <div className="flex justify-center mt-16">
            <Link href="/projects" >
             <Button className="px-4 py-1 text-lg z-50 bg-purple-600 hover:bg-purple-700 text-white rounded-full items-center gap-1 transition">See all projects</Button>
            </Link>
            </div>
        
      </section>

    )

};

export default ProjectSection;