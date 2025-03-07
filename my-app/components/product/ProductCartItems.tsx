"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Package, Trash2 } from "lucide-react";
import { Product } from "@/lib/types";
import { useAppContext } from "../AppProvider";
import ProductTitle from "./ProductTitle";

export default function ProductCartItems() {
  const { cart } = useAppContext();

  if (!cart) {
    return (
      <div className="flex flex-col items-center gap-4">
        <Package size={80} strokeWidth={1.5} className="text-gray-500" />
        <div>
          Your Cart is <span className="text-red-600">Empty!</span>
        </div>
        <div className="text-sm">
          Must add items on the cart before you proceed to checkout.
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {cart && cart.map((value: Product, key: number) => {
        return (
          <Fragment key={key}>
            <div className="grid grid-cols-[100px_auto] gap-4">
              <div className="flex items-center border border-gray-200 p-2 rounded-md">
                <div className="relative w-full h-20 overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-[auto_min-content] gap-4 items-center">
                <ProductTitle title={value.title} />
                <div className="flex justify-end">
                  <Trash2 size={20} className="cursor-pointer text-gray-500" />
                </div>

                <div className="text-md font-medium">
                  ${value.price}
                </div>
                <div className="text-md font-medium border border-gray-300 w-[80px] rounded-md text-center">
                  {value?.quantity}
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200" />
          </Fragment>
        )
      })}
    </div>
  )
};