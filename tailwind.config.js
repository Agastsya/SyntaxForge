export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JSX/TSX files in `src`
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"], // Add your custom font here
      },
      colors: {
        background: "rgba(var(--background))",
      },
    },
  },
  plugins: [],
};
