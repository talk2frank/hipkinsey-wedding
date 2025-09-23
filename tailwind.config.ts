import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'cormorant': ['Cormorant', 'serif'],
      },
      colors: {
        'oat': '#FCF2DC',
        'mint': {
          100: '#a2f0bdff',
          200: '#6ddd94ff',
        },
        'lavender': {
          100: '#f3e8ff',
          200: '#e9d5ff',
        },
        'charcoal': {
          200: '#e5e5e5',
          500: '#737373',
          600: '#666666',
          700: '#525252',
          800: '#404040',
          900: '#2d2d2d',
        },
      },
      borderRadius: {
        'lg': '0.625rem',
      },
    },
  },
  plugins: [],
}

export default config