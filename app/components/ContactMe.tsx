"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import GlitchText from "./GlitchText";

function ThreadsIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C61.0348 134.955 76.2443 147.256 94.2798 147.256C108.825 147.256 119.783 140.063 124.629 127.469C128.537 134.821 134.846 139.957 143.766 142.302C151.782 144.41 161.73 143.149 168.049 137.497C175.761 130.597 178.694 119.516 177.304 102.433C175.603 81.5208 165.733 65.0442 149.626 53.0784C135.539 42.6121 117.438 36.9557 97.2208 36.9557C73.4939 36.9557 53.6496 44.5772 38.3516 59.5422C23.0039 74.558 14.7797 94.6192 14.7797 117.009C14.7797 139.398 23.0039 159.46 38.3516 174.475C53.6496 189.44 73.4939 197.062 97.2208 197.062C117.202 197.062 135.253 191.492 149.336 181.189L139.965 168.016C128.026 176.753 113.145 181.328 97.2208 181.328C77.9866 181.328 61.9168 175.143 49.5218 163.023C37.0781 150.854 30.513 134.617 30.513 117.009C30.513 99.4001 37.0781 83.1633 49.5218 70.9945C61.9168 58.8741 77.9866 52.6891 97.2208 52.6891C113.791 52.6891 128.371 57.2559 139.73 65.6881C152.628 75.2631 160.36 88.4751 161.644 104.708C162.778 119.034 160.322 127.352 156.402 130.86C153.284 133.651 147.288 135.088 140.063 133.187C132.88 131.298 127.771 126.177 124.629 117.654C122.92 113.016 122.188 107.018 122.448 99.8282C122.613 95.421 122.378 91.8028 121.737 88.9719C128.461 92.0125 134.61 95.8347 139.965 100.413L149.336 87.2396C147.012 85.5398 144.385 84.1165 141.537 88.9883ZM97.6698 131.523C85.5779 131.523 75.6429 123.633 75.0506 111.905C74.4583 100.177 83.4287 97.4576 96.6432 97.4576C104.382 97.4576 111.455 98.4239 117.433 100.279C116.326 120.407 108.791 131.523 97.6698 131.523Z" />
    </svg>
  );
}

function MediumIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

export default function ContactMe() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <GlitchText
            text="Contact Me"
            as="h2"
            className="text-3xl font-bold md:text-4xl"
          />
        </motion.div>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#0e6b0e]/30 bg-[#0e6b0e]/10">
              <Mail size={20} className="text-[#0e6b0e]" />
            </div>
            <a
              href="mailto:rahmad.mukminullah@gmail.com"
              className="text-sm text-[hsl(120,5%,70%)] transition-colors hover:text-[#0e6b0e] md:text-base"
            >
              rahmad.mukminullah@gmail.com
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-[#0e6b0e]/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#0e6b0e]/30 bg-[#0e6b0e]/10">
              <Linkedin size={20} className="text-[#0e6b0e]" />
            </div>
            <a
              href="https://www.linkedin.com/in/mukminullah/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[hsl(120,5%,70%)] transition-colors hover:text-[#0e6b0e] md:text-base"
            >
              Rahmad Setiawan M
            </a>
          </motion.div>

          {/* Github */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-[#0e6b0e]/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#0e6b0e]/30 bg-[#0e6b0e]/10">
              <Github size={20} className="text-[#0e6b0e]" />
            </div>
            <a
              href="https://github.com/NaturalizerINA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[hsl(120,5%,70%)] transition-colors hover:text-[#0e6b0e] md:text-base"
            >
              NaturalizerINA
            </a>
          </motion.div>

          {/* Threads */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-[#0e6b0e]/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#0e6b0e]/30 bg-[#0e6b0e]/10">
              <ThreadsIcon size={20} className="text-[#0e6b0e]" />
            </div>
            <a
              href="https://www.threads.net/@rahmadsm_art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[hsl(120,5%,70%)] transition-colors hover:text-[#0e6b0e] md:text-base"
            >
              @rahmadsm_art
            </a>
          </motion.div>

          {/* Medium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-[#0e6b0e]/40"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#0e6b0e]/30 bg-[#0e6b0e]/10">
              <MediumIcon size={20} className="text-[#0e6b0e]" />
            </div>
            <a
              href="https://medium.com/@rahmad-mukminullah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[hsl(120,5%,70%)] transition-colors hover:text-[#0e6b0e] md:text-base"
            >
              @rahmad-mukminullah
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
