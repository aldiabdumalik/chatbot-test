import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mul: ['var(--font-mul)', ...fontFamily.sans],
      },
      colors: {
        primary: '#2B2E63',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#2B2E63',

          secondary: '#008617',

          accent: '#00deff',

          neutral: '#231717',

          'base-100': '#1f2f42',

          info: '#009de7',

          success: '#8ff009',

          warning: '#f88900',

          error: '#f9223d',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
