import React from "react";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import MobileApp from "./_components/MobileApp";
import Carousel from "./_components/Carousel";
import PreOrder from "../_components/PreOrder";

const Page = () => {
  return (
    <div>
      <Hero />

      <Features />

      <MobileApp />

      <Carousel />

      <PreOrder />
    </div>
  );
};

export default Page;
