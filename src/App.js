import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';



function App() {
  return (
    <div>
    <Routes> 
        <Route path="/" element={ <Home/> } />
        <Route path="shop" element={ <ShoppingCart/> } />
        {/* <Route path="product" element={ <ProductCards/> } />
        <Route path="contact" element={ <Footer /> } /> */}
      </Routes>
      
    </div>
  );
}

export default App;
