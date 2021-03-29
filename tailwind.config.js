module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#4c1d95',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'shade': '#08030f'
    }),
    extend: {
      fontSize: {
        '6xl': '4rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
