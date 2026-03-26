/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zemitá, teplá paleta
        ochre: {
          50: '#fdf8f0',
          100: '#f9edd9',
          200: '#f2d9b2',
          300: '#e9c082',
          400: '#dfa24f',
          500: '#d4862a',
          600: '#c06a20',
          700: '#9f4f1c',
          800: '#81401e',
          900: '#6a361b',
        },
        clay: {
          50: '#faf6f3',
          100: '#f2ebe4',
          200: '#e4d5c7',
          300: '#d3baa3',
          400: '#bf9a7c',
          500: '#b08262',
          600: '#a37054',
          700: '#885b47',
          800: '#6f4b3e',
          900: '#5b3f35',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e6',
          300: '#f5e9d4',
          400: '#eddbb8',
          500: '#e3c99a',
          600: '#d4b07a',
          700: '#be9460',
          800: '#9a7750',
          900: '#7d6244',
        },
        forest: {
          50: '#f3f6f4',
          100: '#e2ebe4',
          200: '#c6d7cb',
          300: '#9fbbaa',
          400: '#729a84',
          500: '#527d66',
          600: '#3f6450',
          700: '#345142',
          800: '#2c4237',
          900: '#26372f',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
