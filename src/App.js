import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductListingPage from "./components/ProductListingPage";
import FullCartPage from "./components/FullCartPage";
import { CartProvider } from "./context/CartContext";
import MiniCart from "./components/MiniCart";

function App() {
  return (
    <CartProvider>
      <Router>
        <MiniCart />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<FullCartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
