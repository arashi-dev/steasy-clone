import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "~/app/_components/Container";

import AppStoreImage from "./appstore-button.png";
import GooglePlayImage from "./play-button.png";
import GermanScreenImage from "./german_screen_desktop.png";

const MobileApp: React.FC = () => {
  return (
    <Container innerClassName="flex items-center py-16 md:py-5 lg:py-20 flex-col md:flex-row">
      <div className="md:order-2 md:w-1/2 md:px-6">
        <Image src={GermanScreenImage} alt="" className="w-full" />
      </div>

      <div className="px-6 pt-12 md:w-1/2 md:px-6 lg:pl-32 lg:pr-20">
        <h2 className="mb-7 font-gothic text-3xl font-bold md:text-4xl lg:mb-10 lg:text-5xl">
          Die Fernbedienung für deinen Lunch.
        </h2>

        <p className="my-4 font-gothic text-base/tight md:text-lg/tight lg:my-5 lg:text-xl">
          Steasy wird einfach über unsere App gesteuert. Du kannst deine
          Essenszeit im Voraus timen und zur gewünschten Zeit steamen. So sparst
          du wertvolle Zeit.
        </p>

        <div className="flex flex-col gap-5 md:flex-row">
          <Link
            href="#"
            className="hover:opacity-70 transition-all duration-300 block"
          >
            <Image className="h-12 w-auto" src={AppStoreImage} alt="" />
          </Link>
          <Link
            href="#"
            className="hover:opacity-70 transition-all duration-300 block"
          >
            <Image className="h-12 w-auto" src={GooglePlayImage} alt="" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default MobileApp;
