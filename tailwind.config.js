module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.css", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F53838",
          lighter: "#eff7ff",
        },
        gray: {
          DEFAULT: "#4f5665",
        },
        black: {
          DEFAULT: "#0b132a",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
