/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'strong-violet': '#121139',
        'primary-text': '#CAD6F1',
        'secondary-text': '#F2F6FF'
      },
      rotate: {
        '20': '20deg',
      }
    },
  },
  plugins: [],
}

