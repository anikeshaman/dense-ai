import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#081126",
        ink: "#10182D",
        blue: "#1264FF",
        violet: "#713CFF",
        cyan: "#12D7E8",
        soft: "#F7F9FC",
        border: "#E7EAF0",
        muted: "#667085",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #1264FF 0%, #713CFF 55%, #12D7E8 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "node-pulse": "pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
