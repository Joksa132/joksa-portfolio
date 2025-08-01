import { HeroSection } from "./components/sections/hero-section";
import { ProjectsSection } from "./components/sections/projects-section";

function App() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection onScrollToProjects={scrollToProjects} />
      <ProjectsSection />
    </div>
  );
}

export default App;
