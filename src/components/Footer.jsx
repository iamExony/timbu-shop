import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { fadeIn } from '../variant';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id='contact' className="bg-black text-white">
      <div
          className="flex flex-col items-center p-10 bg-black text-white"
          >
      <motion.p
        variants={fadeIn("left",0.2)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}} 
      >Contact us</motion.p>
      <motion.div
          variants={fadeIn("right",0.2)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.2}} 
       className="flex justify-center space-x-4 my-2">
        <a href="https://web.facebook.com/onyemaechi.anthony.750/" className="hover:text-primary-color"><FaFacebookF /></a>
        <a href="https://x.com/EzeOnyemaechi51" className="hover:text-primary-color"><FaTwitter /></a>
        <a href="https://www.instagram.com/evelyn_ebunoluwa_vibez/" className="hover:text-primary-color"><FaInstagram /></a>
      </motion.div>
      <motion.p
        variants={fadeIn("right",0.2)}
        initial = "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}  
      className='my-2 text-center'>Contact us for any details or kindly enter your details below</motion.p>
        <form className="flex mb-8">
        <input type="email" placeholder="Enter email or phone number" className="text-sm text-black px-2 rounded-l placeholder:text-primary-color w-64" />
        <input type='submit' value={'Send'}  className="bg-primary-color hover:bg-[#E38585] hover:text-primary-color text-white font-bold py-2 px-4 rounded-r" />
      </form>
      <p>&copy; 2024 Timbu Shop</p>
      </div>
    </footer>
  );
};

export default Footer;
