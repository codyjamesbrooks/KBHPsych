/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    fontFamily: {
      'heading': ['Newsreader', 'sans-serif'],
    },
    extend: {
      colors: {
        'slate': '#243B53',
        'cta-green': '#65D6AD'
      },
    },
  },
  plugins: [],
}
