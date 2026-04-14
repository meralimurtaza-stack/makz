"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    label: "DESIGN",
    text: "Our evaluation lead designs clinical scenarios engineered to stump frontier models — diagnostic ambiguity, conflicting signals, time-pressure triage. Every prompt is tested against Claude, GPT, and Gemini. If any model gets it right, the prompt isn't hard enough.",
  },
  {
    num: "02",
    label: "EVALUATE",
    text: "Board-certified specialists scrape model responses and grade them against structured rubrics. Each rubric is atomic, objectively gradable, and scored across reasoning, recall, safety, and instruction adherence.",
  },
  {
    num: "03",
    label: "REVIEW",
    text: "Peer clinical review. Structural QC by our evaluation lead. Model-alignment debugging. Final sign-off. Every task is touched by at least three people before it leaves our hands.",
  },
  {
    num: "04",
    label: "DELIVER",
    text: "You receive a clean dataset with prompts, model responses, JSON-formatted rubric scores by criterion type, cross-model comparison, and failure classification. Ready for RLHF fine-tuning.",
  },
];

export function HowWeWork() {
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
            How We Work
          </h2>
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-[0.3em]">
            End-to-end evaluation pipeline
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-l border-white/[0.06] pl-6 py-2"
            >
              <div className="font-mono text-accent text-[10px] mb-4 tracking-[0.2em]">
                {step.num} / {step.label}
              </div>
              <p className="text-text-body text-sm leading-relaxed font-light">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
