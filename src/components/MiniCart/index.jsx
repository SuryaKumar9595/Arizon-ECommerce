import React, { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

function MiniCart() {
  const { state, dispatch } = useCart();

  useEffect(() => {
    const toggle = () => dispatch({ type: "TOGGLE_MINICART" });
    window.addEventListener("toggleMiniCart", toggle);
    return () => window.removeEventListener("toggleMiniCart", toggle);
  }, [dispatch]);

  if (!state.showMiniCart) return null;

  const subtotal = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="absolute right-4 top-16 w-80 bg-white shadow-lg border rounded-lg p-4 z-50">
      <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
      {state.items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul className="space-y-2 max-h-64 overflow-auto">
            {state.items.map(item => (
              <li key={item.id} className="flex justify-between">
                <img src={item.image} alt={item.title} className="h-12 w-12" />
                <div className="text-sm ml-2">
                  <p>{item.title}</p>
                  <p>
                    {item.quantity} × ${item.price.toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
          <div className="mt-4 flex justify-between">
            <Link to="/cart" className="text-blue-600 font-medium">
              View Cart
            </Link>
            <button className="bg-gray-400 px-3 py-1 rounded text-white" disabled>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default MiniCart;
