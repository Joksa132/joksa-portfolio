import { techStack } from "@/lib/data";
import { motion } from "motion/react";

export function TechSkills() {
  const centerTech = techStack.find((tech) => tech.isCenter);
  const orbitingTechs = techStack.filter((tech) => !tech.isCenter);

  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-2xl font-bold mb-6 text-center relative"
        style={{
          background: "linear-gradient(45deg, #e0e7ff, #bfdbfe, #e0e7ff)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0 0 20px rgba(147, 197, 253, 0.1)",
        }}
      >
        TECH STACK
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
      </motion.h3>

      <div className="relative w-[500px] h-[500px] mx-auto">
        {centerTech && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 15,
              transition: { duration: 0.2 },
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-700 to-purple-800 rounded-full shadow-2xl cursor-pointer border-2 border-purple-500 z-10"
            style={{
              width: "100px",
              height: "100px",
              boxShadow:
                "0 0 30px rgba(139, 92, 246, 0.6), 0 8px 32px rgba(0, 0, 0, 0.8)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-1">
              <img
                src={centerTech.logo}
                alt={`${centerTech.name} logo`}
                className="w-12 h-12 filter drop-shadow-lg"
              />
              <div className="text-white font-semibold text-xs text-center leading-tight">
                {centerTech.name}
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 45,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="relative w-full h-full"
        >
          {orbitingTechs.map((tech, index) => {
            const angle = (index * 360) / orbitingTechs.length;
            const radius = 180;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="absolute bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-full shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-400 hover:shadow-blue-500/20 group"
                style={{
                  left: `calc(50% + ${x}px - 35px)`,
                  top: `calc(50% + ${y}px - 35px)`,
                  width: "70px",
                  height: "70px",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 20px rgba(59, 130, 246, 0.2)",
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 45,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="flex flex-col items-center justify-center h-full gap-1"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
                  />
                  <div className="text-white font-medium text-xs text-center leading-tight px-1">
                    {tech.name}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Orbital Ring (Halo) */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full"
          style={{
            width: "360px",
            height: "360px",
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.2)",
          }}
        />
      </div>
    </div>
  );
}
