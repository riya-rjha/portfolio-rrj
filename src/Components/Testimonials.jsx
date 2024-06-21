import React, { useState } from "react";

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For testing purposes, you can remove this later
    // Implement logic to send formData to backend or wherever needed
  };

  return (
    <section className="p-8 text-gray-900">
      <h2 className="text-3xl font-bold mb-4">Leave Your Feedback</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-bold mb-1 text-orange-800">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 bg-gray-100 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold mb-1 text-orange-800">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 bg-gray-100 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label htmlFor="message" className="font-bold mb-1 text-orange-800">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="p-3 bg-gray-100 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent w-full"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-orange-700 text-white py-2 px-6 rounded hover:bg-orange-600 transition duration-300"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </section>
  );
};

export default Testimonials;
