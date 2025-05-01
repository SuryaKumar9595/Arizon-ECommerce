import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";

function FullCartPage() {
  const { state, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const subtotal = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Layout>
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {state.items.length === 0 ? (
        <div className="text-center mt-12">
          <p className="text-lg mb-4">🛒 Your cart is empty</p>
          <Link
            to="/products"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-center border p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center w-full sm:w-2/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-contain"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-4 sm:mt-0 gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  −
                </button>
                <span className="px-4">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-8 border-t pt-4">
            <p className="text-xl font-semibold">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
            <button
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded"
              disabled
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
}

export default FullCartPage;
