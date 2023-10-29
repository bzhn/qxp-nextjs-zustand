"use client";

import { useCartStore } from "@/store/cart";

const ProductCart = () => {
  const { cart } = useCartStore();

  return (
    <div>
      {cart.map((product, idx) => (
        <div key={idx}>
          {product.count} [ID: {product.id}] pcs. - {product.title}
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
