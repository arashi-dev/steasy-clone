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

      <Container className="py-20 lg:py-40">
        <p className="mx-auto w-full text-center font-gothic text-2xl/tight font-bold md:w-10/12 md:text-4xl/tight lg:w-8/12 lg:text-[2.5rem]/tight">
          “Wir sind überzeugt, dass die wichtigste Mahlzeit am Tag ein warmer
          Lunch ist, denn er gibt Energie für Körper und Geist. Es wird Zeit,
          ihm mehr gerecht zu werden.”
        </p>

        <p className="mt-7 text-center font-gothic text-lg text-ginger-500 md:text-xl lg:mt-12 lg:text-2xl">
          Johannes, Claudio und Reto
        </p>
      </Container>
    </div>
  );
};

export default Page;
