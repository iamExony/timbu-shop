 import React from 'react'; 
import { Link } from 'react-router-dom';
/* import { ProductContext } from '../context/ProductContext' */

const Modal = ({ product, closeModal }) => {


  return (
    <div onClick={closeModal}  className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-3/4 lg:h-[80%]">
      <p className='text-sm mb-2 font-normal text-center md:text-left lg:mt-12'>Item Secured! You're One Step Closer to Checkout</p>
      <div className='md:flex md:items-center'>
        <div className="hidden  md:w-3/4 md:flex mt-8 md:flex-col  md:justify-end md:items-center md:text-center">
          <img src={product.image} alt={product.name} className="w-full h-24 md:w-48 md:h-48 object-cover rounded mr-4" />
          
            <div>
            <h3 className="text-md font-normal mt-2">{product.name}</h3>
            <p className="text-gray-700">Qty: {product.qty}</p>
            </div>
           </div>
        
        <div className="flex justify-center md:h-64 space-x-4 items-center flex-col w-full">
        <p className='hidden md:block'>You have just 1 item in your cart</p>
        <p className="hidden md:block text-black mb-8 mt-2">Total: ₦{`${product.amount}.00`}</p>
          <button onClick={closeModal} className="bg-white hover:bg-primary-color hover:text-white border-[1px] border-primary-color text-black font-normal py-2 px-4 rounded w-3/4 mb-4">Continue Shopping</button>
          <Link to='shop'  className="bg-white text-center hover:bg-primary-color hover:text-white border-[1px] border-primary-color text-black font-normal py-2 px-4 rounded w-3/4 mb-4"> View Cart</Link>
          <Link to='check' className="bg-primary-color text-center hover:bg-white hover:text-black border-[1px] hover:border-primary-color text-white font-normal py-2 px-4 rounded w-3/4">Proceed to Checkout</Link>
        </div>
        </div>
      </div>
    {/*  <ShoppingCart prod={cartItem} /> */}
   </div>
  );
};

export default Modal;
