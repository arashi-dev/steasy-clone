"use client";

import clsx from "clsx";
import React, { useRef, useState } from "react";
import { BackgroundContext } from "../context";
import { useInView } from "framer-motion";
import { useViewportSize } from "@mantine/hooks";

type BackgroundTransitionProviderProps = React.PropsWithChildren<{
  className?: string;
}>;

const BackgroundTransitionProvider: React.FC<
  BackgroundTransitionProviderProps
> = ({ className, children }) => {
  const [colorClassName, setColor] = useState("");

  const ref = useRef<HTMLDivElement>(null);

  const { height } = useViewportSize();

  const isInView = useInView(ref, {
    margin: `-${height * 0.4}px 0px -${height * 0.4}px 0px`,
  });

  return (
    <BackgroundContext.Provider value={setColor}>
      <div
        ref={ref}
        className={clsx(
          "transition-[background] duration-300",
          className,
          isInView ? colorClassName : "bg-transparent",
        )}
      >
        {children}
      </div>
    </BackgroundContext.Provider>
  );
};

export default BackgroundTransitionProvider;
