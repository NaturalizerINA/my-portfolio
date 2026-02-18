"use client";

import { motion } from "framer-motion";
import GlitchText from "./GlitchText";

const projects = [
  {
    title: "Electronic Know Your Customer (eKYC)",
    description:
      "A web application to update and verify customer data at Mirae Asset using React JS",
    link: "https://kyc.miraeasset.co.id/",
  },
  {
    title: "Web Registration",
    description:
      "A web application by Mirae Asset Sekuritas Indonesia for Online Opening Accounts using React JS",
    link: "https://login.miraeasset.co.id/",
  },
  {
    title: "Document Management System",
    description:
      "A web application for managing the documents in internal Mirae Asset Sekuritas Indonesia like Internal Memo or Release Approval using React JS",
    link: "https://document.miraeasset.co.id/",
  },
];

export default function Projects() {
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

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-[#0e6b0e]/40"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(120,5%,55%)]">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#0e6b0e]/30 bg-[#0e6b0e]/10 px-4 py-2 text-sm font-medium text-[#0e6b0e] transition-colors hover:bg-[#0e6b0e]/20"
                >
                  View Project
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
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
