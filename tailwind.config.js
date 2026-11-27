import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E0D0B",
        coal: "#171510",
        smoke: "#26231B",
        ivory: "#F3EDE0",
        stone: "#A39B8B",
        champagne: {
          DEFAULT: "#D4B483",
          deep: "#B8935A",
          soft: "#E8D5B0",
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
