import ProductCartItems from "./ProductCartItems";

export default function ProductCart({ onClickActionButton }: { onClickActionButton: () => void }) {
  return (
    <>
      <ProductCartItems />
      <button className="btn w-full rounded-xl mt-4 bg-[var(--bg-success)] text-white" onClick={() => onClickActionButton()}>
        Checkout
      </button>
    </>
  )
};