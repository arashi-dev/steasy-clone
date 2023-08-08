"use client";

import React, { useContext, useEffect, useRef } from "react";
import { BackgroundContext } from "../context";
import { useInView } from "framer-motion";

type BackgroundTransitionConsumerProps = React.PropsWithChildren<{
  className?: string;
  colorClassName: string;
}>;

const BackgroundTransitionConsumer: React.FC<
  BackgroundTransitionConsumerProps
> = ({ className, children, colorClassName }) => {
  const ref = useRef<HTMLDivElement>(null);
  const setBackgroundClassName = useContext(BackgroundContext);

  const isInView = useInView(ref, {
    amount: 0.3,
  });

  useEffect(() => {
    if (isInView) {
      setBackgroundClassName(colorClassName);
    }
  }, [colorClassName, isInView, setBackgroundClassName]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default BackgroundTransitionConsumer;
