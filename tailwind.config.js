/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts}",
    "./src/**/*"
],
  theme: {

    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4338ca",
          "secondary": "#ffffff",
          "accent": "#ffffff",
          "neutral": "#ffffff",
          "base-100": "#ffffff",
          "info": "#ffffff",
          "success": "#4338ca",
          "warning": "#ffffff",
          "error": "#ffffff",
        },
      },
    ],
  },
  plugins: [
    require("daisyui")
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
  ],
}

