// src/app/projects/[id]/page.tsx

import { projects } from "@/components/data";
import ProjectDetailCard from "@/components/projects/ProjectDetailCard";

import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

// ✅ This function must be `async`, even if you're not using await inside
export default async function ProjectPage({ params }: PageProps) {
  // ✅ Convert the route param to number
  const id = Number(params.id);

  // ✅ Find the project from static data
  const project = projects.find((p) => p.id === id);

  // ✅ If not found, trigger 404
  if (!project) {
    notFound();
  }

  return (
    <section className="w-full bg-[#000319]">
      
      <div className="p-8 max-w-7xl mx-auto">
        
        <ProjectDetailCard project={project} />
      
      </div>
      
    </section>
  );
}
