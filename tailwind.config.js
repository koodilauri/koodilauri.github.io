module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
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
