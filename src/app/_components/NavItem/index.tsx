"use client";

import { usePathname } from "next/navigation";
import { MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import type { LinkHref } from "~/types";
import clsx from "clsx";

const MotionLink = motion(Link);

export type NavItemProps = React.PropsWithChildren<{
  href: LinkHref;
  className?: string;
}>;

const NavItem: React.FC<NavItemProps> = ({ href, children, className }) => {
  const pathname = usePathname();

  return (
    <MotionConfig transition={{ duration: 0.2, ease: "easeOut" }}>
      <MotionLink
        className={clsx("relative w-max font-gothic text-base/none", className)}
        href={href}
        initial="initial"
        animate={pathname === href ? "animate" : undefined}
        whileHover="animate"
        variants={{
          animate: {
            color: "#892561",
          },
        }}
      >
        {children}

        <motion.span
          variants={{ initial: { scaleX: 0 }, animate: { scaleX: 1 } }}
          className="absolute -bottom-2 block h-[2px] w-full bg-ginger-500"
        />
      </MotionLink>
    </MotionConfig>
  );
};

export default NavItem;
