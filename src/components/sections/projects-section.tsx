import { motion } from "motion/react";
import { ProjectCard } from "../project-card";
import { projects } from "@/lib/data";
import { useState } from "react";

export function ProjectsSection({
  onImageClick,
}: {
  onImageClick: (
    images: { src: string; alt: string }[],
    initialIndex: number
  ) => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent relative inline-block"
            style={{
              textShadow: "0 0 10px rgba(191, 219, 254, 0.3)",
              filter: "drop-shadow(0 0 5px rgba(191, 219, 254, 0.2))",
            }}
          >
            My Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              currentImageIndex={currentImageIndex[project.id] || 0}
              onNextImage={() => nextImage(project.id, project.images.length)}
              onPrevImage={() => prevImage(project.id, project.images.length)}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
