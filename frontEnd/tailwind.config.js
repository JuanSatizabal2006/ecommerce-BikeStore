/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors :{
      transparent: 'transparent',
      current: 'currentColor',
      red : '#a40505',
      white : '#ffffff',
      black : '#000000',
      grey : '#979797',
      grey_transparent : '#d9d9d9b3',
      green : '#1A8300',
      wgrey : '#F2F2F2'
    },
    
    extend: {},
  },
  borderWidth: {
    DEFAULT: '1px',
    '0': '0',
    '2': '2px',
    '3': '3px',
    '4': '4px',
    '6': '6px',
    '8': '8px',
    '10': '10px'
  },
  plugins: [],
}

