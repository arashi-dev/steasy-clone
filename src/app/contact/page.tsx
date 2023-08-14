import React from "react";
import Container from "../_components/Container";
import Title from "../_components/Title";
import HeaderSpace from "../_components/HeaderSpace";
import Link from "next/link";
import type { LinkHref } from "~/types";
import { type Metadata } from "next";

type TextProps = React.PropsWithChildren<{
  className?: string;
}>;

const Text: React.FC<TextProps> = ({ children }) => {
  return <p className="mb-4 mt-9 font-gothic text-base md:mt-14">{children}</p>;
};

type AnchorProps = React.PropsWithChildren<{
  href: LinkHref;
}>;

const Anchor: React.FC<AnchorProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-ginger-500 underline underline-offset-[6px] hover:text-black hover:no-underline"
    >
      {children}
    </Link>
  );
};

export const metadata: Metadata = {
  title: "Kontaktieren Sie uns",
};

const Page: React.FC = () => {
  return (
    <Container>
      <HeaderSpace />
      <Title>Deine Anliegen, unsere Mails.</Title>

      <div className="mx-auto mb-8 mt-14 md:mb-36 md:w-8/12 lg:w-1/2">
        <Text>Für die meisten Fragen findest du hier die Antworten:</Text>

        <Link
          href="#"
          className="block w-max rounded-sm bg-ginger-500 px-4 py-2 text-sm text-white transition-all duration-[250ms] hover:scale-x-[.961] hover:scale-y-[.917]"
        >
          FAQs
        </Link>

        <Text>
          Nexenic AG
          <br />
          Klosterstrasse 34
          <br />
          8406 Winterthur
        </Text>
        <Anchor href="#">info@steasy.ch</Anchor>

        <Text>Für Fragen zu Bestellungen:</Text>
        <Anchor href="#">order@steasy.ch</Anchor>

        <Text>Für Fragen zu Bestellungen ab 20 Stück:</Text>
        <Anchor href="#">business@steasy.ch</Anchor>

        <Text>Für Fragen zur Bedienung von Steasy:</Text>
        <Anchor href="#">help@steasy.ch</Anchor>
      </div>
    </Container>
  );
};

export default Page;
