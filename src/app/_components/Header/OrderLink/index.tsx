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
        className="block rounded-lg bg-[#892561] px-4 py-2 font-gothic text-sm text-white"
        whileHover={{ scaleY: 0.92, scaleX: 0.97 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        Bestellen
      </MotionLink>
    </div>
  );
};

export default OrderLink;
