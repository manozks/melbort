/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
    extend: {
      fontFamily: {
        // This overrides the default 'font-serif' to use your custom font first
        serif: ['"Arno Pro"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}