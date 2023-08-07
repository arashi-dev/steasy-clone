"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import OrderLink from "./OrderLink";
import NavItem from "../NavItem";
import LogoIcon from "./LogoIcon";
import { motion } from "framer-motion";

const links = [
  { href: "/design", label: "Produktdetails" },
  { href: "/story", label: "Über uns" },
  { href: "/contacts", label: "Kontakt" },
] as const;

const Header: React.FC = () => {
  const [isNavOpened, setIsNavOpened] = useState(false);
  // const headerRef = useRef<HTMLDivElement>(null);
  // const [spaceHeight, setSpaceHeight] = useState(0);

  // const handleSpaceHeight = useCallback(() => {
  //   setSpaceHeight(
  //     (headerRef.current?.offsetHeight ?? 0) +
  //       (headerRef.current?.offsetTop ?? 0),
  //   );
  // }, []);

  // useLayoutEffect(() => {
  //   handleSpaceHeight();
  // }, [handleSpaceHeight]);

  // useWindowEvent("resize", handleSpaceHeight);
  // useWindowEvent("orientationchange", handleSpaceHeight);

  return (
    <>
      {/* <span className="block" style={{ height: spaceHeight }} /> */}
      <header
        // ref={headerRef}
        className="
          fixed left-1/2 top-12 z-30 w-[calc(100vw-theme(spacing.6)*2)] max-w-[50.5rem] -translate-x-1/2 px-8 py-4
          after:absolute after:left-0 after:top-0 after:-z-10 after:block after:h-full after:w-full after:rounded-md after:bg-white after:bg-opacity-50 after:shadow-2xl after:backdrop-blur-sm after:content-['']
          md:justify-normal
        "
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex w-max items-center gap-3 sm:gap-5">
            <button
              type="button"
              className="md:hidden"
              onClick={() => setIsNavOpened((prev) => !prev)}
            >
              <RxHamburgerMenu className="text-lg" />
            </button>

            <Link href="/" className="max-w-[6rem] flex-1">
              <LogoIcon />
            </Link>
          </div>

          <ul className="mx-auto hidden w-max gap-5 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <NavItem href={link.href}>{link.label}</NavItem>
              </li>
            ))}
          </ul>

          <div className="flex w-max items-center gap-3 sm:gap-5">
            <OrderLink />

            <button type="button">
              <BsCart2 className="text-2xl" />
            </button>
          </div>
        </div>

        <motion.div
          className="overflow-hidden"
          initial="initial"
          animate={isNavOpened ? "animate" : undefined}
          variants={{
            initial: { height: 0 },
            animate: { height: "max-content" },
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <div className="py-8 md:hidden">
            <motion.span
              variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
              className="absolute left-0 top-0 -z-10 h-full w-full rounded-md bg-white"
            />

            <ul className="flex flex-col gap-7">
              {links.map((link) => (
                <li key={link.label}>
                  <NavItem {...link} />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Header;
