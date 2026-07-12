/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12211D',
          800: '#1B332C',
          700: '#234238',
          600: '#2C4F44',
        },
        paper: {
          DEFAULT: '#F7F2E9',
          dim: '#EFE8D8',
        },
        gold: {
          DEFAULT: '#D9A55C',
          400: '#E8B876',
          500: '#D9A55C',
          600: '#C08A3E',
        },
        pine: {
          DEFAULT: '#2F5D50',
          100: '#E4EDE9',
          600: '#2F5D50',
          700: '#234238',
        },
        berry: {
          DEFAULT: '#B5495B',
          100: '#F5E4E7',
        },
        mint: {
          DEFAULT: '#4FA98A',
          100: '#E1F3EC',
        },
        stone: {
          DEFAULT: '#8C8574',
          100: '#EFEBE1',
        },
      },
      fontFamily: {
        serif: ['"Iowan Old Style"', '"Palatino Linotype"', 'Palatino', 'Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(18,33,29,0.04), 0 8px 24px -8px rgba(18,33,29,0.18)',
        lift: '0 2px 4px rgba(18,33,29,0.06), 0 16px 40px -12px rgba(18,33,29,0.28)',
      },
      borderRadius: {
        '2.5xl': '1.375rem',
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
}
