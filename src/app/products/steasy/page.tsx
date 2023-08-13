import React from "react";
import Container from "~/app/_components/Container";
import HeaderSpace from "~/app/_components/HeaderSpace";
import { AddOnProvider, VariantProvider } from "./contexts";
import ProductInfo from "./ProductInfo";
import Images from "./Images";

const Page: React.FC = () => {
  return (
    <VariantProvider>
      <AddOnProvider>
        <div>
          <HeaderSpace />

          <Container innerClassName="grid grid-cols-1 lg:grid-cols-[390px_1fr] lg:grid-rows-[fit-content(300px)_1fr] auto-rows-auto gap-6">
            <ProductInfo />

            <Images />
          </Container>
        </div>
      </AddOnProvider>
    </VariantProvider>
  );
};

export default Page;
