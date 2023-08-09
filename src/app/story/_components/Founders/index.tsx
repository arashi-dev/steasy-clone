import React from "react";
import Container from "~/app/_components/Container";
import Founder from "./Founder";

import Bio1Image from "./bio.png";
import Bio2Image from "./bio2.png";
import Bio3Image from "./bio3.png";

const Founders: React.FC = () => {
  return (
    <Container className="py-14 lg:py-[7.5rem]">
      <h2 className="text-center font-gothic text-4xl font-bold lg:text-5xl">
        Das Gründerteam.
      </h2>

      <div className="mt-10 flex flex-col gap-y-10 md:flex-row">
        <Founder
          imageSrc={Bio1Image}
          name="Claudio Ruiz"
          role="CEO"
          bio="Dipl. Ingenieur, Robotertechniker, Hardware-Profi, Kinofan und Tapaskenner."
        />

        <Founder
          imageSrc={Bio2Image}
          name="Reto Muhl"
          role="CTO"
          bio="Dipl. Ingenieur, Softwareentwickler und 3D-Print-Experte. Mag Mountainbikes und Dumplings."
        />

        <Founder
          imageSrc={Bio3Image}
          name="Johannes Hofer"
          role="CMO"
          bio="Dipl. Betriebsökonom und der Mann für unser Marketing. Auch Violinist und Pastalover."
        />
      </div>
    </Container>
  );
};

export default Founders;
