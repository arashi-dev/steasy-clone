import React from "react";
import HeaderSpace from "~/app/_components/HeaderSpace";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";

const Page = () => {
  return (
    <div className="flex flex-col">
      <HeaderSpace />

      <Hero />

      <Intro />
    </div>
  );
};

export default Page;
