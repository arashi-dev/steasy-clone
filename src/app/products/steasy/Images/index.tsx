"use client";

import React, { useContext, useMemo, useRef } from "react";
import { VariantContext } from "../contexts";
import { findVariantById } from "../data";
import Image from "next/image";

import SteasyTray1 from "./../_images/Steasy-tray_x2_029037c3-84d9-4755-95d6-daac560217f5.webp";
import SteasyTray2 from "./../_images/Steasy-tray_x4_2b9c0de5-5ee9-484e-8aab-3a79d8d2bef6.webp";
import { motion } from "framer-motion";

const Images: React.FC = () => {
  const variantId = useContext(VariantContext);

  const variant = useMemo(() => findVariantById(variantId), [variantId]);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="-order-1 h-max overflow-hidden lg:order-1"
    >
      <motion.ul
        drag="x"
        dragConstraints={containerRef}
        className="flex w-max flex-row gap-2 lg:w-auto lg:flex-col lg:gap-6"
      >
        {[...(variant?.images ?? []), SteasyTray1, SteasyTray2].map(
          (imageSrc, i) => (
            <li key={i}>
              <Image
                src={imageSrc}
                alt=""
                draggable={false}
                className="block w-80 rounded-lg lg:w-full"
              />
            </li>
          ),
        )}
      </motion.ul>
    </div>
  );
};

export default Images;
