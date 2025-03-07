"use client";

import { FormProvider, useForm } from "react-hook-form";
import ProductCartItems from "./ProductCartItems";
import FormInputField from "../forms/FormInputField";
import { ProductCheckoutRequest } from "@/lib/types";

export default function ProductCheckout({ onClickActionButton }: { onClickActionButton: () => void }) {
  const methods = useForm<ProductCheckoutRequest>({
    defaultValues: {
      email: "",
      name: "",
      address: "",
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvc: "",
    }
  });

  const onSubmit = (data: ProductCheckoutRequest) => {
    console.log("DATA", data);
    onClickActionButton();
  };

  return (
    <FormProvider {...methods}>
      <div className="text-md mb-2">Shipping Information</div>
      <div className="flex flex-col gap-4">
        <FormInputField name="email" label="Email" type="email" />
        <FormInputField name="namesss" label="Name" />
        <FormInputField name="address" label="Address" />
      </div>
      <div className="border-b border-gray-200 my-6" />

      <div className="text-md mb-2">Payment</div>
      <div className="flex flex-col gap-4">
        <FormInputField name="cardNumber" label="Card Number" />
        <FormInputField name="cardName" label="Name" />
        <div className="grid grid-cols-[auto_80px] gap-4">
          <FormInputField name="expiry" label="Expiry (MM/YY)" isDate />
          <FormInputField name="cvc" label="CVC" />
        </div>
      </div>
      <div className="border-b border-gray-200 my-6" />

      <ProductCartItems />
      <button className="btn w-full rounded-xl mt-4 bg-[var(--bg-success)] text-white" onClick={methods.handleSubmit(onSubmit)}>
        Confirm Order
      </button>
    </FormProvider>
  )
};