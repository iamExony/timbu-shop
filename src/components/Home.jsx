import React from 'react'
import Header from './Header';
import Hero from './Hero';
import PopularProducts from './PopularProducts';
import ProductCards from './ProductCards';
import Footer from './Footer';

const Home = () => {
  return (
    <>
     <Header />
      <Hero />
      <PopularProducts />
      <ProductCards />
      <Footer /> 
    </>
  )
}

export default Home