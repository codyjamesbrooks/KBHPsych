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
        'slate' : {
          100: '#F0F4F8',
          200: '#9FB3C8',
          300: '#243B53',
        },
        'cta-green': '#65D6AD',
        'cta-blue': '#E6E6FF'
        },
      },
  },
  plugins: [],
}
