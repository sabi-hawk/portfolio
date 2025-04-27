import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wheel: {
          to: {
            opacity: '0',
            top: '27px'
          }
        }
      },
      animation: {
        wheel: 'wheel 1.3s infinite'
      }
    },
  },
  plugins: [],
};

export default config; 