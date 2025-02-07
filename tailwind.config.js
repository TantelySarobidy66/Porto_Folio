/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        manga : '#507CFA',
        mainty : '#000000',
        mena : '#f84c31'
      }
    },
  },
  plugins: [
    tailwindScrollbar
  ],
}