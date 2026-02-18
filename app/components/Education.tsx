"use client";

import { motion } from "framer-motion";
import GlitchText from "./GlitchText";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <GlitchText
            text="Education"
            as="h2"
            className="text-3xl font-bold md:text-4xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-lg border border-border bg-card p-8"
        >
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#0e6b0e]/30 bg-[#0e6b0e]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0e6b0e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-foreground">
                Politeknik Negeri Jakarta
              </h3>
              <p className="text-sm text-[hsl(120,5%,55%)]">
                Bachelor of Applied Science (B.A.Sc.), Information Technology
              </p>
              <p className="text-sm text-[hsl(120,5%,55%)]">2013 - 2017</p>
              <div className="mt-3 inline-flex items-center gap-2">
                <span className="rounded-full border border-[#0e6b0e]/30 bg-[#0e6b0e]/10 px-3 py-1 text-sm font-medium text-[#0e6b0e]">
                  GPA: 3.46
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
