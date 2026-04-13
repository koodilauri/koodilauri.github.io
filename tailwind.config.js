module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '6xl': '4rem',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
}
