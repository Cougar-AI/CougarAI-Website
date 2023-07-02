/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'neural-network': 'url("/images/neural-network.png")',
        'binary': 'url("/images/binary.svg")',
      },
      colors: {
        'cai-400': '#E45354',
        'cai-500': '#C8494A',
        'misty-rose': '#FFE4E1',
        'snow': '#FFFAFA',
      },
      fontSize:{
        'xxs':'0.55rem',
      },
      borderWidth:{
        '3':'3px',
      }
    },
  },
  plugins: [],
}
