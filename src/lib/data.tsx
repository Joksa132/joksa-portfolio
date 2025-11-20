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
      "Full-stack e-commerce web application built with Next.js with AI-powered product recommendations, dynamic product pages, product filtering, and user authentication.",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "Supabase",
      "Auth.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Vercel AI SDK",
    ],
    images: [
      {
        src: "/the-outfit-aura/the-outfit-aura-1.png",
        alt: "The Outfit Aura Image 1",
      },
      {
        src: "/the-outfit-aura/the-outfit-aura-2.png",
        alt: "The Outfit Aura Image 2",
      },
      {
        src: "/the-outfit-aura/the-outfit-aura-3.png",
        alt: "The Outfit Aura Image 3",
      },
      {
        src: "/the-outfit-aura/the-outfit-aura-4.png",
        alt: "The Outfit Aura Image 4",
      },
    ],
    repository: "https://github.com/joksa132/the-outfit-aura",
    livePreview: "https://the-outfit-aura.vercel.app/",
  },
  {
    id: 2,
    name: "Note Board",
    description:
      "A full-stack sticky notes web app built with Vite, React, and TypeScript. Features draggable and resizable markdown notes, folder organization, Supabase authentication, and Vercel Serverless API.",
    tech: [
      "TypeScript",
      "React",
      "Vite",
      "TanStack Router",
      "TanStack Query",
      "Supabase",
      "Vercel Serverless Functions",
      "Tailwind CSS",
      "Shadcn/ui",
      "React Markdown",
      "Pragmatic Drag and Drop",
    ],
    images: [
      {
        src: "/note-board/note-board-1.png",
        alt: "Note Board Image 1",
      },
      {
        src: "/note-board/note-board-2.png",
        alt: "Note Board Image 2",
      },
      {
        src: "/note-board/note-board-3.png",
        alt: "Note Board Image 3",
      },
      {
        src: "/note-board/note-board-4.png",
        alt: "Note Board Image 4",
      },
    ],
    repository: "https://github.com/joksa132/note-board",
    livePreview: "https://note-board-joksa132.vercel.app/",
  },
  {
    id: 3,
    name: "Nutrition Track",
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
      {
        src: "/nutrition-track/nutrition-track-1.jpg",
        alt: "Nutrition Track Image 1",
      },
      {
        src: "/nutrition-track/nutrition-track-2.jpg",
        alt: "Nutrition Track Image 2",
      },
      {
        src: "/nutrition-track/nutrition-track-3.jpg",
        alt: "Nutrition Track Image 3",
      },
      {
        src: "/nutrition-track/nutrition-track-4.jpg",
        alt: "Nutrition Track Image 4",
      },
    ],
    repository: "https://github.com/joksa132/nutrition-track",
    livePreview: "",
  },
  {
    id: 4,
    name: "Link Sharing App",
    description:
      "Full-stack web app built with React and Next.js designed for users to customize and share their personal links.",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "NextAuth.js",
      "Zod",
      "Tailwind CSS",
    ],
    images: [
      {
        src: "/older-projects/link-sharing-app.png",
        alt: "Link Sharing App Image",
      },
    ],
    repository: "https://github.com/Joksa132/link-sharing-app",
    livePreview: "",
  },
  {
    id: 5,
    name: "To Do List",
    description:
      "Full-stack web app built with React and Next.js designed for users to manage tasks and organize them into lists.",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Prisma ORM",
      "NextAuth.js",
    ],
    images: [
      { src: "/older-projects/to-do-list.png", alt: "To Do List Image" },
    ],
    repository: "https://github.com/Joksa132/todo-list",
    livePreview: "",
  },
  {
    id: 6,
    name: "Markdown Playground",
    description:
      "Interactive web-based markdown editor that allows users to write markdown syntax and instantly preview the rendered output.",
    tech: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    images: [
      {
        src: "/older-projects/markdown-playground.png",
        alt: "Markdown Playground Image",
      },
    ],
    repository: "https://github.com/Joksa132/markdown-playground",
    livePreview: "",
  },
];
