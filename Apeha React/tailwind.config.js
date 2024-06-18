/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        600: "calc(100% - 80px)",
      },
    },
  },
  plugins: [],
};
