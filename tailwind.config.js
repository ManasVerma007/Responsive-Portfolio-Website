/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1a1a2e',
          light: '#e6e6ff',
        },
        secondary: {
          dark: '#16213e',
          light: '#f0f0f7',
        },
        accent: {
          DEFAULT: '#4361ee',
          hover: '#3a56d4',
          // Add a brighter accent for dark mode
          dark: '#5e7bff',
        },
        dark: {
          bg: '#0f0f1a',
          card: '#1a1a2e',
          // Make dark mode text brighter for better contrast
          text: '#f8f8ff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
        dark: {
          css: {
            color: theme('colors.dark.text'),
            h1: { color: theme('colors.dark.text') },
            h2: { color: theme('colors.dark.text') },
            h3: { color: theme('colors.dark.text') },
            h4: { color: theme('colors.dark.text') },
            strong: { color: theme('colors.dark.text') },
            // Make links brighter in dark mode
            a: { color: theme('colors.accent.dark') },
            // Make code sections brighter
            code: { color: theme('colors.accent.dark') },
            blockquote: { color: theme('colors.gray.300') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}