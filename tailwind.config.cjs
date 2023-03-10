/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        'fa-sm': '6.4rem',
        'fa-xs-ico': '1.5rem',
        'fa-xl-ico': '10rem'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: ['class', '[data-mode="dark"]']
}