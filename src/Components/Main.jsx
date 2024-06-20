import React from 'react';

const Main = () => (
  <main className="text-center p-4 md:p-8">
    <h1 className="text-2xl md:text-4xl font-bold my-2 md:my-4">
      I'm Riya Ranjan Jha, <span className="text-orange-500">Front End Developer</span>
    </h1>
    <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div className="flex flex-col md:flex-row justify-center mt-4 space-y-2 md:space-y-0 md:space-x-4">
      <button className="bg-orange-500 text-white py-2 px-4 rounded">Portfolio</button>
      <button className="bg-gray-900 text-white py-2 px-4 rounded">Hire me</button>
    </div>
  </main>
);

export default Main;
