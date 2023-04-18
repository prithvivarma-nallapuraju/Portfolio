/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs':'280px',
      'sm':'400px',
      'md':'768px'
    },
    extend: {},
  },
  plugins: [],
}

