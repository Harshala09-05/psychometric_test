/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#eeecec", // Add your custom color here
      },
      fontSize: {
        custom: "clamp(0.8rem,2vw,1.2rem)",
      },
      fontFamily: {
        custom: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
