import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#4A4A4A"
        },
        egray: {
          100: "#F1F3F4",
          200: "#EAEAEA",
          500: "#D3D3D3"
        },
        eblue: {
          50: "#D6E4EC",
          500: "#007BFF"
        },
        enavy: {
          700: "#031634"
        },
        ered: {
          300: "#FF6F61",
        },
        egold: {
          50: "#F5E6CA"
        },
        epink: {
          50: "#F9D5E5"
        },
        success: {
          DEFAULT: "#5BA142"
        },
        warning: {
          DEFAULT:"#FFC107",
        },
        error: {
          DEFAULT: "#C52121"
        },
    },
    },
  },
  plugins: [],
};
export default config;
