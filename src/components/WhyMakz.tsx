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

        <div className="grid md:grid-cols-2 gap-4">
          {/* Quality Above All */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0 }}
            className="md:col-span-2 bg-surface-container p-10 md:p-12 border border-white/[0.06] hover:bg-surface-high/40 transition-colors"
          >
            <h3 className="font-headline text-xl text-white uppercase font-bold tracking-tight mb-6">
              Quality Above All
            </h3>
            <p className="text-text-body text-sm leading-relaxed mb-4">
              As models improve, the bottleneck is no longer data volume — it&apos;s
              whether the data actually exposes where models fail.
            </p>
            <p className="text-text-body text-sm leading-relaxed mb-4">
              We design datasets that go beyond textbook scenarios and pattern
              matching. Our focus is on:
            </p>
            <ul className="text-text-body text-sm leading-relaxed mb-4 space-y-1.5 ml-1">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                real-world clinical ambiguity
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                incomplete and conflicting information
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                edge cases and failure modes
              </li>
            </ul>
            <p className="text-text-body text-sm leading-relaxed mb-2">
              Every line of data is built to test reasoning, not recall — and
              ultimately answer one question:
            </p>
            <p className="text-accent-soft text-sm font-medium">
              Does this make the model better?
            </p>
          </motion.div>

          {/* Deep Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-surface-high p-10 md:p-12 border border-white/[0.06]"
          >
            <h3 className="font-headline text-xl text-white uppercase font-bold tracking-tight mb-6">
              Deep Experience in Healthtech &amp; AI
            </h3>
            <p className="text-text-body text-sm leading-relaxed mb-4">
              We&apos;ve spent over 6 years working at the intersection of
              healthcare and AI.
            </p>
            <p className="text-text-body text-sm leading-relaxed mb-4">
              This includes:
            </p>
            <ul className="text-text-body text-sm leading-relaxed mb-4 space-y-1.5 ml-1">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                supplying clinicians into healthtech and AI environments
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                working closely with how models are trained, evaluated, and
                improved
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                understanding where models succeed — and more importantly, where
                they break
              </li>
            </ul>
            <p className="text-text-body text-sm leading-relaxed">
              We don&apos;t approach this as a data vendor, but as a partner
              focused on improving real-world model performance.
            </p>
          </motion.div>

          {/* Clinician Network */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface-container p-10 md:p-12 border border-white/[0.06] hover:bg-surface-high/40 transition-colors"
          >
            <h3 className="font-headline text-xl text-white uppercase font-bold tracking-tight mb-6">
              10,000+ Clinician Talent Pool
            </h3>
            <p className="text-text-body text-sm leading-relaxed mb-4">
              We have built a network of over 10,000 clinicians, including
              specialists across key domains such as oncology, cardiology, and
              paediatrics.
            </p>
            <p className="text-text-body text-sm leading-relaxed mb-4">
              Many of our clinicians:
            </p>
            <ul className="text-text-body text-sm leading-relaxed mb-4 space-y-1.5 ml-1">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                have experience working with frontier AI systems
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                understand evaluation frameworks and model behaviour
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                can contribute beyond annotation into reasoning, critique, and
                refinement
              </li>
            </ul>
            <p className="text-text-body text-sm leading-relaxed">
              This allows us to deliver high-quality, expert-driven data at
              speed — without compromising on depth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
