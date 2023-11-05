/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#1FACA5',
        // 'secondary-color': '#4C5255',
      },
    },
  },
  plugins: [require('daisyui')],
};
