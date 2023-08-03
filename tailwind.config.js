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
    // colors: {
    //   primaryColor: "#930000",
    //   secondaryColor: "#B9A6A6",
    //   white: "#fff",
    //   black: "#000",
    //   gray: "#808080",
    //   darkGray: "#A9A9A9",
    //   lightGray: "#D3D3D3	",
    // },
    extend: {
    },
  },
  plugins: [],
}