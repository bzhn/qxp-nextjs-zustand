"use client";

import { useCartStore } from "@/store/cart";

const ProductCart = () => {
  const { cart, itemCount } = useCartStore();

  return (
    <div>
      {cart.map((product, idx) => (
        <div key={idx}>
          {itemCount(product.id)} pcs. - {product.title}
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
