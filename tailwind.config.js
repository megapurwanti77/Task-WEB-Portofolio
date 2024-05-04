/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#CDE8E5",
        lightText: "#003C43",
        boxBg: "linear-gradient(145deg, #CDE8E5, #CDE8E5)",
        designColor: "#135D66",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #EEF7FF, -10px -10px 19px #EEF7FF",
      },
    },
  },
  plugins: [],
};
