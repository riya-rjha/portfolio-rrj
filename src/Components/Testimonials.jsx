import React from 'react';

const Testimonials = () => (
  <section className="p-8 bg-gray-900 text-white">
    <h2 className="text-3xl font-bold mb-4">Testimonials That Speak to My Results</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array(3).fill().map((_, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded">
          <p className="text-lg">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          <div className="flex items-center mt-2">
            <img src="/images/testimonial.jpg" alt="testimonial" className="w-12 h-12 rounded-full mr-4"/>
            <div>
              <p className="font-bold">Jayesh Patil</p>
              <p className="text-gray-400">CEO, Lirante</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
