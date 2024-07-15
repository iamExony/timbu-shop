import React, { useContext } from "react";
//motion
import { motion } from "framer-motion";
import { fadeIn } from "../variant";
//cartcontex
import { CartContext } from "../context/CartContext";

const Checkout = () => {
  const { cart, getTotalAmount } = useContext(CartContext);

  const subtotal = getTotalAmount();
  const shipping = 2000; // Assuming a fixed shipping fee
  const orderTotal = subtotal + shipping;

  return (
    <>
      <div className="p-10 bg-[#FFF9F980]">
        <form>
          <h2 className="text-2xl font-bold mb-12 text-headingColor">
            CHECKOUT
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Form Section */}
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="md:w-1/2"
            >
              <p className="text-headingColor font-semibold my-4">
                Billing Information
              </p>
              <div className="mb-4">
                <input
                  placeholder="Fullname"
                  type="text"
                  className="placeholder:text-black w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  placeholder="Address"
                  type="text"
                  className="placeholder:text-black w-full p-2 border rounded"
                  required
                />
              </div>
              <p className="text-headingColor font-semibold my-4">
                Shipping Address
              </p>
              <div className="mb-4">
                <input
                  placeholder="Street"
                  type="text"
                  className="placeholder:text-black  w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  placeholder="City"
                  type="text"
                  className="placeholder:text-black  w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <input
                    placeholder="State"
                    type="text"
                    className="placeholder:text-black  w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <input
                    placeholder="Zip Code"
                    type="text"
                    className="placeholder:text-black w-full p-2 border rounded"
                  />
                </div>
              </div>
              {/* Delivery Schedule */}
              <p className="text-headingColor font-semibold my-4">
                Delivery Schedule
              </p>
              <div className="mb-4">
                <input
                  placeholder="Date"
                  type="date"
                  className="placeholder:text-black w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <select className="w-full p-2 border rounded">
                  <option>Delivery Period</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>
              </div>
              <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                  <input
                    placeholder="Time"
                    type="text"
                    className="placeholder:text-black w-full p-2 border rounded"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    placeholder="Time Range"
                    type="text"
                    className="placeholder:text-black  w-full p-2 border rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  placeholder="Delivery Type"
                  type="text"
                  className="placeholder:text-black  w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full h-40  p-6 border rounded placeholder:text-secondaryColor"
                  placeholder="Kindly drop your instruction"
                ></textarea>
              </div>

              {/* Payment section */}
              <div className="mb-4 ">
                <h4 className="text-xl font-semibold mb-8 mt-16">
                  Method of Payment
                </h4>
                {/* Card Selection */}
                <div className="flex text-sm md:text-xl  gap-8 border-2  border-gray-200 rounded py-4 md:py-8 px-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      className="md:w-4 md:h-4 md:mr-2 accent-primary-color"
                    />{" "}
                    Credit Card
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment"
                      className=" md:w-4 md:h-4 md:mr-2 accent-primary-color"
                    />{" "}
                    Online Payment
                  </label>
                  <img
                    src="/images/cards.svg"
                    alt="cards"
                    className="object-fit md:w-48"
                  />
                </div>
              </div>
              <p>Securely pay with your credit card</p>
              <input
                type="submit"
                value="Confirm Order"
                className="bg-primary-color hover:bg-secondaryColor hover:text-lightPink text-white font-normal py-2 p-6 md:py-4 md:p-8 rounded mt-4 float-end"
              />
            </motion.div>

            {/* Order Summary Section */}
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="md:w-1/2 md:ml-10 bg-[#FAF4FF] py-4 px-4 md:sticky md:top-0 rounded-[5px]"
            >
              <h4 className="text-xl font-semibold my-4 ">Order Summary</h4>
              {cart.map((item) => (
                <div
                  key={item.unique_id}
                  className=" flex flex-col md:items-center md:flex-row rounded-[5px]"
                >
                  <div className="flex items-center gap-2 w-full">
                    <img
                      src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                      alt={item.name}
                      className="w-28 h-28 md:w-16 md:h-16 object-cover rounded mb-4"
                    />
                    <div className="flex flex-col md:flex-row justify-between w-[80%]">
                      <div className="w-full md:40">
                        <h3 className="text-md md:text-[15px] font-normal mb-1 md:w-64">
                          {item.name}
                        </h3>
                        <p className="text-gray-700 font-normal mb-1 text-[16px]">Qty: {item.amount}</p>
                      </div>
                      <p className="text-gray-700">
                        ₦
                        {(item.amount * item.current_price[0].NGN[0]).toFixed(
                          2
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mb-4 mt-8">
                <div className="flex justify-center">
                  <input
                    type="text"
                    className="flex md:flex-1 border rounded-l placeholder:text-black md:w-[454px] md:h-[60px] md:p-4 p-1 w-40"
                    placeholder="Promo Code"
                  />
                  <button className="w-12 md:w-24 text-sm bg-primary-color hover:bg-secondaryColor hover:text-lightPink text-white font-normal p-1 md:py-2 md:px-8 rounded-r">
                    Apply
                  </button>
                </div>
              </div>
              {/* Summary Section */}
              <div className="flex flex-col gap-6 mt-8 ">
                <div className="flex justify-between">
                  <p className="text-xl text-black">Subtotal</p>
                  <p className="text-xl text-black ">₦{subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xl text-black">Shipping</p>
                  <p className="text-xl text-black">₦{shipping.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-xl text-black">Order total</p>
                  <p className="text-xl text-black">₦{orderTotal.toFixed(2)}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
