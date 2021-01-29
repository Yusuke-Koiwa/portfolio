module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '560px',
      md: '768px',
      lg: '960px',
      xl: '1024px',
      '2xl': '1280px',
    },
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      fontSize: {
        '3.5xl': ['2rem', '2.25'],
        '4.5xl': ['2.5rem', '1.25'],
        '7.5xl': ['5.25rem', '1'],
      },
      colors: {
        'c-gray': '#C3C3C3',
        'dark-gray': '#2d2d2d',
      },
      boxShadow: {
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
};
