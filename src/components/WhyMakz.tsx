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

        <div className="grid md:grid-cols-4 gap-4">
          {/* Signal over scale — large card, 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0 }}
            className="md:col-span-2 bg-surface-container p-10 md:p-12 flex flex-col justify-between gap-8 border border-white/[0.06] hover:bg-surface-high/40 transition-colors min-h-[260px]"
          >
            <h3 className="font-headline text-xl text-white uppercase font-bold tracking-tight">
              Signal over scale
            </h3>
            <p className="text-text-body text-base leading-relaxed max-w-md opacity-80">
              We deliver 5-10 high-signal tasks, not 5,000 generic QA pairs.
              Every prompt is engineered so all major frontier models fail.
              That&apos;s the dataset labs can&apos;t generate internally.
            </p>
          </motion.div>

          {/* Evaluation expertise — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-surface-high p-10 md:p-12 flex flex-col justify-between gap-6 border border-white/[0.06] min-h-[260px]"
          >
            <h3 className="font-headline text-xl text-white uppercase font-bold tracking-tight">
              Evaluation expertise
            </h3>
            <p className="text-text-body text-base leading-relaxed opacity-80">
              Our lead reviewer holds R2 (senior) status across Turing,
              Handshake, Outlier, and Mercor. Battle-tested methodology across
              the industry&apos;s largest data programmes.
            </p>
          </motion.div>

          {/* Board-certified clinician network — full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 bg-surface-container p-10 md:p-12 border border-white/[0.06] hover:bg-surface-high/40 transition-colors"
          >
            <h3 className="font-headline text-xl text-white uppercase mb-4 font-bold tracking-tight">
              Board-certified clinician network
            </h3>
            <p className="text-text-body leading-relaxed opacity-80 max-w-2xl">
              10,000+ clinicians spanning anaesthesia, emergency medicine, family
              medicine, cardiology, radiology, oncology, and 20+ additional
              specialties.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
