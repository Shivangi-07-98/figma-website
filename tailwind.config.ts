import type { Config } from "tailwindcss";

export default {
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
      screens: {
        'xs': '430px',
        'sm': '500px',
        'md': '810px',
        lg: '1024px', // Small laptops and large tablets
        xl: '1280px', // Standard desktops
        '2xl': '1440px', // Larger desktops (common in offices)
        '3xl': '1920px', // Full HD monitors (common in clinics)
        '4k': '2560px' // High-resolution monitors (optional)
      },
    },
  },
  plugins: [],
} satisfies Config;
