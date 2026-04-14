"use client";

import { motion } from "framer-motion";

export function WhyMakz() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-headline text-sm text-white tracking-[0.25em] mb-3 font-bold uppercase">
            Why MAKZ
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {/* Quality — large card, 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0 }}
            className="md:col-span-2 bg-surface-container p-10 md:p-12 flex flex-col justify-between gap-8 border border-white/[0.06] hover:bg-surface-high/40 transition-colors min-h-[260px]"
          >
            <div className="flex justify-between items-start">
              <h3 className="font-headline text-xl text-white uppercase font-bold tracking-tight">
                Quality above all
              </h3>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-accent flex-shrink-0"
              >
                <path
                  d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-text-body text-base leading-relaxed max-w-md opacity-80">
              We prioritise signal over scale — every dataset is designed to
              measurably improve model performance.
            </p>
          </motion.div>

          {/* Domain experience — 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-surface-high p-10 flex flex-col justify-center gap-4 border border-white/[0.06] min-h-[260px]"
          >
            <div className="text-6xl font-headline font-bold text-accent/30">
              6+
            </div>
            <div>
              <h3 className="font-headline text-base text-white uppercase font-bold mb-2">
                Deep domain experience
              </h3>
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest leading-relaxed">
                6+ years working across healthcare, AI, and clinical operations.
              </p>
            </div>
          </motion.div>

          {/* Clinician network — fills remaining space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 bg-surface-container p-10 md:p-12 flex flex-col md:flex-row md:items-center gap-6 border border-white/[0.06] hover:bg-surface-high/40 transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-headline text-xl text-white uppercase mb-4 font-bold tracking-tight">
                Clinician network
              </h3>
              <p className="text-text-body leading-relaxed opacity-80 max-w-lg">
                Access to 10,000+ clinicians, including those with experience in
                frontier AI training and evaluation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
