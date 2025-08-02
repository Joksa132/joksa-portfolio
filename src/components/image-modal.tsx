import { AnimatePresence, motion } from "motion/react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
};

export function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  alt,
}: ImageModalProps) {
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
            <img
              src={imageSrc}
              alt={alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
