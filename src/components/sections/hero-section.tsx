import { motion } from "motion/react";
import { Button } from "../ui/button";
import { StarsBackground } from "../stars-background";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-6 bg-gradient-to-br from-black via-gray-950 to-gray-900 overflow-hidden relative">
      <StarsBackground />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-20">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-5xl lg:text-7xl font-bold"
          >
            <span className="text-white">Hi, I'm </span>
            <motion.span
              className="bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent cursor-pointer"
              style={{
                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
                filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.2))",
              }}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              Joksa
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Check my projects
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 300, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            I am a Bachelor with Honours in Information Technologies, committed
            to continuous learning with a constant drive to improve my skills in
            Web Development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
