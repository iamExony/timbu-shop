import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<ShoppingCart />} />
          <Route exact path="/check" element={<Checkout />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;  // Ensure 'App' is exported as the default export
