/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      primary: '#buat warna utama',
        secondary: '#warna kedua',
        accent: '#warna ketiga',
    },
    safelist: [
      'fade-in-scale',
      'fade-out-scale',
    ],
  },
  plugins: [],
}

