module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'sky-stars': "url('./images/sky-stars.jpg')",
        'github-icon': "url('./images/github@2x.png')"
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
      zIndex:{
        '-10':'-10',
        '-20':'-20',
      },
      transitionProperty:{
        'width':'width'
      },
      screens:{
        'media-hover': {'raw': '(hover:hover)'}
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      width: ['responsive', 'hover']
    },
  },
  plugins: [],
}
