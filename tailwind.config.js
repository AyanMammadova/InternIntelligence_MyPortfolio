/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'bp400': '400px',
        'bp500': '500px',
        'bp600': '600px',
        sm: '640px',
        md: '768px',
        'bp840': '840px',
        'bp900': '900px',
        'bp1000': '1000px',
        lg: '1024px',
        'bp1100': '1100px',
        'bp1200': '1200px',
        xl: '1280px',
        'bp1380': '1380px',
        '2xl': '1536px',
      },
      fontFamily: {
        cormorant: [
          '"Cormorant Garamond"',
          '"Cormorant"',
          "serif",
        ],
        josefin: [
          '"Josefin Sans"',
          "sans-serif",
        ],
        montserratAlt: [
          '"Montserrat Alternates"',
          "sans-serif",
        ],
      },
    },

  },
  plugins: [],
}

