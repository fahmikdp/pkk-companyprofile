/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: 16,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
