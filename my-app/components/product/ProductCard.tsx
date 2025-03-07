"use client";

import Image from "next/image";
import ProductTitle from "@/components/product/ProductTitle";

interface Props {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
}

export default function ProductCard({ id, title, image, price, rating }: Props) {
  const roundedRating = Math.round(rating);

  return (
    <div className="flex flex-col h-full gap-3">
      <div className="border border-gray-200 p-2 rounded-md">
        <div className="relative w-full h-80 overflow-hidden">
          <Image
            src={image}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <ProductTitle title={title} />

      <div className="flex flex-wrap justify-between items-center mt-auto gap-3">
        <div className="text-xl font-medium">${price}</div>
        <div className="flex items-center gap-2">
          <div className="rating rating-sm flex items-center">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => {
              const starColor = star <= roundedRating ? "bg-yellow-500" : "bg-gray-500";

              return (
                <div
                  key={star}
                  className={`mask mask-star ${starColor}`}
                  aria-label={`${star} star`}
                  aria-current={star === roundedRating}
                />
              );
            })}
          </div>
          <div className="text-gray-400 text-sm mt-1">{`(${rating})`}</div>
        </div>
      </div>

      <button className="btn btn-primary rounded-xl mt-2 bg-[var(--bg-primary)]">
        Add to Cart
      </button>
    </div>
  )
};