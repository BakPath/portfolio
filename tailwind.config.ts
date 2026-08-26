import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#070C15',
        surface: '#0D1524',
        raised: '#131D30',
        border: '#1E2B40',
        primary: '#E8ECF4',
        secondary: '#93A3BF',
        muted: '#5F6E8A',
        pulse: '#FF8A3D',
        live: '#3ECF8E',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        shell: '78rem',
      },
    },
  },
  plugins: [],
};

export default config;
