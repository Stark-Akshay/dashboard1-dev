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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary:'#ddd6fe',
      secondary: '#4f46e5',
      accent:'#0c0a09',
      offaccent: '#f5f3ff',
      whitish:'#fafaf9',
      grayish: '#737373',
      bgviolet:'#c084fc',
      ttviolet: '#6b21a8',
      bgpurple:'#e879f9',
      ttpurple:'#86198f',
      bgpink:'#f472b6',
      ttpink:'#9d174d',
    }
  },
  plugins: [],
}
