/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      dropShadow: {
        "primary": "0 4px 32px 0 rgba(15, 23, 42, 0.15)",
        'md': '0 35px 35px rgba(0, 0, 0, 0.5)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      height: {
        '600': '600px'
      },
      backgroundColor: {
        "secondary" : "rgb(22 78 99)"
      },
    },
  },
  plugins: [],
}