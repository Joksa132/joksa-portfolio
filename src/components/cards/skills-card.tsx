import { BentoCard } from "@/components/bento-grid";
import { techStack } from "@/lib/data";
import { motion } from "motion/react";

const moreTools = [
  "Tailwind CSS",
  "TanStack Query",
  "TanStack Router",
  "Drizzle ORM",
  "Prisma ORM",
  "Zod",
  "Better Auth",
  "Supabase",
  "WebSockets",
  "Power BI",
  "Git",
];

export function SkillsCard() {
  return (
    <BentoCard>
      <div className="flex flex-col h-full">
        <h2 className="text-lg font-semibold text-foreground mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary transition-colors group cursor-default"
              title={tech.name}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity dark:invert-[0.15] shrink-0"
              />
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
          <div
            className="flex items-center px-2.5 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
            title={moreTools.join(", ")}
          >
            <span className="text-xs text-muted-foreground">and more</span>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
