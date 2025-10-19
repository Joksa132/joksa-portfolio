import { motion } from "motion/react";
import { Button } from "../ui/button";
import { StarsBackground } from "../stars-background";
import { TechSkills } from "../tech-skills";

export function HeroSection({
  onScrollToProjects,
}: {
  onScrollToProjects: () => void;
}) {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-4 py-6 bg-gradient-to-br from-black via-gray-950 to-gray-900 overflow-hidden relative">
      <StarsBackground />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-12 items-center z-20">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col gap-4 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold flex flex-col"
          >
            <span className="text-white">Hi, I'm </span>
            <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-1">
              <span className="text-white">Nikola</span>
              <motion.span
                className="w-fit bg-gradient-to-r from-blue-300 via-white to-blue-400 bg-clip-text text-transparent cursor-pointer"
                style={{
                  textShadow: "0 0 10px rgba(191, 219, 254, 0.3)",
                  filter: "drop-shadow(0 0 5px rgba(191, 219, 254, 0.2))",
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(191, 219, 254, 0.5)",
                  filter: "drop-shadow(0 0 10px rgba(191, 219, 254, 0.4))",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                'Joksa'
              </motion.span>
              <span className="text-white">Joksimovic</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-sm md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-sm mx-auto lg:mx-0">
              I am a Bachelor with Honours in Information Technologies,
              committed to continuous learning with a constant drive to improve
              my skills in Web Development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Button
              onClick={onScrollToProjects}
              size="lg"
              className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Check my projects
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="flex flex-col gap-4 mt-8 lg:mt-0"
        >
          <TechSkills />
        </motion.div>
      </div>
    </section>
  );
}
