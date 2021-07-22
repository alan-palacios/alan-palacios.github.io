module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sky-stars': "url('./images/sky-stars.jpg')",
       }),
       fontFamily:{
         sans: ["Josefin Sans"]  
       },
      colors:{
        blue:{
          dark: '#1D1F2F'
        },
        gray:{
          light: '#E5E5E5'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
