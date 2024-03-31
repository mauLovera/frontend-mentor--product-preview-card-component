import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        "dark-cyan": "hsl(158, 42%, 16%)",
        "light-cyan": "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
      },
      neutral: {
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    screens: {
      mobile: "650px",
    },
  },
  plugins: [],
};
export default config;
