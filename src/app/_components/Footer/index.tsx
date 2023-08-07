import React from "react";
import Container from "../Container";
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";
import NavItem from "../NavItem";
import clsx from "clsx";

type ColumnProps = React.PropsWithChildren<{
  title: string;
  innerClassName?: string;
  className?: string;
}>;

const Column: React.FC<ColumnProps> = ({
  title,
  children,
  innerClassName,
  className,
}) => {
  return (
    <div className={clsx(className)}>
      <p className="font-gothic text-base font-bold">{title}</p>

      <div className={clsx("mt-5", innerClassName)}>{children}</div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <Container className="mb-20">
      <footer className="rounded-md bg-pebble-200 px-6 md:px-10 py-10 md:rounded-lg md:py-16 lg:px-24">
        <div className="flex flex-col justify-between gap-y-10 md:flex-row">
          <Column title="Newsletter abonnieren" className="w-full md:w-auto">
            <div className="flex w-full items-center rounded-sm bg-pebble-100 p-3 font-gothic text-sm">
              <input
                className="w-full border-none bg-transparent placeholder:text-neutral-500 focus:border-none focus:outline-none md:w-56"
                placeholder="Deine Email"
                type="email"
              />

              <BsArrowRight className="ml-auto text-2xl" />
            </div>
          </Column>

          <Column title="Steasy" innerClassName="flex flex-col gap-6">
            <NavItem href="/">Intro</NavItem>
            <NavItem href="/design">Produktdetails</NavItem>
            <NavItem href="/story">Über uns</NavItem>
          </Column>

          <Column title="Service" innerClassName="flex flex-col gap-6">
            <NavItem href="/faqs">FAQs</NavItem>
            <NavItem href="/contacts">Kontakt</NavItem>
          </Column>

          <Column title="Social" innerClassName="flex gap-4">
            <NavItem href="/socials/instagram">
              <BsInstagram className="text-2xl text-black" />
            </NavItem>
            <NavItem href="/socials/linkedin">
              <BsLinkedin className="text-2xl text-black" />
            </NavItem>
            <NavItem href="/socials/facebook">
              <BsFacebook className="text-2xl text-black" />
            </NavItem>
            <NavItem href="/socials/pinterest">
              <BsPinterest className="text-2xl text-black" />
            </NavItem>
          </Column>
        </div>

        <div className="mt-20 flex flex-col gap-14 gap-y-7 md:flex-row">
          <NavItem href="/datenschutz" className="text-sm/none">
            Datenschutz
          </NavItem>
          <NavItem href="/agb" className="text-sm/none">
            AGB
          </NavItem>
          <NavItem href="/copyright" className="text-sm/none">
            Copyright
          </NavItem>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
