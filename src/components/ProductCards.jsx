import React, { useState, useCallback } from 'react';
import Modal from './Modal';
import { products } from './data';
import { MdShoppingCart } from "react-icons/md";
/* import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
 */
const ProductCards = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Using useCallback to memoize the function
  const openModal = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <section id="product" className="bg-[#F4F4F480] p-10 mx-auto">
      <div className="flex flex-wrap gap-6 items-center justify-center">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/4 px-3 mb-6">
            <div
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="w-full h-56 mb-4">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded" />
              </div>
              <h3 className="text-md font-normal mb-2 text-center">{product.title}</h3>
              <p className="text-gray-700 mb-2">₦{product.amount}</p>
              <button
                onClick={() => openModal(product)}
                className="flex items-center justify-center gap-2 bg-secondaryColor hover:bg-primary-color hover:text-white text-lightPink font-normal py-2 px-4 rounded w-full"
              >
                <MdShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && <Modal product={selectedProduct} closeModal={closeModal} />}
    </section>
  );
};

export default ProductCards;
