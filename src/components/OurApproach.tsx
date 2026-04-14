"use client";

import { motion } from "framer-motion";

const cards = [
  {
    num: "01",
    label: "SCORING",
    title: "Rubric-based scoring",
    text: "Every response is graded against structured, JSON-formatted rubrics with weighted criteria. Not subjective pass/fail — quantified scores across reasoning, extraction, safety, and style. Replicable by any independent reviewer.",
  },
  {
    num: "02",
    label: "TESTING",
    title: "Cross-model stress testing",
    text: "We scrape responses from Claude, GPT, and Gemini for every prompt. We only deliver tasks where all major models perform poorly. If one model gets it right, the prompt isn't hard enough.",
  },
  {
    num: "03",
    label: "QC",
    title: "Clinical QC pipeline",
    text: "Peer review by a second clinician. Structural QC by our evaluation lead. Model-alignment debugging. Final sign-off. Each task is touched by at least three people before delivery.",
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
