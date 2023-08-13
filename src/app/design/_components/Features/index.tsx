import React from "react";
import Container from "~/app/_components/Container";
import Videos from "./Videos";
import Caption from "../Caption";
import Image from "next/image";

import DimensionsImage from "./Dimensions_new@2x.png";
import DimensionsMobileImage from "./dimensions-mobile_new.png";
import FeatureIconsGroup from "~/app/_components/FeatureIconsGroup";

const Features: React.FC = () => {
  return (
    <Container className="relative bg-green-700 py-14 md:py-20">
      <Caption
        label="Unkompliziert fortschrittlich."
        text="Diese zwei Kurzvideos zeigen dir, wie einfach du Steasy einrichten und zum Steamen benutzen kannst."
      />

      <Videos />

      <Caption
        label="Dein Lunchdate mit Traummassen."
        text="Steasy wiegt etwas mehr als 1 kg und bietet Platz für Gerichte bis knapp 450 g. Das Steamen dauert nur 15 min und du kannst deinen Lunch gleich heiss aus der Foodschale geniessen."
      />

      <div className="mx-auto lg:w-10/12">
        <Image
          src={DimensionsImage}
          alt=""
          className="hidden w-full md:block"
        />
        <Image
          src={DimensionsMobileImage}
          alt=""
          className="w-full md:hidden"
        />

        <FeatureIconsGroup className="text-white" />
      </div>
    </Container>
  );
};

export default Features;
