import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'h1': '3rem',
        'button': '1rem'
      },
      fontWeight: {
        'h1': '900',
        'button': '500',
      },
      scale: {
        '110': '1.1',
      },
      colors: {
        primary: '#c3bfff',
        secondary: '#f8f4eb',
        dark: '#090909',
        light: '#fafafa',
        bg: {
          primary: '#dbbfed'
        }
      }
    },
  },
  plugins: [],
}
export default config
