import React from "react";

type CaptionProps = {
  label: string;
  text: string;
};

const Caption: React.FC<CaptionProps> = ({ label, text }) => {
  return (
    <div className="mx-auto text-center font-gothic text-white md:w-8/12">
      <h2 className="mb-5 text-3xl/tight font-bold md:text-4xl/tight lg:mb-10 lg:text-5xl/tight">
        {label}
      </h2>
      <p className="my-2 text-lg/tight lg:my-4 lg:text-xl/tight">{text}</p>
    </div>
  );
};

export default Caption;
