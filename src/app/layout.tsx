import React from "react";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
