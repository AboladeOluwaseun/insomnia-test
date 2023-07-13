/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        button: "linear-gradient(122deg,#fee5a5,#fea5a5 62%,#f69393 100%,#fff)",
        primary:
          "linear-gradient(122deg,#f17b85,#f79393 15%,#fee4a5 45%,#9ae8b0 65%,#5ba5d0 90%,#9078d0);",
      },
      colors: {
        primary:
          "linear-gradient(122deg,#f17b85,#f79393 15%,#fee4a5 45%,#9ae8b0 65%,#5ba5d0 90%,#9078d0);",
      },
    },
  },
  plugins: [],
};
