module.exports = {
  purge: ['./src/**/*.html','./src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        body:['Montserrat', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
