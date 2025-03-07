export default function ProductConfirmedOrder({ onClickActionButton }: { onClickActionButton: (item: boolean) => void }) {
  return (
    <>
      <div className="text-4xl text-center">Thank you for your order!</div>
      <button className="btn btn-neutral w-full rounded-xl mt-4" onClick={() => onClickActionButton(true)}>
        Close
      </button>
    </>
  )
};