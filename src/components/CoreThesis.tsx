"use client";

import { motion } from "framer-motion";

export function CoreThesis() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-[200px_1fr] gap-12 md:gap-16 items-start">
        {/* Left label — sticky on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:sticky md:top-32"
        >
          <h2 className="font-mono text-[11px] text-accent tracking-[0.25em] font-medium uppercase">
            Core Thesis
          </h2>
          <div className="mt-4 h-px w-10 bg-accent/40" />
        </motion.div>

        {/* Right text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="font-headline text-2xl sm:text-3xl md:text-[2.5rem] font-light text-white leading-[1.3] tracking-tight">
            We design and produce healthcare datasets that test how models
            behave under real clinical conditions — including uncertainty,
            incomplete information, and evolving patient states.
          </p>
          <p className="mt-6 font-headline text-2xl sm:text-3xl md:text-[2.5rem] font-light leading-[1.3] tracking-tight text-accent-soft">
            Our focus is not on what models know, but how they reason.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
