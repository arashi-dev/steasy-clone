import { type Config } from "tailwindcss";

// --row-padding: 20px 0;
// --gutter: 24px;
// --page-width: calc(1224px + var(--gutter) * 2);

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.10);",
    },
    fontFamily: {
      gothic: ["var(--font-gothic)"],
    },
    borderRadius: {
      sm: ".5rem",
      md: "1rem",
      lg: "1.5rem",
    },
    space: {
      sm: "0.625rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "2.5rem",
      "2xl": "3rem",
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      pebble: {
        "100": "#f0efec",
        "200": "#e6e5e0",
        "300": "#dad8d0",
      },
      green: {
        "100": "#edf2ed",
        "300": "#c7cdc3",
        "500": "#617864",
        "700": "#242e24",
        "900": "#1f241f",
      },
      salt: {
        "100": "#edf2ed",
        "300": "#d2d0cb",
        "500": "#888682",
        "700": "#4c4a44",
        "900": "#262522",
      },
      ginger: {
        "100": "#f2edf1",
        "300": "#d5d4da",
        "500": "#892561",
        "700": "#55334a",
        "900": "#382231",
      },
      neutral: {
        "100": "#f5f5f5",
        "300": "#d4d4d4",
        "500": "#656565",
        "700": "#404040",
        "900": "#171717",
      },
    },
  },
  plugins: [],
} satisfies Config;
