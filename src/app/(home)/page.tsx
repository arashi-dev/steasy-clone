import React from "react";
import HeaderSpace from "~/app/_components/HeaderSpace";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import Benefit from "./_components/Benefit";

import Benefits1Image from "./_images/benefits_01.jpg";
import BenefitBox1Image from "./_images/collage-benefits-box-1.png";

import Benefits2Image from "./_images/benefits_02.jpg";
import BenefitBox2Image from "./_images/collage-benefits-box-2.png";
import BackgroundTransitionProvider from "./_components/BackgroundTransition/Provider";
import PreOrder from "./_components/PreOrder";

const Page = () => {
  return (
    <div className="flex flex-col">
      <HeaderSpace />

      <Hero />

      <BackgroundTransitionProvider className="flex flex-col gap-28 pb-14 md:gap-56 md:pb-32">
        <Intro />

        <Benefit
          direction="ltr"
          title="Warum solltest du deinen Lunch steamen? Es schmeckt einfach besser."
          description={
            <>
              Endlich eine Art des Aufwärmens, die der Qualität deiner
              Mealprep-Gerichte entspricht. Unsere LPS
              <sup>™</sup>
              -Technologie sorgt für ein schonendes Aufwärmen, um Geschmack und
              Nährstoffe bestmöglich zu erhalten.
            </>
          }
          linkLabel="Unsere Mission"
          linkHref="/story"
          largeImageSrc={Benefits1Image}
          smallImageSrc={BenefitBox1Image}
          color="ginger"
        />

        <Benefit
          direction="rtl"
          title="Smart steamen on the go. Hochwertig, zeitgemäss und benutzerfreundlich."
          description="Steasy ist einfach via App zu bedienen und du kannst deine Essenszeit sogar im Voraus timen. Dank dem innovativen Verschluss-System ist Steasy nicht nur auslaufsicher zu transportieren sondern auch geruchfrei beim Steamen."
          linkLabel="Produktdetails"
          linkHref="/design"
          largeImageSrc={Benefits2Image}
          smallImageSrc={BenefitBox2Image}
          color="green"
        />
      </BackgroundTransitionProvider>

      <div className="mt-24 md:mt-36" />

      <PreOrder />

      <div className="mt-24 md:mt-36" />
    </div>
  );
};

export default Page;
