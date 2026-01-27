import { BentoCard } from "@/components/bento-grid";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { motion } from "motion/react";

const links = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/joksa132",
    hoverClasses:
      "hover:bg-black hover:border-white dark:hover:bg-white dark:hover:text-black hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/nikola-joksimovic-dev/",
    hoverClasses:
      "hover:bg-blue-600 hover:border-white hover:text-white dark:hover:bg-blue-600",
  },
  {
    name: "Resume",
    icon: FileText,
    href: "/cv.pdf",
    hoverClasses:
      "hover:bg-primary hover:border-white hover:text-white dark:hover:bg-primary",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:nikolajoksimovic419@gmail.com",
    hoverClasses:
      "hover:bg-primary hover:border-white hover:text-white dark:hover:bg-primary",
  },
];

export function LinksCard() {
  return (
    <BentoCard delay={0.45} colSpan={2}>
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg font-semibold text-foreground mb-3"
      >
        Connect
      </motion.h2>
      <div className="grid grid-cols-2 gap-2">
        {links.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.05 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className={`h-12 w-full justify-start gap-3 transition-all ${link.hoverClasses}`}
              asChild
            >
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <link.icon className="h-4 w-4" />
                <span className="text-sm">{link.name}</span>
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
}
