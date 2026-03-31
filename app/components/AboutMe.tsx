"use client";

import { motion } from "framer-motion";
import GlitchText from "./GlitchText";

const tags = [
  "Mobile Development",
  "Fullstack Web Development",
  "UI/UX Design",
];

export default function AboutMe() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <GlitchText
            text="About Me"
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
          <p className="text-base leading-relaxed text-[hsl(120,5%,70%)] md:text-lg">
            I am passionate about creating clean, scalable code and delivering seamless user experiences. I'm always eager to learn new technologies and solve complex challenges. As a Frontend Developer, I build user-friendly, high-performing applications or web and modular microfrontends for mobile or web platforms.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="rounded-full border border-[#0e6b0e]/30 bg-[#0e6b0e]/10 px-4 py-1.5 text-sm font-medium text-[#0e6b0e]"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
