import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 flex justify-between items-center p-6 bg-[#9b9b9b9e] bg-opacity-5 backdrop-filter backdrop-blur-lg text-white shadow-lg z-50">
      <a href="">
        <div className="text-2xl text-black font-extrabold tracking-wide logo-name">RRJ</div>
      </a>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <p></p>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex space-x-6 text-base">
          <li>
            <a
              href="/"
              className="px-4 py-2 bg-white text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-4 py-2 text-black font-semibold rounded-full hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out"
            >
              About
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1Xw2xbtsP8I8_NiQ1GbhDdyoymxeTSw13/view?usp=sharing"
              className="px-4 py-2 text-black font-semibold rounded-full hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="px-4 py-2 text-black font-semibold rounded-full hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#articles"
              className="px-4 py-2 text-black font-semibold rounded-full hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="px-4 py-2 text-black font-semibold rounded-full hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="#socials"
              className="px-4 py-2 text-black font-semibold rounded-full hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Socials
            </a>
          </li>
        </ul>
      </nav>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform -translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform -translate-x-full opacity-0"
        className="fixed inset-0 flex md:hidden bg-gray-900 bg-opacity-90"
      >
        <div className="flex flex-col items-start p-6 w-64 space-y-4">
          <div className="flex justify-end w-full">
            <button
              onClick={closeMenu}
              className="text-white focus:outline-none"
            >
              <p className="text-2xl">❌</p>
            </button>
          </div>
          <ul className="flex flex-col space-y-4 text-base text-white">
            <li className="hover:underline">
              <a href="#home" className="px-4 py-2">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#about" className="px-4 py-2">About</a>
            </li>
            <li className="hover:underline">
              <a href="https://drive.google.com/file/d/1ZQmQpFa8dzoM6tVPccr0tD_0GrYTg4gT/view" className="px-4 py-2">Resume</a>
            </li>
            <li className="hover:underline">
              <a href="#project" className="px-4 py-2">Projects</a>
            </li>
            <li className="hover:underline">
              <a href="#articles" className="px-4 py-2">Articles</a>
            </li>
            <li className="hover:underline">
              <a href="#experience" className="px-4 py-2">Experience</a>
            </li>
            <li className="hover:underline">
              <a href="#socials" className="px-4 py-2">Socials</a>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
