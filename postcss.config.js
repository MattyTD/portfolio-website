/**
 * PostCSS configuration
 *
 * Configuration for Tailwind CSS and Autoprefixer
 * Source: https://tailwindcss.com/docs/installation/using-postcss
 */
module.exports = {
  plugins: {
    // Use Tailwind CSS for utility-first CSS (with the separate PostCSS plugin)
    '@tailwindcss/postcss': {},
    // Add vendor prefixes to CSS rules using values from Can I Use
    autoprefixer: {},
  },
};
