/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      cardBg: "url('./assets/images/features-bg.png')",
      caseStudiesBg: "url('./assets/images/case-studies-bg.jpg')"
    },
    extend: {},
  },
  plugins: [],
}