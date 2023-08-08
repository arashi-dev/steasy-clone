import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import React from "react";
import Container from "~/app/_components/Container";

import Image1 from "./gallery_01.jpg";
import Image2 from "./gallery_02.jpg";
import Image3 from "./gallery_03.jpg";
import Image4 from "./gallery_04.jpg";
import Image5 from "./gallery_05.jpg";
import BackgroundTransitionConsumer from "../BackgroundTransition/Consumer";

type ItemProps = {
  imageSrc: ImageProps["src"];
  className?: string;
};

const Item: React.FC<ItemProps> = ({ imageSrc, className }) => {
  return (
    <div className={clsx("relative h-full w-full", className)}>
      <Image src={imageSrc} alt="" className="rounded-md md:rounded-lg" />
    </div>
  );
};

const Intro: React.FC = () => {
  return (
    <BackgroundTransitionConsumer colorClassName="bg-transparent">
      <Container>
        <p className="mx-auto w-[90vw] text-center text-3xl/[1.2] font-bold md:w-[50vw] lg:text-[2.5rem]/[1.2]">
          Steasy ist ein mobiler Mini-Steamer mit eingebautem Akku. Damit kannst
          du deinen vorgekochten Lunch überall hochwertig aufwärmen.
        </p>

        <div className="mt-28 grid grid-cols-[repeat(2,6fr)] grid-rows-11 gap-4 md:grid-cols-[repeat(12,1fr)] md:gap-6">
          <Item
            imageSrc={Image1}
            className="grid-area-[2/1/8/2] md:grid-area-[3/1/11/5]"
          />
          <Item
            imageSrc={Image2}
            className="grid-area-[1/2/4/3] md:grid-area-[1/5/6/10]"
          />
          <Item
            imageSrc={Image3}
            className="grid-area-[8/1/11/2] md:grid-area-[3/10/6/13]"
          />
          <Item
            imageSrc={Image4}
            className="grid-area-[9/2/13/3] md:grid-area-[6/9/10/13]"
          />
          <Item
            imageSrc={Image5}
            className="grid-area-[4/2/9/3] md:grid-area-[6/5/12/9]"
          />
        </div>
      </Container>
    </BackgroundTransitionConsumer>
  );
};

export default Intro;
