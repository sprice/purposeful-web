/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
const { fontFamily } = defaultTheme

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        logo: ["var(--font-jakarta)", ...fontFamily.sans],
        display: ["var(--font-domine)", ...fontFamily.serif],
        mono: ["var(--font-robotoMono)", ...fontFamily.mono],
      },
    },
  },
  plugins: [],
}
