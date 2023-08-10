import clsx from "clsx";
import React from "react";

type TitleProps = React.PropsWithChildren<{
  className?: string;
}>;

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        "mx-auto w-full text-center font-gothic text-3xl/tight font-bold md:w-8/12 md:text-6xl/tight",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
