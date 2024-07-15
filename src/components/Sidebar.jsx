import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Sidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden"
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

      {/* Navbar Items mobile*/}
      <nav className="flex flex-col p-4 text-headingColor text-lg font-normal">
        <motion.button
          className="text-left py-2 px-4 hover:bg-red-500 hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/" onClick={toggleSidebar}>
            Home
          </Link>
        </motion.button>
        <motion.span
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="py-2 px-4 hover:bg-red-500 hover:text-white"
          onClick={toggleSidebar}
        >
          <Link to="/products">Product</Link>
        </motion.span>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="#contact"
          className="py-2 px-4 hover:bg-red-500 hover:text-white"
          onClick={toggleSidebar}
        >
          Contact
        </motion.a>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
