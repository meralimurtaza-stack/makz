import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0c1324",
        "surface-low": "#151b2d",
        "surface-container": "#191f31",
        "surface-high": "#23293c",
        "surface-highest": "#2e3447",
        "surface-lowest": "#070d1f",
        accent: "#4d8eff",
        "accent-soft": "#adc6ff",
        "text-primary": "#ffffff",
        "text-body": "#c2c6d6",
        "text-muted": "#8c909f",
        border: "rgba(66,71,84,0.1)",
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
