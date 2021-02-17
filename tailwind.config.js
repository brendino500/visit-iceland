module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Barlow', 'sans-serif'],
    },
    colors: {
      grey: {
        light: '#4c4c47',
        dark: '#2d2d2a',
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
