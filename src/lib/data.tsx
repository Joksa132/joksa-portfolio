import javascriptIcon from "../assets/icons/javascript.svg";
import htmlIcon from "../assets/icons/html5.svg";
import cssIcon from "../assets/icons/css3.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import reactIcon from "../assets/icons/react.svg";
import nextjsIcon from "../assets/icons/nextjs.svg";
import expoIcon from "../assets/icons/expo.svg";
import electronIcon from "../assets/icons/electron.svg";
import expressIcon from "../assets/icons/express.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import viteIcon from "../assets/icons/vite.svg";

export const techStack = [
  { name: "JavaScript", logo: javascriptIcon, isCenter: true },
  { name: "HTML", logo: htmlIcon, isCenter: false },
  { name: "CSS", logo: cssIcon, isCenter: false },
  { name: "TypeScript", logo: typescriptIcon, isCenter: false },
  { name: "React", logo: reactIcon, isCenter: false },
  { name: "React Native", logo: reactIcon, isCenter: false },
  { name: "Next.js", logo: nextjsIcon, isCenter: false },
  { name: "Expo", logo: expoIcon, isCenter: false },
  { name: "Vite", logo: viteIcon, isCenter: false },
  { name: "Electron", logo: electronIcon, isCenter: false },
  { name: "Express", logo: expressIcon, isCenter: false },
  { name: "Node.js", logo: nodejsIcon, isCenter: false },
];

export const projects = [
  {
    id: 1,
    name: "The Outfit Aura",
    description:
      "Full-stack e-commerce web application with AI-powered product recommendations, dynamic product pages, and user authentication.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Auth.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Vercel AI SDK",
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    repository: "https://github.com/joksa132/the-outfit-aura",
  },
  {
    id: 2,
    name: "Nutrition-Track",
    description:
      "A mobile application built with React Native and Expo for monitoring daily nutritional intake, featuring a barcode scanner and dynamic daily nutritional allowances based on personal data.",
    tech: [
      "React Native",
      "Expo",
      "SQLite",
      "TanStack Query",
      "Zod",
      "OpenFoodFacts API",
    ],
    images: [
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
      "/placeholder.svg",
    ],
    repository: "https://github.com/joksa132/nutrition-track",
  },
];
