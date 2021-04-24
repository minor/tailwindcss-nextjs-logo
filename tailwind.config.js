const conicGradient = (theme, direction, colorList) => {
  const params = [
    direction,
    ...colorList.map((color) => theme(`colors.${color}`)),
  ];

  return `conic-gradient(${params.join(", ")})`;
};

const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      "16xl": "15rem",
    },
    extend: {
      colors: {
        amber: colors.amber,
        lightBlue: colors.lightBlue,
        rose: colors.rose,
        gray: colors.gray,
      },
      backgroundImage: (theme) => ({
        "conic-gradient": conicGradient(theme, "from 300deg", [
          "red.400",
          "amber.100",
          "lightBlue.500",
          "blue.300",
          "purple.600",
          "pink.500",
          "rose.600",
          "red.400",
        ]),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
