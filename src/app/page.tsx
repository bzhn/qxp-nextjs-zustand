import Image from "next/image";

import { ProductList } from "@/entities/Product";
import ProductCard from "@/components/ProductCard";
import ProductCart from "@/components/ProductCart";

const GetProducts = async (): Promise<ProductList> => {
  const res = await fetch("https://fakestoreapi.com/products");

  return res.json();
};

export default async function Home() {
  const products = await GetProducts();
  return (
    <main className="grid grid-cols-4 gap-4 p-24 md:grid-cols-2 sm:grid-cols-1">
      <ProductCart />
      <br />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
}
