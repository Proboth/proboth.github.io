/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}



// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 2s steps(30) forwards',  // First line animation
        'typewriter-second': 'typewriter 2s steps(20) forwards 2s', // Second line animation with a 2-second delay
        caret: 'typewriter 2s steps(30) forwards, blink 1s steps(30) infinite 2s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        'typewriter-second': {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
