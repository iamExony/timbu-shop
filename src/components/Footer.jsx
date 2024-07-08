import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-10 bg-black text-white">
      <p>Contact us</p>
      <div className="flex justify-center space-x-4 my-2">
        <a href="https://web.facebook.com/onyemaechi.anthony.750/" className="hover:text-primary-color"><FaFacebookF /></a>
        <a href="https://x.com/EzeOnyemaechi51" className="hover:text-primary-color"><FaTwitter /></a>
        <a href="https://www.instagram.com/evelyn_ebunoluwa_vibez/" className="hover:text-primary-color"><FaInstagram /></a>
      </div>
      <p className='my-2 text-center'>Contact us for any details or kindly enter your details below</p>
      <div className="flex mb-8">
        <input type="email" placeholder="Enter email or phone number" className="text-sm px-2 rounded-l placeholder:text-primary-color w-64" />
        <button className="bg-primary-color hover:bg-[#E38585] hover:text-primary-color text-white font-bold py-2 px-4 rounded-r">Send</button>
      </div>
      <p>&copy; 2024 Timbu Shop</p>
    </footer>
  );
};

export default Footer;
