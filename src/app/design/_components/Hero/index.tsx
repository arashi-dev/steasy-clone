import React from "react";
import Container from "~/app/_components/Container";
import Title from "~/app/_components/Title";

import DesignTopImage from "./design-top.png";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <Container className="mt-48 md:mt-60">
      <Title>Technologie, im Namen des guten Geschmacks.</Title>

      <Image src={DesignTopImage} alt="design-top" />
    </Container>
  );
};

export default Hero;
