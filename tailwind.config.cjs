/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ['Vazirmatn VF', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.3s ease-in',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
