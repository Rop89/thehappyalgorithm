module.exports = {
  theme: {
    extend: {
      colors: {
        erik: "#eaebeb",
        sofia: "#d5c8bb",
      },
      fontFamily: {
        joan: "'Montserrat', sans-serif",
      },
     
    },
  },
  variants: {
  
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  },
};
