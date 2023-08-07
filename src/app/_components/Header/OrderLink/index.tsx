"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const MotionLink = motion(Link);

const OrderLink: React.FC = () => {
  return (
    <div>
      <MotionLink
        href="/products/steasy"
        className="block rounded-sm bg-ginger-500 px-4 py-2 font-gothic text-sm text-white"
        whileHover={{ scale: [0.957, 0.895] }}
        transition={{ duration: 0.25 }}
      >
        Bestellen
      </MotionLink>
    </div>
  );
};

export default OrderLink;
