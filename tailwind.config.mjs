import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#fdfdfc',
          dark: '#0e1011',
        },
        surface: {
          light: '#ffffff',
          dark: '#15181a',
        },
        border: {
          light: '#e6e7e8',
          dark: '#24282c',
        },
        subtle: {
          light: '#6c7278',
          dark: '#8b929a',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        serif: [
          'Newsreader',
          'Charter',
          'Georgia',
          'Cambria',
          'serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '68ch',
            color: 'inherit',
            lineHeight: '1.75',
            fontSize: '1.05rem',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              textDecorationColor: theme('colors.neutral.400'),
              '&:hover': {
                textDecorationColor: 'inherit',
              },
            },
            h1: {
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontWeight: '600',
              letterSpacing: '-0.02em',
              marginTop: '2em',
            },
            h3: {
              fontWeight: '600',
              letterSpacing: '-0.015em',
            },
            code: {
              fontFamily: theme('fontFamily.mono').join(','),
              fontSize: '0.875em',
              fontWeight: '400',
              backgroundColor: theme('colors.neutral.100'),
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
          },
        },
        invert: {
          css: {
            code: {
              backgroundColor: theme('colors.neutral.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
