/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { // letakkan warna di dalam 'colors'
        hijauTua: '#1e5631',
        hijauSedang: '#a4de02',
        hijauMuda: '#68bb59',
        hijauLatar: '#E8F5E9',
        hijauInput: '#A7DBD8',
        hijauUtama: '#4CAF50',
        hijauSekunder: '#66BB6A',
        hijauTeks: '#2E7D32',
      },
    },
    safelist: [
      'fade-in-scale',
      'fade-out-scale',
    ],
  },
  plugins: [],
}
