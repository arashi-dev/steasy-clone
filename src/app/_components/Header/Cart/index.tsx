"use client";

import { useClickOutside } from "@mantine/hooks";
import { MotionConfig, motion } from "framer-motion";
import React, { useMemo } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { useCart } from "~/hooks/cart";
import CartItem from "./CartItem";
import { useShowCartStore } from "../stores";
import { findAddOnById, findVariantById } from "~/app/products/steasy/data";

const Cart: React.FC = () => {
  const cart = useCart();
  const showCart = useShowCartStore();
  const boxRef = useClickOutside(() => showCart.hide());

  const totalPrice = useMemo(
    () =>
      cart.list.reduce(
        (a, b) =>
          a +
          b.quantity *
            Math.floor(
              ((findVariantById(b.variantId)?.price ?? 0) +
                (b.addOnId !== null
                  ? findAddOnById(b.addOnId)?.price ?? 0
                  : 0)) *
                0.9,
            ),
        0,
      ),
    [cart.list],
  );

  return (
    <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
      <motion.div
        initial="initial"
        animate="animate"
        exit="initial"
        className="fixed left-0 top-0 z-50 block h-screen w-screen"
      >
        <motion.span
          variants={{ initial: { opacity: 0 }, animate: { opacity: 0.25 } }}
          className="absolute left-0 top-0 -z-10 block h-full w-full bg-black"
        />

        <motion.div
          variants={{
            initial: {
              x: "100%",
            },
            animate: {
              x: 0,
            },
          }}
          ref={boxRef}
          className="ml-auto flex h-full w-[82%] max-w-[26.25rem] flex-col overflow-auto bg-pebble-100 px-5 py-12 md:px-10"
        >
          <div className="flex items-center justify-between">
            <p className="font-gothic text-2xl font-bold">Dein Warenkorb</p>

            <button className="text-xl" onClick={() => showCart.hide()}>
              <LiaTimesSolid />
            </button>
          </div>

          {cart.list.length === 0 && (
            <p className="mt-4 font-gothic text-base">
              Dein Warenkorb ist leer.
            </p>
          )}

          <ul className="mt-10 flex flex-col gap-8">
            {cart.list.map((item) => (
              <li key={item.id}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>

          {cart.list.length > 0 && (
            <div className="mt-auto">
              <div className="my-4 flex items-center justify-between">
                <p className="font-gothic text-base font-bold">Summe</p>

                <p className="font-gothic text-base font-bold">
                  {totalPrice.toFixed(2)} CHF
                </p>
              </div>

              <p className="mb-4 font-gothic text-sm">
                Alle Preise inkl. MWST. Die Versandkosten werden an der Kasse
                berechnet.
              </p>

              <button className="w-full rounded-sm bg-ginger-500 px-5 py-4 font-gothic text-sm uppercase text-white transition-all duration-[250ms] hover:scale-x-[.961] hover:scale-y-[.917]">
                checkout
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default Cart;
