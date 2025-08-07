import { useState } from "react";
import { Footer } from "./components/footer";
import { ImageModal } from "./components/image-modal";
import { ContactSection } from "./components/sections/contact-section";
import { HeroSection } from "./components/sections/hero-section";
import { ProjectsSection } from "./components/sections/projects-section";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const [modalData, setModalData] = useState<{
    images: { src: string; alt: string }[];
    initialIndex: number;
  } | null>(null);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const openImageModal = (
    images: { src: string; alt: string }[],
    initialIndex: number
  ) => {
    setModalData({ images, initialIndex });
  };

  const closeImageModal = () => {
    setModalData(null);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <ImageModal
        isOpen={!!modalData}
        onClose={closeImageModal}
        images={modalData?.images || []}
        initialIndex={modalData?.initialIndex || 0}
      />

      <HeroSection onScrollToProjects={scrollToProjects} />
      <ProjectsSection onImageClick={openImageModal} />
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
