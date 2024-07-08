import React from 'react';

const Modal = ({ product, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <div className="flex items-center mb-4">
          <img src={product.image} alt={product.title} className="w-24 h-24 object-cover rounded mr-4" />
          <div>
            <h3 className="text-xl font-bold">{product.title}</h3>
            <p className="text-gray-700">{product.amount}</p>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700">Quantity:</label>
          <input type="number" id="quantity" name="quantity" defaultValue="1" min="1" className="w-full p-2 border rounded" />
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={closeModal} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Continue Shopping</button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">View Cart</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
