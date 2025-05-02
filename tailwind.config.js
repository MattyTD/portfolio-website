/**
 * Tailwind CSS configuration
 *
 * Defines content paths, theme extensions, and plugins
 * Source: https://tailwindcss.com/docs/configuration
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Custom color extensions can be added here
      colors: {
        // Example custom colors
        // primary: '#3490dc',
        // secondary: '#ffed4a',
      },
      // Custom font family extensions
      fontFamily: {
        // Example custom fonts
        // sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class', // Enable dark mode with class strategy
  plugins: [],
};
