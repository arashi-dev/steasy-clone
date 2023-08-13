"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { findAddOnById, findVariantById } from "~/app/products/steasy/data";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import { useCart } from "~/hooks/cart";

type CartItemProps = {
  variantId: string;
  addOnId: string | null;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({
  addOnId,
  quantity,
  variantId,
}) => {
  const cart = useCart();

  const variant = useMemo(() => findVariantById(variantId), [variantId]);
  const addOn = useMemo(
    () => (addOnId !== null ? findAddOnById(addOnId) : null),
    [addOnId],
  );

  return (
    <div className="grid grid-flow-row-dense grid-cols-[3.875rem_minmax(45%,1fr)_3.5rem] grid-rows-[1fr] gap-x-2 md:grid-cols-[6.25rem_1fr_1fr] md:gap-x-5">
      <Image
        src={variant!.images[0]!}
        alt=""
        className="row-[span_4] aspect-square w-[6.25rem] rounded-sm"
      />

      <p className="mb-1 font-gothic text-base/tight">
        Steasy in {variant?.color.name}
      </p>

      <p className="col-[2] mb-2 font-gothic text-sm/tight text-black text-opacity-75">
        {addOn?.name ?? "ohne zusätzliche Foodschalen"}
      </p>

      <p className="text-right font-gothic text-base/tight">
        {Math.floor(
          ((variant?.price ?? 0) + (addOn?.price ?? 0)) * 0.9,
        ).toFixed(2)}{" "}
        CHF
      </p>

      <div className="col-[2] flex h-10 w-[7.5rem] items-center rounded-sm border border-black">
        <button
          onClick={() => cart.decrease({ addOnId, variantId })}
          type="button"
          className="flex h-full min-w-[2.5rem] max-w-[2.5rem] items-center justify-center p-0 text-2xl/none"
        >
          <BsDashLg />
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) =>
            cart.setQuantity(
              {
                addOnId,
                variantId,
              },
              e.target.valueAsNumber,
            )
          }
          className="max-w-[2.5rem] bg-transparent text-center font-gothic"
        />
        <button
          onClick={() => cart.increase({ addOnId, variantId })}
          type="button"
          className="flex h-full min-w-[2.5rem] max-w-[2.5rem] items-center justify-center p-0 text-2xl/none"
        >
          <BsPlusLg />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
