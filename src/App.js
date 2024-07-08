import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularProducts from './components/PopularProducts';
import ProductCards from './components/ProductCards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PopularProducts />
      <ProductCards />
      <Footer />
    </div>
  );
}

export default App;
