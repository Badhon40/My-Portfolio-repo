import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";





const ProjectSection = () => {
    return (
        <section id="project" className=" py-12 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4  text-center">My Recent Projects</h2>
          <p className="text-gray-400 mb-8 max-w-7xl  text-center">
            Their versatility allows them to navigate through different components, databases, servers, APIs, and more.
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
                    serverLink={project.serverLink}
                />
                ))} 
             </div>  
           
          </div>
        
      </section>

    )

};

export default ProjectSection;