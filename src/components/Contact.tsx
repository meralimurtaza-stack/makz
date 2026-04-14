"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-2xl md:text-4xl text-white font-bold tracking-tight">
            Interested in seeing a<br />sample dataset?
          </h2>
        </motion.div>

        {/* Right — email link */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href="/contact"
          className="group flex items-center gap-4 md:gap-6"
        >
          <span className="font-headline text-xl sm:text-2xl md:text-4xl font-bold text-accent hover:text-white transition-colors">
            Get in touch
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-accent group-hover:translate-x-2 transition-transform flex-shrink-0"
          >
            <path
              d="M5 12h14m0 0l-6-6m6 6l-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
