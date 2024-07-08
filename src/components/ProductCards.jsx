import React, { useState } from 'react';
import Modal from './Modal';

const ProductCards = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    { id: 1, title: 'Product 1', amount: '$10', image: 'path-to-image1.jpg' },
    // Add more products here
  ];
  
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="p-10 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-2">{product.amount}</p>
            <button onClick={() => openModal(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
          </div>
        ))}
      </div>

      {selectedProduct && <Modal product={selectedProduct} closeModal={closeModal} />}
    </section>
  );
};

export default ProductCards;
