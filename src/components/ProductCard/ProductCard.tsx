import Image from "next/image";

import { Product } from "@/entities/Product";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        className="w-full h-56 object-cover object-center"
        src={product.image}
        width={500}
        height={500}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-2xl">{product.title}</h2>
        <p className="text-gray-600 text-sm mt-1">
          Category: {product.category}
        </p>
        <p className="text-gray-700 text-lg mt-2">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-gray-700">Rating:</span>
            <div className="ml-2 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18.293 4.293a1 1 0 00-1.414-1.414L10 10.586 2.121 2.707a1 1 0 00-1.414 1.414l8 8a1 1 0 001.414 0l8-8z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 ml-1">
                {product.rating.rate} ({product.rating.count})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
