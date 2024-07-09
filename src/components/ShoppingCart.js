import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 80000; // Example price
  const total = price * quantity;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
    <Header />
    <div className="w-[80%] mx-auto my-12 bg-white">
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-center text-headingColor">Shopping Cart</h2>
      </div>

      <div className="flex  items-center justify-between mb-6 ">
        <img src="/images/img/1.png" alt="Product" className="w-1/5 h-full object-cover rounded mr-4" />
        <div className="flex-1 ">
          <h3 className="text-xl font-normal">Music System Speaker</h3>
          <p className="text-gray-700">₦{price.toFixed(2)}</p>
        </div>
        
        <div className="flex flex-col gap-2  items-center justify-center ">
            <p className='text-black font-semibold'>Quantity</p>
            <div className='flex items-center'>
          <button onClick={decreaseQuantity} className="hover:text-lightPink hover:bg-secondaryColor text-primary-color font-bold py-2 px-4 rounded">-</button>
          <input type="number" value={quantity<10 ? `0${quantity}`: quantity} readOnly className="w-12 h-10 text-center border rounded bg-gray-200" />
          <button onClick={increaseQuantity} className="hover:text-lightPink hover:bg-secondaryColor text-primary-color font-bold py-2 px-4 rounded">+</button>
        </div>
        <p className="text-gray-700">₦{total.toFixed(2)}</p>
        </div>
        
      </div>

      <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center my-6 py-6">
        <textarea
          placeholder="Add comment"
          className="bg-gray-200 p-2 border rounded w-full md:w-1/3 mb-4 md:mb-0 md:h-32"
        />
        <p className="text-black hover:text-primary-color cursor-pointer mb-4 md:mb-0 font-semibold"><Link to="/">Continue Shopping</Link> </p>
        <div className="flex flex-col gap-2 items-center py-12 px-8 border border-primary-color rounded">
          <h4 className="text-xl font-normal">Sub Total: ₦{total.toFixed(2)}</h4>
          <button className="bg-primary-color hover:text-lightPink hover:bg-secondaryColor text-white font-bold py-2 px-4 rounded ">Proceed to Checkout</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ShoppingCart;
