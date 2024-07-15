import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      {/* Desktop View */}
      <footer
        id="contact"
        className="hidden md:block bg-black text-white overflow-hidden"
      >
        <div className="flex flex-col items-center p-10 bg-black text-white">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row justify-between mb-10">
              <div className="mb-8 md:mb-0">
                <div className="flex flex-col items-start">
                  <div className="mb-4 flex gap-4">
                  <img
          src="/images/logo.svg"
          alt="logo"
          className="md:block w-8 h-8"
        />
                    <h2 className="text-2xl font-bold">Timbu</h2>
                  </div>
                  <div>
                    <p>Quality products. Unbeatable prices</p>
                    <p>N0, 1 Lorem street, good and mercy shall follow me.</p>
                  </div>
                </div>
              </div>
              <div className="mb-8 md:mb-0">
                <h3 className="font-semibold mb-2">Quick Links</h3>
                <ul>
                  <li className="mb-1">
                    <a href="#" className="hover:text-primary-color">
                      Home
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="hover:text-primary-color">
                      Products
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="hover:text-primary-color">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-8 md:mb-0">
                <h3 className="font-semibold mb-2">Support</h3>
                <ul>
                  <li className="mb-1">
                    <a href="#" className="hover:text-primary-color">
                      Help Center
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="hover:text-primary-color">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Contacts</h3>
                <ul>
                  <li className="flex items-center mb-2">
                    <FaEnvelope className="mr-2" />
                    <a
                      href="mailto:ezeonyemaechianthony@gmail.com"
                      className="hover:text-primary-color"
                      target="_blank"
                    >
                      Email us
                    </a>
                  </li>
                  <li className="flex">
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="text-sm text-black px-2 rounded-l placeholder:text-primary-color w-48"
                    />
                    <button className="bg-primary-color hover:bg-[#E38585] hover:text-primary-color text-white font-bold py-2 px-4 rounded-r">
                      Subscribe
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <hr className="w-full border-t border-gray-600 mb-6" />

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-center w-full"
          >
            <div className="flex justify-center md:items-start space-x-4 mb-4 md:mb-0">
              <a
                href="https://web.facebook.com/onyemaechi.anthony.750/"
                className="hover:text-primary-color"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/EzeOnyemaechi51"
                className="hover:text-primary-color"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/evelyn_ebunoluwa_vibez/"
                className="hover:text-primary-color"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="text-center">
              &copy; All Rights Reserved. Timbu Store 2024
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Mobile view */}
      <footer id="contact" className="block md:hidden bg-black text-white overflow-hidden">
        <div className="flex flex-col items-center p-10 bg-black text-white">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row justify-between mb-10">
              <div className="mb-8 md:mb-0">
                <div className="flex flex-col items-center">
                  <div className="mb-4 flex gap-4">
                    <img
                      src="/images/logo.svg"
                      alt="logo"
                      className="md:block w-8 h-8"
                    />
                    <h2 className="text-2xl font-bold">Timbu</h2>
                  </div>
                  <div className="text-center">
                    <p>Quality products. Unbeatable prices</p>
                    <p>N0, 1 Lorem street, good and mercy shall follow me.</p>
                  </div>
                </div>
              </div>

              <section className="flex justify-between">
                <div className="mb-8 md:mb-0">
                  <h3 className="font-semibold mb-2">Quick Links</h3>
                  <ul>
                    <li className="mb-1">
                      <a href="#" className="hover:text-primary-color">
                        Home
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-primary-color">
                        Products
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-primary-color">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mb-8 md:mb-0">
                  <h3 className="font-semibold mb-2">Support</h3>
                  <ul>
                    <li className="mb-1">
                      <a href="#" className="hover:text-primary-color">
                        Help Center
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-primary-color">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Contact Section */}
              <section className="flex justify-between">
                <div>
                  <h3 className="font-semibold mb-2">Contacts</h3>
                  <ul>
                    <li className="flex items-center mb-2">
                      <FaEnvelope className="mr-2" />
                      <a
                        href="mailto:ezeonyemaechianthony@gmail.com"
                        className="hover:text-primary-color"
                        target="_blank"
                      >
                        Email us
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Follow us */}
                <div>
                  <h3 className="font-semibold mb-2">Follow Us</h3>
                  <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.2 }}
                    className=" w-full"
                  >
                    <div className="flex justify-start items-start space-x-4 mb-4 ">
                      <a
                        href="https://web.facebook.com/onyemaechi.anthony.750/"
                        className="hover:text-primary-color"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href="https://x.com/EzeOnyemaechi51"
                        className="hover:text-primary-color"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href="https://www.instagram.com/evelyn_ebunoluwa_vibez/"
                        className="hover:text-primary-color"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </section>
            </div>
          </motion.div>
          <div className="flex mb-8">
            <input
              type="email"
              placeholder="Enter email"
              className="text-sm text-black px-2 rounded-l placeholder:text-primary-color "
            />
            <button className="bg-primary-color hover:bg-[#E38585] hover:text-primary-color text-white font-bold py-2 px-4 rounded-r">
              Subscribe
            </button>
          </div>
          <hr className="w-full border-t border-gray-600 mb-6" />
          <p className="text-center">
            &copy; All Rights Reserved. Timbu Store 2024
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
