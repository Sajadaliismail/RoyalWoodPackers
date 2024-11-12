import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        scaleBounce1_02: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
        scaleBounce1_05: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        scaleBounce1_1: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "scale-bounce-1_02": "scaleBounce1_02 0.8s ease-in-out infinite",
        "scale-bounce-1_05": "scaleBounce1_05 0.8s ease-in-out infinite",
        "scale-bounce-1_1": "scaleBounce1_1 0.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
