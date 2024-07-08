import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center p-10 bg-gray-800 text-white">
      <p>Contact us</p>
      <div className="flex justify-center space-x-4 my-4">
        <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
        <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
        <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
      </div>
      <div className="mb-4">
        <input type="email" placeholder="Enter email or phone number" className="p-2 border rounded mr-2" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
      </div>
      <p>&copy; 2024 Timbu Shop</p>
    </footer>
  );
};

export default Footer;
