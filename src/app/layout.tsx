import React from "react";
import "~/styles/globals.css";
import Header from "./_components/Header";
import clsx from "clsx";
import { gothic } from "./_fonts";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="de">
      <body className={clsx("bg-stone-200", gothic.variable)}>
        <Header />

        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
