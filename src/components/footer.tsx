import { FileText, Github } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-4">
        <div className="flex space-x-6">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-gray-400 hover:text-white hover:bg-gray-900"
          >
            <a
              href="https://github.com/joksa132"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-gray-400 hover:text-white hover:bg-gray-900"
          >
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="h-5 w-5 mr-2" />
              CV
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
