/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightRed: "hsl(0, 100%, 67%)",
      orangeyYellow: "hsl(39, 100%, 56%)",
      greenTeal: "hsl(166, 100%, 37%)",
      cobaltBlue: "hsl(234, 85%, 45%)",
      gradientSlateBlue: "hsla(252, 100%, 67%, 0.85)",
      gradientRoyalBlue: "hsl(241, 81%, 54%)",
      gradientVioletBlue: "hsla(256, 72%, 46%, 1)",
      gradientPersianBlue: "hsla(241, 72%, 46%, 0.4)",
      gradientPersianBlueZero: "hsla(241, 72%, 46%, 0)",

      white: "hsla(0, 0%, 100%, 0.92)",
      paleBlue: "hsl(221, 100%, 96%)",
      lightLavender: "hsl(241, 100%, 89%)",
      darkGrayBlue: "hsl(224, 30%, 27%)",
    },
    extend: {
      fontFamily: {
        "sans": ["Hanken Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
}