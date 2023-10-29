"use client";

import useStore from "@/store/useStore";
import { CartStore, useCartStore } from "@/store/cart";

const ProductCart = () => {
  const cartStore = useStore<CartStore, CartStore>(
    useCartStore,
    (state: any) => state
  );

  if (!cartStore) return <div></div>;
  const { cart, incrementItem, decrementItem, removeItem } = cartStore;

  const handleIncrementItem =
    (id: number) => (e: React.MouseEvent<any, MouseEvent>) => {
      incrementItem(id);
    };

  const handleDecrementItem =
    (id: number) => (e: React.MouseEvent<any, MouseEvent>) => {
      decrementItem(id);
    };

  const handleRemoveItem =
    (id: number) => (e: React.MouseEvent<any, MouseEvent>) => {
      removeItem(id);
    };

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, idx) => (
            <tr key={idx}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.count} pcs.</td>
              <td>
                <button
                  onClick={handleIncrementItem(product.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={handleDecrementItem(product.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded ml-2"
                >
                  -
                </button>
              </td>
              <td>
                <button
                  onClick={handleRemoveItem(product.id)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-1 rounded ml-2"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCart;
