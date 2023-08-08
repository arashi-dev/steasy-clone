"use client"

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

type TextFaceProps = {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
};

const TextFace: React.FC<TextFaceProps> = ({
  lines,
  className,
  lineClassName,
}) => {
  return (
    <motion.p
      className={clsx("", className)}
      initial="initial"
      whileInView="animate"
      transition={{ staggerChildren: 0.1 }}
    >
      {lines.map((text, i) => (
        <Line key={i} className={lineClassName}>
          {text}
        </Line>
      ))}
    </motion.p>
  );
};

export default TextFace;
