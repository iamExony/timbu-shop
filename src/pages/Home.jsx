import React from 'react'
/* import Header from './Header'; */
import Hero from '../components/Hero';
import PopularProducts from '../components/PopularProducts';
import ProductCards from '../components/ProductCards';
import ProductDetails from './ProductDetails';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductDetails />
      <PopularProducts />
      <ProductCards />
    </>
  )
}

export default Home