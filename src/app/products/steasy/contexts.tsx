"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useState } from "react";
import { variants } from "./data";

export const VariantContext = createContext<string>("");

export const VariantProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const searchParams = useSearchParams();

  return (
    <VariantContext.Provider
      value={searchParams.get("variant") ?? variants[0]!.id}
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
