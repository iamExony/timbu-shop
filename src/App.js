import React from 'react';
import Home from './pages/Home';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Products from './components/Products';



function App() {
  return (
      <div>
        <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/shop" element={<ShoppingCart />} />
          <Route exact path="/check" element={<Checkout />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
        </Router>
      </div>
  );
}

export default App;  // Ensure 'App' is exported as the default export
