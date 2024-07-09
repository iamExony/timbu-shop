import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
/* import Header from './Header'; */
/* import Hero from './Hero';
import PopularProducts from './PopularProducts';
import ProductCards from './ProductCards'; */
/* import Footer from './Footer'; */

const Header = () => {
  return (
    <header className="bg-white flex justify-between items-center p-5 md:bg-primary-color text-white">
        <div className='flex gap-2 justify-center items-center'>
        <img src="images/logo.svg" alt="logo" className='hidden md:block'/>
        <a href='#' className="block md:hidden hover:text-primary-color text-white font-bold py-2 px-4 rounded"><img src="/images/bread-icon.svg" alt="cart" /></a>
      <div className="hidden text-2xl  font-semibold font-inter text-blackColor md:block md:text-white">Timbu</div>  
        </div>

        {/*mobile view title  */}
        <div className="text-2xl  font-semibold font-inter text-blackColor md:text-white md:hidden">Timbu</div>  
      
      {/* Navabar */}
      <nav className="hidden md:flex md:space-x-4 font-pop">
      <Link to="/" className="p-1 hover:border-b-2 hover:border-white">Home</Link>
      <Link to="product" className="p-1 hover:border-b-2 hover:border-white">Product</Link>
      <Link to="contact" className="p-1 hover:border-b-2 hover:border-white">Contact</Link>
      </nav>
      <a href='#' className="block md:hidden hover:text-primary-color text-white font-bold py-2 px-4 rounded"><img src="/images/cart-icon.svg" alt="cart" /></a>
      <button className="hidden md:flex md:items-center md:gap-2 bg-lightPink hover:bg-[#F5E5FF] hover:text-primary-color hover:font-semibold text-white font-normal  py-2 px-4 rounded "><span>Get Started</span>  <FaArrowRightLong /></button>
    </header>
  );
};

export default Header;
