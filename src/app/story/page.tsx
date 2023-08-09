import React from "react";
import Hero from "./_components/Hero";
import Founders from "./_components/Founders";
import Container from "../_components/Container";
import Image from "next/image";

import FoundersImage from "./_components/founders.jpg";

const Page: React.FC = () => {
  return (
    <div>
      <Hero />

      <Founders />

      <Container>
        <Image src={FoundersImage} alt="founders" className="rounded-lg" />
      </Container>
    </div>
  );
};

export default Page;
