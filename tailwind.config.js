import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark luxe palette for NonStopShop
        ink: "#0E0D0B", // page background
        coal: "#171510", // cards, navbar, panels
        smoke: "#26231B", // borders, dividers, hover surfaces
        ivory: "#F3EDE0", // primary text
        stone: "#A39B8B", // secondary text
        champagne: {
          DEFAULT: "#D4B483", // accent: buttons, prices, highlights
          deep: "#B8935A", // accent hover/pressed
          soft: "#E8D5B0", // light accent for small details
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.04em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212, 180, 131, 0.35), 0 12px 40px -12px rgba(212, 180, 131, 0.25)",
      },
    },
  },
  plugins: [],
});
