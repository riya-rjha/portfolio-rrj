import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation().pathname;

  return (
    <div
      className={` ${location === '/' ? "mt-16" : "mt-0"}  min-h-screen bg-[url('https://img.freepik.com/free-vector/monochromatic-hand-painted-background-with-drawn-nature-elements_52683-63007.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] dark:bg-[url('https://img.freepik.com/premium-photo/dark-background-with-silver-blue-pattern-with-words-blue-moon-it_1290686-20842.jpg?ga=GA1.1.448448890.1721050418&semt=ais_hybrid')] bg-cover bg-no-repeat flex flex-col items-center justify-center p-6`}
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800 mb-4 dark:text-purple-400">
          Why Don't You Come Say Hi?
        </h1>
        <p className="text-lg text-gray-800 dark:text-white">
          Any feedback or suggestions, please feel free to drop here a message!
          I'd love to hear from you.
        </p>
      </div>
      <form className="bg-purple-200 dark:bg-white text-black rounded-lg shadow-lg p-8 max-w-lg w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-md font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-md font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="feedback"
            className="block text-md font-semibold mb-2"
          >
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-40 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
