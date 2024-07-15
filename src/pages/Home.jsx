import React from 'react'
/* import Header from './Header'; */
import Hero from '../components/Hero';
import PopularProducts from '../components/PopularProducts';
import ProductCards from '../components/ProductCards';

const Home = () => {
  return (
    <>
       <Hero />
       <PopularProducts /> 
       <ProductCards /> 
    </>
  )
}

export default Home