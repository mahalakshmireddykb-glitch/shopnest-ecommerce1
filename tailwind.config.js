/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      colors: {
        ink: '#14161A',
        surface: '#F5F6F8',
        indigo: {
          DEFAULT: '#4338CA',
          dark: '#372AA8',
          light: '#EEF0FE',
        },
        amber: {
          DEFAULT: '#F5A623',
          dark: '#D68C0F',
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,22,26,0.06), 0 8px 24px rgba(20,22,26,0.06)',
      },
    },
  },
  plugins: [],
}
