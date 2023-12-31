import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"

// --row-padding: 20px 0;
// --gutter: 24px;
// --page-width: calc(1224px + var(--gutter) * 2);

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gothic: ["var(--font-gothic)"],
    },
    borderRadius: {
      sm: ".5rem",
      md: "1rem",
      lg: "1.5rem",
      full: "9999px"
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
    extend: {
      gridTemplateRows: {
        "11": "repeat(11, 1fr)"
      },
      boxShadow: {
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.10);",
      },
      cursor: {
        ziehen: `url("data:image/svg+xml;charset=UTF-8,%3csvg width='92' height='92' viewBox='0 0 92 92' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='46' cy='46' r='46' fill='%23892561'/%3e%3cpath d='M26.9936 50V47.344H23.2176L26.9936 40.608V38.16H19.5216V40.816H23.6016L19.5216 48.016V50H26.9936ZM30.866 40.176V38.16H28.21V40.176H30.866ZM30.866 50V41.12H28.21V50H30.866ZM41.5881 46.368C41.6361 46.128 41.6521 45.92 41.6521 45.664C41.6521 42.912 39.6201 40.816 36.9641 40.816C34.3561 40.816 32.3081 43.024 32.3081 45.584C32.3081 48.224 34.4521 50.288 37.0121 50.288C38.8841 50.288 40.5001 49.152 41.3481 47.216H38.6281C38.1961 47.776 37.7321 48.048 37.0121 48.048C35.9241 48.048 35.0761 47.376 34.9321 46.368H41.5881ZM34.9641 44.576C35.1721 43.632 36.0041 43.056 36.9641 43.056C37.9881 43.056 38.7881 43.664 38.9961 44.576H34.9641ZM51.3559 50V44.416C51.3559 42.096 50.1239 40.816 48.0919 40.816C47.0359 40.816 46.1719 41.248 45.7879 41.968V38.16H43.1319V50H45.7879V45.008C45.7879 43.904 46.2679 43.312 47.2759 43.312C48.2519 43.312 48.6999 43.968 48.6999 45.12V50H51.3559ZM62.0413 46.368C62.0893 46.128 62.1053 45.92 62.1053 45.664C62.1053 42.912 60.0733 40.816 57.4173 40.816C54.8093 40.816 52.7613 43.024 52.7613 45.584C52.7613 48.224 54.9053 50.288 57.4653 50.288C59.3373 50.288 60.9533 49.152 61.8013 47.216H59.0813C58.6493 47.776 58.1853 48.048 57.4653 48.048C56.3773 48.048 55.5293 47.376 55.3853 46.368H62.0413ZM55.4173 44.576C55.6253 43.632 56.4573 43.056 57.4173 43.056C58.4413 43.056 59.2413 43.664 59.4493 44.576H55.4173ZM71.809 50V44.336C71.809 41.712 70.113 40.816 68.513 40.816C67.441 40.816 66.657 41.152 66.097 42.064H66.065V41.12H63.585V50H66.241V45.104C66.241 43.904 66.689 43.312 67.761 43.312C68.737 43.312 69.153 43.872 69.153 45.072V50H71.809Z' fill='white'/%3e%3c/svg%3e") 46 46,pointer`
      },
      fontSize: {
        "2xs": [".5rem", ".75rem"],
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, addComponents }) => {
      matchUtilities({
        "grid-area": value => ({
          gridArea: value
        }),
      })

      addComponents({
        ".no-scrollbar": {
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".select-down-chevron": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 10L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929L18 10' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right .7rem top 50%",
          backgroundSize: "100 auto",
          appearance: "none"
        }
      });
    })
  ],
} satisfies Config;
