import React from 'react';
import { Routes, Route } from "react-router-dom" 
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
    <Routes> 
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="shop" element={ <ShoppingCart/> } />
         <Route exact path="check" element={ <Checkout /> } />
        {/*<Route path="contact" element={ <Footer /> } /> */}
      </Routes>
      
    </div>
  );
}

export default App;
