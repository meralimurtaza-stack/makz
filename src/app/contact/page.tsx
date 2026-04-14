"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-surface min-h-screen">
      <Navigation />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-20 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-text-body text-lg leading-relaxed mb-10 max-w-md">
              Interested in seeing a sample dataset or exploring how MAKZ can
              stress-test your clinical AI? We&apos;d like to hear from you.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <div className="font-mono text-[10px] text-text-muted uppercase tracking-[0.25em] mb-2">
                  Email
                </div>
                <a
                  href="mailto:info@makztalent.com"
                  className="text-accent hover:text-white transition-colors text-lg font-medium"
                >
                  info@makztalent.com
                </a>
              </div>

              {/* Response time */}
              <div>
                <div className="font-mono text-[10px] text-text-muted uppercase tracking-[0.25em] mb-2">
                  Response time
                </div>
                <p className="text-text-body">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="bg-surface-container border border-white/[0.06] p-10 md:p-12 flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-headline text-2xl text-white font-bold mb-3">
                  Thank you
                </h3>
                <p className="text-text-body max-w-sm">
                  We&apos;ve received your message and will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-surface-container border border-white/[0.06] p-8 md:p-10 space-y-6"
              >
                {/* Name */}
                <div>
                  <label className="block font-mono text-[10px] text-text-muted uppercase tracking-[0.25em] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-surface-lowest border border-white/[0.06] px-4 py-3 text-white text-sm font-body placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-mono text-[10px] text-text-muted uppercase tracking-[0.25em] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-surface-lowest border border-white/[0.06] px-4 py-3 text-white text-sm font-body placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block font-mono text-[10px] text-text-muted uppercase tracking-[0.25em] mb-2">
                    Company
                    <span className="text-text-muted/40 ml-2 normal-case tracking-normal">
                      optional
                    </span>
                  </label>
                  <input
                    type="text"
                    className="w-full bg-surface-lowest border border-white/[0.06] px-4 py-3 text-white text-sm font-body placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                    placeholder="Your company"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[10px] text-text-muted uppercase tracking-[0.25em] mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-surface-lowest border border-white/[0.06] px-4 py-3 text-white text-sm font-body placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                    placeholder="Tell us about your project or what you're looking for..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-surface font-headline text-[12px] font-semibold uppercase tracking-[0.15em] rounded-full hover:bg-white/90 transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
