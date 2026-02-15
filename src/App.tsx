import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "@/components/theme-toggle";
import { BentoGrid } from "@/components/bento-grid";
import { AboutCard } from "@/components/cards/about-card";
import { SkillsCard } from "@/components/cards/skills-card";
import { ProjectCard } from "@/components/cards/project-card";
import { ContactCard } from "@/components/cards/contact-card";
import { LinksCard } from "@/components/cards/links-card";
import { ImageModal } from "@/components/image-modal";
import { projects } from "@/lib/data";
import { motion } from "motion/react";

const featuredProjects = projects.slice(0, 4);

function App() {
  const [modalImages, setModalImages] = useState<
    { src: string; alt: string }[] | null
  >(null);

  const openImageModal = (images: { src: string; alt: string }[]) => {
    setModalImages(images);
  };

  const closeImageModal = () => {
    setModalImages(null);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-[100dvh] bg-background text-foreground font-sans">
        <ImageModal
          isOpen={!!modalImages}
          onClose={closeImageModal}
          images={modalImages || []}
        />

        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-14 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="font-semibold text-lg">
                Joksa<span className="text-primary">.</span>
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </header>

        <main className="pt-14">
          <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  Hi, I'm{" "}
                  <span className="text-primary">Nikola Joksimovic</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Full-stack developer. Open to opportunities.
                </p>
              </motion.div>
            </div>
          </section>

          <BentoGrid>
            <AboutCard />
            <SkillsCard />
            <ProjectCard
              name={featuredProjects[0].name}
              description={featuredProjects[0].description}
              tech={featuredProjects[0].tech}
              image={featuredProjects[0].images[0].src}
              images={featuredProjects[0].images}
              repository={featuredProjects[0].repository}
              livePreview={featuredProjects[0].livePreview}
              onViewImages={openImageModal}
              delay={0.2}
              colSpan={2}
            />

            <ProjectCard
              name={featuredProjects[1].name}
              description={featuredProjects[1].description}
              tech={featuredProjects[1].tech}
              image={featuredProjects[1].images[0].src}
              images={featuredProjects[1].images}
              repository={featuredProjects[1].repository}
              livePreview={featuredProjects[1].livePreview}
              onViewImages={openImageModal}
              delay={0.25}
              colSpan={2}
            />
            <ProjectCard
              name={featuredProjects[2].name}
              description={featuredProjects[2].description}
              tech={featuredProjects[2].tech}
              image={featuredProjects[2].images[0].src}
              images={featuredProjects[2].images}
              repository={featuredProjects[2].repository}
              livePreview={featuredProjects[2].livePreview || undefined}
              onViewImages={openImageModal}
              delay={0.3}
              colSpan={2}
            />

            <ContactCard />
            <LinksCard />
          </BentoGrid>

          <footer className="py-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Nikola Joksimovic</p>
          </footer>
        </main>

        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
