import React from 'react';


const PopularProducts = () => {
  return (
    <section className="text-center p-10 md:p-20 bg-productBg text-2 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-headingColor">Our Popular Products</h2>
      <p className="mb-4 md:w-1/2 text-[#909090]">Explore Our Collection of Top-Rated Gadgets Designed to Enhance Your Productivity and Entertainment</p>
      <input type="text" placeholder="Search products..." className="p-2 border rounded w-full md:w-1/2" />
    </section>
  );
};

export default PopularProducts;
