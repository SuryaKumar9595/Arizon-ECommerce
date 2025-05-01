import React from "react";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="text-md font-semibold mt-2">{product.title}</h3>
      <p className="text-lg font-bold">${product.price}</p>
      <button
        onClick={addToCart}
        className="mt-2 bg-blue-600 text-white py-1 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
