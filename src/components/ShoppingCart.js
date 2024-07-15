import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import EmptyCartImage from '../assets/empty_cart.png'; // Ensure you have an image for empty cart

const ShoppingCart = () => {
  const { cart, clearCart , getTotalAmount} = useContext(CartContext);
  
  const totalAmount = getTotalAmount();

  return (
    <>
      <div className="w-[80%] mx-auto my-12 bg-white">

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
             <p className="text-gray-700 text-xl">Your cart is empty</p>
             <button className="bg-white hover:bg-primary-color hover:text-white border-[1px] border-primary-color text-black font-normal py-2 px-4 rounded w-3/4 mb-4"><Link to='/products'>Continue Shopping</Link></button>
             <img src={EmptyCartImage} alt="Empty Cart" className="w-1/2 h-1/2" />
           
          </div>
        ) : (
          <>
          <div className="border-b border-gray-300 pb-4 mb-4">
          <h2 className="text-2xl font-bold text-center text-headingColor">Shopping Cart</h2>
        </div>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

            <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center my-6 py-6">
              <textarea
                placeholder="Add comment"
                className="bg-gray-200 p-2 border rounded w-full md:w-1/3 mb-4 md:mb-0 md:h-32"
              />
              <Link to="/" className="text-black hover:text-primary-color cursor-pointer mb-4 md:mb-0 font-semibold">
                Continue Shopping
              </Link>
              <div className="flex flex-col gap-2 items-center py-12 px-8 border border-primary-color rounded">
                <h4 className="text-xl font-normal">Sub Total: ₦{totalAmount.toFixed(2)}</h4>
                <Link to="/check" className="bg-primary-color hover:text-lightPink hover:bg-secondaryColor text-white font-bold py-2 px-4 rounded">
                  Proceed to Checkout
                </Link>
              </div>
            </div>

            {cart.length > 1 && (
              <button
                onClick={clearCart}
                className="text-black border-2 border-black hover:border-none bg-transparent hover:bg-red-700 hover:text-white font-medium py-2 px-4 rounded mx-auto my-4"
              >
                Clear All
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
