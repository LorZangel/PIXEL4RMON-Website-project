/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./styles/globals.css', './components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#00FF00',
        },
        white: '#FFFFFF',
      },
    },
  },
  variants: {},
  plugins: [],
}
