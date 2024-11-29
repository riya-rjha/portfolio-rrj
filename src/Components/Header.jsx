import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import ThemeToggle from "./ThemeToggleHead";
import ThemeToggleHamBurger from "./ThemeToggleHamBurger";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation().pathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 flex justify-between items-center p-6  bg-opacity-60 backdrop-blur-md text-white shadow-lg z-50 bg-purple-800 dark:bg-opacity-70 dark:text-white dark:bg-purple-200">
      <Link to="/">
        <div className="text-2xl text-black font-extrabold tracking-wide logo-name dark:text-black">
          RRJ
        </div>
      </Link>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white dark:text-black focus:outline-none"
        >
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
            <Link
              to="/"
              className="px-4 py-2 dark:text-white dark:bg-purple-600 bg-white text-purple-600 rounded-full hover:bg-purple-600 hover:text-white dark:hover:text-white dark:hover:bg-black transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>

          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1U2ShHk63sIz6AXO7hti7NOxo7zRweOqA/view?usp=sharing"
              className="px-4 py-2  text-white rounded-full hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out dark:hover:bg-purple-600 dark:hover:text-white dark:text-black"
            >
              Resume
            </a>
          </li>
          <li>
            <Link
              to="/project"
              className="px-4 py-2  text-white rounded-full hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out dark:hover:bg-purple-600 dark:hover:text-white dark:text-black"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/articles"
              className="px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition text-white duration-300 ease-in-out dark:hover:bg-purple-600 dark:hover:text-white dark:text-black"
            >
              Articles
            </Link>
          </li>
          {location !== "/" ? (
            <li>
              <Link
                to="/#experience"
                className="px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition text-white duration-300 ease-in-out dark:hover:bg-purple-600 dark:hover:text-white dark:text-black"
              >
                Experiences
              </Link>
            </li>
          ) : (
            <li>
              <a
                href="#experience"
                className="px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition text-white duration-300 ease-in-out dark:hover:bg-purple-600 dark:hover:text-white dark:text-black"
              >
                Experiences
              </a>
            </li>
          )}

          <li>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full hover:bg-white hover:text-purple-600 transition text-white duration-300 ease-in-out dark:hover:bg-purple-600 dark:hover:text-white dark:text-black"
            >
              Contact
            </Link>
          </li>
          <ThemeToggle />
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
        className="fixed w-full inset-0 z-50 flex md:hidden"
      >
        <div className="flex flex-col items-start p-6 w-64 h-fit bg-black bg-opacity-70 backdrop-blur-md text-white space-y-4">
          <div className="flex items-start justify-end w-full">
            <button onClick={closeMenu} className="focus:outline-none">
              <p className="text-2xl">❌</p>
            </button>
          </div>
          <ul className="flex flex-col space-y-4 text-base">
            <li className="hover:underline transition ease-in-out duration-200">
              <Link to="/" className="px-4 py-2 text-2xl">
                Home
              </Link>
            </li>

            <li className="hover:underline transition ease-in-out duration-200">
              <a
                href="https://drive.google.com/file/d/1U2ShHk63sIz6AXO7hti7NOxo7zRweOqA/view?usp=sharing"
                className="px-4 py-2 text-2xl"
              >
                Resume
              </a>
            </li>
            <li className="hover:underline transition ease-in-out duration-200">
              <Link to="/project" className="px-4 py-2 text-2xl">
                Projects
              </Link>
            </li>
            <li className="hover:underline transition ease-in-out duration-200">
              <Link to="/articles" className="px-4 py-2 text-2xl">
                Articles
              </Link>
            </li>
            <li className="hover:underline transition ease-in-out duration-200">
              <Link to="/#experience" className="px-4 py-2 text-2xl">
                Experience
              </Link>
            </li>
            <li className="hover:underline transition ease-in-out duration-200">
              <Link to="/contact" className="px-4 py-2 text-2xl">
                Contact
              </Link>
            </li>
            <ThemeToggleHamBurger />
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
