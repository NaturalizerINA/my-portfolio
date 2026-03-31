"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlitchText from "./GlitchText";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ZoomIn, ZoomOut, RotateCcw, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Electronic Know Your Customer (eKYC)",
    description:
      "A web application to update and verify customer data at Mirae Asset using React JS",
    link: "https://kyc.miraeasset.co.id/",
    image: "/project1-ekyc.webp",
  },
  {
    title: "Web Registration",
    description:
      "A web application by Mirae Asset Sekuritas Indonesia for Online Opening Accounts using React JS",
    link: "https://login.miraeasset.co.id/",
    image: "/project2-web-registration.webp",
  },
  {
    title: "Document Management System",
    description:
      "A web application for managing the documents in internal Mirae Asset Sekuritas Indonesia like Internal Memo or Release Approval using React JS",
    link: "https://document.miraeasset.co.id/",
    image: "/project3-dms.webp",
  },
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const handleReset = () => setScale(1);

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <GlitchText
            text="Projects"
            as="h2"
            className="text-3xl font-bold md:text-4xl"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-[#0e6b0e]/40 hover:shadow-[0_0_20px_-5px_rgba(14,107,14,0.2)]"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div
                  className="group/img relative h-48 w-full shrink-0 cursor-zoom-in overflow-hidden md:h-auto md:w-72 lg:w-96"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover/img:opacity-100 flex items-center justify-center">
                    <Maximize2 className="text-white w-8 h-8 drop-shadow-lg" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden" />
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-[#0e6b0e]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[hsl(120,5%,55%)]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="rounded-full bg-[#0e6b0e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#0e6b0e]">
                        React
                      </span>
                      <span className="rounded-full bg-[#0e6b0e]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#0e6b0e]">
                        Finance
                      </span>
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#0e6b0e]/30 bg-[#0e6b0e]/10 px-4 py-2 text-sm font-medium text-[#0e6b0e] transition-all hover:bg-[#0e6b0e]/20 group-hover:border-[#0e6b0e]/50"
                    >
                      View Live
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Zoom Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedImage(null);
            setScale(1);
          }
        }}
      >
        <DialogContent className="max-w-[90vw] md:max-w-4xl lg:max-w-5xl overflow-hidden glass p-0 border-[#0e6b0e]/20">
          <DialogHeader className="absolute top-4 left-4 z-10 p-0">
            <DialogTitle className="sr-only">Project Image Preview</DialogTitle>
          </DialogHeader>

          <div className="relative flex flex-col items-center justify-center min-h-[50vh] max-h-[85vh] p-4 pt-12">
            {/* Zoom Tools */}
            <div className="absolute top-4 right-12 flex gap-2 z-20">
              <Button
                variant="outline"
                size="icon"
                onClick={handleZoomOut}
                className="rounded-full bg-background/50 backdrop-blur-sm border-[#0e6b0e]/20 hover:bg-[#0e6b0e]/10"
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleReset}
                className="rounded-full bg-background/50 backdrop-blur-sm border-[#0e6b0e]/20 hover:bg-[#0e6b0e]/10 text-xs font-mono"
              >
                {Math.round(scale * 100)}%
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleZoomIn}
                className="rounded-full bg-background/50 backdrop-blur-sm border-[#0e6b0e]/20 hover:bg-[#0e6b0e]/10"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleReset}
                className="rounded-full bg-background/50 backdrop-blur-sm border-[#0e6b0e]/20 hover:bg-[#0e6b0e]/10"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            {/* Image Container */}
            <div className="w-full h-full overflow-hidden flex items-center justify-center custom-scrollbar">
              {selectedImage && (
                <motion.div
                  drag={scale > 1}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.1}
                  animate={{ scale }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative w-full h-full aspect-video md:aspect-[16/9] cursor-grab active:cursor-grabbing"
                >
                  <Image
                    src={selectedImage}
                    alt="Project preview"
                    fill
                    className="object-contain pointer-events-none"
                    priority
                  />
                </motion.div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
