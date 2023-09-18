/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bornkey: {
          '0%': { transform: 'scale(.5)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'born': 'bornkey 1.5s ease 1',
      }
    },
  },
  plugins: [],
}