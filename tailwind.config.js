/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "1/5": "20%",
      },
      colors: {
        primary: "#fff",
        "primary-1": "#363738",
        secondary: "#F5F5F5",
        "secondary-2": "#FEFAF1",
        "secondary-3": "#DB4444",
        "color-text-primary": "#FAFAFA",
        "color-text-secondary": "#7D8184",
        "color-text-black": "#000000",
        "color-black": "#000000",
        "color-btn-2": "#DB4444",
      },
    },
  },
  plugins: [],
};
