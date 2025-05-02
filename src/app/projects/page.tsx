"use client";

import { projects } from "@/components/data";
import { ProjectCard } from "@/components/projects/ProjectCard";
import Link from "next/link";

const AllProjects = () => {
    return (
        <section className="w-full bg-[#000319] ">
            <div className="flex flex-col items-center min-h-screen  text-white max-w-7xl mx-auto px-4 py-12">
             <h2 className="text-4xl font-bold mb-4  text-center mt-20">My Projects</h2>
                    <p className="text-gray-400 mb-8 max-w-7xl  text-center">
                        Their versatility allows them to navigate through different components, databases, servers, APIs, and more.
                    </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                            <Link href={`/projects/${project.id}`} key={project.id}>
                                <ProjectCard
                                    title={project.title}
                                    tags={project.tags}
                                    description={project.description}
                                    img={project.image}
                                    liveLink={project.liveLink}
                                    githubLink={project.githubLink}
                                    serverLink={project.serverLink}
                                />
                            </Link>
                            ))} 
                         </div>  
            
        </div>
        </section>
    );
};

export default AllProjects;