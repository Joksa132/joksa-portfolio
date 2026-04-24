import { BentoCard } from "@/components/bento-grid";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";

export function AboutCard() {
  return (
    <BentoCard>
      <div className="flex flex-col h-full">
        <h2 className="text-lg font-semibold text-foreground mb-3">About</h2>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1">
          I hold a Bachelor's degree with Honours in Information Technologies and am
          committed to continuous learning, always striving to improve my skills in web development.
        </p>
        <motion.div
          whileHover={{ x: 3 }}
          className="flex items-center gap-1.5 mt-4 text-muted-foreground text-xs cursor-default"
        >
          <MapPin className="h-3.5 w-3.5" />
          <span>Serbia</span>
        </motion.div>
      </div>
    </BentoCard>
  );
}
