import type { Config } from 'tailwindcss';

/**
 * Design tokens live in app/globals.css (:root). Change the resume palette there
 * and the whole site follows — nothing is hard-coded in components.
 */
const rgb = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './content/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: rgb('--ink'),
        body: rgb('--body'),
        muted: rgb('--muted'),
        accent: rgb('--accent'),
        'accent-text': rgb('--accent-text'),
        cream: rgb('--cream'),
        paper: rgb('--paper'),
        'on-dark': rgb('--on-dark'),
      },
      fontFamily: { sans: ['var(--font-sans)', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'] },
      maxWidth: { site: '1120px' },
      borderColor: { DEFAULT: 'rgb(var(--ink) / 0.12)' },
    },
  },
  plugins: [],
};
export default config;
