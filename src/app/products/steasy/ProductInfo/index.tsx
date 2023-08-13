import React from "react";
import Price from "./Price";
import VariantSelector from "./VariantSelector";
import AddOnSelector from "./AddOnSelector";
import { addOns, variants } from "../data";

const ProductInfo: React.FC = () => {
  return (
    <div className="rounded-lg bg-pebble-200 px-10 py-12">
      <h1 className="mb-4 font-gothic text-[2.5rem] font-bold">
        Lunch steamen, leicht gemacht.
      </h1>

      <p className="mb-3 font-gothic text-base text-ginger-500">
        Pre-Launch Angebot
      </p>

      <Price />

      <VariantSelector variants={variants} />

      <AddOnSelector addOns={addOns} />

      <button
        type="button"
        className="rounded-sm bg-ginger-500 px-5 py-4 font-gothic text-sm text-white transition-all duration-[250ms] hover:scale-x-[.961] hover:scale-y-[.917]"
      >
        Jetzt bestellen
      </button>

      <p className="my-4 font-gothic text-base text-neutral-500">
        Versand im September 2023. Änderungen vorbehalten
      </p>
    </div>
  );
};

export default ProductInfo;
