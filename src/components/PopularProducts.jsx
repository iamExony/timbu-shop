import React from 'react';


const PopularProducts = () => {
  return (
    <section className="text-center p-10 bg-white">
      <h2 className="text-3xl font-bold mb-4">Our Popular Products</h2>
      <p className="mb-4">Check out our most popular products that our customers love.</p>
      <input type="text" placeholder="Search products..." className="p-2 border rounded w-1/2" />
    </section>
  );
};

export default PopularProducts;
