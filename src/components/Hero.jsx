import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between pt-4 md:w-[90%] md:mx-auto">
      <div className="text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 md:w-74 flex flex-col gap-2 text-headingColor"><span>Effortless Elegance.</span>  <span>Instant Gratification.</span> </h1>
        <p className="hidden md:block mb-4 text-lightPink font-normal">Seamless Shopping for the discerning customer. Fast finds & instant gratification. Shop Happy!</p>
        <button className="hidden bg-secondaryColor hover:bg-primary-color hover:text-white text-lightPink font-normal py-2 px-4 rounded w-40 md:flex md:gap-2 md:items-center"><span> Shop Now</span> <FaArrowRightLong /></button>
      </div>
      <div className="mt-6 md:mt-0 md:w-1/2">
        <img src="/images/hero.svg" alt="Shopping" className="w-full h-auto" />
      </div>
      {/* shop text and button */}
      <p className="md:hidden m-4 text-lightPink font-normal text-center">Seamless Shopping for the discerning customer. Fast finds & instant gratification. Shop Happy!</p>
      <button className="md:hidden bg-secondaryColor hover:bg-primary-color hover:text-white text-lightPink font-normal py-2 px-4 rounded w-40 flex gap-2 items-center"><span> Shop Now</span> <FaArrowRightLong /></button>
    </section>
  );
};

export default Hero;
