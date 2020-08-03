module.exports = {
  theme: {
    scale:{
      '110': '1.1'
    },
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
    scale:[
      'hover'
    ]
  },
  plugins: [
    
  ],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  },
};
