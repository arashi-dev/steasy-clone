import React from "react";
import Container from "~/app/_components/Container";
import Videos from "./Videos";
import Caption from "../Caption";
import Image from "next/image";

import DimensionsImage from "./Dimensions_new@2x.png";
import DimensionsMobileImage from "./dimensions-mobile_new.png";
import IconCard from "./IconCard";
import {
  IconBill,
  IconCharging,
  IconClock,
  IconNoWater,
  IconPencil,
  IconRain,
  IconTongue,
  IconWindow,
} from "./icons";

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

        <div className="mt-5 grid grid-cols-2 grid-rows-4 gap-x-12 gap-y-5 md:mt-24 md:grid-cols-4 md:grid-rows-2 md:gap-12">
          <IconCard
            icon={<IconTongue />}
            text="Geschmack wird bestmöglich bewahrt"
          />
          <IconCard icon={<IconRain />} text="Kein Geruch dringt nach aussen" />
          <IconCard
            icon={<IconNoWater />}
            text="Auslaufsicher transportierbar"
          />
          <IconCard
            icon={<IconWindow />}
            text="Spülmaschinenfeste Edelstahl-Foodschale"
          />
          <IconCard
            icon={<IconPencil />}
            text="Schweizerische Ingenieurskunst"
          />
          <IconCard icon={<IconCharging />} text="Kabellos steamen dank Akku" />
          <IconCard
            icon={<IconBill />}
            text="Bedienung via App (Bluetooth®)"
          />
          <IconCard
            icon={<IconClock />}
            text="Schonend steamen in nur 15 min"
          />
        </div>
      </div>
    </Container>
  );
};

export default Features;
