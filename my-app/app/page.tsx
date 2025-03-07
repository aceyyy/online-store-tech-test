import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/product/ProductCard";
import ProductCartModal from "@/components/product/ProductCartModal";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 xl:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product, key) => {
          return (
            <ProductCard
              key={key}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating.rate}
              isImagePriority={key < 5}
            />
          )
        })}
      </div>

      <ProductCartModal />
    </div>
  )
};
