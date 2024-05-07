/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        'gray-normal': '#8B8C89',
        operator: '#A5A19B',
        'dropdown-title': '#463F3A'
      },
      backgroundColor: {
        'option-selected': '#BCB8B1'
      },
      borderColor: {
        'list-checkbox': '#D9D9D9'
      }
    }
  }
};
