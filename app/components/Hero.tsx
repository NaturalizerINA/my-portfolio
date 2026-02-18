"use client";

import { motion } from "framer-motion";
import GlitchText from "./GlitchText";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(14,107,14,0.15) 2px, rgba(14,107,14,0.15) 4px)",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#0e6b0e]/8 blur-[150px]" />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <GlitchText
            text="Welcome to Rahmad Setiawan Mukminullah Portfolio"
            as="h1"
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl text-balance"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg font-mono text-[#0e6b0e] md:text-xl"
        >
          Mobile & Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a
            href="#about"
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-[#0e6b0e]/30 bg-[#0e6b0e]/10 px-6 py-3 text-sm font-medium text-[#0e6b0e] transition-colors hover:bg-[#0e6b0e]/20"
          >
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
