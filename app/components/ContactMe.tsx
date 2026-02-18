"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import GlitchText from "./GlitchText";

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
            <span className="text-sm text-[hsl(120,5%,70%)] md:text-base">
              rahmad.mukminullah@gmail.com
            </span>
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
        </div>
      </div>
    </section>
  );
}
