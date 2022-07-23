module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'xxs': "375px",
    //   // => @media (min-width: 357px) { ... }

    //   'xs': "420px",
    //   // => @media (min-width: 420px) { ... }

    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
    colors: {
      'primary-color': '#0063ff',
      'secondary-color': '#080f20',
      'white': '#ffffff',
      'black': '#000000',
      'light-color': "#f5f9ff",
      'grey-color': '#aaaaaa',
      'warning-color': '#991B1E'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
};
