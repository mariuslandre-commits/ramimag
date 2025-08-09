import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{mdx,md}',
  ],
  theme: {
    extend: {
      colors: {
        // Coesio palette tokens. Replace hexes below with exact values from coesio.com if needed.
        brand: {
          navy: '#0B2333',   // deep navy
          navy2: '#133A4F',  // darker/section
          light: '#A7CDE6',  // light blue
          green: '#6EA245',  // avocado
          orange: '#F29D49', // restrained accent
        },
        neutral: {
          bg: '#FFFFFF',
          ink: '#0F1720',
          sub: '#475569',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
        ],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11,35,51,0.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
