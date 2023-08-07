import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.10);',
      },
      fontFamily: {
        gothic: ["var(--font-gothic)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
