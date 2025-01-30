/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        red: "#a40505",
        white: "#ffffff",
        black: "#000000",
        grey: "#979797",
        grey_transparent: "#d9d9d999",
        green: "#1A8300",
        wgrey: "#F2F2F2",
      },
      fontFamily: {
        PublicSans: ["Public Sans", "monospace"],
      },
    },
  },
  plugins: [],
})

