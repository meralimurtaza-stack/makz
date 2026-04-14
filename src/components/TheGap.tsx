"use client";

import { motion } from "framer-motion";

export function TheGap() {
  return (
    <section className="py-32 md:py-40 border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] text-text-muted tracking-[0.4em] mb-12 font-medium uppercase"
        >
          The Gap
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight"
        >
          Many models perform well on standard benchmarks but fail in real-world
          clinical settings. We create the data needed to close that gap —
          improving safety, reliability, and real-world usefulness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 mx-auto h-[2px] w-48 bg-gradient-to-r from-accent to-accent-soft"
        />
      </div>
    </section>
  );
}
