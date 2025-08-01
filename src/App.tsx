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
      <Toaster
        theme="dark"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "bg-gradient-to-br from-gray-950 to-blue-950 text-white rounded-lg shadow-lg border border-blue-900 flex items-center px-4 py-3 gap-2",
            title: "text-white font-semibold text-lg",
            description: "text-gray-400",
            icon: "text-blue-400",
          },
        }}
      />
    </div>
  );
}

export default App;
