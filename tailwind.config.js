/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      "test2": "#ffffff"
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        alfilo: {
          primary: "#333333",
          "primary-focus": "#8cb9ca",
          secondary: "#ffffff",
          accent: "#0394cc",
          neutral: "#262626",
          "neutral-focus": "#0394cc",
          "base-100": "#333333",
          "base-200": "#262626",

        }
      }],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
