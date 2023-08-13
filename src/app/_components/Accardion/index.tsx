"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

type AccordionProps = React.PropsWithChildren<{
  label: string;
}>;

const Accordion: React.FC<AccordionProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-sm bg-pebble-200 p-4 hover:bg-pebble-300">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between font-gothic text-base"
      >
        <p>{label}</p>

        <span className="text-xl">
          {isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </span>
      </button>

      <motion.div
        className="overflow-hidden"
        initial={{ height: 0 }}
        animate={isOpen ? { height: "max-content" } : { height: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p className="h-max w-full pt-4 font-gothic text-base">{children}</p>
      </motion.div>
    </div>
  );
};

export default Accordion;
