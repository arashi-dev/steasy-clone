import React from "react";
import Container from "~/app/_components/Container";

import StoryTopNewImage from "./story_top_new@2x.png";
import Image from "next/image";
import Sticker from "~/app/_components/Sticker";
import Title from "~/app/_components/Title";

const Hero: React.FC = () => {
  return (
    <Container className="bg-ginger-700 pb-6 pt-48 md:pb-20 md:pt-60">
      <span className="absolute -top-[5.625rem] left-1/2 block h-[20vw] max-h-[16.5rem] min-h-[9rem] w-[20vw] min-w-[6.25rem] max-w-[11.5rem] -translate-x-1/2 rounded-b-lg bg-ginger-900" />

      <Title className="text-white">
        Wir steamen deinen Lunch auf das nächste Level.
      </Title>

      <div className="relative mb-[7.5rem] mt-10">
        <Image src={StoryTopNewImage} alt="" className="w-full" />
        <Sticker className="absolute -right-[3%] -top-[7%] md:right-[3.5%] md:top-[3.5%]" />
      </div>

      <div className="mx-auto w-full text-center font-gothic text-2xl text-white md:w-8/12 md:text-3xl lg:text-5xl">
        <p className="my-10">
          Die Idee zu Steasy kam uns während des Studiums, als wir den Lunch von
          zu Hause mitnahmen und in der Uni aufwärmten. Die Wartezeit vor der
          Mikrowelle war nervig, kostete uns einen grossen Teil der Mittagszeit
          und es schmeckte weniger lecker als zu Hause.
        </p>
        <p className="my-10">
          Also entwickelten wir einen mobilen Mini-Steamer, der Geschmack und
          Nährstoffe bewahrt. Unter dem Motto: Mealprep für Fortgeschrittene.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
