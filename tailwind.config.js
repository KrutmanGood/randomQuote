module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      animation: {
        typing: `animation: typing 3s step(20) 1`
      },
      keyframes: {
        typing: {
          from: {
            width: '0',
          },
          to: {
            width: '100%'
          }
        }
      }
    },
  },
  plugins: [],
}
