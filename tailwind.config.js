/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      container: {
        // center: true,
      },
      fontFamily: {
        sans: 'Inter',
        mono: 'Space Mono',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
    colors: {
      black: '#0d0d0d',
      white: '#ffffff',
      onyx: '#181818',

      'dark-gray': '#808080',
      'medium-gray': '#80808080',
      'light-gray': '#c5c5c5',

      'light-blue': '#3F64EA6E',
      'light-red': '#E93F406E',
      'light-yellow': '#FFB8006E',
    },
  },
  plugins: [],
}
