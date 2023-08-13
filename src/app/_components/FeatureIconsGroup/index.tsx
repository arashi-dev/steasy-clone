import React from "react";
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
import IconCard from "./IconCard";
import clsx from "clsx";

type FeatureIconsGroupProps = {
  className?: string;
};

const FeatureIconsGroup: React.FC<FeatureIconsGroupProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "mt-5 grid grid-cols-2 grid-rows-4 gap-x-12 gap-y-5 md:mt-24 md:grid-cols-4 md:grid-rows-2 md:gap-12",
        className,
      )}
    >
      <IconCard
        icon={<IconTongue />}
        text="Geschmack wird bestmöglich bewahrt"
      />
      <IconCard icon={<IconRain />} text="Kein Geruch dringt nach aussen" />
      <IconCard icon={<IconNoWater />} text="Auslaufsicher transportierbar" />
      <IconCard
        icon={<IconWindow />}
        text="Spülmaschinenfeste Edelstahl-Foodschale"
      />
      <IconCard icon={<IconPencil />} text="Schweizerische Ingenieurskunst" />
      <IconCard icon={<IconCharging />} text="Kabellos steamen dank Akku" />
      <IconCard icon={<IconBill />} text="Bedienung via App (Bluetooth®)" />
      <IconCard icon={<IconClock />} text="Schonend steamen in nur 15 min" />
    </div>
  );
};

export default FeatureIconsGroup;
