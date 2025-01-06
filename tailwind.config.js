/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb,rb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    fontFamily: {
      'heading': ['Newsreader', 'sans-serif'],
      'body': ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'slate': '#243B53',
        'gray': '#9FB3C8',
        'cta-green': '#65D6AD',
        'cta-blue': '#E6E6FF'
        },
      },
  },
  plugins: [],
}
