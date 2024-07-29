import React, { useContext, useState, useCallback } from 'react';
import Modal from './Modal';
import { ProductCardContext } from '../context/ProductCardContext';
import { MdShoppingCart, MdRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Loader from '../pages/Loader';

const ProductCards = () => {
  const { products, isLoading, isError, isEmpty } = useContext(ProductCardContext);
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    <section id="product" className="w-full bg-[#F4F4F480]">
        <div className="w-[95%] flex flex-wrap p-10 gap-4 items-center justify-between mx-auto">
          {isLoading && <p className="text-center w-full flex items-center justify-center h-40"><Loader /></p>}
          {isError && <p className="text-center w-full text-red-500">Error loading products.</p>}
          {isEmpty && <p className="text-center w-full">No products available.</p>}
          {!isLoading && !isError && !isEmpty && products?.map((product) => (
            <div key={product.unique_id} className="w-full sm:w-auto md:w-auto mb-6 relative group">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center h-[471px] w-[352px] max-w-full">
                <div className="w-full h-[323px] mb-4 overflow-hidden relative">
                  <img 
                    src={`https://api.timbu.cloud/images/${product.photos[0].url}`} 
                    alt={product.name} 
                    className="w-full h-full object-cover rounded transition-transform duration-300 transform group-hover:scale-105"
                  />
                  <Link to={`/product/${product.unique_id}`} className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MdRemoveRedEye className="text-3xl text-lightPink bg-secondaryColor hover:text-white hover:bg-primary-color p-1 rounded-full" />
                  </Link>
                </div>
                <h3 className="text-[19px] font-normal mb-2 text-center">{product.name}</h3>
                <p className="text-gray-700 mb-2 text-[18px]">₦{product.current_price[0].NGN[0]}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center justify-center gap-2 bg-secondaryColor hover:bg-primary-color hover:text-white text-lightPink font-normal py-2 px-4 rounded-[5px] w-[217px] h-[46px]"
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
