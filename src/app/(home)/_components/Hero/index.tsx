import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative mt-10 block w-full md:px-12 lg:mt-0">
      <p className="absolute bottom-full left-1/2 block w-full -translate-x-1/2 text-center font-gothic text-3xl font-bold md:bottom-auto md:top-0 md:-translate-y-1/2 md:text-5xl lg:top-2 lg:translate-y-0 lg:text-6xl">
        Lunch steamen,
        <br />
        leicht gemacht.
      </p>

      <video
        className="hidden h-auto w-full md:block"
        src="/video/homepage-desktop.mp4"
        muted
        autoPlay
      />
      <video
        className="h-auto w-full md:hidden"
        src="/video/homepage-mobile.mp4"
        muted
        autoPlay
      />
    </div>
  );
};

export default Hero;
