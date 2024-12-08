import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        circular: ['Circular Web', 'sans-serif'],
        general: ['General', 'sans-serif'],
        robertMedium: ['Robert Medium', 'sans-serif'],
        robertRegular: ['Robert Regular', 'sans-serif'],
        zentry: ['Zentry', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
