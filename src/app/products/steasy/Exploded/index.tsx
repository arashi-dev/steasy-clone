import Image from "next/image";
import React from "react";
import Container from "~/app/_components/Container";

import SteasyGreenImage from "./NEW_Steasy_Green_AlphaStills_04_EDIT.png";

const Exploded: React.FC = () => {
  return (
    <Container innerClassName="flex items-center py-16 md:py-5 lg:py-20 flex-col md:flex-row">
      <div className="md:w-1/2 md:px-6">
        <Image src={SteasyGreenImage} alt="" className="w-full" />
      </div>

      <div className="px-6 pt-12 md:w-1/2 md:px-6 lg:pr-32 lg:pl-20">
        <h2 className="mb-7 font-gothic text-3xl font-bold md:text-4xl lg:mb-10 lg:text-5xl">
          Dein Lunchdate mit Traummassen.
        </h2>

        <p className="my-4 font-gothic text-base/tight md:text-lg/tight lg:my-5 lg:text-xl">
          Steasy wiegt etwas mehr als 1 kg und bietet Platz für Gerichte bis
          knapp 450 g. Das Steamen dauert nur 15 min und du kannst deinen Lunch
          gleich heiss aus der Foodschale geniessen.
        </p>
      </div>
    </Container>
  );
};

export default Exploded;
