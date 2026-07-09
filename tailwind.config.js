/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#453673',
        secondary: '#81515a',
        tertiary: '#2e4257',
        ivory: '#fdf8fe',
        paper: '#ffffff',
        taupe: '#f1ecf2',
        beige: '#ece6ed',
        charcoal: '#1c1b1f',
        obsidian: '#313034',
        'dark-surface': '#453673',
        'muted-dark': '#48454f',
        'muted-light': '#f4eff5',
        peach: '#ffd9df',
        coral: '#5d4e8c',
        rose: '#453673',
        blush: '#ffe8f0',
        mint: '#e0f2fe',
        leaf: '#2e4257',
        'mint-strong': '#bcd0ea',
        'border-light': '#cac4d1',
        'border-dark': 'rgba(69, 54, 115, 0.18)',
        lavender: '#e8ddff',
        'lavender-dim': '#cebdff',
      },
      fontFamily: {
        sans: ['Work Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        label: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        sidebar: '256px',
        'section-gap': '5rem',
      },
    },
  },
  plugins: [],
};
