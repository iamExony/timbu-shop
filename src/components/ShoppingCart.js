import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';


const ShoppingCart = () => {
  const {cart} = useContext(CartContext)


  return (
    <>
         <div className="w-[80%] mx-auto my-12 bg-white">
      <div className="border-b border-gray-300 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-center text-headingColor">Shopping Cart</h2>
      </div>
      {cart.map((item) =>{
      return <CartItem key={item.unique_id} item={item}/>
    })}
    <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center my-6 py-6">
        <textarea
          placeholder="Add comment"
          className="bg-gray-200 p-2 border rounded w-full md:w-1/3 mb-4 md:mb-0 md:h-32"
        />
        <Link to="/" className="text-black hover:text-primary-color cursor-pointer mb-4 md:mb-0 font-semibold">Continue Shopping</Link>
        <div className="flex flex-col gap-2 items-center py-12 px-8 border border-primary-color rounded">
          <h4 className="text-xl font-normal">Sub Total: ₦{}</h4>
          <Link to="/check" className="bg-primary-color hover:text-lightPink hover:bg-secondaryColor text-white font-bold py-2 px-4 rounded "> Proceed to Checkout</Link>
        </div>
        </div>
    </div>
    </>
  );
};

export default ShoppingCart;