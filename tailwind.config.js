module.exports = {
  theme: {
    scale: {
      "110": "1.1",
    },
    extend: {
      colors: {
        erik: "#eaebeb",
        sofia: "#d5c8bb",
      },
      fontFamily: {
        joan: "'Montserrat', sans-serif",
        pedro: "'Poppins', sans-serif'",
      },
      margin: {
        "-7": "-18rem",
      },
    },
  },
  variants: {
    scale: ["hover"],
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  },
};
