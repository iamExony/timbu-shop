import React, { useState, useCallback, useContext } from "react";
import Modal from "./Modal";
import { MdShoppingCart, MdRemoveRedEye } from "react-icons/md";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Loader from "../pages/Loader";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";

const Products = () => {
  const {
    products,
    paginate,
    totalPages,
    currentPage,
    isLoading,
    isError,
    isEmpty,
  } = useContext(ProductContext);
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
    <>
      <section id="product" className="w-full bg-[#FFF9F9]">
        <motion.section
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center p-10 md:p-20 bg-[#FFFFFF] text-2 flex flex-col items-center"
        >
          <motion.h2
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl font-bold mb-4 text-headingColor"
          >
            Search for more products
          </motion.h2>
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 border-[0.8px]  border-[#E9E4E4] bg-[#FAFAFA99] placeholder:text-[#909090] rounded w-full md:w-[448px] h-[60px] text-[border-[#E9E4E4]]"
          />
        </motion.section>
        <div className="w-[95%]  flex flex-wrap p-10 gap-4 items-center justify-between mx-auto">
          {isLoading && (
            <p className="text-center w-full flex items-center justify-center h-40">
              <Loader />
            </p>
          )}
          {isError && (
            <p className="text-center w-full text-red-500">
              Error loading products.
            </p>
          )}
          {isEmpty && (
            <p className="text-center w-full">No products available.</p>
          )}
          {!isLoading &&
            !isError &&
            !isEmpty &&
            products.map((product) => (
              <div
                key={product.unique_id}
                className="w-full sm:w-auto md:w-auto mb-6 relative group"
              >
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center h-[471px] w-[352px] max-w-full">
                  <div className="w-full h-[323px] mb-4 overflow-hidden relative">
                    <img
                      src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                      alt={product.name}
                      className="w-full h-full object-cover rounded transition-transform duration-300 transform group-hover:scale-105"
                    />
                    <Link
                      to={`/product/${product.unique_id}`}
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MdRemoveRedEye className="text-3xl text-lightPink bg-secondaryColor hover:text-white hover:bg-primary-color p-1 rounded-full" />
                    </Link>
                  </div>
                  <h3 className="text-[19px] font-normal mb-2 text-center">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 mb-2 text-[18px]">
                    ₦{product.current_price[0].NGN[0]}
                  </p>
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

        {selectedProduct && (
          <Modal product={selectedProduct} closeModal={closeModal} />
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 ${
              currentPage === 1 ? "cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 ${
                currentPage === index + 1
                  ? "bg-primary-color text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-1 ${
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default Products;
