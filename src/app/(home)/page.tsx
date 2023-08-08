import React from "react";
import HeaderSpace from "~/app/_components/HeaderSpace";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import Intro2 from "./_components/Intro2";

const Page = () => {
  return (
    <div className="flex flex-col">
      <HeaderSpace />

      <Hero />

      <div className="flex flex-col gap-56">
        <Intro />

        <Intro2 />
      </div>
    </div>
  );
};

export default Page;
