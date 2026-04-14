"use client";

import { useEffect, useState } from "react";
import { MakzLogoIcon } from "./MakzLogo";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex items-center justify-between w-full max-w-[1200px] px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-surface-lowest/80 backdrop-blur-xl border border-white/[0.06]"
            : "bg-surface-lowest/40 backdrop-blur-md border border-white/[0.03]"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <MakzLogoIcon size={28} />
          <span className="font-headline text-lg font-bold tracking-tight text-white">
            MAKZ
          </span>
        </a>

        {/* CTA */}
        <a
          href="/contact"
          className="flex items-center gap-2 bg-white text-surface font-headline text-[13px] font-semibold px-5 py-2 rounded-full hover:bg-white/90 transition-colors"
        >
          Get in touch
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="opacity-60"
          >
            <path
              d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
