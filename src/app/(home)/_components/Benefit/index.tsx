import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import React from "react";
import Container from "~/app/_components/Container";

import ScrollTransition from "../ScrollTransition";
import { type LinkHref } from "~/types";
import clsx from "clsx";
import BackgroundTransitionConsumer from "../BackgroundTransition/Consumer";

type BenefitProps = {
  direction: "rtl" | "ltr";
  title: React.ReactNode;
  description: React.ReactNode;
  linkLabel: React.ReactNode;
  linkHref: LinkHref;
  largeImageSrc: ImageProps["src"];
  smallImageSrc: ImageProps["src"];
  color: "green" | "ginger";
};

const variants = {
  green: {
    bg: "bg-green-700",
    shadowBox: "bg-green-900",
    text: "text-white",
  },
  ginger: {
    bg: "bg-ginger-700",
    shadowBox: "bg-ginger-900",
    text: "text-white",
  },
} as const;

const Benefit: React.FC<BenefitProps> = ({
  color,
  description,
  direction,
  largeImageSrc,
  linkHref,
  linkLabel,
  smallImageSrc,
  title,
}) => {
  const variant = variants[color];

  return (
    <BackgroundTransitionConsumer colorClassName={variant.bg}>
      <Container
        className={variant.text}
        innerClassName={clsx(
          "flex items-center flex-col",
          direction === "rtl" ? "md:flex-row-reverse" : "md:flex-row",
        )}
      >
        <div
          dir={direction}
          className="grid w-full grid-cols-12 grid-rows-[repeat(15,31px)] gap-x-6 px-6 md:order-2 md:w-1/2 md:grid-cols-6 md:grid-rows-[repeat(10,70px)]"
        >
          <div className="col-[1/11] row-[3/16] flex items-center md:col-[2/6] md:row-[3/11]">
            <div
              className={clsx(
                "mx-auto block aspect-[390/562] h-full rounded-lg md:w-full",
                variant.shadowBox,
              )}
            />
          </div>

          <ScrollTransition
            from={50}
            to={-50}
            className="relative col-[2/12] row-[2/14] md:col-[1/5] md:row-[1/9]"
          >
            <Image
              src={largeImageSrc}
              alt=""
              fill
              className="rounded-lg object-cover"
            />
          </ScrollTransition>

          <ScrollTransition
            from={-20}
            to={20}
            className="relative z-10 col-[6/13] row-[11/16] md:col-[4/7] md:row-[7/10]"
          >
            <Image
              src={smallImageSrc}
              alt=""
              fill
              className="rounded-lg object-cover"
            />
          </ScrollTransition>
        </div>

        <div className="mt-12 px-5 font-gothic md:mt-0 md:w-1/2 lg:px-10">
          <h3 className="text-2xl font-bold md:text-3xl lg:text-5xl">
            {title}
          </h3>

          <p className="mt-5 text-lg/tight md:mt-7 lg:text-xl">{description}</p>

          <Link
            href={linkHref}
            className="mt-5 block w-max rounded-sm bg-white px-5 py-4 text-sm text-black md:mt-7"
          >
            {linkLabel}
          </Link>
        </div>
      </Container>
    </BackgroundTransitionConsumer>
  );
};

export default Benefit;
