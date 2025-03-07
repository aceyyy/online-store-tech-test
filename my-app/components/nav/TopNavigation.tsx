"use client";

import { ShoppingBag, Zap } from "lucide-react";
import { useAppContext } from "@/components/AppProvider";

export default function TopNavigation() {
  const { cart } = useAppContext();

  return (
    <nav className="flex justify-between items-center w-full p-6 border-b border-gray-300">
      <div>
        <Zap size={30} strokeWidth={0.5} className="fill-[var(--bg-primary)]" />
      </div>

      <div
        className="flex items-center cursor-pointer tooltip tooltip-left"
        data-tip={`Click to view your cart (${cart.length})`}
      >
        <ShoppingBag size={25} color="gray" />
        <span className="text-lg text-gray-500 ml-2">x{cart.length}</span>
      </div>
    </nav>
  )
};