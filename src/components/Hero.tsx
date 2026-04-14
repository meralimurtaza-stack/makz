"use client";

import { motion } from "framer-motion";
import { NodeMesh } from "./NodeMesh";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Node mesh — full screen behind everything */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="absolute inset-0"
      >
        <NodeMesh />
      </motion.div>

      {/* Text content — centred in viewport */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
        {/* Status label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-soft">
            Healthcare AI Evaluation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-[5.2rem] font-bold leading-[1.05] tracking-tight text-white max-w-4xl"
        >
          We find where healthcare AI breaks
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-5 text-lg md:text-xl text-text-body font-light leading-relaxed max-w-2xl opacity-80"
        >
          Your model passes benchmarks. We test if it&apos;s safe for patients.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 border border-white/20 text-white font-headline text-[12px] font-medium uppercase tracking-[0.15em] rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
