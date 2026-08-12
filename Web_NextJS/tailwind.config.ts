import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Bleu de marque, ancre sur le bleu du logo.
           Echelle monotone : chaque nuance est plus sombre que la precedente,
           sans saut de teinte. L'ancienne melangeait indigo (50-400) et bleu (500+),
           ce qui rendait primary-400 plus clair que primary-500. */
        primary: {
          50: '#F0F5FA',
          100: '#DCE8F3',
          200: '#BBD1E7',
          300: '#8FB2D5',
          400: '#5C8CBE',
          500: '#366BA3',
          600: '#14487F', // couleur de marque : actions, liens, titres accentues
          700: '#113A67',
          800: '#0E2E51',
          900: '#0B2340',
          950: '#06172B',
        },

        /* Turquoise, rappel du logo, en touches rares.
           Jamais en texte courant sur fond clair : contraste insuffisant.
           Pour du texte, accent-700 au minimum. */
        accent: {
          50: '#EFFAFB',
          100: '#D3F2F5',
          200: '#A8E5EB',
          300: '#71D1DB',
          400: '#3FB6C4',
          500: '#1B9AAA',
          600: '#14808F',
          700: '#146673',
          800: '#15525C',
          900: '#14444C',
        },

        /* Neutres chauds. Remplacent les gris froids : c'est ce qui rechauffe
           l'ensemble sans toucher au logo. */
        sand: {
          0: '#FFFFFF',
          50: '#FAF8F5',  // fond de page
          100: '#F3EFE9',
          200: '#EDE7DE', // bordures
          300: '#DDD4C7',
          400: '#B5AC9E',
          500: '#8A837B', // legendes uniquement, jamais un paragraphe
          600: '#6B6660', // texte courant
          700: '#4A463F',
          800: '#2C2A28',
          900: '#1A1815', // titres
        },

        success: '#2F855A',
        warning: '#B7791F',
        error: '#C53030',
        info: '#14487F',

        /* Alias retro-compatibles : des pages y font encore reference.
           Retires au lot 5, quand les pages migrent. */
        secondary: {
          50: '#FAF8F5',
          100: '#F3EFE9',
          200: '#EDE7DE',
          300: '#DDD4C7',
          400: '#B5AC9E',
          500: '#8A837B',
          600: '#6B6660',
          700: '#4A463F',
          800: '#2C2A28',
          900: '#1A1815',
          950: '#0F0E0D',
        },
        background: {
          DEFAULT: '#FFFFFF',
          subtle: '#FAF8F5',
          muted: '#F3EFE9',
          elevated: '#FFFFFF',
        },
        border: {
          DEFAULT: '#EDE7DE',
          muted: '#F3EFE9',
          strong: '#DDD4C7',
        },
        foreground: {
          DEFAULT: '#1A1815',
          muted: '#6B6660',
          subtle: '#8A837B',
        },
      },

      fontFamily: {
        /* Alimentees par next/font dans app/layout.tsx.
           Les familles sont desormais reellement telechargees et auto-hebergees :
           l'ancienne config declarait Inter sans jamais la charger. */
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-jakarta)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'Menlo', 'monospace'],
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.55' }],
        'base': ['1rem', { lineHeight: '1.65' }],
        'lg': ['1.125rem', { lineHeight: '1.65' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.35' }],
        '3xl': ['1.875rem', { lineHeight: '1.25' }],
        '4xl': ['2.25rem', { lineHeight: '1.18' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.06' }],
        '7xl': ['4.5rem', { lineHeight: '1.04' }],

        /* Echelle fluide : supprime les sauts entre mobile et bureau. */
        'display': ['clamp(2.25rem, 1.35rem + 3.6vw, 3.5rem)', { lineHeight: '1.06', letterSpacing: '-0.025em' }],
        'h1': ['clamp(2rem, 1.35rem + 2.6vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.022em' }],
        'h2': ['clamp(1.625rem, 1.25rem + 1.5vw, 2.25rem)', { lineHeight: '1.18', letterSpacing: '-0.015em' }],
        'h3': ['clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },

      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in-scale': 'fadeInScale 0.2s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInScale: {
          '0%': { transform: 'scale(0.97)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },

      /* Ombres discretes uniquement. Les ombres lumineuses (glow) sont supprimees :
         avec les degrades, c'est ce qui donnait l'apparence generique. */
      boxShadow: {
        'xs': '0 1px 2px rgba(26, 24, 21, 0.04)',
        'sm': '0 1px 2px rgba(26, 24, 21, 0.05)',
        'md': '0 4px 12px rgba(26, 24, 21, 0.07)',
        'lg': '0 12px 28px rgba(26, 24, 21, 0.10)',
        'xl': '0 20px 40px rgba(26, 24, 21, 0.12)',
        'card': '0 1px 2px rgba(26, 24, 21, 0.05)',
        'card-hover': '0 12px 28px rgba(26, 24, 21, 0.10)',
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
        'section': 'clamp(4rem, 8vw, 7rem)',
        'gutter': 'clamp(1rem, 4vw, 2.5rem)',
      },

      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1rem',
        '4xl': '1.25rem',
      },

      maxWidth: {
        'container': '75rem', // 1200px
        '8xl': '88rem',
        '9xl': '96rem',
      },

      screens: {
        'mobile': '414px',
        'tablet': '830px',
      },

      transitionDuration: {
        DEFAULT: '180ms',
      },
    },
  },
  plugins: [typography],
}

export default config
