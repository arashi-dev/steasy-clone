import { useLocalStorage } from "@mantine/hooks";
import { useCallback, useMemo } from "react";

export const useCart = () => {
    const [list, setList] = useLocalStorage<
        { variantId: string; addOnId: string | null; quantity: number; id: string; }[]
    >({
        key: "cart",
        defaultValue: [],
    });

    const setQuantity = useCallback(
        ({ addOnId, variantId }: { variantId: string; addOnId: string | null; }, getQuantity: ((prev: number) => number) | number) => {
            const clone = [...list];

            const prevItemIndex = clone.findIndex(
                (item) => item.addOnId === addOnId && item.variantId === variantId,
            );

            if (prevItemIndex > -1) {
                clone[prevItemIndex] = {
                    id: clone[prevItemIndex]?.id ?? crypto.randomUUID(),
                    variantId,
                    addOnId,
                    quantity: typeof getQuantity === "number" ? getQuantity : getQuantity(clone[prevItemIndex]?.quantity ?? 0),
                };

                if (clone[prevItemIndex]!.quantity <= 0) {
                    clone.splice(prevItemIndex, 1);
                }
            }

            setList(clone);
        },
        [list, setList],
    );

    const add = useCallback(
        ({ addOnId, variantId }: { variantId: string; addOnId: string | null }) => {
            setList((prev) => {
                const clone = [...prev];

                const prevItemIndex = clone.findIndex(
                    (item) => item.addOnId === addOnId && item.variantId === variantId,
                );

                if (prevItemIndex > -1) {
                    clone[prevItemIndex] = {
                        id: clone[prevItemIndex]?.id ?? crypto.randomUUID(),
                        variantId,
                        addOnId,
                        quantity: clone[prevItemIndex]!.quantity + 1,
                    };
                } else {
                    clone.push({
                        id: crypto.randomUUID(),
                        variantId,
                        addOnId,
                        quantity: 1,
                    });
                }

                return clone;
            });
        },
        [setList],
    );

    const decrease = useCallback(
        ({ addOnId, variantId }: { variantId: string; addOnId: string | null }) => {
            setQuantity({ addOnId, variantId }, prev => prev - 1)
        },
        [setQuantity],
    );

    const increase = useCallback(
        ({ addOnId, variantId }: { variantId: string; addOnId: string | null }) => {
            setQuantity({ addOnId, variantId }, prev => prev + 1)
        },
        [setQuantity],
    );

    const totalQuantity = useMemo(
        () => list.reduce((a, b) => a + b.quantity, 0),
        [list],
    );

    return {
        add,
        decrease,
        increase,
        setQuantity,
        list,
        totalQuantity,
    } as const;
};