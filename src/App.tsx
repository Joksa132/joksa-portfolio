import { Footer } from "./components/footer";
import { ContactSection } from "./components/sections/contact-section";
import { HeroSection } from "./components/sections/hero-section";
import { ProjectsSection } from "./components/sections/projects-section";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection onScrollToProjects={scrollToProjects} />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
