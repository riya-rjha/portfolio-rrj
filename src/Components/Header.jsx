import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lightTheme, setLightTheme] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <header className="sticky top-0 flex justify-between items-center p-4 bg-black text-white z-50">
      <a href="">
        <div className="text-lg font-bold logo-name">RRJ</div>
      </a>
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
          <li>
            <a
              href="/"
              className="bg-[#F97316] p-2 rounded-[50px] hover:underline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline p-2 hover:bg-[#F97316] hover:rounded-[50px]"
            >
              About
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/17Yu6ILYwPcngY1b9iyE4NFjJopGMe1Kp/view"
              className="hover:underline p-2 hover:bg-[#F97316] hover:rounded-[50px]"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#project"
              className="hover:underline p-2 hover:bg-[#F97316] hover:rounded-[50px]"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#socials"
              className="hover:underline p-2 hover:bg-[#F97316] hover:rounded-[50px]"
            >
              Socials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:underline p-2 hover:bg-[#F97316] hover:rounded-[50px]"
            >
              Contact
            </a>
          </li>
          {lightTheme ? (
            <li
              onClick={handleTheme}
              className="relative right-2  cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </li>
          ) : (
            <li
              onClick={handleTheme}
              className="relative right-3  cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            </li>
          )}
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
            {lightTheme ? (
              <li onClick={handleTheme}>Activate Dark Mode</li>
            ) : (
              <li onClick={handleTheme}>Activate Light Mode</li>
            )}
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
