import React from "react";
import Container from "~/app/_components/Container";
import Title from "~/app/_components/Title";

import DesignTopImage from "./design-top.png";
import Image from "next/image";
import Sticker from "~/app/_components/Sticker";

const Hero: React.FC = () => {
  return (
    <Container className="relative mt-48 md:mt-60">
      <Title>Technologie, im Namen des guten Geschmacks.</Title>

      <Image src={DesignTopImage} alt="design-top" />
      <Sticker className="absolute -bottom-[12vw] right-[2vw] z-10 md:-bottom-24 md:top-auto lg:right-20" />
    </Container>
  );
};

export default Hero;
