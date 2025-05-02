import { projects } from "@/components/data";
import ProjectDetailCard from "@/components/projects/ProjectDetailCard";
import Link from "next/link";


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

      <div className="flex justify-center">
        <Link href="/projects" className="bg-purple-600 rounded-full px-4 py-2 text-center">
          Back to Projects
          
          </Link>
      </div>
    </section>
  );  



}

export default ProjectDetailPage;