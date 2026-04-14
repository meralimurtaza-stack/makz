"use client";

import { useRef, useState, useEffect } from "react";
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
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);
  const [lineFill, setLineFill] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    function trigger() {
      if (hasTriggered.current) return;
      hasTriggered.current = true;
      setLineFill(true);
      for (let i = 0; i < steps.length; i++) {
        setTimeout(() => setActiveCount(i + 1), 400 + i * 400);
      }
    }

    function checkVisibility() {
      const rect = el!.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        trigger();
      }
    }

    // Try IntersectionObserver
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            trigger();
            observer?.disconnect();
          }
        },
        { threshold: 0 }
      );
      requestAnimationFrame(() => observer!.observe(el));
    }

    // Also use scroll listener as fallback
    window.addEventListener("scroll", checkVisibility, { passive: true });
    // Check immediately in case already in view
    checkVisibility();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

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
            How We Work
          </h2>
          <p className="font-mono text-[10px] text-text-muted uppercase tracking-[0.3em]">
            End-to-end evaluation pipeline
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-2xl min-h-[400px]">
          {/* Background track */}
          <div className="absolute left-[9px] top-0 bottom-0 w-px bg-white/[0.06]" />

          {/* Blue fill line */}
          <div
            className="absolute left-[9px] top-0 bottom-0 w-px bg-accent origin-top"
            style={{
              transform: lineFill ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 2.8s ease-in-out",
            }}
          />

          {/* Steps */}
          <div className="relative space-y-12">
            {steps.map((step, i) => {
              const active = i < activeCount;
              return (
                <div key={step.num} className="flex gap-6 items-start">
                  {/* Node */}
                  <div className="relative flex items-center justify-center w-5 h-5 flex-shrink-0 mt-0.5">
                    <div
                      className="w-3 h-3 rounded-full z-10"
                      style={{
                        backgroundColor: active
                          ? "rgb(77, 142, 255)"
                          : "rgba(77, 142, 255, 0.15)",
                        boxShadow: active
                          ? "0 0 14px 3px rgba(77, 142, 255, 0.4)"
                          : "none",
                        transform: active ? "scale(1)" : "scale(0.6)",
                        transition: "all 0.5s ease-out",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 pb-2"
                    style={{
                      opacity: active ? 1 : 0.08,
                      transform: active
                        ? "translateX(0)"
                        : "translateX(20px)",
                      transition:
                        "opacity 0.6s ease-out, transform 0.6s ease-out",
                    }}
                  >
                    <div className="font-mono text-accent text-[11px] mb-3 tracking-[0.2em]">
                      {step.num} / {step.label}
                    </div>
                    <p className="text-text-body text-sm leading-relaxed font-light">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
