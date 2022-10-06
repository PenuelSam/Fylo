/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlueIntro: "hsl(217, 28%, 15%)",
        darkBlueMain: "hsl(218, 28%, 13%)",
        darkBlueFooter: "hsl(216, 53%, 9%)",
        darkBlueTestimonial: "hsl(219, 30%, 18%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Raleway: ["Raleway"],
        OpenSans: ["Open Sans"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
