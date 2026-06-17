import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#070B14", // near-black navy
          soft: "#0E1626",
          700: "#1B2638",
        },
        paper: {
          DEFAULT: "#F5F8FB", // airy off-white
          pure: "#FFFFFF",
        },
        muted: "#5B6B82",
        line: "#E4EAF2",
        accent: {
          DEFAULT: "#06B6D4", // cyan — "airflow"
          teal: "#2DD4BF",
          sky: "#38BDF8",
          deep: "#0E7490",
        },
        signal: "#FB7185", // used sparingly for "Problem" tone
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(7,11,20,0.04), 0 8px 24px -8px rgba(7,11,20,0.08)",
        lift: "0 1px 2px rgba(7,11,20,0.05), 0 24px 48px -16px rgba(7,11,20,0.14)",
        glow: "0 0 0 1px rgba(6,182,212,0.18), 0 24px 60px -18px rgba(6,182,212,0.45)",
      },
      backgroundImage: {
        airflow: "linear-gradient(100deg, #06B6D4 0%, #2DD4BF 50%, #38BDF8 100%)",
        "airflow-soft":
          "linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(45,212,191,0.10) 100%)",
      },
      transitionTimingFunction: {
        aero: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
