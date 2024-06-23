import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => (
  <footer
    id="socials"
    className="p-4 bg-gray-900 text-white flex items-center justify-center"
  >
    <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
      <div className="text-center md:text-right">
        <div className="flex flex-wrap justify-center md:justify-end gap-12 ">
          <a
            href="https://github.com/riya-rjha"
            className="flex items-center text-lg hover:text-gray-500 transition duration-300"
          >
            <FaGithub className="w-7 h-8 hover:scale-125 transition-transform duration-300 text-white hover:text-gray-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/riya-ranjan-jha-751688249/"
            className="flex items-center text-lg hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin className="w-7 h-8 hover:scale-125 transition-transform duration-300 text-white hover:text-blue-500" />
          </a>
          <a
            href="https://twitter.com/RiyaJha25892"
            className="flex items-center text-lg hover:text-blue-400 transition duration-300"
          >
            <FaTwitterSquare className="w-7 h-8 hover:scale-125 transition-transform duration-300 text-white hover:text-blue-400" />
          </a>
          <a
            href="https://hashnode.com/@riyarjha"
            className="flex items-center text-lg hover:text-teal-500 transition duration-300"
          >
            <FaHashnode className="w-7 h-8 hover:scale-125 transition-transform duration-300 text-white hover:text-teal-500" />
          </a>
          <a
            href="mailto:riyaranjanjha2006@gmail.com"
            className="flex items-center text-lg hover:text-red-500 transition duration-300"
          >
            <IoMdMail className="w-7 h-8 hover:scale-125 transition-transform duration-300 text-white hover:text-red-500" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

