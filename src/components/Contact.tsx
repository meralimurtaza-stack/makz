"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "See our work",
    text: "We'll share a real evaluation task — prompt, rubric, cross-model scores — so you can judge the quality yourself.",
    cta: "Request a sample",
    href: "mailto:info@makztalent.com?subject=Sample%20dataset%20request",
  },
  {
    title: "Run a pilot",
    text: "3 weeks. 5-10 high-signal tasks targeting your model's failure modes. Board-certified clinicians. Structured rubrics. No long-term commitment.",
    cta: "Discuss a pilot",
    href: "mailto:info@makztalent.com?subject=Pilot%20discussion",
  },
  {
    title: "Talk to Ali",
    text: "20-minute call to discuss your evaluation needs and whether MAKZ is the right fit.",
    cta: "Book a call",
    href: "mailto:info@makztalent.com?subject=Introductory%20call",
  },
];

export function Contact() {
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
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-surface-container border border-white/[0.06] p-8 md:p-10 flex flex-col justify-between gap-8 hover:border-accent/30 transition-colors min-h-[280px]"
            >
              <div>
                <h3 className="font-headline text-lg text-white font-bold mb-4">
                  {card.title}
                </h3>
                <p className="text-text-body text-sm leading-relaxed opacity-80">
                  {card.text}
                </p>
              </div>
              <a
                href={card.href}
                className="inline-flex items-center gap-2 font-mono text-[11px] text-accent uppercase tracking-[0.15em] hover:text-white transition-colors"
              >
                {card.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M5 12h14m0 0l-6-6m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
