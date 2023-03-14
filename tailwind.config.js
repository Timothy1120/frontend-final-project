/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "darkblue-01": "#B3E8E5",
        "darkblue-02": "#82DBD8",
        "darkblue-03": "#3BACB6",
        "darkblue-04": "#2F8F9D",
        "darkgreen-01": "#E6E5A3",
        "darkgreen-02": "#A9AF7E",
        "darkgreen-03": "#7D8F69",
        "darkgreen-04": "#557153",
        "neutral-01": "#FFFFFF",
        "neutral-02": "#D0D0D0",
        "neutral-03": "#8A8A8A",
        "neutral-04": "#3C3C3C",
        "neutral-05": "#151515",
        danger: "#FA2C5A",
        warning: "#F9CC00",
        success: "#73CA5C",
      },
      boxShadow: {
        sm: "0px 5px 15px 0px rgba(0, 0, 0, 0.15)",
        lg: "0px 20px 30px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
