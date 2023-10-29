"use client";

import { useCartStore } from "@/store/cart";

const ProductCart = () => {
  const { cart } = useCartStore();

  return (
    <div>
      {cart.map((product, idx) => (
        <div key={idx}>
          {product.count} pcs. [ID: {product.id}] - {product.title}
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
