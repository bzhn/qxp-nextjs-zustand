"use client";

import { useCartStore } from "@/store/cart";

import { Product } from "@/entities/Product";

type Props = {
  children: React.ReactNode;
  product: Product;
};

const AddToCart = ({ children, product }: Props) => {
  const { add: addToCart, cart } = useCartStore();

  const handleClick = () => {
    addToCart(product);
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default AddToCart;
