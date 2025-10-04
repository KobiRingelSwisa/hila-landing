/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hebrew: ["var(--font-hebrew)", "system-ui", "sans-serif"],
      },
      colors: {
        // Hila's Color Palette
        "deep-purple": "#1a0b3d",
        "deep-blue": "#0f172a",
        "purple-blue": "#2d1b69",
        "broken-white": "#f8fafc",
        "off-white": "#f1f5f9",
        "dark-blue": "#1e293b",
        "navy-blue": "#0f172a",
        "text-dark": "#1e293b",
        "text-darker": "#0f172a",
        gold: {
          1: "#fbbf24",
          2: "#fde68a",
          3: "#f59e0b",
        },
        spiritual: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(177, 156, 217, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(177, 156, 217, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
