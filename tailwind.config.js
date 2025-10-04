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
        lilac: "#B19CD9",
        turquoise: "#40E0D0",
        gold: "#FFD700",
        spiritual: {
          50: "#F8F5FF",
          100: "#F0E8FF",
          200: "#E6D9FF",
          300: "#D4B5FF",
          400: "#B19CD9",
          500: "#8B5A96",
          600: "#7A4A85",
          700: "#6B3A74",
          800: "#5C2A63",
          900: "#4D1A52",
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
            transform: "translateY(20px)"
          },
          to: { 
            opacity: "1",
            transform: "translateY(0)"
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
