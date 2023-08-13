"use client";

import React, { useContext } from "react";
import { AddOnContext, VariantContext } from "../../contexts";
import { findAddOnById, findVariantById } from "../../data";

const Price: React.FC = () => {
  const selectedVariantId = useContext(VariantContext);
  const [selectedAddOnId] = useContext(AddOnContext);

  const variant = findVariantById(selectedVariantId);
  const addOn =
    selectedAddOnId !== null ? findAddOnById(selectedAddOnId) : null;

  const price = (variant?.price ?? 0) + (addOn?.price ?? 0);

  const discountedPrice = Math.floor((price ?? 0) * 0.9);

  return (
    <>
      <p className="font-gothic text-[2.5rem] font-bold">
        {discountedPrice.toFixed(2)} CHF
      </p>
      <p className="font-gothic text-base font-bold text-[#737373] line-through">
        {price.toFixed(2)} CHF
      </p>
    </>
  );
};

export default Price;
