/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lexendDeca: ["Lexend Deca", "sans-serif"],
    },
    colors: {},
    extend: {
      fontSize: {
        size: "15px",
      },
      colors: {
        stats: {
          bodyBg: "hsl(233, 47%, 7%)",
          cardBg: "hsl(244, 38%, 16%)",
          voilet: "hsl(277, 64%, 61%)",
          white: "hsl(0, 0%, 100%)",
          white1: "hsla(0, 0%, 100%, 0.75)",
          white2: "hsla(0, 0%, 100%, 0.6)",
        },
      },

      backgroundImage: {
        "card-image-desktop": "url('/images/image-header-desktop.jpg')",
        "card-image-mobile": "url('/images/image-header-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
