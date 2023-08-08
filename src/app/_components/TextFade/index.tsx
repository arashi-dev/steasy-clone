"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

type LineProps = React.PropsWithChildren<{
  className?: string;
}>;

const Line: React.FC<LineProps> = ({ className, children }) => {
  return (
    <span className="relative block overflow-hidden">
      <motion.span
        variants={{ initial: { y: "100%" }, animate: { y: 0 } }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={clsx("block", className)}
      >
        {children}
      </motion.span>
    </span>
  );
};

type TextFadeProps = {
  lines: React.ReactNode[];
  element?: keyof typeof motion;
  className?: string;
  lineClassName?: string;
};

const TextFade: React.FC<TextFadeProps> = ({
  element = "p",
  lines,
  className,
  lineClassName,
}) => {
  const MotionElement = motion[element];

  return (
    <MotionElement
      className={clsx("", className)}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      transition={{ staggerChildren: 0.1 }}
    >
      {lines.map((text, i) => (
        <Line key={i} className={lineClassName}>
          {text}
        </Line>
      ))}
    </MotionElement>
  );
};

export default TextFade;
