import flowbitePlugin from 'flowbite/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#f1f8fa',
          100: '#dcedf1',
          200: '#bddde4',
          300: '#90c4d0',
          400: '#64a7b9',
          500: '#40869a',
          600: '#386e82',
          700: '#325a6c',
          800: '#304d5a',
          900: '#2c414d',
          950: '#192a33',
        }
      }
    }
  },

  plugins: [flowbitePlugin]
}

