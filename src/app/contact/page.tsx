"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, message, website }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Failed to send. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
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
                {/* Honeypot — hidden from real users */}
                <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block font-mono text-[10px] text-text-muted uppercase tracking-[0.25em] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
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
                    name="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-surface-lowest border border-white/[0.06] px-4 py-3 text-white text-sm font-body placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                    placeholder="Tell us about your project or what you're looking for..."
                  />
                </div>

                {/* Error message */}
                {error && (
                  <div className="text-red-400 text-sm font-body">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-white text-surface font-headline text-[12px] font-semibold uppercase tracking-[0.15em] rounded-full hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send message"}
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
