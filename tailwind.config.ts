import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#0b0b0d",
        slate: "#1d1d20",
        pearl: "#f5f5f7"
      },
      fontFamily: {
        sans: ["var(--font-sf)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        halo: "0 0 80px 20px rgba(180, 210, 255, 0.25)",
        glow: "0 0 30px 10px rgba(255, 255, 255, 0.12)"
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        pulse: {
          "0%": { opacity: "0.4" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0.4" }
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      },
      animation: {
        orbit: "orbit 18s linear infinite",
        pulse: "pulse 6s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
        "pulse-slow": "pulse 12s ease-in-out infinite"
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: []
};

export default config;
