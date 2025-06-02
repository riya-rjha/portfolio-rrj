// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  const [lightMode, setLightMode] = useState(false);

  const toggleSwitch = () => setLightMode(!lightMode);

  return (
    <div>
      <div className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.2,
            duration: 0.8,
          }}
          className="navbar-glass rounded-full px-4 md:px-8 py-3 md:py-4 w-[85vw] max-w-[45rem]"
        >
          <div className="flex justify-evenly items-center text-xs md:text-base font-medium text-white bg-transparent">
            {[
              { label: "Projects", path: "/projects" },
              { label: "Articles", path: "/articles" },
              { label: "Web Designs", path: "/designs" },
              { label: "Skills", path: "/skill" },
            ].map((item, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={` transition-all duration-300 px-2 bg-transparent ${
                  isActive(item.path)
                    ? "text-purple-400 border-b-2 border-purple-400 pb-1"
                    : "hover:text-purple-400"
                }`}
              >
                <Link to={item.path} className="text-inherit no-underline">
                  {item.label}
                </Link>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Simple Theme Toggle Button */}
      <div className="fixed top-4 md:top-6 right-4 md:right-6 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.4,
            duration: 0.8,
          }}
          className={`navbar-glass bg-transparent px-4 py-3 md:py-4 transition-colors duration-500 cursor-none ${
            lightMode
              ? "backdrop-blur-md border border-purple-500/20"
              : "backdrop-blur-md border border-gray-200/20"
          }`}
        >
          <motion.button
            className={`relative w-12 h-6 cursor-none rounded-full transition-colors duration-300 ${
              lightMode
                ? "bg-gradient-to-r from-purple-600 to-blue-600"
                : "bg-gray-300"
            }`}
            onClick={toggleSwitch}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`absolute top-0.5 w-5 h-5 rounded-full shadow-lg transition-colors duration-300 ${
                lightMode ? "bg-white" : "bg-gray-600"
              }`}
              animate={{
                x: lightMode ? 24 : 2,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
