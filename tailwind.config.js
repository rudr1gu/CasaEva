/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
        'monsieur':["Monsieur La Doulaise", 'serif'],
        'belleza':["Belleza", 'serif'],
        'madi':['Ms Madi' , 'sans-serif'],

      },
      colors: {
        'eva': {
          pink: '#DC0D51',
          lightpink: '#EF7B8E',
          lightgreen: '#B6E2D3',
          lightyellow: '#FEECAA',
          white: '#F2F2F0',
          yellow: '#F2CDA0',
          black: '#1C1C1C',
          gray: '#616D69',
          lightgray: '#A6A6A6',
        },
      },
    },
  },
  plugins: [],
};