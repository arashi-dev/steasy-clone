import React from "react";
import Container from "./_components/Container";
import Link from "next/link";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Error",
};

const Page = () => {
  return (
    <Container innerClassName="flex justify-center items-center flex-col h-[80vh]">
      <h1 className="mt-14 font-gothic text-9xl font-bold text-pebble-300">
        404
      </h1>

      <p className="my-8 font-gothic text-base text-neutral-500">
        Sorry, page not found
      </p>

      <Link
        href="/"
        className="rounded-sm bg-black px-5 py-3 font-gothic text-sm/none text-white transition-all duration-[250ms] hover:scale-x-[.961] hover:scale-y-[.917]"
      >
        Go to homepage
      </Link>
    </Container>
  );
};

export default Page;
