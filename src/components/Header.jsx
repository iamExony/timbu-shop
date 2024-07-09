import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white flex justify-between items-center p-5 md:bg-primary-color text-white">
      <div className='flex gap-2 justify-center items-center'>
        <img src="images/logo.svg" alt="logo" className='hidden md:block' />
        <button onClick={toggleSidebar} className="block md:hidden hover:text-primary-color text-white font-bold py-2 px-4 rounded">
          <img src="/images/bread-icon.svg" alt="cart" />
        </button>
        <div className="hidden text-2xl font-semibold font-inter text-blackColor md:block md:text-white">Timbu</div>
      </div>

      {/* Mobile view title */}
      <div className="text-2xl font-semibold font-inter text-blackColor md:text-white md:hidden">Timbu</div>

      {/* Navbar */}
      <nav className="hidden md:flex md:space-x-4 font-pop">
        <Link to="/" className="p-1 hover:border-b-2 hover:border-white">Home</Link>
        <a href='#product' className="p-1 hover:border-b-2 hover:border-white">Product</a>
        <a href="#contact" className="p-1 hover:border-b-2 hover:border-white">Contact</a>
      </nav>
      <Link to="check" className="block md:hidden hover:text-primary-color text-white font-bold py-2 px-4 rounded">
      <MdShoppingCart className='text-black text-3xl' />
      </Link>
      <button className="hidden md:flex md:items-center md:gap-2 bg-lightPink hover:bg-[#F5E5FF] hover:text-primary-color hover:font-semibold text-white font-normal py-2 px-4 rounded">
        <span>Get Started</span>
        <FaArrowRightLong />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <img src="images/bar-logo.svg" alt="logo" className="w-12 h-12" />
          {/* Close Button */}
          <button onClick={toggleSidebar} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Items */}
        <nav className="flex flex-col p-4 text-headingColor text-lg font-normal">
          <Link to="/" className="py-2 px-4 hover:bg-red-500 hover:text-white">
            Home
          </Link>
          <a href="#product" className="py-2 px-4 hover:bg-red-500 hover:text-white">
            Product
          </a>
          <a href="#contact" className="py-2 px-4 hover:bg-red-500 hover:text-white">
            Contact
          </a>
        </nav>
      </div>
      {/* Sidebar End */}
    </header>
  );
};

export default Header;
