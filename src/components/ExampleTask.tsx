"use client";

import { motion } from "framer-motion";

export function ExampleTask() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-[0.3em]">
            Sample Evaluation
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-surface-container border border-white/[0.06] border-l-2 border-l-accent p-8 md:p-12"
        >
          <p className="text-text-body text-base md:text-lg leading-relaxed">
            A 58-year-old patient presents with acute chest pain, mildly
            elevated troponin, and a 10-year history of GERD. The model must
            determine whether to initiate ACS protocol or investigate
            non-cardiac causes. The rubric scores across 8 criteria: differential
            diagnosis completeness, evidence weighting, guideline adherence, risk
            stratification accuracy, recommended investigations, safety of
            recommendations, reasoning transparency, and clinical communication
            quality. Each criterion is independently scored by two board-certified
            clinicians.
          </p>
          <p className="mt-6 font-headline text-white text-lg md:text-xl font-bold">
            Across Claude, GPT, and Gemini, the average rubric score on this task
            was 34%.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
