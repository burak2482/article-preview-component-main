/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrey: 'hsl(217, 19%, 35%)',
        customBlue: 'hsl(214, 17%, 51%)', 
        customGrayishBlue: 'hsl(212, 23%, 69%)', 
        customLightGrayishBlue: 'hsl(210, 46%, 95%)',
      },
    },
  },
  plugins: [],
};
