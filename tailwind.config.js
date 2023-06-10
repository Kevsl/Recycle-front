/** @type {import('tailwindcss').Config} */

// disable-prettier
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#151515',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      'dark-blue': '#14213D',
      white: '#fff',
      or: '#FAF3BF',
      black: '#14213D',
      'green-recycle': '#91C788',
      'black-opacity-50': 'rgba(0,0,0,0.5)',
      'black-opacity-90': 'rgba(0,0,0,0.9)',
      'gray-recycle': '#6A6F7D',
      'gray-dark-recycle': '#495566',
      'red-recycle': '#DA2D2D',
      'pink-recycle': '#FA928F',
    },

    extend: {
      spacing: {
        400: '400vh',
        401: '401vw',
        101: '101vh',
        128: '32rem',
        144: '36rem',
        80: '80vh',
        70: '70vh',
        60: '60vh',
        55: '55vh',
        45: '45%',
        40: '40%',
        42: '10.6rem',
        90: '90%',
        10: '10%',
        5: '5%',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        Baloo: ['Baloo', 'cursive'],
      },
    },
  },
  plugins: [],
}
