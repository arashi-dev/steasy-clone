import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

type FounderProps = {
  imageSrc: ImageProps["src"];
  name: string;
  role: string;
  bio: string;
};

const Founder: React.FC<FounderProps> = ({ bio, imageSrc, name, role }) => {
  return (
    <div className="flex-1 md:px-6">
      <Image
        src={imageSrc}
        alt={name}
        className="md:-ml-[1.875rem] lg:w-[calc(100%-1.875rem)]"
      />

      <div className="pl-6 md:pl-0">
        <h3 className="mt-7 font-gothic text-2xl font-bold md:mt-10 lg:mt-14 lg:text-3xl">
          {name}
        </h3>

        <p className="mt-2 font-gothic text-xl text-ginger-500 lg:text-2xl">
          {role}
        </p>
        <p className="my-6 min-h-[3.75rem] font-gothic text-base/tight">
          {bio}
        </p>

        <Link
          href="#"
          className="block w-max rounded-sm bg-black px-5 py-3 text-sm text-white transition-all duration-[250ms] hover:scale-x-[.961] hover:scale-y-[.917]"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Founder;
