"use client";

import React, { useContext } from "react";
import { AddOnContext, VariantContext } from "../../contexts";
import { useCart } from "~/hooks/cart";
import { useShowCartStore } from "~/app/_components/Header/stores";

const AddToCartButton: React.FC = () => {
  const variantId = useContext(VariantContext);
  const [addOnId] = useContext(AddOnContext);
  const cart = useCart();
  const showCart = useShowCartStore()

  return (
    <button
      onClick={() => {
        cart.add({
          variantId,
          addOnId,
        });

        showCart.show()
      }}
      type="button"
      className="rounded-sm bg-ginger-500 px-5 py-4 font-gothic text-sm text-white transition-all duration-[250ms] hover:scale-x-[.961] hover:scale-y-[.917]"
    >
      Jetzt bestellen
    </button>
  );
};

export default AddToCartButton;
