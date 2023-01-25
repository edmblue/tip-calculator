/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primaryDarkGreen: 'hsl(185, 88%, 16%)',
        primaryStrongCyan: 'hsl(172, 67%, 45%)', // hover buttons
        neutralVeryDarkCyan: 'hsl(186, 14%, 43%)',
        neutralDarkGrayishCyan: 'hsl(186, 14%, 43%)',
        neutralGraishCyan: 'hsl(184, 14%, 56%)',
        neutralLightGrayishCyan: 'hsl(185, 41%, 84%)',
        neutralVeryLightGrayishCyan: 'hsl(202, 41%, 97%)',
      },
    },
  },
  plugins: [],
};
