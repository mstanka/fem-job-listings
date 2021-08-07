module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'hsl(180, 29%, 50%)',
      neutralLight: 'hsl(180, 31%, 95%)',
      neutralLighter: 'hsl(180, 52%, 96%)',
      neutralDark: 'hsl(180, 8%, 52%)',
      neutralDarker: 'hsl(180, 14%, 20%)',
    },
    fontFamily: {
      spartan: ['Spartan', 'sans-serif'],
    },
    extend: {
      // backgroundImage: (theme) => ({
      //   'header-desktop': "url('./assets/images/bg-header-desktop.svg')",
      //   'header-mobile': "url('./assets/images/bg-header-mobile.svg')",
      // }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');
