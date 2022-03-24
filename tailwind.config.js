module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'rating-grey': {
          200: 'hsl(217, 12%, 63%)',
          400: 'hsl(216, 12%, 54%)'
        },
        'rating-blue': {
          600: 'hsl(213, 19%, 18%)',
        },
        blue: {
          950: '#121417',
        },
        orange: {
          450: 'hsl(25, 97%, 53%)'
        }
      },
    },
  },
  plugins: [],
}