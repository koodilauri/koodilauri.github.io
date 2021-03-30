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
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  variants: {
    extend: {
      rotate: ['group-hover'],
      scale: ['group-hover'],
      height: ['hover, group-hover, focus, group-focus'],
      width: ['hover, group-hover, focus, group-focus'],
      animation: ['hover, group-hover, focus, group-focus'],
    },
  },
  plugins: [],
}
