/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      contactBg: "url('./assets/images/contact-form-bg.jpg')",
      footerBg: "url('./assets/images/footer-bg.jpg')",
    },
    extend: {
    },
  },
  plugins: [],
}