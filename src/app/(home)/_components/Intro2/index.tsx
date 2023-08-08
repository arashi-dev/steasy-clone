import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "~/app/_components/Container";

import BenefitsImage from "./benefits_01.jpg";
import BoxImage from "./collage-benefits-box-1.png";
import ScrollTransition from "../ScrollTransition";

const Intro2: React.FC = () => {
  return (
    <Container innerClassName="flex items-center flex-col md:flex-row">
      <div className="grid w-full grid-cols-12 grid-rows-[repeat(15,31px)] gap-x-6 px-6 md:order-2 md:w-1/2 md:grid-cols-6 md:grid-rows-[repeat(10,70px)]">
        <div className="col-[1/11] row-[3/16] flex items-center md:col-[2/6] md:row-[3/11]">
          <div className="mx-auto block aspect-[390/562] h-full rounded-lg bg-ginger-900 md:w-full" />
        </div>

        <ScrollTransition
          from={50}
          to={-50}
          className="relative col-[2/12] row-[2/14] md:col-[1/5] md:row-[1/9]"
        >
          <Image
            src={BenefitsImage}
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </ScrollTransition>

        <ScrollTransition
          from={-20}
          to={20}
          className="relative z-10 col-[6/13] row-[11/16] md:col-[4/7] md:row-[7/10]"
        >
          <Image
            src={BoxImage}
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </ScrollTransition>
      </div>

      <div className="mt-12 px-5 font-gothic md:mt-0 md:w-1/2 lg:px-10">
        <h3 className="text-2xl font-bold md:text-3xl lg:text-5xl">
          Warum solltest du deinen Lunch steamen? Es schmeckt einfach besser.
        </h3>

        <p className="mt-5 text-lg/tight md:mt-7 lg:text-xl">
          Endlich eine Art des Aufwärmens, die der Qualität deiner
          Mealprep-Gerichte entspricht. Unsere LPS
          <sup>™</sup>
          -Technologie sorgt für ein schonendes Aufwärmen, um Geschmack und
          Nährstoffe bestmöglich zu erhalten.
        </p>

        <Link
          href="/story"
          className="mt-5 block w-max rounded-sm bg-white px-5 py-4 text-sm text-black md:mt-7"
        >
          Unsere Mission
        </Link>
      </div>
    </Container>
  );
};

export default Intro2;
