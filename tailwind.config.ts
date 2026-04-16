import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0A0A0A",
        paper: "#FAFAFA",
        accent: {
          beverage: "#0066CC",
          beauty: "#C9956B",
          professional: "#1A1A1A",
          food: "#E85D2C",
          wellness: "#4A7C59",
        },
        brand: {
          npl: "#0077B6",
          vica: "#2E8B57",
          he: "#D4447C",
          makeit: "#1C1C1C",
          makpro: "#2C2C2C",
          wonhae: "#E63946",
          omoide: "#C17817",
          floaty: "#00B4D8",
          fitmeup: "#588157",
        },
      },
      fontSize: {
        hero: "clamp(36px, 8vw, 120px)",
        headline: "clamp(26px, 5vw, 72px)",
        subhead: "clamp(16px, 2.5vw, 32px)",
      },
      maxWidth: {
        "8xl": "1400px",
        "9xl": "1600px",
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
    },
  },
  plugins: [],
};
export default config;
