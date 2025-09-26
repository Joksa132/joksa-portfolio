import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";

type Project = {
  id: number;
  name: string;
  description: string;
  tech: string[];
  images: {
    src: string;
    alt: string;
  }[];
  repository: string;
  livePreview: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  currentImageIndex: number;
  onNextImage: () => void;
  onPrevImage: () => void;
  onImageClick: (
    images: { src: string; alt: string }[],
    initialIndex: number
  ) => void;
};

export function ProjectCard({
  project,
  index,
  currentImageIndex,
  onNextImage,
  onPrevImage,
  onImageClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="grid lg:grid-cols-2 gap-8"
    >
      <div className="relative h-full">
        <div className="p-0 relative">
          <img
            src={project.images[currentImageIndex].src}
            alt={project.images[currentImageIndex].alt}
            className="w-full h-72 object-cover cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-lg"
            onClick={() => onImageClick(project.images, currentImageIndex)}
          />
          {project.images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={onPrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-950/70 hover:bg-blue-900/90 text-white border border-blue-700"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-950/70 hover:bg-blue-900/90 text-white border border-blue-700"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {project.images.map((_, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-200 ${
                      imgIndex === currentImageIndex
                        ? "bg-white shadow-lg shadow-blue-400/50"
                        : "bg-blue-800"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">{project.name}</h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-blue-950 text-white border border-blue-800"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <Button
          asChild
          className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
        >
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            View Repository
          </a>
        </Button>
        {project.livePreview !== "" && (
          <Button
            asChild
            className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <a
              href={project.livePreview}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Preview
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
