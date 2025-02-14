/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {screens: {
      'max-500': {'max': '500px'},  // Custom breakpoint for max width of 400px
    },},
  },
  plugins: [],
};
