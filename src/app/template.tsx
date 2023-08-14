import React from "react";
import PageTransition from "./_components/PageTransition";

const Template: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <PageTransition>{children}</PageTransition>;
};

export default Template;
