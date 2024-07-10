import { motion } from 'framer-motion';
import React from 'react';
import { fadeIn } from '../variant';


const PopularProducts = () => {
  return (
    <motion.section
    variants={fadeIn("up", 0.2)}
    initial = "hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.2}} 
    className="text-center p-10 md:p-20 bg-productBg text-2 flex flex-col items-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}
       className="text-3xl font-bold mb-4 text-headingColor">Our Popular Products</motion.h2>
      <motion.p 
        variants={fadeIn("up", 0.2)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}
        className="mb-4 md:w-1/2 text-[#909090]">Explore Our Collection of Top-Rated Gadgets Designed to Enhance Your Productivity and Entertainment</motion.p>
      <input 
      type="text" placeholder="Search products..." className="p-2 border rounded w-full md:w-1/2" />
    </motion.section>
  );
};

export default PopularProducts;
