"use client";

import { motion } from "framer-motion";

const cards = [
  {
    num: "01",
    label: "REASONING",
    title: "Failure-driven design",
    text: "We target scenarios where models produce plausible but incorrect decisions.",
  },
  {
    num: "02",
    label: "ENVIRONMENT",
    title: "Real clinical complexity",
    text: "Cases include ambiguity, conflicting signals, and time-sensitive decision-making.",
  },
  {
    num: "03",
    label: "VERIFICATION",
    title: "Structured evaluation",
    text: "Each task includes expert-built rubrics focused on reasoning quality and safety.",
  },
];

export function OurApproach() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="font-headline text-sm text-white tracking-[0.25em] mb-3 font-bold uppercase">
            Our Approach
          </h2>
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-[0.3em]">
            Protocol-based dataset generation
          </p>
        </motion.div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 border-l border-white/[0.06]">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-10 md:p-12 border-r border-b md:border-b-0 border-white/[0.06] hover:bg-surface-high/50 transition-colors group cursor-default"
            >
              <div className="font-mono text-accent text-[10px] mb-8 tracking-[0.2em]">
                {card.num} / {card.label}
              </div>
              <h3 className="font-headline text-lg text-white mb-4 uppercase tracking-wider font-bold">
                {card.title}
              </h3>
              <p className="text-text-body leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
