import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      colors: {
        background: "#050816",
        foreground: "#f9fafb",
        primary: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63"
        },
        accent: {
          500: "#f97316",
          600: "#ea580c"
        }
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top, rgba(56,189,248,0.18), transparent 60%), radial-gradient(circle at bottom, rgba(244,114,182,0.14), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
