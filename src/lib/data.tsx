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
  { name: "CSS", logo: cssIcon, isCenter: false },
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
    id: 1,
    name: "HyperDocs",
    description:
      "Full-stack collaborative document editor built with React and Hono featuring real-time collaboration, AI-powered document summarization, rich text editing, and document sharing with role-based access control.",
    tech: [
      "TypeScript",
      "React",
      "Vite",
      "TanStack Router",
      "TanStack Query",
      "Hono",
      "Tiptap",
      "HocusPocus",
      "Yjs",
      "Drizzle ORM",
      "PostgreSQL",
      "Better Auth",
      "OpenAI API",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    images: [
      {
        src: "/hyper-docs/hyper-docs-1.webp",
        alt: "HyperDocs Image 1",
      },
      {
        src: "/hyper-docs/hyper-docs-2.webp",
        alt: "HyperDocs Image 2",
      },
      {
        src: "/hyper-docs/hyper-docs-3.webp",
        alt: "HyperDocs Image 3",
      },
      {
        src: "/hyper-docs/hyper-docs-4.webp",
        alt: "HyperDocs Image 4",
      },
    ],
    repository: "https://github.com/joksa132/hyper-docs",
    livePreview: "https://hyper-docs-joksa132.vercel.app/",
  },
  {
    id: 2,
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
        src: "/the-outfit-aura/the-outfit-aura-1.webp",
        alt: "The Outfit Aura Image 1",
      },
      {
        src: "/the-outfit-aura/the-outfit-aura-2.webp",
        alt: "The Outfit Aura Image 2",
      },
      {
        src: "/the-outfit-aura/the-outfit-aura-3.webp",
        alt: "The Outfit Aura Image 3",
      },
      {
        src: "/the-outfit-aura/the-outfit-aura-4.webp",
        alt: "The Outfit Aura Image 4",
      },
    ],
    repository: "https://github.com/joksa132/the-outfit-aura",
    livePreview: "https://the-outfit-aura.vercel.app/",
  },
  {
    id: 3,
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
  {
    id: 4,
    name: "Note Board",
    description:
      "Full-stack sticky notes web app built with Vite, React, and TypeScript. Features draggable and resizable markdown notes, folder organization, Supabase authentication, and Vercel Serverless API.",
    tech: [
      "TypeScript",
      "React",
      "Vite",
      "TanStack Router",
      "TanStack Query",
      "Supabase",
      "Serverless Functions",
      "React Markdown",
      "Pragmatic DnD",
      "Tailwind CSS",
      "Shadcn/ui",
    ],
    images: [
      {
        src: "/note-board/note-board-1.webp",
        alt: "Note Board Image 1",
      },
      {
        src: "/note-board/note-board-2.webp",
        alt: "Note Board Image 2",
      },
      {
        src: "/note-board/note-board-3.webp",
        alt: "Note Board Image 3",
      },
      {
        src: "/note-board/note-board-4.webp",
        alt: "Note Board Image 4",
      },
    ],
    repository: "https://github.com/joksa132/note-board",
    livePreview: "https://note-board-joksa132.vercel.app/",
  },
];
