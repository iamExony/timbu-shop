import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import PropTypes from 'prop-types';

const CartItem = ({ item }) => {
  const { cart, setCart, removeCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.amount);
  const price = item.current_price[0].NGN[0]; // Dynamic price from item
  const total = price * quantity;

  const increaseQuantity = () => {
    const updatedCart = cart.map((cartItem) => 
      cartItem.id === item.id ? { ...cartItem, amount: cartItem.amount + 1 } : cartItem
    );
    setCart(updatedCart);
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const updatedCart = cart.map((cartItem) => 
        cartItem.id === item.id ? { ...cartItem, amount: cartItem.amount - 1 } : cartItem
      );
      setCart(updatedCart);
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex md:items-center md:justify-between mb-6">
      <img
        src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
        alt={`${item.name}`}
        className="w-36 h-36 object-cover rounded mr-4"
      />
      <div className="md:flex-1 flex flex-col items-start">
        <h3 className="text-xl font-normal">{item.name}</h3>
        <p className="hidden md:block text-gray-700">₦{price}</p>

        <div className="flex my-1 md:hidden flex-col justify-center items-start">
          <div className="flex">
            <button
              onClick={decreaseQuantity}
              className="hover:text-lightPink hover:bg-secondaryColor text-primary-color font-bold py-2 px-4 rounded"
            >
              -
            </button>
            <input
              type="number"
              value={quantity < 10 ? `0${quantity}` : quantity}
              readOnly
              className="w-12 h-10 text-center border rounded bg-gray-200"
            />
            <button
              onClick={increaseQuantity}
              className="hover:text-lightPink hover:bg-secondaryColor text-primary-color font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </div>
          <p className="text-gray-700">₦{price}</p>
          <button
          onClick={() => removeCart(item.unique_id)}
          className="block text-primary-color"
        >
          Remove
        </button>
        </div>
      </div>

      <div className="hidden md:flex md:flex-col gap-2 items-center justify-center">
        <p className="text-black font-semibold">Quantity</p>
        <div className="flex items-center">
          <button
            onClick={decreaseQuantity}
            className="hover:text-lightPink hover:bg-secondaryColor text-primary-color font-bold py-2 px-4 rounded"
          >
            -
          </button>
          <input
            type="number"
            value={quantity < 10 ? `0${quantity}` : quantity}
            readOnly
            className="w-12 h-10 text-center border rounded bg-gray-200"
          />
          <button
            onClick={increaseQuantity}
            className="hover:text-lightPink hover:bg-secondaryColor text-primary-color font-bold py-2 px-4 rounded"
          >
            +
          </button>
        </div>
        <p className="text-gray-700">₦{total.toFixed(2)}</p>
        <button
          onClick={() => removeCart(item.unique_id)}
          className="block text-primary-color"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    current_price: PropTypes.arrayOf(
      PropTypes.shape({
        NGN: PropTypes.arrayOf(PropTypes.number).isRequired,
      })
    ).isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
