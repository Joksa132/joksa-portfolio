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
import honoIcon from "../assets/icons/honojs.svg";
import postgresqlIcon from "../assets/icons/postgresql.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import sqliteIcon from "../assets/icons/sqlite.svg";

export const techStack = [
  { name: "HTML", logo: htmlIcon },
  { name: "CSS", logo: cssIcon },
  { name: "JavaScript", logo: javascriptIcon },
  { name: "TypeScript", logo: typescriptIcon },
  { name: "React", logo: reactIcon },
  { name: "React Native", logo: reactIcon },
  { name: "Next.js", logo: nextjsIcon },
  { name: "Vite", logo: viteIcon },
  { name: "Expo", logo: expoIcon },
  { name: "Express", logo: expressIcon },
  { name: "Hono", logo: honoIcon },
  { name: "Electron", logo: electronIcon },
  { name: "Node.js", logo: nodejsIcon },
  { name: "PostgreSQL", logo: postgresqlIcon },
  { name: "MongoDB", logo: mongodbIcon },
  { name: "SQLite", logo: sqliteIcon },
];

export const projects = [
  {
    name: "Nutrition Track",
    description:
      "Mobile application built with React Native and Expo for monitoring daily nutritional intake, featuring a barcode scanner and dynamic daily nutritional allowances based on personal data.",
    tech: [
      "React Native",
      "Expo",
      "SQLite",
      "TanStack Query",
      "Zod",
      "OpenFoodFacts API",
    ],
    images: [
      {
        src: "/nutrition-track/nutrition-track-1.webp",
        alt: "Nutrition Track Image 1",
      },
      {
        src: "/nutrition-track/nutrition-track-2.webp",
        alt: "Nutrition Track Image 2",
      },
      {
        src: "/nutrition-track/nutrition-track-3.webp",
        alt: "Nutrition Track Image 3",
      },
      {
        src: "/nutrition-track/nutrition-track-4.webp",
        alt: "Nutrition Track Image 4",
      },
    ],
    repository: "https://github.com/joksa132/nutrition-track",
    livePreview: "",
  },
];
