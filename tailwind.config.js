/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    screens: {
      'tablet': '768px',
      'md': '1110px',
      
    },
    extend: {
      colors: {
        'rich-black': '#0D1821',
        'oxford-blue': '#1B263B',
        'yimin-blue': '#415A77', 
        'silver-lake-blue': '#778DA9',
        'platinum': '#E0E1DD',
      },
      fontFamily: {
        'montserrat': ['Montserrat, sans-serif'], // A modern sans-serif font
        'raleway': ['Raleway, sans-serif'], // A stylish font for headings
      },
    },
  },
  plugins: [],
}

