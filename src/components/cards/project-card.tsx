import { BentoCard } from "@/components/bento-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Images } from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  image: string;
  images: { src: string; alt: string }[];
  repository: string;
  livePreview?: string;
  delay?: number;
  colSpan?: 1 | 2;
  onViewImages?: (images: { src: string; alt: string }[]) => void;
}

export function ProjectCard({
  name,
  description,
  tech,
  image,
  images,
  repository,
  livePreview,
  delay = 0,
  colSpan = 1,
  onViewImages,
}: ProjectCardProps) {
  return (
    <BentoCard delay={delay} colSpan={colSpan} className="group p-0">
      <div className="relative h-full flex flex-col">
        <motion.div
          className="relative h-36 overflow-hidden cursor-pointer"
          onClick={() => onViewImages?.(images)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.2 }}
              className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs hover:bg-background transition-colors"
            >
              <Images className="h-3 w-3" />
              <span>{images.length}</span>
            </motion.div>
          )}
        </motion.div>

        <div className="p-4 flex flex-col flex-1">
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.1 }}
            className="font-semibold text-foreground mb-1.5"
          >
            {name}
          </motion.h3>

          <div className="mb-3 flex-1 relative group/desc">
            <p className="text-xs text-muted-foreground line-clamp-2">
              {description}
            </p>
            <div className="absolute left-0 right-0 top-0 z-10 opacity-0 pointer-events-none group-hover/desc:opacity-100 group-hover/desc:pointer-events-auto transition-opacity duration-200">
              <p className="text-xs text-muted-foreground bg-card p-2 -m-2 rounded-md shadow-lg border border-border">
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {(() => {
              const maxVisible = colSpan === 1 ? 6 : 15;
              const visibleTech = tech.slice(0, maxVisible);
              const hiddenTech = tech.slice(maxVisible);
              const hasMore = hiddenTech.length > 0;

              return (
                <>
                  {visibleTech.map((t, index) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: delay + 0.15 + index * 0.02 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-[10px] px-1.5 py-0 h-5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {t}
                      </Badge>
                    </motion.div>
                  ))}
                  {hasMore && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: delay + 0.15 + visibleTech.length * 0.02,
                      }}
                      className="relative group/more"
                    >
                      <Badge
                        variant="outline"
                        className="text-[10px] px-1.5 py-0 h-5 cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      >
                        +{hiddenTech.length} more
                      </Badge>
                      <div className="absolute top-full left-0 z-20 opacity-0 pointer-events-none group-hover/more:opacity-100 group-hover/more:pointer-events-auto transition-opacity duration-200">
                        <div className="bg-popover border border-border rounded-md shadow-lg p-2 min-w-max">
                          <div className="flex flex-wrap gap-1 max-w-[180px]">
                            {hiddenTech.map((t) => (
                              <Badge
                                key={t}
                                variant="secondary"
                                className="text-[10px] px-1.5 py-0 h-5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                              >
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </>
              );
            })()}
          </div>

          <div className="flex gap-2">
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="sm"
                className="h-7 text-xs w-full hover:bg-primary hover:text-primary-foreground hover:border-primary dark:hover:bg-primary"
                asChild
              >
                <a href={repository} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                </a>
              </Button>
            </motion.div>
            {livePreview && (
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="sm"
                  className="h-7 text-xs w-full hover:brightness-110"
                  asChild
                >
                  <a
                    href={livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
