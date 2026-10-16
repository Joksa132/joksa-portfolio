import { BentoCard } from "@/components/bento-grid";
import { MapPin } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  "Built a full-stack VB.NET web app used by 15 government institutions to submit and manage investment project data, stored in SQL Server.",
  "Built a VB.NET web app that generates dynamic 20-sheet Excel workbooks varying by month and quarter, replacing a multi-hour weekly manual process.",
  "Took over an inherited VB.NET codebase and wrote roughly 90% of the functionality added since, refactoring existing code along the way.",
  "Designed Power BI dashboards with DAX, Power Query, row-level security and scheduled refresh, used by government officials and now partly public.",
  "Built an Electron desktop app that automates official form generation and printing.",
];

export function ExperienceCard() {
  return (
    <BentoCard colSpan={4}>
      <div className="flex flex-col h-full">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Software Developer
            </h2>
            <p className="text-sm text-muted-foreground">
              Statistical Office of the Republic of Serbia
            </p>
          </div>
          <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs text-muted-foreground">
            <span>May 2024 – Present</span>
            <motion.div
              whileHover={{ x: 3 }}
              className="flex items-center gap-1.5 cursor-default"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span>Serbia</span>
            </motion.div>
          </div>
        </div>

        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed marker:text-primary">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </BentoCard>
  );
}
