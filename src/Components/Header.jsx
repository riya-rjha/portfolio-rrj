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
    <header className="sticky top-0 flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-lg font-bold">RRJ</div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? (
            <p></p>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg" // HamBurger Icon
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
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
        <ul className="flex space-x-4 text-sm md:text-base">
          <li className="hover:underline">
            <a href="/">Home</a>
          </li>
          <li className="hover:underline">
            <a href="#about">About</a>
          </li>
            <li className="hover:underline">
              <a target="_blank" href="https://drive.google.com/file/d/17Yu6ILYwPcngY1b9iyE4NFjJopGMe1Kp/view">Resume</a>
            </li>
          <li className="hover:underline">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:underline">
            <a href="#contact">Contact</a>
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
        className="fixed inset-0 flex md:hidden bg-gray-900 bg-opacity-95"
      >
        <div className="flex flex-col items-start p-4 w-64 space-y-4">
          <div className="flex justify-end w-full">
            <button
              onClick={closeMenu}
              className="text-white focus:outline-none"
            >
              <p className="text-xl">❌</p>
            </button>
          </div>
          <ul className="flex flex-col space-y-2 text-sm md:text-base">
            <li className="hover:underline">
              <a href="#home">Home</a>
            </li>
            <li className="hover:underline">
              <a href="#about">About</a>
            </li>
            <li className="hover:underline">
              <a href="#services">Services</a>
            </li>
            <li className="hover:underline">
              <a href="#resume">Resume</a>
            </li>
            <li className="hover:underline">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:underline">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
