module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-bg': "url('/images/kitchen.jpg')",
       }),
       colors: {
        white: '#fff',
        black: '#000',
        primarygreen: '#87C82D',
        primaryyellow: '#FCD215',
      },  
    },
  },
  
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
