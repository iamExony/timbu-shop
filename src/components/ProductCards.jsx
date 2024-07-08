import React, { useState } from 'react';
import Modal from './Modal';
import { products } from './data';

const ProductCards = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="p-10 bg-white mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-md font-normal mb-2 text-center">{product.title}</h3>
            <p className="text-gray-700 mb-2">₦{product.amount}</p>
            <button onClick={() => openModal(product)} className="bg-secondaryColor hover:bg-primary-color hover:text-white text-lightPink font-normal py-2 px-4 rounded w-full">Add to Cart</button>
          </div>
        ))}
      </div>

      {selectedProduct && <Modal product={selectedProduct} closeModal={closeModal} />}
    </section>
  );
};

export default ProductCards;
