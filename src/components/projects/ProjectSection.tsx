import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";
import Link from "next/link";




const ProjectSection = () => {
    return (
        <section id="project" className="px-6 py-12  text-white">
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
                />
                ))} 
             </div>  


           <div className="flex justify-center mt-8">
           <Link href="/projects" className="flex justify-center  mt-8">
             <button className="bg-purple-800 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition font-medium"> 
                See All </button> 
             </Link>
           </div>
           
          </div>
        
      </section>

    )

};

export default ProjectSection;