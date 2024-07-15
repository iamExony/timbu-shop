import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from '../context/CartContext';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Header = () => {
  const { cart } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [count, setCount] = useState(1); // Assuming count state is for something else

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Ensure cart is defined before calling reduce
  const totalItems = cart ? cart.reduce((total, item) => total + item.amount, 0) : 0;

  return (
    <header className="bg-white md:bg-primary-color text-white md:text-white top-0 left-0 right-0 z-50 px-4 py-3 md:px-10 md:py-4 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="hidden md:block w-10 h-10"
        />
        <button
          onClick={toggleSidebar}
          className="block md:hidden hover:text-primary-color text-white font-bold py-2 px-4 rounded"
        >
          <img src="/images/bread-icon.svg" alt="menu" />
        </button>
        <div className="hidden text-2xl font-semibold font-inter text-blackColor md:block md:text-white">
          Timbu
        </div>
      </div>

      {/* Mobile view title */}
      <div className="text-2xl font-semibold font-inter text-blackColor md:text-white md:hidden">
        Timbu
      </div>

      {/* Navbar Desktop*/}
      <nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className="hidden md:flex md:gap-8 font-pop text-lg"
      >
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <NavLink
            to="/"
            className="p-2 hover:border-b-2 hover:border-white"
            activeClassName="border-b-2 border-white"
            exact
          >
            Home
          </NavLink>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 hover:border-b-2 hover:border-white"
        >
          <NavLink
            to="/products"
            className="p-2 hover:border-b-2 hover:border-white"
            activeClassName="border-b-2 border-white"
          >
            Product
          </NavLink>
        </motion.button>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#contact"
          className="p-2 hover:border-b-2 hover:border-white"
        >
          Contact
        </motion.a>
      </nav>

      <div className="flex items-center gap-4">
        <Link
          to="/shop"
          className="hover:text-primary-color text-white font-bold py-2 px-4 rounded"
        >
          <div className="relative">
            <img
              src="/images/cart-icon.svg"
              className="block md:hidden h-8 w-8"
            />
            {/* Circle div for mobile view */}
            <div className="md:hidden absolute w-[20.54px] h-[20.54px] -top-1 -right-2 -mt-1 -mr-2 p-1 text-xs font-medium bg-black text-white flex items-center justify-center rounded-full">
              {totalItems}
            </div>
          </div>
          <div className="hidden md:block">
            <span className="relative">
              <img
                src="/images/cart-icon2.svg"
                className="relative h-8 w-8"
              />
              {/* Circle div for desktop view */}
              <div className="absolute w-[20.54px] h-[20.54px] -top-1 -right-2 -mt-1 -mr-2 p-[8.4px] text-xs font-medium bg-red-500 text-white flex items-center justify-center rounded-full">
                {totalItems}
              </div>
            </span>
          </div>
        </Link>

        <button className="hidden md:flex items-center gap-2 bg-lightPink hover:bg-[#F5E5FF] hover:text-primary-color hover:font-semibold text-white font-normal py-2 px-4 rounded">
          <Link to='/products'>Get Started</Link>
          <FaArrowRightLong />
        </button>
      </div>
    </header>
  );
};

export default Header;
