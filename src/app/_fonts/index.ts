import { Gothic_A1 } from "next/font/google";

export const gothic = Gothic_A1({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  fallback: ["Times New Roman", "serif"],
  variable: "--font-gothic",
  display: "swap",
  subsets: ["latin"],
});

// export const avantGardeGothic = localFont({
//   src: [
//     {
//       path: "./avant-garde-gothik/bdObl.woff2",
//       weight: "400",
//     },
//     {
//       path: "/fonts/webFonts/AvantGardeGothicITCW01Md/font.woff2",
//       weight: "600",
//     },
//     {
//       path: "/fonts/webFonts/AvantGardeGothicITCW02Bd/font.woff2",
//       weight: "800",
//     },
//   ],
//   fallback: ["Times New Roman", "serif"],
//   display: "block",
//   variable: "--font-gothic",
// });

// export const ITCAvantGarde = localFont({
//   src: [
//     {
//       path: "/fonts/webFonts/ITCAvantGardeW04-BkObl/font.woff2",
//       weight: "200",
//     },
//     {
//       path: "/fonts/webFonts/ITCAvantGardeW04-Demi/font.woff2",
//       weight: "300",
//     },
//     {
//       path: "/fonts/webFonts/ITCAvantGardePro-DemiObl/font.woff2",
//       weight: "400",
//     },
//     {
//       path: "/fonts/webFonts/ITCAvantGardePro-Bk/font.woff2",
//       weight: "500",
//     },
//     {
//       path: "/fonts/webFonts/ITCAvantGardePro-MdObl/font.woff2",
//       weight: "600",
//     },
//     {
//       path: "/fonts/webFonts/ITCAvantGardePro-XLtObl/font.woff2",
//       weight: "700",
//     },
//     {
//       path: "/fonts/webFonts/ITCAvantGardePro-XLt/font.woff2",
//       weight: "800",
//     },
//   ],
//   fallback: ["Times New Roman", "serif"],
//   display: "block",
//   variable: "--font-itc",
// });
