/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      "alFilo-black": "#000000",
      "alFilo-gray-100": "#333333",
      "alFilo-gray-200": "#262626",
      "alFilo-white": "#ffffff",
      "alFilo-blue": "#0394cc",
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
          primary: "#000000",
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
