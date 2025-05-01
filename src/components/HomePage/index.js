import React from "react";
import Layout from "../Layout";  // Import Layout
import FeaturedProducts from "../FeaturedProducts"; 

function HomePage() {
  return (
    <Layout>
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Arizon</h2>
        <p>Shop quality products now</p>
      </section>

      <FeaturedProducts />
    </Layout>
  );
}

export default HomePage;
