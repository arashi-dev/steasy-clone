"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useState } from "react";
import { type Variant } from "./data";

export const VariantContext = createContext<string>("");

type VariantProviderProps = React.PropsWithChildren<{
  variants: Variant[];
}>;

export const VariantProvider: React.FC<VariantProviderProps> = ({
  children,
  variants,
}) => {
  const searchParams = useSearchParams();

  return (
    <VariantContext.Provider
      value={
        variants.find((variant) => variant.id === searchParams.get("variant"))
          ?.id ?? variants[0]!.id
      }
    >
      {children}
    </VariantContext.Provider>
  );
};

export const AddOnContext = createContext<
  [string | null, (id: string) => void]
  // eslint-disable-next-line @typescript-eslint/no-empty-function
>([null, () => {}]);

export const AddOnProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [selectedAddOnId, setSelectedAddOnId] = useState<string | null>(null);

  return (
    <AddOnContext.Provider value={[selectedAddOnId, setSelectedAddOnId]}>
      {children}
    </AddOnContext.Provider>
  );
};
