/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sx: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        primary: "#f5f505",
        secondary: "#d22200",
      },
      spacing: {
        6: "2.5rem",
        16: "64px",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Itim: ["Itim"],
      },
      backgroundImage: {
        img1: "url('/public/back2.webp')",
      },
    },
  },
  plugins: [],
};
