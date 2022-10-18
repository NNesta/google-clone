/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary-color-dark': '#202124',
        'primary-color': '#70757a',
        'secondary-color': '#4285f4',
        'secondary-color-dark': '#1558d6'
      },
      fontSize:{
        'base-sm': '14px'
      }

    },
  },
  plugins: [],
}
