import { Product } from "./types";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=10", {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
  
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}