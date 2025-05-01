import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between p-4 border-b">
        <h1 className="text-2xl font-bold">Arizon Store</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <button
            className="font-bold"
            onClick={() => window.dispatchEvent(new Event("toggleMiniCart"))}
            aria-label="Open Cart"
          >
            🛒
          </button>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="mt-8 border-t p-4 text-sm text-gray-500">
        © 2025 Arizon E-commerce
      </footer>
    </div>
  );
};

export default Layout;
