import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        paper: "#EAF4FC",
        paperdim: "#D6E9F7",
        accent: "#8A2B0E",
        accentdeep: "#6B2009",
        accentlight: "#F0DACE",
        accentpale: "#D98F6F",
        slate: "#464646",
        line: "#C9DCEA",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
