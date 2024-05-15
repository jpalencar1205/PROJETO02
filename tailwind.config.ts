import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pedro: {
          DEFAULT: '#ff0055',

          red: {
            100: '#4f0c0d',
            200: '#68191a',
            300: '#ffcc00',
            400: '#b41d1f',
            500: '#d44244',
            600: '#FF9393',
            700: '#FFB0AE',
            800: '#FFCFCD',
            900: '#FEEEEC',
          },

          blue: {
            DEFAULT: '#006699',
            100: '#002599',
            200: '#68191a',
            300: '#000099',
            400: '#b41d1f',
            500: '#d44244',
            600: '#FF9393',
            700: '#FFB0AE',
            800: '#FFCFCD',
            900: '#FEEEEC',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
