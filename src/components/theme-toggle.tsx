import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
        <div className="h-8 w-8" />
        <div className="h-8 w-8" />
        <div className="h-8 w-8" />
      </div>
    );
  }

  const options = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
      {options.map(({ value, icon: Icon, label }) => (
        <motion.button
          key={value}
          onClick={() => setTheme(value)}
          className={`relative flex h-8 w-8 justify-center items-center rounded-full cursor-pointer transition-colors ${
            theme !== value ? "hover:bg-muted" : ""
          }`}
          aria-label={`Switch to ${label} theme`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {theme === value && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: "spring", duration: 0.3, bounce: 0.2 }}
            />
          )}
          <Icon
            className={`relative h-4 w-4 transition-colors ${
              theme === value
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }`}
          />
        </motion.button>
      ))}
    </div>
  );
}
