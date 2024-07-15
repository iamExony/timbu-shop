import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
//motion
import {motion} from 'framer-motion'
import { fadeIn } from '../variant';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between pt-4 md:w-[90%] md:mx-auto my-4">
      <motion.div 
      variants={fadeIn("right", 0.2)}
      initial = "hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.2}}
      className="text-center md:text-left md:flex md:flex-col md:w-[693px]">
        <h1 className="text-3xl text-center md:text-[48px] mb-4 md:text-5xl font-[700] mx-4 md:mx-0 md:w-full flex flex-col gap-4 items-center md:items-start text-headingColor">
            <span >Effortless Elegance.</span>
            <span>Instant Gratification.</span>
            </h1>
        <div>
        <p className="hidden md:w-[399px] md:leading-[25px] md:block mb-4 text-lightPink font-normal">Seamless Shopping for the discerning customer. Fast finds & instant gratification. Shop Happy!</p>
        <Link to='/products' className="hidden bg-secondaryColor hover:bg-primary-color hover:text-white text-lightPink font-normal py-2 px-4 rounded w-40 md:flex md:gap-2 md:items-center"><span> Shop Now</span> <FaArrowRightLong /></Link>
      </div>
      </motion.div>

      <motion.div
          variants={fadeIn("left", 0.5)}
          initial = "hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.2}} 
      className="mt-6 md:mt-0 md:w-1/2">
      
        <img src="/images/hero.svg" alt="Shopping" className="w-full h-auto" />
      </motion.div>
      {/* shop text and button */}
      <p className="md:hidden m-4 text-lightPink font-normal text-center">Seamless Shopping for the discerning customer. Fast finds & instant gratification. Shop Happy!</p>
      <button className="md:hidden bg-secondaryColor hover:bg-primary-color hover:text-white text-lightPink font-normal py-2 px-4 rounded w-40 flex gap-2 items-center">
        <Link to='/products'> Shop Now</Link> <FaArrowRightLong /></button>
    </section>
  );
};

export default Hero;
