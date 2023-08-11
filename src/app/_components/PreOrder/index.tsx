import Image from "next/image";
import React from "react";
import Container from "~/app/_components/Container";

import ProductsImage from "./products.jpg";
import ProductsMobileImage from "./mobile_preorder_img_sq@2x.jpg";
import Link from "next/link";
import ScrollTransition from "../ScrollTransition";

const PreOrder: React.FC = () => {
  return (
    <Container innerClassName="relative my-24 md:my-36">
      <ScrollTransition from={100} to={-100} className="relative w-full md:w-3/4">
        <Image
          src={ProductsImage}
          alt=""
          className="hidden rounded-lg md:block"
        />
        <Image
          src={ProductsMobileImage}
          alt=""
          className="rounded-md md:hidden"
        />
      </ScrollTransition>

      <div className="relative z-10 mx-auto -mt-8 w-[calc(100%-theme(spacing.6)*2)] rounded-md bg-pebble-100 px-4 py-8 shadow-xl md:absolute md:right-0 md:top-1/2 md:mt-0 md:w-4/12 md:-translate-y-1/2 md:px-10 md:py-12">
        <p className="font-gothic text-2xl font-bold lg:text-4xl">
          So einfach zu bestellen, wie zu bedienen.
        </p>

        <Link
          href="/products/steasy"
          className="mt-7 block w-max rounded-sm bg-black px-5 py-4 font-gothic text-white transition-all duration-[250ms] hover:scale-x-[.961] hover:scale-y-[.917]"
        >
          Zum Shop
        </Link>
      </div>
    </Container>
  );
};

export default PreOrder;
