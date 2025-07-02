"use client";

import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

const ProjectSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="project" className="py-12 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          My Recent Projects
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-8 max-w-7xl text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Their versatility allows them to navigate through different components, databases, servers, APIs, and more.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard
                title={project.title}
                tags={project.tags}
                description={project.description}
                img={project.image}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
                serverLink={project.serverLink}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center mt-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Link href="/projects">
          <Button className="px-4 py-1 text-lg z-50 bg-purple-600 hover:bg-purple-700 text-white rounded-full items-center gap-1 transition">
            See all projects
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
