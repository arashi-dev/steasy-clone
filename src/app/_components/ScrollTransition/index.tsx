"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

type ScrollTransitionProps = React.PropsWithChildren<{
  className?: string;
  from: number;
  to: number;
}>;

const ScrollTransition: React.FC<ScrollTransitionProps> = ({
  children,
  className,
  from,
  to
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  useMotionValueEvent(y, "change", console.log);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollTransition;
