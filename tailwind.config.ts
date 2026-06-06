import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          body: '#1A1A1A',
          muted: '#888888',
          subtle: '#B5B5B5',
        },
        surface: {
          DEFAULT: '#F5F5F5',
        },
        line: {
          DEFAULT: '#E0E0E0',
          strong: '#CCCCCC',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-bebas)', 'Bebas Neue', 'Impact', 'sans-serif'],
        script: ['var(--font-allura)', 'Allura', 'cursive'],
        body: ['var(--font-inter-tight)', 'Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
