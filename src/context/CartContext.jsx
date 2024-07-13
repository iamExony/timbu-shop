import React, {useState,  createContext} from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // Check if item is already in cart
    const cartItem = cart.find((item) => item.id === id);
  
    if (cartItem) {
      const newCart = cart.map((item) => 
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  
/* console.log(cart) */

    //Remove Item
    const removeCart =(id) =>{
      const newCart = cart.filter((item) => {
        return item.id !== id;
      });
      setCart(newCart);
    }
  return <CartContext.Provider value={{cart, addToCart, removeCart}}>{children}</CartContext.Provider>
}

export default CartProvider