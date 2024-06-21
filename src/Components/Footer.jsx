import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import {FaHashnode} from 'react-icons/fa6'
import { IoMdMail } from "react-icons/io";

const Footer = () => (
  <footer className="p-4 bg-gray-900 text-white">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
      <div className="text-center md:text-right">
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <a
            href="https://github.com/riya-rjha"
            className="flex items-center text-lg hover:text-orange-500 transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
            <span className="ml-2">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/riya-ranjan-jha-751688249/"
            className="flex items-center text-lg hover:text-orange-500 transition duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
            <span className="ml-2">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/RiyaJha25892"
            className="flex items-center text-lg hover:text-orange-500 transition duration-300"
          >
            <FaTwitterSquare className="w-6 h-6" />
            <span className="ml-2">Twitter</span>
          </a>
          <a
            href="https://hashnode.com/@riyarjha"
            className="flex items-center text-lg hover:text-orange-500 transition duration-300"
          >
            <FaHashnode className="w-6 h-6" />
            <span className="ml-2">Hashnode</span>
          </a>
          <a
            href="mailto:riyaranjanjha2006@gmail.com"
            className="flex items-center text-lg hover:text-orange-500 transition duration-300"
          >
            <IoMdMail className="w-6 h-6" />
            <span className="ml-2">Email</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
