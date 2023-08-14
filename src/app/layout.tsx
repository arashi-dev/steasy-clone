import React from "react";
import "~/styles/globals.css";
import Header from "./_components/Header";
import clsx from "clsx";
import { gothic } from "./_fonts";
import Footer from "./_components/Footer";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Steasy",
    default: "Steasy",
  },
};

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="de">
      <body className={clsx("bg-pebble-100", gothic.variable)}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default Layout;
