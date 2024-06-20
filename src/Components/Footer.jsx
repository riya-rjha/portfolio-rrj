import React from 'react';

const Footer = () => (
  <footer className="p-8 bg-gray-900 text-white">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h3 className="text-xl font-bold">Lets Connect there</h3>
        <button className="bg-orange-500 text-white py-2 px-4 rounded mt-2">Hire me</button>
      </div>
      <div className="text-center md:text-right">
        <h3 className="text-xl font-bold">Contact</h3>
        <p>Phone: +91 7788965336</p>
        <p>Email: at@gmail.com</p>
      </div>
    </div>
    <p className="text-center mt-8">© 2023 Jayesh. All rights reserved.</p>
  </footer>
);

export default Footer;
