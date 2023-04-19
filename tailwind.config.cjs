/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        secondary: "#fff",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        'sm': {'max': '400px'},
        'xs': {'max': '780px'},
        // sm:"320px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/rin2.jpg')",
      },
    },
  },
  plugins: [],
};
