import { AnimatePresence, motion } from "motion/react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string }[];
  initialIndex: number;
};

export function ImageModal({
  isOpen,
  onClose,
  images,
  initialIndex,
}: ImageModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentImageIndex(initialIndex);
  }, [initialIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentImageIndex];
  const hasMultipleImages = images.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="relative max-w-full max-h-[95vh] w-fit flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="absolute -top-8 right-0 text-white hover:text-gray-300 hover:bg-white/10 z-10"
            >
              <X className="h-6 w-6" />
            </Button>
            {hasMultipleImages && (
              <>
                <Button
                  onClick={handlePrev}
                  variant="ghost"
                  className="absolute -left-15 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white hover:text-gray-300 hover:bg-white/40"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  onClick={handleNext}
                  variant="ghost"
                  className="absolute -right-15 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white hover:text-gray-300 hover:bg-white/40"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </>
            )}
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
