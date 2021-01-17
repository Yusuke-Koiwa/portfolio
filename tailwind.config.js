module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      fontSize: {
        '4.5xl': ['2.5rem', '1.25'],
      },
      colors: {
        'c-gray': '#C3C3C3',
      },
      boxShadow: {
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
    },
  },
  plugins: [],
};
