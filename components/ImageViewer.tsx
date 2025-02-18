import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ZoomIn } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProjectImageViewerProps {
  src: StaticImageData; // StaticImageData type from Next.js
  alt: string;
}

const ProjectImageViewer: React.FC<ProjectImageViewerProps> = ({ 
  src, 
  alt,
}) => {
  return (
    <Dialog>
      <DialogTitle></DialogTitle>
      <DialogTrigger asChild>
        <div className="group relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden cursor-zoom-in">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
          />
          {/* Overlay with zoom icon */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <ZoomIn className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 border-lightSky/20 bg-bodyColor">
        <div className="relative w-full h-full min-h-[80vh]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
            priority
            quality={100}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectImageViewer;