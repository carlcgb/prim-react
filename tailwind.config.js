/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './solutions.html',
    './industries.html',
    './resources.html',
    './pricing.html',
    './company.html',
    './src/**/*.{js,html}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            50: '#eef2f9',
            100: '#d8e1f2',
            200: '#b5c6e4',
            300: '#8ea7d3',
            400: '#5b79b7',
            500: '#2f4f8a',
            600: '#1d3968',
            700: '#152a4f',
            800: '#0f213f',
            900: '#0b1c3a'
          },
          accent: {
            50: '#e6f7ff',
            100: '#cceeff',
            200: '#99ddff',
            300: '#66ccff',
            400: '#33bbff',
            500: '#1c9bdc',
            600: '#1584bf',
            700: '#0f6b9a',
            800: '#0a5174',
            900: '#063a54'
          },
          teal: {
            50: '#e6fffb',
            100: '#c9fff7',
            200: '#93fff0',
            300: '#5ef7e6',
            400: '#2ac7b0',
            500: '#1da794',
            600: '#168a79',
            700: '#116c5e',
            800: '#0c5046',
            900: '#073a33'
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12'
          }
        },
        neutral: {
          50: '#f5f7fb',
          100: '#eef2f7',
          200: '#e1e7f0',
          300: '#cfd8e6',
          400: '#9fb0c6',
          500: '#6f8199',
          600: '#4a5a6f',
          700: '#2f3b4d',
          800: '#202835',
          900: '#151b25'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'sans-serif']
      },
      boxShadow: {
        xs: '0 2px 6px rgba(11, 28, 58, 0.08)',
        sm: '0 6px 18px rgba(11, 28, 58, 0.12)',
        md: '0 14px 28px rgba(11, 28, 58, 0.16)',
        lg: '0 24px 40px rgba(11, 28, 58, 0.2)'
      },
      borderRadius: {
        pill: '999px'
      }
    }
  },
  plugins: []
}
