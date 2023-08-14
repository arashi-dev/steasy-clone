"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const PageTransition: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.main
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        }}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default PageTransition;
