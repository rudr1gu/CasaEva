/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'delius': ['Delius', 'cursive'],
      },
      colors: {
        'eva': {
          pink: '#F2A0B6',
          lightpink: '#F2BBC9',
          blue: '#B8D5E3',
          white: '#F2F2F0',
          yellow: '#F2CDA0',
          black: '#1C1C1C',
        },
      },
    },
  },
  plugins: [],
};