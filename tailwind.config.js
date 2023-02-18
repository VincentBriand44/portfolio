module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'nav': {
          'raw': '(min-width: 768px) and (min-height: 850px)'
        }
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '16': '16px'
    },
    plugins: [],
  }
}
