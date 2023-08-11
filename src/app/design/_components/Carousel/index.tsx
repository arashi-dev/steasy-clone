"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Container from "~/app/_components/Container";

import CarouselImage1 from "./01.jpg";
import CarouselImage2 from "./02.jpg";
import CarouselImage3 from "./03.jpg";
import CarouselImage4 from "./04.jpg";
import CarouselImage5 from "./05.jpg";
import CarouselImage6 from "./06.jpg";
import CarouselImage7 from "./07.jpg";
import CarouselImage8 from "./08.jpg";
import CarouselImage9 from "./09.jpg";
import { motion } from "framer-motion";

const images = [
  CarouselImage1,
  CarouselImage2,
  CarouselImage3,
  CarouselImage4,
  CarouselImage5,
  CarouselImage6,
  CarouselImage7,
  CarouselImage8,
  CarouselImage9,
];

const Carousel: React.FC = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <Container className="md:mt-10">
        <h2 className="mx-auto mb-12 md:mb-16 lg:mb-20 w-full px-6 text-center font-gothic text-3xl font-bold md:w-9/12 md:text-5xl lg:w-8/12">
          Designt in der Schweiz und produziert in Europa. Mit viel Liebe zum
          Detail.
        </h2>
      </Container>

      <div className="overflow-hidden">
        <div ref={constraintsRef} className="w-full">
          <motion.ul
            drag="x"
            dragConstraints={constraintsRef}
            className="flex w-max cursor-ziehen gap-6 px-12 md:px-[4.5rem]"
          >
            {images.map((image, i) => (
              <li key={i} className="w-[17.5rem] lg:w-[31rem]">
                <Image
                  src={image}
                  draggable={false}
                  alt=""
                  className="w-full rounded-md"
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </>
  );
};

export default Carousel;
