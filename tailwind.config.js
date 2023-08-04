/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      contactBg: "url('./assets/imgs/contact-form-bg.jpg')",
      footerBg: "url('./assets/imgs/footer-bg.jpg')",
      cardBg: "url('./assets/imgs/features-bg.png')",
      caseStudiesBg: "url('./assets/imgs/case-studies-bg.jpg')",
      testimonialBg: "url('./assets/imgs/bgimg.jpg')"
    },
    extend: {},
  },
  plugins: [],
};
