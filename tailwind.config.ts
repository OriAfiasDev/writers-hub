import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        facebook: '#3b5999',
        twitter: '#55acee',
        linkedin: '#0077b5',
        reddit: '#ff5700',
        instagram: '#e4405f',
      },
    },
  },
  plugins: [],
};
export default config;
