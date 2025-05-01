import React, { useEffect, useState } from 'react';

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API or use a predefined list
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data.slice(0, 6)); // Get the first 6 products for the featured section
    };
    fetchProducts();
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-medium">{product.title}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-xl font-bold text-gray-800">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
