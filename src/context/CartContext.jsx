import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => item.unique_id === product.unique_id);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.unique_id === product.unique_id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeCart = (unique_id) => {
    const newCart = cart.filter((item) => item.unique_id !== unique_id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCart, clearCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
