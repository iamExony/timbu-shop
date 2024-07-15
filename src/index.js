import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductProvider from './context/ProductContext';
import CartProvider from './context/CartContext';
import SidebarProvider from './context/SidebarContext';
import ProductCardProvider from './context/ProductCardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <SidebarProvider>
  <ProductProvider>
  <ProductCardProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductCardProvider>
  </ProductProvider>
  </SidebarProvider>
  </CartProvider>,
);


