"use client";

import useStore from "@/store/useStore";
import { CartStore, useCartStore } from "@/store/cart";

const ProductCart = () => {
  const cartStore = useStore<CartStore, CartStore>(
    useCartStore,
    (state: any) => state
  );

  if (!cartStore) return <div></div>;
  const { cart } = cartStore;

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
