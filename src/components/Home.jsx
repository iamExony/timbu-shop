import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
   {/*  Header section */}
    <section>
      {/* logo */}
      <div className='bg-[#AF0101] w-full h-16'>
        <img src="/images/logo.png" alt="logo" className='w-28'/>
      </div>
        {/* Navbar */}
        <nav className="flex space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/shop" className="hover:text-gray-400">Shop</Link>
        <Link to="/about" className="hover:text-gray-400">About Us</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
      </nav>
      {/* Button */}
      <div>
        <Link to="/get-started" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </Link>
        </div>
    </section>
    </>
  )
}

export default Home