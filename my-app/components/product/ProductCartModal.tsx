"use client";

import { CircleX, Package } from "lucide-react";
import { useAppContext } from "@/components/AppProvider";
import ProductCart from "@/components/product/ProductCart";
import { useState } from "react";
import ProductCheckout from "./ProductCheckout";
import ProductConfirmedOrder from "./ProductConfirmedOrder";

export default function ProductCartModal() {
  const [stepper, setStepper] = useState(0);
  const { cart, toggleCartModal, setToggleCartModal } = useAppContext();

  const renderTitleAndContentByStepper = (): { title: string; component: React.ReactNode } => {
    switch (stepper) {
      case 1:
        return { title: "Checkout", component: <ProductCheckout onClickActionButton={onClickActionButton} /> }
      case 2:
        return { title: "Order Confirmation", component: <ProductConfirmedOrder onClickActionButton={onClickActionButton} /> }
      default:
        return { title: "Cart", component: <ProductCart onClickActionButton={onClickActionButton} /> }
    }
  };

  const onCloseModal = () => {
    setToggleCartModal(false);
    setStepper(0);
  };

  const onClickActionButton = (isConfirmedOrder?: boolean) => {
    if (isConfirmedOrder) {
      onCloseModal();
    } else {
      setStepper(stepper + 1);
    }
  };

  return (
    <dialog id="product-cart-modal" className={`modal ${toggleCartModal ? "modal-open" : ""} ${stepper === 2 ? "pt-24 items-baseline" : ""}`}>
      <div className="modal-box max-w-md p-4">
        <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-4">
          <h3 className="font-bold text-lg">{renderTitleAndContentByStepper().title}</h3>
          <button onClick={onCloseModal}>
            <CircleX size={25} color="gray" className="cursor-pointer" />
          </button>
        </div>

        {cart.length > 0 ? renderTitleAndContentByStepper().component : (
          <div className="flex flex-col items-center gap-4">
            <Package size={80} strokeWidth={1.5} className="text-gray-500" />
            <div>
              Your Cart is <span className="text-red-600">Empty!</span>
            </div>
            <div className="text-sm">
              Must add items on the cart before you proceed to checkout.
            </div>
          </div>
        )}
      </div>
    </dialog>
  )
};