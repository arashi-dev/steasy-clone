"use client";

import React, { useContext } from "react";
import { findVariantById, type Variant } from "../../data";
import clsx from "clsx";
import { VariantContext } from "../../contexts";
import { useRouter } from "next/navigation";

type VariantSelectorProps = {
  variants: Variant[];
};

const VariantSelector: React.FC<VariantSelectorProps> = ({ variants }) => {
  const selectedVariantId = useContext(VariantContext);
  const router = useRouter();

  return (
    <div className="py-10">
      <p className="mb-4">
        Farbe:{" "}
        <span className="text-neutral-500">
          {findVariantById(selectedVariantId)?.color.name}
        </span>
      </p>

      <ul className="flex items-center gap-5">
        {variants.map((variant) => (
          <li key={variant.id}>
            <button
              className={clsx(
                "block h-2 w-10 rounded-[.25rem] border-none outline outline-1 outline-offset-4 transition-all duration-100 ease-in-out hover:h-6",
                { "h-6": variant.id === selectedVariantId },
              )}
              style={{
                backgroundColor: variant.color.hex,
                outlineColor: variant.color.hex,
              }}
              onClick={() => router.replace(`?variant=${variant.id}`)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VariantSelector;
