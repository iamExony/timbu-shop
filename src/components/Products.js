import React, { useState, useCallback, useContext } from 'react';
import Modal from './Modal';
import { MdShoppingCart, MdRemoveRedEye } from "react-icons/md";
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Products = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Using useCallback to memoize the function
  const openModal = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product, product.unique_id);
    openModal(product);
  };

  return (
    <>
      <section id="product" className="bg-[#F4F4F480] p-10 mx-auto">
        <div className="w-full flex flex-wrap flex-col md:flex-row gap-[52px] items-center justify-center">
          {products.map((product) => (
            <div key={product.unique_id} className="w-full sm:w-1/4 md:w-1/4 px-3 mb-6 relative group">
              <div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
              >
                <div className="w-full h-56 mb-4">
                  <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt={product.name} className="w-full h-full object-cover rounded" />
                </div>
                <h3 className="text-md font-normal mb-2 text-center">{product.name}</h3>
                <p className="text-gray-700 mb-2">₦{product.current_price[0].NGN[0]}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center justify-center gap-2 bg-secondaryColor hover:bg-primary-color hover:text-white text-lightPink font-normal py-2 px-4 rounded w-full"
                >
                  <MdShoppingCart />
                  <span>Add to Cart</span>
                </button>
              </div>
              <Link to={`/product/${product.unique_id}`} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <MdRemoveRedEye className="text-xl text-gray-700" />
              </Link>
            </div>
          ))}
        </div>

        {selectedProduct && <Modal product={selectedProduct} closeModal={closeModal} />}
      </section>
    </>
  );
};

export default Products;
