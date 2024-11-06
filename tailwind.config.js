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
        primary: "#17cfb3",
        primaryDark: "#26baa4",
        secondary1: "	#6173ff",
        secondary2: "		#6173ffee",
        secondary3: "		#0054a8",
        grayheader: "#585858",
      },
      fontFamily: {
        bai: ["Bai Jamjuree", "sans-serif"],
      },
      spacing: {
        6: "2.5rem",
        16: "64px",
        128: "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },

      backgroundImage: {
        img1: "url('/public/back2.webp')",
      },
    },
  },
  plugins: [],
};
