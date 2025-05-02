import { projects } from "@/components/data";
import ProjectDetailCard from "@/components/projects/ProjectDetailCard";


interface PageProps {
  params : Promise<{
    id: string;
  }>;
}

const ProjectDetailPage =async ({ params }: PageProps) => {

  const PId = await params;
  

  const projectId =PId?.id ? parseInt(PId.id) : NaN;; // Convert the id to a number
  const project = projects.find((project) => project.id == projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="text-white px-4 py-12 bg-[#000319] ">
      <ProjectDetailCard project={project} />
    </section>
  );  



}

export default ProjectDetailPage;