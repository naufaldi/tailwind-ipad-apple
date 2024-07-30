/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xxs: ["10px", "12px"],
        heading: ["80px", "84px"],
        subheading: ["28px", "32px"],
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "#FAFAFC",
        red: {
          apple: "#b64400",
        },
        black: {
          apple: "#1d1d1f",
        },
        blue: {
          apple: "#0066CC",
        },
        finish: {
          "space-black": "#2E2C2E",
          silver: "#E3E4E5",
        },
      },
    },
  },
  plugins: [],
};
